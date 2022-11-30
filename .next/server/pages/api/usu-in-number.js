"use strict";
(() => {
var exports = {};
exports.id = 4298;
exports.ids = [4298];
exports.modules = {

/***/ 4336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    res.status(200).json([
        {
            number: 10,
            title: "Fakultas/Sekolah"
        },
        {
            number: 20,
            title: "Program Studi"
        },
        {
            number: 3000,
            title: "Tenaga Pendidik"
        }, 
    ]);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4336));
module.exports = __webpack_exports__;

})();