/* eslint-disable react/jsx-one-expression-per-line */
import NewsMenuModel from '@/models/news-menu';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import classNames from 'classnames';
import dateFormat from '@/config/dateformat';

interface Props {
  contents: NewsMenuModel[];
  language?: string | string[];
}

interface ResearchItemProps extends NewsMenuModel {
  delay?: number;
  language: string;
  className?: string;
}

const ExcellentResearchItem: React.FC<ResearchItemProps> = ({
  image,
  title,
  delay,
  slug,
  language,
  className,
}) => (
  <div className={classNames("ftco animate fadeInUp ftco-animated dedication-item", className)}>
    <ScrollAnimation animateIn="fadeInUp" animateOnce delay={delay}>
      <div className="staff">
        <div className="block-20" style={{ backgroundImage: `url(${image})` }} />
        <div className="dedication-item__desc">
        <Link
              href="/[language]/berita/[slug]"
              as={`/${language}/berita/${slug}`}
            >
              <a>
                <h3 className='text__title'>{title}</h3>
              </a>
            </Link>
        </div>
      </div>
    </ScrollAnimation>
  </div>
);

const ExcellentResearch: React.FC<Props> = ({ contents, language }) => {
  const featuredContent = contents[0];
  const otherContent = contents.slice(1);
  return (
    <section className="ftco-section article-list-page ftco-section--top">
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="section-category" style={{marginTop: '-80px'}}>{getKeyValue(sentences.liputan)(selectLanguage(language))}</div>
        </ScrollAnimation>
        <div className="dedication-item-wrap">
          <div className="row">
            <div className="col-md-8">
              <ExcellentResearchItem
                {...featuredContent}
                delay={120}
                className={'primary'}
              />
            </div>
            <div className="col-md-4">
              {otherContent.map((item, index) => (
                <ExcellentResearchItem
                  {...item}
                  key={item.id}
                  delay={120}
                  className={'secondary'}
                />
              ))}
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={120 * 5}>
          <Link
            href="/[language]/list-berita"
            as={`/${language}/list-berita`}
          >
            <a className="btn-custom excelent-research">
              <button className="btn btn-outline-primary" type="button">
                Baca Selanjutnya{' '}
                &nbsp;
                <span className="ion-ios-arrow-forward" />
              </button>
            </a>
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
};

export default ExcellentResearch;
function brightness(
  arg0: number
): import('csstype').Property.Filter | undefined {
  throw new Error('Function not implemented.');
}