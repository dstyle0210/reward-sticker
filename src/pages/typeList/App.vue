<template>
  <Layout_Header></Layout_Header>
  <main class="p-typeList">
    <article class="c-pokemonTypeList">
        <M_Type v-for="type in pokemonType" :type="type"></M_Type>
    </article>
  </main>
</template>
<script>
import Layout_Header from '../../components/Layout_Header.vue';
import M_Type from '../../components/M_Type.vue';
import pokemonType from '../../data/pokemonType.json';
export default {
  name: 'App',
  components: {
    Layout_Header,
    M_Type
  },
  data(){
    return {
      pokemonType:pokemonType
    }
  },
  mounted(){
    console.log(pokemonType);
  },
  updated(){

  },
  methods:{
    
  }
}
</script>
<style lang="scss">
.c-pokemonTypeList{display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    .m-type{width:70px;margin:30px auto 0;}
    @media (min-width: 375px) { &{grid-template-columns: repeat(4,1fr);} }
    @media (min-width: 667px) { &{grid-template-columns: repeat(6,1fr);} }
    @media (min-width: 768px) { &{grid-template-columns: repeat(7,1fr);} }
    @media (min-width: 1024px) { &{grid-template-columns: repeat(10,1fr);} }
}
</style>
