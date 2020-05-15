(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail"],{

/***/ "./src/client/static/detail.js":
/*!*************************************!*\
  !*** ./src/client/static/detail.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$('#delete').click(function () {\n  var id = $('#delete').attr('data-id');\n  console.log(id);\n  $.ajax({\n    url: '/book',\n    method: 'delete',\n    data: {\n      id: id\n    },\n    dataType: \"json\",\n    success: function success(res) {\n      if (res.success) {\n        location.href = \"/list\";\n      }\n    },\n    error: function error(e) {\n      console.log(e);\n    }\n  });\n});\n$('#edit').click(function () {\n  var id = $('#delete').attr('data-id');\n  location.href = \"/create/\".concat(id);\n});\n\n//# sourceURL=webpack:///./src/client/static/detail.js?");

/***/ }),

/***/ "./src/client/views/detail-entry.js":
/*!******************************************!*\
  !*** ./src/client/views/detail-entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/detail */ \"./src/client/static/detail.js\");\n/* harmony import */ var _static_detail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_detail__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/client/views/detail-entry.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

},[["./src/client/views/detail-entry.js","runtime"]]]);