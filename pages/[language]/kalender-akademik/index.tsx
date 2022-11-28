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
import ArticleList from '@/page-components/common/kalender';
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
      `/photos?lang=${context.params.language}&menu=article&category_id=6077ed8734b4c46f67203be5`
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
  const url = `/article?lang=${language}&category_id=6077ed8734b4c46f67203be5&limit=1&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<ArticleModel[] | undefined>(
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
    const temp = researchesRes.data.data?.map((article: any) =>
      ArticleMaker.create(article)
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
          {getKeyValue(sentences.kalender_content)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftc-no-pb">
        <div className="container">
          {typeof researches === 'undefined'
            ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
            : researches.map((item) => (
                // eslint-disable-next-line react/jsx-indent
                <ArticleList key={item.id} {...item} language={language} />
              ))}
          <LoadMore />
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
