"use strict";
(() => {
var exports = {};
exports.id = 8231;
exports.ids = [8231,8882,5319,9677,2869,3369];
exports.modules = {

/***/ 6221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4612);
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_0__);

(dateformat__WEBPACK_IMPORTED_MODULE_0___default().i18n) = {
    dayNames: [
        "Sen",
        "Sel",
        "Rab",
        "Kam",
        "Jum",
        "Sab",
        "Min",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu", 
    ],
    monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des",
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember", 
    ],
    timeNames: [
        "a",
        "p",
        "am",
        "pm",
        "A",
        "P",
        "AM",
        "PM"
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((dateformat__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

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

/***/ 6199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ NewsMenuMaker)
/* harmony export */ });
class NewsMenuMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            shortDescription: event.shortDescription || null,
            image: event.image,
            author: event.author,
            date: event.createdAt || null,
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

/***/ 3819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ list_berita),
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
// EXTERNAL MODULE: ./models/news-menu.ts
var news_menu = __webpack_require__(6199);
// EXTERNAL MODULE: ./page-components/common/loader2.tsx
var loader2 = __webpack_require__(7145);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./config/dateformat.tsx
var dateformat = __webpack_require__(6221);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
;// CONCATENATED MODULE: ./page-components/common/article-list-news-index.tsx





const ArticleList = ({ title , image , slug , language , date , shortDescription ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftc-no-pb",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "article-item row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pl-md-0 ml-md-0 col-md-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: title,
                            className: "article-thum"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-9",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_animate_on_scroll_default()), {
                            animateIn: "fadeInUp",
                            animateOnce: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/berita/[slug]",
                                    as: `/${language}/berita/${slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            style: {
                                                color: "black"
                                            },
                                            children: title
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "post-date-author",
                                    style: {
                                        color: "black"
                                    },
                                    children: (0,dateformat/* default */.Z)(date, "mmmm. dd, yyyy")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "article-description",
                                    style: {
                                        color: "black"
                                    },
                                    children: [
                                        shortDescription,
                                        " "
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
/* harmony default export */ const article_list_news_index = (ArticleList);

// EXTERNAL MODULE: ./helpers/infinite-scroll.ts
var infinite_scroll = __webpack_require__(668);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
;// CONCATENATED MODULE: ./pages/[language]/list-berita/index.tsx
/* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 













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
        const response = await axios/* default.get */.Z.get(`/photos?lang=${context.params.language}&selected=true&limit=10&menu=news-menu`);
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
const ResearchPage = ({ photos  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language , search  } = router.query;
    const url = `/news-menu?lang=${language}&selected=true&limit=10&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page}`);
    const { data: researchesRes , error  } = external_swr_default()(fetchUrl);
    const { 0: researches , 1: setResearches  } = (0,external_react_.useState)(undefined);
    const { 0: filteredAgendas , 1: setfilteredAgendas  } = (0,external_react_.useState)(undefined);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,external_react_.useState)(0);
    const { 0: searchKeyword , 1: setSearchKeyword  } = (0,external_react_.useState)("");
    // infinite scroll //
    const handleLoadMore = ()=>{
        const nextPage = page + 1;
        setPage(nextPage);
        setFetchUrl(`${url}page=${nextPage}`);
    };
    const [isFetching, setIsFetching] = (0,infinite_scroll/* default */.Z)(handleLoadMore, "article-item");
    (0,external_react_.useEffect)(()=>{
        if (!researches || !search) return;
        const filteredData = researches.filter((agenda)=>agenda.title.toLowerCase().includes(search.toString().toLowerCase()));
        setfilteredAgendas(filteredData);
        setSearchKeyword(search.toString());
    }, [
        router.query,
        researches
    ]);
    (0,external_react_.useEffect)(()=>{
        setIsFetching(false);
    }, [
        researches
    ]);
    const handleSearch = ()=>{
        const pathName = router.asPath.split("?")[0];
        router.push(`${pathName}?search=${searchKeyword}`);
    };
    // create data //
    const createResearch = ()=>{
        const temp = researchesRes.data.data?.map((dedication)=>news_menu/* NewsMenuMaker.create */.E.create(dedication)) || [];
        if (typeof researches === "undefined") {
            window.scrollTo(0, 0);
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
    const selectedLanguage = (0,check_language/* selectLanguage */.V)(language);
    const param = `/${selectedLanguage}`;
    const newAgendas = search ? filteredAgendas : researches?.slice(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita */.Z.berita)((0,check_language/* selectLanguage */.V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "ftco-section ftc-no-pb ftco-section--top streaming-pag",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row no-gutters",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pr-md-5 mr-md-5 mb-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "nav nav-pills",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "aria-hidden": true,
                                                    style: {
                                                        borderBottom: "3px solid rgb(0, 105, 55)"
                                                    },
                                                    className: `nav-link active  figure  ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita */.Z.berita)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: `${param}/berita`,
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita */.Z.berita)(selectedLanguage)
                                                    })
                                                })
                                            }, "BERITA"),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "aria-hidden": true,
                                                    className: `nav-link figure ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.vidio */.Z.vidio)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: `${param}/video`,
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.vidio */.Z.vidio)(selectedLanguage)
                                                    })
                                                })
                                            }, "VIDIO"),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "aria-hidden": true,
                                                    className: `nav-link figure ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.streaming */.Z.streaming)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: `${param}/streaming`,
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.streaming */.Z.streaming)(selectedLanguage)
                                                    })
                                                })
                                            }, "STREAMING"),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "aria-hidden": true,
                                                    className: `nav-link figure ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.jurnal */.Z.jurnal)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: `${param}/jurnal`,
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.artikel */.Z.artikel)(selectedLanguage)
                                                    })
                                                })
                                            }, "Journal")
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row another-articles",
                            id: "article-item",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-page-search",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Search, {
                                                    size: "1em"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: "search",
                                                id: "",
                                                value: searchKeyword,
                                                placeholder: "Pencarian Berita",
                                                onChange: (event)=>{
                                                    setSearchKeyword(event.target.value);
                                                },
                                                onKeyUp: (event)=>{
                                                    if (event.key === "Enter") {
                                                        handleSearch();
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: handleSearch,
                                                children: "Search"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-menu__lainnya",
                                        children: search ? `Search: ${search}` : "BERITA LAINNYA"
                                    }),
                                    typeof newAgendas === "undefined" ? [
                                        ...Array(4)
                                    ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(loader2/* ArticleLoader */.W, {}, index)) : newAgendas.map((item)=>// eslint-disable-next-line react/jsx-indent
                                        /*#__PURE__*/ jsx_runtime_.jsx(article_list_news_index, {
                                            ...item,
                                            language: language
                                        }, item.id))
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const list_berita = (ResearchPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378], () => (__webpack_exec__(3819)));
module.exports = __webpack_exports__;

})();