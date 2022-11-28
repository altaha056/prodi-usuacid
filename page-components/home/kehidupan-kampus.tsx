/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-shadow */
import PublicLectureModel from '@/models/public-lecture';
import { link } from 'node:fs';
import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from 'react-slick';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import axios from '@/config/axios';
import ArticleOutlinePublicLecture from './publicLecture-outline';

interface Props {
  contents: PublicLectureModel[];
  language?: string | string[];
}

const settings = {
  className: 'center',
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slideToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slideToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const KehidupanKampus: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section section-kampus-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="section-kampus">
            <h1>
              {getKeyValue(sentences.kehidupanKampus)(selectLanguage(language))}
            </h1>
          </div>
        </div>
        <div className="col-md-6">
          <p className="section-kampus__isi">
            {getKeyValue(sentences.kehidupanKampus_outline)(
              selectLanguage(language)
            )}
          </p>
        </div>
      </div>

      <div className="row section-kampus-list">
        <div className="col-md-4 section-kampus-item">
          <a href={`/${language}/kehidupan-kampus`}>
            <img className="section-kampus__img " src="/images/UKM.jpg" />
          </a>
          <h1 className="elementor-heading-title">
            {getKeyValue(sentences.kegiantanMahasiswa)(
              selectLanguage(language)
            )}
          </h1>
        </div>
        <div className="col-md-4 section-kampus-item">
          <a href={`/${language}/kehidupan-kampus`}>
            <img className="section-kampus__img" src="/images/konseling.jpg" />
          </a>
          <h1 className="elementor-heading-title">
            {getKeyValue(sentences.konseling)(selectLanguage(language))}
          </h1>
        </div>
        <div className="col-md-4 section-kampus-item">
          <a href={`/${language}/kehidupan-kampus`}>
            <img className="section-kampus__img" src="/images/fasilitas.jpg" />
          </a>
          <h1 className="elementor-heading-title">
            {getKeyValue(sentences.fasilitasKampus)(selectLanguage(language))}
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default KehidupanKampus;
