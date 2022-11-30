"use strict";
exports.id = 1254;
exports.ids = [1254];
exports.modules = {

/***/ 1254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ apiProvider)
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7318);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */ 
const getAll = ({ resource , onError , onSuccess  })=>{
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${resource}`).then((response)=>{
        if (onSuccess) onSuccess(response);
    }).catch(onError);
};
const getSingle = ({ id , resource , onSuccess , onError  })=>{
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${resource}/${id}`).then((response)=>{
        if (onSuccess) onSuccess(response);
    }).catch(onError);
};
const post = ({ resource , data , onSuccess , onError  })=>{
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`${resource}`, data).then((response)=>{
        if (onSuccess) onSuccess(response);
    }).catch(onError);
};
const put = ({ resource , id , data , onSuccess , onError  })=>{
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`${resource}/${id}`, data).then((response)=>{
        if (onSuccess) onSuccess(response);
    }).catch(onError);
};
const patch = ({ resource , id , onSuccess , onError , data  })=>{
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch(`${resource}/${id}`, data).then((response)=>{
        if (onSuccess) onSuccess(response);
    }).catch(onError);
};
const remove = ({ id , resource , onSuccess , onError  })=>{
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`${resource}/${id}`).then((response)=>{
        if (onSuccess) onSuccess(response);
    }).catch(onError);
};
const apiProvider = {
    getAll,
    getSingle,
    post,
    put,
    patch,
    remove
};


/***/ })

};
;