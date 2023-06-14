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
exports.id = "pages/api/rooms/roomId";
exports.ids = ["pages/api/rooms/roomId"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./pages/api/rooms/roomId.js":
/*!***********************************!*\
  !*** ./pages/api/rooms/roomId.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/prisma */ \"(api)/./prisma/prisma.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n            req\n        });\n        const existingUser = await _prisma_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].room.findUnique({\n            where: {\n                userEmail: session.user.email\n            }\n        });\n        res.status(200).json(existingUser);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm9vbXMvcm9vbUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFRDtBQUc1QixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNQyxVQUFVLE1BQU1MLDJEQUFVQSxDQUFDO1lBQUNFO1FBQUc7UUFDckMsTUFBTUksZUFBZSxNQUFNUCxzRUFBc0IsQ0FBQztZQUM5Q1UsT0FBTztnQkFDTEMsV0FBV0wsUUFBUU0sSUFBSSxDQUFDQyxLQUFLO1lBQy9CO1FBQ0o7UUFHSVQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1I7SUFJM0IsQ0FBQztBQUdILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtdGVzdGluZy8uL3BhZ2VzL2FwaS9yb29tcy9yb29tSWQuanM/MDZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9wcmlzbWEvcHJpc21hXCI7XHJcblxyXG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pXHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWEucm9vbS5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgdXNlckVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZXhpc3RpbmdVc2VyKTtcclxuICAgICAgXHJcbiAgXHJcblxyXG4gIH1cclxuXHJcblxyXG59Il0sIm5hbWVzIjpbInByaXNtYSIsImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImV4aXN0aW5nVXNlciIsInJvb20iLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ1c2VyRW1haWwiLCJ1c2VyIiwiZW1haWwiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/rooms/roomId.js\n");

/***/ }),

/***/ "(api)/./prisma/prisma.js":
/*!**************************!*\
  !*** ./prisma/prisma.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUM3QyxJQUFJQztBQUNKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2xCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ2xDLENBQUM7SUFDREMsU0FBU0UsT0FBT0YsTUFBTTtBQUN4QixDQUFDO0FBQ0QsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtdGVzdGluZy8uL3ByaXNtYS9wcmlzbWEuanM/NzRmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxubGV0IHByaXNtYVxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG4gIH1cclxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./prisma/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/rooms/roomId.js"));
module.exports = __webpack_exports__;

})();