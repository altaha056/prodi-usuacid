/* eslint-disable react/no-danger */
import FigureModel, { FigureType } from '@/models/figure';
import React, { useState } from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import axios from '@/config/axios';
import { useRouter } from 'next/router';

interface Props {
  contents: FigureModel[];
  language: string;
}

interface FigureItemProps extends FigureModel {
  type: FigureType;
  selected: FigureType;
}

export async function getStaticPaths(): Promise<any> {
  return {
    paths: [{ params: { language: 'id' } }, { params: { language: 'en' } }],
    fallback: true,
  };
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
    const response = await axios.get(
      `/contents?lang=${context.params.language}&selected=true&menu=figure`
    );

    return {
      props: {
        contents: response.data.data,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: ({
        contents: [],
      } as unknown) as Props,
      revalidate: 30,
    };
  }
};

const FigureItem: React.FC<FigureItemProps> = ({
  type,
  selected,
  name,
  shortDescription,
  slug,
  language,
}) => (
  <div className={`figure-content ${type !== selected ? 'hidden' : ''}`}>
    <div className="section-option__figur__name"></div>
    <p className="section-option__figur__selanjutnya">
      <Link href="/[language]/tokoh/[slug]" as={`/${language}/tokoh/${slug}`}>
        <a className="button-custom-penelitian">
          {getKeyValue(sentences.BacaSelanjutnya_content)(
            selectLanguage(language)
          )}
          &nbsp;
          <span className="ion-ios-arrow-forward" />
        </a>
      </Link>
    </p>
  </div>
);

const FigureImage: React.FC<FigureItemProps> = ({ type, selected, image }) => (
  <div
    className={`col-md-12 p-md-5 img-2 order-md-last section-option__figur__img ${
      type !== selected ? 'hidden' : ''
    }`}
    style={{ backgroundImage: `url(${image})` }}
  />
);

const Figure: React.FC<Props> = ({ contents = [] }) => {
  const [selectedFigure, setSelectedFigure] = useState<FigureType>('DOSEN');

  const changeFigure = (type: FigureType) => {
    setSelectedFigure(type);
  };
  const router = useRouter();
  const { language } = router.query;

  const selectedLanguage = selectLanguage(language);
  return (
    <section>
      {/* <div className="row no-gutters" >
          <div className="section-option__category">
                <ul className="nav nav-pills">
                  <li className="nav-item" key="DOSEN">
                    <div
                      aria-hidden
                      className={`nav-link figure ${
                        selectedFigure === 'DOSEN' ? 'active' : ''
                      }`}
                      onClick={() => changeFigure('DOSEN')}
                    >
                      {getKeyValue(sentences.Dosen)(selectLanguage(language))}
                    </div>
                  </li>
                  <li className="nav-item" key="MAHASISWA">
                    <div
                      aria-hidden
                      className={`nav-link figure ${
                        selectedFigure === 'MAHASISWA' ? 'active' : ''
                      }`}
                      onClick={() => changeFigure('MAHASISWA')}
                    >
                      {getKeyValue(sentences.Mahasiswa)(
                        selectLanguage(language)
                      )}
                    </div>
                  </li>
                  <li className="nav-item" key="TOKOH">
                    <div
                      aria-hidden
                      className={`nav-link figure ${
                        selectedFigure === 'TOKOH' ? 'active' : ''
                      }`}
                      onClick={() => changeFigure('TOKOH')}
                    >
                      {getKeyValue(sentences.Tokoh)(selectLanguage(language))}
                    </div>
                  </li>
                </ul>
          </div>
        </div> */}
      <div className="col-md-12">
        {contents.map((content) => (
          <FigureImage
            key={content.id}
            {...content}
            type={content.category}
            selected={selectedFigure}
          />
        ))}
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="figure-content-wrapper">
            {contents.map((content) => (
              <FigureItem
                key={content.id}
                {...content}
                type={content.category}
                selected={selectedFigure}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Figure;
