/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  headlineImage: string;
  language?: string | string[];
  slug: string;
}

const FakultasList: React.FC<Props> = ({
  headlineImage,
  title,
  language,
  slug,
}) => {
  console.log('image', headlineImage);
  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <figure className="gallery-item">
        <div className="gallery-img">
          <img className="article-thum" src={headlineImage} />
        </div>
        <div className="schome-study__boxs post">
          <Link
            href="/[language]/fakultas/[slug]"
            as={`/${language}/fakultas/${slug}`}
          >
            {title}
          </Link>
        </div>
      </figure>
    </div>
  );
};

export default FakultasList;
