/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable prettier/prettier */
import DedicationModel from '@/models/dedication';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import ArticleOutlineDedication from './dedication-outline';

interface Props {
  contents: DedicationModel[];
  language?: string | string[];
}

interface DedicationItemProps extends DedicationModel {
  delay?: number;
  language: string;
}

const DedicationItem: React.FC<DedicationItemProps> = ({
  title,
  shortDescription,
  location,
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
              href="/[language]/pengabdian-masyarakat/[slug]"
              as={`/${language}/pengabdian-masyarakat/${slug}`}
            >
              <a>{title}</a>
            </Link>
          </h3>
          <p className="section-index-beranda__selanjutnya">
            <Link
              href="/[language]/pengabdian-masyarakat/[slug]"
              as={`/${language}/pengabdian-masyarakat/${slug}`}
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

const Dedication: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section section-pkm-wrapper">
    <div className="container">
      <div className='section-pkm__title'>
        <h1>
          {getKeyValue(sentences.pengabdian)(selectLanguage(language))}
        </h1>
      </div>

      <p className='section-pkm__isi'>
        {getKeyValue(sentences.pengabdian_outline)(selectLanguage(language))}
      </p>
      <div
        className="container-wrap"
      >
        <div className="row">
          {contents.map((item, index) => (
            <DedicationItem key={item.id} {...item} delay={120 * (index + 1)} />
          ))}
        </div>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={120 * 5}>
        <p className="section-index-beranda__arsippengabdian">
          <Link
            href="/[language]/pengabdian-masyarakat"
            as={`/${language}/pengabdian-masyarakat`}
          >
            <a>

              {getKeyValue(sentences.LihatArsipPengabdian_content)(
                selectLanguage(language)
              )}
              {' '}
              &nbsp;
              <span className="ion-ios-arrow-forward" />

            </a>
          </Link>
        </p>
      </ScrollAnimation>
    </div>
  </section>
);

export default Dedication;