import React from 'react';
import Link from 'next/link';
import dateFormat from '@/config/dateformat';

interface Props {
  title: string;
  author: string;
  date: string;
  slug: string;
  image: string;
  language?: string | string[];
  category: string | null;
}
const ArticleListnext: React.FC<Props> = ({
  title,
  image,
  date,
  slug,
  language,
  category,
}) => (
  <div className="row no-gutters">
    <div className="pl-md-4 ml-md-4">
      <br />
      <h5 style={{ color: 'lightgrey' }}>{category}</h5>
      <Link
        href="/[language]/fokus-utama/[slug]"
        as={`/${language}/fokus-utama/${slug}`}
      >
        <a>
          <h2 style={{ color: 'black' }}>{title}</h2>
        </a>
      </Link>
      <div className="image">
        <img src={image} alt={title} className="article-thum" />
      </div>
    </div>
  </div>
);

export default ArticleListnext;
