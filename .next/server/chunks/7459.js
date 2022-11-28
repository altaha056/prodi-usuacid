"use strict";
exports.id = 7459;
exports.ids = [7459];
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

/***/ 8153:
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
/* eslint-disable prettier/prettier */ 




const IndexDedicationItem = ({ title , image , delay , slug , language ,  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-4 col-lg-4 ftco animate fadeInUp ftco-animated",
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
                    className: "text pt-4",
                    style: {
                        backgroundColor: "#ffffff",
                        height: "150px",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        boxShadow: "0 7px 12px rgb(0 0 0 / 10%)",
                        fontFamily: "sans-serif"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            style: {
                                fontWeight: "bold",
                                marginLeft: "20px"
                            },
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "section-index-beranda__selanjutnya",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/[language]/pengabdian-masyarakat/[slug]",
                                as: `/${language}/pengabdian-masyarakat/${slug}`,
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
    });
const IndexDedication = ({ contents , language  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "ftco-section abdimas-wrapper",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: contents.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IndexDedicationItem, {
                        ...item,
                        delay: 120 * (index + 1)
                    }, item.id))
            })
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexDedication);


/***/ })

};
;