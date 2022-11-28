import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { StrictMode, useEffect, useState } from 'react';
import useSWR from 'swr';
import NewsMenuModel, { NewsMenuMaker } from '@/models/news-menu';
import { ArticleLoader } from '@/page-components/common/loader';
import ArticleList from '@/page-components/common/article-list-news';
import axios from '@/config/axios';
import ScrollAnimation from 'react-animate-on-scroll';
import useInfiniteScroll from 'helpers/infinite-scroll';
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
import App from './App';

interface Props {
  news: NewsMenuModel | null;
  slug: string;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=news-menu&page=1'),
      axios.get('/slug/all?lang=en&menu=news-menu&page=1'),
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
    const response = await axios.get(`/news-menu/${context.params.slug}`);
    const news = NewsMenuMaker.create(response.data.data) || null;

    return {
      props: {
        news,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        news: null,
      } as Props,
      revalidate: 30,
    };
  }
};

const NewsDetailPage: NextPage<Props> = ({ news }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/news-menu?lang=${language}&selected=true&page=1&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: newsesRes, error } = useSWR(fetchUrl);
  const [newses, setNewses] = useState<NewsMenuModel[] | undefined>(undefined);
  const [totalnews, setTotalnews] = useState(0);

  if ([typeof news].includes('undefined') || router.isFallback) {
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
  // }, [newses]);

  // create data //
  const createNews = () => {
    const temp = newsesRes.data.data?.map((rs: any) =>
      NewsMenuMaker.create(rs)
    );
    if (typeof newses === 'undefined') {
      setNewses(temp);
    } else {
      setNewses([...newses, ...temp]);
    }
  };

  useEffect(() => {
    if (newsesRes) {
      setTimeout(createNews, 1000);
      setTotalnews(newsesRes.data.totalItems);
    }
  }, [newsesRes]);

  useEffect(() => {
    if (error) {
      setNewses([]);
    }
  }, [error]);

  // const LoadMore = () => {
  //   if (typeof newses !== 'undefined') {
  //     return isFetching && totalnews > newses?.length ? (
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
          {getKeyValue(sentences.berita_content)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
        <meta property="og:description" content={`${news?.shortDescription}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${news?.title}`} />
        <meta property="og:url" content={`${getSiteUrl()}`} />
        <meta property="og:image" content={`${news?.image}`} />
        <meta property="og:locale" content={`${news?.language}`} />
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
                <a href={`/${language}/berita`}>
                  {getKeyValue(sentences.berita_content)(
                    selectLanguage(language)
                  )}{' '}
                  /
                </a>
                &nbsp;
                {getKeyValue(sentences.liputanUtama)(selectLanguage(language))}
              </div>
              <div className="section-slug">
                <div className="section-slug__title">
                  <h1>{news?.title}</h1>
                </div>
                <div className="section-slug__shortdescription">
                  {news?.shortDescription}
                </div>
                <div className="section-slug__info">
                  {dateFormat(news ? news.date : '', 'dd mmmm yyyy')} / &nbsp;
                  {news?.author}
                </div>
                <div className="section-slug__sosmed">
                  <FacebookShareButton
                    url={`https://www.usu.ac.id/${language}/berita/${
                      news ? news.slug : ''
                    }`}
                  >
                    <FacebookIcon size={24} round>
                      <span>{url}</span>
                    </FacebookIcon>
                  </FacebookShareButton>
                  &nbsp;
                  <TwitterShareButton
                    url={`https://www.usu.ac.id/${language}/berita/${
                      news ? news.slug : ''
                    }`}
                  >
                    <TwitterIcon size={24} round>
                      <span>{url}</span>
                    </TwitterIcon>
                  </TwitterShareButton>
                  &nbsp;
                  <WhatsappShareButton
                    url={`https://www.usu.ac.id/${language}/berita/${
                      news ? news.slug : ''
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
                    src={news?.image}
                    alt={news?.title}
                    className="article-thum"
                  />
                </div>
                <div>
                  <ScrollAnimation animateIn="fadeInUp" animateOnce>
                    <div
                      className="section-slug__description"
                      dangerouslySetInnerHTML={{
                        __html: news?.description || '',
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
                        {getKeyValue(sentences.liputanUtama_content)(
                          selectLanguage(language)
                        )}
                      </h1>
                      <hr className="section-slug__gariskuning" />
                    </div>
                    <div className="row">
                      {typeof newses === 'undefined'
                        ? [...Array(4)].map((_, index) => (
                            <ArticleLoader key={index} />
                          ))
                        : newses.map((item) => (
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

export default NewsDetailPage;
