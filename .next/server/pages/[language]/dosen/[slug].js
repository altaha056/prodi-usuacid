"use strict";
(() => {
var exports = {};
exports.id = 3297;
exports.ids = [3297];
exports.modules = {

/***/ 511:
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
;// CONCATENATED MODULE: ./pages/[language]/dosen/dosen.json
const dosen_namespaceObject = JSON.parse('[{"slug":"masfria","name":"Prof.Dr. Masfria, MS., Apt","image":"/images/dosen/masfria.jpg","nip":"195707231986012001","email":"fia.mustafa@yahoo.com","fakultas":"Farmasi","url":"#","bio":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","sitasi":{"bidangKepakaran":["Kimia Farmasi","Radio Farmasi"],"url":{"googleScholar":"https://scholar.google.co.id/citations?user=IAtA_HMAAAAJ&hl=id","researchGate":"https://www.researchgate.net/scientific-contributions/Masfria-Masfria-2229838794","sinta":"https://sinta.kemdikbud.go.id/authors/profile/6124718","scopus":"https://www.scopus.com/authid/detail.uri?authorId=56297193800"}},"latarPendidikan":[{"jenjang":"Doktor","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"jenjang":"Master","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"jenjang":"Sarjana","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}],"penelitianPublikasi":[{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"},{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"}],"pengabdianMasyarakat":[{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"},{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"}]},{"slug":"harry-agusnar","name":"Prof.Dr. Harry Agusnar, M.Sc","image":"/images/dosen/masfria.jpg","nip":"195707231986012001","email":"fia.mustafa@yahoo.com","fakultas":"Matematika dan Ilmu Pengetahuan Alam","url":"#","bio":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","sitasi":{"bidangKepakaran":["Kimia Farmasi","Radio Farmasi"],"url":{"googleScholar":"https://scholar.google.co.id/citations?user=IAtA_HMAAAAJ&hl=id","researchGate":"https://www.researchgate.net/scientific-contributions/Masfria-Masfria-2229838794","sinta":"https://sinta.kemdikbud.go.id/authors/profile/6124718","scopus":"https://www.scopus.com/authid/detail.uri?authorId=56297193800"}},"latarPendidikan":[{"jenjang":"Doktor","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"jenjang":"Master","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"jenjang":"Sarjana","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}],"penelitianPublikasi":[{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"},{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"}],"pengabdianMasyarakat":[{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"},{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"}]},{"slug":"renita-manurung","name":"Prof.Dr. Renita Manurung, MT","image":"/images/dosen/masfria.jpg","nip":"195707231986012001","email":"fia.mustafa@yahoo.com","fakultas":"Teknik","url":"#","bio":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","sitasi":{"bidangKepakaran":["Kimia Farmasi","Radio Farmasi"],"url":{"googleScholar":"https://scholar.google.co.id/citations?user=IAtA_HMAAAAJ&hl=id","researchGate":"https://www.researchgate.net/scientific-contributions/Masfria-Masfria-2229838794","sinta":"https://sinta.kemdikbud.go.id/authors/profile/6124718","scopus":"https://www.scopus.com/authid/detail.uri?authorId=56297193800"}},"latarPendidikan":[{"jenjang":"Doktor","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"jenjang":"Master","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{"jenjang":"Sarjana","universitas":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}],"penelitianPublikasi":[{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"},{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"}],"pengabdianMasyarakat":[{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"},{"judul":"Karakterisasi Ekstrak, Profil Senyawa Kimia serta Mekanisme Kerja Ekstrak dan Fraksi Aktif dari Kulit Umbi Bawang Merah (Allium cepa L.) sebagai Antibakteri","skema":"Penelitian Dasar","posisi":"Ketua","status":"Selesai","tahun":"2017","sumber":"Universitas Sumatera Utara"}]}]');
// EXTERNAL MODULE: ./pages/[language]/dosen/dosen_berprestasi.json
var dosen_berprestasi = __webpack_require__(1123);
;// CONCATENATED MODULE: ./pages/[language]/dosen/[slug].tsx
/* eslint-disable no-empty-pattern */ /* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 








async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    language: "id",
                    slug: "masfria"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "masfria"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "harry-agusnar"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "harry-agusnar"
                }
            },
            {
                params: {
                    language: "id",
                    slug: "renita-manurung"
                }
            },
            {
                params: {
                    language: "en",
                    slug: "renita-manurung"
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
const DosenDetailPage = ({})=>{
    const router = (0,router_.useRouter)();
    const { language , slug  } = router.query;
    const dosen = dosen_namespaceObject.find((obj)=>obj.slug === slug);
    const dosenPenelitiTerbaik = dosen_berprestasi.find((obj)=>obj.slug === "peneliti-terbaik");
    (0,external_react_.useEffect)(()=>{
        if (dosen === undefined) {
            router.push("/");
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.beranda */.Z.beranda)((0,check_language/* selectLanguage */.V)(language)),
                            " | Dosen Universitas Sumatera Utara"
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
            dosen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "dosen",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-image",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/usu-from-drone.jpg",
                                alt: "USU from drone",
                                className: "img-hero"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "banner",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: dosen.name
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "profile",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "profile-image",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: dosen.image,
                                            alt: dosen.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "unedited-form",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                children: [
                                                                    "Nama",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                children: dosen.name
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                children: [
                                                                    "NIP",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                children: dosen.nip
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                children: [
                                                                    "Email",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "blue-link",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    children: dosen.email
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "social-media",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/icons/twitter-logo.png",
                                                    alt: "twitter",
                                                    className: "sm-icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/icons/facebook-logo.png",
                                                    alt: "facebook",
                                                    className: "sm-icon"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/icons/instagram-logo.png",
                                                    alt: "instagram",
                                                    className: "sm-icon"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bio-profile",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "big-title",
                                        children: "Profil"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: dosen.bio
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sitasi",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Sitasi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "unedited-form",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item big-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Bidang Kepakaran",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: ":"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "button-list",
                                                children: dosen.sitasi.bidangKepakaran.map((kepakaran)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "button-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "btn-yellow",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                children: kepakaran
                                                            })
                                                        })
                                                    }))
                                            })
                                        ]
                                    }),
                                    dosen.sitasi.url.googleScholar && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item big-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Google Scholar",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: ":"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: dosen.sitasi.url.googleScholar,
                                                    className: "blue-link",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: dosen.sitasi.url.googleScholar
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    dosen.sitasi.url.researchGate && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item big-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Research Gate",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: ":"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: dosen.sitasi.url.researchGate,
                                                    className: "blue-link",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: dosen.sitasi.url.researchGate
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    dosen.sitasi.url.sinta && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item big-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Sinta",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: ":"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: dosen.sitasi.url.sinta,
                                                    className: "blue-link",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: dosen.sitasi.url.sinta
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    dosen.sitasi.url.scopus && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item big-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        "Scopus",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: ":"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: dosen.sitasi.url.scopus,
                                                    className: "blue-link",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: dosen.sitasi.url.scopus
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "latar-akademik",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Latar Belakang Akademik"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "unedited-form",
                                children: dosen.latarPendidikan.map((pendidikan)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item big-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                    children: [
                                                        pendidikan.jenjang,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: ":"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    children: pendidikan.universitas
                                                })
                                            })
                                        ]
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "penelitian-publikasi",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Penelitian dan Publikasi"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "No."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Judul"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Skema"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Posisi"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Status"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Tahun"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Sumber"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                        children: dosen.penelitianPublikasi.map((penelitian, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: index + 1
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.judul
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.skema
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.posisi
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.status
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.tahun
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.sumber
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pengabdian-masyarakat",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Pengabdian pada Masyarakat"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "No."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Judul"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Skema"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Posisi"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Status"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Tahun"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                    children: "Sumber"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                        children: dosen.pengabdianMasyarakat.map((penelitian, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: index + 1
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.judul
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.skema
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.posisi
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.status
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.tahun
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        children: penelitian.sumber
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            })
                        ]
                    }),
                    dosenPenelitiTerbaik && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "peneliti-terbaik",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Daftar Peneliti Terbaik"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "table-wrapper",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "table-transparent",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "Nama"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "Fakultas"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        children: "\xa0"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                            children: dosenPenelitiTerbaik.dosenList.map((obj)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: obj.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: obj.fakultas
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "material-icons",
                                                                        children: "launch"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Detail"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }))
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
/* harmony default export */ const _slug_ = (DosenDetailPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378,1123], () => (__webpack_exec__(511)));
module.exports = __webpack_exports__;

})();