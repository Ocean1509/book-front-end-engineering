(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create"],{

/***/ "./src/client/static/create.js":
/*!*************************************!*\
  !*** ./src/client/static/create.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$('#submit').click(function () {\n  var data = {\n    name: $('#name').val(),\n    author: $('#author').val(),\n    isbn: $('#isbn').val(),\n    price: $('#price').val(),\n    memo: $('#memo').val(),\n    create_date: $('#create_date').val()\n  };\n\n  if ($('#submit').attr('data-id') === 'put') {\n    data.id = $('#name').attr('data-id');\n    $.ajax({\n      url: 'http://localhost:3001/book',\n      data: data,\n      method: 'put',\n      dataType: \"json\",\n      success: function success(res) {\n        if (res.success) {\n          location.href = \"/detail/\".concat(res.data.id);\n        }\n      },\n      error: function error(e) {\n        alert(e);\n      }\n    });\n  } else {\n    $.ajax({\n      url: 'http://localhost:3001/book',\n      data: data,\n      method: 'post',\n      dataType: \"json\",\n      success: function success(res) {\n        if (res.success) {\n          location.href = \"/detail/\".concat(res.data.id);\n        }\n      },\n      error: function error(e) {\n        alert(e);\n      }\n    });\n  }\n\n  return false;\n});\n\n//# sourceURL=webpack:///./src/client/static/create.js?");

/***/ }),

/***/ "./src/client/views/create-entry.js":
/*!******************************************!*\
  !*** ./src/client/views/create-entry.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/create */ \"./src/client/static/create.js\");\n/* harmony import */ var _static_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_create__WEBPACK_IMPORTED_MODULE_1__);\n\nconsole.log(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);\n\nconsole.log(\"111\");\n\n//# sourceURL=webpack:///./src/client/views/create-entry.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

},[["./src/client/views/create-entry.js","runtime"]]]);