/* eslint-disable react/no-danger */
import MainFocusModel, { MainFocusMaker } from '@/models/main-focus';
import Link from 'next/link';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import axios from '@/config/axios';
import dateFormat from '@/config/dateformat';

interface Props {
  content?: MainFocusModel | null;
  language?: string | string[];
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=main-focus'),
      axios.get('/slug/all?lang=en&menu=main-focus'),
    ]);

    const idParams = response[0].data.data.map((slug: string) => {
      return { params: { language: 'id', slug } };
    });

    const enParams = response[1].data.data.map((slug: string) => {
      return { params: { language: 'en', slug } };
    });

    return {
      paths: [...idParams, ...enParams],
      fallback: true,
    };
  } catch (_) {
    return {
      paths: [
        { params: { language: 'id', slug: '-' } },
        { params: { language: 'en', slug: '-' } },
      ],
      fallback: true,
    };
  }
}

export const getStaticProps = async (
  context: Record<string, any>
): Promise<any> => {
  const lang = await checkLanguage(context.params.language);
  if (lang.redirect) {
    return {
      redirect: {
        destination: `/${lang.value}`,
        permanent: false,
      },
    };
  }
  try {
    const response = await axios.get(`/main-focus/${context.params.slug}`);
    const research = MainFocusMaker.create(response.data.data) || null;

    return {
      props: {
        content: research,
        slug: context.params.slug,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        content: null,
        slug: context.params.slug,
      } as Props,
      revalidate: 30,
    };
  }
};
const SelectedFocusss: React.FC<Props> = ({ content, language }) => (
  <section className="ftco-section section-terkini-wrapper">
    <div className="container">
      <div className="section-terkini">
        <div className="section-terkini__dasarputih row">
          <div className="col-md-6">
            <span className="section-terkini__title" />
            <p className="section-terkini__date">
              <span>
                {dateFormat(content ? content.date : '', 'dd mmmm yyyy')}
              </span>
            </p>
            <p className="section-terkini__subtitle">
              <span>{content ? content.title : ''}</span>
            </p>
            <p className="section-terkini__isi">
              <span>{content ? content.shortDescription : ''}</span>
            </p>
            <p className="section-terkini__selanjutnya">
              <Link
                href="/[language]/fokus-utama/[slug]"
                as={`/${content?.language}/fokus-utama/${content?.slug}`}
              >
                <a
                  className="button-custom"
                  style={{
                    fontFamily: 'sans-serif',
                    color: 'white',
                  }}
                >
                  {getKeyValue(sentences.BacaSelanjutnya_content)(
                    selectLanguage(content ? content.language : '')
                  )}
                </a>
              </Link>
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={content ? content.image : ''}
              alt=""
              className="section-terkini__img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SelectedFocusss;
