/* eslint-disable jsx-a11y/alt-text */
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
import ArticleModel, { ArticleMaker } from '@/models/article';
import axios from '@/config/axios';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactGA from 'react-ga';
import ArticlePageProdiFeb from './index';
import Link from 'next/link';

interface Props {
  article: ArticleModel | null;
  slug: string;
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

const ResearchDetailPage: NextPage<Props> = ({ article }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  console.log(article);
  const router = useRouter();
  const { language } = router.query;
  const url = `/article?lang=${language}&limit=10&`;
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
          {getKeyValue(sentences.fasilitas)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>

      <section className="section-page schome-pengabdian section-page--pt-0">
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
              <div className="col-md-12">
                <div className="faculty-intro__title">
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

        <section className="section-contact">
          <div className="container">
            <div className="section-contact__wrapper">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="section-contact__title">Kontak</div>
                </div>
                <div className="col-md-8">
                  <div className="section-contact__detail">
                    <div className="hijau tebal">
                      {getKeyValue(sentences.fotografer)(
                        selectLanguage(language)
                      )}
                    </div>
                    <h6>{article?.photographer}</h6>
                    <div className="hijau tebal">
                      {getKeyValue(sentences.alamat)(selectLanguage(language))}
                    </div>
                    <h6 className="tulisan_justify">{article?.subtitle}</h6>
                    <div className="hijau tebal">
                      {getKeyValue(sentences.telepon)(selectLanguage(language))}
                    </div>
                    <h6 className="tulisan_justify">{article?.inset}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ResearchDetailPage;
