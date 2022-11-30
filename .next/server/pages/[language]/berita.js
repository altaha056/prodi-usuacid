"use strict";
(() => {
var exports = {};
exports.id = 1761;
exports.ids = [1761,8882];
exports.modules = {

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

/***/ 17:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ berita),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./page-components/bulletin/news.tsx
/* eslint-disable react/jsx-one-expression-per-line */ 







const ExcellentResearchItem = ({ image , title , delay , slug , language , className ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("ftco animate fadeInUp ftco-animated dedication-item", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
            animateIn: "fadeInUp",
            animateOnce: true,
            delay: delay,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "staff",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block-20",
                        style: {
                            backgroundImage: `url(${image})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dedication-item__desc",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/[language]/berita/[slug]",
                            as: `/${language}/berita/${slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text__title",
                                    children: title
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
const ExcellentResearch = ({ contents , language  })=>{
    const featuredContent = contents[0];
    const otherContent = contents.slice(1);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section article-list-page ftco-section--top",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section-category",
                        style: {
                            marginTop: "-80px"
                        },
                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.liputan */.Z.liputan)((0,check_language/* selectLanguage */.V)(language))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "dedication-item-wrap",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ExcellentResearchItem, {
                                    ...featuredContent,
                                    delay: 120,
                                    className: "primary"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4",
                                children: otherContent.map((item, index)=>/*#__PURE__*/ (0,external_react_.createElement)(ExcellentResearchItem, {
                                        ...item,
                                        key: item.id,
                                        delay: 120,
                                        className: "secondary"
                                    }))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    delay: 120 * 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/[language]/list-berita",
                        as: `/${language}/list-berita`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn-custom excelent-research",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "btn btn-outline-primary",
                                type: "button",
                                children: [
                                    "Baca Selanjutnya",
                                    " ",
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ion-ios-arrow-forward"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const news = (ExcellentResearch);
function brightness(arg0) {
    throw new Error("Function not implemented.");
}

;// CONCATENATED MODULE: ./page-components/bulletin/inovation.tsx
/* eslint-disable react/jsx-one-expression-per-line */ 





const inovation_ExcellentResearchItem = ({ image , title , delay , slug , language , className  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("ftco animate fadeInUp ftco-animated dedication-item", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
            animateIn: "fadeInUp",
            animateOnce: true,
            delay: delay,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "staff",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block-20",
                        style: {
                            backgroundImage: `url(${image})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dedication-item__desc",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/[language]/bulletin/[slug]",
                            as: `/${language}/bulletin/${slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text__title",
                                    children: title
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
const inovation_ExcellentResearch = ({ contents , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section article-list-page ftco-section--top",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section-category",
                        children: "PRESTASI DAN INOVASI"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-wrap",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: contents.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4 pb-md-4",
                                children: /*#__PURE__*/ (0,external_react_.createElement)(inovation_ExcellentResearchItem, {
                                    ...item,
                                    key: item.id,
                                    delay: 120 * (index + 1)
                                })
                            }))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    delay: 120 * 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/[language]/list-berita-prestasi-dan-inovasi",
                        as: `/${language}/list-berita-prestasi-dan-inovasi`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn-custom excelent-research",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "btn btn-outline-primary",
                                type: "button",
                                children: [
                                    "Baca Selanjutnya",
                                    " ",
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ion-ios-arrow-forward"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
/* harmony default export */ const inovation = (inovation_ExcellentResearch);
function inovation_brightness(arg0) {
    throw new Error("Function not implemented.");
}

;// CONCATENATED MODULE: ./page-components/bulletin/cooperation.tsx
/* eslint-disable react/jsx-one-expression-per-line */ 





const cooperation_ExcellentResearchItem = ({ image , title , delay , slug , language , className ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("ftco animate fadeInUp ftco-animated dedication-item", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
            animateIn: "fadeInUp",
            animateOnce: true,
            delay: delay,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "staff",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block-20",
                        style: {
                            backgroundImage: `url(${image})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dedication-item__desc",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/[language]/bulletin/[slug]",
                            as: `/${language}/bulletin/${slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text__title",
                                    children: title
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
const cooperation_ExcellentResearch = ({ contents , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section article-list-page ftco-section--top",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section-category",
                        children: "KERJA SAMA"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-wrap",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: contents.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4",
                                children: /*#__PURE__*/ (0,external_react_.createElement)(cooperation_ExcellentResearchItem, {
                                    ...item,
                                    key: item.id,
                                    delay: 120 * (index + 1)
                                })
                            }))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    delay: 120 * 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/[language]/list-berita-kerja-sama",
                        as: `/${language}/list-berita-kerja-sama`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn-custom excelent-research",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "btn btn-outline-primary",
                                type: "button",
                                children: [
                                    "Baca Selanjutnya",
                                    " ",
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ion-ios-arrow-forward"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
/* harmony default export */ const cooperation = (cooperation_ExcellentResearch);
function cooperation_brightness(arg0) {
    throw new Error("Function not implemented.");
}

;// CONCATENATED MODULE: ./page-components/bulletin/updatefaculty.tsx
/* eslint-disable react/jsx-one-expression-per-line */ 





const updatefaculty_ExcellentResearchItem = ({ image , title , delay , slug , language , className ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()("ftco animate fadeInUp ftco-animated dedication-item", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
            animateIn: "fadeInUp",
            animateOnce: true,
            delay: delay,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "staff",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block-20",
                        style: {
                            backgroundImage: `url(${image})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dedication-item__desc",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/[language]/bulletin/[slug]",
                            as: `/${language}/bulletin/${slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text__title",
                                    children: title
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
const updatefaculty_ExcellentResearch = ({ contents , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section article-list-page ftco-section--top",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "section-category",
                        children: "UPDATE FAKULTAS"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-wrap",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: contents.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-4",
                                children: /*#__PURE__*/ (0,external_react_.createElement)(updatefaculty_ExcellentResearchItem, {
                                    ...item,
                                    key: item.id,
                                    delay: 120 * (index + 1)
                                })
                            }))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    delay: 120 * 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/[language]/list-berita-update-fakultas",
                        as: `/${language}/list-berita-update-fakultas`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "btn-custom excelent-research",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "btn btn-outline-primary",
                                type: "button",
                                children: [
                                    "Baca Selanjutnya",
                                    " ",
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ion-ios-arrow-forward"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
/* harmony default export */ const updatefaculty = (updatefaculty_ExcellentResearch);
function updatefaculty_brightness(arg0) {
    throw new Error("Function not implemented.");
}

// EXTERNAL MODULE: ./models/bulletin.ts
var bulletin = __webpack_require__(5628);
// EXTERNAL MODULE: ./models/news-menu.ts
var news_menu = __webpack_require__(6199);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./pages/[language]/berita/index.tsx
/* eslint-disable react/jsx-one-expression-per-line */ 
















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
        const responses = await axios/* default.get */.Z.get(`/streaming?lang=${lang.value}&selected=true&`);
        const response = await Promise.all([
            axios/* default.get */.Z.get(`/news-menu?lang=${lang.value}&page=1&limit=3&selected=true`),
            axios/* default.get */.Z.get(`/bulletin?lang=${lang.value}&page=1&limit=6&selected=true&category_id=6234035d7390d4258500d88c`),
            axios/* default.get */.Z.get(`/bulletin?lang=${lang.value}&page=1&limit=6&selected=true&category_id=623402ee7390d4258500d889`),
            axios/* default.get */.Z.get(`/bulletin?lang=${lang.value}&page=1&limit=3&selected=true&category_id=623403947390d4258500d88f`), 
        ]);
        const berita = response[0].data.data.data?.map((res)=>news_menu/* NewsMenuMaker.create */.E.create(res));
        const bulletinInovasion = response[1].data.data.data?.map((res)=>bulletin/* BulletinMaker.create */.s.create(res));
        const bulletinCooperation = response[2].data.data.data?.map((res)=>bulletin/* BulletinMaker.create */.s.create(res));
        const bulletinFaculty = response[3].data.data.data?.map((res)=>bulletin/* BulletinMaker.create */.s.create(res));
        return {
            props: {
                berita,
                bulletinInovasion,
                bulletinCooperation,
                bulletinFaculty
            },
            revalidate: 30
        };
    } catch (e) {
        console.log("ERROR: ");
        console.log(e);
        return {
            props: {
                berita: [],
                bulletinInovasion: [],
                bulletinCooperation: [],
                bulletinFaculty: []
            },
            revalidate: 30
        };
    }
};
const Home = ({ berita , bulletinInovasion , bulletinCooperation , bulletinFaculty ,  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const url = `/streaming?lang=${language}&selected=true&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(0);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page + 1}`);
    const { data: agendasRes , error  } = external_swr_default()(fetchUrl);
    const { 0: totalagenda , 1: setTotalagenda  } = (0,external_react_.useState)(0);
    const selectedLanguage = (0,check_language/* selectLanguage */.V)(language);
    const param = `/${selectedLanguage}`;
    // console.log('agenda 2', agenda);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "homepage",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita */.Z.berita)((0,check_language/* selectLanguage */.V)(language)),
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "ftco-section ftc-no-pb ftco-section--top streaming-page",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row no-gutters",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "pr-md-5 mr-md-5",
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
                                                        className: `nav-link active figure  ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita */.Z.berita)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
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
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(news, {
                        contents: berita || [],
                        language: language
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inovation, {
                        contents: bulletinInovasion || [],
                        language: language
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(cooperation, {
                        contents: bulletinCooperation || [],
                        language: language
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(updatefaculty, {
                        contents: bulletinFaculty || [],
                        language: language
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const berita = (Home);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378], () => (__webpack_exec__(17)));
module.exports = __webpack_exports__;

})();