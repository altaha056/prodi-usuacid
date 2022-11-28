"use strict";
exports.id = 7995;
exports.ids = [7995];
exports.modules = {

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInfiniteScroll = (callback, component)=>{
    const { 0: isFetching , 1: setIsFetching  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleScroll = ()=>{
        const wrappedElement = document.getElementById(component);
        if (wrappedElement) {
            if (window.innerHeight + document.documentElement.scrollTop < wrappedElement.offsetHeight + 100 || isFetching) return;
            setIsFetching(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isFetching) return;
        callback();
    }, [
        isFetching
    ]);
    return [
        isFetching,
        setIsFetching
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);


/***/ }),

/***/ 7995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ fakultas),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./models/facultiesModel.ts
class FacultiesMaker {
    static create(event) {
        return {
            id: event.id,
            facultyCode: event.faculty_code,
            headlineImage: event.headline_image,
            image: event.image,
            title: event.title,
            slug: event.slug,
            language: event.language,
            shortDescription: event.short_description,
            slider1: event.slider1,
            slider2: event.slider2,
            slider3: event.slider3,
            slider4: event.slider4,
            slider5: event.slider5,
            majors: event.majors,
            visionDescription: event.vision_description,
            vision: event.vision,
            mission: event.mission,
            visionImage: event.vision_image,
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
            updatedAt: event.updated_at,
            createdAt: event.created_at
        };
    }
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./page-components/common/fakultas-list.tsx
/* eslint-disable jsx-a11y/alt-text */ 


const FakultasList = ({ headlineImage , title , language , slug ,  })=>{
    console.log("image", headlineImage);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-3 col-sm-6 col-xs-6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
            className: "gallery-item",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "gallery-img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "article-thum",
                        src: headlineImage
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "schome-study__boxs post",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/[language]/fakultas/[slug]",
                        as: `/${language}/fakultas/${slug}`,
                        children: title
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const fakultas_list = (FakultasList);

// EXTERNAL MODULE: ./helpers/infinite-scroll.ts
var infinite_scroll = __webpack_require__(668);
;// CONCATENATED MODULE: ./pages/[language]/fakultas/index.tsx
/* eslint-disable no-empty-pattern */ /* eslint-disable prettier/prettier */ /* eslint-disable jsx-a11y/alt-text */ /* eslint-disable no-undef */ /* eslint-disable react/no-array-index-key */ /* eslint-disable react/jsx-one-expression-per-line */ 







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
    const lang = await (0,check_language/* default */.Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    return {
        props: {
            photos: []
        },
        revalidate: 30
    };
};
const ArticlePageFakultas = ({})=>{
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    const url = `/faculties?lang=${language}&limit=50&selected=true&`;
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const { 0: fetchUrl , 1: setFetchUrl  } = (0,external_react_.useState)(`${url}page=${page}`);
    // const fetcher = (urlItem: string) => {
    //   axios.get(urlItem).then((res) => res.data);
    // };
    const { data: researchesRes , error  } = external_swr_default()(fetchUrl);
    const { 0: researches , 1: setResearches  } = (0,external_react_.useState)(undefined);
    const { 0: totalresearch , 1: setTotalresearch  } = (0,external_react_.useState)(0);
    // infinite scroll //
    const handleLoadMore = ()=>{
        const nextPage = page + 1;
        setPage(nextPage);
        setFetchUrl(`${url}page=${nextPage}`);
    };
    const [isFetching, setIsFetching] = (0,infinite_scroll/* default */.Z)(handleLoadMore, "article-item");
    (0,external_react_.useEffect)(()=>{
        setIsFetching(false);
    }, [
        researches
    ]);
    // create data //
    const createResearch = ()=>{
        const temp = researchesRes.data.data?.map((article)=>FacultiesMaker.create(article));
        if (typeof researches === "undefined") {
            setResearches(temp);
        } else {
            setResearches([
                ...researches,
                ...temp
            ]);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (researchesRes) {
            setTimeout(createResearch, 1000);
            setTotalresearch(researchesRes.data.totalItems);
        }
    }, [
        researchesRes
    ]);
    (0,external_react_.useEffect)(()=>{
        if (error) {
            setResearches([]);
        }
    }, [
        error
    ]);
    console.log("fakultas", researches);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: typeof researches === "undefined" ? [
            ...Array(3)
        ].map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "\xa0"
            }, index)) : researches.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(fakultas_list, {
                ...item,
                language: language
            }, item.id))
    });
};
/* harmony default export */ const fakultas = (ArticlePageFakultas);


/***/ })

};
;