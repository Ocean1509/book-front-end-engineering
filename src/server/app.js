import Koa from 'koa'
const app = new Koa()
import koaRouter from 'koa-router';
const router = new koaRouter()
import render from 'koa-swig'
import co from 'co';
import api from './api'
import { port } from './config'
import { join } from 'path'
import Books from './controllers'
import koaBody from 'koa-body'
import KoaStatic from 'koa-static'
// 静态资源
app.use(KoaStatic('../client'));
// 日志
const log4js = require('./middleware/logs')
const logger = log4js.getLogger() //根据需要获取logger

const bookController = new Books()
console.log(bookController.__proto__.create)
app.use(koaBody({
  strict: false, //设为false
}));

app.use(async (ctx, next) => {
  logger.info('请求url', ctx.url)
  await next()
})
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
  root: join(__dirname, '../client/views/pages'),
  autoescape: true,
  ext: 'html'
}));


// 错误处理
import errorHandler from './middleware/errorHandler';
errorHandler(app);

// 路由
// 获取首页
router.get('/list', bookController.getLists.bind(bookController))
// 新建页面
router.get('/create', bookController.create.bind(bookController))
// 编辑页面
router.get('/create/:id', bookController.create.bind(bookController))
// 详情页
router.get('/detail/:id', bookController.booksDetail.bind(bookController))


// 接口
router.put('/book', api.updateBook)
router.post('/book', api.createPost)
router.delete('/book', api.deleteBook)
// router.get('/search', bookController.search)
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
  console.log('服务启动,端口为', port)
})
