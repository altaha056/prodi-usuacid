/* eslint-disable react/jsx-one-expression-per-line */
import ResearchModel from '@/models/research';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import ArticleOutlineResearch from './excellent-research-outline';

interface Props {
  contents: ResearchModel[];
  language?: string | string[];
}

interface ResearchItemProps extends ResearchModel {
  delay?: number;
  language: string;
}

const ExcellentResearchItem: React.FC<ResearchItemProps> = ({
  image,
  title,
  delay,
  slug,
  language,
}) => (
  <div
    className="col-md-6 col-lg-3"
    // style={{ paddingLeft: '20px', paddingRight: '20px' }}
  >
    <ScrollAnimation animateIn="fadeInUp" animateOnce delay={delay}>
      <div
        className="project"
        style={{ maxWidth: '100%', backgroundColor: 'black' }}
      >
        <Link
          href="/[language]/riset-unggulan/[slug]"
          as={`/${language}/riset-unggulan/${slug}`}
        >
          <a
            // href="#"
            className=""
          >
            <img
              src={image}
              className="img-fluid project-img"
            />
          </a>
        </Link>
        <div className="text">
          <h3 className='text__title'>
            {title}
          </h3>
        </div>
        {/* <Link
          href="/[language]/riset-unggulan/[slug]"
          as={`/${language}/riset-unggulan/${slug}`}
        >
          <a
            // href="#"
            className="icon image-popup d-flex justify-content-center align-items-center"
          >
            <span className="icon-expand" />
          </a>
        </Link> */}
      </div>
    </ScrollAnimation>
  </div>
);

const ExcellentResearch: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section section-exellent-research ftco-section--top">
    <div className="container">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="row justify-content-center mb-md-5 pb-2">
          <div className="col-md-7 heading-section">
            <h2 className="mb-md-4">
              {getKeyValue(sentences.risetUnggulan)(selectLanguage(language))}
            </h2>
            <ArticleOutlineResearch />
          </div>
        </div>
      </ScrollAnimation>
    <div className="container-wrap">
      <div className="row">
        {contents.map((item, index) => (
          <ExcellentResearchItem
            {...item}
            key={item.id}
            delay={120 * (index + 1)}
          />
        ))}
      </div>
    </div>
    <ScrollAnimation animateIn="fadeInUp" animateOnce delay={120 * 5}>
      <Link
        href="/[language]/riset-unggulan"
        as={`/${language}/riset-unggulan`}
      >
        <a className="btn-custom excelent-research">
          <button className="btn btn-outline-primary" type="button">
            {getKeyValue(sentences.LihatArsip_content)(
              selectLanguage(language)
            )}{' '}
            &nbsp;
            <span className="ion-ios-arrow-forward" />
          </button>
        </a>
      </Link>
    </ScrollAnimation>
    </div>
  </section>
);

export default ExcellentResearch;
function brightness(
  arg0: number
): import('csstype').Property.Filter | undefined {
  throw new Error('Function not implemented.');
}