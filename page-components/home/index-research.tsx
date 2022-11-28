/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable prettier/prettier */
import ResearchModel from '@/models/research';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import ArticleOutlineDedication from './dedication-outline';

interface Props {
  contents: ResearchModel[];
  language?: string | string[];
}

interface IndexResearchItemProps extends ResearchModel {
  delay?: number;
  language: string;
}

const IndexResearchItem: React.FC<IndexResearchItemProps> = ({
  title,
  image,
  delay,
  slug,
  language,
}) => (
  <div className="col-md-4 col-lg-4 ftco animate fadeInUp ftco-animated">
    <div className='section-index-beranda'>
      <div className="staff">
        <div
          className="block-20"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div
          className="pt-4 section-index-beranda__title"
        >
          <h3>
            <Link
              href="/[language]/riset-unggulan/[slug]"
              as={`/${language}/riset-unggulan/${slug}`}
            >
              <a>{title}</a>
            </Link>
          </h3>
          <p className="section-index-beranda__selanjutnya">
            <Link
              href="/[language]/riset-unggulan/[slug]"
              as={`/${language}/riset-unggulan/${slug}`}
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

const Research: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section penelitian-wrapper">
    <div className="container">
      <div className="row">
        {contents.slice(1).map((item, index) => (
          <IndexResearchItem key={item.id} {...item} delay={120 * (index + 1)} />
          ))}
      </div>
    </div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce delay={120 * 5}>
      <p className="section-index-beranda__arsip">
        <Link
          href="/[language]/riset-unggulan"
          as={`/${language}/riset-unggulan`}
        >
          <a>
            
            {getKeyValue(sentences.LihatArsip_content)(
                selectLanguage(language)
              )}
            {' '}
              &nbsp;
            <span className="ion-ios-arrow-forward" />
            
          </a>
        </Link>
      </p>
    </ScrollAnimation>
  </section>
);

export default Research;