<template>
<a href="pokemonList.html" class="m-type"><i :class="cn"></i><span>노말</span></a>
</template>
<script>
export default {
  name: 'M_Type',
  props:{
      idx:Number
  },
  computed:{
      cn:function(){
          return "a-type -type"+(this.idx - 1);
      }
  },
  mounted(){

  },
  updated(){

  },
  methods:{
    
  }
}
</script>
<style lang="scss">
/*! 포켓몬 타입 아이콘 + 텍스트 */
.m-type{display:block;width:70px;}
.m-type span{padding-top:5px;display:block;font-size:16px;color:#000;text-align:center;letter-spacing:-0.05em;}
.m-type .a-type{background-size:100px auto;}

/*! 포켓몬 타입 아이콘 */
.a-type{display:block;max-width:140px;border-radius:50%;background-repeat:no-repeat;background-position:center center;}
.a-type:before{content:"";display:block;padding-top:100%;}
.a-type span{display:none;}
.a-type.-type0{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_13-04-40-51980-1599278680.png');} /* 노말 */
.a-type.-type1{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_13-05-08-10121-1599278708.png');} /* 불꽃 */
.a-type.-type2{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_13-05-45-74190-1599278745.png');} /* 물 */
.a-type.-type3{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_13-06-09-99962-1599278769.png');} /* 풀 */
.a-type.-type4{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-04-39-93472-1599307479.jpg');} /* 전기 */
.a-type.-type5{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-05-15-67951-1599307515.jpg');} /* 얼음 */
.a-type.-type6{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-07-42-39886-1599307662.jpg');} /* 격투 */
.a-type.-type7{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-08-22-85974-1599307702.jpg');} /* 독 */
.a-type.-type8{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-08-54-70915-1599307734.jpg');} /* 땅 */
.a-type.-type9{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-09-28-78951-1599307768.jpg');} /* 비행 */
.a-type.-type10{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-09-48-65088-1599307788.jpg');} /* 에스퍼 */
.a-type.-type11{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-10-12-96118-1599307812.jpg');} /* 벌레 */
.a-type.-type12{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-05-33-75417-1599307533.jpg');} /* 바위 */
.a-type.-type13{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-05-47-40580-1599307547.jpg');} /* 고스트 */
.a-type.-type14{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-06-02-14692-1599307562.jpg');} /* 드래곤 */
.a-type.-type15{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-06-24-37409-1599307584.jpg');} /* 악 */
.a-type.-type16{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-15_16-42-50-43656-1600155770.png');} /* 강철 */
.a-type.-type17{background-image:url('https://data1.pokemonkorea.co.kr/newdata/2020/09/2020-09-05_21-07-12-23412-1599307632.jpg');} /* 페어리 */
</style>