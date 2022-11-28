import React from 'react';
import Link from 'next/link';
import dateFormat from '@/config/dateformat';

interface Props {
  title: string;
  author: string;
  image: string;
  date: string | null;
  slug: string;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  title,
  image,
  slug,
  language,
  date,
}) => (
  <div className="article-item row">
    <div className="col-md-3">
      <img src={image} alt={title} className="article-thum" />
    </div>
    <div className="article-detail-item col-md-9">
      <Link
        href="/[language]/pengumuman/[slug]"
        as={`/${language}/pengumuman/${slug}`}
      >
        <a>
          <h6 style={{ color: 'black' }}>{title}</h6>
        </a>
      </Link>
      <p className="post-date-author">{dateFormat(date, 'mmm. dd, yyyy')}</p>
    </div>
  </div>
);

export default ArticleList;
