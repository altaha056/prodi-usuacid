"use strict";
(() => {
var exports = {};
exports.id = 9078;
exports.ids = [9078];
exports.modules = {

/***/ 2690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ MainFocusMaker)
/* harmony export */ });
class MainFocusMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            category: event.category,
            categoryId: event.category_id,
            shortDescription: event.short_description,
            image: event.image,
            author: event.author,
            date: event.created_at,
            language: event.language,
            slug: event.slug,
            authordiv: event.authordiv || null,
            photographer: event.photographer || null,
            photographerdiv: event.photographerdiv || null,
            interviewees: event.interviewees || null,
            intervieweesdiv: event.intervieweesdiv || null,
            imagetitle: event.imagetitle || null
        };
    }
}


/***/ }),

/***/ 2615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_components_home_riset_unggulan_penelitian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8533);
/* harmony import */ var _models_headline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3615);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7318);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3271);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6378);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_research__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3373);
/* harmony import */ var _page_components_common_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8577);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _page_components_home_index_research__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1383);
/* harmony import */ var _page_components_home_index_jurnal_pilihan__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8280);
/* harmony import */ var _models_public_lecture__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8790);
/* harmony import */ var _models_main_focus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2690);
/* harmony import */ var _models_journal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9676);
/* eslint-disable react/jsx-no-target-blank */ /* eslint-disable react/jsx-one-expression-per-line */ 

















// import BulletinModel, { BulletinMaker } from '@/models/bulletin';

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
            _config_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/headline?lang=${lang.value}&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/research?lang=${lang.value}&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/research?lang=${lang.value}&page=1&limit=4&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/public-lecture?lang=${lang.value}&page=1&limit=8&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/main-focus?lang=${lang.value}&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/main-focus?lang=${lang.value}&page=1&limit=4&selected=true`),
            // axios.get(`/bulletin?lang=${lang.value}&page=1&limit=3&selected=true&category_id=623930cb973cd22f818dfc5f`),
            _config_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/journal?lang=${lang.value}&page=1&limit=4&selected=true&category_id=623405297390d4258500d89e&`), 
        ]);
        console.log(response[0].data);
        const headlines = response[0].data.data?.map((res)=>_models_headline__WEBPACK_IMPORTED_MODULE_12__/* .HeadlineMaker.create */ .Z.create({
                ...res,
                imageHeight: "100vh"
            }) || []);
        const selectedFocus = response[1].data.data.data[0] ? _models_research__WEBPACK_IMPORTED_MODULE_13__/* .ResearchMaker.create */ .d.create(response[1].data.data.data[0]) : null;
        const selectedFocuss = response[1].data.data.data[0] ? _models_research__WEBPACK_IMPORTED_MODULE_13__/* .ResearchMaker.create */ .d.create(response[1].data.data.data[0]) : null;
        const indexResearch = response[2].data.data.data?.map((res)=>_models_research__WEBPACK_IMPORTED_MODULE_13__/* .ResearchMaker.create */ .d.create(res));
        const fakultasSekolah = response[3].data.data?.map((res)=>_models_public_lecture__WEBPACK_IMPORTED_MODULE_14__/* .PublicLectureMaker.create */ .I.create(res));
        const selectedFocusss = response[4].data.data.data[0] ? _models_main_focus__WEBPACK_IMPORTED_MODULE_15__/* .MainFocusMaker.create */ .M.create(response[4].data.data.data[0]) : null;
        const indexMainFocus = response[5].data.data.data?.map((res)=>_models_main_focus__WEBPACK_IMPORTED_MODULE_15__/* .MainFocusMaker.create */ .M.create(res));
        const indexJurnal = response[6].data.data.data?.map((res)=>_models_journal__WEBPACK_IMPORTED_MODULE_16__/* .JournalMaker.create */ .w.create(res));
        console.log(headlines);
        return {
            props: {
                headlines,
                selectedFocus,
                selectedFocuss,
                indexResearch,
                fakultasSekolah,
                selectedFocusss,
                indexMainFocus,
                indexJurnal
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
                selectedFocuss: null,
                indexResearch: [],
                fakultasSekolah: [],
                selectedFocusss: [],
                indexMainFocus: [],
                indexJurnal: []
            },
            revalidate: 30
        };
    }
};
const Home = ({ headlines , selectedFocus , selectedFocuss , indexResearch , fakultasSekolah , selectedFocusss , indexMainFocus , indexJurnal ,  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_8___default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { language  } = router.query;
    if ([
        typeof headlines
    ].includes("undefined") || router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_common_loading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
    }
    console.log(headlines);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penelitian */ .Z.penelitian)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language)),
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
                        className: "above-the-research",
                        style: {
                            backgroundImage: `url(/images/headline-penelitian.jpg)`
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "page-desc col-md-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__subtitle",
                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penelitian */ .Z.penelitian)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__detail",
                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penelitian_outline */ .Z.penelitian_outline)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row no-gutters",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-title-headline__angka",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    children: [
                                                        "1204",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                                            children: "+"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-title-headline__teks",
                                                children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penelitian_jurnal */ .Z.penelitian_jurnal)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "section-title-headline__outline",
                                            children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].penelitian_kata */ .Z.penelitian_kata)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "ftco-section",
                        style: {
                            paddingTop: "50px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "section-rilis",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "section-rilis__titlepenelitian",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].hasilPenelitian */ .Z.hasilPenelitian)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-rilis__dasarorenpenelitian row",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-md-10",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-rilis__datePenelitian"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-rilis__subtitle"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-rilis__isi",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Hasil Penelitian Universitas Sumatera Utara (USU) dipublikasi dalam berbagai macam produk penelitian, yakni Artikel Ilmiah Internasional, Pemalakalah Pada Forum Ilmiah Internasional, Hak Kekayaan Intelektual (HKI), Penyelenggaraan Forum Ilmiah, Buku Ajar, serta Pengabdian Pada Masyarakat."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-rilis__selanjutnya",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://penelitian.usu.ac.id/penelitian-pengabdian",
                                                        target: "_blank",
                                                        className: "button-custom",
                                                        style: {
                                                            fontFamily: "sans-serif",
                                                            color: "black"
                                                        },
                                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].BacaSelanjutnya_content */ .Z.BacaSelanjutnya_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        style: {
                            marginBottom: "200px",
                            marginTop: "-100px"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-title-headline__jurnal",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].jurnalPilihan */ .Z.jurnalPilihan)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "section-title-headline__garisoren"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_home_index_jurnal_pilihan__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        contents: indexJurnal || [],
                        language: language
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-title-headline__jurnal",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].updateTerkini */ .Z.updateTerkini)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "section-title-headline__garisoren"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "ftco-section section-terkini-wrapper",
                        style: {
                            marginBottom: "-130px",
                            marginTop: "-10px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "section-terkini",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section-terkini__dasarputih row",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md-10",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "section-terkini__title"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-terkini__date"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-terkini__subtitle",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-terkini__isi",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Berita terkini mengenai info penelitian dan pengumuman SIMLITABMAS yang dimulai dari penerimaan proposal sampai ke proses laporan akhir."
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-terkini__selanjutnya",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://penelitian.usu.ac.id/",
                                                    target: "_blank",
                                                    className: "button-custom",
                                                    style: {
                                                        fontFamily: "sans-serif",
                                                        color: "white"
                                                    },
                                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].BacaSelanjutnya_content */ .Z.BacaSelanjutnya_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_home_riset_unggulan_penelitian__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                        content: selectedFocus
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_home_index_research__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        contents: indexResearch || [],
                        language: language
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-lembagapenelitianteks",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-lembagapenelitianteks_wrapper",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-8",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "section-lembagapenelitianteks__title",
                                            children: [
                                                (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].LP */ .Z.LP)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language)),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Universitas Sumatera Utara"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-7 justify-content-left text-left",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "section-lembagapenelitianteks__detail",
                                            children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_5__/* ["default"].LP_outline */ .Z.LP_outline)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "section-lembagapenelitian-img",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lembagapenelitian-img__image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/images/dekor1.jpeg",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/images/F2.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/images/F3.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "faculty-intro__desc",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "button-link",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "button-link__title",
                                href: "https://penelitian.usu.ac.id/",
                                children: "KUNJUNGI LAMAN"
                            })
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

/***/ 4612:
/***/ ((module) => {

module.exports = require("dateformat");

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

/***/ 8073:
/***/ ((module) => {

module.exports = require("react-animate-on-scroll");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378,8577,3717,7969,1294], () => (__webpack_exec__(2615)));
module.exports = __webpack_exports__;

})();