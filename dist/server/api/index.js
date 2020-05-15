"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var axios = require('axios');

var api = module.exports;
var url = "http://localhost:80/01/web/index.php/books";
/**
 * @fileoverview 图书接口
 * @author wyp
 */
// class BookAPI {
//   /**
//    * BookAPI类，用于获取图书相关接口
//    * @class
//    */
//   constructor() {
//     this.url = url
//   }
//   /**
//    * 
//    * @param {*} ctx 
//    * @param {*} next 
//    */
//   // async createPost(ctx, next) =>{
//   // }
// } 
// 新建

api.createPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var body, _yield$axios$post, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = ctx.request.body;
            _context.next = 3;
            return axios.post(url, body);

          case 3:
            _yield$axios$post = _context.sent;
            data = _yield$axios$post.data;
            ctx.response.body = {
              success: true,
              data: data
            };

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // 更新


api.updateBook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, next) {
    var body, id, _yield$axios$put, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            body = ctx.request.body;
            id = body.id;
            _context2.next = 4;
            return axios.put("".concat(url, "/").concat(id), body);

          case 4:
            _yield$axios$put = _context2.sent;
            data = _yield$axios$put.data;
            // console.log(data)
            ctx.response.body = {
              success: true,
              data: data
            };

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // 删除


api.deleteBook = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx, next) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = ctx.request.body.id;
            _context3.next = 3;
            return axios["delete"]("".concat(url, "/").concat(id));

          case 3:
            ctx.response.body = {
              success: true
            };

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();