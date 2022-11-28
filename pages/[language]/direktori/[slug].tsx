/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import axios from '@/config/axios';
import Head from 'next/head';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import DosenModel, {
  Achievement,
  Devotion,
  DosenMaker,
  Hki,
  Publish,
  Research,
  Teaching,
  Video,
} from '@/models/dosen';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import htmlParser from 'html-react-parser';
import LoadingSSO from '@/page-components/common/loading';
import { baseUrl } from '@/config/url';

interface Props {
  lecturer: DosenModel;
  availableYear: string[];
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('lecturer/slugs?lang=id'),
      axios.get('lecturer/slugs?lang=en'),
    ]);
    const idParams = response[0].data.data.map((slug: string) => {
      return { params: { language: 'id', slug } };
    });

    const enParams = response[1].data.data.map((slug: string) => {
      return { params: { language: 'en', slug } };
    });
    return {
      paths: [...idParams, ...enParams],
      fallback: true,
    };
  } catch (e) {
    return {
      paths: [],
      fallback: true,
    };
  }
}

export const getStaticProps = async (
  context: Record<string, any>
): Promise<any> => {
  const { language, slug } = context.params;
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
    const response = await axios.get(`lecturer/${slug}?lang=${language}`);
    const lecturer: DosenModel = await DosenMaker.create(response.data.data);
    const teachingYear = await Array.from(
      new Set(lecturer.teaching.map((item) => item.semester))
    );
    const availableYear = await Array.from(
      new Set(teachingYear.map((item) => item.substring(0, 4)))
    );

    return {
      props: {
        lecturer,
        availableYear,
      } as Props,
    };
  } catch (e) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }
};

const DirektoriDetailPage: React.FC = ({ lecturer, availableYear }: any) => {
  console.log('props', lecturer);
  const router = useRouter();
  const { language, slug } = router.query;

  const [isFetching, setIsFetching] = useState(false);
  const [tridharmaTab, setTridharmaTab] = useState<string>('penelitian');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [navActive, setNavActive] = useState<boolean>(false);
  const [selectedPengajaranYear, setSelectedPengajaranYear] =
    useState<string>('');
  const [selectedPengajaranSemester, setSelectedPengajaranSemester] =
    useState<string>('1');
  const [activePengajaran, setActivePengajaran] = useState<Teaching[]>([]);
  const [bioFull, setBioFull] = useState<boolean>(false);
  const [researches, setResearches] = useState<Research[]>([]);
  const [publications, setPublications] = useState<Publish[]>([]);
  const [devotions, setDevotions] = useState<Devotion[]>([]);
  const [patents, setPatents] = useState<Hki[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  useEffect(() => {
    if (lecturer) {
      // bio
      if (lecturer.description.length < 421) {
        setBioFull(true);
      }
      // penelitian
      if (lecturer.research.length < 6) {
        setResearches(lecturer.research);
      } else {
        setResearches(lecturer.research.slice(0, 5));
      }
      // publikasi
      if (lecturer.publish.length < 6) {
        setPublications(lecturer.publish);
      } else {
        setPublications(lecturer.publish.slice(0, 5));
      }
      // pengabdian
      if (lecturer.devotion.length < 6) {
        setDevotions(lecturer.devotion);
      } else {
        setDevotions(lecturer.devotion.slice(0, 5));
      }
      // Paten & HKI
      if (lecturer.hki.length < 4) {
        setPatents(lecturer.hki);
      } else {
        setPatents(lecturer.hki.slice(0, 3));
      }
      // Achievement
      if (lecturer.achievement.length < 2) {
        setAchievements(lecturer.achievement);
      } else {
        setAchievements(lecturer.achievement.slice(0, 1));
      }
      console.log('first');
    }
  }, [lecturer]);
  // research switch
  const switchFullResearch = () => {
    if (researches && researches.length < 6) {
      setResearches(lecturer.research);
    } else {
      setResearches(lecturer.research.slice(0, 5));
    }
  };
  // publication switch
  const switchFullPublications = () => {
    if (publications && publications.length < 6) {
      setPublications(lecturer.publish);
    } else {
      setPublications(lecturer.publish.slice(0, 5));
    }
  };
  // devotion switch
  const switchFullDevotions = () => {
    if (devotions && devotions.length < 6) {
      setDevotions(lecturer.devotion);
    } else {
      setDevotions(lecturer.devotion.slice(0, 5));
    }
  };
  // paten switch
  const switchFullPatents = () => {
    if (patents && patents.length < 4) {
      setPatents(lecturer.hki);
    } else {
      setPatents(lecturer.hki.slice(0, 3));
    }
  };
  // paten switch
  const switchFullAchievements = () => {
    if (achievements && achievements.length < 2) {
      setAchievements(lecturer.achievement);
    } else {
      setAchievements(lecturer.achievement.slice(0, 1));
    }
  };

  // default selected year for pengajaran
  useEffect(() => {
    if (availableYear && availableYear.length > 0) {
      setSelectedPengajaranYear(availableYear[0]);
    }
  }, [lecturer]);

  // filter selected pengajaran
  useEffect(() => {
    if (lecturer) {
      const teaching = lecturer.teaching.filter(
        (item: Teaching) =>
          item.semester ===
          `${selectedPengajaranYear}${selectedPengajaranSemester}`
      );
      setActivePengajaran(teaching);
    }
  }, [selectedPengajaranYear, selectedPengajaranSemester, lecturer]);

  useEffect(() => {
    setIsFetching(false);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
    },
  };

  // navbar change background onscroll
  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.onscroll = () => {
      scrollFunction();
    };
  }, []);

  const profileRef = useRef<null | HTMLDivElement>(null);
  const tridharmaRef = useRef<null | HTMLDivElement>(null);
  const prestasiRef = useRef<null | HTMLDivElement>(null);
  const researchMediaRef = useRef<null | HTMLDivElement>(null);
  const smoothScroll = (refItem: any, activeTabItem: any) => {
    refItem.current?.scrollIntoView({ behavior: 'smooth' });
    if (activeTabItem) {
      setTridharmaTab(activeTabItem);
    }
  };
  const getSentence = (sentence: any) => {
    return getKeyValue(sentence)(selectLanguage(language));
  };

  return lecturer ? (
    <>
      <Head>
        <title>{lecturer.profile.name} | Universitas Sumatera Utara</title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <div className="direktori">
        <header className={`${scrolled ? 'bg-header' : ''}`}>
          <nav className="nav">
            <div className="nav-logo">
              <Link href="/">
                <img src="/images/usu.png" alt="Logo USU" loading="lazy" />
              </Link>
              <Link href="/">
                <h5>
                  Dosen Berprestasi
                  <br />
                  UNIVERSITAS SUMATERA UTARA
                </h5>
              </Link>
            </div>
            <div className="nav-links">
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(profileRef, null)}
              >
                <h5>PROFIL</h5>
              </div>
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(profileRef, null)}
              >
                <a
                  href={`${baseUrl}/lecturer/cv/${slug}?lang=${language}`}
                  download
                >
                  <h5>BIO &amp; CV</h5>
                </a>
              </div>
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(tridharmaRef, 'penelitian')}
              >
                <h5>{getSentence(sentences.penelitian_content)}</h5>
              </div>
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(tridharmaRef, 'publikasi')}
              >
                <h5>{getSentence(sentences.publikasi_content)}</h5>
              </div>
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(tridharmaRef, 'pengajaran')}
              >
                <h5>{getSentence(sentences.pengajaran_content)}</h5>
              </div>
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(tridharmaRef, 'pengabdian')}
              >
                <h5>{getSentence(sentences.pengabdian_menu)}</h5>
              </div>
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(prestasiRef, null)}
              >
                <h5>{getSentence(sentences.penghargaan_content)}</h5>
              </div>
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(prestasiRef, null)}
              >
                <h5>PATEN & HKI</h5>
              </div>
              <div
                className="nav-links__item"
                onClick={() => smoothScroll(researchMediaRef, null)}
              >
                <h5>RESEARCH MEDIA</h5>
              </div>
            </div>
            <div className="nav-collapse" onClick={() => setNavActive(true)}>
              <img src="/images/icons/burger-icon-black.png" alt="collapse" />
            </div>
          </nav>
        </header>
        <div className={`sidenav ${navActive ? 'open' : ''}`}>
          <div className="sidenav-icon" onClick={() => setNavActive(false)}>
            <h2>&#x2715;</h2>
          </div>
          <div className="sidenav-list">
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(profileRef, null)}
            >
              <h2>PROFIL</h2>
            </div>
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(profileRef, null)}
            >
              <a
                href={`${baseUrl}/lecturer/cv/${slug}?lang=${language}`}
                download
              >
                <h2>BIO &amp; CV</h2>
              </a>
            </div>
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(tridharmaRef, 'penelitian')}
            >
              <h2>{getSentence(sentences.penelitian_content)}</h2>
            </div>
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(tridharmaRef, 'publikasi')}
            >
              <h2>{getSentence(sentences.publikasi_content)}</h2>
            </div>
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(tridharmaRef, 'pengajaran')}
            >
              <h2>{getSentence(sentences.pengajaran_content)}</h2>
            </div>
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(tridharmaRef, 'pengabdian')}
            >
              <h2>{getSentence(sentences.pengabdian_menu)}</h2>
            </div>
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(prestasiRef, null)}
            >
              <h2>{getSentence(sentences.penghargaan_content)}</h2>
            </div>
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(prestasiRef, null)}
            >
              <h2>PATEN & HKI</h2>
            </div>
            <div
              className="sidenav-list__item"
              onClick={() => smoothScroll(researchMediaRef, null)}
            >
              <h2>RESEARCH MEDIA</h2>
            </div>
          </div>
        </div>
        <section id="hero" className="hero" ref={profileRef}>
          <div className="hero-background">
            <div className="hero-container direktori-container">
              <div className="hero-biodata">
                <div className="name">
                  <h1>{lecturer.profile.name}</h1>
                </div>
                <div className="hero-biodata-datapegawai">
                  <div className="hero-biodata-datapegawai-items">
                    <p className="label">NIP</p>
                    <p>:&nbsp;{lecturer.profile.nip}</p>
                  </div>
                  <div className="hero-biodata-datapegawai-items">
                    <p className="label">NIDN</p>
                    <p>:&nbsp;{lecturer.profile.nidn}</p>
                  </div>
                  <div className="hero-biodata-datapegawai-items">
                    <p className="label">Email</p>
                    <p>:&nbsp;{lecturer.profile.email_usu}</p>
                  </div>
                </div>
                <div className="hero-expertise">
                  {lecturer.knowledgeField.map(
                    (skill: string, index: number) => (
                      <button key={index} className="btn-justview">
                        {skill}
                      </button>
                    )
                  )}
                </div>
                <div className="bio">
                  {bioFull
                    ? htmlParser(lecturer.description)
                    : htmlParser(
                        `${lecturer.description.substring(0, 420)}...`
                      )}
                </div>
                <div className="hero-biodata-link">
                  {!bioFull && (
                    <a onClick={() => setBioFull(true)}>Selengkapnya &#8594;</a>
                  )}
                </div>
                <div className="social-media">
                  {lecturer.facebook && (
                    <a
                      href={`//${lecturer.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/direktori/facebook.png"
                        alt="Facebook"
                      />
                    </a>
                  )}
                  {lecturer.instagram && (
                    <a
                      href={`//${lecturer.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/direktori/instagram.png"
                        alt="instagram"
                      />
                    </a>
                  )}
                  {lecturer.linkedin && (
                    <a
                      href={`//${lecturer.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/direktori/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                  )}
                  {lecturer.blog && (
                    <div className="blog">
                      <p>Blog :</p>
                      <a
                        href={`//${lecturer.blog}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>{lecturer.blog}</p>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="hero-image">
                <img
                  src={lecturer.image}
                  alt={`foto profile ${lecturer.profile.name}`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="tridharma"
          className="tridharma direktori-container"
          ref={researchMediaRef}
        >
          <div className="single-card-wrapper">
            <div className="direktori-card">
              <div className="direktori-card-header">
                <img
                  src="/images/icons/direktori/research-media.png"
                  alt="Research Media"
                />
                <h2>Research Media</h2>
              </div>
              <div className="direktori-card-body direktori-carousel research-media-carousel">
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className=""
                  containerClass="container-with-dots"
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
                  showDots={false}
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                  {lecturer.researchGate ? (
                    <a
                      href={`//${lecturer.researchGate}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/direktori/research-gate.png"
                        alt="Research Gate"
                      />
                    </a>
                  ) : (
                    <a>
                      <img
                        src="/images/icons/direktori/research-gate.png"
                        alt="Research Gate"
                      />
                    </a>
                  )}
                  {lecturer.googleScholar ? (
                    <a
                      href={`//${lecturer.googleScholar}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/direktori/google-scholar.png"
                        alt="Google Scholar"
                      />
                    </a>
                  ) : (
                    <a>
                      <img
                        src="/images/icons/direktori/google-scholar.png"
                        alt="Google Scholar"
                      />
                    </a>
                  )}
                  {lecturer.sinta ? (
                    <a
                      href={`//${lecturer.sinta}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/direktori/sinta.png"
                        alt="Sinta"
                      />
                    </a>
                  ) : (
                    <a>
                      <img
                        src="/images/icons/direktori/sinta.png"
                        alt="Sinta"
                      />
                    </a>
                  )}
                  {lecturer.scopus ? (
                    <a
                      href={`//${lecturer.scopus}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/direktori/scopus.png"
                        alt="Scopus"
                      />
                    </a>
                  ) : (
                    <a>
                      <img
                        src="/images/icons/direktori/scopus.png"
                        alt="Scopus"
                      />
                    </a>
                  )}
                  {lecturer.orcid ? (
                    <a
                      href={`//${lecturer.orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/icons/direktori/orcid.png"
                        alt="Orcid"
                      />
                    </a>
                  ) : (
                    <a>
                      <img
                        src="/images/icons/direktori/orcid.png"
                        alt="Orcid"
                      />
                    </a>
                  )}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="single-card-wrapper" ref={tridharmaRef}>
            <div className="direktori-card">
              <div className="direktori-card-header">
                <h2>Tridharma Perguruan Tinggi</h2>
              </div>
              <div className="direktori-card-body tab">
                <div className="tab-navigation">
                  <div
                    className={`tab-navigation__item ${
                      tridharmaTab === 'penelitian' ? 'active' : ''
                    }`}
                    onClick={() => setTridharmaTab('penelitian')}
                  >
                    <img
                      src="/images/icons/direktori/penelitian.png"
                      alt="Penelitian"
                    />
                    <h3>
                      {getSentence(sentences.penelitian_content).toLowerCase()}
                    </h3>
                  </div>
                  <div
                    className={`tab-navigation__item ${
                      tridharmaTab === 'publikasi' ? 'active' : ''
                    }`}
                    onClick={() => setTridharmaTab('publikasi')}
                  >
                    <img
                      src="/images/icons/direktori/publikasi.png"
                      alt="Publikasi"
                    />
                    <h3>
                      {getSentence(sentences.publikasi_content).toLowerCase()}
                    </h3>
                  </div>
                  <div
                    className={`tab-navigation__item ${
                      tridharmaTab === 'pengajaran' ? 'active' : ''
                    }`}
                    onClick={() => setTridharmaTab('pengajaran')}
                  >
                    <img
                      src="/images/icons/direktori/pengajaran.png"
                      alt="Pengajaran"
                    />
                    <h3>
                      {getSentence(sentences.pengajaran_content).toLowerCase()}
                    </h3>
                  </div>
                  <div
                    className={`tab-navigation__item ${
                      tridharmaTab === 'pengabdian' ? 'active' : ''
                    }`}
                    onClick={() => setTridharmaTab('pengabdian')}
                  >
                    <img
                      src="/images/icons/direktori/pengabdian.png"
                      alt="Pengabdian"
                    />
                    <h3>
                      {getSentence(sentences.pengabdian_menu).toLowerCase()}
                    </h3>
                  </div>
                </div>
                {/* penelitian */}
                <div
                  className={`tab-content ${
                    tridharmaTab === 'penelitian' ? 'active-content' : ''
                  }`}
                >
                  {lecturer.research.length > 0 ? (
                    <>
                      <div className="content-padding">
                        <div
                          className={`thin-scrollbar ${
                            researches.length > 5 ? 'full-content-table' : ''
                          }`}
                        >
                          <table>
                            <thead>
                              <tr>
                                <th>JUDUL PENELITIAN</th>
                                <th>TAHUN</th>
                              </tr>
                            </thead>
                            <tbody
                              className={`${
                                researches.length > 5
                                  ? 'full-content-table'
                                  : ''
                              }`}
                            >
                              {researches &&
                                researches.map((penelitian: Research) => (
                                  <tr key={penelitian.id}>
                                    <td>{penelitian.title}</td>
                                    <td>{penelitian.year}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                        <h6 className="small-description">
                          Source: sister.usu.ac.id
                        </h6>
                      </div>
                      <div className="link-description">
                        <button className="btn-muted btn-justview">
                          Total : {lecturer.research.length}
                        </button>
                        {lecturer.research.length > 5 && (
                          <button
                            className="btn-green btn-sm"
                            onClick={switchFullResearch}
                          >
                            {getSentence(sentences.lihatSeluruhnya)}
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-4">belum ada penelitian</h3>
                    </>
                  )}
                </div>
                {/* publikasi */}
                <div
                  className={`tab-content ${
                    tridharmaTab === 'publikasi' ? 'active-content' : ''
                  }`}
                >
                  {lecturer.publish.length > 0 ? (
                    <>
                      <div className="content-padding publikasi">
                        <div
                          className={`thin-scrollbar ${
                            publications.length > 5 ? 'full-content-table' : ''
                          }`}
                        >
                          <table>
                            <thead>
                              <tr>
                                <th>JUDUL PUBLIKASI</th>
                                <th>JENIS PUBLIKASI</th>
                                <th>TAHUN TERBIT</th>
                                <th>PAPER</th>
                              </tr>
                            </thead>
                            <tbody
                              className={`${
                                publications.length > 5
                                  ? 'full-content-table'
                                  : ''
                              }`}
                            >
                              {publications &&
                                publications.map((publikasi: Publish) => (
                                  <tr key={publikasi.id}>
                                    <td>{publikasi.publication.title}</td>
                                    <td>{publikasi.publication.type}</td>
                                    <td>{publikasi.publication.year}</td>
                                    <td>
                                      {publikasi.link ? (
                                        <a
                                          href={`//${publikasi.link}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <button className="btn-green">
                                            <img
                                              src="/images/icons/direktori/pdf.png"
                                              alt="PDF"
                                            />
                                            <p>PDF</p>
                                          </button>
                                        </a>
                                      ) : (
                                        <>-</>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                        <h6 className="small-description">
                          Source: sister.usu.ac.id
                        </h6>
                      </div>
                      <div className="link-description">
                        <button className="btn-muted btn-justview">
                          Total : {lecturer.publish.length}
                        </button>
                        {lecturer.publish.length > 5 && (
                          <button
                            className="btn-green btn-sm"
                            onClick={switchFullPublications}
                          >
                            {getSentence(sentences.lihatSeluruhnya)}
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-4">belum ada publikasi</h3>
                    </>
                  )}
                </div>
                {/* pengajaran */}
                <div
                  className={`tab-content ${
                    tridharmaTab === 'pengajaran' ? 'active-content' : ''
                  }`}
                >
                  {lecturer.teaching.length > 0 ? (
                    <>
                      <div className="content-padding pengajaran">
                        <div className="tab-content-filter">
                          <select
                            value={selectedPengajaranYear}
                            onChange={(e) =>
                              setSelectedPengajaranYear(e.target.value)
                            }
                          >
                            <option key="0" disabled>
                              TAHUN
                            </option>
                            {availableYear.map(
                              (tahun: string, index: number) => (
                                <option key={tahun} value={tahun}>
                                  {tahun}
                                </option>
                              )
                            )}
                          </select>
                          <select
                            value={selectedPengajaranSemester}
                            onChange={(e) =>
                              setSelectedPengajaranSemester(e.target.value)
                            }
                          >
                            <option key="0" disabled>
                              SEMESTER
                            </option>
                            <option key="1" value="1">
                              SEMESTER 1
                            </option>
                            <option key="2" value="2">
                              SEMESTER 2
                            </option>
                          </select>
                        </div>
                        <div
                          className={`thin-scrollbar ${
                            activePengajaran.length > 5
                              ? 'full-content-table'
                              : ''
                          }`}
                        >
                          <table className="bordered-all">
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>Mata Kuliah</th>
                                <th>Kelas</th>
                                <th>Program Studi</th>
                              </tr>
                            </thead>
                            <tbody>
                              {activePengajaran.map(
                                (pengajaran: Teaching, index: number) => (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{pengajaran.subject}</td>
                                    <td>{pengajaran.class}</td>
                                    <td>{pengajaran.major_name}</td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                        <h6 className="small-description">
                          Source: feeder.usu.ac.id
                        </h6>
                      </div>
                      <div className="link-description">
                        <button className="btn-muted btn-justview">
                          Total : {activePengajaran.length}
                        </button>
                        {/* <button className="btn-green btn-sm">
                        {getSentence(sentences.lihatSeluruhnya)}
                      </button> */}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-4">belum ada pengajaran</h3>
                    </>
                  )}
                </div>
                {/* pengabdian */}
                <div
                  className={`tab-content ${
                    tridharmaTab === 'pengabdian' ? 'active-content' : ''
                  }`}
                >
                  {lecturer.devotion.length > 0 ? (
                    <>
                      <div className="content-padding">
                        <div
                          className={`thin-scrollbar ${
                            researches.length > 5 ? 'full-content-table' : ''
                          }`}
                        >
                          <table>
                            <thead>
                              <tr>
                                <th>JUDUL PENGABDIAN</th>
                                <th>TAHUN</th>
                              </tr>
                            </thead>
                            <tbody
                              className={`${
                                devotions.length > 5 ? 'full-content-table' : ''
                              }`}
                            >
                              {devotions &&
                                devotions.map((pengabdian: Devotion) => (
                                  <tr key={pengabdian.id}>
                                    <td>{pengabdian.title}</td>
                                    <td>{pengabdian.year}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                        <h6 className="small-description">
                          Source: sister.usu.ac.id
                        </h6>
                      </div>
                      <div className="link-description">
                        <button className="btn-muted btn-justview">
                          Total : {lecturer.devotion.length}
                        </button>
                        {lecturer.devotion.length > 5 && (
                          <button
                            className="btn-green btn-sm"
                            onClick={switchFullDevotions}
                          >
                            {getSentence(sentences.lihatSeluruhnya)}
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-4">belum ada pengabdian</h3>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="prestasi"
          className="prestasi direktori-container"
          ref={prestasiRef}
        >
          <div className="double-card-wrapper width-3-2">
            {/* paten */}
            <div className="direktori-card">
              <div className="direktori-card-header">
                <img src="/images/icons/direktori/patent.png" alt="Paten&HKI" />
                <h2 className="capitalize">
                  {getSentence(sentences.paten_content).toLowerCase()}
                </h2>
              </div>
              <div className="direktori-card-body">
                <div className="list thin-scrollbar">
                  {lecturer.hki.length > 0 ? (
                    patents &&
                    patents.map((paten: Hki) => (
                      <div key={paten.id} className="list-item">
                        <div className="list-item__left">
                          <h4>{paten.title}</h4>
                          <h6>
                            Penemu :{' '}
                            {paten.inventor.map(
                              (people: string, index: number) => (
                                <>
                                  {index !== paten.inventor.length - 1
                                    ? `${people}, `
                                    : `dan ${people}`}
                                </>
                              )
                            )}
                          </h6>
                          <div className="list-item__description">
                            <button className="btn-green btn-xs btn-justview">
                              <img
                                src="/images/icons/direktori/calendar.png"
                                alt="calendar"
                              />
                              <h6>{paten.year}</h6>
                            </button>
                            {/* <button className="btn-blue btn-xs btn-justview">
                                  <img
                                    src="/images/icons/direktori/comment.png"
                                    alt="permohonan"
                                  />
                                  <h6>
                                    Nomor Permohonan : {paten.noPermohonan}
                                  </h6>
                                </button> */}
                            <button className="btn-yellow btn-xs btn-justview">
                              <img
                                src="/images/icons/direktori/doughnut-chart.png"
                                alt="type"
                              />
                              <h6>{paten.type}</h6>
                            </button>
                          </div>
                        </div>
                        {/* <div className="list-item__right">
                          <img
                            src="/images/icons/direktori/el_book.png"
                            alt="book"
                          />
                          <h6>&nbsp;</h6>
                        </div> */}
                      </div>
                    ))
                  ) : (
                    <>
                      <h3 className="mt-4">Belum ada Paten</h3>
                    </>
                  )}
                </div>
                <h6 className="small-description ml-3">
                  Source: sister.usu.ac.id
                </h6>
                <div className="link-description">
                  <button className="btn-nonactive btn-justview">
                    Total : {lecturer.hki.length}
                  </button>
                  {lecturer.hki.length > 3 && (
                    <button className="btn-green" onClick={switchFullPatents}>
                      {getSentence(sentences.lihatSeluruhnya)}
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* penghargaan */}
            <div className="direktori-card">
              <div className="direktori-card-header">
                <img
                  src="/images/icons/direktori/penghargaan.png"
                  alt="Penghargaan"
                />
                <h2 className="capitalize">
                  {getSentence(sentences.penghargaan_content).toLowerCase()}
                </h2>
              </div>
              <div className="direktori-card-body">
                <div className="content-wrapper thin-scrollbar">
                  {lecturer.achievement.length > 0 ? (
                    achievements &&
                    achievements.map((penghargaan: Achievement) => (
                      <div key={penghargaan.id} className="content">
                        <div className="title">
                          <h3>{penghargaan.title}</h3>
                          <h6>{penghargaan.short_description}</h6>
                        </div>
                        {penghargaan.image && (
                          <img src={penghargaan.image} alt="Seminar Nasional" />
                        )}
                        <div className="attribute">
                          <button className="badge-sm">
                            {penghargaan.date}
                          </button>
                          <button className="badge-sm">
                            {penghargaan.place}
                          </button>
                        </div>
                        <p>{penghargaan.description.substring(0, 421)}...</p>
                        <div className="content-link">
                          <a href="#">Informasi Lengkap</a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      <h3 className="mt-4">Belum ada penghargaan</h3>
                    </>
                  )}
                </div>
                <div className="link-description">
                  <button className="btn-nonactive btn-justview">
                    Total : {lecturer.achievement.length}
                  </button>
                  {lecturer.achievement.length > 1 && (
                    <button
                      className="btn-green"
                      onClick={switchFullAchievements}
                    >
                      {getSentence(sentences.lihatSeluruhnya)}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="video" className="video direktori-container">
          <div className="single-card-wrapper">
            <div className="direktori-card">
              <div className="direktori-card-header">
                <img src="/images/icons/direktori/video.png" alt="Video" />
                <h2 className="capitalize">
                  {getSentence(sentences.video_content).toLowerCase()}
                </h2>
              </div>
              <div className="direktori-card-body">
                {lecturer.video.length > 0 ? (
                  lecturer.video.map(
                    (video: Video, index: number) =>
                      index === 1 && (
                        <div key={video.id} className="video-headline">
                          <iframe
                            src={video.video_link}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )
                  )
                ) : (
                  <>
                    <h3>Belum ada video</h3>
                  </>
                )}
                <div className="videos direktori-carousel">
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
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
                    responsive={{
                      superLargeDesktop: {
                        // the naming can be any, depends on you.
                        breakpoint: { max: 4000, min: 3000 },
                        items: 3,
                      },
                      desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3,
                      },
                      tablet: {
                        breakpoint: { max: 1000, min: 540 },
                        items: 2,
                      },
                      mobile: {
                        breakpoint: { max: 540, min: 0 },
                        items: 1,
                      },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                  >
                    {lecturer.video.map(
                      (video: any, index: number) =>
                        index !== 1 && (
                          <iframe
                            key={`video${video.id}`}
                            src={video.video_link}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )
                    )}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ) : (
    <LoadingSSO />
  );
};

export default DirektoriDetailPage;
