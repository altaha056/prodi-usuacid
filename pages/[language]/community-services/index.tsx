/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
import HeadLine from '@/page-components/home/headline-abdimas';
import SelectedFocus from '@/page-components/home/riset-unggulan-penelitian';
import HeadlineModel, { HeadlineMaker } from '@/models/headline';
import Head from 'next/head';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from '@/config/axios';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { useRouter } from 'next/router';
import ResearchModel, { ResearchMaker } from '@/models/research';
import { NextPage } from 'next';
import LoadingSSO from '@/page-components/common/loading';
import 'react-quill/dist/quill.snow.css';
import ReactGA from 'react-ga';
import Research from '@/page-components/home/index-research';
import FakultasSekolah from '@/page-components/home/lembaga-pengabdian';
import DedicationModel, { DedicationMaker } from '@/models/dedication';
import IndexDedication from '@/page-components/home/index-dedication';
import PublicLectureModel, {
  PublicLectureMaker,
} from '@/models/public-lecture';

interface Props {
  headlines: HeadlineModel[];
  selectedFocus: ResearchModel | null;
  indexResearch: ResearchModel[];
  fakultasSekolah: PublicLectureModel[];
  indexDedication: DedicationModel[];
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
    const response = await Promise.all([
      axios.get(`/headline?lang=${lang.value}&selected=true`),
      axios.get(`/research?lang=${lang.value}&selected=true`),
      axios.get(
        `/public-lecture?lang=${lang.value}&page=1&limit=8&selected=true`
      ),
      axios.get(`/dedication?lang=${lang.value}&page=1&limit=3&selected=true`),
    ]);
    console.log(response[0].data);

    const headlines: HeadlineModel[] = response[0].data.data?.map(
      (res: any) => HeadlineMaker.create({ ...res, imageHeight: '100vh' }) || []
    );
    const selectedFocus: ResearchModel = response[1].data.data.data[0]
      ? ResearchMaker.create(response[1].data.data.data[0])
      : (null as any);

    const indexResearch: ResearchModel[] = response[1].data.data.data?.map(
      (res: any) => ResearchMaker.create(res)
    );
    const fakultasSekolah: PublicLectureModel[] = response[2].data.data?.map(
      (res: any) => PublicLectureMaker.create(res)
    );
    const indexDedication: DedicationModel[] = response[3].data.data.data?.map(
      (res: any) => DedicationMaker.create(res)
    );

    console.log(headlines);
    return {
      props: {
        headlines,
        selectedFocus,
        indexResearch,
        fakultasSekolah,
        indexDedication,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    console.log('ERROR: ');
    console.log(e);
    return {
      props: {
        headlines: [],
        selectedFocus: null,
        indexResearch: [],
        fakultasSekolah: [],
        IndexDedication: [],
      } as unknown as Props,
      revalidate: 30,
    };
  }
};

const Home: NextPage<Props> = ({
  headlines,
  selectedFocus,
  indexResearch,
  fakultasSekolah,
  indexDedication,
}) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;

  if ([typeof headlines].includes('undefined') || router.isFallback) {
    return <LoadingSSO />;
  }

  console.log(headlines);
  return (
    <div>
      <Head>
        <title>
          {getKeyValue(sentences.pengabdian)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <>
        <section
          className="above-the-fold"
          style={{
            backgroundImage: `url(/images/headline-abdimas.jpg)`,
          }}
        >
          <div className="container">
            <div className="page-desc col-md-6">
              <div className="section-subtittle__subtitle">
                {getKeyValue(sentences.pengabdian)(selectLanguage(language))}
              </div>
              <div className="section-subtittle__detail">
                {getKeyValue(sentences.pengabdian_outline)(
                  selectLanguage(language)
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="row no-gutters" style={{ paddingTop: '100px' }}>
          <div className="container">
            <div className="section-title-headline__jurnal-abdimas">
              <h1>
                {getKeyValue(sentences.faktaCapaian)(selectLanguage(language))}
                <br />
                LPPM USU
              </h1>
            </div>
            <hr className="section-title-headline__garisoren" />
          </div>
        </div>

        <section className="section-abdimas">
          <div className="container" style={{ marginTop: '-100px' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div
                  className="abdimas-item1"
                  style={{
                    backgroundImage: `url(/images/abdimas1.jpg)`,
                  }}
                >
                  <div className="container">
                    <div className="page-desc col-md-12">
                      <div className="row no-gutters">
                        <div className="col-md-6 section-subtittle__subtitle">
                          12
                        </div>
                        <div className="col-md-5 section-subtittle__detail">
                          Fostered Village Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="abdimas-item2"
                  style={{
                    backgroundImage: `url(/images/abdimas2.jpg)`,
                  }}
                >
                  <div className="container">
                    <div className="page-desc col-md-12">
                      <div className="row no-gutters">
                        <div className="col-md-6 section-subtittle__subtitle">
                          23
                        </div>
                        <div className="col-md-6 section-subtittle__detail">
                          Fostered umkm Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="abdimas-item1"
                  style={{
                    backgroundImage: `url(/images/abdimas3.jpg)`,
                  }}
                >
                  <div className="container">
                    <div className="page-desc col-md-12">
                      <div className="row no-gutters">
                        <div className="col-md-5 section-subtittle__subtitle">
                          8
                        </div>
                        <div className="col-md-5 section-subtittle__detail">
                          Appropriate Technology Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section section-abdimas-usu">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="section-title-headline__teks-abdimas">
                  <h1>
                    {getKeyValue(sentences.pkmusu)(selectLanguage(language))}
                  </h1>
                </div>
              </div>
              <div className="col-md-4">
                <p className="section-title-headline__outline-abdimas">
                  {getKeyValue(sentences.pkmusu_outline)(
                    selectLanguage(language)
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <IndexDedication
          contents={indexDedication || []}
          language={language as string}
        />
        {/* <FakultasSekolah
          contents={fakultasSekolah || []}
          language={language as string}
        /> */}

        <section className="section-counceling">
          <div className="section-counceling_wrapper">
            <div className="row">
              <div className="col-md-8">
                <div className="section-counceling__titleabdimas">
                  Community Service Universitas Sumatera Utara
                </div>
              </div>
              <div className="col-md-9 justify-content-left text-left">
                <div className="section-counceling__detail">
                  Community Service Institute of Universitas Sumatera Utara
                  (LPPM-USU) was established on December 16, 1980 based on the
                  Decree of Minister of Education and Culture of the Republic of
                  Indonesia No.1418/PT05/SK/C.1980.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-faculty-intro">
          <div className="faculty-intro__image">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <img src="/images/dekor1.jpeg" alt="" />
                </div>
                <div className="col-4">
                  <img src="/images/F2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img src="/images/F3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="button-link">
          <div className="container">
            <a
              className="button-link__title"
              href="https://lppm.usu.ac.id/index.php/home"
            >
              {getKeyValue(sentences.laman)(selectLanguage(language))}
            </a>
          </div>
        </section>
      </>
    </div>
  );
};

export default Home;
