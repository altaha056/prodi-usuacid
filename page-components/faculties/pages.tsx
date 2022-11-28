/* eslint-disable camelcase */
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  total_pages: number;
  current_page: number;
  lang?: string | string[];
  additional_params?: Record<string, any>;
  string_params?: string;
}

const FacultiesPaging: React.FC<Props> = ({
  total_pages,
  current_page,
  lang,
  additional_params,
  string_params,
}) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={classNames('page-item page-item--arrow', {
          disabled: current_page === 1
        })}>
          <Link
            as={`/${lang}/fakultas-sekolah?page=${
              current_page - 1
            }&${string_params}`}
            href={{
              pathname: '/[language]/fakultas-sekolah',
              query: { page: current_page - 1, ...additional_params },
            }}
          >
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </Link>
        </li>
        {[...Array(total_pages)].map((_, index) => (
          <li
            className={classNames('page-item', {
              active: index + 1 === current_page,
              ['show-mobile']: current_page + 2 >= index + 1 && current_page - 2 <= index + 1
            })}
            // eslint-disable-next-line react/no-array-index-key
            key={index + 1}
          >
            <Link
              as={`/${lang}/fakultas-sekolah?page=${
                index + 1
              }&${string_params}`}
              href={{
                pathname: '/[language]/fakultas-sekolah',
                query: { page: index + 1, ...additional_params },
              }}
            >
              <a className="page-link">
                {index + 1}
                {index + 1 === current_page ? (
                  <span className="sr-only">(current)</span>
                ) : (
                  ''
                )}
              </a>
            </Link>
          </li>
        ))}
        <li className={classNames('page-item page-item--arrow', {
          disabled: current_page === total_pages
        })}>
          <Link
            as={`/${lang}/fakultas-sekolah?page=${
              current_page + 1
            }&${string_params}`}
            href={{
              pathname: '/[language]/fakultas-sekolah',
              query: { page: current_page + 1, ...additional_params },
            }}
          >
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FacultiesPaging;
