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

const SliderItem: React.FC<PublicLectureModel> = ({
  profession,
  lecturerName,
  photo,
  description,
  link,
  language,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item">
      <div className="testimony-wrap p-md-4 pb-md-5">
        <div className="user-img-wrapper">
          <div
            className="user-img mb-md-5"
            style={{ backgroundImage: `url(${photo})` }}
          >
            <span className="quote d-flex align-items-center justify-content-center">
              <i className="icon-quote-left" />
            </span>
          </div>
          <div className="name-wrapper">
            <h3 className="name">{lecturerName}</h3>
            <span className="position">{profession}</span>
          </div>
        </div>
        <div className="text">          
          <p className="mb-md-5 pl-md-4 line">{description}</p>
          <p>
            <Popup
              trigger={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'green',
                    borderColor: 'green',
                  }}
                >
                  {getKeyValue(sentences.lihatvideo)(selectLanguage(language))}
                </button>
              }
              on="click"
              open={isOpen}
              onOpen={() => setIsOpen(!isOpen)}
              position="right center"
              contentStyle={{
                width: '510px',
                height: '310px',
                background: 'transparent',
                border: '0px',
              }}
            >
              <div className="popup-box">
                <div className="box">
                  <span
                    className="close-icon"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    x
                  </span>
                  <iframe
                    src={link}
                    width="100%"
                    height="400"
                    allowFullScreen
                    style={{ position: 'relative', display: 'block' }}
                  />
                </div>
              </div>
            </Popup>
          </p>
        </div>
      </div>
    </div>
  );
};

const PublicLecture: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section testimony-section ftco-section--top">
    <div className="container">
      <div className="row justify-content-center mb-md-5 pb-3">
        <div className="col-md-7 heading-section ">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <h2 className="mb-md-4">
              {getKeyValue(sentences.kuliahumum)(selectLanguage(language))}
            </h2>
            <ArticleOutlinePublicLecture />
          </ScrollAnimation>
        </div>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="row">
          <div className="col-md-12">
            {/* {JSON.stringify(contents)} */}
            <Slider {...settings}>
              {contents.map((item) => (
                <SliderItem key={item.id} {...item} />
              ))}
            </Slider>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={120 * 5}>
        <Link href="/[language]/kuliahumum" as={`/${language}/kuliahumum`}>
          <a className="btn-custom excelent-research">
            <button className="btn btn-outline-primary" type="button">
              {getKeyValue(sentences.LihatArsipKuliah_content)(
                selectLanguage(language)
              )}{' '}
              &nbsp;
              <span className="ion-ios-arrow-forward" />
            </button>
          </a>
        </Link>
      </ScrollAnimation>
    </div>
  </section>
);

export default PublicLecture;