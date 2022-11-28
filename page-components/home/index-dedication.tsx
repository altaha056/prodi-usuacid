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

interface IndexDedicationItemProps extends DedicationModel {
  delay?: number;
  language: string;
}

const IndexDedicationItem: React.FC<IndexDedicationItemProps> = ({
  title,
  image,
  delay,
  slug,
  language,
}) => (
  <div className="col-md-4 col-lg-4 ftco animate fadeInUp ftco-animated">
    <div className="staff">
      <div
        className="block-20"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className="text pt-4"
        style={{
            backgroundColor: '#ffffff',
            height: '150px',
            paddingLeft: '5px',
            paddingRight: '5px',
            boxShadow: '0 7px 12px rgb(0 0 0 / 10%)',
            fontFamily: 'sans-serif',
          }}
      >
        <h3 style={{ fontWeight: 'bold', marginLeft: '20px' }}>
          {title}
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
);

const IndexDedication: React.FC<Props> = ({ contents, language }) => (
  <section className="ftco-section abdimas-wrapper">
    <div className="container">
      <div className="row">
        {contents.map((item, index) => (
          <IndexDedicationItem key={item.id} {...item} delay={120 * (index + 1)} />
          ))}
      </div>
    </div>
  </section>
);

export default IndexDedication;