module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/variables.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://eduboss.lagou.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        }
      },
      '/front': {
        target: 'http://edufront.lagou.com',
        changeOrigin: true,
      },
      '/boss': {
        target: 'http://eduboss.lagou.com',
        changeOrigin: true
      }
    }
  }
}
