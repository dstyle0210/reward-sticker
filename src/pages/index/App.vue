<template>
  <Layout_Header historyYn="N"></Layout_Header>
  <main class="p-index">
      <section class="s-stickerBook p-index__stickerBook">
          <A_Sticker v-for="pokemon in stickers" :pokemon="pokemon" :click="zoom"></A_Sticker>
      </section>
      <div class="p-index__throwBall">
          <a href="typeList.html" class="a-throwBall"><span>던지기</span></a>
      </div>
      <div class="l-pokemonZoom" v-show="isZoom" @click="close(e)">
          <span><img :src="zoomSrc" alt="" /></span>
      </div>
      <div class="l-pokemonThrow" v-show="isZoom">
          <a href="#" @click="delSticker()" class="a-close"></a>
        </div>
  </main>
</template>
<script>
import Layout_Header from '../../components/Layout_Header.vue';
import pokemons from '../../data/pokemonList.json';
import M_Sticker from '../../components/M_Sticker.vue';
import A_Sticker from "../../components/A_Sticker.vue";

export default {
  name: 'App',
  components: {
    Layout_Header,
    M_Sticker,
    A_Sticker
  },
  data(){
    return {
      stickers:[],
      stamps:[],
      isZoom:false,
      zoomSrc:"",
      buid:""
    };
  },
  mounted(){
    firebase.database().ref(db).on("value", (snapshot) => {
      const mabongStamps = [];
      let _temp = snapshot.val() || []; // 마봉 칭찬스티커 buid 목록
      for(let key in _temp){
        _temp[key].key = key;
        mabongStamps.push(_temp[key]);
      };
      this.stamps = mabongStamps;
      // .filter(n=>n)
      this.stickers = mabongStamps.map((stamp)=>{
        return pokemons.find((pokemon)=>{
          return pokemon.buid == stamp.buid;
        });
      });
    });
  },
  updated(){

  },
  methods:{
    zoom:function(pokemon){
      this.isZoom = true;
      this.zoomSrc = pokemon.src;
      this.buid = pokemon.buid;
    },
    close:function(){
      this.isZoom = false;
    },
    delSticker:function(){
      const buid = this.buid;
      let targetStamp = this.stamps.find((stamp)=>{
          return stamp.buid == buid;
      });
      firebase.database().ref(db+"/"+targetStamp.key).remove();
      this.isZoom = false;
      // console.log(this.buid);
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

.s-stickerBook{display:grid;align-items:start;
  .a-sticker{margin:20px auto 0;}
    @media (min-width: 375px) { &{grid-template-columns: repeat(3,1fr);} }
    @media (min-width: 667px) { &{grid-template-columns: repeat(5,1fr);} }
    @media (min-width: 768px) { &{grid-template-columns: repeat(6,1fr);} }
    @media (min-width: 1024px) { &{grid-template-columns: repeat(8,1fr);} }
}


.l-pokemonZoom{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2;background:rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  span{display:block;margin:0 auto;background:#f5f5f5;width:80vmin;border-radius:50%;
    img{display:block;width:100%;margin:0 auto;}
  }
}

.l-pokemonThrow{position:fixed;left:0;right:0;bottom:10%;z-index:3;
  .a-throwBall,.a-close{margin:0 auto;}
}

/*! 공 던지기 버튼(뽑기) */
.a-throwBall {background: transparent;border: 0;width: 60px;height: 60px;background: #fff;border-radius: 50%;border: 1px solid #ccc;display: flex;flex-direction: column;justify-content: center;align-items: center;
    &:before {content: "";display: block;width: 38px;height: 38px;background: url("https://pokemonkorea.co.kr/img/icon/icon_ball_c.png") no-repeat;}
}
.a-close{position:relative;background: transparent;border: 0;width: 60px;height: 60px;background: #333;border-radius: 50%;border: 1px solid #ccc;display: flex;flex-direction: column;justify-content: center;align-items: center;
  &:before {content: "\00d7";position:absolute;top:-6px;left:9px;display: block;width: 38px;height: 38px;color:#fff;font-size:60px;line-height:60px;}
}

</style>
