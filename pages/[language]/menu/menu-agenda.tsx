/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import AgendaModel, { AgendaMaker } from '@/models/agenda';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleList from '@/page-components/common/agenda-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import ReactGA from 'react-ga';

interface Props {
  photos: string[];
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
      `/photos?lang=${context.params.language}&selected=true&limit=4&menu=agenda`
    );
    return {
      props: {
        photos: response.data.data || [],
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        photos: [],
      } as Props,
      revalidate: 30,
    };
  }
};

const AgendaPage: NextPage<Props> = ({ photos }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/agenda?lang=${language}&selected=true&limit=3&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: agendasRes, error } = useSWR(fetchUrl);
  const [agendas, setAgendas] = useState<AgendaModel[] | undefined>(undefined);
  const [totalagenda, setTotalagenda] = useState(0);

  // create data //
  const createResearch = () => {
    const temp: AgendaModel[] =
      agendasRes.data.data?.map((agenda: any) => AgendaMaker.create(agenda)) ||
      [];
    if (typeof agendas === 'undefined') {
      window.scrollTo(0, 0);

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

  return (
    <>
      {typeof agendas === 'undefined'
        ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
        : agendas.map((item) => (
            // eslint-disable-next-line react/jsx-indent
            <ArticleList key={item.id} {...item} language={language} />
          ))}
    </>
  );
};

export default AgendaPage;
