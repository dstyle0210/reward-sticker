module.exports = {
  transpileDependencies: true,
  lintOnSave : false,
  pages:{
      index:'src/pages/index/main.js',
      typeList:'src/pages/typeList/main.js',
      pokemonList:'src/pages/pokemonList/main.js'
  },
};

/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false
})
*/
