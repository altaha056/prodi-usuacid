"use strict";
(() => {
var exports = {};
exports.id = 1950;
exports.ids = [1950,8882,5319,9677];
exports.modules = {

/***/ 3626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ DedicationMaker)
/* harmony export */ });
class DedicationMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            image: event.image,
            location: event.location,
            shortDescription: event.short_description,
            description: event.description,
            author: event.author,
            date: event.created_at,
            authordiv: event.authordiv || null,
            photographer: event.photographer || null,
            photographerdiv: event.photographerdiv || null,
            interviewees: event.interviewees || null,
            intervieweesdiv: event.intervieweesdiv || null,
            language: event.language,
            slug: event.slug,
            imagetitle: event.imagetitle || null
        };
    }
}


/***/ }),

/***/ 2766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_headline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3615);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7318);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3271);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6378);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_research__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3373);
/* harmony import */ var _page_components_common_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8577);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _models_dedication__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3626);
/* harmony import */ var _models_public_lecture__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8790);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pimpinan_universitas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(100);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable react/jsx-one-expression-per-line */ 

















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
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(context.params.language);
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
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/headline?lang=${lang.value}&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/research?lang=${lang.value}&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/public-lecture?lang=${lang.value}&page=1&limit=8&selected=true`),
            _config_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(`/dedication?lang=${lang.value}&page=1&limit=3&selected=true`), 
        ]);
        console.log(response[0].data);
        const headlines = response[0].data.data?.map((res)=>_models_headline__WEBPACK_IMPORTED_MODULE_12__/* .HeadlineMaker.create */ .Z.create({
                ...res,
                imageHeight: "100vh"
            }) || []);
        const selectedFocus = response[1].data.data.data[0] ? _models_research__WEBPACK_IMPORTED_MODULE_13__/* .ResearchMaker.create */ .d.create(response[1].data.data.data[0]) : null;
        const indexResearch = response[1].data.data.data?.map((res)=>_models_research__WEBPACK_IMPORTED_MODULE_13__/* .ResearchMaker.create */ .d.create(res));
        const fakultasSekolah = response[2].data.data?.map((res)=>_models_public_lecture__WEBPACK_IMPORTED_MODULE_14__/* .PublicLectureMaker.create */ .I.create(res));
        const indexDedication = response[3].data.data.data?.map((res)=>_models_dedication__WEBPACK_IMPORTED_MODULE_15__/* .DedicationMaker.create */ .h.create(res));
        console.log(headlines);
        return {
            props: {
                headlines,
                selectedFocus,
                indexResearch,
                fakultasSekolah,
                indexDedication
            },
            revalidate: 30
        };
    } catch (e) {
        console.log("ERROR: ");
        console.log(e);
        return {
            props: {
                headlines: [],
                selectedFocus: null,
                indexResearch: [],
                fakultasSekolah: [],
                IndexDedication: []
            },
            revalidate: 30
        };
    }
};
const Home = ({ headlines , selectedFocus , indexResearch , fakultasSekolah , indexDedication ,  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_7___default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { language  } = router.query;
    const { 0: visiMisi , 1: setVisiMisi  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {
            title: "Visi",
            line1: "Menjadi perguruan tinggi yang memiliki keunggulan akademik sebagai barometer kemajuan ilmu pengetahuan yang mampu bersaing dalam tataran dunia global",
            line2: "",
            line3: "",
            line4: "",
            line5: "",
            line6: "",
            line7: ""
        },
        {
            title: "Misi",
            line1: "1. Menyelenggarakan pendidikan tinggi berbasis otonomi yang menjadi wadah bagi pengembangan karakter dan profesionalisme sumber daya manusia yang didasarkan pada pemberdayaan yang mengandung semangat demokratisasi pendidikan yang mengakui kemajemukan dengan orientasi pendidikan yang menekankan pada aspek pencarian alternatif penyelesaian masalah aktual berlandaskan kajian ilmiah, moral, dan hati nurani;",
            line2: "2. Menghasilkan lulusan yang menjadi pelaku perubahan sebagai kekuatan modernisasi dalam kehidupan masyarakat luas, yang memiliki kompetensi keilmuan, relevansi dan daya saing yang kuat, serta berperilaku kecendikiawanan yang beretika;",
            line3: "dan 3. Melaksanakan, mengembangkan, dan meningkatkan pendidikan, budaya penelitian dan program pengabdian masyarakat dalam rangka peningkatan kualitas akademik dengan mengembangkan ilmu yang unggul, yang bermanfaat bagi perubahan kehidupan masyarakat luas yang lebih baik.",
            line4: "",
            line5: "",
            line6: "",
            line7: ""
        },
        {
            title: "Tujuan",
            line1: "1. Menghasilkan lulusan yang berkualitas yang mampu mengembangkan ilmu pengetahuan, teknologi, humaniora, dan seni, berdasarkan moral agama, serta mampu bersaing di tingkat nasional dan internasional",
            line2: "2. Menghasilkan penelitian inovatif yang mendorong pengembangan ilmu pengetahuan, teknologi, humaniora, dan seni dalam lingkup nasional dan internasional;",
            line3: "3. Menghasilkan pengabdian kepada masyarakat berbasis penalaran dan karya penelitian yang bermanfaat dalam memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa dan pemberdayaan masyarakat secara inovatif agar masyarakat mampu menyelesaikan masalah secara mandiri dan berkelanjutan;",
            line4: "4. Mewujudkan kemandirian yang adaptif, kreatif, dan proaktif terhadap tuntutan masyarakat dan tantangan pembangunan, baik secara nasional dan internasional;",
            line5: "5. Meningkatkan kualitas manajemen pembelajaran secara berkesinambungan untuk mencapai keunggulan dalam persaingan dan kerja sama nasional dan internasional;",
            line6: "6. Menjadi kekuaan moral dan intelektual dalam membangun masyarakat madani Indonesia; dan",
            line7: "7. Mengembangkan potensi mahasiswa agar menjadi manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa serta berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri, terampil, kompeten, dan berbudaya untuk kepentingan bangsa."
        }, 
    ]);
    const { 0: openedVisiMisi , 1: setOpenedVisiMisi  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    if ([
        typeof headlines
    ].includes("undefined") || router.isFallback) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_common_loading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
    }
    const toggleOpenVisiMisi = (title)=>{
        const isOpen = openedVisiMisi.includes(title);
        let updated = [];
        if (isOpen) {
            updated = openedVisiMisi.filter((openedTitle)=>openedTitle !== title);
        } else {
            updated = [
                ...openedVisiMisi,
                title
            ];
        }
        setOpenedVisiMisi(updated);
    };
    console.log(headlines);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tentangUSU */ .Z.tentangUSU)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language)),
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "above-the-fold",
                        style: {
                            backgroundImage: `url(/images/ttgusu.jpg)`
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "page-desc col-md-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__subtitle",
                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tentangUSU */ .Z.tentangUSU)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__detail",
                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_4__/* ["default"].tentangUSU_outline */ .Z.tentangUSU_outline)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language))
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-body",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body__title",
                                                children: "Sejarah Kampus"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body__teks",
                                                children: "Sejarah Universitas Sumatera Utara (USU) dimulai dengan berdirinya Yayasan Universitas Sumatera Utara pada tanggal 4 Juni 1952. Pendirian yayasan ini dipelopori oleh Gubernur Sumatera Utara untuk memenuhi keinginan masyarakat Sumatera Utara khususnya dan masyarakat Indonesia umumnya."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body__teks",
                                                children: "Pada zaman pendudukan Jepang, beberapa orang terkemuka di Medan termasuk Dr. Pirngadi dan Dr. T. Mansoer membuat rancangan perguruan tinggi Kedokteran. Setelah kemerdekaan Indonesia, pemerintah mengangkat Dr. Mohd. Djamil di Bukit Tinggi sebagai ketua panitia. Setelah pemulihan kedaulatan akibat clash pada tahun 1947, Gubernur Abdul Hakim mengambil inisiatif menganjurkan kepada rakyat di seluruh Sumatera Utara"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "section-body__img",
                                            src: "/images/sejarahkampus1.jpg"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "section-body__img1",
                                            src: "/images/firstCollege.jpg"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "section-body__teks1",
                                            children: "Pada tanggal 31 Desember 1951 dibentuk panitia persiapan pendirian perguruan tinggi yang diketuai oleh Dr. Soemarsono yang anggotanya terdiri dari Dr. Ahmad Sofian, Ir. Danunagoro dan sekretaris Mr. Djaidin Purba. Sebagai hasil kerjasama dan bantuan moril dan material dari seluruh masyarakat Sumatera Utara yang pada waktu itu meliputi juga Daerah Istimewa Aceh, pada tanggal 20 Agustus 1952 berhasil didirikan Fakultas Kedokteran di Jalan Seram dengan dua puluh tujuh orang mahasiswa diantaranya dua orang wanita. Kemudian disusul dengan berdirinya Fakultas Hukum dan Pengetahuan Masyarakat (1954),"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "section-numberusu",
                                    style: {
                                        marginTop: "50px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "Pimpinan Universitas"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: "article-item row section-numberusu__garisoren"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-md-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-body__pimpinantitle",
                                                    children: "Dr. Muryanto Amin, S.Sos, M.Si"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-body__pimpinanteks",
                                                    children: "Rektor Universitas Sumatera Utara"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "section-body__pimpinanteks1",
                                                    children: "Dr Muryanto Amin, S Sos, M Si, dilantik sebagai Rektor Universitas Sumatera Utara (USU) periode 2021-2026, pada tanggal 28 Januari 2021, di Gedung Kemendikbudristek, Jakarta Pusat. Mantan Dekan Fakultas Ilmu Sosial dan Ilmu Politik USU tersebut merupakan Rektor USU termuda, yang dilantik pada usia 47 tahun."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "section-body__pimpinanimg",
                                                src: "/images/pakrektor.png"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-body-pimpinan",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pimpinan_universitas__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            photos: null
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-body-profil",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-md-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body-profil__title",
                                                children: "Profil Kampus"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body-profil__teks",
                                                children: "Kampus USU berlokasi di Padang Bulan dengan area seluas 120 ha yang terletak di tengah Kota Medan. Zona akademik seluas 90 ha dapat menampung hampir seluruh kegiatan kuliah dan praktikum mahasiswa. Sistem pembelajaran didukung oleh fasilitas perpustakaan dan lebih dari 200 laboratorium. Perpustakaan menyediakan berbagai jenis sumber belajar, baik dalam bentuk cetak maupun elektronik"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "section-body-profil__teks",
                                                children: "Kampus Padang Bulan memiliki infrastrukturteknologi informasi untuk memfasilitasi akses terhadap berbagai sumber daya informasi dan pengetahuan untuk mendukung proses pembelajaran dan penelitian mahasiswa dan dosen. Selain itu, di dalam kampus juga terdapat berbagai sarana, seperti asrama, arena olahraga, wisma, kafetaria, toko, bank, dan kantor pos. Wisuda dan berbagai acara akademik"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "section-body-profil__img",
                                            src: "/images/profilkampus.png"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "visi-misi",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "visi-misi__title",
                                    children: [
                                        "Visi, Misi & ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Tujuan"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "visi-misi__list",
                                    children: visiMisi.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_9___default()("visi-misi__item", {
                                                active: openedVisiMisi.includes(item.title)
                                            }),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "visi-misi__item__title",
                                                    onClick: ()=>toggleOpenVisiMisi(item.title),
                                                    children: [
                                                        item.title,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_8__.ChevronDown, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line1
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line2
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line3
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line4
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line5
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line6
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.line7
                                                })
                                            ]
                                        }, `visi-misi-${item.title}`))
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


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

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 9101:
/***/ ((module) => {

module.exports = require("react-feather");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378,8577,3717,100], () => (__webpack_exec__(2766)));
module.exports = __webpack_exports__;

})();