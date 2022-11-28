"use strict";
(() => {
var exports = {};
exports.id = 5950;
exports.ids = [5950,8882];
exports.modules = {

/***/ 6958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ fakultas_sekolah),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./models/units.ts
class UnitMaker {
    static create(event) {
        return {
            faculty: event.faculty,
            major: event.study_program,
            graduationDegree: event.graduation_degree,
            accreditation: event.accreditation,
            level: event.level
        };
    }
}

// EXTERNAL MODULE: ./page-components/common/loading.tsx
var loading = __webpack_require__(8577);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./page-components/faculties/pages.tsx
/* eslint-disable camelcase */ 



const FacultiesPaging = ({ total_pages , current_page , lang , additional_params , string_params ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        "aria-label": "Page navigation",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "pagination",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: external_classnames_default()("page-item page-item--arrow", {
                        disabled: current_page === 1
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        as: `/${lang}/fakultas-sekolah?page=${current_page - 1}&${string_params}`,
                        href: {
                            pathname: "/[language]/fakultas-sekolah",
                            query: {
                                page: current_page - 1,
                                ...additional_params
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "page-link",
                            "aria-label": "Previous",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xab"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Previous"
                                })
                            ]
                        })
                    })
                }),
                [
                    ...Array(total_pages)
                ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: external_classnames_default()("page-item", {
                            active: index + 1 === current_page,
                            ["show-mobile"]: current_page + 2 >= index + 1 && current_page - 2 <= index + 1
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            as: `/${lang}/fakultas-sekolah?page=${index + 1}&${string_params}`,
                            href: {
                                pathname: "/[language]/fakultas-sekolah",
                                query: {
                                    page: index + 1,
                                    ...additional_params
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "page-link",
                                children: [
                                    index + 1,
                                    index + 1 === current_page ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "(current)"
                                    }) : ""
                                ]
                            })
                        })
                    }, index + 1)),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: external_classnames_default()("page-item page-item--arrow", {
                        disabled: current_page === total_pages
                    }),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        as: `/${lang}/fakultas-sekolah?page=${current_page + 1}&${string_params}`,
                        href: {
                            pathname: "/[language]/fakultas-sekolah",
                            query: {
                                page: current_page + 1,
                                ...additional_params
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "page-link",
                            href: "#",
                            "aria-label": "Next",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xbb"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Next"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const pages = (FacultiesPaging);

;// CONCATENATED MODULE: ./page-components/faculties/filter.tsx
/* eslint-disable jsx-a11y/label-has-associated-control */ 

const FacultiesFilter = ({ faculties , onSelect , selectedFaculty , s1 , s2 , s3 , profesi , onClickLevel ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row faculties-filter",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-md-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    className: "custom-select",
                    id: "faculty",
                    onChange: (e)=>onSelect(e.target.value),
                    value: selectedFaculty,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "all",
                            className: "selected",
                            children: "Semua Fakultas"
                        }),
                        faculties.map((faculty)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: faculty.faculltyId,
                                children: faculty.facultyName
                            }, faculty.faculltyId))
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "col-md d-flex align-items-end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: `btn btn-outline-primary btn-filter level ${s1 ? "active" : ""}`,
                        onClick: ()=>onClickLevel("s1", !s1),
                        children: "S1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: `btn btn-outline-primary btn-filter level ${s2 ? "active" : ""}`,
                        onClick: ()=>onClickLevel("s2", !s2),
                        children: "S2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: `btn btn-outline-primary btn-filter level ${s3 ? "active" : ""}`,
                        onClick: ()=>onClickLevel("s3", !s3),
                        children: "S3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: `btn btn-outline-primary btn-filter profession flex-grow-1 ${profesi ? "active" : ""}`,
                        onClick: ()=>onClickLevel("profesi", !profesi),
                        children: "PROFESI"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const filter = (FacultiesFilter);

;// CONCATENATED MODULE: ./models/facultyModel.ts
class FacultyMaker {
    static create(event) {
        return {
            faculltyId: event.faculty_code,
            facultyName: event.faculty_name,
            slug: event.slug
        };
    }
}

;// CONCATENATED MODULE: ./models/entity.ts
class EntityMaker {
    static create(event) {
        return {
            id: event.id,
            content: event.content,
            link: event.link,
            category: event.category,
            selected: event.selected,
            imageUrl: event.image
        };
    }
}

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
// EXTERNAL MODULE: ./config/url.tsx
var url = __webpack_require__(266);
// EXTERNAL MODULE: ./services/api/utilities/provider.ts
var provider = __webpack_require__(1254);
;// CONCATENATED MODULE: ./services/api/entity.ts


const URL = `${url/* baseUrl */.FH}/entity`;
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
const apiEntityContent = {
    getAll,
    getSingle
};

// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
// EXTERNAL MODULE: ./pages/[language]/fakultas/index.tsx + 2 modules
var fakultas = __webpack_require__(7995);
;// CONCATENATED MODULE: ./pages/[language]/fakultas-sekolah.tsx
/* eslint-disable react/jsx-no-target-blank */ /* eslint-disable jsx-a11y/control-has-associated-label */ /* eslint-disable camelcase */ /* eslint-disable jsx-a11y/label-has-associated-control */ /* eslint-disable react/jsx-one-expression-per-line */ 














// import ArticlePageFakultas from './fakultas-sekolah';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const queryString = __webpack_require__(9103);
const createParams = (page, faculty, jenjang)=>{
    let params = {};
    if (page) {
        params = {
            ...params,
            page
        };
    }
    if (faculty) {
        params = {
            ...params,
            faculty_id: faculty
        };
    }
    if (jenjang) {
        params = {
            ...params,
            jenjang: jenjang.toString()
        };
    }
    return params;
};
const getServerSideProps = async (context)=>{
    const lang = await (0,check_language/* default */.Z)(context.params.language);
    const { page , faculty_id , jenjang  } = context.query;
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    const params = createParams(page, faculty_id, jenjang);
    try {
        const response = await Promise.all([
            axios/* default.get */.Z.get("/faculty-data", {
                params: {
                    ...params,
                    limit: 20
                }
            }),
            axios/* default.get */.Z.get("/faculty"), 
        ]);
        const units = response[0].data.data.data?.map((unit)=>UnitMaker.create(unit));
        console.log(units);
        const faculties = response[1].data.data?.map((unit)=>FacultyMaker.create(unit)) || [];
        console.log(faculties);
        return {
            props: {
                units,
                faculties,
                total_pages: response[0].data.data.total_pages,
                current_page: response[0].data.data.current_page
            }
        };
    } catch (e) {
        return {
            props: {
                units: [],
                faculties: [],
                total_pages: 1,
                current_page: 1
            }
        };
    }
};
const FacultiesPage = ({ units , total_pages , current_page , faculties ,  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    console.log(units);
    const router = (0,router_.useRouter)();
    const { 0: entitasFakultas , 1: setEntitasFakultas  } = (0,external_react_.useState)([]);
    const { 0: entitasPendukung , 1: setEntitasPendukung  } = (0,external_react_.useState)([]);
    const { language , faculty_id , jenjang  } = router.query;
    const params = createParams(undefined, faculty_id === "all" ? undefined : faculty_id, jenjang);
    const string_params = queryString.stringify(params);
    if ([
        typeof units
    ].includes("undefined") || router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx(loading/* default */.Z, {});
    }
    const { 0: level , 1: setLevel  } = (0,external_react_.useState)({
        s1: false,
        s2: false,
        s3: false,
        profesi: false
    });
    // useEffect(() => {
    //   setLevel({
    //     ...level,
    //     s1: jenjang?.indexOf('s1') !== -1,
    //     s2: jenjang?.indexOf('s2') !== -1,
    //     s3: jenjang?.indexOf('s3') !== -1,
    //     profesi: jenjang?.indexOf('profesi') !== -1,
    //   });
    // }, []);
    // Entitas
    const handleErrorEntity = (error)=>{
        console.error(error);
    };
    const handleSuccessEntitasFakultas = (response)=>{
        const menu = response.data.data?.map((item)=>EntityMaker.create(item));
        setEntitasFakultas(menu);
    };
    const fecthEntitasFakultas = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiEntityContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessEntitasFakultas,
                onError: handleErrorEntity
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthEntitasFakultas("fakultas");
    }, [
        faculties
    ]);
    const handleSuccessEntitasPendukung = (response)=>{
        const menu = response.data.data?.map((item)=>EntityMaker.create(item));
        setEntitasPendukung(menu);
    };
    const fecthEntitasPendukung = (category)=>{
        if (typeof language === "string") {
            const lang = language;
            apiEntityContent.getAll({
                resource: `/${category}?lang=${lang}`,
                onSuccess: handleSuccessEntitasPendukung,
                onError: handleErrorEntity
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        fecthEntitasPendukung("pendukung");
    }, [
        faculties
    ]);
    const handleSelect = (e)=>{
        const searchParams = createParams(undefined, e === "all" ? undefined : e, jenjang);
        router_default().push({
            pathname: `/${language}/fakultas-sekolah`,
            href: "/[language]/fakultas-sekolah",
            query: searchParams
        });
    };
    const handleClickLevel = (name, value)=>{
        setLevel({
            ...level,
            [name]: value
        });
    };
    (0,external_react_.useEffect)(()=>{
        const changedLevel = [];
        if (level.s1) changedLevel.push("s1");
        if (level.s2) changedLevel.push("s2");
        if (level.s3) changedLevel.push("s3");
        if (level.profesi) changedLevel.push("profesi");
        router_default().push({
            pathname: `/${language}/fakultas-sekolah`,
            href: "/[language]/fakultas-sekolah",
            query: createParams(undefined, faculty_id === "all" ? undefined : faculty_id, changedLevel)
        });
    }, [
        level
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.fakultas */.Z.fakultas)((0,check_language/* selectLanguage */.V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "section-page schome-pengabdian section-page--pt-0 fakultas-sekolah-page",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "above-the-fold",
                        style: {
                            backgroundImage: `url(/images/pendidikan.jpg)`
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "page-desc col-md-7",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-subtittle__subtitle",
                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pendidikan */.Z.pendidikan)((0,check_language/* selectLanguage */.V)(language))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-subtittle__detail",
                                        children: [
                                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.fakultas_outline */.Z.fakultas_outline)((0,check_language/* selectLanguage */.V)(language)),
                                            "."
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "section-subtittle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-subtittle__wrapper",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "section-subtittle__title",
                                                    children: [
                                                        "150",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                                                            children: "+"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-7",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-subtittle__detail",
                                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.prodi_outline */.Z.prodi_outline)((0,check_language/* selectLanguage */.V)(language))
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-subtittle__text",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.prodi_quote */.Z.prodi_quote)((0,check_language/* selectLanguage */.V)(language))
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "section-image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image__image",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-4 justify-content-right text-right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/fakultas4.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-4 justify-content-center text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/fakultas5.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/fakultas6.jpg",
                                                alt: ""
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "section-image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "image__image",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-4 justify-content-right text-right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/fakultas7.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-4 justify-content-center text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/fakultas8.jpg",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/fakultas9.jpg",
                                                alt: ""
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "section-faculty",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "section-faculty__wrapper",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section-faculty__title",
                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.fakultassekolah */.Z.fakultassekolah)((0,check_language/* selectLanguage */.V)(language))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-7 justify-content-left text-left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "section-faculty__detail",
                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.fakultassekolah_content */.Z.fakultassekolah_content)((0,check_language/* selectLanguage */.V)(language))
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "container section-studies section-page",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "gallery",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fakultas["default"], {})
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: " container pb-3 pt-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row row--item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(filter, {
                                        faculties: faculties,
                                        onSelect: handleSelect,
                                        selectedFaculty: typeof faculty_id === "undefined" ? "all" : faculty_id,
                                        ...level,
                                        onClickLevel: handleClickLevel
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row row--item",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                                className: "table faculty-table",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    style: {
                                                                        color: "rgb(0, 105, 55)"
                                                                    },
                                                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.programStudi */.Z.programStudi)((0,check_language/* selectLanguage */.V)(language))
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    style: {
                                                                        color: "rgb(0, 105, 55)"
                                                                    },
                                                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.akreditasi */.Z.akreditasi)((0,check_language/* selectLanguage */.V)(language))
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                    scope: "col",
                                                                    style: {
                                                                        color: "rgb(0, 105, 55)"
                                                                    },
                                                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.Gelar */.Z.Gelar)((0,check_language/* selectLanguage */.V)(language))
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                                        children: units.map((unit, index)=>// eslint-disable-next-line react/no-array-index-key
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                        className: "faculty-name",
                                                                        children: [
                                                                            unit.major,
                                                                            " - ",
                                                                            unit.level
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        children: unit.accreditation
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                        children: unit.graduationDegree
                                                                    })
                                                                ]
                                                            }, unit.major + index))
                                                    })
                                                ]
                                            }),
                                            units.length <= 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "d-flex justify-content-center align-items-center",
                                                style: {
                                                    height: "50vh"
                                                },
                                                children: "Program Studi Tidak Ditemukan"
                                            }) : null,
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row d-flex justify-content-center",
                                                children: units.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(pages, {
                                                    total_pages: total_pages,
                                                    current_page: current_page,
                                                    lang: language,
                                                    additional_params: params,
                                                    string_params: string_params
                                                }) : null
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-auto",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                            className: "table faculty-table",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                                scope: "col",
                                                                style: {
                                                                    color: "rgb(0, 105, 55)"
                                                                },
                                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.unitPendukung */.Z.unitPendukung)((0,check_language/* selectLanguage */.V)(language))
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {})
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        children: entitasPendukung.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                style: {
                                                                    color: "rgb(0, 105, 55)",
                                                                    fontSize: 14,
                                                                    fontWeight: "bold"
                                                                },
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: item.link,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            style: {
                                                                                fontSize: 15,
                                                                                color: "black"
                                                                            }
                                                                        }),
                                                                        item.content
                                                                    ]
                                                                })
                                                            }, item.id))
                                                    })
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                            ]
                                        })
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
/* harmony default export */ const fakultas_sekolah = (FacultiesPage);


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

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378,8577,7995,1254], () => (__webpack_exec__(6958)));
module.exports = __webpack_exports__;

})();