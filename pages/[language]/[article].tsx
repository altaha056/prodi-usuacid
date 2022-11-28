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
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import ScrollAnimation from 'react-animate-on-scroll';
import dateFormat from '@/config/dateformat';
import LoadingSSO from '@/page-components/common/loading';
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
  article: ArticleModel | null;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=article'),
      axios.get('/slug/all?lang=en&menu=article'),
    ]);

    const idParams = response[0].data.data.map((article: string) => {
      return { params: { language: 'id', article } };
    });

    const enParams = response[1].data.data.map((article: string) => {
      return { params: { language: 'en', article } };
    });

    return {
      paths: [...idParams, ...enParams],
      fallback: true,
    };
  } catch (_) {
    return {
      paths: [
        { params: { language: 'id', article: '-' } },
        { params: { language: 'en', article: '-' } },
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
    const response = await axios.get(`/article/${context.params.article}`);
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

const ResearchDetailPage: NextPage<Props> = ({ article }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  // console.log(article);
  const router = useRouter();
  const { language } = router.query;
  const url = `/article?lang=${language}&limit=4&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: articleRes, error } = useSWR(fetchUrl);
  const [articles, setArticles] = useState<ArticleModel[] | undefined>(
    undefined
  );
  const [totalarticle, setTotalarticle] = useState(0);

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
  }, [articles]);

  // create data //
  const createResearch = () => {
    const temp = articleRes.data.data?.map((rs: any) =>
      ArticleMaker.create(rs)
    );
    if (typeof articles === 'undefined') {
      setArticles(temp);
    } else {
      setArticles([...articles, ...temp]);
    }
  };

  useEffect(() => {
    if (articleRes) {
      setTimeout(createResearch, 1000);
      setTotalarticle(articleRes.data.totalItems);
    }
  }, [articleRes]);

  useEffect(() => {
    if (error) {
      setArticles([]);
    }
  }, [error]);

  // const LoadMore = () => {
  //   if (typeof articles !== 'undefined') {
  //     return isFetching && totalarticle > articles?.length ? (
  //       <div className="d-flex justify-content-center mt-3">
  //         <img src="/images/spinner.gif" alt="spinner" />
  //       </div>
  //     ) : null;
  //   }
  //   return null;
  // };

  const getSiteUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return null;
  };

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.tentangUSU)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
        <meta
          property="og:description"
          content={`${article?.shortDescription}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${article?.title}`} />
        <meta property="og:url" content={`${getSiteUrl()}`} />
        <meta property="og:image" content={`${article?.image}`} />
        <meta property="og:locale" content={`${article?.language}`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.bubble.min.css"
          integrity="sha512-laOBZ+/WvReCfvAK076yy3Hm3J+X1iI0wIYGMzsmm4HJbYvQdAGZZ1kszc1hVYUIZQ/faZ+eEtJVL28sxPSJag=="
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.core.min.css"
          integrity="sha512-AqSNjpJ7R92d+ANZrrP/hSBerCkDCQE/EILn5MylysaRmbi0Jwi56r39McL3p7LJnO+bjthpFu8GQ2y/d0fECg=="
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.snow.min.css"
          integrity="sha512-/FHUK/LsH78K9XTqsR9hbzr21J8B8RwHR/r8Jv9fzry6NVAOVIGFKQCNINsbhK7a1xubVu2r5QZcz2T9cKpubw=="
        />
      </Head>

      <section className="section-page schome-pengabdian section-page--pt-0 ftco-section--article-page">
        <section
          className="above-the-fold"
          style={{ backgroundImage: `url(${article?.image})` }}
        >
          <div className="container">
            <div className="page-title">{article?.title}</div>
          </div>
        </section>

        <section className="section-faculty-intro">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="faculty-intro__title ">
                  {article?.shortDescription}
                </div>
                <div
                  className="tulisan_justify"
                  dangerouslySetInnerHTML={{
                    __html: article?.description || '',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="button-link">
          <div className="container">
            <a className="button-link__title" href={`${article?.subtitle}`}>
              {getKeyValue(sentences.kunjungi)(selectLanguage(language))}
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default ResearchDetailPage;
