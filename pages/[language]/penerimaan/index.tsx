/* eslint-disable react/jsx-no-target-blank */
import checkLanguage, { selectLanguage } from 'helpers/check-language';
import sentences, { getKeyValue } from 'helpers/mapping-sentences';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import AdmissionModel, { AdmissionMaker } from '@/models/admission';
import { ArticleLoader } from '@/page-components/common/loader2';
import useInfiniteScroll from 'helpers/infinite-scroll';
import axios from '@/config/axios';
import ReactGA from 'react-ga';
import { ChevronDown } from 'react-feather';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  photos: AdmissionModel | null;
  language?: string;
}

interface ITempVisiMisi {
  title: string;
  desc: string;
}

interface ItemBiayaStudi {
  title: string;
  desc: string;
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
      `/photos?lang=${context.params.language}&selected=true&menu=admission&`
    );

    return {
      props: {
        photos: response.data.data,
      } as Props,
      revalidate: 30,
    };
  } catch (e) {
    return {
      props: {
        photos: [],
      } as unknown as Props,
      revalidate: 30,
    };
  }
};

const ArticlePage: NextPage<Props> = ({ photos }) => {
  ReactGA.initialize('UA-152557781-1');
  if (typeof window !== 'undefined') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  const router = useRouter();
  const { language } = router.query;
  const url = `/admission?lang=${language}&selected=true0&`;
  const [page, setPage] = useState(1);
  const [totalresearch, setTotalresearch] = useState(0);
  const [visiMisi, setVisiMisi] = useState<ITempVisiMisi[]>([
    {
      title: 'Program Mahasiswa SNMPTN',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            SNMPTN adalah seleksi mahasiswa baru berdasarkan hasil penelusuran
            prestasi akademik calon mahasiswa. SNMPTN bertujuan untuk menyeleksi
            mahasiswa baru berkualitas secara akademik dengan prinsip ekuitas
            namun tetap memperhatikan kondisi ekonomi dan asal daerah siswa.
            Sejak tahun 2013, USU menyediakan sekurang-kurangnya 30% dari total
            daya tampung program sarjana melalui jalur SNMPTN. Mahasiswa dengan
            orangtua secara ekonomi kurang mampu diberikan beasiswa KIP Kuliah
            dari Pemerintah dan/atau beasiswa lainnya yang disediakan oleh USU
            seperti beasiswa BBM, PPA, dan lainnya.
            <br />
            SNMPTN merupakan pola seleksi nasional berdasarkan hasil penelusuran
            prestasi akademik dengan menggunakan rapor semester 1 sampai dengan
            5 bagi SMA/SMK/MA atau yang sederajat dengan masa belajar 3 tahun;
            atau semester 1 sampai dengan 7 bagi SMK dengan masa belajar 4
            tahun; serta dengan mempertimbangkan portofolio akademik calon
            mahasiswa. Siswa yang berhak mengikuti seleksi jalur SNMPTN adalah
            siswa yang memiliki Nomor Induk Siswa Nasional (NISN) dan memiliki
            prestasi unggul dan rekam jejak prestasi akademik pada PDSS. Sekolah
            yang siswanya berhak mengikuti SNMPTN adalah SMA/SMK/MA atau
            sederajat yang memiliki NPSN dan telah mengisi PDSS dengan lengkap
            dan benar.
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'Program Mahasiswa SBMPTN',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            SBMPTN adalah seleksi mahasiswa baru di tingkat nasional dengan
            menggunakan ujian tulis atau hasil kombinasi antara ujian tulis dan
            ujian keterampilan. Instrumen yang digunakan untuk seleksi calon
            mahasiswa jalur SBMPTN adalah ujian tertulis berbasis computer-based
            testing (CBT) atau disebut Ujian Tulis Berbasis Komputer (UTBK).
            Ujian tertulis menggunakan soal-soal ujian yang dirancang mengikuti
            kaidah-kaidah akademik pengembangan tes. Ujian tertulis SBMPTN
            dirancang untuk mengukur kemampuan dasar yang dapat memprediksi
            keberhasilan calon mahasiswa di semua Program Studi, yakni kemampuan
            penalaran tingkat tinggi (higher order thinking), yang meliputi
            potensi akademik, penguasaan bidang studi dasar, bidang sains dan
            teknologi (Saintek), dan/atau bidang sosial dan humaniora (Soshum).
            Selain mengikuti ujian tertulis, peserta yang memilih Program Studi
            ilmu seni dan/atau keolahragaan diwajibkan mengikuti ujian
            keterampilan.
            <br />
            SBMPTN memiliki tujuan: (1) Menyeleksi calon mahasiswa yang
            diprediksi mampu menyelesaikan studi di perguruan tinggi dengan
            baik, dan (2) Memberi kesempatan bagi calon mahasiswa untuk memilih
            lebih dari satu PTN lintas wilayah.
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'Program Mahasiswa Mandiri',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            Seleksi Mahasiswa Mandiri (SMM) adalah seleksi mahasiswa baru yang
            dilakukan secara mandiri oleh USU. Seleksi ini menggunakan ujian
            tulis berbasis komputer sebagai alat ukur yang valid dan reliabel
            dalam menyeleksi dan menentukan kemampuan akademik calon mahasiswa.
            USU memiliki otonomi yang lebih besar dalam menentukan kriteria
            lulus seleksi calon mahasiswa di mana kriteria lulus seleksi
            disesuaikan dengan karakteristik Program Studi. Seleksi Mahasiswa
            Mandiri (SMM) ditujukan untuk memenuhi daya tampung Program Studi
            yang belum terpenuhi pada jalur SNMPTN dan SBMPTN, khususnya
            beberapa Program Studi yang peminatnya kurang. Informasi dan pedoman
            tertulis mengenai SMM dapat diakses pada laman
            <a href="www.penerimaan.usu.ac.id." color="black">
              &nbsp;www.penerimaan.usu.ac.id.
            </a>
            <br />
            Peserta harus memenuhi persyaratan sebagai berikut:
            <br />
            <table style={{ marginLeft: '10px' }}>
              <tr>
                1. Tamatan SMTA (SMA, MA, SMK, SMTA luar negeri, ujian
                persamaan, dsb.) tahun berjalan dan atau paling lama kelulusan 3
                (tiga) tahun terakhir
              </tr>
              <tr>
                2. Tamatan Paket C tahun berjalan atau 3 (tiga) tahun terakhir
                yang memiliki rapor tiga tahun (selama yang bersangkutan
                mengikuti program tersebut)
              </tr>
            </table>
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'Program Pascasarjana',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            Seleksi penerimaan program pascasarjana USU adalah seleksi bagi
            mahasiswa baru untuk program Pascasarjana baik Program Magister (S2)
            maupun Program Doktor (S3) yang dilakukan secara mandiri oleh
            Sekolah Pascasarjana USU. Seleksi dilakukan dalam dua tahapan yaitu
            ujian Tes Potensi Akademik (TPA) dan seleksi wawancara. Informasi
            tentang seleksi penerimaan mahasiswa baru Sekolah Pascasarjana
            terkait tata cara pendaftaran, syarat-syarat pendaftaran, jenis
            ujian, tempat ujian, waktu pelaksanaan ujian, dan besar biaya
            perkuliahan dapat diakses melalui{' '}
            <a href="https://penerimaansps.usu.ac.id/" color="black">
              https://penerimaansps.usu.ac.id/
            </a>
            . Proses pendaftaran dilakukan secara online sehingga calon
            mahasiswa dari berbagai lokasi dapat mengakses secara terbuka tanpa
            harus datang langsung ke Sekolah Pascasarjana USU.
            <br />
            Saat ini USU memiliki 62 program studi pascasarjana yang terdiri
            atas 40 program studi magister dan 22 program studi doktor, dengan 6
            program studi (2 program studi doktor dan 4 program studi magister)
            di bawah pengelolaan Sekolah Pascasarjana.
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'Program Diploma',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            Seleksi Penerimaan Mahasiswa Program Diploma (SPMPD) Universitas
            Sumatera Utara merupakan seleksi penerimaan mahasiswa baru jenjang
            Diploma (D3) yang diselenggarakan secara mandiri oleh Universitas
            Sumatera Utara dalam bentuk ujian tertulis berbasis komputer. USU
            memiliki 14 Program Studi yang termasuk program diploma (D-3) yang
            peminatnya cukup tinggi. Informasi SPMPD terkait tata cara
            pendaftaran, syarat-syarat pendaftaran, jenis ujian, tempat ujian,
            waktu pelaksanaan ujian, dan besar biaya perkuliahan dapat diakses
            melalui{' '}
            <a href="www.usu.ac.id" color="black">
              www.usu.ac.id.
            </a>{' '}
            Proses pendaftaran SPMPD dilakukan secara online sehingga calon
            mahasiswa dari berbagai lokasi dapat mengakses secara terbuka tanpa
            harus datang langsung ke USU.
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'PPDS',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            Program Pendidikan Dokter Spesialis merupakan jenjang lanjut dari
            Program Pendidikan Profesi Dokter. Program Pendidikan Dokter
            Spesialis Spesialis dilaksanakan oleh masing-masing bidang Program
            Studi Dokter Spesialis di Institusi Pendidikan Dokter Spesialis
            (Fakultas Kedokteran) yang telah terakreditasi.
            <br />
            Terbentuknya Tim Koordinasi Pelaksana Program Pendidikan Dokter
            Spesialis (TKP PPDS) Fakultas Kedokteran Universitas Sumatera Utara
            tentu tidak terlepas dari sejak kapan dimulainya perjalanan
            Pendidikan Dokter Spesialis tersebut. Sejak FK USU berhasil
            menamatkan mahasiswa program pendidikan dokter (dokter umum), maka
            para dokter umum lulusan FK USU tersebut langsung menjalani PPDS di
            almamaternya. Beberapa Program Pendidikan Dokter Spesialis (PPDS)
            yang ada pada tahun 1961 tersebut adalah PPDS Ilmu Kesehatan Anak di
            pimpin dan dididik oleh Prof. Jo Kian Tjai, PPDS Bedah oleh Prof.
            J.O. Picauly, PPDS Obstetri dan Ginekologi oleh Prof. Tan Oen Siang,
            PPDS Penyakit Dalam oleh Prof. Ahmad Sofian, PPDS Kedokteran Jiwa
            dan Penyakit Saraf oleh Prof. Mohammad Ilyas Datuk Raja Enda Mora
            (Ildrem) Siregar. Hal ini menunjukkan bahwa FK USU telah memiliki
            banyak pengalaman dalam hal mendidik peserta PPDS sejak dulu hingga
            saat ini.
            <br />
            Sejak terbentuk TKP PPDS maka proses pendidikan dokter spesialis di
            FK USU menjadi lebih terkoordinasi dan semakin mampu menghasilkan
            lulusan yang kompeten dalam bidangnya dan sesuai dengan kebutuhan
            masyarakat Pulau Sumatera khususnya dan Indonesia pada umumnya.
            <br />
            Tahap seleksi PPDS:
            <br />
            <table style={{ marginLeft: '10px' }}>
              <tr>
                1. Pendaftar secara online diwebsite
                <a href="https://penerimaanppds.usu.ac.id/" color="black">
                  https://penerimaanppds.usu.ac.id/
                </a>
              </tr>
              <tr>
                2. Pengiriman hard copy berkas calon peserta PPDS ke TKP PPDS FK
                USU
              </tr>
              <tr>3. Pengumuman seleksi berkas</tr>
              <tr>4. Pembayaran biaya pendaftaran</tr>
              <tr>5. Ujian Psikotes dari Fakultas Psikologi USU</tr>
              <tr>
                6. Ujian Tes Minnesota Multiphasic Personality Inventory (MMPI)
                dari Fakultas Kedokteran USU
              </tr>
              <tr>
                7. Ujian Computer Based Test (CBT) dilaksanakan oleh Fakultas
                Kedokteran USU
              </tr>
              <tr>
                8. Ujian tulisan, ujian lisan/ wawancara dilaksanakan di
                masing-masing Program Studi Spesialis terkait
              </tr>
            </table>
            Program Studi Spesialis:
            <br />
            <table style={{ marginLeft: '10px' }}>
              <tr>1. Ilmu Kesehatan Anak</tr>
              <tr>2. Ilmu Bedah</tr>
              <tr>3. Ilmu Penyakit Dalam</tr>
              <tr>4. Obstetri dan Ginekologi</tr>
              <tr>5. T.H.T.K.L</tr>
              <tr>6. Dermatologi dan Venereologi</tr>
              <tr>7. Neurologi</tr>
              <tr>8. Psikiatri</tr>
              <tr>9. Ilmu Kesehatan Mata</tr>
              <tr>10. Pulmonologi dan Kedokteran Respirasi</tr>
              <tr>11. Patologi Klinik</tr>
              <tr>12. Patologi Anatomik</tr>
              <tr>13. Anestesiologi dan Terapi Intensif</tr>
              <tr>14. Penyakit Jantung dan Pembuluh Darah</tr>
              <tr>15. Ilmu Kedokteran Forensik dan Medikolegal</tr>
              <tr>16. Ilmu Bedah Saraf</tr>
              <tr>17. Orthopaedi dan Traumatologi</tr>
              <tr>18. Radiologi</tr>
            </table>
          </p>
        </>
      ) as unknown as string,
    },
  ]);
  const [biayaStudi, setBiayaStudi] = useState<ItemBiayaStudi[]>([
    {
      title: 'Program Diploma',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    },
    {
      title: 'Program Sarjana',
      desc: (
        <>
          <p style={{ textAlign: 'center' }}>
            <img src="/images/UKT.png" alt="" />
            <br />
            <a
              href="https://drive.google.com/file/d/1yDhrfmkF_NVQJQJvbCqwget3zRbLfTIT/view?usp=sharing"
              target="_blank"
              style={{
                fontSize: ' 20px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Download
            </a>
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'Program Pascasarjana',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    },
    {
      title: 'Program Profesi/Spesialis',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    },
  ]);

  const [openedVisiMisi, setOpenedVisiMisi] = useState<string[]>([]);
  const [openedBiayaStudi, setOpenedBiayaStudi] = useState<string[]>([]);

  const toggleOpenVisiMisi = (title: string) => {
    const isOpen = openedVisiMisi.includes(title);

    let updated: string[] = [];
    if (isOpen) {
      updated = openedVisiMisi.filter((openedTitle) => openedTitle !== title);
    } else {
      updated = [...openedVisiMisi, title];
    }
    setOpenedVisiMisi(updated);
  };

  const toggleOpenBiayaStudi = (title: string) => {
    const isOpen = openedBiayaStudi.includes(title);

    let updated: string[] = [];
    if (isOpen) {
      updated = openedVisiMisi.filter((openedTitle) => openedTitle !== title);
    } else {
      updated = [...openedVisiMisi, title];
    }
    setOpenedBiayaStudi(updated);
  };

  return (
    <>
      <Head>
        <title>
          {getKeyValue(sentences.penerimaan)(selectLanguage(language))} |
          Universitas Sumatera Utara
        </title>
      </Head>

      <section className="section-page schome-pengabdian section-page--pt-0">
        <section
          className="admission"
          style={{ backgroundImage: `url(/images/penerimaan.jpg)` }}
        >
          <div className="container">
            <div className="desc-add col-md-7">
              <div className="section-subtittle__subtitle">
                Penerimaan Mahasiswa
              </div>
              <div className="section-subtittle__detail">
                Pusat informasi Penerimaan Mahasiswa Baru (PMB) Universitas
                Sumatera Utara
              </div>
            </div>
          </div>
        </section>

        <section className="section-addmission">
          <div className="section-addmission_wrapper">
            <div className="row">
              <div className="col-md-12 justify-content-center text-center">
                <div className="section-addmission__detail">
                  Tersedia berbagai pilihan program studi dan jenjang pendidikan
                  yang dapat Anda pilih di Universitas Sumatera Utara. Cari
                  berdasarkan pilihan program studi dan jenis gelar untuk
                  menemukan program pendidikan yang terbaik untuk Anda.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="admission-img">
          <div className="container">
            <div className="page-desc">
              <div className="page-img" style={{ paddingTop: '10px' }}>
                <img src="/images/ADD1.jpg" alt="" height="100%" width="100%" />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="admission-number">
          <div className="admission-number__wrapper">
            <div className="row">
              <div className=" col-md-4">
                <div className="admission-number__campuslife">88</div>
                <div className="admission-number__campusdetail">
                  Unit Kegiatan Mahasiswa USU yang telah terdaftar.
                </div>
              </div>
              <div className=" col-md-4">
                <div className="admission-number__campuslife">
                  100
                  <sup>+</sup>
                </div>
                <div className="admission-number__campusdetail">
                  Program Pemberdayaan Masyarakat yang diselenggarakan oleh UKM
                  dan Himpunan Mahasiswa.
                </div>
              </div>
              <div className=" col-md-4">
                <div className="admission-number__campuslife">
                  5K
                  <sup>+</sup>
                </div>
                <div className="admission-number__campusdetail">
                  Mahasiswa yang tinggal di Asrama Mahasiswa.
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="jalur-penerimaan">
          <div className="container">
            <div className="jalur-penerimaan__desc" />
            <div className="jalur-penerimaan__title">
              Jalur Penerimaan <br />
              Mahasiswa Baru
            </div>
          </div>
        </section>
        <br />
        <br />

        <br />

        <section className="jalur-penerimaan">
          <div className="container">
            <div className="jalur-penerimaan__list">
              {visiMisi.map((item, index) => (
                <div
                  className={classNames('jalur-penerimaan__item', {
                    active: openedVisiMisi.includes(item.title),
                  })}
                  key={`jalur-penerimaan-${item.title}`}
                >
                  <div
                    className="visi-misi__item__title"
                    onClick={() => toggleOpenVisiMisi(item.title)}
                  >
                    {item.title} <ChevronDown />
                  </div>
                  <div className="visi-misi__item__desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="biaya-studi">
          <div className="container">
            <div className="biaya-studi__list">
              <div className="biaya-studi__title">Biaya Studi</div>
              {biayaStudi.map((item, index) => (
                <div
                  className={classNames('biaya-studi__item', {
                    active: openedBiayaStudi.includes(item.title),
                  })}
                  key={`biaya-studi-${item.title}`}
                >
                  <div
                    className="biaya-studi__item__title"
                    onClick={() => toggleOpenBiayaStudi(item.title)}
                  >
                    {item.title} <ChevronDown />
                  </div>
                  <div className="visi-misi__item__desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="scholarship">
          <div className="scholarship__wrapper">
            <div className="row">
              <div className=" col-md-3">
                <div className="scholarship__subtitle">Beasiswa</div>
              </div>
              <div className=" col-md-6">
                <div className="scholarship__text">
                  Universitas Sumatera Utara menyelenggarakan berbagai program
                  beasiswa untuk mendukung lancarnya kegiatan studi bagi
                  mahasiswa. Cek program Beasiswa yang tersedia disini
                </div>
              </div>
              <div className=" col-md-3">
                <div className="scholarship__title">
                  <a href="https://beasiswa.usu.ac.id/">
                    {getKeyValue(sentences.beasiswa)(selectLanguage(language))}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ArticlePage;
