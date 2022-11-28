import React from 'react';
import ArticleModel from '@/models/article';
// import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  title: string;
  image: string;
  description: string;
  shortDescription: string;
  slug: string;
  language?: string | string[];
  subtitle: string | null;
  inset: string | null;
}
const ArticleList: React.FC<Props> = ({
  image,
  title,
  description,
  shortDescription,
  subtitle,
  inset,
}) => (
  <section className="ftc-no-pb">
    <div className="container">
      <div className="article-item">
        <h1 style={{ color: 'black' }}>
          <b>{title}</b>
        </h1>
      </div>
      <div className="article-item">
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="abstract">
            <h4 className="hijau">{shortDescription}</h4>
            <br />
            <div className="pl-md-8 ml-md-8 mb-8">
              <div
                className="article-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </ScrollAnimation>
        {/* <div className="col-md-5 p-md-8 img img-2">
          <img src={image} alt={title} className="article-thum" />
          <p>&nbsp;</p>
          <hr className="garis-hijau"></hr> 
        <h5 style={{ color: 'black'}}><b>{subtitle}</b></h5>
        <div className="pl-md-8 ml-md-8 mb-8"><p className="article-description">{inset}</p></div>
    </div> */}
      </div>
      {/* <hr className="garis-hijau"></hr> */}
    </div>
  </section>
);

export default ArticleList;
