const HtmlWebpackPlugin = require('html-webpack-plugin')

class HtmlInjectPlugin {
  constructor() {
    this.jsAssets = {}
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlWebpackPlugin', (compilation) => {
      console.log('The compiler is starting a new compilation...')

      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'HtmlInjectPlugin',
        (data, cb) => {
          let outputName = data.outputName
          if ((/.+\/([a-zA-Z]+)\.html$/).test(outputName)) {
            const key = RegExp.$1;
            let script = ""
            this.jsAssets[key].forEach(url => {
              script += `<script src="${url}"></script>`;
            })
            data.html = data.html.replace('<!-- injectjs -->', script)
          }
          cb(null, data)
        }
      )

      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync('HtmlInjectPlugin', (data, cb) => {
        let outputName = data.outputName
        if((/.+\/([a-zA-Z]+)\.html$/).test(outputName)) {
          const key = RegExp.$1;
          this.jsAssets[key] = data.assets && data.assets.js
        }
        cb(null, data)
      })
    })
  }
}

module.exports = HtmlInjectPlugin;