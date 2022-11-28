"use strict";
(() => {
var exports = {};
exports.id = 3921;
exports.ids = [3921,7754];
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

/***/ 4807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ FigureMaker)
/* harmony export */ });
class FigureMaker {
    static create(event) {
        return {
            id: event.id,
            name: event.name,
            image: event.image,
            category: event.category,
            shortDescription: event.short_description,
            description: event.description,
            language: event.language,
            slug: event.slug,
            date: event.created_at,
            author: event.author || null,
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

/***/ 3623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable react/button-has-type */ 

function App() {
    const { 0: copied , 1: setCopied  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "btn ",
        type: "",
        onClick: copy,
        style: {
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "15px",
            marginTop: "-10px"
        },
        children: "Copy link"
    });
}


/***/ }),

/***/ 6640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3271);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6378);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_figure__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4807);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7318);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8073);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_dateformat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6221);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pages_language_berita_App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3623);
/* eslint-disable react/jsx-closing-tag-location */ /* eslint-disable react/no-danger */ /* eslint-disable prettier/prettier */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 













async function getStaticPaths() {
    try {
        const response = await Promise.all([
            _config_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].get */ .Z.get("/slug/all?lang=id&menu=figure"),
            _config_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].get */ .Z.get("/slug/all?lang=en&menu=figure"), 
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
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].get */ .Z.get(`/figure/${context.params.slug}`);
        console.log(response.status);
        console.log(`ini data${response.data.data}`);
        const figure = _models_figure__WEBPACK_IMPORTED_MODULE_13__/* .FigureMaker.create */ .l.create(response.data.data) || null;
        return {
            props: {
                figure
            },
            revalidate: 30
        };
    } catch (e) {
        // console.log(e.response.data);
        // console.log(e.response.status);
        // console.log(e.response.headers);
        return {
            props: {
                figure: null
            },
            revalidate: 30
        };
    }
};
const FigureDetailPage = ({ figure  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_10___default().initialize("UA-152557781-1");
    if (false) {}
    // console.log(figure);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { language  } = router.query;
    const url = `/figure?lang=${language}&limit=10&`;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(`${url}page=${page}`);
    const { data: researchesRes , error  } = swr__WEBPACK_IMPORTED_MODULE_5___default()(fetchUrl);
    const { 0: researches , 1: setResearches  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    if ([
        typeof figure
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
        const temp = researchesRes.data.data?.map((rs)=>_models_figure__WEBPACK_IMPORTED_MODULE_13__/* .FigureMaker.create */ .l.create(rs));
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
                            `${figure?.slug}`,
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: `${figure?.shortDescription}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: `${figure?.name}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: `${getSiteUrl()}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `${figure?.image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:locale",
                        content: `${figure?.language}`
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "ftco-section ftc-no-pb ftco-section--article-page ftco-section--top",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container pb-3 pt-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-md-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "subheading",
                                    style: {
                                        color: "#000000"
                                    },
                                    href: "/",
                                    children: [
                                        (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].beranda_content */ .Z.beranda_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_12__/* .selectLanguage */ .V)(language)),
                                        " ",
                                        "/"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "hijau",
                                    href: "",
                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].tokoh_content */ .Z.tokoh_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_12__/* .selectLanguage */ .V)(language))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-4 judul-laman",
                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].tokoh_content */ .Z.tokoh_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_12__/* .selectLanguage */ .V)(language))
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "article-item row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md p-md-0 img img-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: figure?.image,
                                                alt: figure?.name,
                                                className: "article-thum"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "meta",
                                                children: figure?.imagetitle
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "comment-list",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "article-item row",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "comment-body",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "hijau tebal",
                                                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].kontributor */ .Z.kontributor)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_12__/* .selectLanguage */ .V)(language))
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: figure?.author
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "meta",
                                                                    children: figure?.authordiv
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
                                                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fotografer */ .Z.fotografer)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_12__/* .selectLanguage */ .V)(language))
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: figure?.photographer
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "meta",
                                                                    children: figure?.photographerdiv
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
                                                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].tanggal_publikasi */ .Z.tanggal_publikasi)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_12__/* .selectLanguage */ .V)(language))
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "meta",
                                                                    children: [
                                                                        (0,_config_dateformat__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(figure ? figure.date : "", "mmmm. dd, yyyy"),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                                    ]
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
                                                                    style: {
                                                                        color: "#28a745",
                                                                        fontWeight: 500
                                                                    },
                                                                    children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].bagikan_artikel */ .Z.bagikan_artikel)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_12__/* .selectLanguage */ .V)(language))
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.FacebookShareButton, {
                                                                    url: `http://www.usu.ac.id/${language}/tokoh/${figure ? figure.slug : ""}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.FacebookIcon, {
                                                                        size: 24,
                                                                        round: true,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: url
                                                                        })
                                                                    })
                                                                }),
                                                                "\xa0",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.TwitterShareButton, {
                                                                    url: `http://www.usu.ac.id/${language}/tokoh/${figure ? figure.slug : ""}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.TwitterIcon, {
                                                                        size: 24,
                                                                        round: true,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: url
                                                                        })
                                                                    })
                                                                }),
                                                                "\xa0",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.WhatsappShareButton, {
                                                                    url: `http://www.usu.ac.id/${language}/tokoh/${figure ? figure.slug : ""}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_9__.WhatsappIcon, {
                                                                        size: 24,
                                                                        round: true,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: url
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_4__.StrictMode, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_language_berita_App__WEBPACK_IMPORTED_MODULE_11__["default"], {})
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-7 wrap-about pb-md-5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            animateIn: "fadeInUp",
                                            animateOnce: true,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "heading-section mb-5 pl-md-5 heading-section-with-line",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "pl-md-0 ml-md-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "mb-4",
                                                            children: figure?.name
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "pl-md-0 ml-md-0 mb-0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "article-description",
                                                        dangerouslySetInnerHTML: {
                                                            __html: figure?.description || ""
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row article-container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md",
                                id: "article-item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "article-description"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FigureDetailPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(6640)));
module.exports = __webpack_exports__;

})();