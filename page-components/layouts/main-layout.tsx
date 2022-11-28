/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import ScrollAnimation from 'react-animate-on-scroll';
import FooterMenuModel, { FooterMenuMaker } from '@/models/footer-menu';
import FooterContentModel, { FooterContentMaker } from '@/models/footer-menu2';
import { apiFooterMenus } from '@/services/api/footer-menu';
import { apiFooterContent } from '@/services/api/footer-menu2';
import { AxiosResponse } from 'axios';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { selectLanguage } from 'helpers/check-language';
import { aboutUsuCategoryId } from '@/config/specific-article-category';
import { Language } from '@/models/language';
import ReactGA from 'react-ga';
import Head from 'next/head';
import { Search, X } from 'react-feather';

const menuClass = 'navbar navbar-expand-lg ftco_navbar ftco-navbar-light';

const MainLayout: React.FC = ({ children }) => {
  // ReactGA.initialize(`${<ArticleOutlineMainlayout />}`);
  // console.log(ArticleOutlineMainlayout);
  // if (typeof window !== "undefined") {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [showSearchForm, setShowSearchForm] = useState<boolean>(false);

  const navRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const router = useRouter();
  const [footerMenu, setFooterMenu] = useState<FooterMenuModel[]>([]);

  const [footerUmum, setFooterUmum] = useState<FooterContentModel[]>([]);
  const [footerBerita, setFooterBelajar] = useState<FooterContentModel[]>([]);
  const [footerAkademik, setFooterAkademik] = useState<FooterContentModel[]>(
    []
  );
  const [footerInfo, setFooterInfo] = useState<FooterContentModel[]>([]);
  const [footerSosmed, setFooterSosmed] = useState<FooterContentModel[]>([]);
  const [footerLembaga, setFooterLembaga] = useState<FooterContentModel[]>([]);
  const [footerCopyright, setFooterCopyright] = useState<FooterContentModel[]>(
    []
  );
  const [footerAfiliasi, setFooterAfiliasi] = useState<FooterContentModel[]>(
    []
  );
  const { language } = router.query || 'id';
  const handleSuccessFooterMenu = (response: AxiosResponse) => {
    const menu: FooterMenuModel[] = response.data.data.data?.map(
      (item: FooterMenuModel) => FooterMenuMaker.create(item)
    );
    setFooterMenu(menu);
  };

  const handleErrorFooterMenu = (error: any) => {
    console.error(error);
  };

  const handleSearch = () => {
    router.push(`/${language}/search?keywords=${searchKeyword}`);
    setShowSearchForm(false);
  };

  const fetchMenu = () => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterMenus.getAll({
        resource: `?lang=${lang}&category_id=${aboutUsuCategoryId[lang]}&selected=true&limit=50`,
        onSuccess: handleSuccessFooterMenu,
        onError: handleErrorFooterMenu,
      });
    }
  };

  const handleSuccessFooterContentumum = (response: AxiosResponse) => {
    const menu: FooterContentModel[] = response.data.data?.map(
      (item: FooterContentModel) => FooterContentMaker.create(item)
    );
    setFooterUmum(menu);
  };

  const fecthFooterumum = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessFooterContentumum,
        onError: handleErrorFooterMenu,
      });
    }
  };

  useEffect(() => {
    fecthFooterumum('umum');
  }, [footerMenu]);

  const handleSuccessFooterContentakademik = (response: AxiosResponse) => {
    const menu: FooterContentModel[] = response.data.data?.map(
      (item: FooterContentModel) => FooterContentMaker.create(item)
    );
    setFooterAkademik(menu);
  };

  const fecthFooterakademik = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessFooterContentakademik,
        onError: handleErrorFooterMenu,
      });
    }
  };

  useEffect(() => {
    fecthFooterakademik('akademik');
  }, [footerMenu]);

  const handleSuccessFooterContentbelajar = (response: AxiosResponse) => {
    const menu: FooterContentModel[] = response.data.data?.map(
      (item: FooterContentModel) => FooterContentMaker.create(item)
    );
    setFooterBelajar(menu);
  };

  const fecthFooterbelajar = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessFooterContentbelajar,
        onError: handleErrorFooterMenu,
      });
    }
  };

  useEffect(() => {
    fecthFooterbelajar('belajar');
  }, [footerMenu]);

  const handleSuccessFooterContentinfo = (response: AxiosResponse) => {
    const menu: FooterContentModel[] = response.data.data?.map(
      (item: FooterContentModel) => FooterContentMaker.create(item)
    );
    setFooterInfo(menu);
  };

  const fecthFooterinfo = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessFooterContentinfo,
        onError: handleErrorFooterMenu,
      });
    }
  };

  useEffect(() => {
    fecthFooterinfo('info');
  }, [footerMenu]);

  const handleSuccessFooterContentsosmed = (response: AxiosResponse) => {
    const menu: FooterContentModel[] = response.data.data?.map(
      (item: FooterContentModel) => FooterContentMaker.create(item)
    );
    setFooterSosmed(menu);
  };

  const fecthFootersosmed = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessFooterContentsosmed,
        onError: handleErrorFooterMenu,
      });
    }
  };

  useEffect(() => {
    fecthFootersosmed('sosmed');
  }, [footerMenu]);

  const handleSuccessFooterContentlembaga = (response: AxiosResponse) => {
    const menu: FooterContentModel[] = response.data.data?.map(
      (item: FooterContentModel) => FooterContentMaker.create(item)
    );
    setFooterLembaga(menu);
  };

  const fecthFooterlembaga = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessFooterContentlembaga,
        onError: handleErrorFooterMenu,
      });
    }
  };

  useEffect(() => {
    fecthFooterlembaga('lembaga');
  }, [footerMenu]);

  const handleSuccessFooterContentcopyright = (response: AxiosResponse) => {
    const menu: FooterContentModel[] = response.data.data?.map(
      (item: FooterContentModel) => FooterContentMaker.create(item)
    );
    setFooterCopyright(menu);
  };

  const fecthFootercopyright = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessFooterContentcopyright,
        onError: handleErrorFooterMenu,
      });
    }
  };

  useEffect(() => {
    fecthFootercopyright('copyright');
  }, [footerMenu]);

  const handleSuccessFooterContentafiliasi = (response: AxiosResponse) => {
    const menu: FooterContentModel[] = response.data.data?.map(
      (item: FooterContentModel) => FooterContentMaker.create(item)
    );
    setFooterAfiliasi(menu);
  };

  const fecthFooterafiliasi = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiFooterContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessFooterContentafiliasi,
        onError: handleErrorFooterMenu,
      });
    }
  };

  useEffect(() => {
    fecthFooterafiliasi('afiliasi');
  }, [footerMenu]);

  const devidingMenu = () => {
    let newMenu: Array<FooterMenuModel[]> = [];
    let temp: FooterMenuModel[] = [];
    footerMenu.forEach((menu, index) => {
      temp = [...temp, menu];
      if ((index + 1) % 5 === 0) {
        newMenu = [...newMenu, temp];
        temp = [];
      }
    });

    const mn1: FooterMenuModel[] = [];
    const mn2: FooterMenuModel[] = [];
    const mn3: FooterMenuModel[] = [];
    const devider = footerMenu.length % 3;

    footerMenu.forEach((mn, index) => {
      // if (index < devider) {
      mn1.push(mn);
      // } else if (index < devider * 2) {
      // mn2.push(mn);
      // } else if (index < devider * 3) {
      // mn3.push(mn);
      // }
    });

    return {
      menu1: mn1,
      menu2: mn2,
      menu3: mn3,
    };
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    devidingMenu();
  }, [footerMenu]);

  const menuConfig = () => {
    const st: number =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (!navRef.current) return;
    if (st > 0) {
      navRef.current.classList.add('scrolled');
    } else {
      navRef.current.classList.remove('scrolled');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', menuConfig);
  }, []);

  const selectedLanguage = selectLanguage(language);
  const param = `/${selectedLanguage}`;

  const { menu1, menu2, menu3 } = devidingMenu();

  const demo = footerUmum;
  const demo2 = footerBerita;
  const demo3 = footerAkademik;
  const demo4 = footerInfo;
  const demo5 = footerSosmed;
  const demo6 = footerLembaga;
  const demo7 = footerCopyright;
  const demo8 = footerAfiliasi;

  const routeWithoutNavbar = ['/[language]/direktori/[slug]'];

  return (
    <div>
      <Head>
        <meta
          property="og:site_name"
          content="Website Universitas Sumatera Utara"
        />
      </Head>
      {!routeWithoutNavbar.includes(router.pathname) && (
        <nav
          className={
            menuClass +
            (router.pathname !== '/[language]' ? ' scrolled awake' : '')
          }
          ref={router.pathname === '/[language]' ? navRef : navRef}
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="/images/usu-logo.png"
                alt="logo"
                className="logo"
                height="50px"
                width="50px"
              />
              <span className="navbar-brand__text" font-align="center">
                Universitas Sumatera Utara
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <div className="navbar-top">
              <div className="container">
                <ul className="navbar-nav">
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.tracer)(selectedLanguage)}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.tracer)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.tracerStudy)(selectedLanguage)}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.tracerStudy)(
                          selectedLanguage
                        )}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.ppid)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">PPID</a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.laporLink)(selectedLanguage)}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.laporLink)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.lapor)(selectedLanguage)}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.mbkmLink)(selectedLanguage)}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.mbkmLink)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.mbkm)(selectedLanguage)}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.kalenderLink)(
                          selectedLanguage
                        )}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.kalenderLink)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.kalenderAkademik)(
                          selectedLanguage
                        )}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.tentangLink)(
                          selectedLanguage
                        )}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.tentangLink)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.tentangUSU)(selectedLanguage)}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf('/berita') !== -1 ? 'active' : ''
                    }`}
                  >
                    <Link href={`${param}/berita`}>
                      <a className="nav-link">
                        {getKeyValue(sentences.berita)(selectedLanguage)}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.tracerStudy)(
                          selectedLanguage
                        )}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link href={`${param}/kampus-sehat`}>
                      <a className="nav-link">Kampus Sehat</a>
                    </Link>
                  </li>
                </ul>

                <div className="header-search">
                  <div
                    className="header-search__toggle"
                    onClick={() => setShowSearchForm(!showSearchForm)}
                  >
                    {showSearchForm ? <X size="1em" /> : <Search size="1em" />}
                  </div>
                  {showSearchForm && (
                    <div className="header-search__form">
                      <input
                        type="text"
                        name="search"
                        id=""
                        value={searchKeyword}
                        placeholder="Search..."
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          setSearchKeyword(event.target.value);
                        }}
                        onKeyUp={(event) => {
                          if (event.key === 'Enter') {
                            handleSearch();
                          }
                        }}
                      />
                      <button onClick={handleSearch}>
                        <span className="icon">
                          <Search size="1em" />
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                <ul className="navbar-lang">
                  <li className="nav-item">
                    {router.query.language === 'id' && (
                      <>
                        <img src="https://412292.smushcdn.com/856188/wp-content/plugins/sitepress-multilingual-cms/res/flags/id.png?lossy=1&strip=1&webp=1" />
                        {getKeyValue(sentences.id)(selectedLanguage)}
                      </>
                    )}
                    {router.query.language === 'en' && (
                      <>
                        <img src="https://412292.smushcdn.com/856188/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png?lossy=1&strip=1&webp=1" />
                        {getKeyValue(sentences.en)(selectedLanguage)}
                      </>
                    )}
                    <i className="ion-ios-arrow-down"></i>

                    <ul className="submenu">
                      <li className={`nav-item nav-item--lang`}>
                        {router.query.language === 'en' && (
                          <Link href="/">
                            <a className="nav-link">
                              <img src="https://412292.smushcdn.com/856188/wp-content/plugins/sitepress-multilingual-cms/res/flags/id.png?lossy=1&strip=1&webp=1" />
                              ID
                              {getKeyValue(sentences.id)(selectedLanguage)}
                            </a>
                          </Link>
                        )}
                        {router.query.language === 'id' && (
                          <Link href="/en">
                            <a
                              className="nav-link"
                              onClick={() => {
                                window.location.href = '/en';
                              }}
                            >
                              <img src="https://412292.smushcdn.com/856188/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png?lossy=1&strip=1&webp=1" />
                              EN
                              {getKeyValue(sentences.en)(selectedLanguage)}
                            </a>
                          </Link>
                        )}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-main">
              <div className="container">
                <ul className="navbar-nav">
                  <li
                    className={`nav-item ${
                      router.pathname === '/[language]' ? 'active' : ''
                    }`}
                  >
                    <Link href={`${param}/`}>
                      <a className="nav-link">
                        {getKeyValue(sentences.beranda_content)(
                          selectedLanguage
                        )}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf('/fakultas-sekolah') !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link href={`${param}/fakultas-sekolah`}>
                      <a className="nav-link">
                        {getKeyValue(sentences.pendidikan_content)(
                          selectedLanguage
                        )}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.penelitian_link)(
                          selectedLanguage
                        )}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.penelitian_link)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.penelitian_content)(
                          selectedLanguage
                        )}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.abdimas_link)(
                          selectedLanguage
                        )}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.abdimas_link)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.pengabdian_menu)(
                          selectedLanguage
                        )}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.penerimaan_link)(
                          selectedLanguage
                        )}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.penerimaan_link)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.penerimaan_content)(
                          selectedLanguage
                        )}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.kampus_link)(
                          selectedLanguage
                        )}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.kampus_link)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.kampus_content)(
                          selectedLanguage
                        )}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf(
                        `/${getKeyValue(sentences.sdgs_link)(selectedLanguage)}`
                      ) !== -1
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      href={`${param}/${getKeyValue(sentences.sdgs_link)(
                        selectedLanguage
                      )}`}
                    >
                      <a className="nav-link">
                        {getKeyValue(sentences.sdgs)(selectedLanguage)}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      router.pathname.indexOf('/menu') !== -1 ? 'active' : ''
                    }`}
                  >
                    <Link href={`${param}/menu`}>
                      <a className="nav-link">
                        <img
                          src="/images/sort.png"
                          style={{ maxWidth: '20px' }}
                        />
                      </a>
                    </Link>
                  </li>
                  {/* <li
                  className={`nav-item ${router.pathname.indexOf('/agenda') !== -1 ? 'active' : ''
                    }`}
                >
                  <Link href={`${param}/agenda`}>
                    <a className="nav-link">
                      {getKeyValue(sentences.agenda_content)(selectedLanguage)}
                    </a>
                  </Link>
                </li>
                <li
                  className={`nav-item ${router.pathname.indexOf('/berita') !== -1 ? 'active' : ''
                    }`}
                >
                  <Link href={`${param}/berita`}>
                    <a className="nav-link">
                      {getKeyValue(sentences.berita_content)(selectedLanguage)}
                    </a>
                  </Link>
                </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}

      <div>{children}</div>

      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3">
              <div>
                <img
                  className="footer-logo"
                  src="/images/usu-logo.png"
                  height="200px"
                  width="200px"
                />

                {/* <h2 className="ftco-heading-2"></h2> */}
                <div className="block-23 mb-3">
                  <div className="footer-address">
                    Jl. Dr. T. Mansur No. 9, Kampus Padang <br />
                    Bulan, Medan, 20155, Sumatera Utara
                  </div>
                  <ul className="footer-contact-list">
                    {footerInfo.map((item) => (
                      <li key={item.id} className="list-unstyled">
                        <span className="image">
                          <img src={item?.image} height="20px" width="20px" />
                        </span>
                        <span className="value">
                          <a href={item.link}>{item.content}</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ftco-footer-widget mb-4">
                  <ScrollAnimation animateIn="fadeInUp" animateOnce delay={100}>
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                      {footerSosmed.map((item) => (
                        <li key={item.id} className="list-unstyled">
                          <a
                            className="image"
                            href={item?.link}
                            target="_blank"
                          >
                            <img src={item?.image} height="40px" width="40px" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
            <div className="col-md col-6">
              <div className="ftco-footer-widget mb-4 ml-md-">
                <h5 className="ftco-footer-widget-title">
                  {getKeyValue(sentences.tentangUSU)(selectLanguage(language))}
                </h5>
                <ul className="list-unstyled">
                  {/* <li>
                    <a href={`/${language}/pimpinan_universitas`}>
                      <span>
                        {getKeyValue(sentences.pimpinan_univ)(selectLanguage(language))}
                      </span>
                    </a>
                  </li> */}
                  <li>
                    <a href={`/${language}/panduan-identitas-visual`}>
                      <span>
                        {getKeyValue(sentences.panduan)(
                          selectLanguage(language)
                        )}
                      </span>
                    </a>
                  </li>
                  {menu1.map((item) => (
                    <li key={item.id} className="list-unstyled">
                      <Link
                        href="/[language]/[article]"
                        as={`/${language}/${item.slug}`}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  ))}
                  {/* <ul className="list-unstyled">
                      <li><a href="http://buku-el.usu.ac.id/2018/01/06/buku-panduan-2/#dflip-df_289/1/" target="_blank"><span style={{fontSize:15, color:'lightgrey'}}>{getKeyValue(sentences.petaIkonik)(selectLanguage(language))}</span></a></li>
                  </ul> */}
                </ul>
              </div>
            </div>
            <div className="col-md col-6">
              <div className="ftco-footer-widget mb-4 ml-md-">
                <h5 className="ftco-footer-widget-title">
                  {getKeyValue(sentences.civitasAkademika)(
                    selectLanguage(language)
                  )}
                </h5>
                <ul className="list-unstyled">
                  {footerAkademik.map((item) => (
                    <li key={item.id} className="list-unstyled">
                      <a href={item.link}>
                        <span />
                        {item.content}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md col-6">
              <div className="ftco-footer-widget mb-4 ml-md-">
                <h5 className="ftco-footer-widget-title">
                  {getKeyValue(sentences.sumberBelajar)(
                    selectLanguage(language)
                  )}
                </h5>
                <ul className="list-unstyled">
                  {footerBerita.map((item) => (
                    <li key={item.id} className="list-unstyled">
                      <a href={item.link}>
                        <span />
                        {item.content}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md col-6">
              <div className="ftco-footer-widget mb-4 ml-md-">
                <h5 className="ftco-footer-widget-title">
                  {getKeyValue(sentences.informasiUmum)(
                    selectLanguage(language)
                  )}
                </h5>
                <ul className="list-unstyled">
                  {/* <li><a href="http://www.usu.ac.id/id/pengumuman"><span style={{fontSize:15, color:'lightgrey'}}>{getKeyValue(sentences.pengumuman)(selectLanguage(language))}</span></a></li> */}
                  {footerUmum.map((item) => (
                    <li key={item.id} className="list-unstyled">
                      <a href={item.link}>
                        <span />
                        {item.content}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md col-6">
              <div className="ftco-footer-widget mb-4 ml-md-">
                <h5 className="ftco-footer-widget-title">
                  {getKeyValue(sentences.afiliasi)(selectLanguage(language))}
                </h5>
                <ul className="list-unstyled">
                  {/* <li><a href="http://www.usu.ac.id/id/pengumuman"><span style={{fontSize:15, color:'lightgrey'}}>{getKeyValue(sentences.pengumuman)(selectLanguage(language))}</span></a></li> */}
                  {footerAfiliasi.map((item) => (
                    <li key={item.id} className="list-unstyled">
                      <a href={item.link}>
                        <span />
                        {item.content}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3" />
            <div className="col-md-5 text-left">
              <div className="ftco-footer-widget">
                <ul className="list-unstyled footer-lembaga">
                  {footerLembaga.map((item) => (
                    <li key={item.id}>
                      <a href={item.link} className="image">
                        <img src={item?.image} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-auto ml-auto">
              <ul className="list-unstyled footer-copyright">
                {footerCopyright.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.content}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* 
      <footer className="ftco-bg-grey">
        <div className="container">
          <div className="logo-list">
            <div className="logo-left">
              <div className="image">
                <img
                  src="/images/logos/sdg-logo.png"
                  alt="Sustainable Development Goals Logo"
                />
              </div>
              <div className="image">
                <img src="/images/logos/jdih-logo.png" alt="JDIH Logo" />
              </div>
              <div className="image">
                <img
                  src="/images/logos/usu-green-campus-logo.png"
                  alt="USU Green Campus Logo"
                />
              </div>
              <div className="image">
                <img src="/images/logos/buku-el-logo.png" alt="Buku El Logo" />
              </div>
              <div className="image">
                <img src="/images/logos/ppid-logo.png" alt="PPID Logo" />
              </div>
            </div>
            <div className="logo-right">
              <img src="/images/logos/logo-usu-02-putih.png" alt="Logo USU" />
              <h1>
                UNIVERSITAS
                <br />
                SUMATERA UTARA
              </h1>
            </div>
          </div>
        </div>
      </footer>

      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="link-list">
            <div className="link-left">
              <div className="ftco-footer-widget">
                <h5 className="ftco-footer-widget-title">
                  Frequently Asked Question
                </h5>
              </div>
              <div className="ftco-footer-widget">
                <h5 className="ftco-footer-widget-title">Aturan Penggunaan</h5>
              </div>
              <div className="ftco-footer-widget">
                <h5 className="ftco-footer-widget-title">Hak Cipta Website</h5>
              </div>
              <div className="ftco-footer-widget">
                <h5 className="ftco-footer-widget-title">Sitemap</h5>
              </div>
              <div className="ftco-footer-widget">
                <h5 className="ftco-footer-widget-title">PPID</h5>
              </div>
              <div className="ftco-footer-widget">
                <h5 className="ftco-footer-widget-title">Lapor</h5>
              </div>
            </div>
            <div className="link-right">
              <div>
                <p>
                  Jl. Dr. T. Mansur No. 9, Kampus Padang Bulan, Medan, 20155,
                  Sumatera Utara
                </p>
              </div>
              <div className="mt-3">
                <p>
                  <span className="icon icon-phone" />
                  <span className="ml-3 text">+61 888 8888</span>
                </p>
                <p>
                  <span className="icon icon-envelope" />
                  <span className="ml-3 text">ppt@usu.ac.id</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3" />
            <div className="col-md-5 text-left">
              <div className="ftco-footer-widget">
                <ul className="list-unstyled footer-lembaga">
                  {footerLembaga.map((item) => (
                    <li key={item.id}>
                      <a href={item.link} className="image">
                        <img src={item?.image} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-auto ml-auto">
              <ul className="list-unstyled footer-copyright">
                {footerCopyright.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.content}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default MainLayout;
