<template>
    <section class="layout-header">
        <header>
            <img src="https://pokemonkorea.co.kr/img/main_logo.png">
            <a href="index.html" class="historyBack" onclick="history.back();return false;" v-show="ishistory"><i class="fa-solid fa-circle-chevron-left"></i></a>
        </header>
    </section>
</template>
<script>
export default {
    props:{
        historyYn:String
    },
    computed:{
        ishistory:function(){
            return !(this.historyYn=="N");
        }
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
/*! 레이아웃 */
.layout-header{height:70px;
    header{position:fixed;top:0;left:0;width:100%;max-height:70px;text-align:center;border-bottom:1px solid #ccc;background:#fff;z-index:2;transition:max-height 400ms;
        >img{max-height:70px;transition:max-height 400ms;}
    }
    header.-minify{max-height:30px;
        >img{max-height:30px;}
    }
    .historyBack{position:absolute;top:5px;left:10px;width:50px;height:50px;font-size:40px;}
    .historyBack .fa-circle-chevron-left{color:#da343c;}
}
</style>