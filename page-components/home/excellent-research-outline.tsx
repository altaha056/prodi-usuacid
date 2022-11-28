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
import FrontTextModel, { FrontTextMaker } from '@/models/front-text';
import ArticleOutlineResearchList from '@/page-components/common/research-outline-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';

interface Props {
  photo: string;
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
      `/photo?lang=${context.params.language}&selected=true&menu=front-text&`
    );

    return {
      props: {
        photo: response.data.data,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        photo: [],
      } as unknown as Props,
      revalidate: 30,
    };
  }
};

const rticleOutlineResearch: React.FC = ({}) => {
  const router = useRouter();
  const { language } = router.query;
  const url = `/front-text?lang=${language}&selected=true&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<FrontTextModel[] | undefined>(
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

  // // create data //
  // const createResearch = () => {
  //   const temp = researchesRes.data.data?.map((article: any) =>
  //   FrontTextMaker .create(article)
  //   );
  //   if (typeof researches === 'undefined') {
  //     setResearches(temp);
  //   } else {
  //     setResearches([...researches, ...temp]);
  //   }
  // };

  useEffect(() => {
    if (researchesRes) {
      // setTimeout(createResearch, 1000);
      setTotalresearch(researchesRes.data.totalItems);
      console.log('HALLOOOOO', researchesRes.data);
      setResearches(researchesRes.data);
    }
  }, [researchesRes]);

  // useEffect(() => {
  //   if (error) {
  //     setResearches([]);
  //   }
  // }, [error]);

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
      {researches ? (
        researches.map((item) => (
          <ArticleOutlineResearchList
            key={item.id}
            data={item}
            language={language}
          />
        ))
      ) : (
        <span>nothing</span>
      )}
    </>
  );
};

export default rticleOutlineResearch;
