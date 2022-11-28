"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,8882];
exports.modules = {

/***/ 1207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(387);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
;// CONCATENATED MODULE: ./models/footer-menu.ts
class FooterMenuMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            slug: event.slug
        };
    }
}

;// CONCATENATED MODULE: ./models/footer-menu2.ts
class FooterContentMaker {
    static create(event) {
        return {
            id: event.id,
            content: event.content,
            link: event.link,
            image: event.image || null
        };
    }
}

// EXTERNAL MODULE: ./config/url.tsx
var url = __webpack_require__(266);
// EXTERNAL MODULE: ./services/api/utilities/provider.ts
var provider = __webpack_require__(1254);
;// CONCATENATED MODULE: ./services/api/footer-menu.ts


const URL = `${url/* baseUrl */.FH}/article`;
const getAll = ({ resource , onSuccess , onError  })=>provider/* apiProvider.getAll */.M.getAll({
        resource: URL + resource,
        onError,
        onSuccess
    });
const getSingle = ({ id , onSuccess , onError  })=>provider/* apiProvider.getSingle */.M.getSingle({
        id,
        onSuccess,
        onError,
        resource: URL
    });
const apiFooterMenus = {
    getAll,
    getSingle
};

;// CONCATENATED MODULE: ./services/api/footer-menu2.ts


const footer_menu2_URL = `${url/* baseUrl */.FH}/footer`;
const footer_menu2_getAll = ({ resource , onSuccess , onError  })=>provider/* apiProvider.getAll */.M.getAll({
        resource: footer_menu2_URL + resource,
        onError,
        onSuccess
    });
const footer_menu2_getSingle = ({ id , onSuccess , onError  })=>provider/* apiProvider.getSingle */.M.getSingle({
        id,
        onSuccess,
        onError,
        resource: footer_menu2_URL
    });
const apiFooterContent = {
    getAll: footer_menu2_getAll,
    getSingle: footer_menu2_getSingle
};

// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
;// CONCATENATED MODULE: ./config/specific-article-category.ts
const aboutUsuCategoryId = {
    id: "60582ccd0da12a7560a8f372",
    en: "60582ce20da12a7560a8f374"
};
const researchCategoryId = {
    id: "60582cd50da12a7560a8f373",
    en: "60582cf40da12a7560a8f375"
};

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
// EXTERNAL MODULE: external "react-feather"
var external_react_feather_ = __webpack_require__(9101);
;// CONCATENATED MODULE: ./page-components/layouts/main-layout.tsx
/* eslint-disable react/no-unknown-property */ /* eslint-disable jsx-a11y/control-has-associated-label */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable prettier/prettier */ /* eslint-disable react/jsx-no-target-blank */ /* eslint-disable jsx-a11y/alt-text */ 














const menuClass = "navbar navbar-expand-lg ftco_navbar ftco-navbar-light";
const MainLayout = ({ children  })=>{
    // ReactGA.initialize(`${<ArticleOutlineMainlayout />}`);
    // console.log(ArticleOutlineMainlayout);
    // if (typeof window !== "undefined") {
    //   ReactGA.pageview(window.location.pathname + window.location.search);
    // }
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const { 0: searchKeyword , 1: setSearchKeyword  } = (0,external_react_.useState)("");
    const { 0: showSearchForm , 1: setShowSearchForm  } = (0,external_react_.useState)(false);
    const navRef = (0,external_react_.useRef)();
    const router = (0,client_router.useRouter)();
    const { 0: footerMenu , 1: setFooterMenu  } = (0,external_react_.useState)([]);
    const { 0: footerUmum , 1: setFooterUmum  } = (0,external_react_.useState)([]);
    const { 0: footerBerita , 1: setFooterBelajar  } = (0,external_react_.useState)([]);
    const { 0: footerAkademik , 1: setFooterAkademik  } = (0,external_react_.useState)([]);
    const { 0: footerInfo , 1: setFooterInfo  } = (0,external_react_.useState)([]);
    const { 0: footerSosmed , 1: setFooterSosmed  } = (0,external_react_.useState)([]);
    const { 0: footerLembaga , 1: setFooterLembaga  } = (0,external_react_.useState)([]);
    const { 0: footerCopyright , 1: setFooterCopyright  } = (0,external_react_.useState)([]);
    const { 0: footerAfiliasi , 1: setFooterAfiliasi  } = (0,external_react_.useState)([]);
    const { language  } = router.query || "id";
    const handleSuccessFooterMenu = (response)=>{
        const menu = response.data.data.data?.map((item)=>FooterMenuMaker.create(item));
        setFooterMenu(menu);
    };
    const handleErrorFooterMenu = (error)=>{
        console.error(error);
    };
    const handleSearch = ()=>{
        router.push(`/${language}/search?keywords=${searchKeyword}`);
        setShowSearchForm(false);
    };
    const fetchMenu = ()=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterMenus.getAll({
                resource: `?lang=${lang}&category_id=${aboutUsuCategoryId[lang]}&selected=true&limit=50`,
                onSuccess: handleSuccessFooterMenu,
                onError: handleErrorFooterMenu
            });
        }
    };
    const handleSuccessFooterContentumum = (response)=>{
        const menu = response.data.data?.map((item)=>FooterContentMaker.create(item));
        setFooterUmum(menu);
    };
    const fecthFooterumum = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessFooterContentumum,
                onError: handleErrorFooterMenu
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthFooterumum("umum");
    }, [
        footerMenu
    ]);
    const handleSuccessFooterContentakademik = (response)=>{
        const menu = response.data.data?.map((item)=>FooterContentMaker.create(item));
        setFooterAkademik(menu);
    };
    const fecthFooterakademik = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessFooterContentakademik,
                onError: handleErrorFooterMenu
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthFooterakademik("akademik");
    }, [
        footerMenu
    ]);
    const handleSuccessFooterContentbelajar = (response)=>{
        const menu = response.data.data?.map((item)=>FooterContentMaker.create(item));
        setFooterBelajar(menu);
    };
    const fecthFooterbelajar = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessFooterContentbelajar,
                onError: handleErrorFooterMenu
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthFooterbelajar("belajar");
    }, [
        footerMenu
    ]);
    const handleSuccessFooterContentinfo = (response)=>{
        const menu = response.data.data?.map((item)=>FooterContentMaker.create(item));
        setFooterInfo(menu);
    };
    const fecthFooterinfo = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessFooterContentinfo,
                onError: handleErrorFooterMenu
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthFooterinfo("info");
    }, [
        footerMenu
    ]);
    const handleSuccessFooterContentsosmed = (response)=>{
        const menu = response.data.data?.map((item)=>FooterContentMaker.create(item));
        setFooterSosmed(menu);
    };
    const fecthFootersosmed = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessFooterContentsosmed,
                onError: handleErrorFooterMenu
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthFootersosmed("sosmed");
    }, [
        footerMenu
    ]);
    const handleSuccessFooterContentlembaga = (response)=>{
        const menu = response.data.data?.map((item)=>FooterContentMaker.create(item));
        setFooterLembaga(menu);
    };
    const fecthFooterlembaga = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessFooterContentlembaga,
                onError: handleErrorFooterMenu
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthFooterlembaga("lembaga");
    }, [
        footerMenu
    ]);
    const handleSuccessFooterContentcopyright = (response)=>{
        const menu = response.data.data?.map((item)=>FooterContentMaker.create(item));
        setFooterCopyright(menu);
    };
    const fecthFootercopyright = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessFooterContentcopyright,
                onError: handleErrorFooterMenu
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthFootercopyright("copyright");
    }, [
        footerMenu
    ]);
    const handleSuccessFooterContentafiliasi = (response)=>{
        const menu = response.data.data?.map((item)=>FooterContentMaker.create(item));
        setFooterAfiliasi(menu);
    };
    const fecthFooterafiliasi = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiFooterContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessFooterContentafiliasi,
                onError: handleErrorFooterMenu
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthFooterafiliasi("afiliasi");
    }, [
        footerMenu
    ]);
    const devidingMenu = ()=>{
        let newMenu = [];
        let temp = [];
        footerMenu.forEach((menu, index)=>{
            temp = [
                ...temp,
                menu
            ];
            if ((index + 1) % 5 === 0) {
                newMenu = [
                    ...newMenu,
                    temp
                ];
                temp = [];
            }
        });
        const mn1 = [];
        const mn2 = [];
        const mn3 = [];
        const devider = footerMenu.length % 3;
        footerMenu.forEach((mn, index)=>{
            // if (index < devider) {
            mn1.push(mn);
        // } else if (index < devider * 2) {
        // mn2.push(mn);
        // } else if (index < devider * 3) {
        // mn3.push(mn);
        // }
        });
        return {
            menu1: mn1,
            menu2: mn2,
            menu3: mn3
        };
    };
    (0,external_react_.useEffect)(()=>{
        fetchMenu();
    }, []);
    (0,external_react_.useEffect)(()=>{
        devidingMenu();
    }, [
        footerMenu
    ]);
    const menuConfig = ()=>{
        const st = document.documentElement.scrollTop || document.body.scrollTop;
        if (!navRef.current) return;
        if (st > 0) {
            navRef.current.classList.add("scrolled");
        } else {
            navRef.current.classList.remove("scrolled");
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", menuConfig);
    }, []);
    const selectedLanguage = (0,check_language/* selectLanguage */.V)(language);
    const param = `/${selectedLanguage}`;
    const { menu1 , menu2 , menu3  } = devidingMenu();
    const demo = footerUmum;
    const demo2 = footerBerita;
    const demo3 = footerAkademik;
    const demo4 = footerInfo;
    const demo5 = footerSosmed;
    const demo6 = footerLembaga;
    const demo7 = footerCopyright;
    const demo8 = footerAfiliasi;
    const routeWithoutNavbar = [
        "/[language]/direktori/[slug]"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    property: "og:site_name",
                    content: "Website Universitas Sumatera Utara"
                })
            }),
            !routeWithoutNavbar.includes(router.pathname) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: menuClass + (router.pathname !== "/[language]" ? " scrolled awake" : ""),
                ref: router.pathname === "/[language]" ? navRef : navRef,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "navbar-brand",
                                href: "/",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/usu-logo.png",
                                        alt: "logo",
                                        className: "logo",
                                        height: "50px",
                                        width: "50px"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "navbar-brand__text",
                                        "font-align": "center",
                                        children: "Universitas Sumatera Utara"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "navbar-toggler",
                                type: "button",
                                "data-toggle": "collapse",
                                "data-target": "#ftco-nav",
                                "aria-controls": "ftco-nav",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "oi oi-menu"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "collapse navbar-collapse",
                        id: "ftco-nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "navbar-top",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "container",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "navbar-nav",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tracer */.Z.tracer)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tracer */.Z.tracer)(selectedLanguage)}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-link",
                                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tracerStudy */.Z.tracerStudy)(selectedLanguage)
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tracerStudy */.Z.tracerStudy)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.ppid */.Z.ppid)(selectedLanguage)}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-link",
                                                            children: "PPID"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.laporLink */.Z.laporLink)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.laporLink */.Z.laporLink)(selectedLanguage)}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-link",
                                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.lapor */.Z.lapor)(selectedLanguage)
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.mbkmLink */.Z.mbkmLink)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.mbkmLink */.Z.mbkmLink)(selectedLanguage)}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-link",
                                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.mbkm */.Z.mbkm)(selectedLanguage)
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kalenderLink */.Z.kalenderLink)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kalenderLink */.Z.kalenderLink)(selectedLanguage)}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-link",
                                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kalenderAkademik */.Z.kalenderAkademik)(selectedLanguage)
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tentangLink */.Z.tentangLink)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tentangLink */.Z.tentangLink)(selectedLanguage)}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-link",
                                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tentangUSU */.Z.tentangUSU)(selectedLanguage)
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `nav-item ${router.pathname.indexOf("/berita") !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${param}/berita`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-link",
                                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.berita */.Z.berita)(selectedLanguage)
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tracerStudy */.Z.tracerStudy)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: `${param}/kampus-sehat`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "nav-link",
                                                            children: "Kampus Sehat"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "header-search",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "header-search__toggle",
                                                    onClick: ()=>setShowSearchForm(!showSearchForm),
                                                    children: showSearchForm ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.X, {
                                                        size: "1em"
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Search, {
                                                        size: "1em"
                                                    })
                                                }),
                                                showSearchForm && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "header-search__form",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            name: "search",
                                                            id: "",
                                                            value: searchKeyword,
                                                            placeholder: "Search...",
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
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_feather_.Search, {
                                                                    size: "1em"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "navbar-lang",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    router.query.language === "id" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "https://412292.smushcdn.com/856188/wp-content/plugins/sitepress-multilingual-cms/res/flags/id.png?lossy=1&strip=1&webp=1"
                                                            }),
                                                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.id */.Z.id)(selectedLanguage)
                                                        ]
                                                    }),
                                                    router.query.language === "en" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "https://412292.smushcdn.com/856188/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png?lossy=1&strip=1&webp=1"
                                                            }),
                                                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.en */.Z.en)(selectedLanguage)
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "ion-ios-arrow-down"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "submenu",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            className: `nav-item nav-item--lang`,
                                                            children: [
                                                                router.query.language === "en" && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "nav-link",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "https://412292.smushcdn.com/856188/wp-content/plugins/sitepress-multilingual-cms/res/flags/id.png?lossy=1&strip=1&webp=1"
                                                                            }),
                                                                            "ID",
                                                                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.id */.Z.id)(selectedLanguage)
                                                                        ]
                                                                    })
                                                                }),
                                                                router.query.language === "id" && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/en",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "nav-link",
                                                                        onClick: ()=>{
                                                                            window.location.href = "/en";
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "https://412292.smushcdn.com/856188/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png?lossy=1&strip=1&webp=1"
                                                                            }),
                                                                            "EN",
                                                                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.en */.Z.en)(selectedLanguage)
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "navbar-main",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `nav-item ${router.pathname === "/[language]" ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `${param}/`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.beranda_content */.Z.beranda_content)(selectedLanguage)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `nav-item ${router.pathname.indexOf("/fakultas-sekolah") !== -1 ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `${param}/fakultas-sekolah`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pendidikan_content */.Z.pendidikan_content)(selectedLanguage)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.penelitian_link */.Z.penelitian_link)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.penelitian_link */.Z.penelitian_link)(selectedLanguage)}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.penelitian_content */.Z.penelitian_content)(selectedLanguage)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.abdimas_link */.Z.abdimas_link)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.abdimas_link */.Z.abdimas_link)(selectedLanguage)}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pengabdian_menu */.Z.pengabdian_menu)(selectedLanguage)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.penerimaan_link */.Z.penerimaan_link)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.penerimaan_link */.Z.penerimaan_link)(selectedLanguage)}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.penerimaan_content */.Z.penerimaan_content)(selectedLanguage)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kampus_link */.Z.kampus_link)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kampus_link */.Z.kampus_link)(selectedLanguage)}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kampus_content */.Z.kampus_content)(selectedLanguage)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `nav-item ${router.pathname.indexOf(`/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.sdgs_link */.Z.sdgs_link)(selectedLanguage)}`) !== -1 ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `${param}/${(0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.sdgs_link */.Z.sdgs_link)(selectedLanguage)}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.sdgs */.Z.sdgs)(selectedLanguage)
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `nav-item ${router.pathname.indexOf("/menu") !== -1 ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `${param}/menu`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "nav-link",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/sort.png",
                                                            style: {
                                                                maxWidth: "20px"
                                                            }
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "ftco-footer ftco-bg-dark ftco-section",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row no-gutters",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "footer-logo",
                                                src: "/images/usu-logo.png",
                                                height: "200px",
                                                width: "200px"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "block-23 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "footer-address",
                                                        children: [
                                                            "Jl. Dr. T. Mansur No. 9, Kampus Padang ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "Bulan, Medan, 20155, Sumatera Utara"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "footer-contact-list",
                                                        children: footerInfo.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "list-unstyled",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "image",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: item?.image,
                                                                            height: "20px",
                                                                            width: "20px"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "value",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: item.link,
                                                                            children: item.content
                                                                        })
                                                                    })
                                                                ]
                                                            }, item.id))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "ftco-footer-widget mb-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                                                    animateIn: "fadeInUp",
                                                    animateOnce: true,
                                                    delay: 100,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "ftco-footer-social list-unstyled float-md-left float-lft mt-3",
                                                        children: footerSosmed.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "list-unstyled",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "image",
                                                                    href: item?.link,
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: item?.image,
                                                                        height: "40px",
                                                                        width: "40px"
                                                                    })
                                                                })
                                                            }, item.id))
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md col-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ftco-footer-widget mb-4 ml-md-",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "ftco-footer-widget-title",
                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.tentangUSU */.Z.tentangUSU)((0,check_language/* selectLanguage */.V)(language))
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-unstyled",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: `/${language}/panduan-identitas-visual`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.panduan */.Z.panduan)((0,check_language/* selectLanguage */.V)(language))
                                                            })
                                                        })
                                                    }),
                                                    menu1.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "list-unstyled",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/[language]/[article]",
                                                                as: `/${language}/${item.slug}`,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: item.title
                                                                })
                                                            })
                                                        }, item.id))
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md col-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ftco-footer-widget mb-4 ml-md-",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "ftco-footer-widget-title",
                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.civitasAkademika */.Z.civitasAkademika)((0,check_language/* selectLanguage */.V)(language))
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "list-unstyled",
                                                children: footerAkademik.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-unstyled",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: item.link,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                item.content
                                                            ]
                                                        })
                                                    }, item.id))
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md col-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ftco-footer-widget mb-4 ml-md-",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "ftco-footer-widget-title",
                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.sumberBelajar */.Z.sumberBelajar)((0,check_language/* selectLanguage */.V)(language))
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "list-unstyled",
                                                children: footerBerita.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-unstyled",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: item.link,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                item.content
                                                            ]
                                                        })
                                                    }, item.id))
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md col-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ftco-footer-widget mb-4 ml-md-",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "ftco-footer-widget-title",
                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.informasiUmum */.Z.informasiUmum)((0,check_language/* selectLanguage */.V)(language))
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "list-unstyled",
                                                children: footerUmum.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-unstyled",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: item.link,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                item.content
                                                            ]
                                                        })
                                                    }, item.id))
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md col-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ftco-footer-widget mb-4 ml-md-",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "ftco-footer-widget-title",
                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.afiliasi */.Z.afiliasi)((0,check_language/* selectLanguage */.V)(language))
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "list-unstyled",
                                                children: footerAfiliasi.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "list-unstyled",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: item.link,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                item.content
                                                            ]
                                                        })
                                                    }, item.id))
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-3"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-5 text-left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ftco-footer-widget",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "list-unstyled footer-lembaga",
                                            children: footerLembaga.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: item.link,
                                                        className: "image",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item?.image
                                                        })
                                                    })
                                                }, item.id))
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-auto ml-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "list-unstyled footer-copyright",
                                        children: footerCopyright.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: item.link,
                                                    children: item.content
                                                })
                                            }, item.id))
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const main_layout = (MainLayout);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__(4417);
;// CONCATENATED MODULE: ./page-components/common/information.tsx



const Information = ({ contents  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const { 0: timer , 1: setTimer  } = (0,external_react_.useState)(10);
    // eslint-disable-next-line no-undef
    const { 0: intervalID , 1: setIntervalID  } = (0,external_react_.useState)(null);
    const animateInfo = (0,external_react_spring_.useSpring)({
        bottom: show ? 0 : -300,
        display: show ? "block" : "none"
    });
    const hideInfo = ()=>setShow(false);
    const showInfo = ()=>setShow(true);
    const timerInfo = (until)=>{
        const date = new Date();
        const now = date.getTime();
        const distance = until - now;
        const seconds = Math.round(distance % (1000 * 60) / 1000);
        setTimer(seconds);
    };
    (0,external_react_.useEffect)(()=>{
        if (contents && contents.length > 0) setTimeout(showInfo, 3000);
    }, [
        contents
    ]);
    (0,external_react_.useEffect)(()=>{
        if (show) {
            const date = new Date();
            const until = date.setSeconds(date.getSeconds() + 11);
            const interval = setInterval(()=>timerInfo(until), 1000);
            setIntervalID(interval);
        }
    }, [
        show
    ]);
    (0,external_react_.useEffect)(()=>{
        if (timer <= 0) {
            hideInfo();
            if (intervalID) clearInterval(intervalID);
        }
    }, [
        timer
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_spring_.animated.div, {
        className: "information-popup p-3",
        style: animateInfo,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "d-flex justify-content-end",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    "aria-hidden": true,
                    onClick: hideInfo,
                    children: [
                        `Tutup dalam ${timer}`,
                        "\xa0 \xa0",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "icon-close close-button"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: contents.map((info)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md content",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "d-flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pr-3 image",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: info.image,
                                        alt: info.title,
                                        style: {
                                            width: "100%",
                                            objectFit: "cover"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex-grow-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: info.link,
                                            children: info.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: info.description
                                        })
                                    ]
                                })
                            ]
                        })
                    }, info.id))
            })
        ]
    });
};
/* harmony default export */ const common_information = (Information);

;// CONCATENATED MODULE: ./models/information.ts
class InformationMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            description: event.content,
            image: event.image,
            link: event.link,
            button: event.button_visible,
            buttonText: event.button_text
        };
    }
}

;// CONCATENATED MODULE: ./services/api/information.ts


const information_URL = `${url/* baseUrl */.FH}/information`;
const information_getAll = ({ resource: lang , onSuccess , onError  })=>provider/* apiProvider.getAll */.M.getAll({
        resource: `${information_URL}?lang=${lang}&selected=true&`,
        onError,
        onSuccess
    });
// const getSingle = ({ id, onSuccess, onError }: ReadApiProps): Promise<void> =>
//   apiProvider.getSingle({ id, onSuccess, onError, resource: URL });
const apiInformation = {
    getAll: information_getAll
};

// EXTERNAL MODULE: ./utils/gtag.ts
var gtag = __webpack_require__(5809);
;// CONCATENATED MODULE: ./pages/_app.tsx
// import App from 'next/app';














router_default().events.on("routeChangeStart", ()=>external_nprogress_default().start());
router_default().events.on("routeChangeComplete", ()=>external_nprogress_default().done());
router_default().events.on("routeChangeError", ()=>external_nprogress_default().done());
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component , pageProps  }) {
    const { 0: information , 1: setInformation  } = (0,external_react_.useState)(undefined);
    const router = (0,router_.useRouter)();
    console.log("route", router);
    const { language  } = router.query;
    const handleSuccessGetInformation = (res)=>{
        const info = res.data.data?.map((val)=>InformationMaker.create(val)) || [];
        setInformation(info);
    };
    const handleErrorInformation = (e)=>{
        console.error(e);
    };
    const fetchInformation = ()=>{
        if (typeof language === "string") {
            apiInformation.getAll({
                resource: language,
                onSuccess: handleSuccessGetInformation,
                onError: handleErrorInformation
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            gtag/* pageview */.LV(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    (0,external_react_.useEffect)(()=>{
        fetchInformation();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/usu_icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/ionicons.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/flaticon.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/icomoon.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/open-iconic-bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/owl.carousel.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/owl.theme.default.min.css"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_swr_.SWRConfig, {
                value: {
                    fetcher: (url)=>(0,axios/* default */.Z)(url).then((r)=>r.data),
                    onError: (error)=>{
                        console.error(error);
                    },
                    onErrorRetry: (error, _key, _config, revalidate, { retryCount  })=>{
                        // Only retry up to 5 times.
                        if (retryCount) {
                            if (retryCount >= 5) return;
                            // Retry after 5 seconds.
                            setTimeout(()=>revalidate({
                                    retryCount: retryCount + 1
                                }), 5000);
                        }
                    }
                },
                children: [
                    language ? /*#__PURE__*/ jsx_runtime_.jsx(main_layout, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }),
                    language && information ? /*#__PURE__*/ jsx_runtime_.jsx(common_information, {
                        contents: information
                    }) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/jquery.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/bootstrap.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/main.js"
            })
        ]
    });
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps, countryCode };
// };
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LV": () => (/* binding */ pageview),
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID)
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = "G-4X8TCJ6CFE";
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action , category , label , value  })=>{
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value
    });
};


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

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

/***/ }),

/***/ 3082:
/***/ ((module) => {

module.exports = require("react-ga");

/***/ }),

/***/ 4417:
/***/ ((module) => {

module.exports = require("react-spring");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9285,3271,7318,6378,1254], () => (__webpack_exec__(1207)));
module.exports = __webpack_exports__;

})();