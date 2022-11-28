"use strict";
exports.id = 100;
exports.ids = [100];
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

/***/ 3134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ LeaderMaker)
/* harmony export */ });
class LeaderMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            name: event.name || null,
            image: event.image,
            shortDescription: event.short_description || null,
            description: event.description,
            author: event.author,
            authordiv: event.authordiv || null,
            photographer: event.photographer || null,
            photographerdiv: event.photographerdiv || null,
            interviewees: event.interviewees || null,
            intervieweesdiv: event.intervieweesdiv || null,
            language: event.language,
            slug: event.slug,
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

/***/ 100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pimpinan_universitas),
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
// EXTERNAL MODULE: ./models/leader.ts
var leader = __webpack_require__(3134);
// EXTERNAL MODULE: ./page-components/common/loader2.tsx
var loader2 = __webpack_require__(7145);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./page-components/common/pimpinan-list.tsx



const ArticleList = ({ image , name , title , slug , language ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "ftc-no-pb",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                    children: [
                        "\xa0",
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "section-body-pimpinan__img",
                            src: image
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "section-body-pimpinan__name",
                        children: name
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/[language]/pimpinan_universitas/[slug]",
                        as: `/${language}/pimpinan_universitas/${slug}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "section-body-pimpinan__title",
                            children: title
                        })
                    })
                })
            })
        ]
    });
/* harmony default export */ const pimpinan_list = (ArticleList);

// EXTERNAL MODULE: ./helpers/infinite-scroll.ts
var infinite_scroll = __webpack_require__(668);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./pages/[language]/pimpinan_universitas/index.tsx
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
        const response = await axios/* default.get */.Z.get(`/photos?lang=${context.params.language}&selected=true&menu=leader&`);
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
    const url = `/leader?lang=${language}&selected=true&limit=6&`;
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
        const temp = researchesRes.data.data?.map((article)=>leader/* LeaderMaker.create */.v.create(article));
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
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "ftco-section ftc-no-pb ftco-section--top",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row no-gutters",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "article-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
                            style: {
                                width: "100%",
                                height: "647px",
                                border: "0"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: typeof researches === "undefined" ? [
                                        ...Array(3)
                                    ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(loader2/* ArticleLoader */.W, {}, `article-item-${index}`)) : researches.map((item)=>// eslint-disable-next-line react/jsx-indent
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(pimpinan_list, {
                                                ...item,
                                                language: language
                                            })
                                        }, item.id))
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const pimpinan_universitas = (ArticlePage);


/***/ })

};
;