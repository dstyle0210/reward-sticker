<template>
  <Layout_Header></Layout_Header>
  <main class="p-pokemonList">
        <section class="c-pokemonList">
    
            <dl class="m-sticker" v-for="pokemon in lists">
                <dt>{{pokemon.name}}</dt>
                <dd><label class="a-sticker" @click="addSticker(e,pokemon.buid)"><img :src="pokemon.pic" alt=""></label></dd>
            </dl>

        </section>
    </main>
</template>
<script>
import Layout_Header from '../../components/Layout_Header.vue';
import pokemonType from '../../data/pokemonType.json';
import pokemons from '../../data/pokemonList.json';
export default {
  name: 'App',
  components: {
    Layout_Header
  },
  data(){
    return {
      lists:[]
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
    addSticker:function(event,buid){
      firebase.database().ref(db+"/"+mabongStickers.length).set({buid:buid});
      location.href = "/";
    }
  }
}
</script>
<style lang="scss">
.c-pokemonList{display:grid;
    .m-sticker{margin:20px auto 0;}
    @media (min-width: 375px) { &{grid-template-columns: repeat(3,1fr);} }
    @media (min-width: 667px) { &{grid-template-columns: repeat(5,1fr);} }
    @media (min-width: 768px) { &{grid-template-columns: repeat(6,1fr);} }
    @media (min-width: 1024px) { &{grid-template-columns: repeat(8,1fr);} }
}

.m-sticker{display:flex;flex-direction: column-reverse;width:100px;}
.m-sticker dt{padding-top:5px;text-align:center;font-size:16px;}
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
</style>
