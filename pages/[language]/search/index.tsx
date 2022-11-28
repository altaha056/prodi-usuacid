/* eslint-disable react/jsx-one-expression-per-line */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { useRouter } from 'next/router';
import 'react-quill/dist/quill.snow.css';
import ReactGA from 'react-ga';
import useSWR from 'swr';
import ArticleModel, { ArticleMaker } from '@/models/article';
import ArticleList from '@/page-components/common/fasilitas-list';

const Search = () => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language, keywords } = router.query;
  const selectedLanguage = selectLanguage(language);
  const param = `/${selectedLanguage}`;
  const url = `/article?lang=${language}&selected=true&limit=100&`;
  const [fetchUrl, setFetchUrl] = useState(`${url}`);
  const { data: researchesRes, error } = useSWR(fetchUrl);
  const [researches, setResearches] = useState<ArticleModel[] | undefined>(
    undefined
  );

  // create data //
  const createResearch = () => {
    const temp = researchesRes.data.data?.map((research: any) =>
      ArticleMaker.create(research)
    );
    const filtered = keywords
      ? temp.filter((data: ArticleModel) =>
          data.title.toLowerCase().includes(keywords.toString().toLowerCase())
        )
      : temp;

    setResearches(filtered);
  };

  useEffect(() => {
    if (researchesRes) {
      createResearch();
    }
  }, [researchesRes, router.query]);

  useEffect(() => {
    if (error) {
      setResearches([]);
    }
  }, [error]);

  console.log('artikel', researches);
  return (
    <div className="ftco-section ftco-section--top search-page">
      <Head>
        <title>
          {getKeyValue(sentences.berita)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <div className="container">
        <div className="section-category">{`Search: ${keywords}`}</div>
        <div className="row">
          {!researchesRes && <div className="col-12">Loading...</div>}
          {researchesRes &&
            researches &&
            researches.map((item) => (
              <ArticleList key={item.id} {...item} language={language} />
            ))}
          {researchesRes && !researches && (
            <div className="col-12">
              Pencarian tidak ditemukan silahkan coba dengan kata kunci lainnya.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
