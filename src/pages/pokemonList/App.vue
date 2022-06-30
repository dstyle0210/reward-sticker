<template>
  <Layout_Header></Layout_Header>
  <main class="p-pokemonList">
        <section class="c-pokemonList">
    
            <dl class="m-sticker" v-for="pokemon in lists" :no="pokemon.no">
                <dt>{{pokemon.name}}<p>{{pokemon.trend}}</p></dt>
                <dd><label class="a-sticker" @click="zoom(e,pokemon)"><img :src="pokemon.pic" alt=""></label></dd>
            </dl>

        </section>
        <div class="l-pokemonZoom" v-show="isZoom" @click="close(e)">
          <span><img :src="zoomSrc" alt="" /></span>
        </div>
        <div class="l-pokemonThrow" v-show="isZoom">
          <a href="#" @click="addSticker()" class="a-throwBall"></a>
        </div>
    </main>
</template>
<script>
import Layout_Header from '../../components/Layout_Header.vue';
import pokemonType from '../../data/pokemonType.json';
import pokemonsOrigin from '../../data/pokemonList.json';

var _pokemons = [[],[],[],[],[]];
pokemonsOrigin.forEach((mon)=>{
  if( (/히스이/).test(mon.trend) ){
    _pokemons[1].push(mon);
  }else if( (/알로라/).test(mon.trend) ){
    _pokemons[2].push(mon);
  }else if( (/가라르/).test(mon.trend) ){
    _pokemons[3].push(mon);
  }else if( (/거다이맥스/).test(mon.trend) ){
    _pokemons[4].push(mon);
  }else{
    _pokemons[0].push(mon);
  };
});

var pokemons = [..._pokemons[0],..._pokemons[1],..._pokemons[2],..._pokemons[3],..._pokemons[4]];
pokemons.sort(function(a,b){
  return ((a.no)*1) - ((b.no)*1);
});
export default {
  name: 'App',
  components: {
    Layout_Header
  },
  data(){
    return {
      lists:[],
      isZoom:false,
      zoomSrc:"",
      buid:""
    }
  },
  created(){ 
    let idx = (new URLSearchParams(location.search)).get('idx');
    let type = pokemonType.find((type)=>{
      return type.no == idx;
    });
    let typePokemons = pokemons.filter((pokemon)=>{
      return pokemon.type.includes(type.name);
    });
    typePokemons.forEach(function(pokemon){
      pokemon.pic = "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/"+pokemon.src;
    });
    this.lists = typePokemons;
  },
  mounted(){
    firebase.database().ref(db).on("value", (snapshot) => {
      mabongStickers = snapshot.val() || [];
    });
  },
  updated(){

  },
  methods:{
    addSticker:function(event){
      firebase.database().ref(db+"/"+mabongStickers.length).set({buid:this.buid});
      location.href = "/";
    },
    zoom:function(event,pokemon){
      this.isZoom = true;
      this.zoomSrc = pokemon.pic;
      this.buid = pokemon.buid;
    },
    close:function(){
      this.isZoom = false;
    }
  }
}
</script>
<style lang="scss">
.c-pokemonList{display:grid;align-items:start;
    .m-sticker{margin:20px auto 0;}
    @media (min-width: 375px) { &{grid-template-columns: repeat(3,1fr);} }
    @media (min-width: 667px) { &{grid-template-columns: repeat(5,1fr);} }
    @media (min-width: 768px) { &{grid-template-columns: repeat(6,1fr);} }
    @media (min-width: 1024px) { &{grid-template-columns: repeat(8,1fr);} }
}

.m-sticker{display:flex;flex-direction: column-reverse;width:100px;}
.m-sticker dt{padding-top:5px;text-align:center;font-size:16px;
  p{font-size:12px;color:#666;}
}
.m-sticker .a-sticker{width:100px;height:100px;}

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


.l-pokemonZoom{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2;background:rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  span{display:block;margin:0 auto;background:#f5f5f5;width:80vmin;border-radius:50%;
    img{display:block;width:100%;margin:0 auto;}
  }
}

.l-pokemonThrow{position:fixed;left:0;right:0;bottom:10%;z-index:3;}
/*! 공 던지기 버튼(뽑기) */
.a-throwBall {margin:0 auto;background: transparent;border: 0;width: 60px;height: 60px;background: #fff;border-radius: 50%;border: 1px solid #ccc;display: flex;flex-direction: column;justify-content: center;align-items: center;
    &:before {content: "";display: block;width: 38px;height: 38px;background: url("https://pokemonkorea.co.kr/img/icon/icon_ball_c.png") no-repeat;}
}
</style>
