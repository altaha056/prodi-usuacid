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
import React, { StrictMode, useEffect, useState } from 'react';
import useSWR from 'swr';
import DedicationModel, { DedicationMaker } from '@/models/dedication';
import { ArticleLoader } from '@/page-components/common/loader';
import ArticleList from '@/page-components/common/dedication-list';
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
import App from '../berita/App';

interface Props {
  research: DedicationModel | null;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=dedication'),
      axios.get('/slug/all?lang=en&menu=dedication'),
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
    console.log(context.params.slug);
    const response = await axios.get(`/dedication/${context.params.slug}`);
    const research = DedicationMaker.create(response.data.data) || null;
    return {
      props: {
        research,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        research: null,
      } as Props,
      revalidate: 30,
    };
  }
};

const ResearchDetailPage: NextPage<Props> = ({ research }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/dedication?lang=${language}&selected=true&page=1&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<DedicationModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);

  if ([typeof research].includes('undefined') || router.isFallback) {
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
      DedicationMaker.create(rs)
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
  const getSiteUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return null;
  };

  const [isLoading, setIsLoading] = useState(true);

  function onLoad() {
    // delay for demo only
    setTimeout(() => setIsLoading(false), 1000);

    // setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>{`${research?.slug}`} | Universitas Sumatera Utara</title>
        <meta
          property="og:description"
          content={`${research?.shortDescription}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${research?.title}`} />
        <meta property="og:url" content={`${getSiteUrl()}`} />
        <meta property="og:image" content={`${research?.image}`} />
        <meta property="og:locale" content={`${research?.language}`} />
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
      <section className="ftco-section ftc-no-pb ftco-section--article-page ftco-section--top">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-7 ml-md-7 wrap-about 8">
              <div className="menu__breadcrumb">
                <a href={`/${language}/riset-unggulan`}>
                  {getKeyValue(sentences.risetUnggulan)(
                    selectLanguage(language)
                  )}
                </a>
                {/* &nbsp;{getKeyValue(sentences.risetUnggulan)(selectLanguage(language))}    */}
              </div>
              <div className="section-slug">
                <div className="section-slug__title">
                  <h1>{research?.title}</h1>
                </div>
                <div className="section-slug__shortdescription">
                  {research?.shortDescription}
                </div>
                <div className="section-slug__info">
                  {dateFormat(research ? research.date : '', 'dd mmmm yyyy')} /
                  &nbsp;{research?.author}
                </div>
                <div className="section-slug__sosmed">
                  <FacebookShareButton
                    url={`https://www.usu.ac.id/${language}/riset-unggulan/${
                      research ? research.slug : ''
                    }`}
                  >
                    <FacebookIcon size={24} round>
                      <span>{url}</span>
                    </FacebookIcon>
                  </FacebookShareButton>
                  &nbsp;
                  <TwitterShareButton
                    url={`https://www.usu.ac.id/${language}/riset-unggulan/${
                      research ? research.slug : ''
                    }`}
                  >
                    <TwitterIcon size={24} round>
                      <span>{url}</span>
                    </TwitterIcon>
                  </TwitterShareButton>
                  &nbsp;
                  <WhatsappShareButton
                    url={`https://www.usu.ac.id/${language}/riset-unggulan/${
                      research ? research.slug : ''
                    }`}
                  >
                    <WhatsappIcon size={24} round>
                      <span>{url}</span>
                    </WhatsappIcon>
                  </WhatsappShareButton>
                  &nbsp;
                  <StrictMode>
                    <App />
                  </StrictMode>
                </div>
              </div>

              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <div>
                  <img
                    src={research?.image}
                    alt={research?.title}
                    className="article-thum"
                  />
                </div>
                <div>
                  <ScrollAnimation animateIn="fadeInUp" animateOnce>
                    <div
                      className="section-slug__description"
                      dangerouslySetInnerHTML={{
                        __html: research?.description || '',
                      }}
                    />
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-md-4">
              <ul className="comment-list">
                <li className="article-item row">
                  <div className="comment-body">
                    <div className="section-slug__lainnya">
                      <h1>
                        {getKeyValue(sentences.lainnya)(
                          selectLanguage(language)
                        )}
                      </h1>
                      <hr className="section-slug__gariskuning" />
                    </div>
                    <div className="row">
                      {typeof researches === 'undefined'
                        ? [...Array(4)].map((_, index) => (
                            <ArticleLoader key={index} />
                          ))
                        : researches.map((item) => (
                            // eslint-disable-next-line react/jsx-indent
                            <div className="col-md-12" key={item.id}>
                              <ArticleList {...item} language={language} />
                            </div>
                          ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchDetailPage;
