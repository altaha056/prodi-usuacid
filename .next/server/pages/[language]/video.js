"use strict";
(() => {
var exports = {};
exports.id = 3153;
exports.ids = [3153,5319,2869,3369];
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

/***/ 8479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _language_video),
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
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
// EXTERNAL MODULE: ./models/video.ts
var video = __webpack_require__(2495);
// EXTERNAL MODULE: ./page-components/common/loader2.tsx
var loader2 = __webpack_require__(7145);
// EXTERNAL MODULE: ./config/dateformat.tsx
var dateformat = __webpack_require__(6221);
;// CONCATENATED MODULE: ./page-components/common/video-list.tsx
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/iframe-has-title */ 




const ArticleList = ({ photo , name , slug , date , description , link ,  })=>{
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: " ftc-no-pb",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section-menu__lainnya__video",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    src: link,
                                    allowFullScreen: true
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-menu__lainnya__date",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: (0,dateformat/* default */.Z)(date, "dd mmmm yyyy")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-menu__lainnya__title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: name
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-menu__lainnya__deskripsi"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const video_list = (ArticleList);

// EXTERNAL MODULE: ./helpers/infinite-scroll.ts
var infinite_scroll = __webpack_require__(668);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
// EXTERNAL MODULE: ./pages/[language]/video/menu-video.tsx + 1 modules
var menu_video = __webpack_require__(8017);
;// CONCATENATED MODULE: ./pages/[language]/video/index.tsx
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
        const response = await axios/* default.get */.Z.get(`/video?lang=${lang.value}&selected=true&`);
        return {
            props: {
                photos: response.data?.data || []
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
const StreamingPage = ({ photos  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language , search  } = router.query;
    const url = `/video?lang=${language}&selected=true&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(0);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page + 1}`);
    const { data: agendasRes , error  } = external_swr_default()(fetchUrl);
    const { 0: agendas , 1: setAgendas  } = (0,external_react_.useState)(undefined);
    const { 0: filteredAgendas , 1: setfilteredAgendas  } = (0,external_react_.useState)(undefined);
    const { 0: totalagenda , 1: setTotalagenda  } = (0,external_react_.useState)(0);
    const { 0: searchKeyword , 1: setSearchKeyword  } = (0,external_react_.useState)("");
    // infinite scroll //
    const handleLoadMore = ()=>{
        const nextPage = page + 1;
        setPage(nextPage);
        setFetchUrl(`${url}page=${nextPage}`);
    };
    const [isFetching, setIsFetching] = (0,infinite_scroll/* default */.Z)(handleLoadMore, "article-item");
    (0,external_react_.useEffect)(()=>{
        if (!agendas || !search) return;
        const filteredData = agendas.filter((agenda)=>agenda.name.toLowerCase().includes(search.toString().toLowerCase()));
        setfilteredAgendas(filteredData);
        setSearchKeyword(search.toString());
    }, [
        router.query,
        agendas
    ]);
    (0,external_react_.useEffect)(()=>{
        setIsFetching(false);
    }, [
        agendas
    ]);
    const handleSearch = ()=>{
        const pathName = router.asPath.split("?")[0];
        router.push(`${pathName}?search=${searchKeyword}`);
    };
    // create data //
    const createResearch = ()=>{
        const temp = agendasRes.data?.map((research)=>video/* VideoMaker.create */.F.create(research));
        if (typeof agendas === "undefined") {
            console.log(page);
            setAgendas(temp);
        } else {
            setAgendas([
                ...agendas,
                ...temp
            ]);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (agendasRes) {
            setTimeout(createResearch, 1000);
            setTotalagenda(agendasRes.data.totalItems);
        }
    }, [
        agendasRes
    ]);
    (0,external_react_.useEffect)(()=>{
        if (error) {
            setAgendas([]);
        }
    }, [
        error
    ]);
    const selectedLanguage = (0,check_language/* selectLanguage */.V)(language);
    const param = `/${selectedLanguage}`;
    const newAgendas = search ? filteredAgendas : agendas?.slice(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.vidio */.Z.vidio)((0,check_language/* selectLanguage */.V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "ftco-section ftc-no-pb ftco-section--top streaming-page",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row no-gutters",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pr-md-5 mr-md-5 mb-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "nav nav-pills",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "aria-hidden": true,
                                                    className: `nav-link figure  ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita */.Z.berita)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
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
                                                    style: {
                                                        borderBottom: "3px solid rgb(0, 105, 55)"
                                                    },
                                                    className: `nav-link active figure ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.vidio */.Z.vidio)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
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
                        !search && /*#__PURE__*/ jsx_runtime_.jsx(menu_video["default"], {
                            photos: null
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
                                                placeholder: "Pencarian Video Informatif",
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
                                        children: search ? `Search: ${search}` : "VIDEO LAINNYA"
                                    }),
                                    typeof newAgendas === "undefined" ? [
                                        ...Array(4)
                                    ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(loader2/* ArticleLoader */.W, {}, index)) : newAgendas.map((item)=>// eslint-disable-next-line react/jsx-indent
                                        /*#__PURE__*/ jsx_runtime_.jsx(video_list, {
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
/* harmony default export */ const _language_video = (StreamingPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378,8017], () => (__webpack_exec__(8479)));
module.exports = __webpack_exports__;

})();