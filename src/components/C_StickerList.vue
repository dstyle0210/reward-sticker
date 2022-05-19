<template>
<article class="c-stickerList">
    <A_Sticker v-for="pokemon in pkmStamps" :pokemon="pokemon"></A_Sticker>
</article>
</template>
<script>
import A_Sticker from './A_Sticker.vue';
export default {
  name: 'C_StickerList',
  components:{
      A_Sticker
  },
  props: {
    stamps: Object,
    pokemons: Object
  },
  computed:{
      _pokemons:function(){
          return this.pokemons.map((pokemon)=>{return Object.assign({}, pokemon)});
      },
      _stamps:function(){
          return this.stamps.map((stamp)=>{return Object.assign({}, stamp)});
      },
      pkmStamps:function(){
        const vm = this;
        let _pkmStamps = [];
        vm._pokemons.forEach(function(pokemon){
            vm._stamps.forEach(function(stamp){
                if(pokemon.buid==stamp.buid){
                    _pkmStamps.push(pokemon);
                };
            });
        });
        const per = 35 - _pkmStamps.length;
        if(per){
            for(var i=0;i<per;i++){
                _pkmStamps.push({src:""});
            };
        };
        return _pkmStamps;
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
    var imgs = document.querySelectorAll(".c-stickerList img");
    imgs.forEach(function(img){
        vm.observer.observe(img);
    });
  }
}
</script>
<style lang="scss">
.c-stickerList{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;gap:10px;
    .a-sticker{margin:0 auto;}
}
</style>