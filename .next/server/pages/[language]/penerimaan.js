"use strict";
(() => {
var exports = {};
exports.id = 7043;
exports.ids = [7043];
exports.modules = {

/***/ 7721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3271);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6378);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7318);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* eslint-disable react/jsx-no-target-blank */ 









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
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].get */ .Z.get(`/photos?lang=${context.params.language}&selected=true&menu=admission&`);
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
const ArticlePage = ({ photos  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_6___default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { language  } = router.query;
    const url = `/admission?lang=${language}&selected=true0&`;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { 0: visiMisi , 1: setVisiMisi  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        {
            title: "Program Mahasiswa SNMPTN",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "SNMPTN adalah seleksi mahasiswa baru berdasarkan hasil penelusuran prestasi akademik calon mahasiswa. SNMPTN bertujuan untuk menyeleksi mahasiswa baru berkualitas secara akademik dengan prinsip ekuitas namun tetap memperhatikan kondisi ekonomi dan asal daerah siswa. Sejak tahun 2013, USU menyediakan sekurang-kurangnya 30% dari total daya tampung program sarjana melalui jalur SNMPTN. Mahasiswa dengan orangtua secara ekonomi kurang mampu diberikan beasiswa KIP Kuliah dari Pemerintah dan/atau beasiswa lainnya yang disediakan oleh USU seperti beasiswa BBM, PPA, dan lainnya.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "SNMPTN merupakan pola seleksi nasional berdasarkan hasil penelusuran prestasi akademik dengan menggunakan rapor semester 1 sampai dengan 5 bagi SMA/SMK/MA atau yang sederajat dengan masa belajar 3 tahun; atau semester 1 sampai dengan 7 bagi SMK dengan masa belajar 4 tahun; serta dengan mempertimbangkan portofolio akademik calon mahasiswa. Siswa yang berhak mengikuti seleksi jalur SNMPTN adalah siswa yang memiliki Nomor Induk Siswa Nasional (NISN) dan memiliki prestasi unggul dan rekam jejak prestasi akademik pada PDSS. Sekolah yang siswanya berhak mengikuti SNMPTN adalah SMA/SMK/MA atau sederajat yang memiliki NPSN dan telah mengisi PDSS dengan lengkap dan benar."
                    ]
                })
            })
        },
        {
            title: "Program Mahasiswa SBMPTN",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "SBMPTN adalah seleksi mahasiswa baru di tingkat nasional dengan menggunakan ujian tulis atau hasil kombinasi antara ujian tulis dan ujian keterampilan. Instrumen yang digunakan untuk seleksi calon mahasiswa jalur SBMPTN adalah ujian tertulis berbasis computer-based testing (CBT) atau disebut Ujian Tulis Berbasis Komputer (UTBK). Ujian tertulis menggunakan soal-soal ujian yang dirancang mengikuti kaidah-kaidah akademik pengembangan tes. Ujian tertulis SBMPTN dirancang untuk mengukur kemampuan dasar yang dapat memprediksi keberhasilan calon mahasiswa di semua Program Studi, yakni kemampuan penalaran tingkat tinggi (higher order thinking), yang meliputi potensi akademik, penguasaan bidang studi dasar, bidang sains dan teknologi (Saintek), dan/atau bidang sosial dan humaniora (Soshum). Selain mengikuti ujian tertulis, peserta yang memilih Program Studi ilmu seni dan/atau keolahragaan diwajibkan mengikuti ujian keterampilan.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "SBMPTN memiliki tujuan: (1) Menyeleksi calon mahasiswa yang diprediksi mampu menyelesaikan studi di perguruan tinggi dengan baik, dan (2) Memberi kesempatan bagi calon mahasiswa untuk memilih lebih dari satu PTN lintas wilayah."
                    ]
                })
            })
        },
        {
            title: "Program Mahasiswa Mandiri",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "Seleksi Mahasiswa Mandiri (SMM) adalah seleksi mahasiswa baru yang dilakukan secara mandiri oleh USU. Seleksi ini menggunakan ujian tulis berbasis komputer sebagai alat ukur yang valid dan reliabel dalam menyeleksi dan menentukan kemampuan akademik calon mahasiswa. USU memiliki otonomi yang lebih besar dalam menentukan kriteria lulus seleksi calon mahasiswa di mana kriteria lulus seleksi disesuaikan dengan karakteristik Program Studi. Seleksi Mahasiswa Mandiri (SMM) ditujukan untuk memenuhi daya tampung Program Studi yang belum terpenuhi pada jalur SNMPTN dan SBMPTN, khususnya beberapa Program Studi yang peminatnya kurang. Informasi dan pedoman tertulis mengenai SMM dapat diakses pada laman",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "www.penerimaan.usu.ac.id.",
                            color: "black",
                            children: "\xa0www.penerimaan.usu.ac.id."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Peserta harus memenuhi persyaratan sebagai berikut:",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            style: {
                                marginLeft: "10px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "1. Tamatan SMTA (SMA, MA, SMK, SMTA luar negeri, ujian persamaan, dsb.) tahun berjalan dan atau paling lama kelulusan 3 (tiga) tahun terakhir"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "2. Tamatan Paket C tahun berjalan atau 3 (tiga) tahun terakhir yang memiliki rapor tiga tahun (selama yang bersangkutan mengikuti program tersebut)"
                                })
                            ]
                        })
                    ]
                })
            })
        },
        {
            title: "Program Pascasarjana",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "Seleksi penerimaan program pascasarjana USU adalah seleksi bagi mahasiswa baru untuk program Pascasarjana baik Program Magister (S2) maupun Program Doktor (S3) yang dilakukan secara mandiri oleh Sekolah Pascasarjana USU. Seleksi dilakukan dalam dua tahapan yaitu ujian Tes Potensi Akademik (TPA) dan seleksi wawancara. Informasi tentang seleksi penerimaan mahasiswa baru Sekolah Pascasarjana terkait tata cara pendaftaran, syarat-syarat pendaftaran, jenis ujian, tempat ujian, waktu pelaksanaan ujian, dan besar biaya perkuliahan dapat diakses melalui",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://penerimaansps.usu.ac.id/",
                            color: "black",
                            children: "https://penerimaansps.usu.ac.id/"
                        }),
                        ". Proses pendaftaran dilakukan secara online sehingga calon mahasiswa dari berbagai lokasi dapat mengakses secara terbuka tanpa harus datang langsung ke Sekolah Pascasarjana USU.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Saat ini USU memiliki 62 program studi pascasarjana yang terdiri atas 40 program studi magister dan 22 program studi doktor, dengan 6 program studi (2 program studi doktor dan 4 program studi magister) di bawah pengelolaan Sekolah Pascasarjana."
                    ]
                })
            })
        },
        {
            title: "Program Diploma",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "Seleksi Penerimaan Mahasiswa Program Diploma (SPMPD) Universitas Sumatera Utara merupakan seleksi penerimaan mahasiswa baru jenjang Diploma (D3) yang diselenggarakan secara mandiri oleh Universitas Sumatera Utara dalam bentuk ujian tertulis berbasis komputer. USU memiliki 14 Program Studi yang termasuk program diploma (D-3) yang peminatnya cukup tinggi. Informasi SPMPD terkait tata cara pendaftaran, syarat-syarat pendaftaran, jenis ujian, tempat ujian, waktu pelaksanaan ujian, dan besar biaya perkuliahan dapat diakses melalui",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "www.usu.ac.id",
                            color: "black",
                            children: "www.usu.ac.id."
                        }),
                        " ",
                        "Proses pendaftaran SPMPD dilakukan secara online sehingga calon mahasiswa dari berbagai lokasi dapat mengakses secara terbuka tanpa harus datang langsung ke USU."
                    ]
                })
            })
        },
        {
            title: "PPDS",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "justify",
                        fontFamily: "Public Sans"
                    },
                    children: [
                        "Program Pendidikan Dokter Spesialis merupakan jenjang lanjut dari Program Pendidikan Profesi Dokter. Program Pendidikan Dokter Spesialis Spesialis dilaksanakan oleh masing-masing bidang Program Studi Dokter Spesialis di Institusi Pendidikan Dokter Spesialis (Fakultas Kedokteran) yang telah terakreditasi.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Terbentuknya Tim Koordinasi Pelaksana Program Pendidikan Dokter Spesialis (TKP PPDS) Fakultas Kedokteran Universitas Sumatera Utara tentu tidak terlepas dari sejak kapan dimulainya perjalanan Pendidikan Dokter Spesialis tersebut. Sejak FK USU berhasil menamatkan mahasiswa program pendidikan dokter (dokter umum), maka para dokter umum lulusan FK USU tersebut langsung menjalani PPDS di almamaternya. Beberapa Program Pendidikan Dokter Spesialis (PPDS) yang ada pada tahun 1961 tersebut adalah PPDS Ilmu Kesehatan Anak di pimpin dan dididik oleh Prof. Jo Kian Tjai, PPDS Bedah oleh Prof. J.O. Picauly, PPDS Obstetri dan Ginekologi oleh Prof. Tan Oen Siang, PPDS Penyakit Dalam oleh Prof. Ahmad Sofian, PPDS Kedokteran Jiwa dan Penyakit Saraf oleh Prof. Mohammad Ilyas Datuk Raja Enda Mora (Ildrem) Siregar. Hal ini menunjukkan bahwa FK USU telah memiliki banyak pengalaman dalam hal mendidik peserta PPDS sejak dulu hingga saat ini.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Sejak terbentuk TKP PPDS maka proses pendidikan dokter spesialis di FK USU menjadi lebih terkoordinasi dan semakin mampu menghasilkan lulusan yang kompeten dalam bidangnya dan sesuai dengan kebutuhan masyarakat Pulau Sumatera khususnya dan Indonesia pada umumnya.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Tahap seleksi PPDS:",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            style: {
                                marginLeft: "10px"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    children: [
                                        "1. Pendaftar secara online diwebsite",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://penerimaanppds.usu.ac.id/",
                                            color: "black",
                                            children: "https://penerimaanppds.usu.ac.id/"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "2. Pengiriman hard copy berkas calon peserta PPDS ke TKP PPDS FK USU"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "3. Pengumuman seleksi berkas"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "4. Pembayaran biaya pendaftaran"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "5. Ujian Psikotes dari Fakultas Psikologi USU"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "6. Ujian Tes Minnesota Multiphasic Personality Inventory (MMPI) dari Fakultas Kedokteran USU"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "7. Ujian Computer Based Test (CBT) dilaksanakan oleh Fakultas Kedokteran USU"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "8. Ujian tulisan, ujian lisan/ wawancara dilaksanakan di masing-masing Program Studi Spesialis terkait"
                                })
                            ]
                        }),
                        "Program Studi Spesialis:",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            style: {
                                marginLeft: "10px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "1. Ilmu Kesehatan Anak"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "2. Ilmu Bedah"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "3. Ilmu Penyakit Dalam"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "4. Obstetri dan Ginekologi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "5. T.H.T.K.L"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "6. Dermatologi dan Venereologi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "7. Neurologi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "8. Psikiatri"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "9. Ilmu Kesehatan Mata"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "10. Pulmonologi dan Kedokteran Respirasi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "11. Patologi Klinik"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "12. Patologi Anatomik"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "13. Anestesiologi dan Terapi Intensif"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "14. Penyakit Jantung dan Pembuluh Darah"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "15. Ilmu Kedokteran Forensik dan Medikolegal"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "16. Ilmu Bedah Saraf"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "17. Orthopaedi dan Traumatologi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                    children: "18. Radiologi"
                                })
                            ]
                        })
                    ]
                })
            })
        }, 
    ]);
    const { 0: biayaStudi , 1: setBiayaStudi  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        {
            title: "Program Diploma",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
        },
        {
            title: "Program Sarjana",
            desc: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    style: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/images/UKT.png",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://drive.google.com/file/d/1yDhrfmkF_NVQJQJvbCqwget3zRbLfTIT/view?usp=sharing",
                            target: "_blank",
                            style: {
                                fontSize: " 20px",
                                fontWeight: "bold",
                                color: "white"
                            },
                            children: "Download"
                        })
                    ]
                })
            })
        },
        {
            title: "Program Pascasarjana",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
        },
        {
            title: "Program Profesi/Spesialis",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo ligula. Praesent eu magna nisl. Sed convallis finibus libero et ultrices. Aliquam fermentum erat sagittis eleifend sodales. Nunc non ante ex. Pellentesque a orci posuere, condimentum nisi nec, ultrices dolor. Vestibulum convallis feugiat suscipit. Mauris mollis, ante et interdum ornare, ante magna cursus libero, ac iaculis nisl massa eu diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
        }, 
    ]);
    const { 0: openedVisiMisi , 1: setOpenedVisiMisi  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: openedBiayaStudi , 1: setOpenedBiayaStudi  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
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
    const toggleOpenBiayaStudi = (title)=>{
        const isOpen = openedBiayaStudi.includes(title);
        let updated = [];
        if (isOpen) {
            updated = openedVisiMisi.filter((openedTitle)=>openedTitle !== title);
        } else {
            updated = [
                ...openedVisiMisi,
                title
            ];
        }
        setOpenedBiayaStudi(updated);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].penerimaan */ .Z.penerimaan)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_9__/* .selectLanguage */ .V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "section-page schome-pengabdian section-page--pt-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "admission",
                        style: {
                            backgroundImage: `url(/images/penerimaan.jpg)`
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "desc-add col-md-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__subtitle",
                                        children: "Penerimaan Mahasiswa"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-subtittle__detail",
                                        children: "Pusat informasi Penerimaan Mahasiswa Baru (PMB) Universitas Sumatera Utara"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "section-addmission",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-addmission_wrapper",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-12 justify-content-center text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "section-addmission__detail",
                                        children: "Tersedia berbagai pilihan program studi dan jenjang pendidikan yang dapat Anda pilih di Universitas Sumatera Utara. Cari berdasarkan pilihan program studi dan jenis gelar untuk menemukan program pendidikan yang terbaik untuk Anda."
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "admission-img",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "page-desc",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "page-img",
                                    style: {
                                        paddingTop: "10px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/ADD1.jpg",
                                        alt: "",
                                        height: "100%",
                                        width: "100%"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jalur-penerimaan",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jalur-penerimaan__desc"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jalur-penerimaan__title",
                                    children: [
                                        "Jalur Penerimaan ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Mahasiswa Baru"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jalur-penerimaan",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jalur-penerimaan__list",
                                children: visiMisi.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("jalur-penerimaan__item", {
                                            active: openedVisiMisi.includes(item.title)
                                        }),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "visi-misi__item__title",
                                                onClick: ()=>toggleOpenVisiMisi(item.title),
                                                children: [
                                                    item.title,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__.ChevronDown, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "visi-misi__item__desc",
                                                children: item.desc
                                            })
                                        ]
                                    }, `jalur-penerimaan-${item.title}`))
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "biaya-studi",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "biaya-studi__list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "biaya-studi__title",
                                        children: "Biaya Studi"
                                    }),
                                    biayaStudi.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("biaya-studi__item", {
                                                active: openedBiayaStudi.includes(item.title)
                                            }),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "biaya-studi__item__title",
                                                    onClick: ()=>toggleOpenBiayaStudi(item.title),
                                                    children: [
                                                        item.title,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__.ChevronDown, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "visi-misi__item__desc",
                                                    children: item.desc
                                                })
                                            ]
                                        }, `biaya-studi-${item.title}`))
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "scholarship",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "scholarship__wrapper",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " col-md-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "scholarship__subtitle",
                                            children: "Beasiswa"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " col-md-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "scholarship__text",
                                            children: "Universitas Sumatera Utara menyelenggarakan berbagai program beasiswa untuk mendukung lancarnya kegiatan studi bagi mahasiswa. Cek program Beasiswa yang tersedia disini"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " col-md-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "scholarship__title",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://beasiswa.usu.ac.id/",
                                                children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].beasiswa */ .Z.beasiswa)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_9__/* .selectLanguage */ .V)(language))
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePage);


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
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378], () => (__webpack_exec__(7721)));
module.exports = __webpack_exports__;

})();