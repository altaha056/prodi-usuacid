/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import ArticleModel, { ArticleMaker } from '@/models/article';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleList from '@/page-components/common/fasilitas-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import { useTransition, animated, config } from 'react-spring';
import article from 'pages/api/article';
import ReactGA from 'react-ga';

interface Props {
  photos: string[];
}

export async function getStaticPaths(): Promise<any> {
  return {
    paths: [{ params: { language: 'id' } }, { params: { language: 'en' } }],
    fallback: true,
  };
}

export const getStaticProps = async (
  context: Record<string, any>
): Promise<any> => {
  const lang = await checkLanguage(context.params.language);
  if (lang.redirect) {
    return {
      redirect: {
        destination: `/${lang.value}`,
        permanent: false,
      },
    };
  }
  try {
    const response = await axios.get(
      `/photos?lang=${context.params.language}&selected=true&menu=article&category_id=606c15097d855511efa35bea&limit=100&`
    );

    return {
      props: {
        photos: response.data.data,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        photos: [],
      } as Props,
      revalidate: 30,
    };
  }
};

const ArticlePage: NextPage<Props> = ({ photos }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/article?lang=${language}&selected=true&category_id=606c15097d855511efa35bea&limit=100&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<ArticleModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);
  console.log('URL ', url);

  // infinite scroll //
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setFetchUrl(`${url}page=${nextPage}`);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(
    handleLoadMore,
    'article-item'
  );

  useEffect(() => {
    setIsFetching(false);
  }, [researches]);

  // create data //
  const createResearch = () => {
    console.log(`test ${researchesRes.data.data}`);
    const temp = researchesRes.data.data?.map((research: any) =>
      ArticleMaker.create(research)
    );
    if (typeof researches === 'undefined') {
      setResearches(temp);
    } else {
      setResearches([...researches, ...temp]);
    }
  };

  useEffect(() => {
    if (researchesRes) {
      setTimeout(createResearch, 1000);
      setTotalresearch(researchesRes.data.totalItems);
    }
  }, [researchesRes]);

  useEffect(() => {
    if (error) {
      setResearches([]);
    }
  }, [error]);

  const LoadMore = () => {
    if (typeof researches !== 'undefined') {
      return isFetching && totalresearch > researches?.length ? (
        <div className="d-flex justify-content-center mt-3">
          <img src="/images/spinner.gif" alt="spinner" />
        </div>
      ) : null;
    }
    return null;
  };
  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.kehidupanKampus)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>

      <section className="section-page schome-pengabdian section-page--pt-0">
        <section
          className="above-the-fold"
          style={{ backgroundImage: `url(/images/CL1.jpg)` }}
        >
          <div className="container">
            <div className="page-desc col-md-7">
              <div className="section-subtittle__subtitle">Campus Life</div>
              <div className="section-subtittle__detail">
                Develop your own capacity through initiation and positive and
                creative ideas through various activities that are relevant to
                the vision and mission of Universitas Sumatera Utara.
              </div>
            </div>
          </div>
        </section>

        <section className="above-campus">
          <div className="container">
            <div className="page-desc">
              <div className="page-img" style={{ paddingTop: '10px' }}>
                <img src="/images/CL2.jpg" alt="" height="100%" width="100%" />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-campus">
          <div className="section-campus__wrapper">
            <div className="row">
              <div className=" col-md-4">
                <div className="section-campus__campuslife">88</div>
                <div className="section-campus__campusdetail">
                  Registered USU Student Activity Unit.
                </div>
                <div className=" col-md-4">
                <div className="section-campus__campuslife">
                  100<sup>+</sup>
                </div>
                <div className="section-campus__campusdetail">
                  Community Empowerment Program organized by UKM and Student
                  Association.
                </div>
                <div className=" col-md-4">
                <div className="section-campus__campuslife">
                  5K<sup>+</sup>
                </div>
                <div className="section-campus__campusdetail">
                  Students living in Student Dormitory.
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section-facility">
          <div className="section-facility_wrapper">
            <div className="row">
              <div className="col-md-5">
                <div className="section-facility__title">Campus Facilities</div>
              </div>
              <div className="col-md-7 justify-content-left text-left">
                <div className="section-facility__detail">
                  Supporting facilities for student learning activities and
                  facilities supporting student activities to be creative and
                  expressive.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" container section-studies section-page">
          <div className="container">
            <div className="gallery">
              <div className="row">
                {typeof researches === 'undefined'
                  ? [...Array(4)].map((_, index) => (
                      <ArticleLoader key={index} />
                    ))
                  : researches.map((item) => (
                      // eslint-disable-next-line react/jsx-indent
                      <ArticleList
                        key={item.id}
                        {...item}
                        language={language}
                      />
                    ))}
                <LoadMore />
              </div>
            </div>
          </div>
        </section>
        <section className="section-counceling">
          <div className="section-counceling_wrapper">
            <div className="row">
              <div className="col-md-8">
                <div className="section-counceling__title">
                  Student Counseling Service
                </div>
              </div>
              <div className="col-md-7 justify-content-left text-left">
                <div className="section-counceling__detail">
                  Psychological consulting services for students who are cared
                  for directly by experienced professionals.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-faculty-intro">
          <div className="faculty-intro__image">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <img src="/images/CL3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img src="/images/CL4.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img src="/images/CL5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ArticlePage;
