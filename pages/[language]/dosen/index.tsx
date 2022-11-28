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
import dosenBerprestasi from './dosen_berprestasi.json';

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

const DosenPage: React.FC = ({}) => {
  const router = useRouter();
  const { language } = router.query;
  const [activeDropdown, setActiveDropdown] = useState('');
  const changeDropdown = (title: string) => {
    setActiveDropdown(title);
  };

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.beranda)(selectLanguage(language))} | Dosen
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
      <div className="dosen">
        <img
          src="/images/usu-from-drone.jpg"
          alt="USU from drone footage"
          className="img-hero"
        />
        <div className="second-hero">
          <h1>Dosen Berprestasi</h1>
          <h5>
            Universitas Sumatera Utara memiliki dosen berprestasi penyumbang
            paten terbanyak, penulis terbaik, peneliti terbaik, inovator
            terbaik, penyelenggara konferensi terbaik, dan penyelenggara jurnal
            TALENTA terbaik.
          </h5>
          <button className="btn-green">Our Menu</button>
        </div>
        <div className="dosen-berprestasi">
          <h1>Daftar Dosen Berprestasi</h1>
          <div className="input-wrapper">
            <input type="text" placeholder="Cari Dosen" />
            <button className="btn-yellow btn-search">Cari</button>
          </div>
          <div className="card">
            {dosenBerprestasi.map((prestasi) => (
              <div
                className={`prestasi-dropdown ${
                  prestasi.slug === activeDropdown ? 'active' : ''
                }`}
                onClick={() =>
                  prestasi.slug !== activeDropdown
                    ? changeDropdown(prestasi.slug)
                    : changeDropdown('')
                }
              >
                <div className="dropdown-title">
                  <div className="title">
                    <h5>{prestasi.title}</h5>
                    <span className="material-icons dropdown-button">
                      {activeDropdown === prestasi.slug ? 'remove' : 'add'}
                    </span>
                  </div>
                </div>
                <div className="dropdown-content">
                  <table>
                    <thead>
                      <tr>
                        <td>
                          <p>
                            <strong>Nama</strong>
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Fakultas</strong>
                          </p>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </thead>
                    <tbody>
                      {prestasi.dosenList.map((obj) => (
                        <tr>
                          <td>
                            <p>{obj.name}</p>
                          </td>
                          <td>
                            <p>{obj.fakultas}</p>
                          </td>
                          <td>
                            <a>
                              <span className="material-icons">launch</span>
                              <span>Detail</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DosenPage;
