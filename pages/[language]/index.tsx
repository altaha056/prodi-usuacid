/* eslint-disable react/jsx-one-expression-per-line */
// import Block from '@/page-components/home/block';
// import BlockModel, { BlockMaker } from '@/models/block';
// import Berita from '@/page-components/home/berita';
import HeadLine from '@/page-components/home/headline';
import SelectedFocus from '@/page-components/home/rilis-berita';
import SelectedFocuss from '@/page-components/home/rilis-riset-unggulan';
import Berita from '@/page-components/home/index-berita';
import Research from '@/page-components/home/index-research';
import HeadlineModel, { HeadlineMaker } from '@/models/headline';
import Head from 'next/head';
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import UsuInNumber from '@/page-components/home/usu-in-number';
import UsuInNumberBackroundModel, {
  UsuInNumberBgMaker,
} from '@/models/usu-in -number-bg-model';
import UsuInNumberModel, {
  UsuInNumberMaker,
} from '@/models/usu-in-number-model';
import ExcellentResearch from '@/page-components/home/excellent-research';
import axios from '@/config/axios';
import ResearchModel, { ResearchMaker } from '@/models/research';
import PublicLecture from '@/page-components/home/public-lecture';
import FakultasSekolah from '@/page-components/home/fakultas-sekolah';
import KehidupanKampus from '@/page-components/home/kehidupan-kampus';
import NewBlok from '@/page-components/home/new-blok';
import PublicLectureModel, {
  PublicLectureMaker,
} from '@/models/public-lecture';
import Dedication from '@/page-components/home/dedication';
import DedicationModel, { DedicationMaker } from '@/models/dedication';
import NewsMenuModel, { NewsMenuMaker } from '@/models/news-menu';
import Agenda from '@/page-components/home/agenda';
import AgendaModel, { AgendaMaker } from '@/models/agenda';
import Figure from '@/page-components/home/figure';
import FigureModel, { FigureMaker } from '@/models/figure';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { useRouter } from 'next/router';
import MainFocusModel, { MainFocusMaker } from '@/models/main-focus';
import { NextPage } from 'next';
import LoadingSSO from '@/page-components/common/loading';
import ArticleModel, { ArticleMaker } from '@/models/article';
import 'react-quill/dist/quill.snow.css';
import ReactGA from 'react-ga';

interface Props {
  headlines: HeadlineModel[];
  selectedFocus: NewsMenuModel | null;
  indexBerita: NewsMenuModel[];
  usuInNumber: UsuInNumberModel | null;
  usuInNumberBgImage: UsuInNumberBackroundModel | null;
  selectedFocuss: ResearchModel | null;
  indexResearch: ResearchModel[];
  fakultasSekolah: PublicLectureModel[];
  dedication: DedicationModel[];
  kehidupanKampus: PublicLectureModel[];
  newBlok: PublicLectureModel[];
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
      axios.get(`/news-menu?lang=${lang.value}&selected=true&`),
      axios.get(`/news-menu?lang=${lang.value}&page=1&limit=4&selected=true`),
      axios.get('/usu-fact'),
      axios.get('/usu-fact-bg'),
      axios.get(`/research?lang=${lang.value}&selected=true&`),
      axios.get(`/research?lang=${lang.value}&page=1&limit=4&selected=true`),
      axios.get(
        `/public-lecture?lang=${lang.value}&page=1&limit=8&selected=true`
      ),
      axios.get(`/dedication?lang=${lang.value}&page=1&limit=3&selected=true`),
    ]);
    console.log(response[0].data);

    const headlines: HeadlineModel[] = response[0].data.data?.map(
      (res: any) => HeadlineMaker.create({ ...res, imageHeight: '100vh' }) || []
    );
    const selectedFocus: NewsMenuModel = response[1].data.data.data[0]
      ? NewsMenuMaker.create(response[1].data.data.data[0])
      : (null as any);

    const indexBerita: NewsMenuModel[] = response[2].data.data.data?.map(
      (res: any) => NewsMenuMaker.create(res)
    );

    const usuInNumber: UsuInNumberModel = UsuInNumberMaker.create(
      response[3].data.data
    );
    const usuInNumberBgImage: UsuInNumberBackroundModel = UsuInNumberBgMaker.create(
      response[4].data.data
    );
    const selectedFocuss: ResearchModel = response[5].data.data.data[0]
      ? ResearchMaker.create(response[5].data.data.data[0])
      : (null as any);

    const indexResearch: ResearchModel[] = response[6].data.data.data?.map(
      (res: any) => ResearchMaker.create(res)
    );
    const fakultasSekolah: PublicLectureModel[] = response[7].data.data?.map(
      (res: any) => PublicLectureMaker.create(res)
    );

    const dedication: DedicationModel[] = response[8].data.data.data?.map(
      (res: any) => DedicationMaker.create(res)
    );
    const kehidupanKampus: PublicLectureModel[] = response[7].data.data?.map(
      (res: any) => PublicLectureMaker.create(res)
    );
    const newBlok: PublicLectureModel[] = response[7].data.data?.map(
      (res: any) => PublicLectureMaker.create(res)
    );

    console.log(headlines);
    return {
      props: {
        headlines,
        selectedFocus,
        indexBerita,
        usuInNumber,
        usuInNumberBgImage,
        selectedFocuss,
        indexResearch,
        fakultasSekolah,
        dedication,
        kehidupanKampus,
        newBlok,
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
        indexBerita: [],
        usuInNumber: null,
        usuInNumberBgImage: null,
        selectedFocuss: null,
        indexResearch: [],
        fakultasSekolah: [],
        dedication: [],
        kehidupanKampus: [],
        newBlok: [],
      } as Props,
      revalidate: 30,
    };
  }
};

const Home: NextPage<Props> = ({
  headlines,
  selectedFocus,
  indexBerita,
  usuInNumber,
  usuInNumberBgImage,
  selectedFocuss,
  indexResearch,
  fakultasSekolah,
  dedication,
  kehidupanKampus,
  newBlok,
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
          {getKeyValue(sentences.beranda)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <>
        <HeadLine contents={headlines || []} />
        <SelectedFocus content={selectedFocus} />
        <Berita contents={indexBerita || []} language={language as string} />
        <UsuInNumber contents={usuInNumber} bgImage={usuInNumberBgImage} />
        <FakultasSekolah
          contents={fakultasSekolah || []}
          language={language as string}
        />
        <SelectedFocuss content={selectedFocuss} />
        <Research
          contents={indexResearch || []}
          language={language as string}
        />
        <Dedication contents={dedication || []} language={language as string} />
        <KehidupanKampus
          contents={kehidupanKampus || []}
          language={language as string}
        />
      </>
    </div>
  );
};

export default Home;
