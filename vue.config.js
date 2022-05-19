const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  pages:{
    ppp:{
      entry:"src/ppp.js",
      template:"public/ppp.html",
      filename:"ppp.html"
    }
  }
})
