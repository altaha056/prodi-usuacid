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
import { Search } from 'react-feather';
import VideoModel, { VideoMaker } from '@/models/video';
import { ArticleLoader } from '@/page-components/common/loader2';
import ArticleList from '@/page-components/common/video-list';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import LeaderModel from '@/models/leader';
import ReactGA from 'react-ga';
import StreamingPage1 from './menu-video';

interface Props {
  photos: VideoModel | null;
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
      `/video?lang=${lang.value}&selected=true&`
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

const StreamingPage: NextPage<Props> = ({ photos }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language, search } = router.query;

  const url = `/video?lang=${language}&selected=true&`;
  const [page, setPage] = useState(0);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page + 1}`);
  const { data: agendasRes, error } = useSWR(fetchUrl);
  const [agendas, setAgendas] = useState<VideoModel[] | undefined>(undefined);
  const [filteredAgendas, setfilteredAgendas] = useState<
    VideoModel[] | undefined
  >(undefined);
  const [totalagenda, setTotalagenda] = useState(0);
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
    if (!agendas || !search) return;
    const filteredData = agendas.filter((agenda) =>
      agenda.name.toLowerCase().includes(search.toString().toLowerCase())
    );
    setfilteredAgendas(filteredData);
    setSearchKeyword(search.toString());
  }, [router.query, agendas]);

  useEffect(() => {
    setIsFetching(false);
  }, [agendas]);

  const handleSearch = () => {
    const pathName = router.asPath.split('?')[0];
    router.push(`${pathName}?search=${searchKeyword}`);
  };

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
  const newAgendas = search ? filteredAgendas : agendas?.slice(1);
  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.vidio)(selectLanguage(language))} | Universitas
          Sumatera Utara
        </title>
      </Head>
      <section className="ftco-section ftc-no-pb ftco-section--top streaming-page">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-0">
              {/* <a className="subheading" style={{ color: '#000000' }} href="/">
                {getKeyValue(sentences.beranda)(selectLanguage(language))} /
              </a>
              <a className="hijau" style={{ color: '#28a745' }} href="">
                {getKeyValue(sentences.streaming_content)(
                  selectLanguage(language)
                )}
              </a>
              <h2 className="mb-4 judul-laman">
                {getKeyValue(sentences.streaming_content)(
                  selectLanguage(language)
                )}
              </h2> */}
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
                      style={{ borderBottom: '3px solid rgb(0, 105, 55)' }}
                      className={`nav-link active figure ${
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
                  <li className="nav-item" key="Journal">
                    <div
                      aria-hidden
                      className={`nav-link figure ${
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
          {!search && <StreamingPage1 photos={null} />}
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
                  placeholder="Pencarian Video Informatif"
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
                {search ? `Search: ${search}` : 'VIDEO LAINNYA'}
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

export default StreamingPage;
