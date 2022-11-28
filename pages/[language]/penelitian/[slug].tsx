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
import ArticleModel, { ArticleMaker } from '@/models/article';
import { ArticleLoader } from '@/page-components/common/loader';
import ArticleList from '@/page-components/common/penelitian-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import ReactGA from 'react-ga';

interface Props {
  article: ArticleModel | null;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=article'),
      axios.get('/slug/all?lang=en&menu=article'),
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
    const response = await axios.get(`/article/${context.params.slug}`);
    const article = ArticleMaker.create(response.data.data) || null;

    return {
      props: {
        article,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        article: null,
      } as Props,
      revalidate: 30,
    };
  }
};

const ArticleDetailPage: NextPage<Props> = ({ article }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  console.log(article);
  const router = useRouter();
  const { language } = router.query;
  const url = `/article?lang=${language}&limit=1&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<ArticleModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);

  if ([typeof article].includes('undefined') || router.isFallback) {
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

  const [isFetching, setIsFetching] = useInfiniteScroll(
    handleLoadMore,
    'article-item'
  );

  useEffect(() => {
    setIsFetching(false);
  }, [researches]);

  // create data //
  const createResearch = () => {
    const temp = researchesRes.data.data?.map((rs: any) =>
      ArticleMaker.create(rs)
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
          {getKeyValue(sentences.risetUnggulan)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <div className="container pb-3 pt-4">
        <div className="row mt-5 cml">
          <div className="col-md mt-3">
            <div className="article-title">
              <div>
                <h2>{article?.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row with-border article-container">
          <div className="col-md-4">
            <img
              src={article?.image}
              alt={article?.title}
              className="article-image"
            />
          </div>
          <div className="col-md" id="article-item">
            <div
              className="article-description"
              dangerouslySetInnerHTML={{ __html: article?.description || '' }}
            />
          </div>
        </div>
        <div className="row another-articles">
          <div className="col-md">
            <h5 className="another-article-title">Lainnya</h5>
            <div className="row">
              {typeof researches === 'undefined'
                ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
                : researches.map((item) => (
                    // eslint-disable-next-line react/jsx-indent
                    <div className="col-md-6" key={item.id}>
                      <ArticleList {...item} language={language} />
                    </div>
                  ))}
            </div>

            <LoadMore />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetailPage;
