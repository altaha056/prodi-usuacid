import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { useRouter } from 'next/router';
import { selectLanguage } from 'helpers/check-language';
import Link from 'next/link';

interface Props {
  title: string;
  image: string;
  slug: string;
  language?: string | string[];

}
const ArticleList: React.FC<Props> = ({ image, title, language, slug }) => (
  <div className="col-md-4 col-sm-6 col-xs-6">
    <figure className="gallery-item">
      <div className="gallery-img">
        <img className="article-thum" src={image} />
      </div>
      <div className="schome-study__box post">
        <Link
          href="/[language]/kehidupan-kampus/[slug]"
          as={`/${language}/kehidupan-kampus/${slug}`}
        >
         {title}
        </Link>
      </div>
    </figure>
  </div>
  
);

export default ArticleList;