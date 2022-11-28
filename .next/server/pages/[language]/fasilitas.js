"use strict";
(() => {
var exports = {};
exports.id = 8965;
exports.ids = [8965];
exports.modules = {

/***/ 3965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ fasilitas),
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
// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
;// CONCATENATED MODULE: ./pages/[language]/fasilitas/fasilitas.json
const fasilitas_namespaceObject = JSON.parse('[{"slug":"fasilitas-umum","title":"Fasilitas Umum","fasilitasList":[{"slug":"tamans-usu","name":"Taman USU","image":"/images/fasilitas/banner-fasilitas.jpg"},{"slug":"auditorium-usu","name":"Auditorium USU","image":"https://source.unsplash.com/400x400"},{"slug":"bus-lintas-usu","name":"Bus Lintas USU","image":"https://source.unsplash.com/400x400"},{"slug":"gedung-pancasila-usu","name":"Gedung Pancasila USU","image":"https://source.unsplash.com/400x400"},{"slug":"laboratorium-terpadu-usu","name":"Laboratorium Terpadu USU","image":"https://source.unsplash.com/400x400"},{"slug":"asrama-mahasiswa-usu","name":"Asrama Mahasiswa USU","image":"https://source.unsplash.com/400x400"}]},{"slug":"fasilitas-kesehatan","title":"Fasilitas Kesehatan","fasilitasList":[{"slug":"rumah-sakit-gigi-dan-mulut","name":"Rumah Sakit Gigi dan Mulut","image":"https://source.unsplash.com/400x400"},{"slug":"rumah-sakit-usu","name":"Rumah Sakit USU","image":"https://source.unsplash.com/400x400"},{"slug":"poliklinik-usu","name":"Poliklinik USU","image":"https://source.unsplash.com/400x400"}]},{"slug":"fasilitas-olahraga","title":"Fasilitas Olahraga","fasilitasList":[{"slug":"stadion-mini-usu","name":"Stadion Mini USU","image":"https://source.unsplash.com/400x400"},{"slug":"track-lari-auditorim-usu","name":"Track Lari Auditorim USU","image":"https://source.unsplash.com/400x400"},{"slug":"gedung-olahraga-usu","name":"Gedung Olahraga USU","image":"https://source.unsplash.com/400x400"}]},{"slug":"fasilitas-disabilitas","title":"Fasilitas Disabilitas","fasilitasList":[{"slug":"kantor-layanan-disabilitas","name":"Kantor Layanan Disabilitas","image":"https://source.unsplash.com/400x400"},{"slug":"fasilitas-kursi-roda","name":"Fasilitas Kursi Roda","image":"https://source.unsplash.com/400x400"}]}]');
;// CONCATENATED MODULE: ./pages/[language]/fasilitas/index.tsx
/* eslint-disable no-empty-pattern */ /* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 







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
const FasilitasPage = ({})=>{
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const { 0: activeDropdown , 1: setActiveDropdown  } = (0,external_react_.useState)("");
    const changeDropdown = (title)=>{
        setActiveDropdown(title);
    };
    const selectedLanguage = (0,check_language/* selectLanguage */.V)(language);
    const param = `/${selectedLanguage}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.beranda */.Z.beranda)((0,check_language/* selectLanguage */.V)(language)),
                            " | Fasilitas Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fasilitas",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/fasilitas/banner-fasilitas.jpg",
                        alt: "Group discussion at USU",
                        className: "img-hero"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "second-hero",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Fasilitas Kampus"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "daftar-fasilitas",
                        children: fasilitas_namespaceObject.map((fasilitas)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: fasilitas.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "gallery-image",
                                        children: fasilitas.fasilitasList.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item-list",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "img-box",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            className: "img-box",
                                                            src: item.image,
                                                            alt: "fasilitas usu"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: `${param}/fasilitas/${item.slug}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "caption-box",
                                                            children: item.name
                                                        })
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            }))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "contactus",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Hubungi Kami"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Kami adalah pusat unggulan pendidikan dokter tropis dan onkologi pencegahan di Asia Tenggara"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "material-icons",
                                        children: "launch"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Kunjungi Laman"
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
/* harmony default export */ const fasilitas = (FasilitasPage);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(3965)));
module.exports = __webpack_exports__;

})();