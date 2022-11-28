"use strict";
(() => {
var exports = {};
exports.id = 5997;
exports.ids = [5997,8882,5319,9677];
exports.modules = {

/***/ 3626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ DedicationMaker)
/* harmony export */ });
class DedicationMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            image: event.image,
            location: event.location,
            shortDescription: event.short_description,
            description: event.description,
            author: event.author,
            date: event.created_at,
            authordiv: event.authordiv || null,
            photographer: event.photographer || null,
            photographerdiv: event.photographerdiv || null,
            interviewees: event.interviewees || null,
            intervieweesdiv: event.intervieweesdiv || null,
            language: event.language,
            slug: event.slug,
            imagetitle: event.imagetitle || null
        };
    }
}


/***/ }),

/***/ 7315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_headline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3615);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7318);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3271);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6378);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_research__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3373);
/* harmony import */ var _page_components_common_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8577);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _models_dedication__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3626);
/* harmony import */ var _models_public_lecture__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8790);
/* harmony import */ var _pimpinan_universitas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(100);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable react/jsx-one-expression-per-line */ 

















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
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await Promise.all([
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/headline?lang=${lang.value}&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/research?lang=${lang.value}&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/public-lecture?lang=${lang.value}&page=1&limit=8&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/dedication?lang=${lang.value}&page=1&limit=3&selected=true`), 
        ]);
        console.log(response[0].data);
        const headlines = response[0].data.data?.map((res)=>_models_headline__WEBPACK_IMPORTED_MODULE_12__/* .HeadlineMaker.create */ .Z.create({
                ...res,
                imageHeight: "100vh"
            }) || []);
        const selectedFocus = response[1].data.data.data[0] ? _models_research__WEBPACK_IMPORTED_MODULE_13__/* .ResearchMaker.create */ .d.create(response[1].data.data.data[0]) : null;
        const indexResearch = response[1].data.data.data?.map((res)=>_models_research__WEBPACK_IMPORTED_MODULE_13__/* .ResearchMaker.create */ .d.create(res));
        const fakultasSekolah = response[2].data.data?.map((res)=>_models_public_lecture__WEBPACK_IMPORTED_MODULE_14__/* .PublicLectureMaker.create */ .I.create(res));
        const indexDedication = response[3].data.data.data?.map((res)=>_models_dedication__WEBPACK_IMPORTED_MODULE_15__/* .DedicationMaker.create */ .h.create(res));
        console.log(headlines);
        return {
            props: {
                headlines,
                selectedFocus,
                indexResearch,
                fakultasSekolah,
                indexDedication
            },
            revalidate: 30
        };
    } catch (e) {
        console.log("ERROR: ");
        console.log(e);
        return {
            props: {
                headlines: [],
                selectedFocus: null,
                indexResearch: [],
                fakultasSekolah: [],
                IndexDedication: []
            },
            revalidate: 30
        };
    }
};
const Home = ({ headlines , selectedFocus , indexResearch , fakultasSekolah , indexDedication ,  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_7___default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { language  } = router.query;
    const { 0: visiMisi , 1: setVisiMisi  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {
            title: "Vision",
            line1: "To become a university that has academic excellence as a barometer of scientific progress that is able to compete in the global world level",
            line2: "",
            line3: "",
            line4: "",
            line5: "",
            line6: "",
            line7: ""
        },
        {
            title: "Mision",
            line1: "1. Organizing higher education based on autonomy which is a forum for character development and professionalism of human resources based on empowerment that contains the spirit of democratization of education that recognizes pluralism with an educational orientation that emphasizes the aspect of seeking alternative solutions to actual problems based on scientific, moral, and conscience studies;",
            line2: "2. Produce graduates who become agents of change as a force of modernization in the life of the wider community, who have scientific competence, strong relevance and competitiveness, as well as ethical intellectual behavior;",
            line3: "and 3. Implement, develop, and improve education, research culture and community service programs in the context of improving academic quality by developing superior knowledge, which is beneficial for changing the lives of the wider community for the better.",
            line4: "",
            line5: "",
            line6: "",
            line7: ""
        },
        {
            title: "Goals",
            line1: "1. Produce quality graduates who are able to develop science, technology, humanities, and arts, based on religious morals, and are able to compete at national and international levels",
            line2: "2. Produce innovative research that encourages the development of science, technology, humanities, and arts in national and international scope;",
            line3: "3. Generate reasoning-based community service and research work that is useful in advancing general welfare and educating the nation's life and empowering the community in an innovative way so that the community is able to solve problems independently and sustainably;",
            line4: "4. Realizing self-reliance that is adaptive, creative, and proactive towards community demands and development challenges, both nationally and internationally;",
            line5: "5. Improving the quality of learning management on an ongoing basis to achieve excellence in national and international competition and cooperation;",
            line6: "6. Become a moral and intellectual force in building Indonesian civil society; and",
            line7: "7. Developing the potential of students to become human beings who believe and fear God Almighty and have noble character, are healthy, knowledgeable, capable, creative, independent, skilled, competent, and cultured for the benefit of the nation."
        }, 
    ]);
    const { 0: openedVisiMisi , 1: setOpenedVisiMisi  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    if ([
        typeof headlines
    ].includes("undefined") || router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_common_loading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
    }
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
    console.log(headlines);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tentangUSU */ .Z.tentangUSU)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language)),
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "about-USU",
                        style: {
                            backgroundImage: `url(/images/ttgusu.jpg)`
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "page-desc col-md-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__subtitle",
                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tentangUSU */ .Z.tentangUSU)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__detail",
                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tentangUSU_outline */ .Z.tentangUSU_outline)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-body",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body__title",
                                                children: "History"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body__teks",
                                                children: "The history of the University of North Sumatra (USU) begins with the establishment of the University of North Sumatra Foundation on the 4th June 1952. The establishment of this foundation was spearheaded by the Governor North Sumatra to fulfill the wishes of the people of Sumatra North in particular and Indonesian society in general."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body__teks",
                                                children: "During the Japanese occupation, several prominent people in Medan including Dr. Pirngadi and Dr. T. Mansoer made College of Medicine design. After independence Indonesia, the government appointed Dr. Mohd. Djamil on the Hill High as chairman of the committee. After restoration of sovereignty due to the clash in 1947, Governor Abdul Hakim took the initiative to encourage people throughout North Sumatra"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "section-body__img",
                                            src: "/images/sejarahkampus1.jpg"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "section-body__img1",
                                            src: "/images/sejarahkampus2.jpg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "section-body__teks1",
                                            children: "On December 31, 1951 a preparatory committee was formed establishment of a university chaired by Dr. Soemarsono whose members consist of Dr. Ahmad Sofian, Ir. Danunagoro and secretary Mr. Djaidin Purba. As a result of cooperation and moral and material assistance from all Sumatran people North, which at that time also included the Special Region of Aceh, On August 20, 1952, the Faculty was successfully established Medicine on the Spooky Road with twenty-seven people students including two women. Then followed with the establishment of the Faculty of Law and Public Knowledge (1954),"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section-numberusu",
                                    style: {
                                        marginTop: "50px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "Leader of University"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: "article-item row section-numberusu__garisoren"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-md-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-body__pimpinantitle",
                                                    children: "Dr. Muryanto Amin, S.Sos, M.Si"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-body__pimpinanteks",
                                                    children: "Rektor Universitas Sumatera Utara"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-body__pimpinanteks1",
                                                    children: "Dr Muryanto Amin, S Sos, M Si, appointed as Chancellor University of North Sumatra (USU) for the period 2021-2026, on January 28, 2021, at the Kemendikbudristek Building, Jakarta Center. Former Dean of USU's Faculty of Social and Political Sciences This is the youngest USU Chancellor, who was sworn in at the age of 47 years."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "section-body__pimpinanimg",
                                                src: "/images/pakrektor.png"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-body-pimpinan",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pimpinan_universitas__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            photos: null
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-body-profil",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body-profil__title",
                                                children: "Campus Profile"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body-profil__teks",
                                                children: "USU's campus is located in Padang Bulan with an area of 120 ha which is located in the center of Medan City. 90 ha academic zone can accommodate almost all lecture and practicum activities college student. The learning system is supported by facilities library and more than 200 laboratories. library provide various types of learning resources, both in the form of print and electronic"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body-profil__teks",
                                                children: "Padang Bulan Campus has information technology infrastructure to facilitate access to various resources information and knowledge to support the learning process and student and faculty research. Besides, inside The campus also has various facilities, such as dormitories, arenas sports, guesthouses, cafeterias, shops, banks and post offices. Graduation and various academic events"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "section-body-profil__img",
                                            src: "/images/profilkampus.png"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "visi-misi",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "visi-misi__title",
                                    children: [
                                        "Vision, Mision & ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Goals"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "visi-misi__list",
                                    children: visiMisi.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("visi-misi__item", {
                                                active: openedVisiMisi.includes(item.title)
                                            }),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "visi-misi__item__title",
                                                    onClick: ()=>toggleOpenVisiMisi(item.title),
                                                    children: [
                                                        item.title,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_9__.ChevronDown, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line1
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line2
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line3
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line4
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line5
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line6
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line7
                                                })
                                            ]
                                        }, `visi-misi-${item.title}`))
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

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

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378,8577,3717,100], () => (__webpack_exec__(7315)));
module.exports = __webpack_exports__;

})();