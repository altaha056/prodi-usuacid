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
  <>
    <div className="section-index">
      <div className="col-md-6">
        <img src={image} alt={title} className="section-index__image" />
      </div>
      <div className="col-md-9">
        <p className="section-index__tgllist">
          {dateFormat(date, 'dd mmmm yyyy')}
        </p>
        <p className="section-index__title">
          <Link
            href="/[language]/riset-unggulan/[slug]"
            as={`/${language}/riset-unggulan/${slug}`}
          >
            <a>{title}</a>
          </Link>
        </p>
      </div>
    </div>
    <div className="col-md-12">
      <hr className="section-slug__garisabu" />
    </div>
  </>
);

export default ArticleList;