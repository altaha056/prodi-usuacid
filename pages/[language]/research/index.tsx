/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-one-expression-per-line */
import HeadLine from '@/page-components/home/headline-penelitian';
import SelectedFocus from '@/page-components/home/riset-unggulan-penelitian';
import SelectedFocuss from '@/page-components/home/index-update-terkini';
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
import FakultasSekolah from '@/page-components/home/lembaga-penelitian';
import PublicLectureModel, {
  PublicLectureMaker,
} from '@/models/public-lecture';
import IndexJurnal from '@/page-components/home/index-jurnal-pilihan';
import JournalModel, { JournalMaker } from '@/models/journal';

interface Props {
  headlines: HeadlineModel[];
  selectedFocus: ResearchModel | null;
  selectedFocuss: ResearchModel | null;
  indexResearch: ResearchModel[];
  fakultasSekolah: PublicLectureModel[];
  indexJurnal: JournalModel[];
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
      axios.get(`/research?lang=${lang.value}&page=1&limit=4&selected=true`),
      axios.get(
        `/public-lecture?lang=${lang.value}&page=1&limit=8&selected=true`
      ),
      axios.get(
        `/journal?lang=${lang.value}&page=1&limit=4&selected=true&category_id=623405297390d4258500d89e&`
      ),
    ]);
    console.log(response[0].data);

    const headlines: HeadlineModel[] = response[0].data.data?.map(
      (res: any) => HeadlineMaker.create({ ...res, imageHeight: '100vh' }) || []
    );
    const selectedFocus: ResearchModel = response[1].data.data.data[0]
      ? ResearchMaker.create(response[1].data.data.data[0])
      : (null as any);
    const selectedFocuss: ResearchModel = response[1].data.data.data[0]
      ? ResearchMaker.create(response[1].data.data.data[0])
      : (null as any);

    const indexResearch: ResearchModel[] = response[2].data.data.data?.map(
      (res: any) => ResearchMaker.create(res)
    );
    const fakultasSekolah: PublicLectureModel[] = response[3].data.data?.map(
      (res: any) => PublicLectureMaker.create(res)
    );
    const indexJurnal: JournalModel[] = response[4].data.data.data?.map(
      (res: any) => JournalMaker.create(res)
    );

    console.log(headlines);
    return {
      props: {
        headlines,
        selectedFocus,
        selectedFocuss,
        indexResearch,
        fakultasSekolah,
        indexJurnal,
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
        selectedFocuss: null,
        indexResearch: [],
        fakultasSekolah: [],
        indexJurnal: [],
      } as unknown as Props,
      revalidate: 30,
    };
  }
};

const Home: NextPage<Props> = ({
  headlines,
  selectedFocus,
  selectedFocuss,
  indexResearch,
  fakultasSekolah,
  indexJurnal,
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
          {getKeyValue(sentences.penelitian)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <>
        <section
          className="above-the-research"
          style={{
            backgroundImage: `url(/images/headline-penelitian.jpg)`,
          }}
        >
          <div className="container">
            <div className="page-desc col-md-7">
              <div className="section-subtittle__subtitle">
                {getKeyValue(sentences.penelitian)(selectLanguage(language))}
              </div>
              <div className="section-subtittle__detail">
                {getKeyValue(sentences.penelitian_outline)(
                  selectLanguage(language)
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row no-gutters">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="section-title-headline__angka">
                    <h1>
                      1204<sup>+</sup>
                    </h1>
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="section-title-headline__teks">
                    {getKeyValue(sentences.penelitian_jurnal)(
                      selectLanguage(language)
                    )}
                  </p>
                </div>
                <p className="section-title-headline__outline">
                  {getKeyValue(sentences.penelitian_kata)(
                    selectLanguage(language)
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section" style={{ paddingTop: '50px' }}>
          <div className="container">
            <div className="section-rilis">
              <span className="section-rilis__titlepenelitian">
                <h1>
                  <b>
                    {getKeyValue(sentences.hasilPenelitian)(
                      selectLanguage(language)
                    )}
                  </b>
                </h1>
              </span>
              <div className="section-rilis__dasarorenpenelitian row">
                <div className="col-md-10">
                  <p className="section-rilis__datePenelitian" />
                  <p className="section-rilis__subtitle" />
                  <p className="section-rilis__isi">
                    <span>
                      University of North Sumatra (USU) Research Results
                      published in various research products, namely:
                      International Scientific Articles, Speakers at the Forum
                      International Scientific, Intellectual Property Rights
                      (IPR), Organizing Scientific Forums, Textbooks, and
                      Community Service On Society.
                    </span>
                  </p>
                  <p className="section-rilis__selanjutnya">
                    <a
                      href="https://penelitian.usu.ac.id/penelitian-pengabdian"
                      target="_blank"
                      className="button-custom"
                      style={{
                        fontFamily: 'sans-serif',
                        color: 'black',
                      }}
                    >
                      {getKeyValue(sentences.BacaSelanjutnya_content)(
                        selectLanguage(language)
                      )}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="container"
          style={{ marginBottom: '200px', marginTop: '-100px' }}
        >
          <div className="section-title-headline__jurnal">
            <h1>
              {getKeyValue(sentences.jurnalPilihan)(selectLanguage(language))}
            </h1>
          </div>
          <hr className="section-title-headline__garisoren" />
        </div>
        <IndexJurnal
          contents={indexJurnal || []}
          language={language as string}
        />
        <div className="container">
          <div className="section-title-headline__jurnal">
            <h1>
              {getKeyValue(sentences.updateTerkini)(selectLanguage(language))}
            </h1>
          </div>
          <hr className="section-title-headline__garisoren" />
        </div>
        <section
          className="ftco-section section-terkini-wrapper"
          style={{ marginBottom: '-130px', marginTop: '-10px' }}
        >
          <div className="container">
            <div className="section-terkini">
              <div className="section-terkini__dasarputih row">
                <div className="col-md-10">
                  <span className="section-terkini__title" />
                  <p className="section-terkini__date" />
                  <p className="section-terkini__subtitle">
                    <span />
                  </p>
                  <p className="section-terkini__isi">
                    <span>
                      The latest news regarding research info and announcements
                      SIMLITABMAS which starts from the acceptance of the
                      proposal until the to the final report process.
                    </span>
                  </p>
                  <p className="section-terkini__selanjutnya">
                    <a
                      href="https://penelitian.usu.ac.id/"
                      target="_blank"
                      className="button-custom"
                      style={{
                        fontFamily: 'sans-serif',
                        color: 'white',
                      }}
                    >
                      {getKeyValue(sentences.BacaSelanjutnya_content)(
                        selectLanguage(language)
                      )}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SelectedFocus content={selectedFocus} />
        <Research
          contents={indexResearch || []}
          language={language as string}
        />
        {/* <FakultasSekolah
          contents={fakultasSekolah || []}
          language={language as string}
        /> */}
        <section className="section-lembagapenelitianteks">
          <div className="section-lembagapenelitianteks_wrapper">
            <div className="row">
              <div className="col-md-8">
                <div className="section-lembagapenelitianteks__title">
                  {getKeyValue(sentences.LP)(selectLanguage(language))}
                  <br />
                  Universitas Sumatera Utara
                </div>
              </div>
              <div className="col-md-7 justify-content-left text-left">
                <div className="section-lembagapenelitianteks__detail">
                  {getKeyValue(sentences.LP_outline)(selectLanguage(language))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-lembagapenelitian-img">
          <div className="container">
            <div className="row" />
          </div>
          <div className="lembagapenelitian-img__image">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="image">
                    <img src="/images/dekor1.jpeg" alt="" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="image">
                    <img src="/images/F2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="image">
                    <img src="/images/F3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faculty-intro__desc">
            <div className="container">
              <div className="row" />
            </div>
          </div>
        </section>

        <section className="button-link">
          <div className="container">
            <a
              className="button-link__title"
              href="https://penelitian.usu.ac.id/"
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
