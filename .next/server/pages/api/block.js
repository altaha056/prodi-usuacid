"use strict";
(() => {
var exports = {};
exports.id = 2345;
exports.ids = [2345];
exports.modules = {

/***/ 6562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    res.status(200).json([
        {
            id: "1",
            title: "PENERIMAAN MAHASISWa",
            description: "Portal penerimaan mahasiswa S-1 Mandiri, D-3, Pascasarjana, PPDS, dan Ekstensi.",
            icon_image: "http://simpleicon.com/wp-content/uploads/user1.svg"
        },
        {
            id: "2",
            title: "PROGRAM STUDI",
            description: "Temukan pilihan program studi yang tepat untuk Anda.",
            icon_image: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png"
        },
        {
            id: "3",
            title: "AKREDITASI",
            description: "Jaminan pendidikan berkualitas (Akreditasi BAN-PT)",
            icon_image: "http://simpleicon.com/wp-content/uploads/user1.svg"
        },
        {
            id: "4",
            title: "KALENDER AKADEMIK",
            description: "Jadwal kegiatan akademik pada tahun aktif",
            icon_image: "http://simpleicon.com/wp-content/uploads/user1.svg"
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
var __webpack_exports__ = (__webpack_exec__(6562));
module.exports = __webpack_exports__;

})();