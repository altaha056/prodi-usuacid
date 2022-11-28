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
      title: 'SNMPTN Program',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            SNMPTN is a selection of new students based on search results
            academic achievement of prospective students. SNMPTN aims to select
            academically qualified freshmen with equity principles but still pay
            attention to the economic conditions and the area of origin of the
            students. Since 2013, USU has provided at least 30% of the total
            capacity of undergraduate programs through the SNMPTN pathway.
            Student with economically disadvantaged parents are given KIP
            College scholarships from the Government and/or other scholarships
            provided by USU such as BBM scholarships, PPA, and others.
            <br />
            SNMPTN is a national selection pattern based on search results
            academic achievement by using report cards for semesters 1 to 5 for
            SMA/SMK/MA or the equivalent with a study period of 3 years; or
            semesters 1 to 7 for SMK with a study period of 4 year; as well as
            taking into account the candidates academic portfolio college
            student. Students who are eligible to take part in the selection of
            the SNMPTN pathway are: students who have a National Student
            Identification Number (NISN) and have superior achievement and track
            record of academic achievement on PDSS. School whose students are
            entitled to take part in SNMPTN are SMA/SMK/MA or equivalent who
            have NPSN and have filled out the PDSS completely and right.
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'SBMPTN Program',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            SBMPTN is a selection of new students at the national level with
            using written exams or the results of a combination of written exams
            and skills test. Instruments used for candidate selection SBMPTN
            students are computer-based written exams testing (CBT) or called
            the Computer-Based Written Examination (UTBK). The written exam uses
            exam questions that are designed to follow academic rules of test
            development. SBMPTN written exam designed to measure the basic
            ability to predict success of prospective students in all Study
            Programs, namely the ability higher order thinking, which includes:
            academic potential, mastery of basic fields of study, fields of
            science and technology (Science), and/or social and humanities
            (Soshum). In addition to taking the written exam, participants who
            choose the Study Program arts and/or sports are required to take the
            exam Skills.
            <br />
            The SBMPTN has the following objectives: (1) Selecting prospective
            students who predicted to be able to complete their studies at
            university with good, and (2) Provide opportunities for prospective
            students to choose more than one PTN across regions.
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'Independent Program',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            Independent Student Selection (SMM) is a selection of new students
            conducted independently by USU. This selection uses a computer-based
            written test as a valid and reliable measuring tool in selecting and
            determining the academic abilities of prospective students. USU has
            greater autonomy in determining the criteria for passing the
            selection of prospective students where the criteria for passing the
            selection are adjusted to the characteristics of the Study Program.
            The Independent Student Selection (SMM) is intended to meet the
            unmet capacity of Study Programs on the SNMPTN and SBMPTN pathways,
            especially some Study Programs with less demand. Information and
            written guidelines regarding QMS can be accessed on the
            <a href="www.penerimaan.usu.ac.id." color="black">
              &nbsp;www.penerimaan.usu.ac.id.
            </a>
            <br />
            Participants must meet the following requirements:
            <br />
            <table style={{ marginLeft: '10px' }}>
              <tr>
                1. High school graduation (SMA, MA, SMK, overseas high school,
                equivalency exam, etc.) in the current year and or at most the
                last 3 (three) years
              </tr>
              <tr>
                2. Graduated from Package C in the current year or the last 3
                (three) years who have a three-year report card (as long as the
                person concerned is participating in the program)
              </tr>
            </table>
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'Postgraduate Program',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            USU of postgraduate admission selection is a selection for new
            students for the Postgraduate program, both the Masters Program (S2)
            and Doctoral Program (S3) which are carried out independently by the
            USU Graduate School. The selection was carried out in two stages,
            namely the Academic Potential Test (TPA) and interview selection.
            Information about the selection of new postgraduate admissions
            related to registration procedures, registration requirements, types
            of exams, exam venues, exam time, and tuition fees can be accessed
            via{' '}
            <a href="https://penerimaansps.usu.ac.id/" color="black">
              https://penerimaansps.usu.ac.id/
            </a>
            . The registration process is carried out online so that prospective
            students from various locations can access openly without having to
            come directly to the USU Graduate School.
            <br />
            Currently USU has 62 postgraduate study programs consisting of 40
            master study programs and 22 doctoral study programs, with 6 study
            programs (2 doctoral study programs and 4 master study programs)
            under the management of the Graduate School.
          </p>
        </>
      ) as unknown as string,
    },
    // {
    //   title: 'Extension Program',
    //   desc:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    // },
    {
      title: 'Diploma Program',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            The University of North Sumatra Universitys Diploma Program Student
            Admission Selection (SPMPD) is a selection of new student admissions
            for Diploma (D3) which is held independently by the University of
            North Sumatra in the form of a computer-based written exam. USU has
            14 Study Programs including diploma (D-3) programs which have quite
            a high demand. Information on SPMPD regarding registration
            procedures, registration requirements, types of exams, exam venues,
            exam time, and tuition fees can be accessed through{' '}
            <a href="www.usu.ac.id" color="black">
              www.usu.ac.id.
            </a>{' '}
            The SPMPD registration process is carried out online so that
            prospective students from various locations can access it openly
            without having to come directly to USU.
          </p>
        </>
      ) as unknown as string,
    },
    {
      title: 'PPDS',
      desc: (
        <>
          <p style={{ textAlign: 'justify', fontFamily: 'Public Sans' }}>
            The Specialist Doctor Education Program is an advanced level of the
            Doctor Professional Education Program. The Specialist Doctor
            Education Program is carried out by each field of the Specialist
            Doctor Study Program at an accredited Specialist Medical Education
            Institution (Faculty of Medicine).
            <br />
            The Coordination Team for the Implementation of the Doctor's
            Education Program was formed Specialist (TKP PPDS) Faculty of
            Medicine, University of North Sumatra Of course, it can't be
            separated from when the journey begins Specialist Medical Education.
            Since USUs FK succeeded graduated from the medical education program
            (general practitioner), then the general practitioners who graduated
            from USUs FK immediately underwent PPDS at his alma mater. Several
            Specialist Medical Education Programs (PPDS) which existed in 1961
            was the PPDS in Pediatrics Health Sciences in Indonesia led and
            educated by Prof. Jo Kian Tjai, PPDS Surgery by Prof. J.O. Picauly,
            PPDS Obstetrics and Gynecology by Prof. Tan Oen Siang, PPDS in
            Internal Medicine by Prof. Ahmad Sofian, PPDS Mental Medicine and
            Neurological Diseases by Prof. Mohammad Ilyas Datuk Raja Enda Mora
            (Ildrem) Siregar. This shows that USUs FK has a lot of experience in
            educating PPDS participants from the past until at the moment.
            <br />
            Since the establishment of TKP PPDS, the education process for
            specialist doctors in USUs FK is becoming more coordinated and more
            capable of producing graduates who are competent in their fields and
            according to their needs the people of Sumatra Island in particular
            and Indonesia in general.
            <br />
            PPDS selection stage:
            <br />
            <table style={{ marginLeft: '10px' }}>
              <tr>
                1. Register online on the website
                <a href="https://penerimaanppds.usu.ac.id/" color="black">
                  https://penerimaanppds.usu.ac.id/
                </a>
              </tr>
              <tr>
                2. Sending a hard copy of the PPDS participant candidate file to
                the FK PPDS TKP USU
              </tr>
              <tr>3. File selection announcement</tr>
              <tr>4. Payment of registration fee</tr>
              <tr>5. Psychological Test from Faculty of Psychology</tr>
              <tr>
                6. Minnesota Multiphasic Personality Inventory (MMPI) Test Exam
                from the USU School of Medicine
              </tr>
              <tr>
                7. The Computer Based Test (CBT) exam is carried out by the
                Faculty USU Medicine
              </tr>
              <tr>
                8. Written exams, oral exams/interviews are held in each related
                Specialist Study Program
              </tr>
            </table>
            Specialist Study Program:
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
      title: 'Diploma Program',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    },
    {
      title: 'Degree program',
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
      title: 'Postgraduate Program',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
    },
    {
      title: 'Professional/Specialist Programs',
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
                Admission of new students
              </div>
              <div className="section-subtittle__detail">
                Information Center for New Student Admissions (PMB) Universitas
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
                  There are various choices of study programs and education
                  levels which you can choose at the Universitas Sumatera Utara.
                  Search by program selection study and degree types to find the
                  best educational program for you.
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
                  Resgitered USU Student Activity Unit.
                </div>
              </div>
              <div className=" col-md-4">
                <div className="admission-number__campuslife">
                  100
                  <sup>+</sup>
                </div>
                <div className="admission-number__campusdetail">
                  Community Empowerment Program organized by UKM and Student
                  Association.
                </div>
              </div>
              <div className=" col-md-4">
                <div className="admission-number__campuslife">
                  5K
                  <sup>+</sup>
                </div>
                <div className="admission-number__campusdetail">
                  Students living in Student Dormitory.
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="jalur-penerimaan">
          <div className="container">
            <div className="jalur-penerimaan__desc" />
            <div className="jalur-penerimaan__title">
              Admission of <br />
              New students
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
              <div className="biaya-studi__title">Study Fee</div>
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
                <div className="scholarship__subtitle">Scholarship</div>
              </div>
              <div className=" col-md-6">
                <div className="scholarship__text">
                  Universitas Sumatera Utara organizes various scholarship
                  programs to support the smooth running of study activities for
                  students. Check the available Scholarship programs here
                </div>
              </div>
              <div className=" col-md-3">
                <div className="scholarship__title">
                  {getKeyValue(sentences.beasiswa)(selectLanguage(language))}
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
