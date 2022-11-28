"use strict";
(() => {
var exports = {};
exports.id = 5627;
exports.ids = [5627];
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

/***/ 8705:
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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_article__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5646);
/* harmony import */ var helpers_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(668);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7318);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_8__);
/* eslint-disable react/no-danger */ /* eslint-disable prettier/prettier */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 










async function getStaticPaths() {
    try {
        const response = await Promise.all([
            _config_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get("/slug/all?lang=id&menu=article"),
            _config_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get("/slug/all?lang=en&menu=article"), 
        ]);
        const idParams = response[0].data.data.map((article)=>{
            return {
                params: {
                    language: "id",
                    article
                }
            };
        });
        const enParams = response[1].data.data.map((article)=>{
            return {
                params: {
                    language: "en",
                    article
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
                        article: "-"
                    }
                },
                {
                    params: {
                        language: "en",
                        article: "-"
                    }
                }, 
            ],
            fallback: true
        };
    }
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
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_7__/* ["default"].get */ .Z.get(`/article/${context.params.article}`);
        const article = _models_article__WEBPACK_IMPORTED_MODULE_10__/* .ArticleMaker.create */ .B.create(response.data.data) || null;
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
const ResearchDetailPage = ({ article  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_8___default().initialize("UA-152557781-1");
    if (false) {}
    // console.log(article);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { language  } = router.query;
    const url = `/article?lang=${language}&limit=4&`;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(`${url}page=${page}`);
    const { data: articleRes , error  } = swr__WEBPACK_IMPORTED_MODULE_5___default()(fetchUrl);
    const { 0: articles , 1: setArticles  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);
    const { 0: totalarticle , 1: setTotalarticle  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    if ([
        typeof article
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
    const [isFetching, setIsFetching] = (0,helpers_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(handleLoadMore, "article-item");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setIsFetching(false);
    }, [
        articles
    ]);
    // create data //
    const createResearch = ()=>{
        const temp = articleRes.data.data?.map((rs)=>_models_article__WEBPACK_IMPORTED_MODULE_10__/* .ArticleMaker.create */ .B.create(rs));
        if (typeof articles === "undefined") {
            setArticles(temp);
        } else {
            setArticles([
                ...articles,
                ...temp
            ]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (articleRes) {
            setTimeout(createResearch, 1000);
            setTotalarticle(articleRes.data.totalItems);
        }
    }, [
        articleRes
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (error) {
            setArticles([]);
        }
    }, [
        error
    ]);
    // const LoadMore = () => {
    //   if (typeof articles !== 'undefined') {
    //     return isFetching && totalarticle > articles?.length ? (
    //       <div className="d-flex justify-content-center mt-3">
    //         <img src="/images/spinner.gif" alt="spinner" />
    //       </div>
    //     ) : null;
    //   }
    //   return null;
    // };
    const getSiteUrl = ()=>{
        if (false) {}
        return null;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].tentangUSU */ .Z.tentangUSU)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_9__/* .selectLanguage */ .V)(language)),
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: `${article?.shortDescription}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: `${article?.title}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: `${getSiteUrl()}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `${article?.image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:locale",
                        content: `${article?.language}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.bubble.min.css",
                        integrity: "sha512-laOBZ+/WvReCfvAK076yy3Hm3J+X1iI0wIYGMzsmm4HJbYvQdAGZZ1kszc1hVYUIZQ/faZ+eEtJVL28sxPSJag=="
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.core.min.css",
                        integrity: "sha512-AqSNjpJ7R92d+ANZrrP/hSBerCkDCQE/EILn5MylysaRmbi0Jwi56r39McL3p7LJnO+bjthpFu8GQ2y/d0fECg=="
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.snow.min.css",
                        integrity: "sha512-/FHUK/LsH78K9XTqsR9hbzr21J8B8RwHR/r8Jv9fzry6NVAOVIGFKQCNINsbhK7a1xubVu2r5QZcz2T9cKpubw=="
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "section-page schome-pengabdian section-page--pt-0 ftco-section--article-page",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "above-the-fold",
                        style: {
                            backgroundImage: `url(${article?.image})`
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "page-title",
                                children: article?.title
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-faculty-intro",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-md-12 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "faculty-intro__title ",
                                            children: article?.shortDescription
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "tulisan_justify",
                                            dangerouslySetInnerHTML: {
                                                __html: article?.description || ""
                                            }
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "button-link",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "button-link__title",
                                href: `${article?.subtitle}`,
                                children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].kunjungi */ .Z.kunjungi)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_9__/* .selectLanguage */ .V)(language))
                            })
                        })
                    })
                ]
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
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(8705)));
module.exports = __webpack_exports__;

})();