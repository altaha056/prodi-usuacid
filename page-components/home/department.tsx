/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-shadow */
import DepartmentModel from '@/models/department';
import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'reactjs-popup/dist/index.css';
import Link from 'next/link';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import axios from '@/config/axios';

interface Props {
  contents: DepartmentModel[];
  language?: string | string[];
  delay?: number;
}

const settings = {
  className: 'center',
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slideToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slideToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const FakultasSekolah: React.FC<Props> = ({ delay, language }) => (
  <section className="ftco-section section-dedication ">
    <div className="container">
    <div className="container-wrap">
      <div className="row">
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={delay}>
      <div className="schome-study">
					<div className="row schome-study__slider slick-initialized slick-slider">
						<div aria-live="polite" className="slick-list draggable">
              <div className="slick-track" role="listbox" style={{opacity: '1', transform: '0px'}}>
                <div className="col-md-3 col-sm-6 slick-slide slick-current slick-active" tabIndex={-1} data-slick-index="0" aria-hidden="false" role="option" aria-describedby="slick-slide10">
                  <div className="schome-study__box post">
                  <div className="schome-study__text" style={{paddingBottom: '25px'}}>
                    <h3><b>Program Sarjana</b></h3>
                    </div>
                    <div className="schome-study__text">
                      Program Sarjana pada Universitas Sumatera Utara
                      bisa diikuti oleh lulusan sekolah menengah atas yang ingin melanjutkan 
                      pendidikan pada perguruan tinggi
                     </div>
                     <div className="schome-study__text">
                     <p>
                        <Link
                          href="/[language]/program-sarjana"
                          as={`/${language}/program-sarjana`}
                        >
                          <a className="btn-custom">
                            {getKeyValue(sentences.BacaSelanjutnya_content)(
                          selectLanguage(language)
                        )}
                            <span className="ion-ios-arrow" style={{backgroundColor:'#28a745'}} />
                          </a>
                        </Link>
                      </p>
                     </div>
                  </div>
						</div>
            <div className="col-md-3 col-sm-6 slick-slide slick-active" tabIndex={-1} data-slick-index="1" aria-hidden="false" role="option" aria-describedby="slick-slide11">
							<div className="schome-study__box post">
								<h3><b>Program Pascasarjana</b></h3>
								<div className="schome-study__text">
                  Universitas Sumatera Utara menawarkan program studi lanjutan
                  untuk tingkat S2 dan S3  pada Fakultas dan 
                  sekolah Pascasarjana
                                  </div>
                                  <div className="schome-study__text">
                                  <p>
                                  <Link
                                    href="/[language]/program-pascasarjana"
                                    as={`/${language}/program-pascasarjana`}
                                  >
                                    <a className="btn-custom">
                                      {getKeyValue(sentences.BacaSelanjutnya_content)(
                                    selectLanguage(language)
                                  )}
                                      <span className="ion-ios-arrow" style={{backgroundColor:'#28a745'}} />
                                    </a>
                                  </Link>
                                </p>
                                </div>
							</div>
						</div><div className="col-md-3 col-sm-6 slick-slide slick-active" tabIndex={-1} data-slick-index="2" aria-hidden="false"  role="option" aria-describedby="slick-slide12">
							<div className="schome-study__box post">
              <div className="schome-study__text" style={{paddingBottom: '25px'}}>
								<h3><b>Program Profesi</b></h3>
                </div>
								<div className="schome-study__text">
                Program profesi pada Universitas Sumatera Utara dapat
                diikuti oleh lulusan program studi tertentu sebagai syarat untuk 
                mendapatan gelar keprofesian
                                </div>
                                <div className="schome-study__text">
                                <p>
            <Link
              href="/[language]/program-profesi"
              as={`/${language}/program-profesi`}
            >
              <a className="btn-custom">
                {getKeyValue(sentences.BacaSelanjutnya_content)(
              selectLanguage(language)
            )}
                <span className="ion-ios-arrow" style={{backgroundColor:'#28a745'}} />
              </a>
            </Link>
          </p>
          </div>
							</div>
						</div><div className="col-md-3 col-sm-6 slick-slide slick-active" tabIndex={-1} data-slick-index="3" aria-hidden="false"  role="option" aria-describedby="slick-slide13">
							<div className="schome-study__box post">
              <div className="schome-study__text" style={{paddingBottom: '25px'}}>
								<h3><b>Program Diploma</b></h3>
                </div>
								<div className="schome-study__text">
                  Sekolah Vokasi menawarkan berbagai program studi
                  yang menunjang penguasaan keahlian terapan yang 
                  diperlukan pada bidang pekerjaan tertentu

                                  </div>
                                  <div className="schome-study__text">
                                  <p>
            <Link
              href="/[language]/program-diploma"
              as={`/${language}/program-diploma`}
            >
              <a className="btn-custom">
                {getKeyValue(sentences.BacaSelanjutnya_content)(
              selectLanguage(language)
            )}
                <span className="ion-ios-arrow" style={{backgroundColor:'#28a745'}} />
              </a>
            </Link>
          </p>
          </div>
							</div>
						</div></div></div>
					</div>
				</div>
        </ScrollAnimation>


        {/* <div
          className="project"
          style={{
            backgroundColor: '#d4d4d4',
            maxWidth: '25%',
            height: '150 px',
          }}
        >
          <h3 className="heading" style={{textTransform: 'capitalize'}}>
              <a><span style={{paddingLeft: '20px'}}><b>Program Sarjana</b></span></a>
          </h3>
          <br />
          <span style={{ color: 'white', textAlign: 'justify' }}>
            Tersedia berbagai pilihan program studi dan jenjang pendidikan yang
            dapat Anda pilih di Universitas Sumatera Utara. Cari berdasarkan
            pilihan program studi dan jenis gelar untuk menemukan program
            pendidikan yang terbaik untuk Anda.
          </span>
          <div style={{paddingTop: '100px', paddingLeft: '20px'}}>
          <p>
            <Link
              href="/[language]/program-sarjana"
              as={`/${language}/program-sarjana`}
            >
              <a className="btn-custom">
                {getKeyValue(sentences.BacaSelanjutnya_content)(
              selectLanguage(language)
            )}
                <span className="ion-ios-arrow" style={{backgroundColor:'#28a745'}} />
              </a>
            </Link>
          </p>
        </div>
        </div>
        <div
          className="project"
          style={{
            backgroundColor: '#d4d4d4',
            maxWidth: '25%',
            height: '150 px',
          }}
        >
          <h3 className="heading" style={{textTransform: 'capitalize'}}>
              <a><span style={{paddingLeft: '20px'}}><b>Program Magister</b></span></a>
          </h3>
          <br />
          <span style={{ color: 'white', textAlign: 'justify' }}>
            Tersedia berbagai pilihan program studi dan jenjang pendidikan yang
            dapat Anda pilih di Universitas Sumatera Utara. Cari berdasarkan
            pilihan program studi dan jenis gelar untuk menemukan program
            pendidikan yang terbaik untuk Anda.
          </span>
          <div style={{paddingTop: '100px', paddingLeft: '20px'}}>
          <p>
            <Link
              href="/[language]/program-pascasarjana"
              as={`/${language}/program-pascasarjana`}
            >
              <a className="btn-custom">
                {getKeyValue(sentences.BacaSelanjutnya_content)(
              selectLanguage(language)
            )}
                <span className="ion-ios-arrow" style={{backgroundColor:'#28a745'}} />
              </a>
            </Link>
          </p>
        </div>
        </div>
        <div
          className="project"
          style={{
            backgroundColor: '#d4d4d4',
            maxWidth: '25%',
            height: '150 px',
          }}
        >
          <h3 className="heading" style={{textTransform: 'capitalize'}}>
              <span style={{paddingLeft: '20px'}}><b>Program Profesi/ </b></span><br />
              <span style={{paddingLeft: '20px'}}><b>Spesialis</b></span>
          </h3>
          <br />
          <span style={{ color: 'white', textAlign: 'justify' }}>
            Tersedia berbagai pilihan program studi dan jenjang pendidikan yang
            dapat Anda pilih di Universitas Sumatera Utara. Cari berdasarkan
            pilihan program studi dan jenis gelar untuk menemukan program
            pendidikan yang terbaik untuk Anda.
          </span>
          <div style={{paddingTop: '40px', paddingLeft: '20px'}}>
          <p>
            <Link
              href="/[language]/program-profesi"
              as={`/${language}/program-profesi`}
            >
              <a className="btn-custom">
                {getKeyValue(sentences.BacaSelanjutnya_content)(
              selectLanguage(language)
            )}
                <span className="ion-ios-arrow" style={{backgroundColor:'#28a745'}} />
              </a>
            </Link>
          </p>
        </div>
        </div>
        <div
          className="project"
          style={{
            backgroundColor: '#d4d4d4',
            width: '25%',
            height: '150 px',
          }}
        >
          <h3 className="heading" style={{textTransform: 'capitalize'}}>
              <a><span style={{paddingLeft: '20px'}}><b>Program Diploma</b></span></a>
          </h3>
          <br />
          <span style={{ color: 'white', textAlign: 'justify' }}>
            Tersedia berbagai pilihan program studi dan jenjang pendidikan yang
            dapat Anda pilih di Universitas Sumatera Utara. Cari berdasarkan
            pilihan program studi dan jenis gelar untuk menemukan program
            pendidikan yang terbaik untuk Anda.
          </span>
          <div style={{paddingTop: '100px', paddingLeft: '20px'}}>
          <p>
            <Link
              href="/[language]/program-diploma"
              as={`/${language}/program-diploma`}
            >
              <a className="btn-custom">
                {getKeyValue(sentences.BacaSelanjutnya_content)(
              selectLanguage(language)
            )}
                <span className="ion-ios-arrow" style={{backgroundColor:'#28a745'}} />
              </a>
            </Link>
          </p>
        </div>
        </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default FakultasSekolah;