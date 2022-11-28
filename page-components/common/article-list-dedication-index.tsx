import React from 'react';
import Link from 'next/link';
import dateFormat from '@/config/dateformat';

interface Props {
  title: string;
  image: string;
  shortDescription: string;
  slug: string;
  language?: string | string[];
  date: string;
}
const ArticleListDedication: React.FC<Props> = ({
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
        <div className=" col-md-9">
          <Link
            href="/[language]/pengabdian-masyarakat/[slug]"
            as={`/${language}/pengabdian-masyarakat/${slug}`}
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

export default ArticleListDedication;
