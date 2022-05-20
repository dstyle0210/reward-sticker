module.exports = {
  transpileDependencies: true,
  lintOnSave : false,
  pages:{
      index:{
          entry: 'src/pages/index/main.js',
          template: 'public/index.html',
          filename: 'index.html'
      },
      draw:{
          entry: 'src/pages/draw/draw.js',
          template: 'public/draw.html',
          filename: 'draw.html'
      }
  },
};

/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false
})
*/
