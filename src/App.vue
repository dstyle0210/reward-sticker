<template>
  <Image name="이상해씨"></Image>
  <Image name="이상해풀" src="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000201.png"></Image>
  <Image name="이상해꽃" src="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000301.png"></Image>
  <Image name="파이리" src="https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png"></Image>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Image from './components/Image.vue';

export default {
  name: 'App',
  components: {
    Image
  },
  created:function(){
    this.axios.get("/data/pokemonList.json").then((res)=>{
      console.log(res);
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app{
  .hello h1{color:red;}
}
</style>
