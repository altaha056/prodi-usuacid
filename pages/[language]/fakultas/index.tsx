/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage from 'helpers/check-language';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import FacultiesModel, { FacultiesMaker } from '@/models/facultiesModel';
import { ArticleLoader } from '@/page-components/common/loader2';
import FakultasList from '@/page-components/common/fakultas-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';

interface Props {
  photo: FacultiesModel | null;
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
  return {
    props: {
      photos: [],
    } as unknown as Props,
    revalidate: 30,
  };
};

const ArticlePageFakultas: React.FC = ({}) => {
  const router = useRouter();
  const { language } = router.query;
  const url = `/faculties?lang=${language}&limit=50&selected=true&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  // const fetcher = (urlItem: string) => {
  //   axios.get(urlItem).then((res) => res.data);
  // };
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<FacultiesModel[] | undefined>(
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
      FacultiesMaker.create(article)
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

  console.log('fakultas', researches);

  return (
    <>
      {typeof researches === 'undefined'
        ? [...Array(3)].map((_, index) => <div key={index}>&nbsp;</div>)
        : researches.map((item) => (
            <FakultasList key={item.id} {...item} language={language} />
          ))}
    </>
  );
};

export default ArticlePageFakultas;
