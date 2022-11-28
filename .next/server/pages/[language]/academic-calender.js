"use strict";
(() => {
var exports = {};
exports.id = 7424;
exports.ids = [7424,5319];
exports.modules = {

/***/ 9771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3271);
/* harmony import */ var helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6378);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_article__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5646);
/* harmony import */ var _page_components_common_loader2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7145);
/* harmony import */ var _page_components_common_kalender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7175);
/* harmony import */ var helpers_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(668);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7318);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_10__);
/* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 












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
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_9__/* ["default"].get */ .Z.get(`/photos?lang=${context.params.language}&menu=article&category_id=62344f2d7390d4258500d8c1`);
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
    react_ga__WEBPACK_IMPORTED_MODULE_10___default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { language  } = router.query;
    const url = `/article?lang=${language}&category_id=62344f2d7390d4258500d8c1&limit=1&`;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(`${url}page=${page}`);
    const { data: researchesRes , error  } = swr__WEBPACK_IMPORTED_MODULE_5___default()(fetchUrl);
    const { 0: researches , 1: setResearches  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    // infinite scroll //
    const handleLoadMore = ()=>{
        const nextPage = page + 1;
        setPage(nextPage);
        setFetchUrl(`${url}page=${nextPage}`);
    };
    const [isFetching, setIsFetching] = (0,helpers_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(handleLoadMore, "article-item");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setIsFetching(false);
    }, [
        researches
    ]);
    // create data //
    const createResearch = ()=>{
        const temp = researchesRes.data.data?.map((article)=>_models_article__WEBPACK_IMPORTED_MODULE_12__/* .ArticleMaker.create */ .B.create(article));
        if (typeof researches === "undefined") {
            setResearches(temp);
        } else {
            setResearches([
                ...researches,
                ...temp
            ]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (researchesRes) {
            setTimeout(createResearch, 1000);
            setTotalresearch(researchesRes.data.totalItems);
        }
    }, [
        researchesRes
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (error) {
            setResearches([]);
        }
    }, [
        error
    ]);
    const LoadMore = ()=>{
        if (typeof researches !== "undefined") {
            return isFetching && totalresearch > researches?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "d-flex justify-content-center mt-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/spinner.gif",
                    alt: "spinner"
                })
            }) : null;
        }
        return null;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        (0,helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* .getKeyValue */ .s)(helpers_mapping_sentences__WEBPACK_IMPORTED_MODULE_1__/* ["default"].kalender_content */ .Z.kalender_content)((0,helpers_check_language__WEBPACK_IMPORTED_MODULE_11__/* .selectLanguage */ .V)(language)),
                        " | Universitas Sumatera Utara"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "ftco-section ftc-no-pb",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        typeof researches === "undefined" ? [
                            ...Array(4)
                        ].map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_common_loader2__WEBPACK_IMPORTED_MODULE_6__/* .ArticleLoader */ .W, {}, index)) : researches.map((item)=>// eslint-disable-next-line react/jsx-indent
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_common_kalender__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                ...item,
                                language: language
                            }, item.id)),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadMore, {})
                    ]
                })
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

/***/ 8073:
/***/ ((module) => {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

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
var __webpack_exports__ = __webpack_require__.X(0, [3271,7318,6378,4077], () => (__webpack_exec__(9771)));
module.exports = __webpack_exports__;

})();