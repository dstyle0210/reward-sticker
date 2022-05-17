<template>
    <div class="image"><img :src="imgsrc" v-show="imgsrc" alt=""></div>
</template>
<script>
export default {
  name: 'Image',
  props: {
    name:String,
    src:String
  },
  computed:{
      imgsrc:function(){
          return (!this.src) ? "" : this.src;
      }
  },
  created:function(){
      console.log();
  }
}
</script>
<style scoped lang="scss">
.image{width:100px;height:100px;border-radius:50%;border:1px solid #ccc;background:url('https://pokemonkorea.co.kr/img/icon/icon_ball_c.png') no-repeat center center;
    > img{width:100%;height:100%;}
}
</style>