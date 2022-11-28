"use strict";
exports.id = 3717;
exports.ids = [3717];
exports.modules = {

/***/ 3615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeadlineMaker)
/* harmony export */ });
class HeadlineMaker {
    static create(event) {
        return {
            id: event.id,
            imageHeight: event.imageHeight,
            title: event.title,
            description: event.description,
            link: event.link,
            button: event.button_visible,
            buttonText: event.button_text,
            imageUrl: event.image
        };
    }
}


/***/ }),

/***/ 8790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PublicLectureMaker)
/* harmony export */ });
class PublicLectureMaker {
    static create(event) {
        return {
            id: event.id,
            description: event.description,
            link: event.link,
            photo: event.photo,
            lecturerName: event.lecture_name,
            profession: event.profession,
            language: event.language,
            date: event.created_at || null
        };
    }
}


/***/ }),

/***/ 3373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ResearchMaker)
/* harmony export */ });
class ResearchMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            shortDescription: event.short_description,
            image: event.image,
            language: event.language,
            slug: event.slug,
            date: event.created_at,
            author: event.author,
            authordiv: event.authordiv || null,
            photographer: event.photographer || null,
            photographerdiv: event.photographerdiv || null,
            interviewees: event.interviewees || null,
            intervieweesdiv: event.intervieweesdiv || null,
            imagetitle: event.imagetitle || null
        };
    }
}


/***/ })

};
;