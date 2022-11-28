/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import FacultiesModel, { FacultiesMaker } from '@/models/faculties';
import axios from '@/config/axios';

import fasilitasData from './detail_fasilitas.json';

interface Props {
  photo: FacultiesModel | null;
  language?: string;
}
export async function getStaticPaths(): Promise<any> {
  return {
    paths: [
      { params: { language: 'id', slug: 'taman-usu' } },
      { params: { language: 'en', slug: 'taman-usu' } },
      { params: { language: 'id', slug: 'bus-lintas-usu' } },
      { params: { language: 'en', slug: 'bus-lintas-usu' } },
      { params: { language: 'id', slug: 'auditorium-usu' } },
      { params: { language: 'en', slug: 'auditorium-usu' } },
      { params: { language: 'id', slug: 'gedung-pancasila-usu' } },
      { params: { language: 'en', slug: 'gedung-pancasila-usu' } },
      { params: { language: 'id', slug: 'laboratorium-terpadu-usu' } },
      { params: { language: 'en', slug: 'laboratorium-terpadu-usu' } },
      { params: { language: 'id', slug: 'asrama-mahasiswa-usu' } },
      { params: { language: 'en', slug: 'asrama-mahasiswa-usu' } },
      { params: { language: 'id', slug: 'rumah-sakit-gigi-dan-mulut' } },
      { params: { language: 'en', slug: 'rumah-sakit-gigi-dan-mulut' } },
      { params: { language: 'id', slug: 'rumah-sakit-usu' } },
      { params: { language: 'en', slug: 'rumah-sakit-usu' } },
      { params: { language: 'id', slug: 'poliklinik-usu' } },
      { params: { language: 'en', slug: 'poliklinik-usu' } },
      { params: { language: 'id', slug: 'stadion-mini-usu' } },
      { params: { language: 'en', slug: 'stadion-mini-usu' } },
      { params: { language: 'id', slug: 'track-lari-auditorim-usu' } },
      { params: { language: 'en', slug: 'track-lari-auditorim-usu' } },
      { params: { language: 'id', slug: 'kantor-layanan-disabilitas' } },
      { params: { language: 'en', slug: 'kantor-layanan-disabilitas' } },
      { params: { language: 'id', slug: 'fasilitas-kursi-roda' } },
      { params: { language: 'en', slug: 'fasilitas-kursi-roda' } },
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

const FasilitasDetailPage: React.FC = ({}) => {
  const router = useRouter();
  const { language, slug } = router.query;
  const detailFasilitas = fasilitasData.find((obj) => obj.slug === slug);
  const selectedLanguage = selectLanguage(language);
  const param = `/${selectedLanguage}`;

  useEffect(() => {
    if (detailFasilitas === undefined) {
      router.push('/');
    }
  }, []);

  return (
    <div className="fasilitas">
      <Head>
        <title>
          {getKeyValue(sentences.beranda)(selectLanguage(language))} | Fasilitas
          Universitas Sumatera Utara
        </title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>

      {detailFasilitas && (
        <div className="fasilitas">
          <img
            src={detailFasilitas.gambar}
            alt="Group discussion at USU"
            className="img-hero"
          />
          <div className="second-hero">
            <h1>{detailFasilitas.title}</h1>
            <h5>{detailFasilitas.gambaran}</h5>
          </div>
          <div className="detail-fasilitas">
            <div className="box-item-fasilitas">
              <div className="item-list">
                <div className="caption-box">
                  <h3>Informasi</h3>
                  <p>{detailFasilitas.informasi}</p>
                  <h3 className="judul">Umum</h3>
                  <p>{detailFasilitas.umum}</p>
                  <a href={`${param}/fasilitas`}>
                    <div className="button-green">Fasilitas Lainnya</div>
                  </a>
                </div>
              </div>

              <div className="item-list">
                <div className="img-box">
                  <img src={detailFasilitas.gambar} alt="fasilitas USU" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="contactus">
        <h1>Hubungi Kami</h1>
        <p>
          Kami adalah pusat unggulan pendidikan dokter tropis dan onkologi
          pencegahan di Asia Tenggara
        </p>
        <button>
          <span className="material-icons">launch</span>
          <span>Kunjungi Laman</span>
        </button>
      </div>
    </div>
  );
};

export default FasilitasDetailPage;
