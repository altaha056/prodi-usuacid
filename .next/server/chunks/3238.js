"use strict";
exports.id = 3238;
exports.ids = [3238];
exports.modules = {

/***/ 3238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DepartmentMaker)
/* harmony export */ });
class DepartmentMaker {
    static create(event) {
        return {
            id: event.id,
            facultyCode: event.faculty_code,
            majorCode: event.major_code,
            title: event.title,
            slug: event.slug,
            language: event.language,
            shortDescription: event.short_description,
            headlineImage: event.headline_image,
            certificateImage: event.certificate_image,
            certificateDescription: event.certificate_description,
            educationFee: event.education_fee,
            descriptionFee: event.description_fee,
            excellence: event.excellence,
            career: event.career,
            author: event.author,
            authordiv: event.authordiv,
            researchers: event.researchers,
            researchersdiv: event.researchersdiv,
            photographer: event.photographer,
            photographerdiv: event.photographerdiv,
            inset: event.inset,
            categoryId: event.category_id,
            category: event.category,
            selected: event.selected,
            createdBy: event.created_by,
            updatedBy: event.updated_by,
            createadAt: event.createad_at,
            updatedAt: event.updated_at
        };
    }
}


/***/ })

};
;