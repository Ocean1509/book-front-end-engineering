"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _co = _interopRequireDefault(require("co"));

var _api = _interopRequireDefault(require("./api"));

var _config = require("./config");

var _path = require("path");

var _controllers = _interopRequireDefault(require("./controllers"));

var _koaBody = _interopRequireDefault(require("koa-body"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = new _koa["default"]();
var router = new _koaRouter["default"]();
// 静态资源
app.use((0, _koaStatic["default"])('../client')); // 日志

var log4js = require('./middleware/logs');

var logger = log4js.getLogger(); //根据需要获取logger

var bookController = new _controllers["default"]();
console.log(bookController.__proto__.create);
app.use((0, _koaBody["default"])({
  strict: false //设为false

}));
app.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logger.info('请求url', ctx.url);
            _context.next = 3;
            return next();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.use( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return next();

          case 3:
            _context2.next = 10;
            break;

          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](0);
            // 响应用户
            ctx.status = _context2.t0.statusCode || _context2.t0.status || 500;
            ctx.body = _context2.t0.message;
            ctx.app.emit('error', _context2.t0); // 触发应用层级错误事件

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 5]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.context.render = _co["default"].wrap((0, _koaSwig["default"])({
  root: (0, _path.join)(__dirname, '../client/views/pages'),
  autoescape: true,
  ext: 'html'
})); // 错误处理

(0, _errorHandler["default"])(app); // 路由
// 获取首页

router.get('/list', bookController.getLists.bind(bookController)); // 新建页面

router.get('/create', bookController.create.bind(bookController)); // 编辑页面

router.get('/create/:id', bookController.create.bind(bookController)); // 详情页

router.get('/detail/:id', bookController.booksDetail.bind(bookController)); // 接口

router.put('/book', _api["default"].updateBook);
router.post('/book', _api["default"].createPost);
router["delete"]('/book', _api["default"].deleteBook); // router.get('/search', bookController.search)

app.use(router.routes()).use(router.allowedMethods()); // 错误处理
// app.on('error', (err, ctx) => {
//   console.error(err)
//   ctx.throw(500, "内部服务器出错")
// });

process.on('uncaughtException', function (err) {
  //do something
  console.log('uncaughtException', err);
});
module.exports = app.listen(_config.port, function () {
  console.log('服务启动,端口为', _config.port);
});