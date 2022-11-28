/* eslint-disable react/jsx-one-expression-per-line */
import Journal from '@/page-components/jurnal/main-article';
import JournalInovation from '@/page-components/jurnal/inovation';
import JournalCooperation from '@/page-components/jurnal/cooperation';
import JournalFaculty from '@/page-components/jurnal/updatefaculty';
import JournalModel, { JournalMaker } from '@/models/journal';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from '@/config/axios';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import 'react-quill/dist/quill.snow.css';
import ReactGA from 'react-ga';
import useSWR from 'swr';

interface Props {
  journalMain: JournalModel[];
  journalInovasion: JournalModel[];
  journalCooperation: JournalModel[];
  journalFaculty: JournalModel[];
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
    const responses = await axios.get(
      `/streaming?lang=${lang.value}&selected=true&`
    );
    const response = await Promise.all([
      axios.get(
        `/journal?lang=${lang.value}&page=1&limit=3&selected=true&category_id=623404337390d4258500d895&`
      ),
      axios.get(
        `/journal?lang=${lang.value}&page=1&limit=6&selected=true&category_id=6234046e7390d4258500d898&`
      ),
      axios.get(
        `/journal?lang=${lang.value}&page=1&limit=6&selected=true&category_id=623403f37390d4258500d892&`
      ),
      axios.get(
        `/journal?lang=${lang.value}&page=1&limit=3&selected=true&category_id=623404cf7390d4258500d89b&`
      ),
    ]);

    const journalMain: JournalModel[] = response[0].data.data.data?.map(
      (res: any) => JournalMaker.create(res)
    );

    const journalInovasion: JournalModel[] = response[1].data.data.data?.map(
      (res: any) => JournalMaker.create(res)
    );

    const journalCooperation: JournalModel[] = response[2].data.data.data?.map(
      (res: any) => JournalMaker.create(res)
    );
    const journalFaculty: JournalModel[] = response[3].data.data.data?.map(
      (res: any) => JournalMaker.create(res)
    );

    return {
      props: {
        journalMain,
        journalInovasion,
        journalCooperation,
        journalFaculty,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    console.log('ERROR: ');
    console.log(e);
    return {
      props: {
        journalMain: [],
        journalInovasion: [],
        journalCooperation: [],
        journalFaculty: [],
      } as Props,
      revalidate: 30,
    };
  }
};

const Home: NextPage<Props> = ({
  journalMain,
  journalInovasion,
  journalCooperation,
  journalFaculty,
}) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/streaming?lang=${language}&selected=true&`;
  const [page, setPage] = useState(0);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page + 1}`);
  const { data: agendasRes, error } = useSWR(fetchUrl);
  const [totalagenda, setTotalagenda] = useState(0);
  const selectedLanguage = selectLanguage(language);
  const param = `/${selectedLanguage}`;

  // console.log('agenda 2', agenda);
  return (
    <div className="homepage">
      <Head>
        <title>
          {getKeyValue(sentences.artikelUtama)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <>
        <section className="ftco-section ftc-no-pb ftco-section--top streaming-page">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-12">
                <div className="pr-md-5 mr-md-5">
                  <ul className="nav nav-pills">
                    <li className="nav-item" key="BERITA">
                      <div
                        aria-hidden
                        className={`nav-link figure  ${
                          router.pathname.indexOf(
                            `/${getKeyValue(sentences.berita)(
                              selectedLanguage
                            )}`
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
                            `/${getKeyValue(sentences.jurnal)(
                              selectedLanguage
                            )}`
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
          </div>
        </section>
        <Journal contents={journalMain || []} language={language as string} />
        <JournalInovation
          contents={journalInovasion || []}
          language={language as string}
        />
        <JournalCooperation
          contents={journalCooperation || []}
          language={language as string}
        />
        <JournalFaculty
          contents={journalFaculty || []}
          language={language as string}
        />
      </>
    </div>
  );
};

export default Home;
