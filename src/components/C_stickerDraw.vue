<template>
<div class="c-stickerDraw">
    <div class="pane" v-for="pokemon in cards">
        <A_Sticker :pokemon="pokemon" type="draw"></A_Sticker>
    </div>
</div>
</template>
<script>
import A_Sticker from './A_Sticker.vue';
export default {
  name: 'C_stickerDraw',
  components:{
      A_Sticker
  },
  props: {
    pokemons: Object
  },
  computed:{
      _pokemons:function(){
          return this.pokemons.map((pokemon)=>{return Object.assign({}, pokemon)});
      },
      cards:function(){
          let cards = this._pokemons.sort(()=> Math.random() - 0.5);
          return cards.slice(0,9);
      }
  },
  data(){
      return {
          observer:new IntersectionObserver(function(entries,observer){
            entries.forEach(function(entry){
                if( entry.isIntersecting ){
                    entry.target.src = "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/"+entry.target.dataset.origin;
                }
            });
        })
      }
  },
  mounted(){
  },
  updated(){
      var vm = this;
        var imgs = document.querySelectorAll(".c-stickerDraw img");
        imgs.forEach(function(img){
            vm.observer.observe(img);
        });
  }
}
</script>
<style lang="scss">
.c-stickerDraw{width:100%;display:flex;flex-wrap: wrap;align-items: center;justify-content: space-evenly;}
.c-stickerDraw .pane{margin-top:40px;flex:0 0 33%;}
.c-stickerDraw .pane .a-sticker{margin:0 auto;width:100px;height:100px;} 
.c-stickerDraw .a-sticker i{top:20px;left:45px;
    &:before{width:15px;height:50px;left:12px;top:0;}
    &:after{width:35px;height:15px;left:-10px;top:35px;}
}
</style>