"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./page-components/common/loading.tsx
var loading = __webpack_require__(8577);
// EXTERNAL MODULE: ./config/axios.tsx
var axios = __webpack_require__(7318);
;// CONCATENATED MODULE: ./helpers/get-location.ts

const getLocation = async ()=>{
    try {
        const response = await axios/* default.get */.Z.get("https://ipapi.co/json");
        return response.data.country_code.toLowerCase() || "id";
    } catch (e) {
        return "id";
    }
};
/* harmony default export */ const get_location = (getLocation);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/index.tsx





const Home = ({ countryCode  })=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        router.push(`/${countryCode}`);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(loading/* default */.Z, {});
};
Home.getInitialProps = async ()=>{
    const countryCode = await get_location();
    const language = countryCode === "id" ? "id" : "en";
    return {
        countryCode: language
    };
};
/* harmony default export */ const pages = (Home);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7318,8577], () => (__webpack_exec__(616)));
module.exports = __webpack_exports__;

})();