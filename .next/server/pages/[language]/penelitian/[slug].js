"use strict";
(() => {
var exports = {};
exports.id = 5842;
exports.ids = [5842,5319];
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

/***/ 5646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ArticleMaker)
/* harmony export */ });
class ArticleMaker {
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
            // date: event.created_at,
            language: event.language,
            slug: event.slug,
            authordiv: event.authordiv || null,
            photographer: event.photographer || null,
            photographerdiv: event.photographerdiv || null,
            interviewees: event.interviewees || null,
            intervieweesdiv: event.intervieweesdiv || null,
            imagetitle: event.imagetitle || null,
            subtitle: event.subtitle || null,
            inset: event.inset || null
        };
    }
}


/***/ }),

/***/ 7585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
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
// EXTERNAL MODULE: ./models/article.ts
var models_article = __webpack_require__(5646);
// EXTERNAL MODULE: ./page-components/common/loader.tsx
var loader = __webpack_require__(3614);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
;// CONCATENATED MODULE: ./page-components/common/penelitian-list.tsx


// import Link from 'next/link';

const ArticleList = ({ image , title , description , shortDescription , subtitle , inset ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftc-no-pb",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "article-item",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        style: {
                            color: "black"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: title
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "article-item",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                        animateIn: "fadeInUp",
                        animateOnce: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "abstract",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "hijau",
                                    children: shortDescription
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pl-md-8 ml-md-8 mb-8",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "article-description",
                                        dangerouslySetInnerHTML: {
                                            __html: description
                                        }
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
/* harmony default export */ const penelitian_list = (ArticleList);

// EXTERNAL MODULE: ./helpers/infinite-scroll.ts
var infinite_scroll = __webpack_require__(668);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./pages/[language]/penelitian/[slug].tsx
/* eslint-disable react/no-danger */ /* eslint-disable prettier/prettier */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 












async function getStaticPaths() {
    try {
        const response = await Promise.all([
            axios/* default.get */.Z.get("/slug/all?lang=id&menu=article"),
            axios/* default.get */.Z.get("/slug/all?lang=en&menu=article"), 
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
        const response = await axios/* default.get */.Z.get(`/article/${context.params.slug}`);
        const article = models_article/* ArticleMaker.create */.B.create(response.data.data) || null;
        return {
            props: {
                article
            },
            revalidate: 30
        };
    } catch (e) {
        return {
            props: {
                article: null
            },
            revalidate: 30
        };
    }
};
const ArticleDetailPage = ({ article  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    console.log(article);
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const url = `/article?lang=${language}&limit=1&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page}`);
    const { data: researchesRes , error  } = external_swr_default()(fetchUrl);
    const { 0: researches , 1: setResearches  } = (0,external_react_.useState)(undefined);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,external_react_.useState)(0);
    if ([
        typeof article
    ].includes("undefined") || router.isFallback) {
        (0,external_react_.useEffect)(()=>{
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
    const [isFetching, setIsFetching] = (0,infinite_scroll/* default */.Z)(handleLoadMore, "article-item");
    (0,external_react_.useEffect)(()=>{
        setIsFetching(false);
    }, [
        researches
    ]);
    // create data //
    const createResearch = ()=>{
        const temp = researchesRes.data.data?.map((rs)=>models_article/* ArticleMaker.create */.B.create(rs));
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
    const LoadMore = ()=>{
        if (typeof researches !== "undefined") {
            return isFetching && totalresearch > researches?.length ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "d-flex justify-content-center mt-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/spinner.gif",
                    alt: "spinner"
                })
            }) : null;
        }
        return null;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.risetUnggulan */.Z.risetUnggulan)((0,check_language/* selectLanguage */.V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container pb-3 pt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row mt-5 cml",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md mt-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "article-title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: article?.title
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row with-border article-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: article?.image,
                                    alt: article?.title,
                                    className: "article-image"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md",
                                id: "article-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "article-description",
                                    dangerouslySetInnerHTML: {
                                        __html: article?.description || ""
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row another-articles",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "another-article-title",
                                    children: "Lainnya"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: typeof researches === "undefined" ? [
                                        ...Array(4)
                                    ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(loader/* ArticleLoader */.W, {}, index)) : researches.map((item)=>// eslint-disable-next-line react/jsx-indent
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(penelitian_list, {
                                                ...item,
                                                language: language
                                            })
                                        }, item.id))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(LoadMore, {})
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _slug_ = (ArticleDetailPage);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378,3614], () => (__webpack_exec__(7585)));
module.exports = __webpack_exports__;

})();