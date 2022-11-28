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

const FakultasSekolah: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section section-pendidikan-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            className="section-pendidikan__img"
            src="/images/kakakpendidikan.png"
          />
        </div>
        <div className="col-md-6">
          {/* <ScrollAnimation animateIn="fadeInUp" animateOnce> */}
          <div className="section-pendidikan__title">
            <h1>
              {getKeyValue(sentences.pendidikan)(selectLanguage(language))}
            </h1>
          </div>
          <p className="section-pendidikan__isi">
            {getKeyValue(sentences.fakultas_outline)(selectLanguage(language))}
          </p>
        </div>
      </div>
      <div className="row section-pendidikan-list">
        <div className="project">
          <Link
            href="/[language]/program-sarjana"
            as={`/${language}/program-sarjana`}
          >
            <a>
              <h1 className="section-pendidikan__h1">
                {getKeyValue(sentences.program)(selectLanguage(language))}{' '}
                <br />{' '}
                {getKeyValue(sentences.sarjanaHome)(selectLanguage(language))}{' '}
                <br />
              </h1>
            </a>
          </Link>
          <p className="section-pendidikan__listisi">
            {getKeyValue(sentences.sarjanaContent)(selectLanguage(language))}
          </p>
        </div>
        <div className="project">
          {' '}
          <Link
            href="/[language]/program-pascasarjana"
            as={`/${language}/program-pascasarjana`}
          >
            <a>
              <h1 className="section-pendidikan__h1hitam">
                {getKeyValue(sentences.programpasca)(selectLanguage(language))}{' '}
                <br />{' '}
                {getKeyValue(sentences.pascaHome)(selectLanguage(language))}
              </h1>
            </a>
          </Link>
          <p className="section-pendidikan__listisi2">
            {getKeyValue(sentences.pascasarjanaContent)(
              selectLanguage(language)
            )}
          </p>
        </div>
        <div className="project">
          <Link
            href="/[language]/program-diploma"
            as={`/${language}/program-diploma`}
          >
            <a>
              <h1 className="section-pendidikan__h1">
                {getKeyValue(sentences.programdiploma)(
                  selectLanguage(language)
                )}{' '}
                <br />{' '}
                {getKeyValue(sentences.spesialisHome)(selectLanguage(language))}{' '}
                <br />{' '}
                {getKeyValue(sentences.diplomaHome)(selectLanguage(language))}
              </h1>
            </a>
          </Link>
          <p
            className="section-pendidikan__listisi"
            style={{ marginTop: '40px' }}
          >
            {getKeyValue(sentences.diplomaContent)(selectLanguage(language))}
          </p>
        </div>
        <div className="project">
          <Link
            href="/[language]/program-profesi"
            as={`/${language}/program-profesi`}
          >
            <a>
              <h1 className="section-pendidikan__h1hitam">
                {getKeyValue(sentences.programprofesi)(
                  selectLanguage(language)
                )}{' '}
                <br />{' '}
                {getKeyValue(sentences.profesiHome)(selectLanguage(language))}
              </h1>
            </a>
          </Link>
          <p className="section-pendidikan__listisi2">
            {getKeyValue(sentences.profesiContent)(selectLanguage(language))}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FakultasSekolah;
