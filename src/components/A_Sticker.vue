<template>
  <label class="a-sticker" @click="clickEvent(e,_pokemon)"><img :src="_pokemon.src" alt=""></label>
</template>
<script>
export default {
  name: 'A_Sticker', 
  props: {
    pokemon: Object,
    src:String,
    click:Function
  },
  computed:{
    _pokemon:function(){    
      let _pokemon = Object.assign({}, this.pokemon);
      _pokemon.src = (/pokemonkorea/).test(_pokemon.src) ? _pokemon.src : "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/"+_pokemon.src;
      return _pokemon;
    }
  },
  mounted(){
    
  },
  updated(){
        
  },
  methods:{
    clickEvent:function(event,pokemon){
        if(this.click) this.click.call(null,pokemon);
        return false;
    }
  }
}
</script>
<style lang="scss">
.a-sticker{position:relative;display:block;width:80px;height:80px;
    &:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#f5f5f5;border-radius:50%;overflow:hidden;}
    img{position:absolute;width:100%;height:100%;}
}
</style>