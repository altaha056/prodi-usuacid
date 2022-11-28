/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
import HeadLine from '@/page-components/home/headline-ttgusu';
import SelectedFocus from '@/page-components/home/riset-unggulan-penelitian';
import HeadlineModel, { HeadlineMaker } from '@/models/headline';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
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
import ArticlePage from '../pimpinan_universitas';
import { ChevronDown } from 'react-feather';
import classNames from 'classnames';

interface Props {
  headlines: HeadlineModel[];
  selectedFocus: ResearchModel | null;
  indexResearch: ResearchModel[];
  fakultasSekolah: PublicLectureModel[];
  indexDedication: DedicationModel[];
}

interface ITempVisiMisi {
  title: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  line6: string;
  line7: string;
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
  const [visiMisi, setVisiMisi] = useState<ITempVisiMisi[]>([
    {
      title: 'Vision',
      line1:
        'To become a university that has academic excellence as a barometer of scientific progress that is able to compete in the global world level',
      line2: '',
      line3: '',
      line4: '',
      line5: '',
      line6: '',
      line7: '',
    },
    {
      title: 'Mision',
      line1:
        '1. Organizing higher education based on autonomy which is a forum for character development and professionalism of human resources based on empowerment that contains the spirit of democratization of education that recognizes pluralism with an educational orientation that emphasizes the aspect of seeking alternative solutions to actual problems based on scientific, moral, and conscience studies;',
      line2:
        '2. Produce graduates who become agents of change as a force of modernization in the life of the wider community, who have scientific competence, strong relevance and competitiveness, as well as ethical intellectual behavior;',
      line3:
        'and 3. Implement, develop, and improve education, research culture and community service programs in the context of improving academic quality by developing superior knowledge, which is beneficial for changing the lives of the wider community for the better.',
      line4: '',
      line5: '',
      line6: '',
      line7: '',
    },
    {
      title: 'Goals',
      line1:
        '1. Produce quality graduates who are able to develop science, technology, humanities, and arts, based on religious morals, and are able to compete at national and international levels',
      line2:
        '2. Produce innovative research that encourages the development of science, technology, humanities, and arts in national and international scope;',
      line3:
        "3. Generate reasoning-based community service and research work that is useful in advancing general welfare and educating the nation's life and empowering the community in an innovative way so that the community is able to solve problems independently and sustainably;",
      line4:
        '4. Realizing self-reliance that is adaptive, creative, and proactive towards community demands and development challenges, both nationally and internationally;',
      line5:
        '5. Improving the quality of learning management on an ongoing basis to achieve excellence in national and international competition and cooperation;',
      line6:
        '6. Become a moral and intellectual force in building Indonesian civil society; and',
      line7:
        '7. Developing the potential of students to become human beings who believe and fear God Almighty and have noble character, are healthy, knowledgeable, capable, creative, independent, skilled, competent, and cultured for the benefit of the nation.',
    },
  ]);
  const [openedVisiMisi, setOpenedVisiMisi] = useState<string[]>([]);

  if ([typeof headlines].includes('undefined') || router.isFallback) {
    return <LoadingSSO />;
  }

  const toggleOpenVisiMisi = (title: string) => {
    const isOpen = openedVisiMisi.includes(title);

    let updated: string[] = [];
    if (isOpen) {
      updated = openedVisiMisi.filter((openedTitle) => openedTitle !== title);
    } else {
      updated = [...openedVisiMisi, title];
    }
    setOpenedVisiMisi(updated);
  };

  console.log(headlines);
  return (
    <div>
      <Head>
        <title>
          {getKeyValue(sentences.tentangUSU)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <>
        <section
          className="about-USU"
          style={{ backgroundImage: `url(/images/ttgusu.jpg)` }}
        >
          <div className="container">
            <div className="page-desc col-md-6">
              <div className="section-subtittle__subtitle">
                {getKeyValue(sentences.tentangUSU)(selectLanguage(language))}
              </div>
              <div className="section-subtittle__detail">
                {getKeyValue(sentences.tentangUSU_outline)(
                  selectLanguage(language)
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="section-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="section-body__title">History</p>
                <p className="section-body__teks">
                  The history of the University of North Sumatra (USU) begins
                  with the establishment of the University of North Sumatra
                  Foundation on the 4th June 1952. The establishment of this
                  foundation was spearheaded by the Governor North Sumatra to
                  fulfill the wishes of the people of Sumatra North in
                  particular and Indonesian society in general.
                </p>
                <p className="section-body__teks">
                  During the Japanese occupation, several prominent people in
                  Medan including Dr. Pirngadi and Dr. T. Mansoer made College
                  of Medicine design. After independence Indonesia, the
                  government appointed Dr. Mohd. Djamil on the Hill High as
                  chairman of the committee. After restoration of sovereignty
                  due to the clash in 1947, Governor Abdul Hakim took the
                  initiative to encourage people throughout North Sumatra
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="section-body__img"
                  src="/images/sejarahkampus1.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="section-body__img1"
                  src="/images/sejarahkampus2.jpg"
                />
              </div>
              <div className="col-md-6">
                <p className="section-body__teks1">
                  On December 31, 1951 a preparatory committee was formed
                  establishment of a university chaired by Dr. Soemarsono whose
                  members consist of Dr. Ahmad Sofian, Ir. Danunagoro and
                  secretary Mr. Djaidin Purba. As a result of cooperation and
                  moral and material assistance from all Sumatran people North,
                  which at that time also included the Special Region of Aceh,
                  On August 20, 1952, the Faculty was successfully established
                  Medicine on the Spooky Road with twenty-seven people students
                  including two women. Then followed with the establishment of
                  the Faculty of Law and Public Knowledge (1954),
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-numberusu" style={{ marginTop: '50px' }}>
              <h1>Leader of University</h1>
            </div>
            <hr className="article-item row section-numberusu__garisoren" />
            <div className="row">
              <div className="col-md-6">
                <p className="section-body__pimpinantitle">
                  Dr. Muryanto Amin, S.Sos, M.Si
                </p>
                <p className="section-body__pimpinanteks">
                  Rektor Universitas Sumatera Utara
                </p>
                <p className="section-body__pimpinanteks1">
                  Dr Muryanto Amin, S Sos, M Si, appointed as Chancellor
                  University of North Sumatra (USU) for the period 2021-2026, on
                  January 28, 2021, at the Kemendikbudristek Building, Jakarta
                  Center. Former Dean of USU's Faculty of Social and Political
                  Sciences This is the youngest USU Chancellor, who was sworn in
                  at the age of 47 years.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="section-body__pimpinanimg"
                  src="/images/pakrektor.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-body-pimpinan">
          <ArticlePage photos={null} />
        </section>
        <section className="section-body-profil">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="section-body-profil__title">Campus Profile</p>
                <p className="section-body-profil__teks">
                  USU's campus is located in Padang Bulan with an area of 120 ha
                  which is located in the center of Medan City. 90 ha academic
                  zone can accommodate almost all lecture and practicum
                  activities college student. The learning system is supported
                  by facilities library and more than 200 laboratories. library
                  provide various types of learning resources, both in the form
                  of print and electronic
                </p>
                <p className="section-body-profil__teks">
                  Padang Bulan Campus has information technology infrastructure
                  to facilitate access to various resources information and
                  knowledge to support the learning process and student and
                  faculty research. Besides, inside The campus also has various
                  facilities, such as dormitories, arenas sports, guesthouses,
                  cafeterias, shops, banks and post offices. Graduation and
                  various academic events
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="section-body-profil__img"
                  src="/images/profilkampus.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="visi-misi">
          <div className="container">
            <div className="visi-misi__title">
              Vision, Mision & <br />
              Goals
            </div>
            <div className="visi-misi__list">
              {visiMisi.map((item, index) => (
                <div
                  className={classNames('visi-misi__item', {
                    active: openedVisiMisi.includes(item.title),
                  })}
                  key={`visi-misi-${item.title}`}
                >
                  <div
                    className="visi-misi__item__title"
                    onClick={() => toggleOpenVisiMisi(item.title)}
                  >
                    {item.title} <ChevronDown />
                  </div>
                  <div className="visi-misi__item__desc">{item.line1}</div>
                  <div className="visi-misi__item__desc">{item.line2}</div>
                  <div className="visi-misi__item__desc">{item.line3}</div>
                  <div className="visi-misi__item__desc">{item.line4}</div>
                  <div className="visi-misi__item__desc">{item.line5}</div>
                  <div className="visi-misi__item__desc">{item.line6}</div>
                  <div className="visi-misi__item__desc">{item.line7}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Home;
