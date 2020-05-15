const log4js = require('log4js');
const logger = log4js.getLogger();
module.exports = (app) => {
  app.use(async (ctx, next) => {
    let status = 0;
    let text = "";
    try {
      await next();
      status = ctx.status;
    } catch (err) {
      console.error(err.response ? err.response.statusText : err);
      logger.debug(err.response ? err.response.statusText : err)
      status = 500;
    }
    console.log(status)
    if (status >= 400) {
      switch (status) {
        case 400:
        case 404:
          text = "找不到页面~~~";
          break;
        case 500:
          text = "内部服务器错误";
          break;
        default:
          text = "其他异常";
          break;
      }
      logger.debug(status)
      ctx.throw(status, text)
    }
  });
}