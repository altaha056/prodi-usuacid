/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import JournalModel, { JournalMaker } from '@/models/journal';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleList from '@/page-components/jurnal/journal-list-news-index';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import ReactGA from 'react-ga';
import Link from 'next/link';
import { Search } from 'react-feather';

interface Props {
  photos: string[];
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
      `/journal?lang=${lang.value}&selected=true&category_id=621601c73870224436058289&`
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

const ResearchPage: NextPage<Props> = ({ photos }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language, search } = router.query;
  const url = `/journal?lang=${language}&selected=true&limit=10&category_id=621601c73870224436058289&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<JournalModel[] | undefined>(
    undefined
  );
  const [filteredAgendas, setfilteredAgendas] = useState<
    JournalModel[] | undefined
  >(undefined);

  const [totalresearch, setTotalresearch] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

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
    if (!researches || !search) return;
    const filteredData = researches.filter((agenda) =>
      agenda.title.toLowerCase().includes(search.toString().toLowerCase())
    );
    setfilteredAgendas(filteredData);
    setSearchKeyword(search.toString());
  }, [router.query, researches]);

  useEffect(() => {
    setIsFetching(false);
  }, [researches]);

  const handleSearch = () => {
    const pathName = router.asPath.split('?')[0];
    router.push(`${pathName}?search=${searchKeyword}`);
  };

  // create data //
  const createResearch = () => {
    const temp: JournalModel[] =
      researchesRes.data.data?.map((dedication: any) =>
        JournalMaker.create(dedication)
      ) || [];
    if (typeof researches === 'undefined') {
      window.scrollTo(0, 0);

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

  const selectedLanguage = selectLanguage(language);
  const param = `/${selectedLanguage}`;
  const newAgendas = search ? filteredAgendas : researches?.slice(1);
  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.article_content)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftc-no-pb ftco-section--top streaming-pag">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="pr-md-5 mr-md-5 mb-4">
                <ul className="nav nav-pills">
                  <li className="nav-item" key="BERITA">
                    <div
                      aria-hidden
                      className={`nav-link figure  ${
                        router.pathname.indexOf(
                          `/${getKeyValue(sentences.berita)(selectedLanguage)}`
                        ) !== -1
                          ? 'active'
                          : ''
                      }`}
                    >
                      <a href={`${param}/berita`} className="nav-link">
                        {getKeyValue(sentences.berita)(selectedLanguage)}
                      </a>
                    </div>
                  </li>
                  <li className="nav-item" key="VIDIO">
                    <div
                      aria-hidden
                      className={`nav-link figure ${
                        router.pathname.indexOf(
                          `/${getKeyValue(sentences.vidio)(selectedLanguage)}`
                        ) !== -1
                          ? 'active'
                          : ''
                      }`}
                    >
                      <a href={`${param}/video`} className="nav-link">
                        {getKeyValue(sentences.vidio)(selectedLanguage)}
                      </a>
                    </div>
                  </li>
                  <li className="nav-item" key="STREAMING">
                    <div
                      aria-hidden
                      className={`nav-link figure ${
                        router.pathname.indexOf(
                          `/${getKeyValue(sentences.streaming)(
                            selectedLanguage
                          )}`
                        ) !== -1
                          ? 'active'
                          : ''
                      }`}
                    >
                      <a href={`${param}/streaming`} className="nav-link">
                        {getKeyValue(sentences.streaming)(selectedLanguage)}
                      </a>
                    </div>
                  </li>
                  <li className="nav-item" key="ARTIKEL">
                    <div
                      aria-hidden
                      style={{ borderBottom: '3px solid rgb(0, 105, 55)' }}
                      className={`nav-link active figure ${
                        router.pathname.indexOf(
                          `/${getKeyValue(sentences.jurnal)(selectedLanguage)}`
                        ) !== -1
                          ? 'active'
                          : ''
                      }`}
                    >
                      <a href={`${param}/jurnal`} className="nav-link">
                        {getKeyValue(sentences.artikel)(selectedLanguage)}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* {!search && <NewsPage photos={null} />} */}
          <div className="row another-articles" id="article-item">
            <div className="container">
              <div className="section-page-search">
                <span className="icon">
                  <Search size="1em" />
                </span>
                <input
                  type="text"
                  name="search"
                  id=""
                  value={searchKeyword}
                  placeholder="Pencarian Artikel"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchKeyword(event.target.value);
                  }}
                  onKeyUp={(event) => {
                    if (event.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
                <button onClick={handleSearch}>Search</button>
              </div>
              <div className="section-menu__lainnya">
                {search ? `Search: ${search}` : 'ARTIKEL LAINNYA'}
              </div>
              {typeof newAgendas === 'undefined'
                ? [...Array(4)].map((_, index) => <ArticleLoader key={index} />)
                : newAgendas.map((item) => (
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

export default ResearchPage;
