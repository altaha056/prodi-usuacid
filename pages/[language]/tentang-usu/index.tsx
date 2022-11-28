/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
import { ChevronDown } from 'react-feather';
import classNames from 'classnames';
import ArticlePage from '../pimpinan_universitas';

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
      title: 'Visi',
      line1:
        'Menjadi perguruan tinggi yang memiliki keunggulan akademik sebagai barometer kemajuan ilmu pengetahuan yang mampu bersaing dalam tataran dunia global',
      line2: '',
      line3: '',
      line4: '',
      line5: '',
      line6: '',
      line7: '',
    },
    {
      title: 'Misi',
      line1:
        '1. Menyelenggarakan pendidikan tinggi berbasis otonomi yang menjadi wadah bagi pengembangan karakter dan profesionalisme sumber daya manusia yang didasarkan pada pemberdayaan yang mengandung semangat demokratisasi pendidikan yang mengakui kemajemukan dengan orientasi pendidikan yang menekankan pada aspek pencarian alternatif penyelesaian masalah aktual berlandaskan kajian ilmiah, moral, dan hati nurani;',
      line2:
        '2. Menghasilkan lulusan yang menjadi pelaku perubahan sebagai kekuatan modernisasi dalam kehidupan masyarakat luas, yang memiliki kompetensi keilmuan, relevansi dan daya saing yang kuat, serta berperilaku kecendikiawanan yang beretika;',
      line3:
        'dan 3. Melaksanakan, mengembangkan, dan meningkatkan pendidikan, budaya penelitian dan program pengabdian masyarakat dalam rangka peningkatan kualitas akademik dengan mengembangkan ilmu yang unggul, yang bermanfaat bagi perubahan kehidupan masyarakat luas yang lebih baik.',
      line4: '',
      line5: '',
      line6: '',
      line7: '',
    },
    {
      title: 'Tujuan',
      line1:
        '1. Menghasilkan lulusan yang berkualitas yang mampu mengembangkan ilmu pengetahuan, teknologi, humaniora, dan seni, berdasarkan moral agama, serta mampu bersaing di tingkat nasional dan internasional',
      line2:
        '2. Menghasilkan penelitian inovatif yang mendorong pengembangan ilmu pengetahuan, teknologi, humaniora, dan seni dalam lingkup nasional dan internasional;',
      line3:
        '3. Menghasilkan pengabdian kepada masyarakat berbasis penalaran dan karya penelitian yang bermanfaat dalam memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa dan pemberdayaan masyarakat secara inovatif agar masyarakat mampu menyelesaikan masalah secara mandiri dan berkelanjutan;',
      line4:
        '4. Mewujudkan kemandirian yang adaptif, kreatif, dan proaktif terhadap tuntutan masyarakat dan tantangan pembangunan, baik secara nasional dan internasional;',
      line5:
        '5. Meningkatkan kualitas manajemen pembelajaran secara berkesinambungan untuk mencapai keunggulan dalam persaingan dan kerja sama nasional dan internasional;',
      line6:
        '6. Menjadi kekuaan moral dan intelektual dalam membangun masyarakat madani Indonesia; dan',
      line7:
        '7. Mengembangkan potensi mahasiswa agar menjadi manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa serta berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri, terampil, kompeten, dan berbudaya untuk kepentingan bangsa.',
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
          className="above-the-fold"
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
                <p className="section-body__title">Sejarah Kampus</p>
                <p className="section-body__teks">
                  Sejarah Universitas Sumatera Utara (USU) dimulai dengan
                  berdirinya Yayasan Universitas Sumatera Utara pada tanggal 4
                  Juni 1952. Pendirian yayasan ini dipelopori oleh Gubernur
                  Sumatera Utara untuk memenuhi keinginan masyarakat Sumatera
                  Utara khususnya dan masyarakat Indonesia umumnya.
                </p>
                <p className="section-body__teks">
                  Pada zaman pendudukan Jepang, beberapa orang terkemuka di
                  Medan termasuk Dr. Pirngadi dan Dr. T. Mansoer membuat
                  rancangan perguruan tinggi Kedokteran. Setelah kemerdekaan
                  Indonesia, pemerintah mengangkat Dr. Mohd. Djamil di Bukit
                  Tinggi sebagai ketua panitia. Setelah pemulihan kedaulatan
                  akibat clash pada tahun 1947, Gubernur Abdul Hakim mengambil
                  inisiatif menganjurkan kepada rakyat di seluruh Sumatera Utara
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
                  src="/images/firstCollege.jpg"
                />
              </div>
              <div className="col-md-6">
                <p className="section-body__teks1">
                  Pada tanggal 31 Desember 1951 dibentuk panitia persiapan
                  pendirian perguruan tinggi yang diketuai oleh Dr. Soemarsono
                  yang anggotanya terdiri dari Dr. Ahmad Sofian, Ir. Danunagoro
                  dan sekretaris Mr. Djaidin Purba. Sebagai hasil kerjasama dan
                  bantuan moril dan material dari seluruh masyarakat Sumatera
                  Utara yang pada waktu itu meliputi juga Daerah Istimewa Aceh,
                  pada tanggal 20 Agustus 1952 berhasil didirikan Fakultas
                  Kedokteran di Jalan Seram dengan dua puluh tujuh orang
                  mahasiswa diantaranya dua orang wanita. Kemudian disusul
                  dengan berdirinya Fakultas Hukum dan Pengetahuan Masyarakat
                  (1954),
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-numberusu" style={{ marginTop: '50px' }}>
              <h1>Pimpinan Universitas</h1>
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
                  Dr Muryanto Amin, S Sos, M Si, dilantik sebagai Rektor
                  Universitas Sumatera Utara (USU) periode 2021-2026, pada
                  tanggal 28 Januari 2021, di Gedung Kemendikbudristek, Jakarta
                  Pusat. Mantan Dekan Fakultas Ilmu Sosial dan Ilmu Politik USU
                  tersebut merupakan Rektor USU termuda, yang dilantik pada usia
                  47 tahun.
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
                <p className="section-body-profil__title">Profil Kampus</p>
                <p className="section-body-profil__teks">
                  Kampus USU berlokasi di Padang Bulan dengan area seluas 120 ha
                  yang terletak di tengah Kota Medan. Zona akademik seluas 90 ha
                  dapat menampung hampir seluruh kegiatan kuliah dan praktikum
                  mahasiswa. Sistem pembelajaran didukung oleh fasilitas
                  perpustakaan dan lebih dari 200 laboratorium. Perpustakaan
                  menyediakan berbagai jenis sumber belajar, baik dalam bentuk
                  cetak maupun elektronik
                </p>
                <p className="section-body-profil__teks">
                  Kampus Padang Bulan memiliki infrastrukturteknologi informasi
                  untuk memfasilitasi akses terhadap berbagai sumber daya
                  informasi dan pengetahuan untuk mendukung proses pembelajaran
                  dan penelitian mahasiswa dan dosen. Selain itu, di dalam
                  kampus juga terdapat berbagai sarana, seperti asrama, arena
                  olahraga, wisma, kafetaria, toko, bank, dan kantor pos. Wisuda
                  dan berbagai acara akademik
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
              Visi, Misi & <br />
              Tujuan
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
