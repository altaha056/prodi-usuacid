/* eslint-disable react/jsx-one-expression-per-line */
import BulletinModel from '@/models/bulletin';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import classNames from 'classnames';
import dateFormat from '@/config/dateformat';

interface Props {
  contents: BulletinModel[];
  language?: string | string[];
}

interface ResearchItemProps extends BulletinModel {
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
              href="/[language]/bulletin/[slug]"
              as={`/${language}/bulletin/${slug}`}
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

const ExcellentResearch: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section article-list-page ftco-section--top">
    <div className="container">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="section-category">KERJA SAMA</div>
      </ScrollAnimation>
      <div className="container-wrap">
        <div className="row">
          {contents.map((item, index) => (
            <div className="col-md-4">
              <ExcellentResearchItem
                {...item}
                key={item.id}
                delay={120 * (index + 1)}
              />
            </div>
          ))}
        </div>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={120 * 5}>
        <Link
          href="/[language]/list-berita-kerja-sama"
          as={`/${language}/list-berita-kerja-sama`}
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
);

export default ExcellentResearch;
function brightness(
  arg0: number
): import('csstype').Property.Filter | undefined {
  throw new Error('Function not implemented.');
}