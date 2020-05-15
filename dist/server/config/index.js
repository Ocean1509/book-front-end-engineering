'use strict';

const { extend } = require( 'lodash');
let config = {
  host: "http://localhost:80",
  api: "/01/web/index.php/books"
};

{
  config = extend(config, {
    port: "3001"
  });
}
module.exports = config;
