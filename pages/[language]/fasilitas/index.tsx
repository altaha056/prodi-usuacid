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
import daftarFasilitas from './fasilitas.json';

interface Props {
  photo: FacultiesModel | null;
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

const FasilitasPage: React.FC = ({}) => {
  const router = useRouter();
  const { language } = router.query;
  const [activeDropdown, setActiveDropdown] = useState('');
  const changeDropdown = (title: string) => {
    setActiveDropdown(title);
  };
  const selectedLanguage = selectLanguage(language);
  const param = `/${selectedLanguage}`;

  return (
    <>
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
      <div className="fasilitas">
        <img
          src="/images/fasilitas/banner-fasilitas.jpg"
          alt="Group discussion at USU"
          className="img-hero"
        />
        <div className="second-hero">
          <h1>Fasilitas Kampus</h1>
          <h5>
            Fasilitas penunjang kegiatan belajar mahasiswa serta sarana
            pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.
          </h5>
        </div>

        <div className="daftar-fasilitas">
          {daftarFasilitas.map((fasilitas) => (
            <>
              <h2>{fasilitas.title}</h2>
              <div className="gallery-image">
                {fasilitas.fasilitasList.map((item) => (
                  <div className="item-list">
                    <div className="img-box">
                      <img className="img-box" src={item.image} alt="fasilitas usu" />
                    </div>
                    <a href={`${param}/fasilitas/${item.slug}`}>
                      <div className="caption-box">{item.name}</div>
                    </a>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>

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
    </>
  );
};

export default FasilitasPage;
