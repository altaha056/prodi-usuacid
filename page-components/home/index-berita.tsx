/* eslint-disable prettier/prettier */
import NewsMenuModel, { NewsMenuMaker } from '@/models/news-menu';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import ArticleOutlineDedication from './dedication-outline';

interface Props {
  contents: NewsMenuModel[];
  language?: string | string[];
}

interface IndexBeritaItemProps extends NewsMenuModel {
  delay?: number;
  language: string;
}

const IndexBeritaItem: React.FC<IndexBeritaItemProps> = ({
  title,
  image,
  delay,
  slug,
  language,
}) => (
  <div className="col-md-4 ftco animate fadeInUp ftco-animated">
    <div className='section-index-beranda'>
      <div className="staff">
        <div
          className="block-20"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div
          className="section-index-beranda__title"
        >
          <h3>
            <Link
              href="/[language]/berita/[slug]"
              as={`/${language}/berita/${slug}`}
            >
              <a>{title}</a>
            </Link>
          </h3>
          <p className="section-index-beranda__selanjutnya">
            <Link
              href="/[language]/berita/[slug]"
              as={`/${language}/berita/${slug}`}
            >
              <a
                className="button-custom"
              >
                {getKeyValue(sentences.BacaSelanjutnya_content)(
                  selectLanguage(language)
                )}
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Berita: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section section-index-beranda-wrapper">
    <div className="container">
      <div className="row">
        {contents.slice(1).map((item, index) => (
          <IndexBeritaItem key={item.id} {...item} delay={120 * (index + 1)} />
          ))}
      </div>
    </div>
  </section>
);

export default Berita;