<template>
<label class="a-sticker" v-if="src">
    <input type="checkbox" :name="inputname" /><i></i>
    <img :data-origin="src" alt="">
</label>
<label class="a-sticker" v-else></label>
</template>
<script>
export default {
  name: 'A_Sticker',
  props: {
    pokemon: Object,
    type:String
  },
  computed:{
    src:function(){
      return (this.pokemon) ? this.pokemon.src : "";
    },
    inputname:function(){
      return (this.pokemon) ? "inputname"+this.pokemon.buid : "";
    }
  },
  mounted(){
    
  },
  updated(){
        
  }
}
</script>
<style lang="scss">
.a-sticker{position:relative;display:block;width:60px;height:60px;
    &:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#f5f5f5;border-radius:50%;overflow:hidden;}
    input{display:none;
        &:checked ~ i{display:inline-block;}
    }
    img{position:absolute;width:100%;height:100%;}
    i{display:none;position:absolute;top:8px;left:16px;z-index:3;width: 24px;height:36px;transform: rotate(45deg);opacity:0.8;
        &:before {content:"";position: absolute;width:12px;height:36px;background-color:#f5f5f5;left:12px;top:0;}
        &:after {content:"";position: absolute;width:12px;height:12px;background-color:#f5f5f5;left:0;top:24px;}
    }
}
</style>