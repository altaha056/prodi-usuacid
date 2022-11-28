import React from 'react';
import Link from 'next/link';
import dateFormat from '@/config/dateformat';

interface Props {
  title: string;
  image: string;
  date: string;
  shortDescription: string;
  slug: string;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  title,
  image,
  date,
  slug,
  language,
  shortDescription,
}) => (
  <section className="ftc-no-pb">
    <div className="container">
      <div className="article-item row">
        <div className="pl-md-0 ml-md-0 col-md-3">
          <img src={image} alt={title} className="article-thum" />
        </div>
        <div className=" col-md-9">
          <Link
            href="/[language]/fokus-utama/[slug]"
            as={`/${language}/fokus-utama/${slug}`}
          >
            <a>
            <h1 style={{ color: 'black', fontSize: '20px', fontWeight: 'bold'}}>{title}</h1>
            </a>
          </Link>
          <p className="post-date-author">
            {dateFormat(date, 'mmmm. dd, yyyy')}
          </p>
          <p className="article-description">{shortDescription}</p>
        </div>
      </div>
    </div>
  </section>
);

export default ArticleList;
