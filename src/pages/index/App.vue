<template>
  <header><img src="https://pokemonkorea.co.kr/img/main_logo.png"></header>
  <C_StickerList :stamps="stamps" :pokemons="pokemons"></C_StickerList>
  <div class="throwBall"><button class="a-throwBall" @click="move"><span>던지기</span></button></div>
</template>

<script>
import C_StickerList from '../../components/C_StickerList.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Image,
    C_StickerList
  },
  data(){
    return {
      pokemons:[],
      stamps:[]
    };
  },
  mounted(){
    axios.all([axios.get("/data/pokemonList.json"),axios.get("/data/_dummy.json")]).then((result)=>{
      this.pokemons = result[0].data; // 전체 포켓몬 데이터
      this.stamps = result[1].data; // 가지고 있는 스탬프수
    });
  },
  updated(){

  },
  methods:{
    move:function(e){
      e.preventDefault();
      location.href="/draw.html";
    }
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
