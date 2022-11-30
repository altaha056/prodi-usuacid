"use strict";
(() => {
var exports = {};
exports.id = 9788;
exports.ids = [9788];
exports.modules = {

/***/ 9740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sirenbang_axios)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "https"
var external_https_ = __webpack_require__(5687);
var external_https_default = /*#__PURE__*/__webpack_require__.n(external_https_);
;// CONCATENATED MODULE: ./config/sirenbang-url.tsx
// export const baseUrl =
//   process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.usu.ac.id/id/api/front';
// export const appsUrl =
//   process.env.NEXT_PUBLIC_APPS_URL || 'https://www.usu.ac.id/id';
// export const uploadUrl =
//   process.env.NEXT_PUBLIC_UPLOAD_URL ||
//   'https://www.usu.ac.id/id/api/front/upload';
const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "https://konten.usu.ac.id/";
const appsUrl = process.env.NEXT_PUBLIC_APPS_URL || "https://konten.usu.ac.id/";
const uploadUrl = process.env.NEXT_PUBLIC_UPLOAD_URL || "https://konten.usu.ac.id/";

;// CONCATENATED MODULE: ./config/sirenbang-axios.tsx



const instance = external_axios_default().create({
    baseURL: `${baseUrl}/`,
    httpsAgent: new (external_https_default()).Agent({
        rejectUnauthorized: false
    })
});
/* harmony default export */ const sirenbang_axios = (instance);


/***/ }),

/***/ 2753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6378);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3271);
/* harmony import */ var _config_sirenbang_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9740);
/* eslint-disable no-empty-pattern */ /* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 






async function getStaticPaths() {
    // try {
    //   const response = await Promise.all([
    //     axios.get('faculties/slugs?lang=id'),
    //     axios.get('faculties/slugs?lang=en'),
    //   ]);
    //   const idPaths = await response[0].data.data.map((slug: string) => [
    //     { params: { language: 'id', slug } },
    //   ]);
    //   const enPaths = await response[1].data.data.map((slug: string) => [
    //     { params: { language: 'en', slug } },
    //   ]);
    //   return {
    //     paths: [...idPaths, ...enPaths],
    //     fallback: true,
    //   };
    // } catch (e) {
    //   return {
    //     paths: [],
    //     fallback: true,
    //   };
    // }
    return {
        paths: [],
        fallback: true
    };
}
const getStaticProps = async (context)=>{
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(context.params.language);
    const { language , slug  } = context.params;
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
};
const ArticlePageFakultas = ({})=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { language , slug  } = router.query;
    const { 0: fakultasData , 1: setFakultasData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: inputProdi , 1: setInputProdi  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const changeInput = (e)=>{
        setInputProdi(e.target.value);
    };
    const { 0: prodiList , 1: setProdiList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _config_sirenbang_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get(`/api/post?site=USU&lang=${language}&slug=${slug}`).then((response)=>{
            console.log("data", response.data);
            setFakultasData(response.data?.post);
        });
    // fetch('/api/faculties')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const fakultas = data.find((obj: any) => obj.slug === slug);
    //     setFakultasData(fakultas);
    //     console.log('fakultas data : ', fakultasData);
    //   });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (fakultasData) {
            setProdiList(fakultasData.content.majors);
        }
    }, [
        fakultasData
    ]);
    const searchProdi = ()=>{
        let newProdiList = [];
        if (fakultasData) {
            newProdiList = fakultasData.content.majors.filter((obj)=>{
                return obj.title.toLowerCase().includes(inputProdi);
            });
            setProdiList(newProdiList);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* ["default"].beranda */ .Z.beranda)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_6__/* .selectLanguage */ .V)(language)),
                            " |",
                            " ",
                            fakultasData && fakultasData.title,
                            " Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            fakultasData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fakultas",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "fakultas-hero",
                        className: "fakultas-hero",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: fakultasData.content.headlineImage,
                            alt: fakultasData.title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "fakultas-description padding-l",
                        className: "fakultas-description",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: fakultasData.content.backgroundImage,
                                alt: `halaman ${fakultasData.content.backgroundImage}`
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-description__title",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: fakultasData.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fakultasData.content.description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn-yellow",
                                        children: "Kunjungi Laman"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "fakultas-images padding-l",
                        className: "fakultas-images",
                        children: [
                            fakultasData.content.image1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: fakultasData.content.image1,
                                    alt: `gambar fakultas ${fakultasData.title}`
                                })
                            }),
                            fakultasData.content.image2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: fakultasData.content.image2,
                                    alt: `gambar fakultas ${fakultasData.title}`
                                })
                            }),
                            fakultasData.content.image3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: fakultasData.content.image3,
                                    alt: `gambar fakultas ${fakultasData.title}`
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "fakultas-prodi padding-l",
                        className: "fakultas-prodi",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Program Studi"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "search-bar",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        value: inputProdi,
                                        onChange: changeInput,
                                        type: "text",
                                        placeholder: "Cari Program Studi",
                                        onKeyUp: (e)=>e.key === "Enter" && searchProdi()
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: searchProdi,
                                        children: "Cari"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-prodi-list thin-scrollbar",
                                children: [
                                    prodiList.length < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "kata kunci tidak ditemukan"
                                    }),
                                    prodiList.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "title",
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: item.educationType
                                                })
                                            ]
                                        }))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "fakultas-visi",
                        className: "fakultas-visi",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: fakultasData.content.visiImage,
                                alt: `visi misi ${fakultasData.title}`
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-visi-description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "Visi"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fakultasData.content.visi
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "fakultas-misi",
                        className: "fakultas-misi",
                        children: [
                            fakultasData.content.misiPendidikan && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-misi-description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/icons/pendidikan-fakultas-icon.svg",
                                        alt: `misi pendidikan ${fakultasData.title}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Pendidikan"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fakultasData.content.misiPendidikan
                                    })
                                ]
                            }),
                            fakultasData.content.misiPenelitian && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-misi-description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/icons/research-fakultas-icon.svg",
                                        alt: `misi penelitian ${fakultasData.title}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Penelitian"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fakultasData.content.misiPenelitian
                                    })
                                ]
                            }),
                            fakultasData.content.misiPengabdian && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-misi-description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/icons/pengabdian-fakultas-icon.svg",
                                        alt: `misi pengabdian ${fakultasData.title}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Pengabdian & Pelayanan"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fakultasData.content.misiPengabdian
                                    })
                                ]
                            }),
                            fakultasData.content.misiBintang && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-misi-description",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/icons/star-fakultas-icon.svg",
                                        alt: `misi bintang ${fakultasData.title}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Karakter BINTANG"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fakultasData.content.misiBintang
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "fakultas-contact",
                        className: "fakultas-contact",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-contact-title",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        children: [
                                            "Kontak ",
                                            fakultasData.title
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Universitas Sumatera Utara"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "fakultas-contact-data",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "fakultas-contact-data__alamat description-with-logo",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/images/icons/map-icon.svg",
                                                alt: "alamat"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: fakultasData.content.address
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "fakultas-contact-data__mailphone",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "fakultas-contact-data__mailphone-phone description-with-logo",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/images/icons/telephone-icon.svg",
                                                        alt: "phone number"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: fakultasData.content.phoneNumber
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "fakultas-contact-data__mailphone-mail description-with-logo",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/images/icons/mail-icon.svg",
                                                        alt: "email address"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: fakultasData.content.email
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "fakultas-contact-data__socialmedia socmed",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "youtube socmed-icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/icons/youtube-logo.png",
                                                    alt: "youtube"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "instagram socmed-icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/icons/instagram-logo.png",
                                                    alt: "instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "facebook socmed-icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/icons/facebook-logo.png",
                                                    alt: "facebook"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePageFakultas);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [3271,6378], () => (__webpack_exec__(2753)));
module.exports = __webpack_exports__;

})();