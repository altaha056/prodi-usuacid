"use strict";
(() => {
var exports = {};
exports.id = 3966;
exports.ids = [3966];
exports.modules = {

/***/ 4148:
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
// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
;// CONCATENATED MODULE: ./pages/[language]/fasilitas/detail_fasilitas.json
const detail_fasilitas_namespaceObject = JSON.parse('[{"slug":"taman-usu","title":"Taman USU","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"bus-lintas-usu","title":"Auditorium USU","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"auditorium-usu","title":"Bus Lintas USU","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"gedung-pancasila-usu","title":"Gedung Pancasila USU","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"laboratorium-terpadu-usu","title":"Laboratorium Terpadu USU","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"asrama-mahasiswa-usu","title":"Asrama Mahasiswa USU","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"rumah-sakit-gigi-dan-mulut","title":"Fasilitas Umum","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"rumah-sakit-usu","title":"Fasilitas Umum","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"poliklinik-usu","title":"Fasilitas Umum","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"stadion-mini-usu","title":"Fasilitas Umum","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"track-lari-auditorim-usu","title":"Fasilitas Umum","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"kantor-layanan-disabilitas","title":"Fasilitas Umum","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"},{"slug":"fasilitas-kursi-roda","title":"Fasilitas Umum","gambaran":"Fasilitas penunjang kegiatan belajar mahasiswa serta sarana pendukung kegiatan mahasiswa untuk berkreasi dan berekspresi.","informasi":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus.","umum":"Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus. Kunjungan kampus ini untuk calon mahasiswa.","gambar":"https://source.unsplash.com/1600x900"}]');
;// CONCATENATED MODULE: ./pages/[language]/fasilitas/[slug].tsx
/* eslint-disable no-empty-pattern */ /* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 







async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    language: "id",
                    slug: "taman-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "taman-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "bus-lintas-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "bus-lintas-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "auditorium-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "auditorium-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "gedung-pancasila-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "gedung-pancasila-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "laboratorium-terpadu-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "laboratorium-terpadu-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "asrama-mahasiswa-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "asrama-mahasiswa-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "rumah-sakit-gigi-dan-mulut"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "rumah-sakit-gigi-dan-mulut"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "rumah-sakit-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "rumah-sakit-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "poliklinik-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "poliklinik-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "stadion-mini-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "stadion-mini-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "track-lari-auditorim-usu"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "track-lari-auditorim-usu"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "kantor-layanan-disabilitas"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "kantor-layanan-disabilitas"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "fasilitas-kursi-roda"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "fasilitas-kursi-roda"
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
const FasilitasDetailPage = ({})=>{
    const router = (0,router_.useRouter)();
    const { language , slug  } = router.query;
    const detailFasilitas = detail_fasilitas_namespaceObject.find((obj)=>obj.slug === slug);
    const selectedLanguage = (0,check_language/* selectLanguage */.V)(language);
    const param = `/${selectedLanguage}`;
    (0,external_react_.useEffect)(()=>{
        if (detailFasilitas === undefined) {
            router.push("/");
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fasilitas",
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
            detailFasilitas && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fasilitas",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: detailFasilitas.gambar,
                        alt: "Group discussion at USU",
                        className: "img-hero"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "second-hero",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: detailFasilitas.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: detailFasilitas.gambaran
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "detail-fasilitas",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "box-item-fasilitas",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item-list",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "caption-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Informasi"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: detailFasilitas.informasi
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "judul",
                                                children: "Umum"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: detailFasilitas.umum
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: `${param}/fasilitas`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "button-green",
                                                    children: "Fasilitas Lainnya"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item-list",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img-box",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: detailFasilitas.gambar,
                                            alt: "fasilitas USU"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
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
    });
};
/* harmony default export */ const _slug_ = (FasilitasDetailPage);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(4148)));
module.exports = __webpack_exports__;

})();