"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var log4js = require('log4js');

var logger = log4js.getLogger();

module.exports = function (app) {
  app.use( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
      var status, text;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              status = 0;
              text = "";
              _context.prev = 2;
              _context.next = 5;
              return next();

            case 5:
              status = ctx.status;
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              console.error(_context.t0.response ? _context.t0.response.statusText : _context.t0);
              logger.debug(_context.t0.response ? _context.t0.response.statusText : _context.t0);
              status = 500;

            case 13:
              console.log(status);

              if (!(status >= 400)) {
                _context.next = 26;
                break;
              }

              _context.t1 = status;
              _context.next = _context.t1 === 400 ? 18 : _context.t1 === 404 ? 18 : _context.t1 === 500 ? 20 : 22;
              break;

            case 18:
              text = "找不到页面~~~";
              return _context.abrupt("break", 24);

            case 20:
              text = "内部服务器错误";
              return _context.abrupt("break", 24);

            case 22:
              text = "其他异常";
              return _context.abrupt("break", 24);

            case 24:
              logger.debug(status);
              ctx["throw"](status, text);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};