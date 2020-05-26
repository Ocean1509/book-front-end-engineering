console.log('webpack测试环境')

const webpackDevConfig = {
  mode: 'development',
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 8088,
    compress: true,
  }
}