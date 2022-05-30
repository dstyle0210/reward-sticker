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
      pkmStamps:function(){
        const vm = this;
        let _pkmStamps = [];
        let _pokemons = this.pokemons.map((pokemon)=>{return Object.assign({}, pokemon)});
        let _stamps = this.stamps.map((stamp)=>{return Object.assign({}, stamp)});
        _stamps.forEach(function(stamp){
            _pokemons.forEach(function(pokemon){
                if(pokemon.buid==stamp.buid){
                    _pkmStamps.push(pokemon);
                };
            });
        });
        const per = 28 - _pkmStamps.length;
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
.c-stickerList{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;
    .a-sticker{margin:0 auto;}
    @media (min-width: 375px) { &{grid-template-columns: repeat(4,1fr);} }
    @media (min-width: 667px) { &{grid-template-columns: repeat(6,1fr);} }
    @media (min-width: 768px) { &{grid-template-columns: repeat(7,1fr);} }
    @media (min-width: 1024px) { &{grid-template-columns: repeat(10,1fr);} }
}
</style>