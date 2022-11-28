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
import dosenData from './dosen.json';
import dosenBerprestasi from './dosen_berprestasi.json';

interface Props {
  photo: FacultiesModel | null;
  language?: string;
}
export async function getStaticPaths(): Promise<any> {
  return {
    paths: [
      { params: { language: 'id', slug: 'masfria' } },
      { params: { language: 'en', slug: 'masfria' } },
      { params: { language: 'id', slug: 'harry-agusnar' } },
      { params: { language: 'en', slug: 'harry-agusnar' } },
      { params: { language: 'id', slug: 'renita-manurung' } },
      { params: { language: 'en', slug: 'renita-manurung' } },
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

const DosenDetailPage: React.FC = ({}) => {
  const router = useRouter();
  const { language, slug } = router.query;

  const dosen = dosenData.find((obj) => obj.slug === slug);
  const dosenPenelitiTerbaik = dosenBerprestasi.find(
    (obj) => obj.slug === 'peneliti-terbaik'
  );

  useEffect(() => {
    if (dosen === undefined) {
      router.push('/');
    }
  }, []);

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
      {dosen && (
        <div className="dosen">
          <div className="header-image">
            <img
              src="/images/usu-from-drone.jpg"
              alt="USU from drone"
              className="img-hero"
            />
            <div className="banner">
              <h1>{dosen.name}</h1>
            </div>
          </div>
          <div className="profile">
            <div className="profile-image">
              <div className="card">
                <img src={dosen.image} alt={dosen.name} />
                <div className="unedited-form">
                  <div className="item">
                    <div>
                      <h6>
                        Nama<span>:</span>
                      </h6>
                    </div>
                    <div>
                      <h6>{dosen.name}</h6>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <h6>
                        NIP<span>:</span>
                      </h6>
                    </div>
                    <div>
                      <h6>{dosen.nip}</h6>
                    </div>
                  </div>
                  <div className="item">
                    <div>
                      <h6>
                        Email<span>:</span>
                      </h6>
                    </div>
                    <div>
                      <a className="blue-link">
                        <h6>{dosen.email}</h6>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="social-media">
                  <img
                    src="/images/icons/twitter-logo.png"
                    alt="twitter"
                    className="sm-icon"
                  />
                  <img
                    src="/images/icons/facebook-logo.png"
                    alt="facebook"
                    className="sm-icon"
                  />
                  <img
                    src="/images/icons/instagram-logo.png"
                    alt="instagram"
                    className="sm-icon"
                  />
                </div>
              </div>
            </div>
            <div className="bio-profile">
              <h1 className="big-title">Profil</h1>
              <p>{dosen.bio}</p>
            </div>
          </div>
          <div className="sitasi">
            <h1 className="big-title">Sitasi</h1>
            <div className="unedited-form">
              <div className="item big-item">
                <div>
                  <h4>
                    Bidang Kepakaran<span>:</span>
                  </h4>
                </div>
                <div className="button-list">
                  {dosen.sitasi.bidangKepakaran.map((kepakaran) => (
                    <div className="button-item">
                      <button className="btn-yellow">
                        <h4>{kepakaran}</h4>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {dosen.sitasi.url.googleScholar && (
                <div className="item big-item">
                  <div>
                    <h4>
                      Google Scholar<span>:</span>
                    </h4>
                  </div>
                  <div>
                    <a
                      href={dosen.sitasi.url.googleScholar}
                      className="blue-link"
                    >
                      <h4>{dosen.sitasi.url.googleScholar}</h4>
                    </a>
                  </div>
                </div>
              )}
              {dosen.sitasi.url.researchGate && (
                <div className="item big-item">
                  <div>
                    <h4>
                      Research Gate<span>:</span>
                    </h4>
                  </div>
                  <div>
                    <a
                      href={dosen.sitasi.url.researchGate}
                      className="blue-link"
                    >
                      <h4>{dosen.sitasi.url.researchGate}</h4>
                    </a>
                  </div>
                </div>
              )}
              {dosen.sitasi.url.sinta && (
                <div className="item big-item">
                  <div>
                    <h4>
                      Sinta<span>:</span>
                    </h4>
                  </div>
                  <div>
                    <a href={dosen.sitasi.url.sinta} className="blue-link">
                      <h4>{dosen.sitasi.url.sinta}</h4>
                    </a>
                  </div>
                </div>
              )}
              {dosen.sitasi.url.scopus && (
                <div className="item big-item">
                  <div>
                    <h4>
                      Scopus<span>:</span>
                    </h4>
                  </div>
                  <div>
                    <a href={dosen.sitasi.url.scopus} className="blue-link">
                      <h4>{dosen.sitasi.url.scopus}</h4>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="latar-akademik">
            <h1 className="big-title">Latar Belakang Akademik</h1>
            <div className="unedited-form">
              {dosen.latarPendidikan.map((pendidikan) => (
                <div className="item big-item">
                  <div>
                    <h4>
                      {pendidikan.jenjang}
                      <span>:</span>
                    </h4>
                  </div>
                  <div>
                    <h4>{pendidikan.universitas}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="penelitian-publikasi">
            <h1 className="big-title">Penelitian dan Publikasi</h1>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Judul</th>
                  <th>Skema</th>
                  <th>Posisi</th>
                  <th>Status</th>
                  <th>Tahun</th>
                  <th>Sumber</th>
                </tr>
              </thead>
              <tbody>
                {dosen.penelitianPublikasi.map((penelitian, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{penelitian.judul}</td>
                    <td>{penelitian.skema}</td>
                    <td>{penelitian.posisi}</td>
                    <td>{penelitian.status}</td>
                    <td>{penelitian.tahun}</td>
                    <td>{penelitian.sumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pengabdian-masyarakat">
            <h1 className="big-title">Pengabdian pada Masyarakat</h1>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Judul</th>
                  <th>Skema</th>
                  <th>Posisi</th>
                  <th>Status</th>
                  <th>Tahun</th>
                  <th>Sumber</th>
                </tr>
              </thead>
              <tbody>
                {dosen.pengabdianMasyarakat.map((penelitian, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{penelitian.judul}</td>
                    <td>{penelitian.skema}</td>
                    <td>{penelitian.posisi}</td>
                    <td>{penelitian.status}</td>
                    <td>{penelitian.tahun}</td>
                    <td>{penelitian.sumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {dosenPenelitiTerbaik && (
            <div className="peneliti-terbaik">
              <h1 className="big-title">Daftar Peneliti Terbaik</h1>
              <div className="table-wrapper">
                <table className="table-transparent">
                  <thead>
                    <tr>
                      <th>Nama</th>
                      <th>Fakultas</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dosenPenelitiTerbaik.dosenList.map((obj) => (
                      <tr>
                        <td>{obj.name}</td>
                        <td>{obj.fakultas}</td>
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
          )}
        </div>
      )}
    </>
  );
};

export default DosenDetailPage;
