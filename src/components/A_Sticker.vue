<template>
<label class="a-sticker">
    <input type="checkbox" name="sticker0" /><i></i>
    <img :data-origin="src" alt="">
</label>
</template>
<script>
export default {
  name: 'A_Sticker',
  props: {
    src: String
  },
  mounted(){
        
  },
  updated(){
        
  }
}
</script>
<style>
.a-sticker{position:relative;display:block;width:60px;height:60px;}
.a-sticker:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#f5f5f5;border-radius:50%;overflow:hidden;}
.a-sticker input{display:none;}
.a-sticker input:checked ~ i{display:inline-block;}
.a-sticker img{position:absolute;width:100%;height:100%;}
.a-sticker i {display:none;position:absolute;top:8px;left:16px;z-index:3;width: 24px;height:36px;transform: rotate(45deg);opacity:0.8;}
.a-sticker i:before {content:"";position: absolute;width:12px;height:36px;background-color:#f5f5f5;left:12px;top:0;}
.a-sticker i:after {content:"";position: absolute;width:12px;height:12px;background-color:#f5f5f5;left:0;top:24px;}
</style>