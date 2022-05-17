<template>
  <div class="grid">
    <div v-for="(key, value) in res" :key="value">
      <img :data-origin="key.src" />
    </div>
  </div>
</template>

<script>
import Image from './components/Image.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Image
  },
  data(){
    return {
      res:[],
      observer:new IntersectionObserver(function(entries,observer){
        entries.forEach(function(entry){
          if( entry.isIntersecting ){
            entry.target.src = "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/"+entry.target.dataset.origin;
          }
        });
      })
    };
  },
  mounted(){
    axios.get("/data/pokemonList.json").then((pokemons)=>{
      this.res = pokemons.data;
    });  
  },
  updated(){
    var vm = this;
    var imgs = document.querySelectorAll(".grid img");
    imgs.forEach(function(img){
      vm.observer.observe(img);
    });
    // vm.observer.observe(imgs);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app{
  .grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    img{width:60px;height:60px;}
  }
}
</style>
