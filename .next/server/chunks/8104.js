"use strict";
exports.id = 8104;
exports.ids = [8104];
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

/***/ 9613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ StreamingMaker)
/* harmony export */ });
class StreamingMaker {
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

/***/ 8104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu_streaming),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./models/streaming.ts
var streaming = __webpack_require__(9613);
// EXTERNAL MODULE: ./page-components/common/loader2.tsx
var loader2 = __webpack_require__(7145);
// EXTERNAL MODULE: ./config/dateformat.tsx
var dateformat = __webpack_require__(6221);
;// CONCATENATED MODULE: ./page-components/common/streaming-list-menu.tsx
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/iframe-has-title */ 




const ArticleList = ({ photo , name , slug , date , description , link ,  })=>{
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "section-menu-streaming",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-6",
                            children: [
                                "TERBARU",
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-menu__body__date",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            " ",
                                            (0,dateformat/* default */.Z)(date, "dd mmmm yyyy")
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-menu__body__title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: name
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-menu__body__isi",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: description
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section-menu__body__video",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    src: link,
                                    allowFullScreen: true
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const streaming_list_menu = (ArticleList);

// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./pages/[language]/streaming/menu-streaming.tsx
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
        const response = await axios/* default.get */.Z.get(`/streaming?lang=${lang.value}&page=1&selected=true&limit=1&`);
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
const StreamingPage1 = ({ photos  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const url = `/streaming?lang=${language}&page=1&selected=true&limit=1&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(0);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page + 1}`);
    const { data: agendasRes , error  } = external_swr_default()(fetchUrl);
    const { 0: agendas , 1: setAgendas  } = (0,external_react_.useState)(undefined);
    const { 0: totalagenda , 1: setTotalagenda  } = (0,external_react_.useState)(0);
    // infinite scroll //
    // const handleLoadMore = () => {
    //   const nextPage = page + 1;
    //   setPage(nextPage);
    //   setFetchUrl(`${url}page=${nextPage}`);
    // };
    // const [isFetching, setIsFetching] = useInfiniteScroll(
    //   handleLoadMore,
    //   'article-item'
    // );
    // useEffect(() => {
    //   setIsFetching(false);
    // }, [agendas]);
    // create data //
    const createResearch = ()=>{
        const temp = agendasRes.data?.map((research)=>streaming/* StreamingMaker.create */.h.create(research));
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
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: typeof agendas === "undefined" ? [
            ...Array(4)
        ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(loader2/* ArticleLoader */.W, {}, index)) : agendas.map((item)=>// eslint-disable-next-line react/jsx-indent
            /*#__PURE__*/ jsx_runtime_.jsx(streaming_list_menu, {
                ...item,
                language: language
            }, item.id))
    });
};
/* harmony default export */ const menu_streaming = (StreamingPage1);


/***/ })

};
;