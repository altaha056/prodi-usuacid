/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import FigureModel, { FigureMaker } from '@/models/figure';
import { ArticleLoader } from '@/page-components/common/loader';
import ArticleList from '@/page-components/common/tokoh-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import { useTransition, animated, config } from 'react-spring';
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
      `/photos?lang=${context.params.language}&menu=figure`
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
  const url = `/figure?lang=${language}&limit=1&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<FigureModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);

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
      FigureMaker.create(research)
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

  // random photos //
  const [indexPhoto, setPhoto] = useState(0);
  const transitions = useTransition(photos[indexPhoto], (item) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    // eslint-disable-next-line no-void
    () => void setInterval(() => setPhoto((state) => (state + 1) % 10), 5000),
    []
  );

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.risetUnggulan)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <div className="container pb-3 pt-4">
        <div className="row mt-5 cml">
          <div className="col-md mt-3">
            <div className="article-title">
              <div>
                <h2>Tokoh</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mr-4 ml-3" style={{ height: 450 }}>
            {transitions.map(({ item, props, key }) => (
              <animated.div
                key={key}
                className="article-random-image"
                style={{
                  ...props,
                  backgroundImage: `url(${item})`,
                }}
              />
            ))}
          </div>
          <div className="col-md" id="article-item">
            <p className="article-description with-border">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful.
            </p>

            <div className="col-md">
              {typeof researches === 'undefined'
                ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
                : researches.map((item) => (
                    // eslint-disable-next-line react/jsx-indent
                    <ArticleList key={item.id} {...item} language={language} />
                  ))}
              <LoadMore />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchPage;
