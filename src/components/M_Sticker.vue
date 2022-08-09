<template>
<dl class="m-sticker">
    <dt class="m-sticker__name">{{name}}</dt>
    <dd class="m-sticker__trend">{{trend}}</dd>
    <dd class="m-sticker__pic">
        <A_Sticker :pokemon="_pokemon" :click="zoom"></A_Sticker>
    </dd>
</dl>
</template>
<script>
import A_Sticker from "./A_Sticker.vue";
export default {
  name: 'M_Sticker',
  components: { A_Sticker },
  props:{
    pokemon:Object,
    click:Function
  },
  data(){
    let _pokemon = Object.assign({}, this.pokemon);
    _pokemon.src = "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/"+_pokemon.src;
    this._pokemon = _pokemon;
    return _pokemon; // name , trend 포함
  },
  created(){

  },
  mounted(){
    // console.log(this.name);
    // console.log(this.trend);
  },
  updated(){

  },
  methods:{ 
    zoom:function(pokemon){
        if(this.click) this.click.call(null,pokemon);
        return false;
    }
  }
}
</script>
<style lang="scss">
.m-sticker{display:flex;flex-direction: column-reverse;
    &__name{padding-top:5px;text-align:center;font-size:16px;}
    &__trend{font-size:12px;color:#666;text-align:center;}
    &__pic{}
}
.a-sticker{position:relative;display:block;width:80px;height:80px;margin:0 auto;
    &:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#f5f5f5;border-radius:50%;overflow:hidden;}
    img{position:absolute;width:100%;height:100%;}
}
</style>