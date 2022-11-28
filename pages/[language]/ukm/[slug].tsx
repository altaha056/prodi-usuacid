/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import FacultiesModel, { FacultiesMaker } from '@/models/faculties';
import axios from '@/config/axios';
import ukmDetail from './ukm.json';

interface Props {
  photo: FacultiesModel | null;
  language?: string;
}
export async function getStaticPaths(): Promise<any> {
  return {
    paths: [
      { params: { language: 'id', slug: 'ukm-sepak-bola' } },
      { params: { language: 'en', slug: 'ukm-sepak-bola' } },
    ],
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
      `/photos?lang=${context.params.language}&selected=true&menu=faculties&`
    );

    return {
      props: {
        photos: response.data.data,
      } as unknown as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        photos: [],
      } as unknown as Props,
      revalidate: 30,
    };
  }
};

const ArticlePageFakultas: React.FC = ({}) => {
  const router = useRouter();
  const { language, slug } = router.query;
  const [ukmData, setUkmData] = useState<Record<any, any>>();
  useEffect(() => {
    if (!slug) return;
    const searchUKM = ukmDetail.find((obj) => obj.slug === slug);
    if (!searchUKM) {
      router.push('/');
      return;
    }
    setUkmData(searchUKM);
  }, [slug]);
  const responsive = {
    Desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.beranda)(selectLanguage(language))} | UKM
          Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      {ukmData && (
        <div className="ukm-page">
          <div className="img-hero">
            <img src={ukmData.imageAsset} alt={`UKM ${ukmData.title}`} />
          </div>
          <div className="second-hero">
            <h1>{ukmData.title}</h1>
            <p>{ukmData.subtitle}</p>
            <Link href="/[language]/ukm/[slug]" as={ukmData.url}>
              <button className="btn-green">Our Menu</button>
            </Link>
          </div>
          <div className="ukm-carousel">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {ukmData.imageUrls.map((image: string) => (
                <img
                  className="img-carousel"
                  src={image}
                  alt={`UKM ${ukmData.title}`}
                />
              ))}
            </Carousel>
            <div className="banner-wrapper">
              {ukmData.advantages.map((advantage: string) => (
                <div className="banner">
                  <button className="btn-green">
                    <img
                      src="/images/icons/check-secondary.png"
                      alt="Check Icon"
                    />
                  </button>
                  <h6>{advantage}</h6>
                </div>
              ))}
            </div>
          </div>
          <div className="galeri-ukm">
            <h1>Galeri UKM</h1>
            <p className="subtitle">{ukmData.description}</p>
            <div className="two-card-wrapper">
              <div className="ukm-card">
                <h1>{ukmData.enTitle}</h1>
                <p>
                  There's something for everybody. Follow along, chat on
                  Discord, or read up on what we’re doing.
                </p>
                <a href={ukmData.communityURL}>
                  <button className="btn-yellow">Get Started</button>
                </a>
              </div>
              <div className="ukm-card">
                <h1>Become a Validator</h1>
                <p>
                  There's something for everybody. Follow along, chat on
                  Discord, or read up on what we’re doing.
                </p>
                <a href={ukmData.validatorURL}>
                  <button className="btn-yellow">Get Started</button>
                </a>
              </div>
            </div>
            <div className="single-card-wrapper">
              <div className="ukm-card">
                <div className="ukm-card-left">
                  <h1>Informasi UKM</h1>
                </div>
                <div className="ukm-card-right">
                  <p>{ukmData.informasiUKM}</p>
                  <Link href="/[language]/ukm/[slug]" as={ukmData.url}>
                    <button className="btn-yellow">
                      <img src="/images/icons/launch-icon.png" alt="launch" />
                      <p>Kunjungi Laman</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticlePageFakultas;
