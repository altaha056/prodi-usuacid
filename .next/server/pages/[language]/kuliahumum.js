"use strict";
(() => {
var exports = {};
exports.id = 2028;
exports.ids = [2028,5319,2869,3369];
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

/***/ 8790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PublicLectureMaker)
/* harmony export */ });
class PublicLectureMaker {
    static create(event) {
        return {
            id: event.id,
            description: event.description,
            link: event.link,
            photo: event.photo,
            lecturerName: event.lecture_name,
            profession: event.profession,
            language: event.language,
            date: event.created_at || null
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

/***/ 4047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ kuliahumum),
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
// EXTERNAL MODULE: ./models/public-lecture.ts
var public_lecture = __webpack_require__(8790);
// EXTERNAL MODULE: ./page-components/common/loader2.tsx
var loader2 = __webpack_require__(7145);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
;// CONCATENATED MODULE: external "reactjs-popup"
const external_reactjs_popup_namespaceObject = require("reactjs-popup");
var external_reactjs_popup_default = /*#__PURE__*/__webpack_require__.n(external_reactjs_popup_namespaceObject);
// EXTERNAL MODULE: ./config/dateformat.tsx
var dateformat = __webpack_require__(6221);
;// CONCATENATED MODULE: ./page-components/common/kuliahumum-list.tsx
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/iframe-has-title */ 








const ArticleList = ({ photo , lecturerName , profession , description , link , date ,  })=>{
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: " ftc-no-pb",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "article-item row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pl-md-0 ml-md-0 col-md-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: photo,
                                alt: description,
                                className: "article-thum"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "article-detail-item col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_animate_on_scroll_default()), {
                                animateIn: "fadeInUp",
                                animateOnce: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "name",
                                        children: lecturerName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: profession
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "post-date-author",
                                        children: (0,dateformat/* default */.Z)(date, "mmmm. dd, yyyy")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_reactjs_popup_default()), {
                                            trigger: // eslint-disable-next-line react/jsx-wrap-multilines
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn btn-outline-primary",
                                                type: "button",
                                                style: {
                                                    backgroundColor: "transparent",
                                                    color: "green",
                                                    borderColor: "green"
                                                },
                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.lihatvideo */.Z.lihatvideo)((0,check_language/* selectLanguage */.V)(language))
                                            }),
                                            on: "click",
                                            open: isOpen,
                                            onOpen: ()=>setIsOpen(!isOpen),
                                            position: "right center",
                                            contentStyle: {
                                                width: "510px",
                                                height: "310px",
                                                background: "transparent",
                                                border: "0px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "popup-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "close-icon",
                                                            onClick: ()=>setIsOpen(!isOpen),
                                                            children: "x"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                                            src: link,
                                                            width: "100%",
                                                            height: "400",
                                                            allowFullScreen: true,
                                                            style: {
                                                                position: "relative",
                                                                display: "block"
                                                            }
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const kuliahumum_list = (ArticleList);

// EXTERNAL MODULE: ./helpers/infinite-scroll.ts
var infinite_scroll = __webpack_require__(668);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./pages/[language]/kuliahumum/index.tsx
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
        // const response = await axios.get(`/photos?lang=${context.params.language}&menu=public_lecture`);
        const response = await axios/* default.get */.Z.get(`/public-lecture?lang=id`);
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
const KuliahUmumPage = ({ photos  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const url = `/public-lecture?lang=${language}&limit=50&selected=true&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(0);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page + 1}`);
    const { data: agendasRes , error  } = external_swr_default()(fetchUrl);
    const { 0: agendas , 1: setAgendas  } = (0,external_react_.useState)(undefined);
    const { 0: totalagenda , 1: setTotalagenda  } = (0,external_react_.useState)(0);
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
        agendas
    ]);
    // create data //
    const createResearch = ()=>{
        const temp = agendasRes.data?.map((research)=>public_lecture/* PublicLectureMaker.create */.I.create(research));
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
    // const LoadMore = () => {
    //   if (typeof agendas !== 'undefined') {
    //     return isFetching && totalagenda > agendas?.length ? (
    //       <div className="d-flex justify-content-center mt-3">
    //         <img src="/images/spinner.gif" alt="spinner" />
    //       </div>
    //     ) : null;
    //   }
    //   return null;
    // };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kuliahumum */.Z.kuliahumum)((0,check_language/* selectLanguage */.V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "ftco-section ftc-no-pb ftco-section--top",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
                                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.beranda_content */.Z.beranda_content)((0,check_language/* selectLanguage */.V)(language)),
                                            " ",
                                            "/ ",
                                            ""
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hijau",
                                        style: {
                                            color: "#28a745"
                                        },
                                        href: "",
                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kuliahumum_content */.Z.kuliahumum_content)((0,check_language/* selectLanguage */.V)(language))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "mb-4 judul-laman",
                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kuliahumum_content */.Z.kuliahumum_content)((0,check_language/* selectLanguage */.V)(language))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row another-articles",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: typeof agendas === "undefined" ? [
                                    ...Array(4)
                                ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(loader2/* ArticleLoader */.W, {}, index)) : agendas.map((item)=>// eslint-disable-next-line react/jsx-indent
                                    /*#__PURE__*/ jsx_runtime_.jsx(kuliahumum_list, {
                                        ...item,
                                        language: language
                                    }, item.id))
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const kuliahumum = (KuliahUmumPage);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(4047)));
module.exports = __webpack_exports__;

})();