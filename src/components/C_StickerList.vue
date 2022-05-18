<template>
<article class="c-stickerList">
    <A_Sticker v-for="poke in lists.res" :src="poke.src"></A_Sticker>
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
    lists: Object
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
        console.log(this.lists.res);
        var vm = this;
        var imgs = document.querySelectorAll(".c-stickerList img");
        imgs.forEach(function(img){
            vm.observer.observe(img);
        });
  }
}
/*
<div v-for="(key, value) in res" :key="value">
      <img :data-origin="key.src" />
    </div>
*/
</script>
<style lang="scss">
.c-stickerList{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;gap:10px;
    .a-sticker{margin:0 auto;}
}
</style>