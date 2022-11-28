"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./config/axios.tsx":
/*!**************************!*\
  !*** ./config/axios.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url */ \"./config/url.tsx\");\n\n\n\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: `${_url__WEBPACK_IMPORTED_MODULE_3__.baseUrl}/`,\n    httpsAgent: new (https__WEBPACK_IMPORTED_MODULE_1___default().Agent)({\n        rejectUnauthorized: false\n    }),\n    headers: {\n        Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(\"ssotok\")}`\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvYXhpb3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0E7QUFDTTtBQUNBO0FBRWhDLE1BQU1JLFFBQVEsR0FBR0osbURBQVksQ0FBQztJQUM1Qk0sT0FBTyxFQUFFLENBQUMsRUFBRUgseUNBQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEJJLFVBQVUsRUFBRSxJQUFJTixvREFBVyxDQUFDO1FBQUVRLGtCQUFrQixFQUFFLEtBQUs7S0FBRSxDQUFDO0lBQzFEQyxPQUFPLEVBQUU7UUFDUEMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFVCxvREFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDakQ7Q0FDRixDQUFDO0FBRUYsaUVBQWVFLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzdWFjaWQvLi9jb25maWcvYXhpb3MudHN4P2UxZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgYmFzZVVybCB9IGZyb20gJy4vdXJsJztcclxuXHJcbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgJHtiYXNlVXJsfS9gLFxyXG4gIGh0dHBzQWdlbnQ6IG5ldyBodHRwcy5BZ2VudCh7IHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UgfSksXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke0Nvb2tpZXMuZ2V0KCdzc290b2snKX1gLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImh0dHBzIiwiQ29va2llcyIsImJhc2VVcmwiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJodHRwc0FnZW50IiwiQWdlbnQiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/axios.tsx\n");

/***/ }),

/***/ "./config/url.tsx":
/*!************************!*\
  !*** ./config/url.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appsUrl\": () => (/* binding */ appsUrl),\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"uploadUrl\": () => (/* binding */ uploadUrl)\n/* harmony export */ });\n// export const baseUrl =\n//   process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.usu.ac.id/id/api/front';\n// export const appsUrl =\n//   process.env.NEXT_PUBLIC_APPS_URL || 'https://www.usu.ac.id/id';\n// export const uploadUrl =\n//   process.env.NEXT_PUBLIC_UPLOAD_URL ||\n//   'https://www.usu.ac.id/id/api/front/upload';\nconst baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || \"http://localhost:8081/front\";\nconst appsUrl = process.env.NEXT_PUBLIC_APPS_URL || \"http://localhost:8081\";\nconst uploadUrl = process.env.NEXT_PUBLIC_UPLOAD_URL || \"http://localhost:8081\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvdXJsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5QkFBeUI7QUFDekIsZ0ZBQWdGO0FBQ2hGLHlCQUF5QjtBQUN6QixvRUFBb0U7QUFDcEUsMkJBQTJCO0FBQzNCLDBDQUEwQztBQUMxQyxpREFBaUQ7QUFDMUMsTUFBTUEsT0FBTyxHQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHNCQUFzQixJQUFJLDZCQUE2QixDQUFDO0FBQy9ELE1BQU1DLE9BQU8sR0FDbEJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxvQkFBb0IsSUFBSSx1QkFBdUIsQ0FBQztBQUN2RCxNQUFNQyxTQUFTLEdBQ3BCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssc0JBQXNCLElBQUksdUJBQXVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c3VhY2lkLy4vY29uZmlnL3VybC50c3g/M2FjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgY29uc3QgYmFzZVVybCA9XHJcbi8vICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX1VSTCB8fCAnaHR0cHM6Ly93d3cudXN1LmFjLmlkL2lkL2FwaS9mcm9udCc7XHJcbi8vIGV4cG9ydCBjb25zdCBhcHBzVXJsID1cclxuLy8gICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBTX1VSTCB8fCAnaHR0cHM6Ly93d3cudXN1LmFjLmlkL2lkJztcclxuLy8gZXhwb3J0IGNvbnN0IHVwbG9hZFVybCA9XHJcbi8vICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVBMT0FEX1VSTCB8fFxyXG4vLyAgICdodHRwczovL3d3dy51c3UuYWMuaWQvaWQvYXBpL2Zyb250L3VwbG9hZCc7XHJcbmV4cG9ydCBjb25zdCBiYXNlVXJsID1cclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjgwODEvZnJvbnQnO1xyXG5leHBvcnQgY29uc3QgYXBwc1VybCA9XHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQU19VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MSc7XHJcbmV4cG9ydCBjb25zdCB1cGxvYWRVcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VQTE9BRF9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MSc7XHJcbiJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NFUlZFUl9VUkwiLCJhcHBzVXJsIiwiTkVYVF9QVUJMSUNfQVBQU19VUkwiLCJ1cGxvYWRVcmwiLCJORVhUX1BVQkxJQ19VUExPQURfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/url.tsx\n");

/***/ }),

/***/ "./helpers/get-location.ts":
/*!*********************************!*\
  !*** ./helpers/get-location.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/axios */ \"./config/axios.tsx\");\n\nconst getLocation = async ()=>{\n    try {\n        const response = await _config_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://ipapi.co/json\");\n        return response.data.country_code.toLowerCase() || \"id\";\n    } catch (e) {\n        return \"id\";\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLocation);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2dldC1sb2NhdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztBQUVuQyxNQUFNQyxXQUFXLEdBQUcsVUFBNkI7SUFDL0MsSUFBSTtRQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNRix5REFBUyxDQUFDLHVCQUF1QixDQUFDO1FBQ3pELE9BQU9FLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDQyxZQUFZLENBQUNDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQztJQUMxRCxFQUFFLE9BQU9DLENBQUMsRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZU4sV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXN1YWNpZC8uL2hlbHBlcnMvZ2V0LWxvY2F0aW9uLnRzPzIwMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ0AvY29uZmlnL2F4aW9zJztcclxuXHJcbmNvbnN0IGdldExvY2F0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8c3RyaW5nPiA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2lwYXBpLmNvL2pzb24nKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLmNvdW50cnlfY29kZS50b0xvd2VyQ2FzZSgpIHx8ICdpZCc7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuICdpZCc7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldExvY2F0aW9uIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiY291bnRyeV9jb2RlIiwidG9Mb3dlckNhc2UiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/get-location.ts\n");

/***/ }),

/***/ "./page-components/common/loading.tsx":
/*!********************************************!*\
  !*** ./page-components/common/loading.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst LoadingSSO = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Universitas Sumatera Utara\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\vercel\\\\usuacid\\\\page-components\\\\common\\\\loading.tsx\",\n                        lineNumber: 7,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/usu_icon.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\vercel\\\\usuacid\\\\page-components\\\\common\\\\loading.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\vercel\\\\usuacid\\\\page-components\\\\common\\\\loading.tsx\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    height: \"100vh\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loading-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"loading-image\",\n                            src: \"/usu.png\",\n                            alt: \"logo\",\n                            style: {\n                                width: 70\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\vercel\\\\usuacid\\\\page-components\\\\common\\\\loading.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"Please wait...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\vercel\\\\usuacid\\\\page-components\\\\common\\\\loading.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\vercel\\\\usuacid\\\\page-components\\\\common\\\\loading.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\vercel\\\\usuacid\\\\page-components\\\\common\\\\loading.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSSO);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlLWNvbXBvbmVudHMvY29tbW9uL2xvYWRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNIO0FBRTFCLE1BQU1FLFVBQVUsR0FBYSxrQkFDM0I7OzBCQUNFLDhEQUFDRixrREFBSTs7a0NBQ0gsOERBQUNHLE9BQUs7a0NBQUMsNEJBQTBCOzs7OztpQ0FBUTtrQ0FDekMsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsZUFBZTs7Ozs7aUNBQUc7Ozs7Ozt5QkFDbkM7MEJBQ1AsOERBQUNDLEtBQUc7Z0JBQ0ZDLEtBQUssRUFBRTtvQkFDTEMsT0FBTyxFQUFFLE1BQU07b0JBQ2ZDLE1BQU0sRUFBRSxPQUFPO29CQUNmQyxjQUFjLEVBQUUsUUFBUTtvQkFDeEJDLFVBQVUsRUFBRSxRQUFRO2lCQUNyQjswQkFFRCw0RUFBQ0wsS0FBRztvQkFBQ00sU0FBUyxFQUFDLG1CQUFtQjs7c0NBQ2hDLDhEQUFDQyxLQUFHOzRCQUNGRCxTQUFTLEVBQUMsZUFBZTs0QkFDekJFLEdBQUcsRUFBQyxVQUFVOzRCQUNkQyxHQUFHLEVBQUMsTUFBTTs0QkFDVlIsS0FBSyxFQUFFO2dDQUFFUyxLQUFLLEVBQUUsRUFBRTs2QkFBRTs7Ozs7cUNBQ3BCO3NDQUNGLDhEQUFDVixLQUFHO3NDQUFDLGdCQUFjOzs7OztxQ0FBTTs7Ozs7OzZCQUNyQjs7Ozs7eUJBQ0Y7O29CQUNMO0FBR0wsaUVBQWVMLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzdWFjaWQvLi9wYWdlLWNvbXBvbmVudHMvY29tbW9uL2xvYWRpbmcudHN4P2FkYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvYWRpbmdTU086IFJlYWN0LkZDID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPlVuaXZlcnNpdGFzIFN1bWF0ZXJhIFV0YXJhPC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvdXN1X2ljb24ucG5nXCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvYWRpbmctaW1hZ2VcIlxyXG4gICAgICAgICAgc3JjPVwiL3VzdS5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNzAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+UGxlYXNlIHdhaXQuLi48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTU087XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJMb2FkaW5nU1NPIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./page-components/common/loading.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _page_components_common_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/page-components/common/loading */ \"./page-components/common/loading.tsx\");\n/* harmony import */ var helpers_get_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/get-location */ \"./helpers/get-location.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Home = ({ countryCode  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        router.push(`/${countryCode}`);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_page_components_common_loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\vercel\\\\usuacid\\\\pages\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, undefined);\n};\nHome.getInitialProps = async ()=>{\n    const countryCode = await (0,helpers_get_location__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const language = countryCode === \"id\" ? \"id\" : \"en\";\n    return {\n        countryCode: language\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEQ7QUFDWDtBQUVQO0FBQ047QUFLbEMsTUFBTUksSUFBSSxHQUFvQixDQUFDLEVBQUVDLFdBQVcsR0FBRSxHQUFLO0lBQ2pELE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUUxQkMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFRixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQU8sOERBQUNMLHVFQUFVOzs7O2lCQUFHLENBQUM7QUFDeEIsQ0FBQztBQUVESSxJQUFJLENBQUNJLGVBQWUsR0FBRyxVQUFZO0lBQ2pDLE1BQU1ILFdBQVcsR0FBRyxNQUFNSixnRUFBVyxFQUFFO0lBQ3ZDLE1BQU1RLFFBQVEsR0FBR0osV0FBVyxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtJQUNuRCxPQUFPO1FBQUVBLFdBQVcsRUFBRUksUUFBUTtLQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsaUVBQWVMLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzdWFjaWQvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGluZ1NTTyBmcm9tICdAL3BhZ2UtY29tcG9uZW50cy9jb21tb24vbG9hZGluZyc7XHJcbmltcG9ydCBnZXRMb2NhdGlvbiBmcm9tICdoZWxwZXJzL2dldC1sb2NhdGlvbic7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjb3VudHJ5Q29kZTogc3RyaW5nO1xyXG59XHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlPFByb3BzPiA9ICh7IGNvdW50cnlDb2RlIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvJHtjb3VudHJ5Q29kZX1gKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIDxMb2FkaW5nU1NPIC8+O1xyXG59O1xyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY291bnRyeUNvZGUgPSBhd2FpdCBnZXRMb2NhdGlvbigpO1xyXG4gIGNvbnN0IGxhbmd1YWdlID0gY291bnRyeUNvZGUgPT09ICdpZCcgPyAnaWQnIDogJ2VuJztcclxuICByZXR1cm4geyBjb3VudHJ5Q29kZTogbGFuZ3VhZ2UgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJMb2FkaW5nU1NPIiwiZ2V0TG9jYXRpb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJIb21lIiwiY291bnRyeUNvZGUiLCJyb3V0ZXIiLCJwdXNoIiwiZ2V0SW5pdGlhbFByb3BzIiwibGFuZ3VhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();