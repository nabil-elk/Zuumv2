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
exports.id = "pages/api/mana";
exports.ids = ["pages/api/mana"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "uuid4":
/*!************************!*\
  !*** external "uuid4" ***!
  \************************/
/***/ ((module) => {

module.exports = require("uuid4");

/***/ }),

/***/ "(api)/./pages/api/mana/index.js":
/*!*********************************!*\
  !*** ./pages/api/mana/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst uuid4 = __webpack_require__(/*! uuid4 */ \"uuid4\");\nvar app_access_key = process.env.APP_ACCESS_KEY;\nvar app_secret = process.env.APP_SECRET;\nfunction handler(req, res) {\n    jwt.sign({\n        access_key: app_access_key,\n        type: \"management\",\n        version: 2,\n        iat: Math.floor(Date.now() / 1000),\n        nbf: Math.floor(Date.now() / 1000)\n    }, app_secret, {\n        algorithm: \"HS256\",\n        expiresIn: \"24h\",\n        jwtid: uuid4()\n    }, function(err, token) {\n        res.status(200).json({\n            management_token: token,\n            expires: Date()\n        });\n    });\n}\nconst config = {\n    api: {\n        externalResolver: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWFuYS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLE1BQU1DLG1CQUFPQSxDQUFDLGtDQUFjO0FBQ2xDLE1BQU1DLFFBQVFELG1CQUFPQSxDQUFDO0FBSXRCLElBQUlFLGlCQUFpQkMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQy9DLElBQUlDLGFBQWFILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVTtBQUV4QixTQUFTQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUd0Q1gsSUFBSVksSUFBSSxDQUNKO1FBQ0lDLFlBQVlWO1FBQ1pXLE1BQU07UUFDTkMsU0FBUztRQUNUQyxLQUFLQyxLQUFLQyxLQUFLLENBQUNDLEtBQUtDLEdBQUcsS0FBSztRQUM3QkMsS0FBS0osS0FBS0MsS0FBSyxDQUFDQyxLQUFLQyxHQUFHLEtBQUs7SUFDakMsR0FDQWIsWUFDQTtRQUNJZSxXQUFXO1FBQ1hDLFdBQVc7UUFDWEMsT0FBT3RCO0lBQ1gsR0FDQSxTQUFVdUIsR0FBRyxFQUFFQyxLQUFLLEVBQUU7UUFDbEJmLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ2pCQyxrQkFBa0JIO1lBQ2xCSSxTQUFTWDtRQUViO0lBRUo7QUFHTixDQUFDO0FBRU0sTUFBTVksU0FBUztJQUNwQkMsS0FBSztRQUNIQyxrQkFBa0IsSUFBSTtJQUN4QjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbWEtdGVzdGluZy8uL3BhZ2VzL2FwaS9tYW5hL2luZGV4LmpzPzMyMGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgand0ID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcclxuY29uc3QgdXVpZDQgPSByZXF1aXJlKCd1dWlkNCcpO1xyXG5cclxuXHJcblxyXG52YXIgYXBwX2FjY2Vzc19rZXkgPSBwcm9jZXNzLmVudi5BUFBfQUNDRVNTX0tFWTtcclxudmFyIGFwcF9zZWNyZXQgPSBwcm9jZXNzLmVudi5BUFBfU0VDUkVUO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgXHJcblxyXG4gICAgand0LnNpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhY2Nlc3Nfa2V5OiBhcHBfYWNjZXNzX2tleSxcclxuICAgICAgICAgICAgdHlwZTogJ21hbmFnZW1lbnQnLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiAyLFxyXG4gICAgICAgICAgICBpYXQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxyXG4gICAgICAgICAgICBuYmY6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcHBfc2VjcmV0LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxnb3JpdGhtOiAnSFMyNTYnLFxyXG4gICAgICAgICAgICBleHBpcmVzSW46ICcyNGgnLFxyXG4gICAgICAgICAgICBqd3RpZDogdXVpZDQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVyciwgdG9rZW4pIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlbWVudF90b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBleHBpcmVzOiBEYXRlKClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcblxyXG4gICAgXHJcbiJdLCJuYW1lcyI6WyJqd3QiLCJyZXF1aXJlIiwidXVpZDQiLCJhcHBfYWNjZXNzX2tleSIsInByb2Nlc3MiLCJlbnYiLCJBUFBfQUNDRVNTX0tFWSIsImFwcF9zZWNyZXQiLCJBUFBfU0VDUkVUIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNpZ24iLCJhY2Nlc3Nfa2V5IiwidHlwZSIsInZlcnNpb24iLCJpYXQiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwibmJmIiwiYWxnb3JpdGhtIiwiZXhwaXJlc0luIiwiand0aWQiLCJlcnIiLCJ0b2tlbiIsInN0YXR1cyIsImpzb24iLCJtYW5hZ2VtZW50X3Rva2VuIiwiZXhwaXJlcyIsImNvbmZpZyIsImFwaSIsImV4dGVybmFsUmVzb2x2ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/mana/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/mana/index.js"));
module.exports = __webpack_exports__;

})();