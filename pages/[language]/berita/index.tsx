/* eslint-disable react/jsx-one-expression-per-line */
import Berita from '@/page-components/bulletin/news';
import BulletinInovation from '@/page-components/bulletin/inovation';
import BulletinCooperation from '@/page-components/bulletin/cooperation';
import BulletinFaculty from '@/page-components/bulletin/updatefaculty';
import BulletinModel, { BulletinMaker } from '@/models/bulletin';
import NewsMenuModel, { NewsMenuMaker } from '@/models/news-menu';
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
import LeaderModel from '@/models/leader';
import useSWR from 'swr';

interface Props {
  berita: NewsMenuModel[];
  bulletinInovasion: BulletinModel[];
  bulletinCooperation: BulletinModel[];
  bulletinFaculty: BulletinModel[];
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
      axios.get(`/news-menu?lang=${lang.value}&page=1&limit=3&selected=true`),
      axios.get(
        `/bulletin?lang=${lang.value}&page=1&limit=6&selected=true&category_id=6234035d7390d4258500d88c`
      ),
      axios.get(
        `/bulletin?lang=${lang.value}&page=1&limit=6&selected=true&category_id=623402ee7390d4258500d889`
      ),
      axios.get(
        `/bulletin?lang=${lang.value}&page=1&limit=3&selected=true&category_id=623403947390d4258500d88f`
      ),
    ]);

    const berita: NewsMenuModel[] = response[0].data.data.data?.map(
      (res: any) => NewsMenuMaker.create(res)
    );

    const bulletinInovasion: BulletinModel[] = response[1].data.data.data?.map(
      (res: any) => BulletinMaker.create(res)
    );

    const bulletinCooperation: BulletinModel[] = response[2].data.data.data?.map(
      (res: any) => BulletinMaker.create(res)
    );
    const bulletinFaculty: BulletinModel[] = response[3].data.data.data?.map(
      (res: any) => BulletinMaker.create(res)
    );

    return {
      props: {
        berita,
        bulletinInovasion,
        bulletinCooperation,
        bulletinFaculty,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    console.log('ERROR: ');
    console.log(e);
    return {
      props: {
        berita: [],
        bulletinInovasion: [],
        bulletinCooperation: [],
        bulletinFaculty: [],
      } as Props,
      revalidate: 30,
    };
  }
};

const Home: NextPage<Props> = ({
  berita,
  bulletinInovasion,
  bulletinCooperation,
  bulletinFaculty,
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
          {getKeyValue(sentences.berita)(selectLanguage(language))} |
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
                        style={{ borderBottom: '3px solid rgb(0, 105, 55)' }}
                        className={`nav-link active figure  ${
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
                    <li className="nav-item" key="Journal">
                      <div
                        aria-hidden
                        className={`nav-link figure ${
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
        <Berita contents={berita || []} language={language as string} />
        <BulletinInovation
          contents={bulletinInovasion || []}
          language={language as string}
        />
        <BulletinCooperation
          contents={bulletinCooperation || []}
          language={language as string}
        />
        <BulletinFaculty
          contents={bulletinFaculty || []}
          language={language as string}
        />
      </>
    </div>
  );
};

export default Home;
