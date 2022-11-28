"use strict";
exports.id = 1002;
exports.ids = [1002];
exports.modules = {

/***/ 1002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_check_language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3271);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_agenda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2245);
/* harmony import */ var _page_components_common_loader2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7145);
/* harmony import */ var _page_components_common_agenda_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2481);
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7318);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3082);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_7__);
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
    const lang = await (0,helpers_check_language__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_6__/* ["default"].get */ .Z.get(`/photos?lang=${context.params.language}&selected=true&limit=4&menu=agenda`);
        return {
            props: {
                photos: response.data.data || []
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
const AgendaPage = ({ photos  })=>{
    react_ga__WEBPACK_IMPORTED_MODULE_7___default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { language  } = router.query;
    const url = `/agenda?lang=${language}&selected=true&limit=3&`;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(`${url}page=${page}`);
    const { data: agendasRes , error  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(fetchUrl);
    const { 0: agendas , 1: setAgendas  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
    const { 0: totalagenda , 1: setTotalagenda  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    // create data //
    const createResearch = ()=>{
        const temp = agendasRes.data.data?.map((agenda)=>_models_agenda__WEBPACK_IMPORTED_MODULE_9__/* .AgendaMaker.create */ .K.create(agenda)) || [];
        if (typeof agendas === "undefined") {
            window.scrollTo(0, 0);
            setAgendas(temp);
        } else {
            setAgendas([
                ...agendas,
                ...temp
            ]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (agendasRes) {
            setTimeout(createResearch, 1000);
            setTotalagenda(agendasRes.data.totalItems);
        }
    }, [
        agendasRes
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (error) {
            setAgendas([]);
        }
    }, [
        error
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: typeof agendas === "undefined" ? [
            ...Array(4)
        ].map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_common_loader2__WEBPACK_IMPORTED_MODULE_4__/* .ArticleLoader */ .W, {}, index)) : agendas.map((item)=>// eslint-disable-next-line react/jsx-indent
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_page_components_common_agenda_list__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...item,
                language: language
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AgendaPage);


/***/ })

};
;