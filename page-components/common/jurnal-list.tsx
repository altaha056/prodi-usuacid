import React from 'react';
import Link from 'next/link';
import dateFormat from '@/config/dateformat';

interface Props {
  title: string;
  author: string;
  date: string | null;
  slug: string;
  image: string;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  title,
  image,
  date,
  slug,
  language,
}) => (
  <div className="article-item row">
    <div className="article-detail-item col-md-6">
      <img src={image} alt={title} className="article-thum" />
    </div>
    <div className="article-detail-item col-md-6">
      <Link
        href="/[language]/jurnal/[slug]"
        as={`/${language}/jurnal/${slug}`}
      >
        <a>
          <h6 style={{ color: 'black' }}>{title}</h6>
        </a>
      </Link>
      <p className="post-date-author">{dateFormat(date, 'mmmm. dd, yyyy')}</p>
    </div>
  </div>
);

export default ArticleList;
