import React from 'react';
import Link from 'next/link';
import dateFormat from '@/config/dateformat';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  title: string;
  author: string;
  image: string;
  date: string | null;
  shortDescription: string | null;
  slug: string;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  title,
  image,
  slug,
  language,
  date,
  shortDescription,
}) => (
  <section className="ftc-no-pb">
    <div className="container">
      <div className="article-item row">
        <div className="pl-md-0 ml-md-0 col-md-3">
          <img src={image} alt={title} className="article-thum" />
        </div>
        <div className="col-md-9">
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <Link
              href="/[language]/pengumuman/[slug]"
              as={`/${language}/pengumuman/${slug}`}
            >
              <a>
                <h6 style={{ color: 'black' }}>{title}</h6>
              </a>
            </Link>

            <p className="post-date-author">
              {dateFormat(date, 'mmm. dd, yyyy')}
            </p>
            <p className="article-description">{shortDescription}</p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </section>
);

export default ArticleList;
