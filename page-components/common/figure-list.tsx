/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';
import dateFormat from '@/config/dateformat';

interface Props {
  // name: string;
  image: string;
  date: string;
  shortDescription: string;
  slug: string;
  language?: string | string[];
}
const FigureList: React.FC<Props> = ({
  // name,
  image,
  date,
  slug,
  language,
}) => (
  <div className="article-item row">
    <div className="col-md-3">
      {/* <img src={image} alt={name} className="article-thum" /> */}
      <img src={image} className="article-thum" />
    </div>
    <div className="article-detail-item col-md-9">
      <Link href="/[language]/tokoh/[slug]" as={`/${language}/tokoh/${slug}`}>
        {/* <a>
          <h6 style={{ color: 'black' }}>{name}</h6>
        </a> */}
      </Link>
    </div>
  </div>
);

export default FigureList;
