"use strict";
exports.id = 7318;
exports.ids = [7318];
exports.modules = {

/***/ 7318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5687);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(266);




const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: `${_url__WEBPACK_IMPORTED_MODULE_3__/* .baseUrl */ .FH}/`,
    httpsAgent: new (https__WEBPACK_IMPORTED_MODULE_1___default().Agent)({
        rejectUnauthorized: false
    }),
    headers: {
        Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("ssotok")}`
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ 266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FH": () => (/* binding */ baseUrl)
/* harmony export */ });
/* unused harmony exports appsUrl, uploadUrl */
// export const baseUrl =
//   process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.usu.ac.id/id/api/front';
// export const appsUrl =
//   process.env.NEXT_PUBLIC_APPS_URL || 'https://www.usu.ac.id/id';
// export const uploadUrl =
//   process.env.NEXT_PUBLIC_UPLOAD_URL ||
//   'https://www.usu.ac.id/id/api/front/upload';
const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8081/front";
const appsUrl = process.env.NEXT_PUBLIC_APPS_URL || "http://localhost:8081";
const uploadUrl = process.env.NEXT_PUBLIC_UPLOAD_URL || "http://localhost:8081";


/***/ })

};
;