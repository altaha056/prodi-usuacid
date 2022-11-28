/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
import UsuInNumberBackroundModel from '@/models/usu-in -number-bg-model';
import UsuInNumberModel from '@/models/usu-in-number-model';
import React from 'react';
import { Parallax } from 'react-parallax';
import AnimatedNumber, { UsuInNumberMaker } from 'animated-number-react';
import ScrollAnimation from 'react-animate-on-scroll';
import { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { useRouter } from 'next/router';
// import { PieChart } from 'react-minimal-pie-chart';

interface UsuInNumberProps {
  contents?: UsuInNumberModel | null;
  bgImage?: UsuInNumberBackroundModel | null;
}

interface ItemProps {
  number?: number;
  title: string;
  percent: string;
}

const ItemCount: React.FC<ItemProps> = ({ number, title, percent }) => (
  <div className="item-count" key={title}>
    <div className="item-count__number">
      <b>
        {number ? (
          <AnimatedNumber
            value={number}
            className="number"
            delay={1000}
            duration={3000}
            formatValue={(value: number) =>
              value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
          />
        ) : (
          //
          0
        )}
      </b>
      {percent}
    </div>
    <span className="item-count__title">{title}</span>
  </div>
);
// type Data = {
//   color: string;
//   value: number;
//   key?: string | number;
//   title?: string | number;
//   [key: string]: any;
// }[];

const UsuInNumber: React.FC<UsuInNumberProps> = ({ contents, bgImage }) => {
  const router = useRouter();
  const { language } = router.query;
  return (
    <>
      <section className="ftco-section section-numberusu-wrapper">
        <div className="container">
          <div className="section-numberusu">
            <h1>
              {getKeyValue(sentences.UsuDalamAngka_content)(
                selectLanguage(language)
              )}
            </h1>
          </div>
          <hr className="article-item row section-numberusu__garisoren" />
        </div>
        <div className="container">
          <div className="section-numberusu__list">
            <div className="section-numberusu__container">
              <div className="section-numberusu__item">
                <div className="section-numberusu__mahasiswa">
                  <img
                    className="section-numberusu__img"
                    src="/images/mahasiswa.jpg"
                  />
                  <div className="section-numberusu__isi">
                    <ItemCount
                      number={contents?.allSudentAmount as number}
                      // number={39410}
                      percent=""
                      title={getKeyValue(sentences.mahasiswa)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="section-numberusu__item">
                <div className="section-numberusu__pasca">
                  <img
                    className="section-numberusu__img"
                    src="/images/pascasarjana.jpg"
                  />
                  <div className="section-numberusu__isi pengajar">
                    <ItemCount
                      number={
                        ((contents?.pascasarjanaAmount as number) /
                          (contents?.allSudentAmount as number)) *
                        100
                      }
                      // number={11}
                      percent="%"
                      title={getKeyValue(sentences.pascasarjana)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="section-numberusu__item">
                <div className="section-numberusu__diploma">
                  <img
                    className="section-numberusu__img"
                    src="/images/diploma.jpg"
                  />
                  <div className="section-numberusu__isi sarjana">
                    <ItemCount
                      number={
                        ((contents?.diplomaAmount as number) /
                          (contents?.allSudentAmount as number)) *
                        100
                      }
                      // number={7}
                      percent="%"
                      title={getKeyValue(sentences.diploma)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="section-numberusu__container">
              <div className="section-numberusu__item">
                <div className="section-numberusu__sarjana">
                  <img
                    className="section-numberusu__img"
                    src="/images/sarjana.jpg"
                  />
                  <div className="section-numberusu__isi sarjana">
                    <ItemCount
                      number={
                        ((contents?.sarjanaAmount as number) /
                          (contents?.allSudentAmount as number)) *
                        100
                      }
                      // number={76}
                      percent="%"
                      title={getKeyValue(sentences.sarjana)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="section-numberusu__item">
                <div className="section-numberusu__profesi">
                  <img
                    className="section-numberusu__img"
                    src="/images/profesi.jpg"
                  />
                  <div className="section-numberusu__isi guru">
                    <ItemCount
                      number={
                        (((contents?.profesiAmount as number) +
                          (contents?.spesialisAmount as number)) /
                          (contents?.allSudentAmount as number)) *
                        100
                      }
                      // number={6}
                      percent="%"
                      title={getKeyValue(sentences.profesi)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="section-numberusu__item">
                <div className="section-numberusu__fakultas">
                  <img
                    className="section-numberusu__img"
                    src="/images/fakultas.jpg"
                  />
                  <div className="section-numberusu__isi">
                    <ItemCount
                      number={contents?.facultyAmount as number}
                      // number={16}
                      percent=""
                      title={getKeyValue(sentences.fakultas)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="section-numberusu__container">
              <div className="section-numberusu__item">
                <div className="section-numberusu__pengajar">
                  <img
                    className="section-numberusu__img"
                    src="/images/pengajar.jpg"
                  />
                  <div className="section-numberusu__isi pengajar">
                    <ItemCount
                      number={contents?.stafPengajarAmount as number}
                      // number={131}
                      percent=""
                      title={getKeyValue(sentences.staf_pengajar)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="section-numberusu__item">
                <div className="section-numberusu__lektor">
                  <img
                    className="section-numberusu__img"
                    src="/images/lektor.jpg"
                  />
                  <div className="section-numberusu__isi sarjana">
                    <ItemCount
                      number={contents?.lektorAmount as number}
                      // number={546}
                      percent=""
                      title={getKeyValue(sentences.lektor)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="section-numberusu__item">
                <div className="section-numberusu__haki">
                  <img
                    className="section-numberusu__img"
                    src="/images/haki.jpg"
                  />
                  <div className="section-numberusu__isi pengajar">
                    <ItemCount
                      number={contents?.hkiAmount as number}
                      // number={673}
                      percent=""
                      title={getKeyValue(sentences.hki)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="section-numberusu__container">
              <div className="section-numberusu__item">
                <div className="section-numberusu__guru">
                  <img
                    className="section-numberusu__img"
                    src="/images/gurubesar.jpg"
                  />
                  <div className="section-numberusu__isi guru">
                    <ItemCount
                      number={contents?.guruBesarAmount as number}
                      // number={166}
                      percent=""
                      title={getKeyValue(sentences.guru_besar)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="section-numberusu__item">
                <div className="section-numberusu__lektorkepala">
                  <img
                    className="section-numberusu__img"
                    src="/images/lektorkepala.jpg"
                  />
                  <div className="section-numberusu__isi">
                    <ItemCount
                      number={contents?.lektorKepalaAmount as number}
                      // number={657}
                      percent=""
                      title={getKeyValue(sentences.lektor_kepala)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="section-numberusu__item">
                <div className="section-numberusu__aa">
                  <img
                    className="section-numberusu__img"
                    src="/images/AA.jpg"
                  />
                  <div className="section-numberusu__isi sarjana">
                    <ItemCount
                      number={contents?.asistenAhliAmount as number}
                      // number={215}
                      percent=""
                      title={getKeyValue(sentences.asisten_ahli)(
                        selectLanguage(language)
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UsuInNumber;
function style() {
  throw new Error('Function not implemented.');
}
