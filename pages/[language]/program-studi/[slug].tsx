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
  akreditasiLink: string;
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

const ProgramStudiDetailPage: React.FC = ({}) => {
  const router = useRouter();
  console.log(router);

  const { language, slug } = router.query;
  console.log(router.query);

  const [prodiData, setProdiData] = useState<Prodi>();

  useEffect(() => {
    axios
      .get(`/api/post?lang=${language}&slug=${slug}`)
      .then((response) => {
        setProdiData(response.data?.post);
      });
  }, []);

  return (
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

      {prodiData ? (
        <div className="prodi">
          <img src={prodiData.content.gambarCover} className="cover-banner" />
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
                <div className="detail">
                  <div className="item">
                    <h2>{prodiData.title}</h2>
                    <h1>Terakreditasi {prodiData.content.akreditasiStatus}</h1>
                    <p>{prodiData.content.akreditasiKodeSk}</p>
                  </div>
                  <a
                    href={prodiData.content.akreditasiLink}
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
                  {prodiData.content.capaianPembelajaranDaftar.map((x, i) => (
                    <div className="daftar-konten">
                      <div className="nomor">{i + 1}</div>
                      <p>{x}</p>
                    </div>
                  ))}
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
      ) : (
        <div className="prodi">
          <div className="content-section">
            <div className="not-found">
              <h2>Maaf Program Studi Belum Tersedia</h2>
              <div className="button">
                <p>Kembali ke Beranda</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {prodiData && (
        <div className="topik-penelitian">
          <div className="intro">
            <h1>Topik Penelitian & Pengembangan</h1>
          </div>
          <div className="konten">
            <div>
              <img
                src="/images/sdgs/sdg (1).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (3).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (4).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (5).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (6).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (7).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (2).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (8).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (9).svg"
                alt="sdg universitas sumatera utara"
              />
            </div>
            <div>
              <img
                src="/images/sdgs/sdg (10).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (11).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (12).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (13).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (14).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (15).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (16).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (17).svg"
                alt="sdg universitas sumatera utara"
              />
              <img
                src="/images/sdgs/sdg (18).svg"
                alt="sdg universitas sumatera utara"
              />
            </div>
          </div>
        </div>
      )}

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
                  <img src="/images/icons/mail-icon.svg" alt="email address" />
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
                  <img src="/images/icons/instagram-logo.png" alt="instagram" />
                </a>
                <a
                  href={prodiData.content?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/icons/facebook-logo.png" alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramStudiDetailPage;
