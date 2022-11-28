/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import UnitModel, { UnitMaker } from '@/models/units';
import LoadingSSO from '@/page-components/common/loading';
import { AxiosResponse } from 'axios';
import FacultiesPaging from '@/page-components/faculties/pages';
import FacultiesFilter from '@/page-components/faculties/filter';
import FacultyModel, { FacultyMaker } from '@/models/facultyModel';
import EntityModel, { EntityMaker } from '@/models/entity';
import ReactGA from 'react-ga';
import { apiEntityContent } from '@/services/api/entity';
import { Language } from '@/models/language';
import axios from '@/config/axios';
// import ArticlePageFakultas from './fakultas-sekolah';
import ArticlePageFakultas from './fakultas/index';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const queryString = require('query-string');

interface Props {
  units: UnitModel[];
  faculties: FacultyModel[];
  total_pages: number;
  current_page: number;
}

const createParams = (
  page: string | string[] | undefined,
  faculty: string | string[] | undefined,
  jenjang: string | string[] | undefined
): Record<string, any> => {
  let params: any = {};
  if (page) {
    params = { ...params, page };
  }
  if (faculty) {
    params = { ...params, faculty_id: faculty };
  }
  if (jenjang) {
    params = { ...params, jenjang: jenjang.toString() };
  }
  return params;
};
export const getServerSideProps = async (
  context: Record<string, any>
): Promise<any> => {
  const lang = await checkLanguage(context.params.language);
  const { page, faculty_id, jenjang } = context.query;

  if (lang.redirect) {
    return {
      redirect: {
        destination: `/${lang.value}`,
        permanent: false,
      },
    };
  }

  const params = createParams(page, faculty_id, jenjang);

  try {
    const response = await Promise.all([
      axios.get('/faculty-data', {
        params: {
          ...params,
          limit: 20,
        },
      }),
      axios.get('/faculty'),
    ]);

    const units: UnitModel[] = response[0].data.data.data?.map((unit: any) =>
      UnitMaker.create(unit)
    );
    console.log(units);
    const faculties: FacultyModel[] =
      response[1].data.data?.map((unit: any) => FacultyMaker.create(unit)) ||
      [];
    console.log(faculties);
    return {
      props: {
        units,
        faculties,
        total_pages: response[0].data.data.total_pages,
        current_page: response[0].data.data.current_page,
      } as Props,
    };
  } catch (e) {
    return {
      props: {
        units: [],
        faculties: [],
        total_pages: 1,
        current_page: 1,
      } as Props,
    };
  }
};

const FacultiesPage: NextPage<Props> = ({
  units,
  total_pages,
  current_page,
  faculties,
}) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  console.log(units);
  const router = useRouter();
  const [entitasFakultas, setEntitasFakultas] = useState<EntityModel[]>([]);
  const [entitasPendukung, setEntitasPendukung] = useState<EntityModel[]>([]);
  const { language, faculty_id, jenjang } = router.query;
  const params = createParams(
    undefined,
    faculty_id === 'all' ? undefined : faculty_id,
    jenjang
  );
  const string_params = queryString.stringify(params);
  if ([typeof units].includes('undefined') || router.isFallback) {
    return <LoadingSSO />;
  }

  const [level, setLevel] = useState({
    s1: false,
    s2: false,
    s3: false,
    profesi: false,
  });

  // useEffect(() => {
  //   setLevel({
  //     ...level,
  //     s1: jenjang?.indexOf('s1') !== -1,
  //     s2: jenjang?.indexOf('s2') !== -1,
  //     s3: jenjang?.indexOf('s3') !== -1,
  //     profesi: jenjang?.indexOf('profesi') !== -1,
  //   });
  // }, []);

  // Entitas
  const handleErrorEntity = (error: any) => {
    console.error(error);
  };

  const handleSuccessEntitasFakultas = (response: AxiosResponse) => {
    const menu: EntityModel[] = response.data.data?.map((item: EntityModel) =>
      EntityMaker.create(item)
    );
    setEntitasFakultas(menu);
  };

  const fecthEntitasFakultas = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiEntityContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessEntitasFakultas,
        onError: handleErrorEntity,
      });
    }
  };

  useEffect(() => {
    fecthEntitasFakultas('fakultas');
  }, [faculties]);

  const handleSuccessEntitasPendukung = (response: AxiosResponse) => {
    const menu: EntityModel[] = response.data.data?.map((item: EntityModel) =>
      EntityMaker.create(item)
    );
    setEntitasPendukung(menu);
  };

  const fecthEntitasPendukung = (category: string) => {
    if (typeof language === 'string') {
      const lang = language as Language;
      apiEntityContent.getAll({
        resource: `/${category}?lang=${lang}`,
        onSuccess: handleSuccessEntitasPendukung,
        onError: handleErrorEntity,
      });
    }
  };

  useEffect(() => {
    fecthEntitasPendukung('pendukung');
  }, [faculties]);

  const handleSelect = (e: string) => {
    const searchParams = createParams(
      undefined,
      e === 'all' ? undefined : e,
      jenjang
    );
    Router.push({
      pathname: `/${language}/fakultas-sekolah`,
      href: '/[language]/fakultas-sekolah',
      query: searchParams,
    });
  };

  const handleClickLevel = (name: string, value: boolean) => {
    setLevel({
      ...level,
      [name]: value,
    });
  };

  useEffect(() => {
    const changedLevel: string[] = [];
    if (level.s1) changedLevel.push('s1');
    if (level.s2) changedLevel.push('s2');
    if (level.s3) changedLevel.push('s3');
    if (level.profesi) changedLevel.push('profesi');

    Router.push({
      pathname: `/${language}/fakultas-sekolah`,
      href: '/[language]/fakultas-sekolah',
      query: createParams(
        undefined,
        faculty_id === 'all' ? undefined : faculty_id,
        changedLevel
      ),
    });
  }, [level]);
  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.fakultas)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>
      <section className="section-page schome-pengabdian section-page--pt-0 fakultas-sekolah-page">
        <section
          className="above-the-fold"
          style={{ backgroundImage: `url(/images/pendidikan.jpg)` }}
        >
          <div className="container">
            <div className="page-desc col-md-7">
              <div className="section-subtittle__subtitle">
                {getKeyValue(sentences.pendidikan)(selectLanguage(language))}
              </div>
              <div className="section-subtittle__detail">
                {getKeyValue(sentences.fakultas_outline)(
                  selectLanguage(language)
                )}
                .
              </div>
            </div>
          </div>
        </section>

        <section className="section-subtittle">
          <div className="container">
            <div className="section-subtittle__wrapper">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="section-subtittle__title">
                    150<sup>+</sup>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="section-subtittle__detail">
                    {getKeyValue(sentences.prodi_outline)(
                      selectLanguage(language)
                    )}
                  </div>
                </div>
              </div>
              <div className="section-subtittle__text">
                <div>
                  {getKeyValue(sentences.prodi_quote)(selectLanguage(language))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-image">
          <div className="image__image">
            <div className="container">
              <div className="row">
                <div className="col-4 justify-content-right text-right">
                  <img src="/images/fakultas4.jpg" alt="" />
                </div>
                <div className="col-4 justify-content-center text-center">
                  <img src="/images/fakultas5.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img src="/images/fakultas6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-image">
          <div className="image__image">
            <div className="container ">
              <div className="row">
                <div className="col-4 justify-content-right text-right">
                  <img src="/images/fakultas7.jpg" alt="" />
                </div>
                <div className="col-4 justify-content-center text-center">
                  <img src="/images/fakultas8.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img src="/images/fakultas9.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-faculty">
          <div className="section-faculty__wrapper">
            <div className="row">
              <div className="col-md-5">
                <div className="section-faculty__title">
                  {getKeyValue(sentences.fakultassekolah)(
                    selectLanguage(language)
                  )}
                </div>
              </div>
              <div className="col-md-7 justify-content-left text-left">
                <div className="section-faculty__detail">
                  {getKeyValue(sentences.fakultassekolah_content)(
                    selectLanguage(language)
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container section-studies section-page">
          <div className="container">
            <div className="gallery">
              <div className="row">
                <ArticlePageFakultas />
              </div>
            </div>
          </div>
        </section>
        <section className=" container pb-3 pt-2">
          <div className="row row--item">
            <div className="col-md">
              <FacultiesFilter
                faculties={faculties}
                onSelect={handleSelect}
                selectedFaculty={
                  typeof faculty_id === 'undefined' ? 'all' : faculty_id
                }
                {...level}
                onClickLevel={handleClickLevel}
              />
            </div>
          </div>
          <div className="row row--item">
            <div className="col-md">
              <table className="table faculty-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: 'rgb(0, 105, 55)' }}>
                      {getKeyValue(sentences.programStudi)(
                        selectLanguage(language)
                      )}
                    </th>
                    <th scope="col" style={{ color: 'rgb(0, 105, 55)' }}>
                      {getKeyValue(sentences.akreditasi)(
                        selectLanguage(language)
                      )}
                    </th>
                    <th scope="col" style={{ color: 'rgb(0, 105, 55)' }}>
                      {getKeyValue(sentences.Gelar)(selectLanguage(language))}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {units.map((unit, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <tr key={unit.major + index}>
                      <td className="faculty-name">
                        {unit.major} - {unit.level}
                      </td>
                      <td>{unit.accreditation}</td>
                      <td>{unit.graduationDegree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {units.length <= 0 ? (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: '50vh' }}
                >
                  Program Studi Tidak Ditemukan
                </div>
              ) : null}

              <div className="row d-flex justify-content-center">
                {units.length > 0 ? (
                  <FacultiesPaging
                    total_pages={total_pages}
                    current_page={current_page}
                    lang={language}
                    additional_params={params}
                    string_params={string_params}
                  />
                ) : null}
              </div>
            </div>

            <div className="col-md-auto">
              <table className="table faculty-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: 'rgb(0, 105, 55)' }}>
                      {getKeyValue(sentences.unitPendukung)(
                        selectLanguage(language)
                      )}
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <ul>
                    {entitasPendukung.map((item) => (
                      <li
                        key={item.id}
                        style={{
                          color: 'rgb(0, 105, 55)',
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}
                      >
                        <a href={item.link}>
                          <span style={{ fontSize: 15, color: 'black' }} />
                          {item.content}
                        </a>
                      </li>
                    ))}
                  </ul>
                </tbody>{' '}
                <br />
              </table>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FacultiesPage;
