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
import axios from '@/config/sirenbang-axios';
import LoadingSSO from '@/page-components/common/loading';

export interface Prodi {
  title: string;
  content: Content;
}
export interface Content {
  gambarCover: string;
  akreditasiGambar: string;
  akreditasiBg: string;
  profilLulusanGambar: string;
  fakultas: string;
  gambaran: string;
  akreditasiStatus: string;
  akreditasiKodeSk: string;
  gambarSk: string;
  profilLulusanDeskripsi: string;
  capaianPembelajaranDeskripsi: string;
  capaianPembelajaranDaftar: [];
  lamaStudi: string;
  biayaPendidikan: BiayaPendidikan[];
  alamat: string;
  nomorTelepon: string;
  email: string;
  youtube: string;
  facebook: string;
  instagram: string;
}
export interface BiayaPendidikan {
  tingkat: string;
  biaya: string;
}

export interface Props {
  prodiData: Prodi;
}

export const getServerSideProps = async (
  context: Record<string, any>
): Promise<any> => {
  const lang = await checkLanguage(context.params.language);
  const { language, slug } = context.params;
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
      `/api/post?site=USU&lang=${language}&slug=${slug}`
    );
    if (response.data.post) {
      return {
        props: {
          prodiData: response.data.post,
        } as Props,
      };
    }
    return {
      notFound: true,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

const ProgramStudiDetailPage: React.ReactNode = ({ prodiData }: Props) => {
  const router = useRouter();
  const { language, slug } = router.query;

  return (
    <>
      {prodiData ? (
        <div className="prodi">
          <Head>
            <title>
              {getKeyValue(sentences.programStudi)(selectLanguage(language))} |
              Prodi Universitas Sumatera Utara
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

          {prodiData && (
            <div className="prodi">
              <img
                loading="lazy"
                src={prodiData.content.gambarCover}
                className="cover-banner"
              />
              <div className="content-section">
                <div className="top">
                  <div className="title">
                    <h1>{prodiData.title}</h1>
                    <p>{prodiData.content.gambaran}</p>
                  </div>
                  <div className="akreditasi">
                    <div
                      className="foto"
                      style={{
                        backgroundImage: `url(${prodiData.content.akreditasiGambar})`,
                      }}
                    />
                    <div
                      className="detail"
                      style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 102, 51, 0.9), rgba(0, 102, 51, 0.9)),url(${prodiData.content.akreditasiBg})`,
                      }}
                    >
                      <div className="item">
                        <h2>{prodiData.title}</h2>
                        <h1>
                          Terakreditasi {prodiData.content.akreditasiStatus}
                        </h1>
                        <p>{prodiData.content.akreditasiKodeSk}</p>
                      </div>
                      <a
                        href={prodiData.content.gambarSk}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/images/prodi/link.svg" className="link" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="profil-lulusan">
                  <div className="judul">
                    <h2>Profil Lulusan</h2>
                    <div className="garis" />
                  </div>
                  <div className="konten">
                    <img
                      src={prodiData.content.profilLulusanGambar}
                      alt={prodiData.title}
                    />
                    <p>{prodiData.content.profilLulusanDeskripsi}</p>
                  </div>
                </div>

                <div className="capaian-lulusan">
                  <div className="judul">
                    <h2>Capaian Pembelajaran Lulusan</h2>
                    <div className="garis" />
                  </div>
                  <div className="konten">
                    <p>{prodiData.content.capaianPembelajaranDeskripsi}</p>
                    <div className="daftar">
                      {prodiData.content.capaianPembelajaranDaftar.map(
                        (x, i) => (
                          <div className="daftar-konten">
                            <div className="nomor">{i + 1}</div>
                            <p>{x}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="lama-studi">
                  <div className="judul">
                    <h2>Lama Studi</h2>
                    <div className="garis" />
                  </div>

                  <div className="konten">
                    <p>{prodiData.content.lamaStudi}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="kelompok-keilmuan">
            <h1>Kelompok Keilmuan</h1>
            <div className="slider">
              {/* <div className="icon-slider">←</div> */}
              <div className="container">
                <div className="item">
                  <img
                    src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                    alt="kelompok keilmuan"
                  />
                  <p>Machine Learning</p>
                </div>
                <div className="item">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
                    alt="kelompok keilmuan"
                  />
                  <p>Heuristic</p>
                </div>
                <div className="item">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="kelompok keilmuan"
                  />
                  <p>Cryptography</p>
                </div>
                <div className="item">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                    alt="kelompok keilmuan"
                  />
                  <p>IT Audit</p>
                </div>
                <div className="item">
                  <img
                    src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="kelompok keilmuan"
                  />
                  <p>Programming</p>
                </div>
                <div className="item">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="kelompok keilmuan"
                  />
                  <p>Data Analytic</p>
                </div>
                <div className="item">
                  <img
                    src="https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="kelompok keilmuan"
                  />
                  <p>Microcontroller</p>
                </div>
              </div>
              {/* <div className="icon-slider">→</div> */}
            </div>
          </div>

          {prodiData && (
            <div className="prodi">
              <div className="content-section">
                <div className="biaya-pendidikan">
                  <div className="judul">
                    <h1>Biaya Pendidikan</h1>
                    <p>{prodiData.title}</p>
                  </div>
                  <div className="container">
                    {prodiData.content.biayaPendidikan.map((x) => (
                      <div className="item">
                        <div className="jenis">
                          <p>{x.tingkat}</p>
                        </div>
                        <div className="biaya">
                          <p>{x.biaya}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {prodiData && (
            <div className="kontak">
              <div className="konten">
                <div className="judul">
                  <div className="prodi">Kontak {prodiData.title}</div>
                  <div className="fakultas">
                    Fakultas {prodiData.content?.fakultas}
                  </div>
                  <div className="universitas">Universitas Sumatera Utara</div>
                </div>
                <div className="detail">
                  <div className="alamat">
                    <img src="/images/icons/map-icon.svg" alt="alamat" />
                    <p>{prodiData.content?.alamat}</p>
                  </div>
                  <div className="section2">
                    <div className="telepon">
                      <img
                        src="/images/icons/telephone-icon.svg"
                        alt="phone number"
                      />
                      <p>{prodiData.content?.nomorTelepon}</p>
                    </div>
                    <div className="email">
                      <img
                        src="/images/icons/mail-icon.svg"
                        alt="email address"
                      />
                      <p>{prodiData.content?.email}</p>
                    </div>
                  </div>
                  <div className="sosmed">
                    <a
                      href={prodiData.content?.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/icons/youtube-logo.png" alt="youtube" />
                    </a>
                    <a
                      href={prodiData.content?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/instagram-logo.png"
                        alt="instagram"
                      />
                    </a>
                    <a
                      href={prodiData.content?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/facebook-logo.png"
                        alt="facebook"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <LoadingSSO />
      )}
    </>
  );
};

export default ProgramStudiDetailPage;
