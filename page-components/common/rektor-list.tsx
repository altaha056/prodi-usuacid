/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  name: string | null;
  image: string;
  language?: string | string[];
  slug: string;
}

const ArticleListRektor: React.FC<Props> = ({
  image,
  title,
  name,
  slug,
  language,
}) => (
  <td colSpan={3}>
    <h3 style={{ textAlign: 'center' }}>
      <strong>
        <a href="">
          <img
            src={image}
            alt={title}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            width="200"
          />
        </a>
        <span style={{ color: '#000000' }}>{title}</span>
      </strong>
    </h3>
    <h4 style={{ textAlign: 'center' }}>
      <strong>
        <Link
          href="/[language]/pimpinan_universitas/[slug]"
          as={`/${language}/pimpinan_universitas/${slug}`}
        >
          {name}
        </Link>
      </strong>
    </h4>
  </td>
);

export default ArticleListRektor;
