"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var axios = require('axios');

var _require = require('../config'),
    host = _require.host,
    api = _require.api;

var Books = /*#__PURE__*/function () {
  function Books() {
    (0, _classCallCheck2["default"])(this, Books);
    this.url = host + api;
  } // 首页


  (0, _createClass2["default"])(Books, [{
    key: "getLists",
    value: function () {
      var _getLists = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
        var res, ids, datas;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get(this.url);

              case 2:
                res = _context.sent;
                ids = Object.keys(res.data[0]);
                datas = {
                  lists: res.data,
                  titles: ids
                }; // console.log(datas)

                _context.next = 7;
                return ctx.render('index', datas);

              case 7:
                ctx.body = _context.sent;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLists(_x, _x2) {
        return _getLists.apply(this, arguments);
      }

      return getLists;
    }() // 新建/编辑页

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx, next) {
        var id, res, _yield$axios$get, data;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = ctx.params && ctx.params.id;
                res = {};

                if (!id) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 5;
                return axios.get("".concat(this.url, "/").concat(id));

              case 5:
                _yield$axios$get = _context2.sent;
                data = _yield$axios$get.data;
                res.data = data;
                res.method = "put";

              case 9:
                _context2.next = 11;
                return ctx.render('create', res);

              case 11:
                ctx.body = _context2.sent;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x3, _x4) {
        return _create.apply(this, arguments);
      }

      return create;
    }() // 详情页

  }, {
    key: "booksDetail",
    value: function () {
      var _booksDetail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx, next) {
        var id, _yield$axios$get2, data, keys;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = ctx.params.id;
                _context3.next = 3;
                return axios.get("".concat(this.url, "/").concat(id));

              case 3:
                _yield$axios$get2 = _context3.sent;
                data = _yield$axios$get2.data;
                keys = Object.keys(data);
                _context3.next = 8;
                return ctx.render('detail', {
                  keys: keys,
                  data: data
                });

              case 8:
                ctx.body = _context3.sent;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function booksDetail(_x5, _x6) {
        return _booksDetail.apply(this, arguments);
      }

      return booksDetail;
    }() // async search(ctx, next) {
    //   console.log('----')
    //   let data = await axios({
    //     baseURL: 'http://music.migu.cn/v3/search?page=1&type=song&keyword=d&f=html&s=1587895015&v=3.4.4&c=001002A&i=e1166a107daaefe519fae6b8021741013e43d6bd',
    //     methods: 'get',
    //     headers: {
    //       Host: "music.migu.cn",
    //       Connection: "keep-live",
    //       Pragma: "no-cache",
    //       "Cache-Control": "no-cache",
    //       "Upgrade-Insecure-Requests": 1,
    //       "User-Agent": "Mozilla/5.0(Windows NT 10.0; Win64; x64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
    //       "Accept": "text/html, application/xhtml+xml, application/xml;q = 0.9, image/webp, image/ apng, */*;q=0.8,application/signed-exchange;v=b3",
    //       Referer: "http://music.migu.cn/v3/search?page=1&type=song&keyword=d&f=html&s=1587895012&v=3.4.4&c=001002A&i=a28f5ccb6788d41887f5484aea238992f34b3b51",
    //       "Accept-Encoding": "gzip, deflate",
    //       "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    //     }
    //   })
    // console.log(data)
    // ctx.response.body = data.data
    // }

  }]);
  return Books;
}();

module.exports = Books;