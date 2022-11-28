/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  language?: string | string[];
  slug: string;
  link: string;
  shortDescription: string | null;
}
const ArticleList: React.FC<Props> = ({ title, link, shortDescription }) => (
  <div className="article-item row">
    <div className="wpb_wrapper">
      <div className="">
        <div className="admission_blue">
          <div className="title">
            <h3 className="footer__school-title">
              <a
                href={link}
                target="_blank"
                className="footer__school-title-link"
              >
                <span
                  className="footer__school-title-text"
                  style={{ color: 'black' }}
                >
                  {title}
                </span>
                <svg className="footer__school-title-arrow-icon">
                  <use xlinkHref="#arrow-right">
                    <svg id="arrow-right" viewBox="0 0 25 26">
                      <line
                        y1="13"
                        x2="24"
                        y2="13"
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="24.2628"
                        y1="13.6757"
                        x2="12.5863"
                        y2="0.937701"
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        y1="-1"
                        x2="17.28"
                        y2="-1"
                        transform="matrix(-0.675725 0.737154 0.737154 0.675725 25 13)"
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </use>
                </svg>
              </a>
            </h3>
            <p className="footer__school-desc">
              <a>{shortDescription}</a>
            </p>
          </div>
          <div className="content_admission" />
        </div>
      </div>
    </div>
  </div>
);

export default ArticleList;
