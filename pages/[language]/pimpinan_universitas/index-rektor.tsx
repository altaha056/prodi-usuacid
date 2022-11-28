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
import LeaderModel, { LeaderMaker } from '@/models/leader';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleListRektor from '@/page-components/common/rektor-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';

interface Props {
  photo: LeaderModel | null;
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
      `/photos?lang=${context.params.language}&selected=false&menu=leader&`
    );

    return {
      props: ({
        photos: response.data.data,
      } as unknown) as Props,
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

const ArticlePageRektor: React.FC = ({}) => {
  const router = useRouter();
  const { language } = router.query;
  const url = `/leader?lang=${language}&selected=false&limit=1&`;
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

  return (
    <>
      {typeof researches === 'undefined'
        ? [...Array(3)].map((_, index) => <ArticleLoader key={index} />)
        : researches.map((item) => (
            // eslint-disable-next-line react/jsx-indent

            <ArticleListRektor key={item.id} {...item} language={language} />
          ))}
    </>
  );
};

export default ArticlePageRektor;
