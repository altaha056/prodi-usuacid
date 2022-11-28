import React from 'react';
import Link from 'next/link';

interface Props {
  name: string;
  image: string;
  shortDescription: string;
  slug: string;
  language?: string | string[];
}
const ArticleList: React.FC<Props> = ({
  name,
  image,
  shortDescription,
  slug,
  language,
}) => (
  <div className="article-item row">
    <div className="col-md-3">
      <img src={image} alt={name} className="article-thum" />
    </div>
    <div className="article-detail-item col-md-9">
      <Link href="/[language]/tokoh/[slug]" as={`/${language}/tokoh/${slug}`}>
        <a>
          <h6>{name}</h6>
        </a>
      </Link>
      <p>{shortDescription}</p>
    </div>
  </div>
);

export default ArticleList;
