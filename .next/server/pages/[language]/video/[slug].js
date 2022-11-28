"use strict";
(() => {
var exports = {};
exports.id = 3432;
exports.ids = [3432];
exports.modules = {

/***/ 2495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ VideoMaker)
/* harmony export */ });
class VideoMaker {
    static create(event) {
        return {
            id: event.id,
            description: event.description,
            link: event.link,
            photo: event.photo,
            name: event.name,
            field: event.field,
            language: event.language,
            slug: event.slug || null,
            date: event.created_at || null
        };
    }
}


/***/ }),

/***/ 7350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3271);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6378);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_video__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2495);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7318);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8073);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_9__);
/* eslint-disable jsx-a11y/iframe-has-title */ /* eslint-disable react/jsx-closing-tag-location */ /* eslint-disable react/no-danger */ /* eslint-disable prettier/prettier */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 











async function getStaticPaths() {
    try {
        const response = await Promise.all([
            _config_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].get */ .Z.get("/slug/all?lang=id&menu=video"),
            _config_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].get */ .Z.get("/slug/all?lang=en&menu=video"), 
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
    } catch (_) {
        return {
            paths: [
                {
                    params: {
                        language: "id",
                        slug: "-"
                    }
                },
                {
                    params: {
                        language: "en",
                        slug: "-"
                    }
                }, 
            ],
            fallback: true
        };
    }
}
const getStaticProps = async (context)=>{
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].get */ .Z.get(`/video/${context.params.slug}`);
        const streaming = _models_video__WEBPACK_IMPORTED_MODULE_11__/* .VideoMaker.create */ .F.create(response.data.data) || null;
        return {
            props: {
                streaming
            },
            revalidate: 30
        };
    } catch (e) {
        return {
            props: {
                streaming: null
            },
            revalidate: 30
        };
    }
};
const ResearchDetailPage = ({ streaming  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_9___default().initialize("UA-152557781-1");
    if (false) {}
    // console.log(streaming);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { language  } = router.query;
    const url = `/video?lang=${language}&limit=20&`;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(`${url}page=${page}`);
    const { data: researchesRes , error  } = swr__WEBPACK_IMPORTED_MODULE_5___default()(fetchUrl);
    const { 0: researches , 1: setResearches  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    if ([
        typeof streaming
    ].includes("undefined") || router.isFallback) {
        (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
            router.push(`/${language}`);
        });
    // return <LoadingSSO />;
    }
    // infinite scroll //
    const handleLoadMore = ()=>{
        const nextPage = page + 1;
        setPage(nextPage);
        setFetchUrl(`${url}page=${nextPage}`);
    };
    // create data //
    const createResearch = ()=>{
        const temp = researchesRes.data.data?.map((rs)=>_models_video__WEBPACK_IMPORTED_MODULE_11__/* .VideoMaker.create */ .F.create(rs));
        if (typeof researches === "undefined") {
            setResearches(temp);
        } else {
            setResearches([
                ...researches,
                ...temp
            ]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (researchesRes) {
            setTimeout(createResearch, 1000);
            setTotalresearch(researchesRes.data.totalItems);
        }
    }, [
        researchesRes
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (error) {
            setResearches([]);
        }
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vidio */ .Z.vidio)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* .selectLanguage */ .V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "ftco-section ftc-no-pb ftco-section--article-page ftco-section--top",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row no-gutters",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "md-5 ml-md-6 col-md-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "subheading",
                                            style: {
                                                color: "#000000"
                                            },
                                            href: "/",
                                            children: [
                                                (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].beranda_content */ .Z.beranda_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* .selectLanguage */ .V)(language)),
                                                ` / `
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "hijau",
                                            href: "",
                                            children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vidio_content */ .Z.vidio_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* .selectLanguage */ .V)(language))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "mb-4 judul-laman",
                                            children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].vidio_content */ .Z.vidio_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* .selectLanguage */ .V)(language))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "ml-5"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-9 ml-md-5 wrap-about 8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        animateIn: "fadeInUp",
                                        animateOnce: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "heading-section",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "pl-md-2 ml-md-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "subheading",
                                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].streaming */ .Z.streaming)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* .selectLanguage */ .V)(language))
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "mb-8",
                                                        children: streaming ? streaming.description : ""
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row no-gutters",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-3 p-md-0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "comment-list",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "article-item row",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "comment-body",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "hijau tebal",
                                                            children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].narasumber */ .Z.narasumber)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* .selectLanguage */ .V)(language))
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: {
                                                                fontWeight: "bold"
                                                            },
                                                            children: streaming?.name
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "article-item row",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "comment-body",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "hijau tebal",
                                                            children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].topik */ .Z.topik)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* .selectLanguage */ .V)(language))
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            style: {
                                                                fontWeight: "bold"
                                                            },
                                                            children: streaming?.field
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "article-item row",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "comment-body",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "hijau tebal",
                                                            children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].bagikan_artikel */ .Z.bagikan_artikel)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_10__/* .selectLanguage */ .V)(language))
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.FacebookShareButton, {
                                                            url: `www.usu.ac.id/${language}/streaming/${streaming ? streaming.slug : ""}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.FacebookIcon, {
                                                                size: 24,
                                                                round: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: url
                                                                })
                                                            })
                                                        }),
                                                        "\xa0",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.TwitterShareButton, {
                                                            url: `www.usu.ac.id/${language}/streaming/${streaming ? streaming.slug : ""}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.TwitterIcon, {
                                                                size: 24,
                                                                round: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: url
                                                                })
                                                            })
                                                        }),
                                                        "\xa0",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.WhatsappShareButton, {
                                                            url: `www.usu.ac.id/${language}/streaming/${streaming ? streaming.slug : ""}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_8__.WhatsappIcon, {
                                                                size: 24,
                                                                round: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: url
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-9 pl-0 ml-md-0 wrap-about 8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "heading-section mb-3 pl-md-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            animateIn: "fadeInUp",
                                            animateOnce: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    maxWidth: "100%",
                                                    position: "relative",
                                                    display: "block"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                    src: streaming?.link,
                                                    width: "100%",
                                                    height: "400",
                                                    allowFullScreen: true
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "garis-hijau"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResearchDetailPage);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 8073:
/***/ ((module) => {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ 3082:
/***/ ((module) => {

module.exports = require("react-ga");

/***/ }),

/***/ 6158:
/***/ ((module) => {

module.exports = require("react-share");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(7350)));
module.exports = __webpack_exports__;

})();