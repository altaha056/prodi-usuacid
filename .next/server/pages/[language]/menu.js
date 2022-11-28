"use strict";
(() => {
var exports = {};
exports.id = 7026;
exports.ids = [7026,8882,5319,9677];
exports.modules = {

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

/***/ 363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu),
  "getStaticPaths": () => (/* binding */ menu_getStaticPaths),
  "getStaticProps": () => (/* binding */ menu_getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./config/axios.tsx
var config_axios = __webpack_require__(7318);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./page-components/home/figure.tsx
/* eslint-disable react/no-danger */ 







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
    const lang = await checkLanguage(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await axios.get(`/contents?lang=${context.params.language}&selected=true&menu=figure`);
        return {
            props: {
                contents: response.data.data
            },
            revalidate: 30
        };
    } catch (e) {
        return {
            props: {
                contents: []
            },
            revalidate: 30
        };
    }
};
const FigureItem = ({ type , selected , name , shortDescription , slug , language ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `figure-content ${type !== selected ? "hidden" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "section-option__figur__name"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "section-option__figur__selanjutnya",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/[language]/tokoh/[slug]",
                    as: `/${language}/tokoh/${slug}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "button-custom-penelitian",
                        children: [
                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.BacaSelanjutnya_content */.Z.BacaSelanjutnya_content)((0,check_language/* selectLanguage */.V)(language)),
                            "\xa0",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ion-ios-arrow-forward"
                            })
                        ]
                    })
                })
            })
        ]
    });
const FigureImage = ({ type , selected , image  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `col-md-12 p-md-5 img-2 order-md-last section-option__figur__img ${type !== selected ? "hidden" : ""}`,
        style: {
            backgroundImage: `url(${image})`
        }
    });
const Figure = ({ contents =[]  })=>{
    const { 0: selectedFigure , 1: setSelectedFigure  } = (0,external_react_.useState)("DOSEN");
    const changeFigure = (type)=>{
        setSelectedFigure(type);
    };
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const selectedLanguage = (0,check_language/* selectLanguage */.V)(language);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-md-12",
            children: [
                contents.map((content)=>/*#__PURE__*/ jsx_runtime_.jsx(FigureImage, {
                        ...content,
                        type: content.category,
                        selected: selectedFigure
                    }, content.id)),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "figure-content-wrapper",
                        children: contents.map((content)=>/*#__PURE__*/ jsx_runtime_.jsx(FigureItem, {
                                ...content,
                                type: content.category,
                                selected: selectedFigure
                            }, content.id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const home_figure = (Figure);

// EXTERNAL MODULE: ./models/figure.ts
var models_figure = __webpack_require__(4807);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
// EXTERNAL MODULE: ./pages/[language]/menu/menu-agenda.tsx
var menu_agenda = __webpack_require__(1002);
;// CONCATENATED MODULE: ./pages/[language]/menu/index.tsx
/* eslint-disable react/jsx-one-expression-per-line */ 













async function menu_getStaticPaths() {
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
const menu_getStaticProps = async (context)=>{
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
        const response = await Promise.all([
            config_axios/* default.get */.Z.get(`/figure?lang=${lang.value}`), 
        ]);
        console.log(response[0].data);
        let figureRes = [];
        response[0].data.data?.forEach((res)=>{
            if (res) {
                figureRes = [
                    ...figureRes,
                    res
                ];
            }
        });
        const figure = figureRes.map((res)=>models_figure/* FigureMaker.create */.l.create(res));
        return {
            props: {
                figure
            },
            revalidate: 30
        };
    } catch (e) {
        console.log("ERROR: ");
        console.log(e);
        return {
            props: {
                figure: []
            },
            revalidate: 30
        };
    }
};
const Home = ({ figure  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.beranda */.Z.beranda)((0,check_language/* selectLanguage */.V)(language)),
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row no-gutters",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: "ftco-section",
                                style: {
                                    marginTop: "50px"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row no-gutters",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-option__direktori",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://direktori.usu.ac.id/",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    style: {
                                                                        color: "black"
                                                                    },
                                                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.direktori */.Z.direktori)((0,check_language/* selectLanguage */.V)(language))
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                                className: "section-option__garisabu"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://portal.usu.ac.id/login/login.php",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    style: {
                                                                        color: "black"
                                                                    },
                                                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.Portal */.Z.Portal)((0,check_language/* selectLanguage */.V)(language))
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                                className: "section-option__garisabu"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "https://ppid.usu.ac.id/images/petaUSU.pdf",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    style: {
                                                                        color: "black"
                                                                    },
                                                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.Peta */.Z.Peta)((0,check_language/* selectLanguage */.V)(language))
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                                className: "section-option__garisabu"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "section-option__direktor2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "section-option__artikel",
                                                        children: "Agenda"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(menu_agenda["default"], {
                                                        photos: []
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(home_figure, {
                                contents: figure || [],
                                language: language
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const menu = (Home);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378,8227,1002], () => (__webpack_exec__(363)));
module.exports = __webpack_exports__;

})();