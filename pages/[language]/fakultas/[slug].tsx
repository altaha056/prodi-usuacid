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
import Link from 'next/link';

export interface Fakultas {
  title: string;
  content: Content;
}
export interface Content {
  slug: string;
  headlineImage: string;
  backgroundImage: string;
  visiImage: string;
  description: string;
  pageUrl: string;
  image1: string;
  image2: string;
  image3: string;
  majors: Major[];
  visi: string;
  misiPendidikan: string;
  misiPenelitian: string;
  misiPengabdian: string;
  misiBintang: string;
  address: string;
  phoneNumber: string;
  email: string;
  youtube: string;
  instagram: string;
  facebook: string;
}

export interface Major {
  title: string;
  subtitle: string;
}
interface Props {
  photo: FacultiesModel | null;
  language?: string;
}
export async function getStaticPaths(): Promise<any> {
  // try {
  //   const response = await Promise.all([
  //     axios.get('faculties/slugs?lang=id'),
  //     axios.get('faculties/slugs?lang=en'),
  //   ]);
  //   const idPaths = await response[0].data.data.map((slug: string) => [
  //     { params: { language: 'id', slug } },
  //   ]);
  //   const enPaths = await response[1].data.data.map((slug: string) => [
  //     { params: { language: 'en', slug } },
  //   ]);
  //   return {
  //     paths: [...idPaths, ...enPaths],
  //     fallback: true,
  //   };
  // } catch (e) {
  //   return {
  //     paths: [],
  //     fallback: true,
  //   };
  // }
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps = async (
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
  return {
    props: {},
  };
};

const ArticlePageFakultas: React.FC = ({}) => {
  const router = useRouter();
  const { language, slug } = router.query;
  const [fakultasData, setFakultasData] = useState<Fakultas>();
  const [inputProdi, setInputProdi] = useState('');
  const changeInput = (e: any) => {
    setInputProdi(e.target.value);
  };

  const [prodiList, setProdiList] = useState<Major[]>([]);

  useEffect(() => {
    axios
      .get(`/api/post?site=USU&lang=${language}&slug=${slug}`)
      .then((response) => {
        console.log('data', response.data);
        setFakultasData(response.data?.post);
      });
    // fetch('/api/faculties')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const fakultas = data.find((obj: any) => obj.slug === slug);
    //     setFakultasData(fakultas);
    //     console.log('fakultas data : ', fakultasData);
    //   });
  }, []);

  useEffect(() => {
    if (fakultasData) {
      setProdiList(fakultasData.content.majors);
    }
  }, [fakultasData]);

  const searchProdi = () => {
    let newProdiList: any = [];
    if (fakultasData) {
      newProdiList = fakultasData.content.majors.filter((obj: any) => {
        return obj.title.toLowerCase().includes(inputProdi);
      });
      setProdiList(newProdiList);
    }
  };
  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.beranda)(selectLanguage(language))} |{' '}
          {fakultasData && fakultasData.title} Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      {fakultasData && (
        <div className="fakultas">
          <section id="fakultas-hero" className="fakultas-hero">
            <img
              src={fakultasData.content.headlineImage}
              alt={fakultasData.title}
            />
          </section>
          <section
            id="fakultas-description padding-l"
            className="fakultas-description"
          >
            <img
              src={fakultasData.content.backgroundImage}
              alt={`halaman ${fakultasData.content.backgroundImage}`}
            />
            <div className="fakultas-description__title">
              <h1>{fakultasData.title}</h1>
              <p>{fakultasData.content.description}</p>
              <button className="btn-yellow">Kunjungi Laman</button>
            </div>
          </section>
          <section id="fakultas-images padding-l" className="fakultas-images">
            {fakultasData.content.image1 && (
              <div className="image">
                <img
                  src={fakultasData.content.image1}
                  alt={`gambar fakultas ${fakultasData.title}`}
                />
              </div>
            )}
            {fakultasData.content.image2 && (
              <div className="image">
                <img
                  src={fakultasData.content.image2}
                  alt={`gambar fakultas ${fakultasData.title}`}
                />
              </div>
            )}
            {fakultasData.content.image3 && (
              <div className="image">
                <img
                  src={fakultasData.content.image3}
                  alt={`gambar fakultas ${fakultasData.title}`}
                />
              </div>
            )}
          </section>
          <section id="fakultas-prodi padding-l" className="fakultas-prodi">
            <h1>Program Studi</h1>
            <div className="search-bar">
              <input
                value={inputProdi}
                onChange={changeInput}
                type="text"
                placeholder="Cari Program Studi"
                onKeyUp={(e) => e.key === 'Enter' && searchProdi()}
              />
              <button onClick={searchProdi}>Cari</button>
            </div>
            <div className="fakultas-prodi-list thin-scrollbar">
              {prodiList.length < 1 && <h3>kata kunci tidak ditemukan</h3>}
              {prodiList.map((item: any) => (
                <div className="card">
                  <p className="title">{item.name}</p>
                  <p>{item.educationType}</p>
                </div>
              ))}
            </div>
          </section>
          <section id="fakultas-visi" className="fakultas-visi">
            <img
              src={fakultasData.content.visiImage}
              alt={`visi misi ${fakultasData.title}`}
            />
            <div className="fakultas-visi-description">
              <h1>Visi</h1>
              <p>{fakultasData.content.visi}</p>
            </div>
          </section>
          <section id="fakultas-misi" className="fakultas-misi">
            {fakultasData.content.misiPendidikan && (
              <div className="fakultas-misi-description">
                <img
                  src="/images/icons/pendidikan-fakultas-icon.svg"
                  alt={`misi pendidikan ${fakultasData.title}`}
                />
                <h2>Pendidikan</h2>
                <p>{fakultasData.content.misiPendidikan}</p>
              </div>
            )}
            {fakultasData.content.misiPenelitian && (
              <div className="fakultas-misi-description">
                <img
                  src="/images/icons/research-fakultas-icon.svg"
                  alt={`misi penelitian ${fakultasData.title}`}
                />
                <h2>Penelitian</h2>
                <p>{fakultasData.content.misiPenelitian}</p>
              </div>
            )}
            {fakultasData.content.misiPengabdian && (
              <div className="fakultas-misi-description">
                <img
                  src="/images/icons/pengabdian-fakultas-icon.svg"
                  alt={`misi pengabdian ${fakultasData.title}`}
                />
                <h2>Pengabdian & Pelayanan</h2>
                <p>{fakultasData.content.misiPengabdian}</p>
              </div>
            )}
            {fakultasData.content.misiBintang && (
              <div className="fakultas-misi-description">
                <img
                  src="/images/icons/star-fakultas-icon.svg"
                  alt={`misi bintang ${fakultasData.title}`}
                />
                <h2>Karakter BINTANG</h2>
                <p>{fakultasData.content.misiBintang}</p>
              </div>
            )}
          </section>
          <section id="fakultas-contact" className="fakultas-contact">
            <div className="fakultas-contact-title">
              <h1>Kontak {fakultasData.title}</h1>
              <h3>Universitas Sumatera Utara</h3>
            </div>
            <div className="fakultas-contact-data">
              <div className="fakultas-contact-data__alamat description-with-logo">
                <img src="/images/icons/map-icon.svg" alt="alamat" />
                <p>{fakultasData.content.address}</p>
              </div>
              <div className="fakultas-contact-data__mailphone">
                <div className="fakultas-contact-data__mailphone-phone description-with-logo">
                  <img
                    src="/images/icons/telephone-icon.svg"
                    alt="phone number"
                  />
                  <p>{fakultasData.content.phoneNumber}</p>
                </div>
                <div className="fakultas-contact-data__mailphone-mail description-with-logo">
                  <img src="/images/icons/mail-icon.svg" alt="email address" />
                  <p>{fakultasData.content.email}</p>
                </div>
              </div>
              <div className="fakultas-contact-data__socialmedia socmed">
                <div className="youtube socmed-icon">
                  <img src="/images/icons/youtube-logo.png" alt="youtube" />
                </div>
                <div className="instagram socmed-icon">
                  <img src="/images/icons/instagram-logo.png" alt="instagram" />
                </div>
                <div className="facebook socmed-icon">
                  <img src="/images/icons/facebook-logo.png" alt="facebook" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ArticlePageFakultas;
