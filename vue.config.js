module.exports = {
  devServer: {
    disableHostCheck: false,
    host: "127.0.0.1",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null
  },

  publicPath: './',

  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }

};





