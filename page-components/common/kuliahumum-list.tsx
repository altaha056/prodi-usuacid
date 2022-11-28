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
  lecturerName: number;
  photo: string;
  description: string;
  profession: string;
  link: string;
  language?: string | string[];
  date: string | null;
}
const ArticleList: React.FC<Props> = ({
  photo,
  lecturerName,
  profession,
  description,
  link,
  date,
}) => {
  const router = useRouter();
  const { language } = router.query;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className=" ftc-no-pb">
        <div className="container">
          <div className="article-item row">
            <div className="pl-md-0 ml-md-0 col-md-3">
              <img src={photo} alt={description} className="article-thum" />
            </div>
            <div className="article-detail-item col-md-6">
              <ScrollAnimation animateIn="fadeInUp" animateOnce>
                <h3 className="name">{lecturerName}</h3>
                {/* <h6 style={{ color: 'black' }}>{lecturerName}</h6> */}
                <p>{profession}</p>
                <p className="post-date-author">
                  {dateFormat(date, 'mmmm. dd, yyyy')}
                </p>
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
                        {getKeyValue(sentences.lihatvideo)(
                          selectLanguage(language)
                        )}
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
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleList;
