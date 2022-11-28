/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import LeaderModel, { LeaderMaker } from '@/models/leader';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleList from '@/page-components/common/pimpinan-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import ReactGA from 'react-ga';
import ArticlePageRektor from './index-rektor';

interface Props {
  photos: LeaderModel | null;
  language?: string;
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
      `/photos?lang=${context.params.language}&selected=true&menu=leader&`
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
      } as unknown as Props,
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
  const url = `/leader?lang=${language}&selected=true&limit=6&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<LeaderModel[] | undefined>(
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
      LeaderMaker.create(article)
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
      <section className="ftco-section ftc-no-pb ftco-section--top">
        <div className="row no-gutters">
          <div className="container">
            <div className="article-item">
              <table style={{ width: '100%', height: '647px', border: '0' }}>
                <tbody>
                  <div className="row">
                    {typeof researches === 'undefined'
                      ? [...Array(3)].map((_, index) => (
                          <ArticleLoader key={`article-item-${index}`} />
                        ))
                      : researches.map((item) => (
                          // eslint-disable-next-line react/jsx-indent
                          <div className="col-md-4" key={item.id}>
                            <ArticleList {...item} language={language} />
                          </div>
                        ))}
                  </div>
                </tbody>
              </table>
              {/* <p>&nbsp;</p>
              <table
                style={{
                  width: '100%',
                  height: '387px',
                  border: '0px',
                  textAlign: 'center',
                }}
              >
                <tbody>
                  <tr style={{ verticalAlign: '0px' }}>
                    <td style={{ verticalAlign: '0px' }}>
                      <img
                        style={{
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        src="/images/usu.png"
                        alt="WR4"
                        width="180"
                        height="231"
                      />
                    </td>
                    <td style={{ verticalAlign: '1px' }}>
                      <img
                        style={{
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        src="/images/usu.png"
                        alt="WR5"
                        width="180"
                        height="231"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style={{ textAlign: 'center' }}>
                        &nbsp;Wakil Rektor 4
                      </p>
                    </td>
                    <td>
                      <p style={{ textAlign: 'center' }}>
                        &nbsp;Wakil Rektor 5
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'center' }}>
                      <a href="">
                        <strong style={{ textAlign: 'center' }}>
                          Wakil Rektor 4
                        </strong>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <strong style={{ textAlign: 'center' }}>
                          Wakil Rektor 5
                        </strong>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
