/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage from 'helpers/check-language';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import axios from '@/config/axios';
import Head from 'next/head';
import FacultyModel, { FacultyMaker } from '@/models/facultyModel';
import Link from 'next/link';

interface SearchResult {
  image: string;
  // eslint-disable-next-line camelcase
  work_name: string;
  name: string;
  // eslint-disable-next-line camelcase
  knowledge_fields: string[];
  slug: string;
}

interface Props {
  photo: FacultyModel | null;
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
  const { language } = context.params;
  const lang = await checkLanguage(language);
  if (lang.redirect) {
    return {
      redirect: {
        destination: `/${lang.value}`,
        permanent: false,
      },
    };
  }
  try {
    return {
      props: {} as unknown as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {} as unknown as Props,
      revalidate: 30,
    };
  }
};

const DirektoriPage: React.FC = ({}) => {
  const resultRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter();
  const { language } = router.query;
  const [inputName, setInputName] = useState<string>('');
  const [inputFaculty, setInputFaculty] = useState<string>('');
  const [inputKnowledgeFields, setInputKnowledgeFields] = useState<string>('');
  const [searchKey, setSearchKey] = useState<string>('');
  const [searchResult, setSearchResult] = useState<SearchResult[] | null>(null);
  const [facultyList, setFacultyList] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsFetching(false);
  // }, []);
  useEffect(() => {
    axios.get(`faculty?lang=${language}`).then((response) => {
      setFacultyList(response.data.data);
    });
  }, []);

  const searchLecturer = async () => {
    setIsFetching(true);
    setSearchKey(inputName);
    const response = await axios.get('lecturer/search-list', {
      params: {
        lang: language,
        name: inputName,
        faculty_name: inputFaculty,
        knowledge_fields: inputKnowledgeFields,
      },
    });
    setSearchResult(response.data.data);
    setIsFetching(false);
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Direktori | Universitas Sumatera Utara</title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <div className="direktori">
        <div className="hero">
          <div className="hero-background">
            <div className="hero-container-main">
              <h1>
                Profil Dosen
                <br />
                Universitas Sumatera Utara
              </h1>
              <div className="hero-search" ref={resultRef}>
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="hero-search__nama"
                  placeholder="Tuliskan Nama Dosen"
                  onKeyUp={(e) => e.key === 'Enter' && searchLecturer()}
                />
                <select
                  className="hero-search__fakultas"
                  placeholder="Pilih Fakultas"
                  value={inputFaculty}
                  onChange={(e) => setInputFaculty(e.target.value)}
                >
                  <option value="" hidden>
                    Pilih Fakultas
                  </option>
                  <option value="">Semua Fakultas</option>
                  {facultyList.map((faculty: any) => (
                    <option value={faculty.faculty_name}>
                      {faculty.faculty_name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="hero-search__bidang"
                  placeholder="Tuliskan Bidang Ilmu"
                  value={inputKnowledgeFields}
                  onChange={(e) => setInputKnowledgeFields(e.target.value)}
                  onKeyUp={(e) => e.key === 'Enter' && searchLecturer()}
                />
                <button onClick={searchLecturer} className="btn-yellow">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
        {searchResult && (
          <div className="search-result">
            <div className="search-result-box">
              {isFetching ? (
                <div
                  style={{
                    display: 'flex',
                    height: '300px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div className="loading-container">
                    <img
                      loading="lazy"
                      className="loading-image"
                      src="/usu.png"
                      alt="logo"
                      style={{ width: 70 }}
                    />
                    <div>Please wait...</div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="search-result-box__header">
                    {searchResult.length < 1 ? (
                      <>
                        <h2>
                          Pencarian{' '}
                          <span className="color-blue">{searchKey}</span> tidak
                          ditemukan
                        </h2>
                        <h2>&nbsp;</h2>
                      </>
                    ) : (
                      <>
                        <h2>
                          Pencarian Terakhir :{' '}
                          <span className="color-blue">{searchKey}</span>
                        </h2>
                      </>
                    )}
                  </div>
                  <div className="search-result-box__body">
                    <div className="search-result-box__body-list">
                      {/* {dosenList.map((dosen) => (
                  <div className="profile-card">
                    <div className="profile-card-image">
                      <img
                        src="/images/dosen/masfria.jpg"
                        alt="Muryanto Amin"
                      />
                    </div>
                    <div className="profile-card-biodata">
                      <h4>MURYANTO AMIN</h4>
                      <h5>Fakultas Ilmu Sosial dan Ilmu Politik</h5>
                      <div className="expertise">
                        <div className="expertise-btn">
                          <button className="btn-light-green">
                            Ilmu Hukum
                          </button>
                        </div>
                        <div className="expertise-btn">
                          <button className="btn-light-green">
                            Hukum Perdana
                          </button>
                        </div>
                        <div className="expertise-btn">
                          <button className="btn-light-green">
                            Hukum Perdata
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
                      {searchResult.map((result: SearchResult) => (
                        <Link href={`/${language}/direktori/${result.slug}`}>
                          <div className="profile-card">
                            <div className="profile-card-image">
                              <img
                                src={result.image}
                                alt={result.name}
                                loading="lazy"
                              />
                            </div>
                            <div className="profile-card-biodata">
                              <h4>{result.name.toUpperCase()}</h4>
                              <h5>{result.work_name}</h5>
                              <div className="expertise">
                                {result.knowledge_fields.map(
                                  (knowledge: string) => (
                                    <div className="expertise-btn">
                                      <button className="btn-light-green btn-justview">
                                        {knowledge}
                                      </button>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DirektoriPage;
