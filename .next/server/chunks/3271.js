"use strict";
exports.id = 3271;
exports.ids = [3271];
exports.modules = {

/***/ 3271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ selectLanguage),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable consistent-return */ // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const checkLanguage = async (url)=>{
    // if (ctx.res) {
    //   if (typeof ctx.req.url === 'string') {
    //     const url = ctx.req.url.split('/');
    //     if (!['id', 'en'].includes(url[1])) {
    //       const countryCode = await getLocation();
    //       const language = countryCode === 'id' ? 'id' : 'en';
    //       ctx.res.writeHead(302, {
    //         Location: `${appsUrl}/${language}${ctx.req.url}`,
    //       });
    //       ctx.res.end();
    //     }
    //     return url[1];
    //   }
    // }
    if (typeof url === "string") {
        if (![
            "id",
            "en"
        ].includes(url)) {
            // const countryCode = await getLocation();
            // const language = 'countryCode' === 'id' ? 'id' : 'en';
            const language = "id";
            // ctx.res.writeHead(302, {
            //   Location: `${appsUrl}/${language}${ctx.req.url}`,
            // });
            // ctx.res.end();
            return {
                redirect: true,
                value: language
            };
        }
        return {
            redirect: false,
            value: url
        };
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const selectLanguage = (language)=>{
    let selectedLanguage = "id";
    if (typeof language === "string") {
        if ([
            "en",
            "id"
        ].includes(language)) {
            selectedLanguage = language;
        }
    }
    return selectedLanguage;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkLanguage);


/***/ })

};
;