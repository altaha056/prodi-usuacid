"use strict";
(() => {
var exports = {};
exports.id = 7744;
exports.ids = [7744];
exports.modules = {

/***/ 7453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ DosenMaker)
/* harmony export */ });
class DosenMaker {
    static create(event) {
        return {
            id: event.id,
            slug: event.slug,
            language: event.language,
            userId: event.user_id,
            profile: event.profile,
            image: event.image,
            knowledgeField: event.knowledge_field,
            description: event.description,
            instagram: event.instagram,
            facebook: event.facebook,
            linkedin: event.linkedin,
            blog: event.blog,
            researchGate: event.research_gate,
            googleScholar: event.google_scholar,
            sinta: event.sinta,
            scopus: event.scopus,
            orcidId: event.orcid_id,
            achievement: event.achievement,
            video: event.video,
            publish: event.publish,
            research: event.research,
            devotion: event.devotion,
            hki: event.hki,
            teaching: event.teaching,
            createdBy: event.created_by,
            updatedBy: event.updated_by,
            createdAt: event.created_at,
            updatedAt: event.updated_at,
            selected: event.selected,
            deleted: event.deleted
        };
    }
}


/***/ }),

/***/ 7456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3271);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7318);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6378);
/* harmony import */ var _models_dosen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7453);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2905);
/* harmony import */ var _page_components_common_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8577);
/* harmony import */ var _config_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_8__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-empty-pattern */ /* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 













async function getStaticPaths() {
    try {
        const response = await Promise.all([
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get("lecturer/slugs?lang=id"),
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get("lecturer/slugs?lang=en"), 
        ]);
        const idParams = response[0].data.data.map((slug)=>{
            return {
                params: {
                    language: "id",
                    slug
                }
            };
        });
        const enParams = response[1].data.data.map((slug)=>{
            return {
                params: {
                    language: "en",
                    slug
                }
            };
        });
        return {
            paths: [
                ...idParams,
                ...enParams
            ],
            fallback: true
        };
    } catch (e) {
        return {
            paths: [],
            fallback: true
        };
    }
}
const getStaticProps = async (context)=>{
    const { language , slug  } = context.params;
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`lecturer/${slug}?lang=${language}`);
        const lecturer = await _models_dosen__WEBPACK_IMPORTED_MODULE_12__/* .DosenMaker.create */ .v.create(response.data.data);
        const teachingYear = await Array.from(new Set(lecturer.teaching.map((item)=>item.semester)));
        const availableYear = await Array.from(new Set(teachingYear.map((item)=>item.substring(0, 4))));
        return {
            props: {
                lecturer,
                availableYear
            }
        };
    } catch (e) {
        return {
            redirect: {
                destination: `/`,
                permanent: false
            }
        };
    }
};
const DirektoriDetailPage = ({ lecturer , availableYear  })=>{
    console.log("props", lecturer);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { language , slug  } = router.query;
    const { 0: isFetching , 1: setIsFetching  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: tridharmaTab , 1: setTridharmaTab  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("penelitian");
    const { 0: scrolled , 1: setScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: navActive , 1: setNavActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: selectedPengajaranYear , 1: setSelectedPengajaranYear  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: selectedPengajaranSemester , 1: setSelectedPengajaranSemester  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("1");
    const { 0: activePengajaran , 1: setActivePengajaran  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: bioFull , 1: setBioFull  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: researches , 1: setResearches  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: publications , 1: setPublications  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: devotions , 1: setDevotions  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: patents , 1: setPatents  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: achievements , 1: setAchievements  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (lecturer) {
            // bio
            if (lecturer.description.length < 421) {
                setBioFull(true);
            }
            // penelitian
            if (lecturer.research.length < 6) {
                setResearches(lecturer.research);
            } else {
                setResearches(lecturer.research.slice(0, 5));
            }
            // publikasi
            if (lecturer.publish.length < 6) {
                setPublications(lecturer.publish);
            } else {
                setPublications(lecturer.publish.slice(0, 5));
            }
            // pengabdian
            if (lecturer.devotion.length < 6) {
                setDevotions(lecturer.devotion);
            } else {
                setDevotions(lecturer.devotion.slice(0, 5));
            }
            // Paten & HKI
            if (lecturer.hki.length < 4) {
                setPatents(lecturer.hki);
            } else {
                setPatents(lecturer.hki.slice(0, 3));
            }
            // Achievement
            if (lecturer.achievement.length < 2) {
                setAchievements(lecturer.achievement);
            } else {
                setAchievements(lecturer.achievement.slice(0, 1));
            }
            console.log("first");
        }
    }, [
        lecturer
    ]);
    // research switch
    const switchFullResearch = ()=>{
        if (researches && researches.length < 6) {
            setResearches(lecturer.research);
        } else {
            setResearches(lecturer.research.slice(0, 5));
        }
    };
    // publication switch
    const switchFullPublications = ()=>{
        if (publications && publications.length < 6) {
            setPublications(lecturer.publish);
        } else {
            setPublications(lecturer.publish.slice(0, 5));
        }
    };
    // devotion switch
    const switchFullDevotions = ()=>{
        if (devotions && devotions.length < 6) {
            setDevotions(lecturer.devotion);
        } else {
            setDevotions(lecturer.devotion.slice(0, 5));
        }
    };
    // paten switch
    const switchFullPatents = ()=>{
        if (patents && patents.length < 4) {
            setPatents(lecturer.hki);
        } else {
            setPatents(lecturer.hki.slice(0, 3));
        }
    };
    // paten switch
    const switchFullAchievements = ()=>{
        if (achievements && achievements.length < 2) {
            setAchievements(lecturer.achievement);
        } else {
            setAchievements(lecturer.achievement.slice(0, 1));
        }
    };
    // default selected year for pengajaran
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (availableYear && availableYear.length > 0) {
            setSelectedPengajaranYear(availableYear[0]);
        }
    }, [
        lecturer
    ]);
    // filter selected pengajaran
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (lecturer) {
            const teaching = lecturer.teaching.filter((item)=>item.semester === `${selectedPengajaranYear}${selectedPengajaranSemester}`);
            setActivePengajaran(teaching);
        }
    }, [
        selectedPengajaranYear,
        selectedPengajaranSemester,
        lecturer
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsFetching(false);
    }, []);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 5
        },
        tablet: {
            breakpoint: {
                max: 1200,
                min: 464
            },
            items: 4
        },
        mobile: {
            breakpoint: {
                max: 600,
                min: 0
            },
            items: 3
        }
    };
    // navbar change background onscroll
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const scrollFunction = ()=>{
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.onscroll = ()=>{
            scrollFunction();
        };
    }, []);
    const profileRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const tridharmaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const prestasiRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const researchMediaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const smoothScroll = (refItem, activeTabItem)=>{
        refItem.current?.scrollIntoView({
            behavior: "smooth"
        });
        if (activeTabItem) {
            setTridharmaTab(activeTabItem);
        }
    };
    const getSentence = (sentence)=>{
        return (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(sentence)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language));
    };
    return lecturer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            lecturer.profile.name,
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "direktori",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: `${scrolled ? "bg-header" : ""}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                            className: "nav",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "nav-logo",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/images/usu.png",
                                                alt: "Logo USU",
                                                loading: "lazy"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                children: [
                                                    "Dosen Berprestasi",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "UNIVERSITAS SUMATERA UTARA"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "nav-links",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(profileRef, null),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: "PROFIL"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(profileRef, null),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: `${_config_url__WEBPACK_IMPORTED_MODULE_10__/* .baseUrl */ .FH}/lecturer/cv/${slug}?lang=${language}`,
                                                download: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "BIO & CV"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(tridharmaRef, "penelitian"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penelitian_content */ .Z.penelitian_content)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(tridharmaRef, "publikasi"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].publikasi_content */ .Z.publikasi_content)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(tridharmaRef, "pengajaran"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pengajaran_content */ .Z.pengajaran_content)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(tridharmaRef, "pengabdian"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pengabdian_menu */ .Z.pengabdian_menu)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(prestasiRef, null),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penghargaan_content */ .Z.penghargaan_content)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(prestasiRef, null),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: "PATEN & HKI"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "nav-links__item",
                                            onClick: ()=>smoothScroll(researchMediaRef, null),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: "RESEARCH MEDIA"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "nav-collapse",
                                    onClick: ()=>setNavActive(true),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/icons/burger-icon-black.png",
                                        alt: "collapse"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `sidenav ${navActive ? "open" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "sidenav-icon",
                                onClick: ()=>setNavActive(false),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "✕"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sidenav-list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(profileRef, null),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "PROFIL"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(profileRef, null),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: `${_config_url__WEBPACK_IMPORTED_MODULE_10__/* .baseUrl */ .FH}/lecturer/cv/${slug}?lang=${language}`,
                                            download: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "BIO & CV"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(tridharmaRef, "penelitian"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penelitian_content */ .Z.penelitian_content)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(tridharmaRef, "publikasi"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].publikasi_content */ .Z.publikasi_content)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(tridharmaRef, "pengajaran"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pengajaran_content */ .Z.pengajaran_content)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(tridharmaRef, "pengabdian"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pengabdian_menu */ .Z.pengabdian_menu)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(prestasiRef, null),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penghargaan_content */ .Z.penghargaan_content)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(prestasiRef, null),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "PATEN & HKI"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sidenav-list__item",
                                        onClick: ()=>smoothScroll(researchMediaRef, null),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "RESEARCH MEDIA"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "hero",
                        className: "hero",
                        ref: profileRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hero-background",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hero-container direktori-container",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "hero-biodata",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: lecturer.profile.name
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "hero-biodata-datapegawai",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "hero-biodata-datapegawai-items",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "label",
                                                                children: "NIP"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    ":\xa0",
                                                                    lecturer.profile.nip
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "hero-biodata-datapegawai-items",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "label",
                                                                children: "NIDN"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    ":\xa0",
                                                                    lecturer.profile.nidn
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "hero-biodata-datapegawai-items",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "label",
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    ":\xa0",
                                                                    lecturer.profile.email_usu
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hero-expertise",
                                                children: lecturer.knowledgeField.map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn-justview",
                                                        children: skill
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bio",
                                                children: bioFull ? (0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])(lecturer.description) : (0,html_react_parser__WEBPACK_IMPORTED_MODULE_8__["default"])(`${lecturer.description.substring(0, 420)}...`)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "hero-biodata-link",
                                                children: !bioFull && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    onClick: ()=>setBioFull(true),
                                                    children: "Selengkapnya →"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "social-media",
                                                children: [
                                                    lecturer.facebook && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `//${lecturer.facebook}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/facebook.png",
                                                            alt: "Facebook"
                                                        })
                                                    }),
                                                    lecturer.instagram && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `//${lecturer.instagram}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/instagram.png",
                                                            alt: "instagram"
                                                        })
                                                    }),
                                                    lecturer.linkedin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `//${lecturer.linkedin}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/linkedin.png",
                                                            alt: "linkedin"
                                                        })
                                                    }),
                                                    lecturer.blog && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "blog",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Blog :"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: `//${lecturer.blog}`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    children: lecturer.blog
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "hero-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: lecturer.image,
                                            alt: `foto profile ${lecturer.profile.name}`,
                                            loading: "lazy"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "tridharma",
                        className: "tridharma direktori-container",
                        ref: researchMediaRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "single-card-wrapper",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "direktori-card",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "direktori-card-header",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/icons/direktori/research-media.png",
                                                    alt: "Research Media"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: "Research Media"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "direktori-card-body direktori-carousel research-media-carousel",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                additionalTransfrom: 0,
                                                arrows: true,
                                                autoPlaySpeed: 3000,
                                                centerMode: false,
                                                className: "",
                                                containerClass: "container-with-dots",
                                                dotListClass: "",
                                                draggable: true,
                                                focusOnSelect: false,
                                                infinite: true,
                                                itemClass: "",
                                                keyBoardControl: true,
                                                minimumTouchDrag: 80,
                                                pauseOnHover: true,
                                                renderArrowsWhenDisabled: false,
                                                renderButtonGroupOutside: false,
                                                renderDotsOutside: false,
                                                responsive: responsive,
                                                rewind: false,
                                                rewindWithAnimation: false,
                                                rtl: false,
                                                shouldResetAutoplay: true,
                                                showDots: false,
                                                sliderClass: "",
                                                slidesToSlide: 1,
                                                swipeable: true,
                                                children: [
                                                    lecturer.researchGate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `//${lecturer.researchGate}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/research-gate.png",
                                                            alt: "Research Gate"
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/research-gate.png",
                                                            alt: "Research Gate"
                                                        })
                                                    }),
                                                    lecturer.googleScholar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `//${lecturer.googleScholar}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/google-scholar.png",
                                                            alt: "Google Scholar"
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/google-scholar.png",
                                                            alt: "Google Scholar"
                                                        })
                                                    }),
                                                    lecturer.sinta ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `//${lecturer.sinta}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/sinta.png",
                                                            alt: "Sinta"
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/sinta.png",
                                                            alt: "Sinta"
                                                        })
                                                    }),
                                                    lecturer.scopus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `//${lecturer.scopus}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/scopus.png",
                                                            alt: "Scopus"
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/scopus.png",
                                                            alt: "Scopus"
                                                        })
                                                    }),
                                                    lecturer.orcid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `//${lecturer.orcid}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/orcid.png",
                                                            alt: "Orcid"
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/images/icons/direktori/orcid.png",
                                                            alt: "Orcid"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "single-card-wrapper",
                                ref: tridharmaRef,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "direktori-card",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "direktori-card-header",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "Tridharma Perguruan Tinggi"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "direktori-card-body tab",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "tab-navigation",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `tab-navigation__item ${tridharmaTab === "penelitian" ? "active" : ""}`,
                                                            onClick: ()=>setTridharmaTab("penelitian"),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/images/icons/direktori/penelitian.png",
                                                                    alt: "Penelitian"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penelitian_content */ .Z.penelitian_content).toLowerCase()
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `tab-navigation__item ${tridharmaTab === "publikasi" ? "active" : ""}`,
                                                            onClick: ()=>setTridharmaTab("publikasi"),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/images/icons/direktori/publikasi.png",
                                                                    alt: "Publikasi"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].publikasi_content */ .Z.publikasi_content).toLowerCase()
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `tab-navigation__item ${tridharmaTab === "pengajaran" ? "active" : ""}`,
                                                            onClick: ()=>setTridharmaTab("pengajaran"),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/images/icons/direktori/pengajaran.png",
                                                                    alt: "Pengajaran"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pengajaran_content */ .Z.pengajaran_content).toLowerCase()
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `tab-navigation__item ${tridharmaTab === "pengabdian" ? "active" : ""}`,
                                                            onClick: ()=>setTridharmaTab("pengabdian"),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/images/icons/direktori/pengabdian.png",
                                                                    alt: "Pengabdian"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].pengabdian_menu */ .Z.pengabdian_menu).toLowerCase()
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `tab-content ${tridharmaTab === "penelitian" ? "active-content" : ""}`,
                                                    children: lecturer.research.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "content-padding",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `thin-scrollbar ${researches.length > 5 ? "full-content-table" : ""}`,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "JUDUL PENELITIAN"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "TAHUN"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                                                    className: `${researches.length > 5 ? "full-content-table" : ""}`,
                                                                                    children: researches && researches.map((penelitian)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: penelitian.title
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: penelitian.year
                                                                                                })
                                                                                            ]
                                                                                        }, penelitian.id))
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "small-description",
                                                                        children: "Source: sister.usu.ac.id"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "link-description",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        className: "btn-muted btn-justview",
                                                                        children: [
                                                                            "Total : ",
                                                                            lecturer.research.length
                                                                        ]
                                                                    }),
                                                                    lecturer.research.length > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        className: "btn-green btn-sm",
                                                                        onClick: switchFullResearch,
                                                                        children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].lihatSeluruhnya */ .Z.lihatSeluruhnya)
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mt-4",
                                                            children: "belum ada penelitian"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `tab-content ${tridharmaTab === "publikasi" ? "active-content" : ""}`,
                                                    children: lecturer.publish.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "content-padding publikasi",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `thin-scrollbar ${publications.length > 5 ? "full-content-table" : ""}`,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "JUDUL PUBLIKASI"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "JENIS PUBLIKASI"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "TAHUN TERBIT"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "PAPER"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                                                    className: `${publications.length > 5 ? "full-content-table" : ""}`,
                                                                                    children: publications && publications.map((publikasi)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: publikasi.publication.title
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: publikasi.publication.type
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: publikasi.publication.year
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: publikasi.link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                        href: `//${publikasi.link}`,
                                                                                                        target: "_blank",
                                                                                                        rel: "noopener noreferrer",
                                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                                                            className: "btn-green",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                                                    src: "/images/icons/direktori/pdf.png",
                                                                                                                    alt: "PDF"
                                                                                                                }),
                                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                                    children: "PDF"
                                                                                                                })
                                                                                                            ]
                                                                                                        })
                                                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                                        children: "-"
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }, publikasi.id))
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "small-description",
                                                                        children: "Source: sister.usu.ac.id"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "link-description",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        className: "btn-muted btn-justview",
                                                                        children: [
                                                                            "Total : ",
                                                                            lecturer.publish.length
                                                                        ]
                                                                    }),
                                                                    lecturer.publish.length > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        className: "btn-green btn-sm",
                                                                        onClick: switchFullPublications,
                                                                        children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].lihatSeluruhnya */ .Z.lihatSeluruhnya)
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mt-4",
                                                            children: "belum ada publikasi"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `tab-content ${tridharmaTab === "pengajaran" ? "active-content" : ""}`,
                                                    children: lecturer.teaching.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "content-padding pengajaran",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "tab-content-filter",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                                value: selectedPengajaranYear,
                                                                                onChange: (e)=>setSelectedPengajaranYear(e.target.value),
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                        disabled: true,
                                                                                        children: "TAHUN"
                                                                                    }, "0"),
                                                                                    availableYear.map((tahun, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                            value: tahun,
                                                                                            children: tahun
                                                                                        }, tahun))
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                                value: selectedPengajaranSemester,
                                                                                onChange: (e)=>setSelectedPengajaranSemester(e.target.value),
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                        disabled: true,
                                                                                        children: "SEMESTER"
                                                                                    }, "0"),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                        value: "1",
                                                                                        children: "SEMESTER 1"
                                                                                    }, "1"),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                        value: "2",
                                                                                        children: "SEMESTER 2"
                                                                                    }, "2")
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `thin-scrollbar ${activePengajaran.length > 5 ? "full-content-table" : ""}`,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                                            className: "bordered-all",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "No."
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "Mata Kuliah"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "Kelas"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "Program Studi"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                                                    children: activePengajaran.map((pengajaran, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: index + 1
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: pengajaran.subject
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: pengajaran.class
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: pengajaran.major_name
                                                                                                })
                                                                                            ]
                                                                                        }, index))
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "small-description",
                                                                        children: "Source: feeder.usu.ac.id"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "link-description",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    className: "btn-muted btn-justview",
                                                                    children: [
                                                                        "Total : ",
                                                                        activePengajaran.length
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mt-4",
                                                            children: "belum ada pengajaran"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `tab-content ${tridharmaTab === "pengabdian" ? "active-content" : ""}`,
                                                    children: lecturer.devotion.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "content-padding",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: `thin-scrollbar ${researches.length > 5 ? "full-content-table" : ""}`,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "JUDUL PENGABDIAN"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                                children: "TAHUN"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                                                    className: `${devotions.length > 5 ? "full-content-table" : ""}`,
                                                                                    children: devotions && devotions.map((pengabdian)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: pengabdian.title
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                                    children: pengabdian.year
                                                                                                })
                                                                                            ]
                                                                                        }, pengabdian.id))
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "small-description",
                                                                        children: "Source: sister.usu.ac.id"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "link-description",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        className: "btn-muted btn-justview",
                                                                        children: [
                                                                            "Total : ",
                                                                            lecturer.devotion.length
                                                                        ]
                                                                    }),
                                                                    lecturer.devotion.length > 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        className: "btn-green btn-sm",
                                                                        onClick: switchFullDevotions,
                                                                        children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].lihatSeluruhnya */ .Z.lihatSeluruhnya)
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mt-4",
                                                            children: "belum ada pengabdian"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "prestasi",
                        className: "prestasi direktori-container",
                        ref: prestasiRef,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "double-card-wrapper width-3-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "direktori-card",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "direktori-card-header",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/icons/direktori/patent.png",
                                                    alt: "Paten&HKI"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "capitalize",
                                                    children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].paten_content */ .Z.paten_content).toLowerCase()
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "direktori-card-body",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "list thin-scrollbar",
                                                    children: lecturer.hki.length > 0 ? patents && patents.map((paten)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "list-item",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "list-item__left",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        children: paten.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                                        children: [
                                                                            "Penemu :",
                                                                            " ",
                                                                            paten.inventor.map((people, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: index !== paten.inventor.length - 1 ? `${people}, ` : `dan ${people}`
                                                                                }))
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "list-item__description",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                                className: "btn-green btn-xs btn-justview",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: "/images/icons/direktori/calendar.png",
                                                                                        alt: "calendar"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                        children: paten.year
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                                className: "btn-yellow btn-xs btn-justview",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                        src: "/images/icons/direktori/doughnut-chart.png",
                                                                                        alt: "type"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                        children: paten.type
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }, paten.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mt-4",
                                                            children: "Belum ada Paten"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "small-description ml-3",
                                                    children: "Source: sister.usu.ac.id"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "link-description",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: "btn-nonactive btn-justview",
                                                            children: [
                                                                "Total : ",
                                                                lecturer.hki.length
                                                            ]
                                                        }),
                                                        lecturer.hki.length > 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn-green",
                                                            onClick: switchFullPatents,
                                                            children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].lihatSeluruhnya */ .Z.lihatSeluruhnya)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "direktori-card",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "direktori-card-header",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/icons/direktori/penghargaan.png",
                                                    alt: "Penghargaan"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "capitalize",
                                                    children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penghargaan_content */ .Z.penghargaan_content).toLowerCase()
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "direktori-card-body",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "content-wrapper thin-scrollbar",
                                                    children: lecturer.achievement.length > 0 ? achievements && achievements.map((penghargaan)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "content",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "title",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                            children: penghargaan.title
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                            children: penghargaan.short_description
                                                                        })
                                                                    ]
                                                                }),
                                                                penghargaan.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: penghargaan.image,
                                                                    alt: "Seminar Nasional"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "attribute",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            className: "badge-sm",
                                                                            children: penghargaan.date
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            className: "badge-sm",
                                                                            children: penghargaan.place
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        penghargaan.description.substring(0, 421),
                                                                        "..."
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "content-link",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        href: "#",
                                                                        children: "Informasi Lengkap"
                                                                    })
                                                                })
                                                            ]
                                                        }, penghargaan.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mt-4",
                                                            children: "Belum ada penghargaan"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "link-description",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            className: "btn-nonactive btn-justview",
                                                            children: [
                                                                "Total : ",
                                                                lecturer.achievement.length
                                                            ]
                                                        }),
                                                        lecturer.achievement.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: "btn-green",
                                                            onClick: switchFullAchievements,
                                                            children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].lihatSeluruhnya */ .Z.lihatSeluruhnya)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "video",
                        className: "video direktori-container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "single-card-wrapper",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "direktori-card",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "direktori-card-header",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/images/icons/direktori/video.png",
                                                alt: "Video"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "capitalize",
                                                children: getSentence(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].video_content */ .Z.video_content).toLowerCase()
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "direktori-card-body",
                                        children: [
                                            lecturer.video.length > 0 ? lecturer.video.map((video, index)=>index === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "video-headline",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                        src: video.video_link,
                                                        title: video.title,
                                                        frameBorder: "0",
                                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                        allowFullScreen: true
                                                    })
                                                }, video.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Belum ada video"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "videos direktori-carousel",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    additionalTransfrom: 0,
                                                    arrows: true,
                                                    autoPlaySpeed: 3000,
                                                    centerMode: false,
                                                    className: "",
                                                    containerClass: "container-with-dots",
                                                    dotListClass: "",
                                                    draggable: true,
                                                    focusOnSelect: false,
                                                    infinite: true,
                                                    itemClass: "",
                                                    keyBoardControl: true,
                                                    minimumTouchDrag: 80,
                                                    pauseOnHover: true,
                                                    renderArrowsWhenDisabled: false,
                                                    renderButtonGroupOutside: false,
                                                    renderDotsOutside: false,
                                                    responsive: {
                                                        superLargeDesktop: {
                                                            // the naming can be any, depends on you.
                                                            breakpoint: {
                                                                max: 4000,
                                                                min: 3000
                                                            },
                                                            items: 3
                                                        },
                                                        desktop: {
                                                            breakpoint: {
                                                                max: 3000,
                                                                min: 1024
                                                            },
                                                            items: 3
                                                        },
                                                        tablet: {
                                                            breakpoint: {
                                                                max: 1000,
                                                                min: 540
                                                            },
                                                            items: 2
                                                        },
                                                        mobile: {
                                                            breakpoint: {
                                                                max: 540,
                                                                min: 0
                                                            },
                                                            items: 1
                                                        }
                                                    },
                                                    rewind: false,
                                                    rewindWithAnimation: false,
                                                    rtl: false,
                                                    shouldResetAutoplay: true,
                                                    showDots: false,
                                                    sliderClass: "",
                                                    slidesToSlide: 1,
                                                    swipeable: true,
                                                    children: lecturer.video.map((video, index)=>index !== 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                            src: video.video_link,
                                                            title: video.title,
                                                            frameBorder: "0",
                                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                            allowFullScreen: true
                                                        }, `video${video.id}`))
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_common_loading__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirektoriDetailPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 5804:
/***/ ((module) => {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378,8577], () => (__webpack_exec__(7456)));
module.exports = __webpack_exports__;

})();