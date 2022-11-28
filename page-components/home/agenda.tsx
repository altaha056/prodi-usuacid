/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import AgendaModel from '@/models/agenda';
import dateFormat from '@/config/dateformat';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import { link } from 'node:fs';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ArticleOutlineAgenda from './agenda-outline';

interface AgendaItemProps extends AgendaModel {
  delay: number;
}

interface Props {
  contents: AgendaModel[];
  language?: string | string[];
}

const AgendaItem: React.FC<AgendaItemProps> = ({
  delay,
  image,
  title,
  date,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="col-md-4 ">
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={delay}>
        <div className="blog-entry">
          <div className="project" style={{ maxWidth: '100%' }}>
            <a>
              <div
                className="block-20"
                style={{
                  backgroundImage: `url(${
                    image || '/images/default_image.png'
                  })`,
                }}
              />
            </a>
            <a
              // href="#"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <Popup
                trigger={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <span className="icon-expand" />
                }
                on="click"
                open={isOpen}
                onOpen={() => setIsOpen(!isOpen)}
                position="right center"
                contentStyle={{
                  width: '0px',
                  height: '0px',
                  background: 'transparent',
                  border: '0px',
                }}
              >
                <div className="popup-box">
                  <div className="box-agenda">
                    <span
                      className="close-icon-agenda"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      x
                    </span>
                    {/* <img
                    src={image || '/images/default_image.png'}
                  /> */}
                    <iframe
                      src={image || '/images/default_image.png'}
                      width="100%"
                      height="400"
                      allowFullScreen
                      style={{ position: 'relative', display: 'block' }}
                    />
                  </div>
                </div>
              </Popup>
            </a>
          </div>

          <div className="text py-md-4">
            <div className="pl-md-3">
              <h3 className="heading" style={{ textOverflow: 'ellipsis' }}>
                {title}
              </h3>
              <p style={{ fontWeight: 'bold' }}>{date} WIB</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

const Agenda: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section section-agenda ftco-section--top">
    <div className="container">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="row justify-content-center mb-md-5 pb-md-3">
          <div className="col-md-7 heading-section ">
            <h2 className="mb-md-4">
              {getKeyValue(sentences.agenda)(selectLanguage(language))}
            </h2>
            <ArticleOutlineAgenda />
          </div>
        </div>
      </ScrollAnimation>
      <div className="container-wrap">
        <div className="row">
          {contents.map((item, index) => (
            <AgendaItem key={item.id} {...item} delay={100 * (index + 1)} />
          ))}
        </div>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={120 * 5}>
        <p>
          <Link href="/[language]/agenda" as={`/${language}/agenda`}>
            <a className="btn-custom excelent-research">
              <button className="btn btn-outline-primary" type="button">
                {getKeyValue(sentences.LihatArsipAgenda_content)(
                  selectLanguage(language)
                )}{' '}
                &nbsp;
                <span className="ion-ios-arrow-forward" />
              </button>
            </a>
          </Link>
        </p>
      </ScrollAnimation>
    </div>
  </section>
);

export default Agenda;
