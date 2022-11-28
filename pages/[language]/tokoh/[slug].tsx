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
import React, { useEffect, useState, StrictMode } from 'react';
import useSWR from 'swr';
import FigureModel, { FigureMaker } from '@/models/figure';
import { ArticleLoader } from '@/page-components/common/loader';
import ArticleList from '@/page-components/common/tokoh-list';
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
import FigureList from '@/page-components/common/figure-list';
import ReactGA from 'react-ga';
import App from 'pages/[language]/berita/App';

interface Props {
  figure: FigureModel | null;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=figure'),
      axios.get('/slug/all?lang=en&menu=figure'),
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
    const response = await axios.get(`/figure/${context.params.slug}`);
    console.log(response.status);
    console.log(`ini data${response.data.data}`);
    const figure = FigureMaker.create(response.data.data) || null;
    return {
      props: {
        figure,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    // console.log(e.response.data);
    // console.log(e.response.status);
    // console.log(e.response.headers);
    return {
      props: {
        figure: null,
      } as Props,
      revalidate: 30,
    };
  }
};

const FigureDetailPage: NextPage<Props> = ({ figure }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  // console.log(figure);
  const router = useRouter();
  const { language } = router.query;
  const url = `/figure?lang=${language}&limit=10&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<FigureModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);

  if ([typeof figure].includes('undefined') || router.isFallback) {
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
      FigureMaker.create(rs)
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

  const getSiteUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return null;
  };

  return (
    <>
      <Head>
        <title>{`${figure?.slug}`} | Universitas Sumatera Utara</title>
        <meta
          property="og:description"
          content={`${figure?.shortDescription}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${figure?.name}`} />
        <meta property="og:url" content={`${getSiteUrl()}`} />
        <meta property="og:image" content={`${figure?.image}`} />
        <meta property="og:locale" content={`${figure?.language}`} />
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
        <div className="container pb-3 pt-2">
          <div className="col-md-0">
            <a className="subheading" style={{ color: '#000000' }} href="/">
              {getKeyValue(sentences.beranda_content)(selectLanguage(language))}{' '}
              /
            </a>
            <a className="hijau" href="">
              {getKeyValue(sentences.tokoh_content)(selectLanguage(language))}
            </a>
            <h2 className="mb-4 judul-laman">
              {getKeyValue(sentences.tokoh_content)(selectLanguage(language))}
            </h2>
          </div>

          <div className="container">
            <div className="article-item row">
              <div className="col-md p-md-0 img img-2">
                <img
                  src={figure?.image}
                  alt={figure?.name}
                  className="article-thum"
                />
                <div className="meta">{figure?.imagetitle}</div>

                <ul className="comment-list">
                  <br />
                  <li className="article-item row">
                    <div className="comment-body">
                      <div className="hijau tebal">
                        {getKeyValue(sentences.kontributor)(
                          selectLanguage(language)
                        )}
                      </div>
                      <p style={{ fontWeight: 'bold' }}>{figure?.author}</p>
                      <div className="meta">{figure?.authordiv}</div>
                    </div>
                  </li>
                  <li className="article-item row">
                    <div className="comment-body">
                      <div className="hijau tebal">
                        {getKeyValue(sentences.fotografer)(
                          selectLanguage(language)
                        )}
                      </div>
                      <p style={{ fontWeight: 'bold' }}>
                        {figure?.photographer}
                      </p>
                      <div className="meta">{figure?.photographerdiv}</div>
                    </div>
                  </li>
                  <li className="article-item row">
                    <div className="comment-body">
                      <div className="hijau tebal">
                        {getKeyValue(sentences.tanggal_publikasi)(
                          selectLanguage(language)
                        )}
                      </div>
                      <div className="meta">
                        {dateFormat(
                          figure ? figure.date : '',
                          'mmmm. dd, yyyy'
                        )}
                        <br />
                      </div>
                    </div>
                  </li>
                  <li className="article-item row">
                    <div className="comment-body">
                      <div style={{ color: '#28a745', fontWeight: 500 }}>
                        {getKeyValue(sentences.bagikan_artikel)(
                          selectLanguage(language)
                        )}
                      </div>
                      <FacebookShareButton
                        url={`http://www.usu.ac.id/${language}/tokoh/${
                          figure ? figure.slug : ''
                        }`}
                      >
                        <FacebookIcon size={24} round>
                          <span>{url}</span>
                        </FacebookIcon>
                      </FacebookShareButton>
                      &nbsp;
                      <TwitterShareButton
                        url={`http://www.usu.ac.id/${language}/tokoh/${
                          figure ? figure.slug : ''
                        }`}
                      >
                        <TwitterIcon size={24} round>
                          <span>{url}</span>
                        </TwitterIcon>
                      </TwitterShareButton>
                      &nbsp;
                      <WhatsappShareButton
                        url={`http://www.usu.ac.id/${language}/tokoh/${
                          figure ? figure.slug : ''
                        }`}
                      >
                        <WhatsappIcon size={24} round>
                          <span>{url}</span>
                        </WhatsappIcon>
                      </WhatsappShareButton>
                      <StrictMode>
                        <App />
                      </StrictMode>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-md-7 wrap-about pb-md-5">
                <ScrollAnimation animateIn="fadeInUp" animateOnce>
                  <div className="heading-section mb-5 pl-md-5 heading-section-with-line">
                    <div className="pl-md-0 ml-md-0">
                      <h3 className="mb-4">{figure?.name}</h3>
                    </div>
                  </div>
                  <div className="pl-md-0 ml-md-0 mb-0">
                    <div
                      className="article-description"
                      dangerouslySetInnerHTML={{
                        __html: figure?.description || '',
                      }}
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          <div className="row article-container">
            <div className="col-md" id="article-item">
              <div className="article-description" />
            </div>
          </div>
          {/* <hr className="garis-hijau"></hr>
        <div className="pl-md-0 ml-md-0 mb-4">
          <span className="subheading">
            <h4 className="hijau">{getKeyValue(sentences.lainnya)(selectLanguage(language))}</h4>
            <div className="row">
              {typeof researches === 'undefined'
                ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
                : researches.map((item) => (
                    // eslint-disable-next-line react/jsx-indent
                    <div className="col-md-6" key={item.id}>
                      <FigureList {...item} language={language} />
                    </div>
                  ))}
            </div> */}
          {/* <LoadMore /> */}
          {/* </span>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default FigureDetailPage;
