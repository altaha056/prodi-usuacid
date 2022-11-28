/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
import { useRouter } from 'next/router';
import Head from 'next/head';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import React, { useEffect, useState } from 'react';
import axios from '@/config/axios';
import moment, { Moment } from 'moment';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NewsDetailPage from './pengumuman/[slug]';
import Link from 'next/link';

interface Props {
  photo: string;
}

const CATEGORY_ID =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_NEWS_CAT_ID
    : '634d41fa9fdc671c574d345b';
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
      `/photo?lang=${context.params.language}&selected=true&menu=front-text&`
    );

    return {
      props: {
        photo: response.data.data,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        photo: [],
      } as unknown as Props,
      revalidate: 30,
    };
  }
};
moment.locale('id');
const KampusSehat: React.FC = ({}) => {
  const router = useRouter();
  const { language } = router.query;
  const [article, setArticle] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const [deskripsi, setDeskripsi] = useState();
  const [arsipPeraturan, setArsipPeraturan] = useState([]);
  const [arsipLaporan, setArsipLaporan] = useState([]);
  const [arsipLainnya, setArsipLainnya] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const today = new Date();
  const [activeMonth, setActiveMonth] = useState(today.getMonth());
  const [date, setDate] = useState<Moment>(moment(today));
  const [selectedMonth, setSelectedMonth] = useState(moment(today));
  const [daysInMonth, setDaysInMonth] = useState(moment(today).daysInMonth());
  const [firstDayInMonth, setFirstDayInMonth] = useState(moment(today).day());

  const getIdDate = (_date: Moment) => {
    return moment(_date).format('dddd, DD MMMM YYYY');
  };
  const getMonthYear = (_date: Moment) => {
    return moment(_date).format('MMMM YYYY');
  };

  const updateMonth = (newMonth: Record<string, any>) => {
    setSelectedMonth(newMonth);
    setDaysInMonth(newMonth.daysInMonth());
    setFirstDayInMonth(newMonth.day());
  };

  const toNextMonth = () => {
    const newMonth = selectedMonth.add(1, 'months');
    updateMonth(newMonth);
  };
  const toPreviousMonth = () => {
    const newMonth = moment(selectedMonth).subtract(1, 'months');
    updateMonth(newMonth);
  };
  const selectDate = (_day: string) => {
    const newDate = moment(`${selectedMonth.format('YYYY-MM')}-${_day}`);
    console.log('new date :', newDate);
    setDate(newDate);
  };

  // useEffect(() => {
  //   setIsFetching(true);
  //   axios.get('/api/article')
  //     .then((res) => res.json())
  //     .then((obj) => {
  //       setArticle(
  //         obj.filter((news: Record<string, any>) => news.category_id === 2)
  //       );
  //       setIsFetching(false);
  //     });
  // }, []);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(
        `/healthy/agenda?day=${moment(date).format('DD')}&month=${moment(
          date
        ).format('MM')}&year=${moment(date).format('YYYY')}`
      )
      .then((obj) => {
        console.log('obj', obj);
        const filtered = obj.data.data.agendas.filter(
          (kegiatan: Record<string, any>) =>
            moment(kegiatan.date).format('L') === date.format('L')
        );
        console.log('agenda filtered', filtered);
        setAgenda(filtered);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [date]);

  useEffect(() => {
    setIsFetching(true);
    axios.get('/healthy/archive').then((obj) => {
      console.log('arsip', obj);

      obj.data.data.forEach((arc: any) => {
        if (arc.type === 'Peraturan') {
          setArsipPeraturan(arc.data);
        } else if (arc.type === 'Dokumen Laporan') {
          setArsipLaporan(arc.data);
        } else if (arc.type === 'Lainnya') {
          setArsipLainnya(arc.data);
        }
      });
      setIsFetching(false);
    });
  }, []);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`/healthy/news?lang=id`)

      .then((obj) => {
        setArticle(obj.data.data ?? []);
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    setIsFetching(true);
    axios.get(`/healthy/description`).then((obj) => {
      console.log('ds', obj.data);
      setDeskripsi(obj.data.data.description);
      setIsFetching(false);
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.beranda)(selectLanguage(language))} | Kampus
          Sehat Universitas Sumatera Utara
        </title>
        <meta
          name="google-site-verification"
          content="CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
        />
      </Head>
      <div className="kampus-sehat">
        <img
          src="/images/usu-from-drone.jpg"
          alt="USU from drone footage"
          className="img-hero"
        />
        <div className="second-hero">
          <h1>Kampus Sehat</h1>

          <h5>{deskripsi}</h5>
        </div>
        <div className="berita">
          <h2 className="title">Berita Kampus Sehat</h2>
          {article.map(
            (news: Record<string, any>, index) =>
              index === 0 && (
                <div className="headline-news">
                  <img src={news.image} alt={news.title} />
                  <h3>{news.title}</h3>
                  <h6>{news.short_description}</h6>
                </div>
              )
          )}
          <div className="news-list">
            {article.map(
              (news: Record<string, any>, index) =>
                index !== 0 && (
                  <div className="news-item">
                    <img src={news.image} alt={news.title} />
                    <div className="text">
                      <h4>{news.title}</h4>
                      <h6>{news.short_description}</h6>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="berita-carousel">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {article.map((news: Record<string, any>, index) => (
              <div className="texted-image">
                <img src={news.image} alt={news.title} />
                <div className="text">
                  <h6>{news.title}</h6>
                  <a href="#">Baca Selengkapnya</a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="agenda-kegiatan">
          <div className="agenda-container">
            <div className="kegiatan">
              <div className="section-title">
                <h1>Agenda Kegiatan</h1>
              </div>
              <div className="activity">
                <div className="card">
                  <div className="title card-item">
                    <p>{getIdDate(date)}</p>
                  </div>
                  {agenda.length > 0 ? (
                    agenda.map((kegiatan: Record<string, any>) => (
                      <>
                        <div className="item card-item">
                          <h6>
                            {kegiatan.full_day ? (
                              <>Full Day</>
                            ) : (
                              <>
                                {moment(kegiatan.start_time).format('LT')} -{' '}
                                {moment(kegiatan.end_time).format('LT')}
                              </>
                            )}
                          </h6>
                          <h4>{kegiatan.title}</h4>
                          <h6>{kegiatan.type}</h6>
                        </div>
                        {kegiatan.full_day && (
                          <div className="blank-space"></div>
                        )}
                      </>
                    ))
                  ) : (
                    <>
                      <h5 className="mx-auto py-4">Tidak Ada Jadwal</h5>
                    </>
                  )}
                </div>
              </div>
              <div className="calendar">
                <div className="card">
                  <div className="select-date card-item pb-3">
                    <h4>{getMonthYear(selectedMonth)}</h4>
                    <div className="navigation">
                      <div onClick={toPreviousMonth}>
                        <img
                          src="/images/icons/arrow-backward.png"
                          alt="back"
                          className="back-icon"
                        />
                      </div>
                      <div onClick={toNextMonth}>
                        <img
                          src="/images/icons/arrow-forward.png"
                          alt="next"
                          className="next-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="select-calendar">
                    <div className="date">
                      <h6>
                        <strong>Mo</strong>
                      </h6>
                    </div>
                    <div className="date">
                      <h6>
                        <strong>Tu</strong>
                      </h6>
                    </div>
                    <div className="date">
                      <h6>
                        <strong>We</strong>
                      </h6>
                    </div>
                    <div className="date">
                      <h6>
                        <strong>Th</strong>
                      </h6>
                    </div>
                    <div className="date">
                      <h6>
                        <strong>Fr</strong>
                      </h6>
                    </div>
                    <div className="date">
                      <h6>
                        <strong>Sa</strong>
                      </h6>
                    </div>
                    <div className="date">
                      <h6>
                        <strong>Su</strong>
                      </h6>
                    </div>
                    {Array.from(Array(firstDayInMonth + 1), () => (
                      <div className="date">
                        <h6>&nbsp;</h6>
                      </div>
                    ))}
                    {Array.from(Array(daysInMonth), (e, i) => (
                      <div
                        className={`date ${
                          date.format('D') === String(i + 1) &&
                          date.month() === selectedMonth.month()
                            ? 'active'
                            : 'n'
                        }`}
                        onClick={() => selectDate(String(i + 1))}
                      >
                        <h6>{i + 1}</h6>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className="btn-wrapper">
                  <button className="btn-green btn-lg">
                    <span>Agenda Selengkapnya</span>
                    <img
                      src="/images/icons/arrow-forward.png"
                      alt="agenda lengkap"
                    />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="arsip">
          <h2 className="title">Dokumen/Arsip</h2>
          <div className="dokumen">
            <div className="dokumen-list">
              <h4 className="dokumen-list__title">Peraturan</h4>
              <div className="dokumen-list__list">
                {arsipPeraturan.map((dokumen: Record<string, any>, index) => (
                  <div className="dokumen-list__item">
                    <h5>
                      <Link href={dokumen.file}>{dokumen.title}</Link>
                    </h5>
                  </div>
                ))}
              </div>
            </div>
            <div className="dokumen-list">
              <h4 className="dokumen-list__title">Dokumen Laporan</h4>
              <div className="dokumen-list__list">
                {arsipLaporan.map(
                  (dokumen: Record<string, any>, index) =>
                    index < 5 && (
                      <div className="dokumen-list__item">
                        <h5>
                          <Link href={dokumen.file}>{dokumen.title}</Link>
                        </h5>
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="dokumen-list">
              <h4 className="dokumen-list__title">Lainnya</h4>
              <div className="dokumen-list__list">
                {arsipLainnya.map(
                  (dokumen: Record<string, any>, index) =>
                    index < 5 && (
                      <div className="dokumen-list__item">
                        <h5>
                          <Link href={dokumen.file}>{dokumen.title}</Link>
                        </h5>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KampusSehat;
