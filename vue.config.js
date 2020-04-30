module.exports = {
  outputDir: 'dist',
  productionSourceMap: true,
  parallel: true,
  pages: {
    index: {
      // page 的入口
      entry: 'example/src/main.js'
    }

  },
  configureWebpack: {
    output: {
      filename: '[name].js'
    }
  },
  devServer: {
    open: true,
    proxy: {
      // change xxx-api/login => /mock-api/v1/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_DEV_URL]: {
        target: process.env.VUE_APP_PROXY_TARGET || 'http://localhost',
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          ['^' + process.env.VUE_APP_DEV_URL]: ''
        }
      }
    }
  }

}
