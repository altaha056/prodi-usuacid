"use strict";
(() => {
var exports = {};
exports.id = 8610;
exports.ids = [8610];
exports.modules = {

/***/ 1923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3271);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6378);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7318);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* eslint-disable react/jsx-no-target-blank */ 









async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    language: "id"
                }
            },
            {
                params: {
                    language: "en"
                }
            }
        ],
        fallback: true
    };
}
const getStaticProps = async (context)=>{
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get(`/photos?lang=${context.params.language}&selected=true&menu=admission&`);
        return {
            props: {
                photos: response.data.data
            },
            revalidate: 30
        };
    } catch (e) {
        return {
            props: {
                photos: []
            },
            revalidate: 30
        };
    }
};
const ArticlePage = ({ photos  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_6___default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { language  } = router.query;
    const url = `/admission?lang=${language}&selected=true0&`;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { 0: visiMisi , 1: setVisiMisi  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        {
            title: "SNMPTN Program",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "SNMPTN is a selection of new students based on search results academic achievement of prospective students. SNMPTN aims to select academically qualified freshmen with equity principles but still pay attention to the economic conditions and the area of origin of the students. Since 2013, USU has provided at least 30% of the total capacity of undergraduate programs through the SNMPTN pathway. Student with economically disadvantaged parents are given KIP College scholarships from the Government and/or other scholarships provided by USU such as BBM scholarships, PPA, and others.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "SNMPTN is a national selection pattern based on search results academic achievement by using report cards for semesters 1 to 5 for SMA/SMK/MA or the equivalent with a study period of 3 years; or semesters 1 to 7 for SMK with a study period of 4 year; as well as taking into account the candidates academic portfolio college student. Students who are eligible to take part in the selection of the SNMPTN pathway are: students who have a National Student Identification Number (NISN) and have superior achievement and track record of academic achievement on PDSS. School whose students are entitled to take part in SNMPTN are SMA/SMK/MA or equivalent who have NPSN and have filled out the PDSS completely and right."
                    ]
                })
            })
        },
        {
            title: "SBMPTN Program",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "SBMPTN is a selection of new students at the national level with using written exams or the results of a combination of written exams and skills test. Instruments used for candidate selection SBMPTN students are computer-based written exams testing (CBT) or called the Computer-Based Written Examination (UTBK). The written exam uses exam questions that are designed to follow academic rules of test development. SBMPTN written exam designed to measure the basic ability to predict success of prospective students in all Study Programs, namely the ability higher order thinking, which includes: academic potential, mastery of basic fields of study, fields of science and technology (Science), and/or social and humanities (Soshum). In addition to taking the written exam, participants who choose the Study Program arts and/or sports are required to take the exam Skills.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "The SBMPTN has the following objectives: (1) Selecting prospective students who predicted to be able to complete their studies at university with good, and (2) Provide opportunities for prospective students to choose more than one PTN across regions."
                    ]
                })
            })
        },
        {
            title: "Independent Program",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "Independent Student Selection (SMM) is a selection of new students conducted independently by USU. This selection uses a computer-based written test as a valid and reliable measuring tool in selecting and determining the academic abilities of prospective students. USU has greater autonomy in determining the criteria for passing the selection of prospective students where the criteria for passing the selection are adjusted to the characteristics of the Study Program. The Independent Student Selection (SMM) is intended to meet the unmet capacity of Study Programs on the SNMPTN and SBMPTN pathways, especially some Study Programs with less demand. Information and written guidelines regarding QMS can be accessed on the",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "www.penerimaan.usu.ac.id.",
                            color: "black",
                            children: "\xa0www.penerimaan.usu.ac.id."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Participants must meet the following requirements:",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            style: {
                                marginLeft: "10px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "1. High school graduation (SMA, MA, SMK, overseas high school, equivalency exam, etc.) in the current year and or at most the last 3 (three) years"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "2. Graduated from Package C in the current year or the last 3 (three) years who have a three-year report card (as long as the person concerned is participating in the program)"
                                })
                            ]
                        })
                    ]
                })
            })
        },
        {
            title: "Postgraduate Program",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "USU of postgraduate admission selection is a selection for new students for the Postgraduate program, both the Masters Program (S2) and Doctoral Program (S3) which are carried out independently by the USU Graduate School. The selection was carried out in two stages, namely the Academic Potential Test (TPA) and interview selection. Information about the selection of new postgraduate admissions related to registration procedures, registration requirements, types of exams, exam venues, exam time, and tuition fees can be accessed via",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://penerimaansps.usu.ac.id/",
                            color: "black",
                            children: "https://penerimaansps.usu.ac.id/"
                        }),
                        ". The registration process is carried out online so that prospective students from various locations can access openly without having to come directly to the USU Graduate School.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Currently USU has 62 postgraduate study programs consisting of 40 master study programs and 22 doctoral study programs, with 6 study programs (2 doctoral study programs and 4 master study programs) under the management of the Graduate School."
                    ]
                })
            })
        },
        // {
        //   title: 'Extension Program',
        //   desc:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
        // },
        {
            title: "Diploma Program",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "The University of North Sumatra Universitys Diploma Program Student Admission Selection (SPMPD) is a selection of new student admissions for Diploma (D3) which is held independently by the University of North Sumatra in the form of a computer-based written exam. USU has 14 Study Programs including diploma (D-3) programs which have quite a high demand. Information on SPMPD regarding registration procedures, registration requirements, types of exams, exam venues, exam time, and tuition fees can be accessed through",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "www.usu.ac.id",
                            color: "black",
                            children: "www.usu.ac.id."
                        }),
                        " ",
                        "The SPMPD registration process is carried out online so that prospective students from various locations can access it openly without having to come directly to USU."
                    ]
                })
            })
        },
        {
            title: "PPDS",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "The Specialist Doctor Education Program is an advanced level of the Doctor Professional Education Program. The Specialist Doctor Education Program is carried out by each field of the Specialist Doctor Study Program at an accredited Specialist Medical Education Institution (Faculty of Medicine).",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "The Coordination Team for the Implementation of the Doctor's Education Program was formed Specialist (TKP PPDS) Faculty of Medicine, University of North Sumatra Of course, it can't be separated from when the journey begins Specialist Medical Education. Since USUs FK succeeded graduated from the medical education program (general practitioner), then the general practitioners who graduated from USUs FK immediately underwent PPDS at his alma mater. Several Specialist Medical Education Programs (PPDS) which existed in 1961 was the PPDS in Pediatrics Health Sciences in Indonesia led and educated by Prof. Jo Kian Tjai, PPDS Surgery by Prof. J.O. Picauly, PPDS Obstetrics and Gynecology by Prof. Tan Oen Siang, PPDS in Internal Medicine by Prof. Ahmad Sofian, PPDS Mental Medicine and Neurological Diseases by Prof. Mohammad Ilyas Datuk Raja Enda Mora (Ildrem) Siregar. This shows that USUs FK has a lot of experience in educating PPDS participants from the past until at the moment.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Since the establishment of TKP PPDS, the education process for specialist doctors in USUs FK is becoming more coordinated and more capable of producing graduates who are competent in their fields and according to their needs the people of Sumatra Island in particular and Indonesia in general.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "PPDS selection stage:",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            style: {
                                marginLeft: "10px"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        "1. Register online on the website",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://penerimaanppds.usu.ac.id/",
                                            color: "black",
                                            children: "https://penerimaanppds.usu.ac.id/"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "2. Sending a hard copy of the PPDS participant candidate file to the FK PPDS TKP USU"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "3. File selection announcement"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "4. Payment of registration fee"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "5. Psychological Test from Faculty of Psychology"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "6. Minnesota Multiphasic Personality Inventory (MMPI) Test Exam from the USU School of Medicine"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "7. The Computer Based Test (CBT) exam is carried out by the Faculty USU Medicine"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "8. Written exams, oral exams/interviews are held in each related Specialist Study Program"
                                })
                            ]
                        }),
                        "Specialist Study Program:",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            style: {
                                marginLeft: "10px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "1. Ilmu Kesehatan Anak"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "2. Ilmu Bedah"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "3. Ilmu Penyakit Dalam"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "4. Obstetri dan Ginekologi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "5. T.H.T.K.L"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "6. Dermatologi dan Venereologi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "7. Neurologi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "8. Psikiatri"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "9. Ilmu Kesehatan Mata"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "10. Pulmonologi dan Kedokteran Respirasi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "11. Patologi Klinik"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "12. Patologi Anatomik"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "13. Anestesiologi dan Terapi Intensif"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "14. Penyakit Jantung dan Pembuluh Darah"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "15. Ilmu Kedokteran Forensik dan Medikolegal"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "16. Ilmu Bedah Saraf"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "17. Orthopaedi dan Traumatologi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "18. Radiologi"
                                })
                            ]
                        })
                    ]
                })
            })
        }, 
    ]);
    const { 0: biayaStudi , 1: setBiayaStudi  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        {
            title: "Diploma Program",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
        },
        {
            title: "Degree program",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/images/UKT.png",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://drive.google.com/file/d/1yDhrfmkF_NVQJQJvbCqwget3zRbLfTIT/view?usp=sharing",
                            target: "_blank",
                            style: {
                                fontSize: " 20px",
                                fontWeight: "bold",
                                color: "white"
                            },
                            children: "Download"
                        })
                    ]
                })
            })
        },
        {
            title: "Postgraduate Program",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
        },
        {
            title: "Professional/Specialist Programs",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
        }, 
    ]);
    const { 0: openedVisiMisi , 1: setOpenedVisiMisi  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: openedBiayaStudi , 1: setOpenedBiayaStudi  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const toggleOpenVisiMisi = (title)=>{
        const isOpen = openedVisiMisi.includes(title);
        let updated = [];
        if (isOpen) {
            updated = openedVisiMisi.filter((openedTitle)=>openedTitle !== title);
        } else {
            updated = [
                ...openedVisiMisi,
                title
            ];
        }
        setOpenedVisiMisi(updated);
    };
    const toggleOpenBiayaStudi = (title)=>{
        const isOpen = openedBiayaStudi.includes(title);
        let updated = [];
        if (isOpen) {
            updated = openedVisiMisi.filter((openedTitle)=>openedTitle !== title);
        } else {
            updated = [
                ...openedVisiMisi,
                title
            ];
        }
        setOpenedBiayaStudi(updated);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].penerimaan */ .Z.penerimaan)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_9__/* .selectLanguage */ .V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "section-page schome-pengabdian section-page--pt-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "admission",
                        style: {
                            backgroundImage: `url(/images/penerimaan.jpg)`
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "desc-add col-md-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__subtitle",
                                        children: "Admission of new students"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__detail",
                                        children: "Information Center for New Student Admissions (PMB) Universitas Sumatera Utara"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-addmission",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-addmission_wrapper",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-12 justify-content-center text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-addmission__detail",
                                        children: "There are various choices of study programs and education levels which you can choose at the Universitas Sumatera Utara. Search by program selection study and degree types to find the best educational program for you."
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "admission-img",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "page-desc",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "page-img",
                                    style: {
                                        paddingTop: "10px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/ADD1.jpg",
                                        alt: "",
                                        height: "100%",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jalur-penerimaan",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jalur-penerimaan__desc"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jalur-penerimaan__title",
                                    children: [
                                        "Admission of ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "New students"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jalur-penerimaan",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jalur-penerimaan__list",
                                children: visiMisi.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("jalur-penerimaan__item", {
                                            active: openedVisiMisi.includes(item.title)
                                        }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "visi-misi__item__title",
                                                onClick: ()=>toggleOpenVisiMisi(item.title),
                                                children: [
                                                    item.title,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__.ChevronDown, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "visi-misi__item__desc",
                                                children: item.desc
                                            })
                                        ]
                                    }, `jalur-penerimaan-${item.title}`))
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "biaya-studi",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "biaya-studi__list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "biaya-studi__title",
                                        children: "Study Fee"
                                    }),
                                    biayaStudi.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("biaya-studi__item", {
                                                active: openedBiayaStudi.includes(item.title)
                                            }),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "biaya-studi__item__title",
                                                    onClick: ()=>toggleOpenBiayaStudi(item.title),
                                                    children: [
                                                        item.title,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__.ChevronDown, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.desc
                                                })
                                            ]
                                        }, `biaya-studi-${item.title}`))
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "scholarship",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "scholarship__wrapper",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " col-md-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "scholarship__subtitle",
                                            children: "Scholarship"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "scholarship__text",
                                            children: "Universitas Sumatera Utara organizes various scholarship programs to support the smooth running of study activities for students. Check the available Scholarship programs here"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " col-md-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "scholarship__title",
                                            children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].beasiswa */ .Z.beasiswa)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_9__/* .selectLanguage */ .V)(language))
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePage);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

/***/ }),

/***/ 3082:
/***/ ((module) => {

module.exports = require("react-ga");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(1923)));
module.exports = __webpack_exports__;

})();