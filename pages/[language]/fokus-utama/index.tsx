/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage, Redirect } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainFocusModel, { MainFocusMaker } from '@/models/main-focus';
import { ArticleLoader } from '@/page-components/common/loader';
import ArticleList from '@/page-components/common/article-list-main-focus-index';
import useInfiniteScroll from 'helpers/infinite-scroll';
import LoadingSSO from '@/page-components/common/loading';
import axios from '@/config/axios';
import { useTransition, animated, config } from 'react-spring';
import article from 'pages/api/article';
import ReactGA from 'react-ga';
import useSWR from 'swr';

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
      `/photos?lang=${context.params.language}&selected=true&menu=main-focus`
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

const ResearchPage: NextPage<Props> = ({ photos = [] }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/main-focus?lang=${language}&selected=true&limit=50&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<MainFocusModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);

  if ([typeof photos].includes('undefined') || router.isFallback) {
    return <LoadingSSO />;
  }

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
    const temp = researchesRes.data.data?.map((research: any) =>
      MainFocusMaker.create(research)
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

  // random photos //
  // const [indexPhoto, setPhoto] = useState(0);
  // const transitions = useTransition(photos[indexPhoto], (item) => item, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: config.molasses,
  // });
  /* useEffect(
    // eslint-disable-next-line no-void
    () => void setInterval(() => setPhoto((state) => (state + 1) % 10), 5000),
    []
  ); */

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.mainFocus)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftc-no-pb ftco-section--top">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-0">
              <a className="subheading" style={{ color: '#000000' }} href="/">
                {getKeyValue(sentences.beranda_content)(
                  selectLanguage(language)
                )}{' '}
                / {''}
              </a>
              <a className="hijau" href="">
                {getKeyValue(sentences.mainFocus_content)(
                  selectLanguage(language)
                )}
              </a>
              <h2 className="mb-4 judul-laman">
                {getKeyValue(sentences.mainFocus_content)(
                  selectLanguage(language)
                )}
              </h2>
            </div>
          </div>
          <div className="row another-articles">
            <div className="container">
              {typeof researches === 'undefined'
                ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
                : researches.map((item) => (
                    // eslint-disable-next-line react/jsx-indent
                    <ArticleList key={item.id} {...item} language={language} />
                  ))}
              {/* <LoadMore /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchPage;
