const { extend } = require( 'lodash');
let config = {
  host: "http://localhost:80",
  api: "/01/web/index.php/books"
}

const isPro = process.env.NODE_ENV === 'production' ? true : false; 

// 开发环境
if(!isPro) {
  config = extend(config, {
    port: "3001"
  })
}

if(isPro) {
  config = extend(config, {
    port: "3001"
  })
}
module.exports = config;