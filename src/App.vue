<template>
  <header><img src="https://pokemonkorea.co.kr/img/main_logo.png"></header>
  <C_StickerList :lists={haves}></C_StickerList>
</template>

<script>
import Image from './components/Image.vue';
import C_StickerList from './components/C_StickerList.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Image,
    C_StickerList
  },
  data(){
    return {
      haves:[]
    };
  },
  mounted(){
    axios.get("/data/_dummy.json").then((pokemons)=>{
      this.haves = pokemons.data;
    });
  },
  updated(){
    
  }
}
</script>

<style lang="scss">
*{margin:0;padding:0;box-sizing:border-box;}
#app{
  .grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    img{width:60px;height:60px;}
  }
}
</style>
