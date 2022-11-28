"use strict";
(() => {
var exports = {};
exports.id = 5237;
exports.ids = [5237,8882,5319,9677,2869,3369];
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

/***/ 5628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ BulletinMaker)
/* harmony export */ });
class BulletinMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            category: event.category,
            categoryId: event.category_id,
            author: event.author,
            authordiv: event.authordiv,
            photographer: event.photographer,
            photographerdiv: event.photographerdiv,
            shortDescription: event.short_description,
            image: event.image,
            selected: event.selected,
            language: event.language,
            slug: event.slug,
            imagetitle: event.imagetitle,
            date: event.createdAt || null
        };
    }
}


/***/ }),

/***/ 1277:
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
// EXTERNAL MODULE: ./models/bulletin.ts
var bulletin = __webpack_require__(5628);
// EXTERNAL MODULE: ./page-components/common/loader.tsx
var loader = __webpack_require__(3614);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./config/dateformat.tsx
var dateformat = __webpack_require__(6221);
;// CONCATENATED MODULE: ./page-components/common/article-list-bulletin.tsx




const ArticleList = ({ title , image , slug , language , date ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section-index",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: title,
                            className: "section-index__image"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-md-9",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "section-index__tgllist",
                                children: (0,dateformat/* default */.Z)(date, "dd mmmm yyyy")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "section-index__title",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/bulletin/[slug]",
                                    as: `/${language}/bulletin/${slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: title
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "section-slug__garisabu"
                })
            })
        ]
    });
/* harmony default export */ const article_list_bulletin = (ArticleList);

// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__(6158);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./pages/[language]/bulletin/[slug].tsx















async function getStaticPaths() {
    try {
        const response = await Promise.all([
            axios/* default.get */.Z.get("/slug/all?lang=id&menu=bulletin&page=1"),
            axios/* default.get */.Z.get("/slug/all?lang=en&menu=bulletin&page=1"), 
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
        const response = await axios/* default.get */.Z.get(`/bulletin/${context.params.slug}`);
        const news = bulletin/* BulletinMaker.create */.s.create(response.data.data) || null;
        return {
            props: {
                news
            },
            revalidate: 30
        };
    } catch (e) {
        return {
            props: {
                news: null
            },
            revalidate: 30
        };
    }
};
const NewsDetailPage = ({ news  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const url = `/bulletin?lang=${language}&selected=true&page=1&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page}`);
    const { data: newsesRes , error  } = external_swr_default()(fetchUrl);
    const { 0: newses , 1: setNewses  } = (0,external_react_.useState)(undefined);
    const { 0: totalnews , 1: setTotalnews  } = (0,external_react_.useState)(0);
    if ([
        typeof news
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
    // const [isFetching, setIsFetching] = useInfiniteScroll(
    //   handleLoadMore,
    //   'article-item'
    // );
    // useEffect(() => {
    //   setIsFetching(false);
    // }, [newses]);
    // create data //
    const createNews = ()=>{
        const temp = newsesRes.data.data?.map((rs)=>bulletin/* BulletinMaker.create */.s.create(rs));
        if (typeof newses === "undefined") {
            setNewses(temp);
        } else {
            setNewses([
                ...newses,
                ...temp
            ]);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (newsesRes) {
            setTimeout(createNews, 1000);
            setTotalnews(newsesRes.data.totalItems);
        }
    }, [
        newsesRes
    ]);
    (0,external_react_.useEffect)(()=>{
        if (error) {
            setNewses([]);
        }
    }, [
        error
    ]);
    // const LoadMore = () => {
    //   if (typeof newses !== 'undefined') {
    //     return isFetching && totalnews > newses?.length ? (
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita_content */.Z.berita_content)((0,check_language/* selectLanguage */.V)(language)),
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: `${news?.shortDescription}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: `${news?.title}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `${getSiteUrl()}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: `${news?.image}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:locale",
                        content: `${news?.language}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.bubble.min.css",
                        integrity: "sha512-laOBZ+/WvReCfvAK076yy3Hm3J+X1iI0wIYGMzsmm4HJbYvQdAGZZ1kszc1hVYUIZQ/faZ+eEtJVL28sxPSJag=="
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.core.min.css",
                        integrity: "sha512-AqSNjpJ7R92d+ANZrrP/hSBerCkDCQE/EILn5MylysaRmbi0Jwi56r39McL3p7LJnO+bjthpFu8GQ2y/d0fECg=="
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.snow.min.css",
                        integrity: "sha512-/FHUK/LsH78K9XTqsR9hbzr21J8B8RwHR/r8Jv9fzry6NVAOVIGFKQCNINsbhK7a1xubVu2r5QZcz2T9cKpubw=="
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "ftco-section ftc-no-pb ftco-section--article-page ftco-section--top",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row no-gutters",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-7 ml-md-7 wrap-about 8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu__breadcrumb",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: `/${language}/berita`,
                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita_content */.Z.berita_content)((0,check_language/* selectLanguage */.V)(language))
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-slug",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "section-slug__title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    children: news?.title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "section-slug__shortdescription",
                                                children: news?.shortDescription
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-slug__info",
                                                children: [
                                                    (0,dateformat/* default */.Z)(news ? news.date : "", "dd mmmm yyyy"),
                                                    " / \xa0",
                                                    news?.author
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-slug__sosmed",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookShareButton, {
                                                        url: `https://www.usu.ac.id/${language}/bulletin/${news ? news.slug : ""}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookIcon, {
                                                            size: 24,
                                                            round: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: url
                                                            })
                                                        })
                                                    }),
                                                    "\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.TwitterShareButton, {
                                                        url: `https://www.usu.ac.id/${language}/bulletin/${news ? news.slug : ""}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.TwitterIcon, {
                                                            size: 24,
                                                            round: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: url
                                                            })
                                                        })
                                                    }),
                                                    "\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.WhatsappShareButton, {
                                                        url: `https://www.usu.ac.id/${language}/bulletin/${news ? news.slug : ""}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.WhatsappIcon, {
                                                            size: 24,
                                                            round: true,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: url
                                                            })
                                                        })
                                                    }),
                                                    "\xa0",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_.StrictMode, {})
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_animate_on_scroll_default()), {
                                        animateIn: "fadeInUp",
                                        animateOnce: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: news?.image,
                                                    alt: news?.title,
                                                    className: "article-thum"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                                                    animateIn: "fadeInUp",
                                                    animateOnce: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "section-slug__description",
                                                        dangerouslySetInnerHTML: {
                                                            __html: news?.description || ""
                                                        }
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "comment-list",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "article-item row",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "comment-body",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "section-slug__lainnya",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.liputanUtama_content */.Z.liputanUtama_content)((0,check_language/* selectLanguage */.V)(language))
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                            className: "section-slug__gariskuning"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "row",
                                                    children: typeof newses === "undefined" ? [
                                                        ...Array(4)
                                                    ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(loader/* ArticleLoader */.W, {}, index)) : newses.map((item)=>// eslint-disable-next-line react/jsx-indent
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-md-12",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(article_list_bulletin, {
                                                                ...item,
                                                                language: language
                                                            })
                                                        }, item.id))
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _slug_ = (NewsDetailPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378,3614], () => (__webpack_exec__(1277)));
module.exports = __webpack_exports__;

})();