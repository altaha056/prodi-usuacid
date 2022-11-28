/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import DepartmentModel, { DepartmentMaker } from '@/models/department';
import { ArticleLoader } from '@/page-components/common/loader2';
import FakultasList from '@/page-components/common/prodi-pasca-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import Head from 'next/head';

interface Props {
  photo: DepartmentModel | null;
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
      // `/photos?lang=${context.params.language}&selected=true&menu=department&category_id=620ca7924e6f3e4b35c44e7a&`
      `/photos?lang=${context.params.language}&selected=true&menu=department&category_id=620ca7924e6f3e4b35c44e7a&`
    );

    return {
      props: {
        photos: response.data.data,
      } as unknown as Props,
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

const ArticlePageFakultas: React.FC = ({}) => {
  const router = useRouter();
  const { language } = router.query;
  // const url = `/department?lang=${language}&selected=true&limit=50&category_id=620ca7924e6f3e4b35c44e7a&`;
  const url = `/department?lang=${language}&selected=true&limit=50&category_id=620ca7924e6f3e4b35c44e7a&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<DepartmentModel[] | undefined>(
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
      DepartmentMaker.create(article)
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
          {getKeyValue(sentences.prodiPascasarjana)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="section-page schome-pengabdian section-page--pt-0">
        <section
          className="above-the-fold"
          style={{ backgroundImage: `url(/images/pendidikan.jpg)` }}
        >
          <div className="container">
            <div className="page-title">
              {getKeyValue(sentences.prodiPascasarjana)(
                selectLanguage(language)
              )}
            </div>
          </div>
        </section>

        <section className="section-contact">
          <div className="container">
            <div className="row">
              <div className=" tulisan_justify section-subtittle__content">
                {getKeyValue(sentences.pascasarjanaPage)(
                  selectLanguage(language)
                )}
              </div>
            </div>
          </div>
          <div className="container">
            <hr className="garis-hijau" />
          </div>
        </section>

        <section className="section-contact">
          <div className="container">
            <div className="pl-md-0 ml-md-0 mb-4">
              <span className="subheading">
                <div className="row">
                  {typeof researches === 'undefined'
                    ? [...Array(4)].map((_, index) => (
                        // eslint-disable-next-line react/jsx-indent
                        <ArticleLoader key={index} />
                      ))
                    : researches.map((item) => (
                        // eslint-disable-next-line react/jsx-indent
                        <div className="col-md-4" key={item.id}></div>
                      ))}
                </div>
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ArticlePageFakultas;
