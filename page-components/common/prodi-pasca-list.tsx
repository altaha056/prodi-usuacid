/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  image: string;
  language?: string | string[];
  slug: string;
}
const FakultasList: React.FC<Props> = ({ image, title, language, slug }) => (
  
//  <figure className="gallery-item col-md-3 col-sm-6 col-xs-6">
//     <div className="gallery-img">
//       <a href="">
//         <img className="article-thum" src={image} />
//       </a>
//     </div>
//     <figcaption className="gallery-caption">
//       <Link
//         href="/[language]/program-sarjana/[slug]"
//         as={`/${language}/program-sarjana/${slug}`}
//       >
//         <a><span style={{color: 'white'}}>{title}</span></a>
//       </Link>
//     </figcaption>
//   </figure>
<div className="article-item row">
    <div className="col-md-3">
      
    </div>
    <div className="col-6">
      <Link
        href="/[language]/program-pascasarjana/[slug]"
        as={`/${language}/program-pascasarjana/${slug}`}
      >
        <a>
          <h6>{title}</h6>
        </a>
      </Link>
    </div>
  </div>
);

export default FakultasList;