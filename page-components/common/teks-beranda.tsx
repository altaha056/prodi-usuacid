import React from 'react';
// import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  language?: string | string[];
  ga: string;
  textresearch: string;
  textlecture: string;
  textdedication: string;
  textagenda: string;
}
const ArticleList: React.FC<Props> = ({
  ga,
  textagenda,
  textdedication,
  textlecture,
  textresearch,
}) => (
  <section className="ftc-no-pb">
    <div className="container">
      <div className="article-item row">
        <div className="col-md-0">
          <h1 style={{ color: 'black' }}>
            <b>{ga}</b>
          </h1>
        </div>
      </div>
      <div className="article-item row">
        <div className="col-md-0">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <div className="abstract">
              <h4 className="hijau">{textresearch}</h4>
              <br />
              <div className="pl-md-8 ml-md-8 mb-8">{textlecture}</div>
              <div className="pl-md-8 ml-md-8 mb-8">{textdedication}</div>
              <div className="pl-md-8 ml-md-8 mb-8">{textagenda}</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </section>
);

export default ArticleList;
