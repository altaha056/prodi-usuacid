"use strict";
(() => {
var exports = {};
exports.id = 8825;
exports.ids = [8825];
exports.modules = {

/***/ 2430:
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__(5804);
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
;// CONCATENATED MODULE: ./pages/[language]/ukm/ukm.json
const ukm_namespaceObject = JSON.parse('[{"slug":"ukm-sepak-bola","imageAsset":"/images/ukm/ukm-sepak-bola-title.jpg","title":"UKM Sepak Bola","enTitle":"Football Community","subtitle":"Kami adalah pusat unggulan pendidikan dokter tropis dan onkologi pencegahan di Asia Tenggara","url":"#","imageUrls":["/images/ukm/football-1.jpg","/images/ukm/football-2.jpg","/images/ukm/football-3.jpg"],"advantages":["Kami adalah pusat unggulan pendidikan dokter tropis","Kami adalah pusat unggulan pendidikan dokter tropis","Kami adalah pusat unggulan pendidikan dokter tropis","Kami adalah pusat unggulan pendidikan dokter tropis"],"description":"Football is the fastest blockchain in the world and the fastest growing ecosystem in football, with thousands of projects spanning DeFi, NFTs, Web3 and more.","communityURL":"#","validatorURL":"#","informasiUKM":"UKM sepak bola adalah ukm yang meraih juara brestasi tertinggi"}]');
;// CONCATENATED MODULE: ./pages/[language]/ukm/[slug].tsx
/* eslint-disable no-empty-pattern */ /* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 










async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    language: "id",
                    slug: "ukm-sepak-bola"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "ukm-sepak-bola"
                }
            }, 
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
        const response = await axios/* default.get */.Z.get(`/photos?lang=${context.params.language}&selected=true&menu=faculties&`);
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
const ArticlePageFakultas = ({})=>{
    const router = (0,router_.useRouter)();
    const { language , slug  } = router.query;
    const { 0: ukmData , 1: setUkmData  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        if (!slug) return;
        const searchUKM = ukm_namespaceObject.find((obj)=>obj.slug === slug);
        if (!searchUKM) {
            router.push("/");
            return;
        }
        setUkmData(searchUKM);
    }, [
        slug
    ]);
    const responsive = {
        Desktop: {
            // the naming can be any, depends on you.
            breakpoint: {
                max: 4000,
                min: 0
            },
            items: 1
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.beranda */.Z.beranda)((0,check_language/* selectLanguage */.V)(language)),
                            " | UKM Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            ukmData && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ukm-page",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img-hero",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: ukmData.imageAsset,
                            alt: `UKM ${ukmData.title}`
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "second-hero",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: ukmData.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: ukmData.subtitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/[language]/ukm/[slug]",
                                as: ukmData.url,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "btn-green",
                                    children: "Our Menu"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ukm-carousel",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                                additionalTransfrom: 0,
                                arrows: true,
                                autoPlaySpeed: 3000,
                                centerMode: false,
                                className: "",
                                containerClass: "container",
                                dotListClass: "",
                                draggable: true,
                                focusOnSelect: false,
                                infinite: true,
                                itemClass: "",
                                keyBoardControl: true,
                                minimumTouchDrag: 80,
                                pauseOnHover: true,
                                renderArrowsWhenDisabled: false,
                                renderButtonGroupOutside: false,
                                renderDotsOutside: false,
                                responsive: responsive,
                                rewind: false,
                                rewindWithAnimation: false,
                                rtl: false,
                                shouldResetAutoplay: true,
                                showDots: true,
                                sliderClass: "",
                                slidesToSlide: 1,
                                swipeable: true,
                                children: ukmData.imageUrls.map((image)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "img-carousel",
                                        src: image,
                                        alt: `UKM ${ukmData.title}`
                                    }))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "banner-wrapper",
                                children: ukmData.advantages.map((advantage)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "btn-green",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/icons/check-secondary.png",
                                                    alt: "Check Icon"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: advantage
                                            })
                                        ]
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "galeri-ukm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Galeri UKM"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "subtitle",
                                children: ukmData.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "two-card-wrapper",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ukm-card",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                children: ukmData.enTitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: ukmData.communityURL,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn-yellow",
                                                    children: "Get Started"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "ukm-card",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                children: "Become a Validator"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: ukmData.validatorURL,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "btn-yellow",
                                                    children: "Get Started"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "single-card-wrapper",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "ukm-card",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "ukm-card-left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                children: "Informasi UKM"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "ukm-card-right",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: ukmData.informasiUKM
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/[language]/ukm/[slug]",
                                                    as: ukmData.url,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        className: "btn-yellow",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/icons/launch-icon.png",
                                                                alt: "launch"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Kunjungi Laman"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _slug_ = (ArticlePageFakultas);


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

/***/ 5804:
/***/ ((module) => {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378], () => (__webpack_exec__(2430)));
module.exports = __webpack_exports__;

})();