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
import { Play } from 'react-feather';

interface Props {
  id: string;
  name: number;
  photo: string;
  description: string;
  slug: string | null;
  field: string;
  link: string;
  language?: string | string[];
  date: string | null;
}
const FeaturedStreaming: React.FC<Props> = ({
  photo,
  name,
  slug,
  field,
  description,
  link,
  date,
}) => {
  const router = useRouter();
  const { language } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="featured-streaming">
      <div className="container">
        <div className="section-category">
          {getKeyValue(sentences.terbaru)(selectLanguage(language))}
        </div>
        <div className="article-item">
          <div className="article-item__ornament">
            <img src="/images/ornament.png" alt="" />
          </div>
          <div className="row">
            <div className="article-detail-item col-md-7">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <p className="post-date-author">
                  {dateFormat(date, 'mmmm. dd, yyyy')}
                </p>
                <Link
                  href="/[language]/streaming/[slug]"
                  as={`/${language}/streaming/${slug}`}
                >
                  <a className="article-title">
                    <h6>{name}</h6>
                  </a>
                </Link>
                <p className="article-desc">{field}</p>

                <Popup
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  position="right center"
                  closeOnDocumentClick={true}
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
                        onClick={() => setIsOpen(false)}
                      >
                        x
                      </span>
                      <iframe
                        src={link}
                        width="100%"
                        height="400"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </Popup>
              </ScrollAnimation>
            </div>
            <div className="col-md-5">
              <div className="article-item__image">
                <img src={photo} alt={description} className="article-thum" />
                <div className="play-icon" onClick={() => setIsOpen((o) => !o)}>
                  <Play size="1em" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStreaming;
