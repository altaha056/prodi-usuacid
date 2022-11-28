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
import VideoModel, { VideoMaker } from '@/models/video';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleList from '@/page-components/common/video-list-menu';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import LeaderModel from '@/models/leader';
import ReactGA from 'react-ga';
import dateFormat from '@/config/dateformat';

interface Props {
  photos: VideoModel | null;
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
      `/video?lang=${lang.value}&page=1&selected=true&limit=1&`
    );
    return {
      props: {
        photos: response.data?.data || [],
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

const StreamingPage1: NextPage<Props> = ({ photos }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/video?lang=${language}&page=1&selected=true&limit=1&`;
  const [page, setPage] = useState(0);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page + 1}`);
  const { data: agendasRes, error } = useSWR(fetchUrl);
  const [agendas, setAgendas] = useState<VideoModel[] | undefined>(undefined);
  const [totalagenda, setTotalagenda] = useState(0);

  // infinite scroll //
  // const handleLoadMore = () => {
  //   const nextPage = page + 1;
  //   setPage(nextPage);
  //   setFetchUrl(`${url}page=${nextPage}`);
  // };

  // const [isFetching, setIsFetching] = useInfiniteScroll(
  //   handleLoadMore,
  //   'article-item'
  // );

  // useEffect(() => {
  //   setIsFetching(false);
  // }, [agendas]);

  // create data //
  const createResearch = () => {
    const temp: VideoModel[] = agendasRes.data?.map((research: any) =>
      VideoMaker.create(research)
    );
    if (typeof agendas === 'undefined') {
      console.log(page);
      setAgendas(temp);
    } else {
      setAgendas([...agendas, ...temp]);
    }
  };

  useEffect(() => {
    if (agendasRes) {
      setTimeout(createResearch, 1000);
      setTotalagenda(agendasRes.data.totalItems);
    }
  }, [agendasRes]);

  useEffect(() => {
    if (error) {
      setAgendas([]);
    }
  }, [error]);
  const selectedLanguage = selectLanguage(language);
  const param = `/${selectedLanguage}`;
  return (
    <>
      {typeof agendas === 'undefined'
        ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
        : agendas.map((item) => (
            // eslint-disable-next-line react/jsx-indent
            <ArticleList key={item.id} {...item} language={language} />
          ))}
      {/* <LoadMore /> */}
    </>
  );
};

export default StreamingPage1;
