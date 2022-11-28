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
import DepartmentModel, { DepartmentMaker } from '@/models/department';
import axios from '@/config/axios';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactGA from 'react-ga';
import Link from 'next/link';
import ArticlePageProdiFeb from './index';

interface Props {
  faculties: DepartmentModel | null;
  slug: string;
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=department'),
      axios.get('/slug/all?lang=en&menu=department'),
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
    const response = await axios.get(`/department/${context.params.slug}`);
    const faculties = DepartmentMaker.create(response.data.data) || null;

    return {
      props: {
        faculties,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        faculties: null,
      } as Props,
      revalidate: 30,
    };
  }
};

const ResearchDetailPage: NextPage<Props> = ({ faculties }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  console.log(faculties);
  const router = useRouter();
  const { language } = router.query;
  const url = `/department?lang=${language}&limit=10&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<DepartmentModel[] | undefined>(
    undefined
  );
  const [totalresearch, setTotalresearch] = useState(0);

  if ([typeof faculties].includes('undefined') || router.isFallback) {
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
      DepartmentMaker.create(rs)
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

  // const getFormatedContact = () => {
  //   const contacItem = faculties?.contact.split('\r\n');
  //   return contacItem?.map((item) => {
  //     const splitItem = item.split(' : ');

  //     return {
  //       label: splitItem[0],
  //       value: splitItem[1],
  //     };
  //   });
  // };

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.prodiPascasarjana)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>

      {/* <section className="section-page schome-pengabdian section-page--pt-0">
        <section
          className="above-the-fold"
          style={{ backgroundImage: `url(${faculties?.image})` }}
        >
          <div className="container">
            <div className="page-title">{faculties?.title}</div>
          </div>
        </section>

        <section className="section-faculty-intro">
          <div className="container">
            <div className="row">
              <div className="col-md-11">
                <div className="faculty-intro__title">
                  {faculties?.shortDescription}
                </div>
              </div>
            </div>
          </div>
          <div className="faculty-intro__image">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="image">
                    <img src="/images/dekor1.jpeg" alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="image">
                    <img src="/images/F2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="image">
                    <img src="/images/F3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faculty-intro__desc">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: faculties?.description || '',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faculty-prospect">
          <div className="container">
            <div className="faculty-prospect__wrapper">
              <div className="faculty-prospect__image">
                <img src="/images/kerja.png" alt="" />
              </div>
              <div className="faculty-prospect__desc">
                <div className="faculty-prospect__title">
                  {getKeyValue(sentences.prospek)(selectLanguage(language))}
                </div>
                <p>{faculties?.career}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-contact">
          <div className="container">
            <div className="section-contact__wrapper">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="section-contact__title">
                    {getKeyValue(sentences.kontak)(selectLanguage(language))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-contact__detail">
                    {getFormatedContact()?.map((item) => (
                      <div className="contact-item">
                        <div className="contact-item__label">{`${item.label}:`}</div>
                        <div className="contact-item__value">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="button-link">
          <div className="container">
            <a className="button-link__title" href={`${faculties?.inset}`}>
              KUNJUNGI LAMAN
            </a>
          </div>
        </section>
      </section> */}
    </>
  );
};

export default ResearchDetailPage;
