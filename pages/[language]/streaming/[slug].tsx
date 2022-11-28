/* eslint-disable jsx-a11y/iframe-has-title */
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
import StreamingModel, { StreamingMaker } from '@/models/streaming';
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
import { relative } from 'node:path';
import ReactGA from 'react-ga';

interface Props {
  streaming: StreamingModel | null;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=streaming'),
      axios.get('/slug/all?lang=en&menu=streaming'),
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
    const response = await axios.get(`/streaming/${context.params.slug}`);
    const streaming = StreamingMaker.create(response.data.data) || null;

    return {
      props: {
        streaming,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        streaming: null,
      } as Props,
      revalidate: 30,
    };
  }
};

const ResearchDetailPage: NextPage<Props> = ({ streaming }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  // console.log(streaming);
  const router = useRouter();
  const { language } = router.query;
  const url = `/streaming?lang=${language}&limit=20&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<StreamingModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);

  if ([typeof streaming].includes('undefined') || router.isFallback) {
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

  // create data //
  const createResearch = () => {
    const temp = researchesRes.data.data?.map((rs: any) =>
      StreamingMaker.create(rs)
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

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.streaming)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftco-section--article-page ftc-no-pb ftco-section--top">
        <div className="container">
          {/* ROW 1 HEADING */}
          <div className="row no-gutters">
            <div className="md-5 ml-md-6 col-md-2">
              <a className="subheading" style={{ color: '#000000' }} href="/">
                {getKeyValue(sentences.beranda_content)(
                  selectLanguage(language)
                )}{' '}
                / {''}
              </a>
              <a className="hijau" href="">
                {getKeyValue(sentences.streaming_content)(
                  selectLanguage(language)
                )}
              </a>
              <h2 className="mb-4 judul-laman">
                {getKeyValue(sentences.streaming_content)(
                  selectLanguage(language)
                )}
              </h2>
            </div>
            <div className="ml-5" />
            <div className="col-md-9 ml-md-5 wrap-about 8">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <div className="heading-section">
                  <div className="pl-md-2 ml-md-3">
                    <span className="subheading">
                      {getKeyValue(sentences.streaming)(
                        selectLanguage(language)
                      )}
                    </span>
                    <h3 className="mb-8">
                      {streaming ? streaming.description : ''}
                    </h3>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          {/* ROW 3 BODY */}
          <div className="row no-gutters">
            <div className="col-md-3 p-md-0">
              <ul className="comment-list">
                <li className="article-item row">
                  <div className="comment-body">
                    <div className="hijau tebal">
                      {getKeyValue(sentences.narasumber)(
                        selectLanguage(language)
                      )}
                    </div>
                    <p style={{ fontWeight: 'bold' }}>{streaming?.name}</p>
                  </div>
                </li>
                <li className="article-item row">
                  <div className="comment-body">
                    <div className="hijau tebal">
                      {getKeyValue(sentences.topik)(selectLanguage(language))}
                    </div>
                    <p style={{ fontWeight: 'bold' }}>{streaming?.field}</p>
                  </div>
                </li>
                <li className="article-item row">
                  <div className="comment-body">
                    <div className="hijau tebal">
                      {getKeyValue(sentences.bagikan_artikel)(
                        selectLanguage(language)
                      )}
                    </div>
                    <FacebookShareButton
                      url={`www.usu.ac.id/${language}/streaming/${
                        streaming ? streaming.slug : ''
                      }`}
                    >
                      <FacebookIcon size={24} round>
                        <span>{url}</span>
                      </FacebookIcon>
                    </FacebookShareButton>
                    &nbsp;
                    <TwitterShareButton
                      url={`www.usu.ac.id/${language}/streaming/${
                        streaming ? streaming.slug : ''
                      }`}
                    >
                      <TwitterIcon size={24} round>
                        <span>{url}</span>
                      </TwitterIcon>
                    </TwitterShareButton>
                    &nbsp;
                    <WhatsappShareButton
                      url={`www.usu.ac.id/${language}/streaming/${
                        streaming ? streaming.slug : ''
                      }`}
                    >
                      <WhatsappIcon size={24} round>
                        <span>{url}</span>
                      </WhatsappIcon>
                    </WhatsappShareButton>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-9 pl-0 ml-md-0 wrap-about 8">
              <div className="heading-section mb-3 pl-md-3">
                <ScrollAnimation animateIn="fadeInUp" animateOnce>
                  <div
                    style={{
                      maxWidth: '100%',
                      position: 'relative',
                      display: 'block',
                    }}
                  >
                    <iframe
                      src={streaming?.link}
                      width="100%"
                      height="400"
                      allowFullScreen
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <hr className="garis-hijau" />
          {/* <div className="pl-md-0 ml-md-0 mb-4">
            <span className="subheading">
              <h4 className="hijau">{getKeyValue(sentences.lainnya)(selectLanguage(language))}</h4>
              <div className="row">
                {typeof researches === 'undefined'
                ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
                : researches.map((item) => (
                    <div className="col-md-6" key={item.id}>
                      <ArticleListDedication {...item} language={language} />
                    </div>
                  ))}
              </div>
            </span>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ResearchDetailPage;
