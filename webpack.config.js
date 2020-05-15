const argv = require('yargs-parser')(process.argv)
const mergeConfig = require(`./config/webpack.${argv.mode}.js`)
const merge = require('webpack-merge')
const glob = require('glob')
const { join } = require('path')
const copyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const files = glob.sync('./src/client/views/*-entry.js')
const HtmlInjectPlugin = require('./plugins/htmlInjectPlugin')

let _entry = {}

let _plugins = []

for(let item of files) {
  if(/.+\/([a-zA-Z]+)-entry.js$/.test(item)) {
    const entryKey = RegExp.$1;
    _entry[entryKey] = item;
    _plugins.push(new HtmlWebpackPlugin({
      chunks: [`${entryKey}`, 'runtime'],
      inject: false,
      template: `./src/client/views/pages/${entryKey}.html`,
      filename: `../client/views/pages/${entryKey}.html`
    }))
  } else {
    console.log('项目配置失败，请传入正确参数😔')
    process.exit(-1)
  }
}


const webpackConfig = {
  entry: _entry,
  output: {
    path: join(__dirname, './dist/client'),
    filename:  "script/[name].bundle.js",
  },
  plugins: [
    new copyPlugin([{
      from: join(__dirname, 'src/client/static'),
      to: './static'
    }]),
    new HtmlInjectPlugin(),
    ..._plugins
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  optimization: {
    runtimeChunk: {
      name: "runtime"
    }
  }
}

module.exports = merge(webpackConfig, mergeConfig)