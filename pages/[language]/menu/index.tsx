/* eslint-disable react/jsx-one-expression-per-line */
import Head from 'next/head';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from '@/config/axios';
import Figure from '@/page-components/home/figure';
import FigureModel, { FigureMaker } from '@/models/figure';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import LoadingSSO from '@/page-components/common/loading';
import 'react-quill/dist/quill.snow.css';
import ReactGA from 'react-ga';
import Link from 'next/link';
import AgendaPage from './menu-agenda';

interface Props {
  figure: FigureModel[];
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
      axios.get(`/figure?lang=${lang.value}`),
    ]);
    console.log(response[0].data);

    let figureRes: any[] = [];
    response[0].data.data?.forEach((res: any) => {
      if (res) {
        figureRes = [...figureRes, res];
      }
    });
    const figure: FigureModel[] = figureRes.map((res: any) =>
      FigureMaker.create(res)
    );

    return {
      props: {
        figure,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    console.log('ERROR: ');
    console.log(e);
    return {
      props: {
        figure: [],
      } as Props,
      revalidate: 30,
    };
  }
};

const Home: NextPage<Props> = ({ figure }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;

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
        <div className="row no-gutters">
          <div className="col-md-8">
            <section className="ftco-section" style={{ marginTop: '50px' }}>
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="section-option__direktori">
                    <p>
                      <Link href="https://direktori.usu.ac.id/">
                        <a style={{ color: 'black' }}>
                          {getKeyValue(sentences.direktori)(
                            selectLanguage(language)
                          )}
                        </a>
                      </Link>
                      <hr className="section-option__garisabu" />
                    </p>
                    <p>
                      <Link href="https://portal.usu.ac.id/login/login.php">
                        <a style={{ color: 'black' }}>
                          {getKeyValue(sentences.Portal)(
                            selectLanguage(language)
                          )}
                        </a>
                      </Link>
                      <hr className="section-option__garisabu" />
                    </p>
                    <p>
                      <Link href="https://ppid.usu.ac.id/images/petaUSU.pdf">
                        <a style={{ color: 'black' }}>
                          {getKeyValue(sentences.Peta)(
                            selectLanguage(language)
                          )}
                        </a>
                      </Link>
                      <hr className="section-option__garisabu" />
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-option__direktor2">
                    <p className="section-option__artikel">Agenda</p>
                    <AgendaPage photos={[]} />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-4">
            <Figure contents={figure || []} language={language as string} />
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
