"use strict";
exports.id = 1294;
exports.ids = [1294];
exports.modules = {

/***/ 9676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ JournalMaker)
/* harmony export */ });
class JournalMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            category: event.category,
            categoryId: event.category_id,
            author: event.author,
            authordiv: event.authordiv,
            photographer: event.photographer,
            photographerdiv: event.photographerdiv,
            shortDescription: event.short_description,
            image: event.image,
            selected: event.selected,
            language: event.language,
            slug: event.slug,
            imagetitle: event.imagetitle,
            date: event.createdAt || null
        };
    }
}


/***/ }),

/***/ 8280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6378);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3271);
/* eslint-disable react/jsx-props-no-multi-spaces */ /* eslint-disable prettier/prettier */ // import BulletinModel, { BulletinMaker } from '@/models/bulletin';





const IndexResearchItem = ({ title , image , delay , slug , language , shortDescription ,  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-4 col-lg-4 ftco animate fadeInUp ftco-animated",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "section-index-beranda",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "staff",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "block-20",
                        style: {
                            backgroundImage: `url(${image})`
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "pt-4 section-index-beranda__title",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "section-index-beranda__selanjutnya",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: shortDescription,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "button-custom",
                                        children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_3__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_3__/* ["default"].BacaSelanjutnya_content */ .Z.BacaSelanjutnya_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_4__/* .selectLanguage */ .V)(language))
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
const IndexJurnal = ({ contents , language  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "ftco-section penelitian-wrapper",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: contents.slice(1).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IndexResearchItem, {
                        ...item,
                        delay: 120 * (index + 1)
                    }, item.id))
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexJurnal);


/***/ }),

/***/ 8533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports getStaticPaths, getStaticProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6378);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3271);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7318);
/* harmony import */ var _config_dateformat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6221);
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable react/no-danger */ 







async function getStaticPaths() {
    try {
        const response = await Promise.all([
            axios.get("/slug/all?lang=id&menu=research"),
            axios.get("/slug/all?lang=en&menu=research"), 
        ]);
        const idParams = response[0].data.data.map((slug)=>{
            return {
                params: {
                    language: "id",
                    slug
                }
            };
        });
        const enParams = response[1].data.data.map((slug)=>{
            return {
                params: {
                    language: "en",
                    slug
                }
            };
        });
        return {
            paths: [
                ...idParams,
                ...enParams
            ],
            fallback: true
        };
    } catch (_) {
        return {
            paths: [
                {
                    params: {
                        language: "id",
                        slug: "-"
                    }
                },
                {
                    params: {
                        language: "en",
                        slug: "-"
                    }
                }, 
            ],
            fallback: true
        };
    }
}
const getStaticProps = async (context)=>{
    const lang = await checkLanguage(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await axios.get(`/research/${context.params.slug}`);
        const research = ResearchMaker.create(response.data.data) || null;
        return {
            props: {
                content: research,
                slug: context.params.slug
            },
            revalidate: 30
        };
    } catch (e) {
        return {
            props: {
                content: null,
                slug: context.params.slug
            },
            revalidate: 30
        };
    }
};
const SelectedFocus = ({ content , language  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "ftco-section",
        style: {
            paddingTop: "50px"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section-rilis",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "section-rilis__titlepenelitian",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_3__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_3__/* ["default"].risetUnggulan */ .Z.risetUnggulan)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_6__/* .selectLanguage */ .V)(content ? content.language : ""))
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "section-rilis__dasarorenpenelitian row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-md-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "section-rilis__datePenelitian",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: (0,_config_dateformat__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(content ? content.date : "", "dd mmmm yyyy")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "section-rilis__subtitle",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: content ? content.title : ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "section-rilis__isi",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: content ? content.shortDescription : ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "section-rilis__selanjutnya",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/[language]/riset-unggulan/[slug]",
                                            as: `/${content?.language}/riset-unggulan/${content?.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "button-custom",
                                                style: {
                                                    fontFamily: "sans-serif",
                                                    color: "black"
                                                },
                                                children: (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_3__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_3__/* ["default"].BacaSelanjutnya_content */ .Z.BacaSelanjutnya_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_6__/* .selectLanguage */ .V)(content ? content.language : ""))
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: content ? content.image : "",
                                    alt: "",
                                    className: "section-rilis__img"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedFocus);


/***/ })

};
;