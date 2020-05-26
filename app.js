const Koa = require('koa')
const app = new Koa()
const koaRouter = require('koa-router')
const router = new koaRouter()
const render = require('koa-swig');
const co = require('co');
const controller = require('./controllers')
const api = require('./api')
const { port } = require('./config')
const koaBody = require('koa-body')

app.use(koaBody({
  strict: false, //设为false
}));


app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // 响应用户
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = error.message;
    ctx.app.emit('error', error); // 触发应用层级错误事件
  }
});


app.context.render = co.wrap(render({
  root: __dirname + '/views',
  autoescape: true,
  ext: 'html'
}));


// 错误处理
const errorHandler = require('./middleware/errorHandler');
errorHandler(app);

// 路由
// 获取首页
router.get('/list', controller.get)
// 新建页面
router.get('/create', controller.create)
// 编辑页面
router.get('/create/:id', controller.create)
// 详情页
router.get('/detail/:id', controller.booksDetail)


// 接口
router.put('/book', api.updateBook)
router.post('/book', api.createPost)
router.delete('/book', api.deleteBook)

app.use(router.routes()).use(router.allowedMethods());

// 错误处理
// app.on('error', (err, ctx) => {
//   console.error(err)
//   ctx.throw(500, "内部服务器出错")
// });




process.on('uncaughtException', err => {
  //do something

  console.log('uncaughtException', err)
});

module.exports = app.listen(port, () => {
  console.log('服务启动, 端口：', port)
})
