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
  title: string;
  image: string;
  description: string;
  slug: string | null;
  date: string | null;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  image,
  title,
  slug,
  date,
  description,
}) => {
  const router = useRouter();
  const { language } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="section-menu-streaming">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              
              TERBARU
            
              <div className="section-menu__body__date">
                <span> {dateFormat(date, 'dd mmmm yyyy')}</span>
              </div>
              <div className="section-menu__body__title">
                <span>{title}</span>
              </div>
              <div className="section-menu__body__isi">
                <span>{description}</span>
              </div>
              <div className="col-md-6">
              <div className="section-menu__body__video">
              <img src={image} />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleList;