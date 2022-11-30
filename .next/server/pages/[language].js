"use strict";
(() => {
var exports = {};
exports.id = 8382;
exports.ids = [8382];
exports.modules = {

/***/ 3626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ DedicationMaker)
/* harmony export */ });
class DedicationMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            image: event.image,
            location: event.location,
            shortDescription: event.short_description,
            description: event.description,
            author: event.author,
            date: event.created_at,
            authordiv: event.authordiv || null,
            photographer: event.photographer || null,
            photographerdiv: event.photographerdiv || null,
            interviewees: event.interviewees || null,
            intervieweesdiv: event.intervieweesdiv || null,
            language: event.language,
            slug: event.slug,
            imagetitle: event.imagetitle || null
        };
    }
}


/***/ }),

/***/ 6199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ NewsMenuMaker)
/* harmony export */ });
class NewsMenuMaker {
    static create(event) {
        return {
            id: event.id,
            title: event.title,
            description: event.description,
            shortDescription: event.shortDescription || null,
            image: event.image,
            author: event.author,
            date: event.createdAt || null,
            language: event.language,
            slug: event.slug,
            authordiv: event.authordiv || null,
            photographer: event.photographer || null,
            photographerdiv: event.photographerdiv || null,
            interviewees: event.interviewees || null,
            intervieweesdiv: event.intervieweesdiv || null,
            imagetitle: event.imagetitle || null
        };
    }
}


/***/ }),

/***/ 4073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _language_),
  "getStaticPaths": () => (/* binding */ _language_getStaticPaths),
  "getStaticProps": () => (/* binding */ _language_getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
;// CONCATENATED MODULE: ./page-components/home/headline.tsx




const CarouselRenderItem = ({ imageHeight , title , description , link , button =false , buttonText ="BUTTON" , imageUrl ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content-background",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: imageUrl,
                    style: {
                        objectFit: "cover"
                    },
                    alt: "1"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "carousel-caption-custom",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "section-textheadline__title",
                                children: title
                            }),
                            button ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: link,
                                    className: "btn btn-white btn-outline-white",
                                    children: buttonText
                                })
                            }) : null
                        ]
                    })
                })
            })
        ]
    });
const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
        autoplay: 1
    }
};
const HeadLine = ({ contents  })=>{
    // eslint-disable-next-line no-underscore-dangle
    const _onReady = (event)=>{
        event.target.pauseVideo();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section-headline",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_carousel_namespaceObject.Carousel, {
            showArrows: false,
            autoPlay: true,
            showStatus: false,
            showThumbs: false,
            stopOnHover: false,
            infiniteLoop: true,
            interval: 5000,
            dynamicHeight: false,
            renderIndicator: (handleClick, isSelected)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    "aria-hidden": "true",
                    onClick: handleClick,
                    className: `dot-carossel ${isSelected ? "active" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                }),
            children: contents.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(CarouselRenderItem, {
                    ...item
                }, item.id))
        })
    });
};
/* harmony default export */ const headline = (HeadLine);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./helpers/mapping-sentences.ts
var mapping_sentences = __webpack_require__(6378);
// EXTERNAL MODULE: ./helpers/check-language.ts
var check_language = __webpack_require__(3271);
// EXTERNAL MODULE: ./config/dateformat.tsx
var dateformat = __webpack_require__(6221);
;// CONCATENATED MODULE: ./page-components/home/rilis-berita.tsx
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable react/no-danger */ 





const SelectedFocus = ({ content , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section section-rilis-wrapper",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section-rilis",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "section-rilis__title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.rilis */.Z.rilis)((0,check_language/* selectLanguage */.V)(content ? content.language : ""))
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-rilis__dasaroren row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-md-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "section-rilis__date",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: (0,dateformat/* default */.Z)(content ? content.date : "", "dd mmmm yyyy")
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "section-rilis__subtitle",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: content ? content.title : ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "section-rilis__isi",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: content ? content.shortDescription : ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "section-rilis__selanjutnya",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/[language]/berita/[slug]",
                                            as: `/${content?.language}/berita/${content?.slug}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "button-custom",
                                                style: {
                                                    fontFamily: "sans-serif",
                                                    color: "black"
                                                },
                                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.BacaSelanjutnya_content */.Z.BacaSelanjutnya_content)((0,check_language/* selectLanguage */.V)(content ? content.language : ""))
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: content ? content.image : "",
                                    alt: "",
                                    className: "section-rilis__img"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
/* harmony default export */ const rilis_berita = (SelectedFocus);

// EXTERNAL MODULE: ./config/axios.tsx
var config_axios = __webpack_require__(7318);
;// CONCATENATED MODULE: ./page-components/home/rilis-riset-unggulan.tsx
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable react/no-danger */ 







async function getStaticPaths() {
    try {
        const response = await Promise.all([
            axios.get("/slug/all?lang=id&menu=research"),
            axios.get("/slug/all?lang=en&menu=research"), 
        ]);
        const idParams = response[0].data.data.map((slug)=>{
            return {
                params: {
                    language: "id",
                    slug
                }
            };
        });
        const enParams = response[1].data.data.map((slug)=>{
            return {
                params: {
                    language: "en",
                    slug
                }
            };
        });
        return {
            paths: [
                ...idParams,
                ...enParams
            ],
            fallback: true
        };
    } catch (_) {
        return {
            paths: [
                {
                    params: {
                        language: "id",
                        slug: "-"
                    }
                },
                {
                    params: {
                        language: "en",
                        slug: "-"
                    }
                }, 
            ],
            fallback: true
        };
    }
}
const getStaticProps = async (context)=>{
    const lang = await checkLanguage(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await axios.get(`/research/${context.params.slug}`);
        const research = ResearchMaker.create(response.data.data) || null;
        return {
            props: {
                content: research,
                slug: context.params.slug
            },
            revalidate: 30
        };
    } catch (e) {
        return {
            props: {
                content: null,
                slug: context.params.slug
            },
            revalidate: 30
        };
    }
};
const SelectedFocuss = ({ content , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section section-riset-wrapper",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "section-riset",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-riset__dasarputih row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: content ? content.image : "",
                                alt: "",
                                className: "section-riset__img"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "section-riset__title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.risetUnggulan */.Z.risetUnggulan)((0,check_language/* selectLanguage */.V)(content ? content.language : ""))
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-riset__date",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: (0,dateformat/* default */.Z)(content ? content.date : "", "dd mmmm yyyy")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-riset__subtitle",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: content ? content.title : ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-riset__isi",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: content ? content.shortDescription : ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-riset__selanjutnya",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/[language]/riset-unggulan/[slug]",
                                        as: `/${content?.language}/riset-unggulan/${content?.slug}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "button-custom",
                                            style: {
                                                fontFamily: "sans-serif",
                                                color: "black"
                                            },
                                            children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.BacaSelanjutnya_content */.Z.BacaSelanjutnya_content)((0,check_language/* selectLanguage */.V)(content ? content.language : ""))
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
/* harmony default export */ const rilis_riset_unggulan = (SelectedFocuss);

;// CONCATENATED MODULE: ./page-components/home/index-berita.tsx
/* eslint-disable prettier/prettier */ 




const IndexBeritaItem = ({ title , image , delay , slug , language ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-4 ftco animate fadeInUp ftco-animated",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "section-index-beranda",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "staff",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block-20",
                        style: {
                            backgroundImage: `url(${image})`
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-index-beranda__title",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/berita/[slug]",
                                    as: `/${language}/berita/${slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: title
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "section-index-beranda__selanjutnya",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/berita/[slug]",
                                    as: `/${language}/berita/${slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "button-custom",
                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.BacaSelanjutnya_content */.Z.BacaSelanjutnya_content)((0,check_language/* selectLanguage */.V)(language))
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
const Berita = ({ contents , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section section-index-beranda-wrapper",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: contents.slice(1).map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(IndexBeritaItem, {
                        ...item,
                        delay: 120 * (index + 1)
                    }, item.id))
            })
        })
    });
/* harmony default export */ const index_berita = (Berita);

// EXTERNAL MODULE: ./page-components/home/index-research.tsx
var index_research = __webpack_require__(1383);
// EXTERNAL MODULE: ./models/headline.ts
var models_headline = __webpack_require__(3615);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "animated-number-react"
const external_animated_number_react_namespaceObject = require("animated-number-react");
var external_animated_number_react_default = /*#__PURE__*/__webpack_require__.n(external_animated_number_react_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./page-components/home/usu-in-number.tsx
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable react/jsx-no-duplicate-props */ 





const ItemCount = ({ number , title , percent  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "item-count",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "item-count__number",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: number ? /*#__PURE__*/ jsx_runtime_.jsx((external_animated_number_react_default()), {
                            value: number,
                            className: "number",
                            delay: 1000,
                            duration: 3000,
                            formatValue: (value)=>value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        }) : //
                        0
                    }),
                    percent
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "item-count__title",
                children: title
            })
        ]
    }, title);
// type Data = {
//   color: string;
//   value: number;
//   key?: string | number;
//   title?: string | number;
//   [key: string]: any;
// }[];
const UsuInNumber = ({ contents , bgImage  })=>{
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "ftco-section section-numberusu-wrapper",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "section-numberusu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.UsuDalamAngka_content */.Z.UsuDalamAngka_content)((0,check_language/* selectLanguage */.V)(language))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "article-item row section-numberusu__garisoren"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "section-numberusu__list",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-numberusu__container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__mahasiswa",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/mahasiswa.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: contents?.allSudentAmount,
                                                        // number={39410}
                                                        percent: "",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.mahasiswa */.Z.mahasiswa)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__pasca",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/pascasarjana.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi pengajar",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: (contents?.pascasarjanaAmount) / (contents?.allSudentAmount) * 100,
                                                        // number={11}
                                                        percent: "%",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pascasarjana */.Z.pascasarjana)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__diploma",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/diploma.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi sarjana",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: (contents?.diplomaAmount) / (contents?.allSudentAmount) * 100,
                                                        // number={7}
                                                        percent: "%",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.diploma */.Z.diploma)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-numberusu__container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__sarjana",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/sarjana.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi sarjana",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: (contents?.sarjanaAmount) / (contents?.allSudentAmount) * 100,
                                                        // number={76}
                                                        percent: "%",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.sarjana */.Z.sarjana)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__profesi",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/profesi.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi guru",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: ((contents?.profesiAmount) + (contents?.spesialisAmount)) / (contents?.allSudentAmount) * 100,
                                                        // number={6}
                                                        percent: "%",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.profesi */.Z.profesi)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__fakultas",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/fakultas.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: contents?.facultyAmount,
                                                        // number={16}
                                                        percent: "",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.fakultas */.Z.fakultas)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-numberusu__container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__pengajar",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/pengajar.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi pengajar",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: contents?.stafPengajarAmount,
                                                        // number={131}
                                                        percent: "",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.staf_pengajar */.Z.staf_pengajar)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__lektor",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/lektor.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi sarjana",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: contents?.lektorAmount,
                                                        // number={546}
                                                        percent: "",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.lektor */.Z.lektor)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__haki",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/haki.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi pengajar",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: contents?.hkiAmount,
                                                        // number={673}
                                                        percent: "",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.hki */.Z.hki)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "section-numberusu__container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__guru",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/gurubesar.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi guru",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: contents?.guruBesarAmount,
                                                        // number={166}
                                                        percent: "",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.guru_besar */.Z.guru_besar)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__lektorkepala",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/lektorkepala.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: contents?.lektorKepalaAmount,
                                                        // number={657}
                                                        percent: "",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.lektor_kepala */.Z.lektor_kepala)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-numberusu__item",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-numberusu__aa",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "section-numberusu__img",
                                                    src: "/images/AA.jpg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "section-numberusu__isi sarjana",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ItemCount, {
                                                        number: contents?.asistenAhliAmount,
                                                        // number={215}
                                                        percent: "",
                                                        title: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.asisten_ahli */.Z.asisten_ahli)((0,check_language/* selectLanguage */.V)(language))
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const usu_in_number = (UsuInNumber);
function style() {
    throw new Error("Function not implemented.");
}

;// CONCATENATED MODULE: ./models/usu-in -number-bg-model.ts
class UsuInNumberBgMaker {
    static create(event) {
        return {
            bgImage: event["bg-image"] || null
        };
    }
}

;// CONCATENATED MODULE: ./models/usu-in-number-model.ts
class UsuInNumberMaker {
    static create(event) {
        return {
            lectureAmount: event.lecture_amount,
            facultyAmount: event.faculty_amount,
            majorAmount: event.major_amount,
            guruBesarAmount: event.guru_besar_amount,
            stafPengajarAmount: event.staf_pengajar_amount,
            asistenAhliAmount: event.asisten_ahli_amount,
            lektorAmount: event.lektor_amount,
            lektorKepalaAmount: event.lektor_kepala_amount,
            sarjanaAmount: event.sarjana_amount,
            diplomaAmount: event.diploma_amount,
            profesiAmount: event.profesi_amount,
            spesialisAmount: event.spesialis_amount,
            pascasarjanaAmount: event.pascasarjana_amount,
            allSudentAmount: event.all_sudent_amount,
            hkiAmount: event.hki_amount
        };
    }
}

// EXTERNAL MODULE: ./models/research.ts
var research = __webpack_require__(3373);
;// CONCATENATED MODULE: ./page-components/home/fakultas-sekolah.tsx
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable react/jsx-one-expression-per-line */ /* eslint-disable jsx-a11y/iframe-has-title */ /* eslint-disable no-shadow */ 





const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slideToScroll: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slideToScroll: 1,
                centerMode: false
            }
        }, 
    ]
};
const FakultasSekolah = ({ contents , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section section-pendidikan-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "section-pendidikan__img",
                                src: "/images/kakakpendidikan.png"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "section-pendidikan__title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pendidikan */.Z.pendidikan)((0,check_language/* selectLanguage */.V)(language))
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-pendidikan__isi",
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.fakultas_outline */.Z.fakultas_outline)((0,check_language/* selectLanguage */.V)(language))
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row section-pendidikan-list",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/program-sarjana",
                                    as: `/${language}/program-sarjana`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "section-pendidikan__h1",
                                            children: [
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.program */.Z.program)((0,check_language/* selectLanguage */.V)(language)),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.sarjanaHome */.Z.sarjanaHome)((0,check_language/* selectLanguage */.V)(language)),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-pendidikan__listisi",
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.sarjanaContent */.Z.sarjanaContent)((0,check_language/* selectLanguage */.V)(language))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project",
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/program-pascasarjana",
                                    as: `/${language}/program-pascasarjana`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "section-pendidikan__h1hitam",
                                            children: [
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.programpasca */.Z.programpasca)((0,check_language/* selectLanguage */.V)(language)),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pascaHome */.Z.pascaHome)((0,check_language/* selectLanguage */.V)(language))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-pendidikan__listisi2",
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pascasarjanaContent */.Z.pascasarjanaContent)((0,check_language/* selectLanguage */.V)(language))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/program-diploma",
                                    as: `/${language}/program-diploma`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "section-pendidikan__h1",
                                            children: [
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.programdiploma */.Z.programdiploma)((0,check_language/* selectLanguage */.V)(language)),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.spesialisHome */.Z.spesialisHome)((0,check_language/* selectLanguage */.V)(language)),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.diplomaHome */.Z.diplomaHome)((0,check_language/* selectLanguage */.V)(language))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-pendidikan__listisi",
                                    style: {
                                        marginTop: "40px"
                                    },
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.diplomaContent */.Z.diplomaContent)((0,check_language/* selectLanguage */.V)(language))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/program-profesi",
                                    as: `/${language}/program-profesi`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "section-pendidikan__h1hitam",
                                            children: [
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.programprofesi */.Z.programprofesi)((0,check_language/* selectLanguage */.V)(language)),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " ",
                                                (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.profesiHome */.Z.profesiHome)((0,check_language/* selectLanguage */.V)(language))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "section-pendidikan__listisi2",
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.profesiContent */.Z.profesiContent)((0,check_language/* selectLanguage */.V)(language))
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const fakultas_sekolah = (FakultasSekolah);

;// CONCATENATED MODULE: ./page-components/home/kehidupan-kampus.tsx
/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable react/jsx-one-expression-per-line */ /* eslint-disable jsx-a11y/iframe-has-title */ /* eslint-disable no-shadow */ 




const kehidupan_kampus_settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slideToScroll: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slideToScroll: 1,
                centerMode: false
            }
        }, 
    ]
};
const KehidupanKampus = ({ contents , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section section-kampus-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "section-kampus",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kehidupanKampus */.Z.kehidupanKampus)((0,check_language/* selectLanguage */.V)(language))
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "section-kampus__isi",
                                children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kehidupanKampus_outline */.Z.kehidupanKampus_outline)((0,check_language/* selectLanguage */.V)(language))
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row section-kampus-list",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-4 section-kampus-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `/${language}/kehidupan-kampus`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "section-kampus__img ",
                                        src: "/images/UKM.jpg"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "elementor-heading-title",
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.kegiantanMahasiswa */.Z.kegiantanMahasiswa)((0,check_language/* selectLanguage */.V)(language))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-4 section-kampus-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `/${language}/kehidupan-kampus`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "section-kampus__img",
                                        src: "/images/konseling.jpg"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "elementor-heading-title",
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.konseling */.Z.konseling)((0,check_language/* selectLanguage */.V)(language))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-md-4 section-kampus-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: `/${language}/kehidupan-kampus`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "section-kampus__img",
                                        src: "/images/fasilitas.jpg"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "elementor-heading-title",
                                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.fasilitasKampus */.Z.fasilitasKampus)((0,check_language/* selectLanguage */.V)(language))
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const kehidupan_kampus = (KehidupanKampus);

// EXTERNAL MODULE: ./models/public-lecture.ts
var public_lecture = __webpack_require__(8790);
// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__(8073);
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);
;// CONCATENATED MODULE: ./page-components/home/dedication.tsx
/* eslint-disable react/jsx-props-no-multi-spaces */ /* eslint-disable prettier/prettier */ 





const DedicationItem = ({ title , shortDescription , location , image , delay , slug , language ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-md-4 col-lg-4 ftco animate fadeInUp ftco-animated",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "section-index-beranda",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "staff",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block-20",
                        style: {
                            backgroundImage: `url(${image})`
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pt-4 section-index-beranda__title",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/pengabdian-masyarakat/[slug]",
                                    as: `/${language}/pengabdian-masyarakat/${slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: title
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "section-index-beranda__selanjutnya",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/[language]/pengabdian-masyarakat/[slug]",
                                    as: `/${language}/pengabdian-masyarakat/${slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "button-custom",
                                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.BacaSelanjutnya_content */.Z.BacaSelanjutnya_content)((0,check_language/* selectLanguage */.V)(language))
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
const Dedication = ({ contents , language  })=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "ftco-section section-pkm-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-pkm__title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pengabdian */.Z.pengabdian)((0,check_language/* selectLanguage */.V)(language))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "section-pkm__isi",
                    children: (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.pengabdian_outline */.Z.pengabdian_outline)((0,check_language/* selectLanguage */.V)(language))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-wrap",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: contents.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(DedicationItem, {
                                ...item,
                                delay: 120 * (index + 1)
                            }, item.id))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                    animateIn: "fadeInUp",
                    animateOnce: true,
                    delay: 120 * 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "section-index-beranda__arsippengabdian",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/[language]/pengabdian-masyarakat",
                            as: `/${language}/pengabdian-masyarakat`,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.LihatArsipPengabdian_content */.Z.LihatArsipPengabdian_content)((0,check_language/* selectLanguage */.V)(language)),
                                    " ",
                                    "\xa0",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ion-ios-arrow-forward"
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
/* harmony default export */ const home_dedication = (Dedication);

// EXTERNAL MODULE: ./models/dedication.ts
var models_dedication = __webpack_require__(3626);
// EXTERNAL MODULE: ./models/news-menu.ts
var news_menu = __webpack_require__(6199);
// EXTERNAL MODULE: ./page-components/common/loading.tsx
var loading = __webpack_require__(8577);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./pages/[language]/index.tsx
/* eslint-disable react/jsx-one-expression-per-line */ // import Block from '@/page-components/home/block';
// import BlockModel, { BlockMaker } from '@/models/block';
// import Berita from '@/page-components/home/berita';



























async function _language_getStaticPaths() {
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
const _language_getStaticProps = async (context)=>{
    const lang = await (0,check_language/* default */.Z)(context.params.language);
    if (lang.redirect) {
        return {
            redirect: {
                destination: `/${lang.value}`,
                permanent: false
            }
        };
    }
    try {
        const response = await Promise.all([
            config_axios/* default.get */.Z.get(`/headline?lang=${lang.value}&selected=true`),
            config_axios/* default.get */.Z.get(`/news-menu?lang=${lang.value}&selected=true&`),
            config_axios/* default.get */.Z.get(`/news-menu?lang=${lang.value}&page=1&limit=4&selected=true`),
            config_axios/* default.get */.Z.get("/usu-fact"),
            config_axios/* default.get */.Z.get("/usu-fact-bg"),
            config_axios/* default.get */.Z.get(`/research?lang=${lang.value}&selected=true&`),
            config_axios/* default.get */.Z.get(`/research?lang=${lang.value}&page=1&limit=4&selected=true`),
            config_axios/* default.get */.Z.get(`/public-lecture?lang=${lang.value}&page=1&limit=8&selected=true`),
            config_axios/* default.get */.Z.get(`/dedication?lang=${lang.value}&page=1&limit=3&selected=true`), 
        ]);
        console.log(response[0].data);
        const headlines = response[0].data.data?.map((res)=>models_headline/* HeadlineMaker.create */.Z.create({
                ...res,
                imageHeight: "100vh"
            }) || []);
        const selectedFocus = response[1].data.data.data[0] ? news_menu/* NewsMenuMaker.create */.E.create(response[1].data.data.data[0]) : null;
        const indexBerita = response[2].data.data.data?.map((res)=>news_menu/* NewsMenuMaker.create */.E.create(res));
        const usuInNumber = UsuInNumberMaker.create(response[3].data.data);
        const usuInNumberBgImage = UsuInNumberBgMaker.create(response[4].data.data);
        const selectedFocuss = response[5].data.data.data[0] ? research/* ResearchMaker.create */.d.create(response[5].data.data.data[0]) : null;
        const indexResearch = response[6].data.data.data?.map((res)=>research/* ResearchMaker.create */.d.create(res));
        const fakultasSekolah = response[7].data.data?.map((res)=>public_lecture/* PublicLectureMaker.create */.I.create(res));
        const dedication = response[8].data.data.data?.map((res)=>models_dedication/* DedicationMaker.create */.h.create(res));
        const kehidupanKampus = response[7].data.data?.map((res)=>public_lecture/* PublicLectureMaker.create */.I.create(res));
        const newBlok = response[7].data.data?.map((res)=>public_lecture/* PublicLectureMaker.create */.I.create(res));
        console.log(headlines);
        return {
            props: {
                headlines,
                selectedFocus,
                indexBerita,
                usuInNumber,
                usuInNumberBgImage,
                selectedFocuss,
                indexResearch,
                fakultasSekolah,
                dedication,
                kehidupanKampus,
                newBlok
            },
            revalidate: 30
        };
    } catch (e) {
        console.log("ERROR: ");
        console.log(e);
        return {
            props: {
                headlines: [],
                selectedFocus: null,
                indexBerita: [],
                usuInNumber: null,
                usuInNumberBgImage: null,
                selectedFocuss: null,
                indexResearch: [],
                fakultasSekolah: [],
                dedication: [],
                kehidupanKampus: [],
                newBlok: []
            },
            revalidate: 30
        };
    }
};
const Home = ({ headlines , selectedFocus , indexBerita , usuInNumber , usuInNumberBgImage , selectedFocuss , indexResearch , fakultasSekolah , dedication , kehidupanKampus , newBlok ,  })=>{
    external_react_ga_default().initialize("UA-152557781-1");
    if (false) {}
    const router = (0,router_.useRouter)();
    const { language  } = router.query;
    if ([
        typeof headlines
    ].includes("undefined") || router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx(loading/* default */.Z, {});
    }
    console.log(headlines);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            (0,mapping_sentences/* getKeyValue */.s)(mapping_sentences/* default.beranda */.Z.beranda)((0,check_language/* selectLanguage */.V)(language)),
                            " | Universitas Sumatera Utara"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "CvRjTUvlFskr6n1LGFIWba6p2FWAG8ggNgBupSeMn-Y"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(headline, {
                        contents: headlines || []
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(rilis_berita, {
                        content: selectedFocus
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(index_berita, {
                        contents: indexBerita || [],
                        language: language
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(usu_in_number, {
                        contents: usuInNumber,
                        bgImage: usuInNumberBgImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fakultas_sekolah, {
                        contents: fakultasSekolah || [],
                        language: language
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(rilis_riset_unggulan, {
                        content: selectedFocuss
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(index_research/* default */.Z, {
                        contents: indexResearch || [],
                        language: language
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(home_dedication, {
                        contents: dedication || [],
                        language: language
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(kehidupan_kampus, {
                        contents: kehidupanKampus || [],
                        language: language
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _language_ = (Home);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = require("dateformat");

/***/ }),

/***/ 6734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 8073:
/***/ ((module) => {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ 3082:
/***/ ((module) => {

module.exports = require("react-ga");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,3271,7318,6378,8577,3717,7969], () => (__webpack_exec__(4073)));
module.exports = __webpack_exports__;

})();