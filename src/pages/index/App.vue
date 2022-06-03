<template>
  <Layout_Header historyYn="N"></Layout_Header>
  <main class="p-index">
      <section class="s-stickerBook p-index__stickerBook">
          <C_StickerList :stamps="stamps" :pokemons="pokemons"></C_StickerList>
      </section>
      <div class="p-index__throwBall">
          <a href="typeList.html" class="a-throwBall"><span>던지기</span></a>
      </div>
  </main>
</template>
<script>
import Layout_Header from '../../components/Layout_Header.vue';
import C_StickerList from '../../components/C_StickerList.vue';
import pokemons from '../../data/pokemonList.json';
export default {
  name: 'App',
  components: {
    Layout_Header,
    C_StickerList
  },
  data(){
    return {
      pokemons:pokemons,
      stamps:[]
    };
  },
  mounted(){
    firebase.database().ref(db).on("value", (snapshot) => {
      mabongStickers = snapshot.val() || [];
      this.stamps = mabongStickers;
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
.p-index{padding-bottom:70px;
    .p-index__stickerBook{padding:20px 0 0;}
    .p-index__throwBall{position:fixed;right:20px;bottom:20px;
        span{display:none;}
    }
}

/*! 공 던지기 버튼(뽑기) */
.a-throwBall {background: transparent;border: 0;width: 60px;height: 60px;background: #fff;border-radius: 50%;border: 1px solid #ccc;display: flex;flex-direction: column;justify-content: center;align-items: center;
    &:before {content: "";display: block;width: 38px;height: 38px;background: url("https://pokemonkorea.co.kr/img/icon/icon_ball_c.png") no-repeat;}
}
</style>
