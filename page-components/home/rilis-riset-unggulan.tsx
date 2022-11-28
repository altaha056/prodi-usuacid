/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-danger */
import ResearchModel, { ResearchMaker } from '@/models/research';
import Link from 'next/link';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import axios from '@/config/axios';
import dateFormat from '@/config/dateformat';

interface Props {
  content?: ResearchModel | null;
  language?: string | string[];
}

export async function getStaticPaths(): Promise<any> {
  try {
    const response = await Promise.all([
      axios.get('/slug/all?lang=id&menu=research'),
      axios.get('/slug/all?lang=en&menu=research'),
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
    const response = await axios.get(`/research/${context.params.slug}`);
    const research = ResearchMaker.create(response.data.data) || null;

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

const SelectedFocuss: React.FC<Props> = ({ content, language }) => (
  <section className="ftco-section section-riset-wrapper">
    <div className="container">
      <div className="section-riset">
        <div className="section-riset__dasarputih row">
          <div className="col-md-6">
            <img
              src={content ? content.image : ''}
              alt=""
              className="section-riset__img"
            />
          </div>
          <div className="col-md-6">
            <span className="section-riset__title">
              <h1>
                <b>
                  {getKeyValue(sentences.risetUnggulan)(
                    selectLanguage(content ? content.language : '')
                  )}
                </b>
              </h1>
            </span>
            <p className="section-riset__date">
              <span>
                {dateFormat(content ? content.date : '', 'dd mmmm yyyy')}
              </span>
            </p>
            <p className="section-riset__subtitle">
              <span>{content ? content.title : ''}</span>
            </p>
            <p className="section-riset__isi">
              <span>{content ? content.shortDescription : ''}</span>
            </p>
            <p className="section-riset__selanjutnya">
              <Link
                href="/[language]/riset-unggulan/[slug]"
                as={`/${content?.language}/riset-unggulan/${content?.slug}`}
              >
                <a
                  className="button-custom"
                  style={{
                    fontFamily: 'sans-serif',
                    color: 'black',
                  }}
                >
                  {getKeyValue(sentences.BacaSelanjutnya_content)(
                    selectLanguage(content ? content.language : '')
                  )}
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SelectedFocuss;
