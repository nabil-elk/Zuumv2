"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { children  } = param;\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [room, setRooms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timerx = setTimeout(()=>{\n            fetchUniqueRoom();\n            console.log(\"runned\");\n        }, 1000);\n        return ()=>clearTimeout(timerx);\n    }, []);\n    const fetchUniqueRoom = ()=>{\n        return fetch(\"http://localhost:3000/api/rooms/roomId\").then((res)=>res.json()).then((data)=>setRooms(data));\n    };\n    let navigation = [\n        {\n            name: \"Dashboard\",\n            href: \"/list\",\n            current: true\n        },\n        {\n            name: \"Join a Room\",\n            href: \"/room\",\n            current: false\n        }\n    ];\n    const userNavigation = [\n        {\n            name: \"Sign out\",\n            href: \"#\"\n        }\n    ];\n    function classNames() {\n        for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n            classes[_key] = arguments[_key];\n        }\n        return classes.filter(Boolean).join(\" \");\n    }\n    if (room !== null) {\n        navigation = [\n            {\n                name: \"Dashboard\",\n                href: \"/list\",\n                current: true\n            },\n            {\n                name: \"Join a Room\",\n                href: \"/room\",\n                current: false\n            }\n        ];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-full\",\n        children: [\n            !session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Disclosure, {\n                    as: \"nav\",\n                    className: \"bg-indigo-800\",\n                    children: (param)=>/*#__PURE__*/ {\n                        let { open  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex h-16 items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex-shrink-0\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"h-8 w-8 font-black text-white\",\n                                                        children: \"Zuuum.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"hidden md:block\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"ml-10 flex items-baseline space-x-4\",\n                                                        children: navigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                href: item.href,\n                                                                className: classNames(item.current ? \"bg-indigo-900 text-white\" : \"text-gray-300 hover:bg-indigo-700 hover:text-white\", \"px-3 py-2 rounded-md text-sm font-medium\"),\n                                                                \"aria-current\": item.current ? \"page\" : undefined,\n                                                                children: item.name\n                                                            }, item.name, false, {\n                                                                fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                                lineNumber: 83,\n                                                                columnNumber: 27\n                                                            }, this))\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"hidden md:block\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-4 flex items-center md:ml-6\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                                                    as: \"div\",\n                                                    className: \"relative ml-3\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Button, {\n                                                                className: \"flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        className: \"sr-only\",\n                                                                        children: \"Open user menu\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                                        lineNumber: 107,\n                                                                        columnNumber: 29\n                                                                    }, this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                                        className: \"h-8 w-8 rounded-full\",\n                                                                        src: session.user.image,\n                                                                        width: \"50\",\n                                                                        height: \"50\",\n                                                                        alt: \"\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                                        lineNumber: 108,\n                                                                        columnNumber: 29\n                                                                    }, this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                                lineNumber: 106,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                            lineNumber: 105,\n                                                            columnNumber: 25\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n                                                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                                            enter: \"transition ease-out duration-100\",\n                                                            enterFrom: \"transform opacity-0 scale-95\",\n                                                            enterTo: \"transform opacity-100 scale-100\",\n                                                            leave: \"transition ease-in duration-75\",\n                                                            leaveFrom: \"transform opacity-100 scale-100\",\n                                                            leaveTo: \"transform opacity-0 scale-95\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Items, {\n                                                                className: \"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none\",\n                                                                children: userNavigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Menu.Item, {\n                                                                        children: (param)=>/*#__PURE__*/ {\n                                                                            let { active  } = param;\n                                                                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                                href: item.href,\n                                                                                className: classNames(active ? \"bg-gray-100\" : \"\", \"block px-4 py-2 text-sm text-gray-700\"),\n                                                                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                                                                                children: item.name\n                                                                            }, void 0, false, {\n                                                                                fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                                                lineNumber: 124,\n                                                                                columnNumber: 35\n                                                                            }, this);\n                                                                        }\n                                                                    }, item.name, false, {\n                                                                        fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                                        lineNumber: 122,\n                                                                        columnNumber: 31\n                                                                    }, this))\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                                lineNumber: 120,\n                                                                columnNumber: 27\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                            lineNumber: 111,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-1\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n                lineNumber: 154,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fendr\\\\OneDrive\\\\Bureau\\\\Zoom App\\\\prisma demo\\\\Zuum(zoom-clone)\\\\components\\\\layout\\\\layout.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Layout, \"XwfzndwIITNwmO+9P/GpxAy9zNA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztzRUFHaEcsOERBQUNoRCx5REFBVUE7NERBQ1RrQyxJQUFJckMsMkNBQVFBOzREQUNab0QsT0FBTTs0REFDTkMsV0FBVTs0REFDVkMsU0FBUTs0REFDUkMsT0FBTTs0REFDTkMsV0FBVTs0REFDVkMsU0FBUTtzRUFFUiw0RUFBQ3ZELHlEQUFVO2dFQUFDa0MsV0FBVTswRUFDbkJQLGVBQWVXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbkIsOERBQUN2Qyx3REFBUztrRkFDUCx1QkFDQztnRkFEQSxFQUFFMEQsT0FBTSxFQUFFO21GQUNWLDhEQUFDbEI7Z0ZBQ0NmLE1BQU1jLEtBQUtkLElBQUk7Z0ZBQ2ZTLFdBQVdOLFdBQ1Q4QixTQUFTLGdCQUFnQixFQUFFLEVBQzNCO2dGQUVGQyxTQUFVLElBQU12RCx3REFBT0E7MEZBRXRCbUMsS0FBS2YsSUFBSTs7Ozs7O3dFQUNUO3VFQVhTZSxLQUFLZixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXdCekM7Ozs7Ozs2QkFJTDswQkFJTCw4REFBQ29DO2dCQUFLMUIsV0FBVTswQkFBVTNCOzs7Ozs7Ozs7Ozs7QUFJOUI7R0F2SlNEOztRQUU0QkQsdURBQVVBOzs7S0FGdENDO0FBeUpULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5qcz9jYjBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXNjbG9zdXJlLCBNZW51LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuaW1wb3J0IHtzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbiB9KSB7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXN9ID0gdXNlU2Vzc2lvbigpXHJcbiAgICBjb25zdCBbcm9vbSwgc2V0Um9vbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpbWVyeCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmZXRjaFVuaXF1ZVJvb20oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJydW5uZWRcIilcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXJ4KTtcclxuICAgIH0sIFtdKTtcclxuICBcclxuICBcclxuICAgIGNvbnN0IGZldGNoVW5pcXVlUm9vbSA9ICgpID0+IHtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9yb29tcy9yb29tSWRgKVxyXG4gICAgICAudGhlbigocmVzKT0+cmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFJvb21zKGRhdGEpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGxldCBuYXZpZ2F0aW9uID0gW1xyXG4gICAgICB7IG5hbWU6ICdEYXNoYm9hcmQnLCBocmVmOiAnL2xpc3QnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgIHsgbmFtZTogJ0pvaW4gYSBSb29tJywgaHJlZjogJy9yb29tJywgY3VycmVudDogZmFsc2UgfSxcclxuICAgIF1cclxuICAgIGNvbnN0IHVzZXJOYXZpZ2F0aW9uID0gW1xyXG4gICAgICB7IG5hbWU6ICdTaWduIG91dCcsIGhyZWY6ICcjJyB9LFxyXG4gICAgXVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICAgICAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxyXG4gICAgfVxyXG4gICAgIGlmIChyb29tICE9PSBudWxsICkge1xyXG4gICAgICBuYXZpZ2F0aW9uID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdEYXNoYm9hcmQnLCBocmVmOiAnL2xpc3QnLCBjdXJyZW50OiB0cnVlIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnSm9pbiBhIFJvb20nLCBocmVmOiAnL3Jvb20nLCBjdXJyZW50OiBmYWxzZSB9LFxyXG4gICAgICBdO1xyXG5cclxuICAgICAgXHJcbiAgICAgfSBcclxuICBcclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLWZ1bGxcIj5cclxuICAgXHJcbiAgICB7IXNlc3Npb24gPyAoXHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgICApOlxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8RGlzY2xvc3VyZSBhcz1cIm5hdlwiIGNsYXNzTmFtZT1cImJnLWluZGlnby04MDBcIj5cclxuICAgICAgICAgIHsoeyBvcGVuIH0pID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0xNiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LTggZm9udC1ibGFjayB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFp1dXVtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgZmxleCBpdGVtcy1iYXNlbGluZSBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1pbmRpZ28tOTAwIHRleHQtd2hpdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIGhvdmVyOnRleHQtd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2l0ZW0uY3VycmVudCA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IGZsZXggaXRlbXMtY2VudGVyIG1kOm1sLTZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogUHJvZmlsZSBkcm9wZG93biAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51IGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51LkJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IG1heC13LXhzIGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS04MDAgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctd2hpdGUgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gdXNlciBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImgtOCB3LTggcm91bmRlZC1mdWxsXCIgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbXMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB6LTEwIG10LTIgdy00OCBvcmlnaW4tdG9wLXJpZ2h0IHJvdW5kZWQtbWQgYmctd2hpdGUgcHktMSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlck5hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBhY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlID8gJ2JnLWdyYXktMTAwJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9EaXNjbG9zdXJlPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgXHJcbiAgXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTFcIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGcmFnbWVudCIsIkRpc2Nsb3N1cmUiLCJNZW51IiwiVHJhbnNpdGlvbiIsIkltYWdlIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicm9vbSIsInNldFJvb21zIiwidGltZXJ4Iiwic2V0VGltZW91dCIsImZldGNoVW5pcXVlUm9vbSIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclRpbWVvdXQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiY3VycmVudCIsInVzZXJOYXZpZ2F0aW9uIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImNsYXNzTmFtZSIsImFzIiwib3BlbiIsInNwYW4iLCJtYXAiLCJpdGVtIiwiYSIsImFyaWEtY3VycmVudCIsInVuZGVmaW5lZCIsIkJ1dHRvbiIsInNyYyIsInVzZXIiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiSXRlbXMiLCJJdGVtIiwiYWN0aXZlIiwib25DbGljayIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n"));

/***/ })

});