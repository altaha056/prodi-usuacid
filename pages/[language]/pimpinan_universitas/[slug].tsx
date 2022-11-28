/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-danger */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import LeaderModel, { LeaderMaker } from '@/models/leader';
import { ArticleLoader } from '@/page-components/common/loader';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import ScrollAnimation from 'react-animate-on-scroll';
import dateFormat from '@/config/dateformat';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import ReactGA from 'react-ga';

interface Props {
  leader: LeaderModel | null;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=leader'),
      axios.get('/slug/all?lang=en&menu=leader'),
    ]);

    const idParams = response[0].data.data.map((slug: string) => {
      return { params: { language: 'id', slug } };
    });

    const enParams = response[1].data.data.map((slug: string) => {
      return { params: { language: 'en', slug } };
    });

    return {
      paths: [...idParams, ...enParams],
      fallback: true,
    };
  } catch (_) {
    return {
      paths: [
        { params: { language: 'id', slug: '-' } },
        { params: { language: 'en', slug: '-' } },
      ],
      fallback: true,
    };
  }
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
    const response = await axios.get(`/leader/${context.params.slug}`);
    const leader = LeaderMaker.create(response.data.data) || null;

    return {
      props: {
        leader,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        leader: null,
      } as Props,
      revalidate: 30,
    };
  }
};

const ResearchDetailPage: NextPage<Props> = ({ leader }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  // console.log(leader);
  const router = useRouter();
  const { language } = router.query;
  const url = `/leader?lang=${language}&limit=10&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<LeaderModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);

  if ([typeof leader].includes('undefined') || router.isFallback) {
    useEffect(() => {
      router.push(`/${language}`);
    });
    // return <LoadingSSO />;
  }

  // infinite scroll //
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setFetchUrl(`${url}page=${nextPage}`);
  };

  // const [isFetching, setIsFetching] = useInfiniteScroll(
  //   handleLoadMore,
  //   'article-item'
  // );

  // useEffect(() => {
  //   setIsFetching(false);
  // }, [researches]);

  // create data //
  const createResearch = () => {
    const temp = researchesRes.data.data?.map((rs: any) =>
      LeaderMaker.create(rs)
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

  // const LoadMore = () => {
  //   if (typeof researches !== 'undefined') {
  //     return isFetching && totalresearch > researches?.length ? (
  //       <div className="d-flex justify-content-center mt-3">
  //         <img src="/images/spinner.gif" alt="spinner" />
  //       </div>
  //     ) : null;
  //   }
  //   return null;
  // };

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.pimpinan_univ)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftc-no-pb ftco-section--article-page ftco-section--top">
        <div className="container">
          {/* ROW 1 HEADING */}
          <div className="row no-gutters">
            <div className="col-md-0">
              <a className="subheading" style={{ color: '#000000' }} href="/">
                BERANDA /
              </a>
              <a className="hijau" href="">
                PIMPINAN UNIVERSITAS
              </a>
              <h2 className="mb-4 judul-laman">PIMPINAN UNIVERSITAS</h2>
            </div>
          </div>
          <div className="ml-5" />
          {/* ROW 2 IMAGE */}
          <div className="col-md-0">
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div className="heading-section mb-3 pl-md-0">
                <h3 className="heading-section" style={{ textAlign: 'center' }}>
                  {leader ? leader.name : ''}
                </h3>
                <p>
                  <strong>
                    <img
                      src={leader?.image}
                      alt={leader?.title}
                      style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '200px',
                      }}
                    />
                  </strong>
                </p>
              </div>
            </ScrollAnimation>
          </div>
          {/* ROW 3 BODY */}
          <div className="row no-gutters">
            <div className="hheading-section mb-3 pl-md-0">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <div
                  className="article-description"
                  dangerouslySetInnerHTML={{
                    __html: leader?.description || '',
                  }}
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchDetailPage;
