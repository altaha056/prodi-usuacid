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
import AnnouncementModel, { AnnouncementMaker } from '@/models/announcement';
import { ArticleLoader } from '@/page-components/common/loader';
import ArticleList from '@/page-components/common/article-list-announce';
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

interface Props {
  news: AnnouncementModel | null;
  slug: string;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=announcement'),
      axios.get('/slug/all?lang=en&menu=announcement'),
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
    const response = await axios.get(`/announcement/${context.params.slug}`);
    const news = AnnouncementMaker.create(response.data.data) || null;

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
  const url = `/announcement?lang=${language}&selected=true&limit=10&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: newsesRes, error } = useSWR(fetchUrl);
  const [newses, setNewses] = useState<AnnouncementModel[] | undefined>(
    undefined
  );
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

  const [isFetching, setIsFetching] = useInfiniteScroll(
    handleLoadMore,
    'article-item'
  );

  useEffect(() => {
    setIsFetching(false);
  }, [newses]);

  // create data //
  const createNews = () => {
    const temp = newsesRes.data.data?.map((rs: any) =>
      AnnouncementMaker.create(rs)
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

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.pengumuman)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftco-section--article-page ftco-section--top ftc-no-pb">
        <div className="container">
          {/* ROW 1 HEADING */}
          <div className="row no-gutters">
            <div className="col-md-0">
              <a className="subheading" style={{ color: '#000000' }} href="/">
                {getKeyValue(sentences.beranda_content)(
                  selectLanguage(language)
                )}{' '}
                /
              </a>
              <a className="hijau" href="">
                {getKeyValue(sentences.pengumuman_content)(
                  selectLanguage(language)
                )}
              </a>
              <h1 className="mb-4 judul-laman">
                {getKeyValue(sentences.pengumuman_content)(
                  selectLanguage(language)
                )}
              </h1>
            </div>
          </div>
          {/* ROW 2 TITLE */}
          <div className="row no-gutters">
            <div className="col-md-0">
              <h2 style={{ color: 'black' }}>
                <b>{news?.title}</b>
              </h2>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-0">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <div className="abstract">
                  <h4 className="hijau">{news?.shortDescription}</h4>
                  <br />
                  <div className="pl-md-8 ml-md-8 mb-8">
                    <div
                      className="article-description"
                      dangerouslySetInnerHTML={{
                        __html: news ? news.description : '',
                      }}
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <hr className="garis-hijau" />
          <div className="pl-md-0 ml-md-0 mb-4">
            <span className="subheading">
              <h3 className="hijau">
                {getKeyValue(sentences.lainnya)(selectLanguage(language))}
              </h3>
              <div className="row">
                {typeof newses === 'undefined'
                  ? [...Array(4)].map((_, index) => (
                      <ArticleLoader key={index} />
                    ))
                  : newses.map((item) => (
                      // eslint-disable-next-line react/jsx-indent
                      <div className="col-md-6" key={item.id}>
                        <ArticleList {...item} language={language} />
                      </div>
                    ))}
              </div>
              {/* <LoadMore /> */}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetailPage;
