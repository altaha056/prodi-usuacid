"use strict";
(() => {
var exports = {};
exports.id = 7500;
exports.ids = [7500];
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

/***/ 4135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
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
// EXTERNAL MODULE: ./config/sirenbang-axios.tsx + 1 modules
var sirenbang_axios = __webpack_require__(9740);
// EXTERNAL MODULE: ./page-components/common/loading.tsx
var loading = __webpack_require__(8577);
;// CONCATENATED MODULE: external "antd"
const external_antd_namespaceObject = require("antd");
;// CONCATENATED MODULE: ./pages/[language]/program-studi/[slug].tsx
/* eslint-disable no-empty-pattern */ /* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 








const getServerSideProps = async (context)=>{
    const lang = await (0,check_language/* default */.Z)(context.params.language);
    const { language , slug  } = context.params;
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await sirenbang_axios/* default.get */.Z.get(`/api/post?site=USU&lang=${language}&slug=${slug}`);
        if (response.data.post) {
            return {
                props: {
                    prodiData: response.data.post
                }
            };
        }
        return {
            notFound: true
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
};
const ProgramStudiDetailPage = ({ prodiData  })=>{
    const router = (0,router_.useRouter)();
    const { language , slug  } = router.query;
    const { 0: modal2Open , 1: setModal2Open  } = (0,external_react_.useState)(false);
    const { 0: objectModal , 1: setObjectModal  } = (0,external_react_.useState)();
    const munculPesan = (judul)=>{
        setObjectModal(judul);
        setModal2Open(true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: prodiData ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "prodi",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                            children: [
                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.programStudi */.Z.programStudi)((0,check_language/* selectLanguage */.V)(language)),
                                " | Prodi Universitas Sumatera Utara"
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
                prodiData && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "prodi",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            loading: "lazy",
                            src: prodiData.content.gambarCover,
                            className: "cover-banner"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content-section",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "title",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    children: prodiData.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: prodiData.content.gambaran
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "akreditasi",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "foto",
                                                    style: {
                                                        backgroundImage: `url(${prodiData.content.akreditasiGambar})`
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "detail",
                                                    style: {
                                                        backgroundImage: `linear-gradient(to bottom, rgba(0, 102, 51, 0.9), rgba(0, 102, 51, 0.9)),url(${prodiData.content.akreditasiBg})`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "item",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                    children: prodiData.title
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    children: [
                                                                        "Terakreditasi ",
                                                                        prodiData.content.akreditasiStatus
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: prodiData.content.akreditasiKodeSk
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: prodiData.content.gambarSk,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/prodi/link.svg",
                                                                className: "link"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "profil-lulusan",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "judul",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Profil Lulusan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "garis"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "konten",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: prodiData.content.profilLulusanGambar,
                                                    alt: prodiData.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: prodiData.content.profilLulusanDeskripsi
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "capaian-lulusan",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "judul",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Capaian Pembelajaran Lulusan"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "garis"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "konten",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: prodiData.content.capaianPembelajaranDeskripsi
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "daftar",
                                                    children: prodiData.content.capaianPembelajaranDaftar.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "daftar-konten",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "nomor",
                                                                    children: i + 1
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: x
                                                                })
                                                            ]
                                                        }))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "lama-studi",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "judul",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Lama Studi"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "garis"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "konten",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: prodiData.content.lamaStudi
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                prodiData && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "kelompok-keilmuan",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Kelompok Keilmuan"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "slider",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container-kelompok-keilmuan",
                                children: [
                                    prodiData.content.kelompokKeilmuan.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item-kelompok-keilmuan",
                                            onClick: ()=>munculPesan(x),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: x.image,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: x.label
                                                })
                                            ]
                                        }, i)),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_namespaceObject.Modal, {
                                        centered: true,
                                        open: modal2Open,
                                        onOk: ()=>setModal2Open(false),
                                        onCancel: ()=>setModal2Open(false),
                                        footer: [],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                style: {
                                                    fontSize: "24px",
                                                    fontWeight: "600",
                                                    textAlign: "left"
                                                },
                                                children: objectModal?.label
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: objectModal?.image,
                                                alt: objectModal?.label,
                                                style: {
                                                    width: "100%",
                                                    maxHeight: "150px",
                                                    objectFit: "cover",
                                                    margin: "20px 0px",
                                                    borderRadius: "10px"
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    fontSize: "16px",
                                                    fontWeight: "400",
                                                    textAlign: "justify"
                                                },
                                                children: objectModal?.deskripsi
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                prodiData && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "prodi",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "biaya-pendidikan",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "judul",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Biaya Pendidikan"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: prodiData.title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: prodiData.content.biayaPendidikan.map((x)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jenis",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: x.tingkat
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "biaya",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: x.biaya
                                                })
                                            })
                                        ]
                                    }))
                            })
                        ]
                    })
                }),
                prodiData && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "kontak",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "konten",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "judul",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "prodi",
                                        children: [
                                            "Kontak ",
                                            prodiData.title
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fakultas",
                                        children: [
                                            "Fakultas ",
                                            prodiData.content?.fakultas
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "universitas",
                                        children: "Universitas Sumatera Utara"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "detail",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "alamat",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/icons/map-icon.svg",
                                                alt: "alamat"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: prodiData.content?.alamat
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "telepon",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/icons/telephone-icon.svg",
                                                        alt: "phone number"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: prodiData.content?.nomorTelepon
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "email",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/icons/mail-icon.svg",
                                                        alt: "email address"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: prodiData.content?.email
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "sosmed",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: prodiData.content?.youtube,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/icons/youtube-logo.png",
                                                    alt: "youtube"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: prodiData.content?.instagram,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/icons/instagram-logo.png",
                                                    alt: "instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: prodiData.content?.facebook,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
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
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(loading/* default */.Z, {})
    });
};
/* harmony default export */ const _slug_ = (ProgramStudiDetailPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [3271,6378,8577], () => (__webpack_exec__(4135)));
module.exports = __webpack_exports__;

})();