/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import Link from 'next/link';
import { title } from 'node:process';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { useRouter } from 'next/router';
import { selectLanguage } from 'helpers/check-language';
import dateFormat from '@/config/dateformat';

interface Props {
  id: string;
  name: string;
  photo: string;
  description: string;
  slug: string | null;
  date: string | null;
  link: string;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  photo,
  name,
  slug,
  date,
  description,
  link,
}) => {
  const router = useRouter();
  const { language } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="section-menu-video">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              
              TERBARU
            
              <div className="section-menu__body__date">
                <span> {dateFormat(date, 'dd mmmm yyyy')}</span>
              </div>
              <div className="section-menu__body__title">
                <span>{name}</span>
              </div>
              <div className="section-menu__body__isi">
                {/* <span>{description}</span> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-menu__body__video">
                <iframe src={link} allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleList;