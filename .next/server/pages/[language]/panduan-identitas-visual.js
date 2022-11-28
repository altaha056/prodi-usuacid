"use strict";
(() => {
var exports = {};
exports.id = 5179;
exports.ids = [5179,5319];
exports.modules = {

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInfiniteScroll = (callback, component)=>{
    const { 0: isFetching , 1: setIsFetching  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleScroll = ()=>{
        const wrappedElement = document.getElementById(component);
        if (wrappedElement) {
            if (window.innerHeight + document.documentElement.scrollTop < wrappedElement.offsetHeight + 100 || isFetching) return;
            setIsFetching(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isFetching) return;
        callback();
    }, [
        isFetching
    ]);
    return [
        isFetching,
        setIsFetching
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);


/***/ }),

/***/ 7145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ ArticleLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const ArticleLoader = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        width: "100%",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
            x: "0",
            y: "0",
            rx: "5",
            ry: "0",
            width: "0",
            height: "0"
        })
    });


/***/ }),

/***/ 8919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ panduan_identitas_visual),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./models/identity.ts
class IdentityMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            shortDescription: event.shortDescription || null,
            image: event.image,
            link: event.link,
            language: event.language,
            slug: event.slug
        };
    }
}

// EXTERNAL MODULE: ./page-components/common/loader2.tsx
var loader2 = __webpack_require__(7145);
;// CONCATENATED MODULE: ./page-components/common/panduan-list.tsx
/* eslint-disable jsx-a11y/anchor-has-content */ /* eslint-disable jsx-a11y/control-has-associated-label */ /* eslint-disable react/jsx-no-target-blank */ 

const ArticleList = ({ title , link , shortDescription  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "article-item row",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "wpb_wrapper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "admission_blue",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "title",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "footer__school-title",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: link,
                                        target: "_blank",
                                        className: "footer__school-title-link",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "footer__school-title-text",
                                                style: {
                                                    color: "black"
                                                },
                                                children: title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                className: "footer__school-title-arrow-icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                    xlinkHref: "#arrow-right",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        id: "arrow-right",
                                                        viewBox: "0 0 25 26",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                                y1: "13",
                                                                x2: "24",
                                                                y2: "13",
                                                                vectorEffect: "non-scaling-stroke",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                                x1: "24.2628",
                                                                y1: "13.6757",
                                                                x2: "12.5863",
                                                                y2: "0.937701",
                                                                vectorEffect: "non-scaling-stroke",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                                y1: "-1",
                                                                x2: "17.28",
                                                                y2: "-1",
                                                                transform: "matrix(-0.675725 0.737154 0.737154 0.675725 25 13)",
                                                                vectorEffect: "non-scaling-stroke",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "footer__school-desc",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: shortDescription
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content_admission"
                        })
                    ]
                })
            })
        })
    });
/* harmony default export */ const panduan_list = (ArticleList);

// EXTERNAL MODULE: ./helpers/infinite-scroll.ts
var infinite_scroll = __webpack_require__(668);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./pages/[language]/panduan-identitas-visual/index.tsx
/* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 












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
    const lang = await (0,check_language/* default */.Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await axios/* default.get */.Z.get(`/photos?lang=${context.params.language}&selected=true&menu=identity&`);
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
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const url = `/identity?lang=${language}&selected=true&limit=6&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page}`);
    const { data: researchesRes , error  } = external_swr_default()(fetchUrl);
    const { 0: researches , 1: setResearches  } = (0,external_react_.useState)(undefined);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,external_react_.useState)(0);
    // infinite scroll //
    const handleLoadMore = ()=>{
        const nextPage = page + 1;
        setPage(nextPage);
        setFetchUrl(`${url}page=${nextPage}`);
    };
    const [isFetching, setIsFetching] = (0,infinite_scroll/* default */.Z)(handleLoadMore, "article-item");
    (0,external_react_.useEffect)(()=>{
        setIsFetching(false);
    }, [
        researches
    ]);
    // create data //
    const createResearch = ()=>{
        const temp = researchesRes.data.data?.map((article)=>IdentityMaker.create(article));
        if (typeof researches === "undefined") {
            setResearches(temp);
        } else {
            setResearches([
                ...researches,
                ...temp
            ]);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (researchesRes) {
            setTimeout(createResearch, 1000);
            setTotalresearch(researchesRes.data.totalItems);
        }
    }, [
        researchesRes
    ]);
    (0,external_react_.useEffect)(()=>{
        if (error) {
            setResearches([]);
        }
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.panduan */.Z.panduan)((0,check_language/* selectLanguage */.V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "ftco-section ftc-no-pb ftco-section--top",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row no-gutters",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "subheading",
                                        style: {
                                            color: "#000000"
                                        },
                                        href: "/",
                                        children: [
                                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.beranda */.Z.beranda)((0,check_language/* selectLanguage */.V)(language)),
                                            " /"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hijau",
                                        href: "",
                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.panduan_content */.Z.panduan_content)((0,check_language/* selectLanguage */.V)(language))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mb-4 judul-laman",
                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.panduan_content */.Z.panduan_content)((0,check_language/* selectLanguage */.V)(language))
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row no-gutters",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-center",
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.panduan */.Z.panduan)((0,check_language/* selectLanguage */.V)(language))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "article-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "pl-md-0 ml-md-0 mb-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "subheading",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row",
                                                children: typeof researches === "undefined" ? [
                                                    ...Array(3)
                                                ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(loader2/* ArticleLoader */.W, {}, index)) : researches.map((item)=>// eslint-disable-next-line react/jsx-indent
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-md-4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(panduan_list, {
                                                            ...item,
                                                            language: language
                                                        })
                                                    }, item.id))
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const panduan_identitas_visual = (ArticlePage);


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

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

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
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(8919)));
module.exports = __webpack_exports__;

})();