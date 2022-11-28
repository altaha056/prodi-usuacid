/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import PublicLectureModel, {
  PublicLectureMaker,
} from '@/models/public-lecture';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleList from '@/page-components/common/kuliahumum-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import { useTransition, animated, config } from 'react-spring';
import { isArray } from 'util';
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
    // const response = await axios.get(`/photos?lang=${context.params.language}&menu=public_lecture`);
    const response = await axios.get(`/public-lecture?lang=id`);
    return {
      props: {
        photos: response.data?.data || [],
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

const KuliahUmumPage: NextPage<Props> = ({ photos }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/public-lecture?lang=${language}&limit=50&selected=true&`;
  const [page, setPage] = useState(0);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page + 1}`);
  const { data: agendasRes, error } = useSWR(fetchUrl);
  const [agendas, setAgendas] = useState<PublicLectureModel[] | undefined>(
    undefined
  );
  const [totalagenda, setTotalagenda] = useState(0);

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
  }, [agendas]);

  // create data //
  const createResearch = () => {
    const temp: PublicLectureModel[] = agendasRes.data?.map((research: any) =>
      PublicLectureMaker.create(research)
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

  // const LoadMore = () => {
  //   if (typeof agendas !== 'undefined') {
  //     return isFetching && totalagenda > agendas?.length ? (
  //       <div className="d-flex justify-content-center mt-3">
  //         <img src="/images/spinner.gif" alt="spinner" />
  //       </div>
  //     ) : null;
  //   }
  //   return null;
  // };

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.kuliahumum)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftc-no-pb ftco-section--top">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-0">
              <a className="subheading" style={{ color: '#000000' }} href="/">
                {getKeyValue(sentences.beranda_content)(
                  selectLanguage(language)
                )}{' '}
                / {''}
              </a>
              <a className="hijau" style={{ color: '#28a745' }} href="">
                {getKeyValue(sentences.kuliahumum_content)(
                  selectLanguage(language)
                )}
              </a>
              <h2 className="mb-4 judul-laman">
                {getKeyValue(sentences.kuliahumum_content)(
                  selectLanguage(language)
                )}
              </h2>
            </div>
          </div>
          <div className="row another-articles">
            <div className="container">
              {typeof agendas === 'undefined'
                ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
                : agendas.map((item) => (
                    // eslint-disable-next-line react/jsx-indent
                    <ArticleList key={item.id} {...item} language={language} />
                  ))}
              {/* <LoadMore /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KuliahUmumPage;
