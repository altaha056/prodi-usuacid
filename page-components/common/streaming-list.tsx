/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import { useRouter } from 'next/router';
import dateFormat from '@/config/dateformat';
import Link from 'next/link';
import { title } from 'node:process';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { selectLanguage } from 'helpers/check-language';


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
      <section className=" ftc-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-menu__lainnya__video">
                <iframe src={link} allowFullScreen />
              </div>
            </div>
            <div className="col-md-6">
              {/* <ScrollAnimation animateIn="fadeInUp" animateOnce> */}
              {/* </ScrollAnimation> */}
              <div className="section-menu__lainnya__date">
                <p>{dateFormat(date, 'dd mmmm yyyy')}</p>
              </div>
              <div className="section-menu__lainnya__title">
                <p>{name}</p>
              </div>
              <div className="section-menu__lainnya__deskripsi">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleList;