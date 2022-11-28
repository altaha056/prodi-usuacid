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

const NewBlok: React.FC<Props> = ({ contents, language }) => (
  <section
    className="ftco-section"
    style={{ marginLeft: '100px', textAlign: 'center' }}
  >
    <div className="container">
      <div className="row">
        <div
          className="project"
          style={{
            maxWidth: '30%',
          }}
        >
          <h1
            className="elementor-heading-title"
            style={{ lineHeight: 1, color: 'black', fontSize: '30px' }}
          >
            {getKeyValue(sentences.kegiantanMahasiswa)(
              selectLanguage(language)
            )}
          </h1>
        </div>
        <div
          className="project"
          style={{
            maxWidth: '30%',
          }}
        >
          <h1
            className="elementor-heading-title"
            style={{ lineHeight: 1, color: 'black', fontSize: '30px' }}
          >
            {getKeyValue(sentences.konseling)(selectLanguage(language))}
          </h1>
        </div>
        <div
          className="project"
          style={{
            maxWidth: '30%',
          }}
        >
          <h1
            className="elementor-heading-title"
            style={{ lineHeight: 1, color: 'black', fontSize: '30px' }}
          >
            {getKeyValue(sentences.fasilitasKampus)(selectLanguage(language))}
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default NewBlok;