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
import IdentityModel, { IdentityMaker } from '@/models/identity';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleList from '@/page-components/common/panduan-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import ReactGA from 'react-ga';

interface Props {
  photos: IdentityModel | null;
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
      `/photos?lang=${context.params.language}&selected=true&menu=identity&`
    );

    return {
      props: {
        photos: response.data.data,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: ({
        photos: [],
      } as unknown) as Props,
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
  const url = `/identity?lang=${language}&selected=true&limit=6&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<IdentityModel[] | undefined>(
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
      IdentityMaker.create(article)
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
          {getKeyValue(sentences.panduan)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftc-no-pb ftco-section--top">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-0">
              <a className="subheading" style={{ color: '#000000' }} href="/">
                {getKeyValue(sentences.beranda)(selectLanguage(language))} /
              </a>
              <a className="hijau" href="">
                {getKeyValue(sentences.panduan_content)(
                  selectLanguage(language)
                )}
              </a>
              <h2 className="mb-4 judul-laman">
                {getKeyValue(sentences.panduan_content)(
                  selectLanguage(language)
                )}
              </h2>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="container">
            <h1 className="text-center">
              {getKeyValue(sentences.panduan)(selectLanguage(language))}
            </h1>
            <br />
            <div className="article-item">
              <div className="pl-md-0 ml-md-0 mb-4">
                <span className="subheading">
                  <div className="row">
                    {typeof researches === 'undefined'
                      ? [...Array(3)].map((_, index) => (
                          <ArticleLoader key={index} />
                        ))
                      : researches.map((item) => (
                          // eslint-disable-next-line react/jsx-indent
                          <div className="col-md-4" key={item.id}>
                            <ArticleList {...item} language={language} />
                          </div>
                        ))}
                  </div>
                  {/* <LoadMore /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
