<template>
  <header><img src="https://pokemonkorea.co.kr/img/main_logo.png"></header>
  <C_stickerDraw :pokemons="pokemons"></C_stickerDraw>
</template>

<script>
import C_stickerDraw from './components/C_stickerDraw.vue';
import axios from 'axios';
export default {
  name: 'ppp',
  components: {
    C_stickerDraw
  },
  data(){
    return {
      pokemons:[]
    };
  },
  mounted(){
    var vm = this;
    axios.get("/data/pokemonList.json").then((result)=>{
      vm.pokemons = result.data; // 전체 포켓몬 데이터
    });
  },
  updated(){

  },
  methods:{
  }
}
</script>
<style lang="scss">
*{margin:0;padding:0;box-sizing:border-box;}
header{text-align:center;}
.throwBall{position:fixed;bottom:10px;left:0;width:100%;}
.a-throwBall{display:block;width:100%;background:#fff;border:2px solid #000;border-radius:5px;}
.a-throwBall span{position:relative;display:inline-block;padding-left:40px;font-size:22px;height:38px;line-height:38px;}
.a-throwBall span:before{content:"";position:absolute;top:0;left:0;display:block;width:38px;height:38px;background:url('https://pokemonkorea.co.kr/img/icon/icon_ball_c.png') no-repeat;}
</style>
