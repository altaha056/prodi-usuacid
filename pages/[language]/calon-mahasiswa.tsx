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
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import calonMahasiswa from './calon-mahasiswa.json';

interface Props {
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

const CalonMahasiswaPage: React.FC = ({}) => {
  const router = useRouter();
  const { language } = router.query;
  const url = `/faculties?lang=${language}&selected=true&limit=50&`;
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState(`${url}page=${page}`);
  const [activeDropdownUKM, setActiveDropdownUKM] = useState('');
  const [activeDropdownFAQ, setActiveDropdownFAQ] = useState('');

  const changeDropdownUKM = (title: string) => {
    setActiveDropdownUKM(title);
  };
  const changeDropdownFAQ = (title: string) => {
    setActiveDropdownFAQ(title);
  };

  // infinite scroll //
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setFetchUrl(`${url}page=${nextPage}`);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(
    handleLoadMore,
    'article-item'
  );

  useEffect(() => {
    setIsFetching(false);
  }, []);

  return (
    <>
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
      <div className="calon-mahasiswa">
        <div className="header-image">
          <img src={calonMahasiswa.main_image} alt="Calon Mahasiswa" />
          <div className="banner">
            <h1>Calon Mahasiswa</h1>
          </div>
        </div>
        <div className="program-pendidikan">
          <h1 className="big-title">Program Pendidikan</h1>
          <div className="block-container">
            {calonMahasiswa.program_pendidikan.map((program) => (
              <div className="block-item">
                <img src={program.image} alt={program.title} />
                <h2>{program.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="fakultas-sekolah">
          <div className="abstract">
            <h1>Fakultas dan Sekolah</h1>
            <p className="subtitle">
              Universitas Sumatera Utara menyelenggarakan berbagai program
              pendidikan meliputi program sarjana, pascasarjana, profesi,
              spesialis, dan diploma. Beberapa fakultas juga menyelenggarakan
              program internasional baik pada program sarjana maupun
              pascasarjana.
            </p>
          </div>
          <div className="list">
            {calonMahasiswa.fakultas.map((fakultas, index) => (
              <div className="fakultas-item">
                <img src={fakultas.image} alt={fakultas.name} />
                <div
                  className={
                    index % 2 === 0 ? 'name bg-green' : 'name bg-yellow'
                  }
                >
                  <p>{fakultas.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="informasi-mahasiswa-baru">
          <div className="description">
            <h2>
              Penerimaan mahasiswa baru tahun ajaran sudah dibuka. Informasi
              jalur penerimaan dan jadwal penerimaan mahasiswa, serta
              pendaftaran online calon mahasiswa baru selengkapnya dapat diakses
              melalui tautan-tautan berikut.
            </h2>
            <div className="btn-wrapper-left">
              <button className="btn-red">
                <span>Informasi Pendaftaran</span>
                <img src="/images/icons/launch-icon.png" alt="launch" />
              </button>
              <button className="btn-green">
                <span>Biaya Pendidikan</span>
                <img src="/images/icons/pdf-icon.png" alt="pdf" />
              </button>
            </div>
          </div>
          <div className="image">
            <img
              src="/images/mahasiswa-kompetisi.jpg"
              alt="Informasi Mahasiswa Baru"
            />
          </div>
        </div>
        <div className="berita-kampus">
          <h1 className="big-title">Berita Kampus</h1>
          <div className="berita-list">
            {calonMahasiswa.berita.map((berita, index) => (
              <div
                className={
                  index % 2 === 0
                    ? 'berita-item bg-yellow'
                    : 'berita-item bg-green'
                }
              >
                <h2>{berita.type}</h2>
                <img src={berita.image} alt={berita.title} />
                <h3>{berita.title}</h3>
                <p>{berita.description}</p>
                {berita.link.map((link) => (
                  <div className="recommended-berita">
                    <div className="image">
                      <img src={link.image} alt={link.title} />
                    </div>
                    <div className="description">
                      <h4>{link.title}</h4>
                      <p>{link.description}</p>
                    </div>
                  </div>
                ))}
                <div className="more-link">
                  <a href={berita.url}>Baca Selengkapnya</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="unit-kegiatan-mahasiswa">
          <h1 className="big-title">Unit Kegiatan Mahasiswa</h1>
          <div className="ukm-list">
            <div className="list">
              {calonMahasiswa.ukm.map(
                (ukm, index) =>
                  index < 6 && (
                    <div
                      className={
                        activeDropdownUKM === ukm.title
                          ? 'ukm-item active'
                          : 'ukm-item'
                      }
                      onClick={() => {
                        if (activeDropdownUKM === ukm.title) {
                          changeDropdownUKM('');
                        } else {
                          changeDropdownUKM(ukm.title);
                        }
                      }}
                    >
                      <div className="dropdown-title">
                        <div className="title">
                          <img src={ukm.icon} alt={ukm.title} />
                          <span className="text">{ukm.title}</span>
                          {activeDropdownUKM === ukm.title ? (
                            <img
                              src="/images/icons/remove-icon.png"
                              alt="remove"
                            />
                          ) : (
                            <img
                              src="/images/icons/add-icon-white.png"
                              alt="add"
                            />
                          )}
                          {/* <span className="material-icons dropdown-button">
                            {activeDropdownUKM === ukm.title ? 'remove' : 'add'}
                          </span> */}
                        </div>
                      </div>
                      <div className="dropdown-content">
                        {ukm.list.map((list) => (
                          <div className="content">
                            <span>{list.title}</span>
                            <a>
                              <img
                                src="/images/icons/launch-primary.png"
                                alt="launch"
                              />
                              <span>Detail</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="list">
              {calonMahasiswa.ukm.map(
                (ukm, index) =>
                  index >= 6 && (
                    <div
                      className={
                        activeDropdownUKM === ukm.title
                          ? 'ukm-item active'
                          : 'ukm-item'
                      }
                      onClick={() => {
                        if (activeDropdownUKM === ukm.title) {
                          changeDropdownUKM('');
                        } else {
                          changeDropdownUKM(ukm.title);
                        }
                      }}
                    >
                      <div className="dropdown-title">
                        <div className="title">
                          <img src={ukm.icon} alt={ukm.title} />
                          <span className="text">{ukm.title}</span>
                          {activeDropdownUKM === ukm.title ? (
                            <img
                              src="/images/icons/remove-icon.png"
                              alt="remove"
                            />
                          ) : (
                            <img
                              src="/images/icons/add-icon-white.png"
                              alt="add"
                            />
                          )}
                          {/* <span className="material-icons">remove</span> */}
                        </div>
                      </div>
                      <div className="dropdown-content">
                        {ukm.list.map((list) => (
                          <div className="content">
                            <span>{list.title}</span>
                            <a>
                              <img
                                src="/images/icons/launch-primary.png"
                                alt="launch"
                              />
                              <span>Detail</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="kunjungi-kampus">
          <div className="questions">
            <h1>Kunjungi Kampus</h1>
            <p>
              Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera
              Utara. Anda akan melihat secara langsung bagaimana suasana kampus
              kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.
            </p>
            <div className="btn-wrapper-left">
              <button className="btn-yellow">
                <span>Mulai Berkunjung</span>
                <img src="/images/icons/launch-icon.png" alt="launch" />
              </button>
            </div>
            <h2>Pertanyaan yang sering diajukan</h2>
            <div className="question-list">
              {calonMahasiswa.faq.map((faq) => (
                <div
                  className={
                    activeDropdownFAQ === faq.slug
                      ? 'faq-item active'
                      : 'faq-item'
                  }
                  onClick={() => {
                    if (activeDropdownFAQ === faq.slug) {
                      changeDropdownFAQ('');
                    } else {
                      changeDropdownFAQ(faq.slug);
                    }
                  }}
                >
                  <div className="dropdown-title">
                    <span>{faq.question}</span>
                    {activeDropdownFAQ === faq.slug ? (
                      <img src="/images/icons/remove-icon.png" alt="remove" />
                    ) : (
                      <img src="/images/icons/add-icon.png" alt="add" />
                    )}
                    {/* <span className="material-icons">remove</span> */}
                  </div>
                  <div className="dropdown-content">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="akses-transportasi">
            <h2>Akses dan Transportasi</h2>
            <p>
              Bagi kamu yang diluar pulau sumatera, terdapat banyak transportasi
              yang dapat digunakan untuk sampai ke kampus kami, mulai dari
              transportasi darat, laut hingga udara. Berikut ini adalah rute
              yang dapat ditempuh:{' '}
            </p>
            <div className="luar-medan">
              <h2>Dari Luar Medan</h2>
              <div className="item">
                <div className="image">
                  <img src="/images/icons/bus-stop.png" alt="bus stop icon" />
                </div>
                <p>
                  Jika menggunakan transportasi darat menggunakan bus, turun di
                  terminal Amplas, Lalu lanjutkan dengan menggunakan angkutan
                  umum lainnya dengan waktu tempuh sekitar 45 menit.
                </p>
              </div>
              <div className="item">
                <div className="image">
                  <img src="/images/icons/airplane.png" alt="airplane icon" />
                </div>
                <p>
                  Jika menggunakan transportasi udara menggunakan pesawat, turun
                  di Bandara Kualanamu, Lalu lanjutkan dengan menggunakan
                  angkutan umum lainnya dengan waktu tempuh sekitar 120 menit.
                </p>
              </div>
              <div className="item">
                <div className="image">
                  <img src="/images/icons/cruise.png" alt="cruise icon" />
                </div>
                <p>
                  Jika menggunakan transportasi laut menggunakan kapal laut,
                  turun di Pelabuhan Belawan, Lalu lanjutkan dengan menggunakan
                  angkutan umum lainnya dengan waktu tempuh sekitar 120 menit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="beasiswa">
          <div className="content-wrapper">
            <div className="image">
              <img src="/images/kakak_pendidikan.png" alt="Kakak Pendidikan" />
            </div>
            <div className="content-description">
              <h1>Beasiswa</h1>
              <p>
                Informasi seputar beasiswa untuk mahasiswa di Universitas
                Sumatera Utara
              </p>
              <div className="btn-wrapper-left">
                <button className="btn-green">
                  <span>Beasiswa USU</span>
                  <img src="/images/icons/launch-icon.png" alt="launch" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fasilitas-kampus">
          <h1 className="big-title">Fasilitas Kampus</h1>
          <div className="image-wrapper">
            <img src="/images/kedokteran/doctors.jpg" alt="Dokter" />
            <img src="/images/kedokteran/doctors.jpg" alt="Dokter" />
            <img src="/images/kedokteran/doctors.jpg" alt="Dokter" />
          </div>
          <div className="btn-wrapper">
            <button className="btn-yellow">
              <span>Fasilitas Lainnya</span>
              <img src="/images/icons/launch-icon.png" alt="launch" />
            </button>
          </div>
        </div>
        <div className="wisata_kota_medan">
          <h1 className="big-title">Wisata Kota Medan</h1>
          <div className="wisata-list">
            {calonMahasiswa.wisata_kota_medan.map((wisata, index) => (
              <div
                className={
                  index % 2 === 0
                    ? `wisata-item wisata-${index + 1}`
                    : `wisata-item wisata-${index + 1} even-item`
                }
              >
                <div className="image">
                  <img src={wisata.image} alt={wisata.title} />
                </div>
                <div className="description">
                  <div className="text">
                    <h1>{wisata.title}</h1>
                    <p>{wisata.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-wrapper">
            <button className="btn-green">
              <span>Wisata Lainnya</span>
              <img src="/images/icons/launch-icon.png" alt="launch" />
            </button>
          </div>
        </div>
        <div className="kunjungi-medan">
          <button className="btn-yellow">
            <span>Kunjungi Kota Medan</span>
            <img src="/images/icons/launch-icon.png" alt="launch" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CalonMahasiswaPage;
