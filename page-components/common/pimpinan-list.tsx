import React from 'react';
import Link from 'next/link';

interface Props {
  name: string | null;
  title: string;
  image: string;
  language?: string | string[];
  slug: string;
}
const ArticleList: React.FC<Props> = ({
  image,
  name,
  title,
  slug,
  language,
}) => (
  <section className="ftc-no-pb">
    <tr>
      <td>
        &nbsp;
        <img className='section-body-pimpinan__img'
          src={image}
        />
      </td>
    </tr>
    <tr>
      <td>
        <p className='section-body-pimpinan__name'>
          {name}
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <Link
          href="/[language]/pimpinan_universitas/[slug]"
          as={`/${language}/pimpinan_universitas/${slug}`}
        >
          <p className='section-body-pimpinan__title'>{title}</p>
          
        </Link>
      </td>
    </tr>
  </section>
);

export default ArticleList;
