<template>
    <section class="layout-header">
        <header>
            <img src="https://pokemonkorea.co.kr/img/main_logo.png">
            <a href="index.html" class="historyBack" onclick="history.back();return false;" v-show="ishistory"><i class="fa-solid fa-circle-chevron-left"></i></a>
        </header>
        <div class="a-stickerCount" v-show="isCount"><strong>{{count}}</strong></div>
    </section>
</template>
<script>
export default {
    props:{
        historyYn:String
    },
    data(){
      return {count:0};
    },
    computed:{
        ishistory:function(){
            return !(this.historyYn=="N");
        },
        isCount:function(){
            return (this.historyYn=="N");
        }
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
      this.count = this.stamps.length;
      console.log(this.count);
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
/*! 레이아웃 */
.layout-header{height:70px;position:relative;
    header{position:fixed;top:0;left:0;width:100%;max-height:70px;text-align:center;border-bottom:2px solid #333;background:#fff;z-index:2;transition:max-height 400ms;
        >img{max-height:70px;transition:max-height 400ms;}
    }
    header.-minify{max-height:30px;
        >img{max-height:30px;}
    }
    .historyBack{position:absolute;top:5px;left:10px;width:50px;height:50px;font-size:40px;}
    .historyBack .fa-circle-chevron-left{color:#da343c;}
}

.a-stickerCount{position:fixed;right:10px;top:55px;z-index:3;padding:5px 15px;background:#333;color:#fff;border-radius:10px;font-size:15px;}
</style>