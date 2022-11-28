/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-danger */
import NewsMenuModel from '@/models/news-menu';
import Link from 'next/link';
import React from 'react';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { selectLanguage } from 'helpers/check-language';
import dateFormat from '@/config/dateformat';

interface Props {
  content?: NewsMenuModel | null;
  language?: string | string[];
}

const SelectedFocus: React.FC<Props> = ({ content, language }) => (
  <section className="ftco-section section-rilis-wrapper">
    <div className="container">
      <div className="section-rilis">
        <span className="section-rilis__title">
          <h1>
            <b>
              {getKeyValue(sentences.rilis)(
                selectLanguage(content ? content.language : '')
              )}
            </b>
          </h1>
        </span>
        <div className="section-rilis__dasaroren row">
          <div className="col-md-6">
            <p className="section-rilis__date">
              <span>
                {dateFormat(content ? content.date : '', 'dd mmmm yyyy')}
              </span>
            </p>
            <p className="section-rilis__subtitle">
              <span>{content ? content.title : ''}</span>
            </p>
            <p className="section-rilis__isi">
              <span>{content ? content.shortDescription : ''}</span>
            </p>
            <p className="section-rilis__selanjutnya">
              <Link
                href="/[language]/berita/[slug]"
                as={`/${content?.language}/berita/${content?.slug}`}
              >
                <a
                  className="button-custom"
                  style={{
                    fontFamily: 'sans-serif',
                    color: 'black',
                  }}
                >
                  {getKeyValue(sentences.BacaSelanjutnya_content)(
                    selectLanguage(content ? content.language : '')
                  )}
                </a>
              </Link>
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={content ? content.image : ''}
              alt=""
              className="section-rilis__img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SelectedFocus;
