"use strict";
(() => {
var exports = {};
exports.id = 8465;
exports.ids = [8465];
exports.modules = {

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInfiniteScroll = (callback, component)=>{
    const { 0: isFetching , 1: setIsFetching  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleScroll = ()=>{
        const wrappedElement = document.getElementById(component);
        if (wrappedElement) {
            if (window.innerHeight + document.documentElement.scrollTop < wrappedElement.offsetHeight + 100 || isFetching) return;
            setIsFetching(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isFetching) return;
        callback();
    }, [
        isFetching
    ]);
    return [
        isFetching,
        setIsFetching
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);


/***/ }),

/***/ 2194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ calon_mahasiswa),
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
// EXTERNAL MODULE: ./helpers/infinite-scroll.ts
var infinite_scroll = __webpack_require__(668);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
;// CONCATENATED MODULE: ./pages/[language]/calon-mahasiswa.json
const calon_mahasiswa_namespaceObject = JSON.parse('{"Xk":"/images/calon-mahasiswa-head.jpg","UT":[{"image":"/images/kedokteran/doctors.jpg","title":"Program Vokasi"},{"image":"/images/kedokteran/doctors.jpg","title":"Program Sarjana"},{"image":"/images/kedokteran/doctors.jpg","title":"Program Pascasarjana"},{"image":"/images/kedokteran/doctors.jpg","title":"Program Profesi"},{"image":"/images/kedokteran/doctors.jpg","title":"Program Internasional"}],"rA":[{"name":"Fakultas Kedokteran","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Hukum","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Pertanian","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Teknik","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Ekonomi dan Bisnis","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Kedokteran Gigi","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Ilmu Budaya","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Matematikan dan Ilmu Pengetahuan Alam","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Ilmu Sosial dan Ilmu Politik","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Kesehatan Masyarakat","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Keperawatan","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Psikologi","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Farmasi","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Ilmu Komputer dan Teknologi Informasi","image":"/images/kedokteran/doctors.jpg"},{"name":"Fakultas Kehutanan","image":"/images/kedokteran/doctors.jpg"},{"name":"Sekolah Pascasarjana","image":"/images/kedokteran/doctors.jpg"}],"WR":[{"url":"#","type":"Kampus Merdeka","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister.","link":[{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."},{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."},{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."}]},{"type":"Penelitian","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister.","link":[{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."},{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."},{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."}]},{"type":"Pengabdian Masyarakat","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister.","link":[{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."},{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."},{"url":"#","image":"/images/kedokteran/doctors.jpg","title":"HK Haibin China dan USU Pertukaran Mahasiswa","description":"R III mengatakan, kerja sama antara kedua belah pihak ini bertujuan untuk pertukaran mahasiswa antara HK Haibin dan USU di bidang magister."}]}],"dP":[{"icon":"/images/icons/ukm/sports-icon.png","title":"Bidang Olahraga","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/beladiri-icon.png","title":"Bidang Bela Diri","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/rohani-icon.png","title":"Bidang Kerohanian","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/organisasi-icon.png","title":"Bidang Keorganisasian","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/pkm-icon.png","title":"Bidang Pekan Kreatif Mahasiswa","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/itikom-icon.png","title":"Bidang Inovasi Teknologi Informasi dan Komunikasi (ITIKOM)","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/ulk-icon.png","title":"Unit Lembaga Kesenian (ULK)","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/debat-icon.png","title":"Unit Debat Bahasa","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/pengabdian-icon.png","title":"Unit Pengabdian Masyarakat","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/sec-icon.png","title":"Student Enterpreunership Center (SEC)","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/upkbm-icon.png","title":"Bidang Pelayanan Konsultasi dan Bimbingan Mahasiswa (UPKBM)","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]},{"icon":"/images/icons/ukm/jurnalistik-icon.png","title":"Bidang Jurnalistik","list":[{"title":"Sepak Bola","url":"#"},{"title":"Bola Basket","url":"#"},{"title":"Bola Voli","url":"#"}]}],"sb":[{"slug":"durasi-kunjungan","question":"Berapa lama durasi kunjungan kampus?","answer":"Sesi kunjungan untuk keliling kampus menghabiskan waktu 120 menit"},{"slug":"pintu-kampus","question":"Kalau ke kampus masuk dari pintu berapa?","answer":"Sesi kunjungan untuk keliling kampus menghabiskan waktu 120 menit"},{"slug":"parkir","question":"Apakah ada fasilitas parkir di lingkungan kampus?","answer":"Sesi kunjungan untuk keliling kampus menghabiskan waktu 120 menit"}],"iU":[{"image":"/images/kedokteran/doctors.jpg","title":"Rumah Tjong A Fie","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"image":"/images/kedokteran/doctors.jpg","title":"Graha Maria Annai Velangkanni","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"image":"/images/kedokteran/doctors.jpg","title":"Danau Toba","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]}');
;// CONCATENATED MODULE: ./pages/[language]/calon-mahasiswa.tsx
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
const CalonMahasiswaPage = ({})=>{
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const url = `/faculties?lang=${language}&selected=true&limit=50&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page}`);
    const { 0: activeDropdownUKM , 1: setActiveDropdownUKM  } = (0,external_react_.useState)("");
    const { 0: activeDropdownFAQ , 1: setActiveDropdownFAQ  } = (0,external_react_.useState)("");
    const changeDropdownUKM = (title)=>{
        setActiveDropdownUKM(title);
    };
    const changeDropdownFAQ = (title)=>{
        setActiveDropdownFAQ(title);
    };
    // infinite scroll //
    const handleLoadMore = ()=>{
        const nextPage = page + 1;
        setPage(nextPage);
        setFetchUrl(`${url}page=${nextPage}`);
    };
    const [isFetching, setIsFetching] = (0,infinite_scroll/* default */.Z)(handleLoadMore, "article-item");
    (0,external_react_.useEffect)(()=>{
        setIsFetching(false);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "calon-mahasiswa",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-image",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: calon_mahasiswa_namespaceObject.Xk,
                                alt: "Calon Mahasiswa"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "banner",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Calon Mahasiswa"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "program-pendidikan",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Program Pendidikan"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "block-container",
                                children: calon_mahasiswa_namespaceObject.UT.map((program)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "block-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: program.image,
                                                alt: program.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: program.title
                                            })
                                        ]
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "fakultas-sekolah",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "abstract",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Fakultas dan Sekolah"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "subtitle",
                                        children: "Universitas Sumatera Utara menyelenggarakan berbagai program pendidikan meliputi program sarjana, pascasarjana, profesi, spesialis, dan diploma. Beberapa fakultas juga menyelenggarakan program internasional baik pada program sarjana maupun pascasarjana."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "list",
                                children: calon_mahasiswa_namespaceObject.rA.map((fakultas, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "fakultas-item",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: fakultas.image,
                                                alt: fakultas.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: index % 2 === 0 ? "name bg-green" : "name bg-yellow",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: fakultas.name
                                                })
                                            })
                                        ]
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "informasi-mahasiswa-baru",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "description",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Penerimaan mahasiswa baru tahun ajaran sudah dibuka. Informasi jalur penerimaan dan jadwal penerimaan mahasiswa, serta pendaftaran online calon mahasiswa baru selengkapnya dapat diakses melalui tautan-tautan berikut."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "btn-wrapper-left",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "btn-red",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Informasi Pendaftaran"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/icons/launch-icon.png",
                                                        alt: "launch"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "btn-green",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Biaya Pendidikan"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/icons/pdf-icon.png",
                                                        alt: "pdf"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "image",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/mahasiswa-kompetisi.jpg",
                                    alt: "Informasi Mahasiswa Baru"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "berita-kampus",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Berita Kampus"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "berita-list",
                                children: calon_mahasiswa_namespaceObject.WR.map((berita, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: index % 2 === 0 ? "berita-item bg-yellow" : "berita-item bg-green",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: berita.type
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: berita.image,
                                                alt: berita.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: berita.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: berita.description
                                            }),
                                            berita.link.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "recommended-berita",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "image",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: link.image,
                                                                alt: link.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "description",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: link.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: link.description
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "more-link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: berita.url,
                                                    children: "Baca Selengkapnya"
                                                })
                                            })
                                        ]
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "unit-kegiatan-mahasiswa",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Unit Kegiatan Mahasiswa"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "ukm-list",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "list",
                                        children: calon_mahasiswa_namespaceObject.dP.map((ukm, index)=>index < 6 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: activeDropdownUKM === ukm.title ? "ukm-item active" : "ukm-item",
                                                onClick: ()=>{
                                                    if (activeDropdownUKM === ukm.title) {
                                                        changeDropdownUKM("");
                                                    } else {
                                                        changeDropdownUKM(ukm.title);
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "dropdown-title",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "title",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: ukm.icon,
                                                                    alt: ukm.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text",
                                                                    children: ukm.title
                                                                }),
                                                                activeDropdownUKM === ukm.title ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/images/icons/remove-icon.png",
                                                                    alt: "remove"
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/images/icons/add-icon-white.png",
                                                                    alt: "add"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "dropdown-content",
                                                        children: ukm.list.map((list)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "content",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: list.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/images/icons/launch-primary.png",
                                                                                alt: "launch"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Detail"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }))
                                                    })
                                                ]
                                            }))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "list",
                                        children: calon_mahasiswa_namespaceObject.dP.map((ukm, index)=>index >= 6 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: activeDropdownUKM === ukm.title ? "ukm-item active" : "ukm-item",
                                                onClick: ()=>{
                                                    if (activeDropdownUKM === ukm.title) {
                                                        changeDropdownUKM("");
                                                    } else {
                                                        changeDropdownUKM(ukm.title);
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "dropdown-title",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "title",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: ukm.icon,
                                                                    alt: ukm.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text",
                                                                    children: ukm.title
                                                                }),
                                                                activeDropdownUKM === ukm.title ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/images/icons/remove-icon.png",
                                                                    alt: "remove"
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/images/icons/add-icon-white.png",
                                                                    alt: "add"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "dropdown-content",
                                                        children: ukm.list.map((list)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "content",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: list.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/images/icons/launch-primary.png",
                                                                                alt: "launch"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Detail"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }))
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "kunjungi-kampus",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "questions",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Kunjungi Kampus"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Kunjungan kampus ini untuk calon mahasiswa Universitas Sumatera Utara. Anda akan melihat secara langsung bagaimana suasana kampus kami, termasuk fasilitas, mahasiswa dan kehidupan di dalam kampus."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "btn-wrapper-left",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            className: "btn-yellow",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Mulai Berkunjung"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/icons/launch-icon.png",
                                                    alt: "launch"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Pertanyaan yang sering diajukan"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "question-list",
                                        children: calon_mahasiswa_namespaceObject.sb.map((faq)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: activeDropdownFAQ === faq.slug ? "faq-item active" : "faq-item",
                                                onClick: ()=>{
                                                    if (activeDropdownFAQ === faq.slug) {
                                                        changeDropdownFAQ("");
                                                    } else {
                                                        changeDropdownFAQ(faq.slug);
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "dropdown-title",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: faq.question
                                                            }),
                                                            activeDropdownFAQ === faq.slug ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/icons/remove-icon.png",
                                                                alt: "remove"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/icons/add-icon.png",
                                                                alt: "add"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "dropdown-content",
                                                        children: faq.answer
                                                    })
                                                ]
                                            }))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "akses-transportasi",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "Akses dan Transportasi"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Bagi kamu yang diluar pulau sumatera, terdapat banyak transportasi yang dapat digunakan untuk sampai ke kampus kami, mulai dari transportasi darat, laut hingga udara. Berikut ini adalah rute yang dapat ditempuh:",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "luar-medan",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Dari Luar Medan"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "image",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/icons/bus-stop.png",
                                                            alt: "bus stop icon"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Jika menggunakan transportasi darat menggunakan bus, turun di terminal Amplas, Lalu lanjutkan dengan menggunakan angkutan umum lainnya dengan waktu tempuh sekitar 45 menit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "image",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/icons/airplane.png",
                                                            alt: "airplane icon"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Jika menggunakan transportasi udara menggunakan pesawat, turun di Bandara Kualanamu, Lalu lanjutkan dengan menggunakan angkutan umum lainnya dengan waktu tempuh sekitar 120 menit."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "image",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/images/icons/cruise.png",
                                                            alt: "cruise icon"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Jika menggunakan transportasi laut menggunakan kapal laut, turun di Pelabuhan Belawan, Lalu lanjutkan dengan menggunakan angkutan umum lainnya dengan waktu tempuh sekitar 120 menit."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "beasiswa",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content-wrapper",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/kakak_pendidikan.png",
                                        alt: "Kakak Pendidikan"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "content-description",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Beasiswa"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Informasi seputar beasiswa untuk mahasiswa di Universitas Sumatera Utara"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "btn-wrapper-left",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "btn-green",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Beasiswa USU"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/images/icons/launch-icon.png",
                                                        alt: "launch"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "fasilitas-kampus",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Fasilitas Kampus"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "image-wrapper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/kedokteran/doctors.jpg",
                                        alt: "Dokter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/kedokteran/doctors.jpg",
                                        alt: "Dokter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/kedokteran/doctors.jpg",
                                        alt: "Dokter"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "btn-wrapper",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "btn-yellow",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Fasilitas Lainnya"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/icons/launch-icon.png",
                                            alt: "launch"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "wisata_kota_medan",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "big-title",
                                children: "Wisata Kota Medan"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "wisata-list",
                                children: calon_mahasiswa_namespaceObject.iU.map((wisata, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: index % 2 === 0 ? `wisata-item wisata-${index + 1}` : `wisata-item wisata-${index + 1} even-item`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "image",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: wisata.image,
                                                    alt: wisata.title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "description",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            children: wisata.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: wisata.description
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "btn-wrapper",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "btn-green",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Wisata Lainnya"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/icons/launch-icon.png",
                                            alt: "launch"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "kunjungi-medan",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "btn-yellow",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Kunjungi Kota Medan"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/icons/launch-icon.png",
                                    alt: "launch"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const calon_mahasiswa = (CalonMahasiswaPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(2194)));
module.exports = __webpack_exports__;

})();