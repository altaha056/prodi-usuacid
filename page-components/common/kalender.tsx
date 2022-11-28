import React from 'react';
import ArticleModel from '@/models/article';
// import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  title: string;
  description: string;
  slug: string;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  title,
  description,

}) => (
  <section className="ftco-section ftc-no-pb">
    <div className='row no-gutters'>
      <div className='col-md-3'></div>
      <div className='col-md-6'>
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <div
                className="article-description"
                dangerouslySetInnerHTML={{ __html: description || '' }}
              />
            </ScrollAnimation>
      </div>
      <div className='col-md-3'></div>    
    </div>
  </section>
);

export default ArticleList;
