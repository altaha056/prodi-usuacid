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
  <section
    className="ftco-section"
    style={{
      backgroundColor: '#d3d3d3',
      marginBottom: '600px',
      paddingBottom: '0px',
      height: '700px',
      marginTop: '100px',
    }}
  >
    <div className="container">
      <div className="section-lembaga-penelitian__title">
        <h1>
          Lembaga Pengabdian
          <br />
          Masyarakat Universitas
          <br />
          Sumatera Utara
        </h1>
      </div>
      <p className="section-lembaga-penelitian__isi">
        Lembaga Pengabdian kepada Masyarakat Universitas Sumatera Utara
        (LPPM-USU) mulai berdiri sejak tanggal 16 Desember 1980 berdasarkan SK
        Menteri Pendidikan dan Kebudayaan Republik Indonesia
        No.1418/PT05/SK/C.1980.
      </p>

      <div className="row" style={{ marginTop: '150px' }}>
        <div
          className="row d-md-flex align-items-center"
          style={{
            marginTop: '-50px',
            marginLeft: '50px',
            marginRight: '20px',
          }}
        >
          <div
            style={{
              width: '30%',
              height: '200%',
              paddingTop: '-100px',
            }}
          >
            <img
              src="/images/penelitian1.jpg"
              style={{ width: '100%', height: '50%' }}
            />
          </div>
          <div
            style={{
              width: '30%',
              height: '200%',
              marginLeft: '55px',
              marginTop: '-150px',
            }}
          >
            <img
              src="/images/penelitian2.jpg"
              style={{ width: '100%', height: '50%' }}
            />
          </div>
          <div
            style={{
              width: '30%',
              height: '200%',
              marginLeft: '55px',
            }}
          >
            <img
              src="/images/penelitian3.jpg"
              style={{ width: '100%', height: '50%' }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default KehidupanKampus;
