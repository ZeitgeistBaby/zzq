
<template>
    <div>
      <!-- 应用组件时大写字母可被"-"替代，或者直接写 -->
      <Header-com></Header-com> 
      <Slider-com></Slider-com>
      <!--父组件传递数据给子组件-->
      <!-- <news-list-com :newsData="newsData"></news-list-com> -->
      <news-list-com></news-list-com>
      <hot-answer-com></hot-answer-com>
      <back-to-top-com></back-to-top-com>
      <footer-com></footer-com>
    </div>
</template>
<script>
//引入组件
  import HeaderCom from './components/Header.vue'
  import SliderCom from './components/Slider.vue'
  import NewsListCom from './components/NewsList.vue' 
  import HotAnswerCom from './components/HotAnswer.vue'
  import BackToTopCom from './components/BackToTop.vue'
  import FooterCom from './components/Footer.vue'

  export default{

    //------------------------父组件给子组件传数据 ------------------------------------
    // data(){//父组件给子组件传数据 
    //   return {
    //     newsData:[],
    //     loading:true
    //   }
    // },
    // created(){
    //     this.fetchData()
    // },

    // methods:{
    //   fetchData(){
    //     this.$http.jsonp('https://bird.ioliu.cn/joke/rand',{
    //       params:{
    //         type:'text'
    //       },
    //       jsonp:'callback'
    //     }).then(res =>{
    //       console.log(res.data)
    //       this.loading=false
    //       this.newsData=res.data.data
    //     },err =>{
    //       console.log(err)
    //     })
    //   }
    // },
    //---------------------------------------------------------------------------

    components:{
      HeaderCom,
      SliderCom,
      NewsListCom,
      HotAnswerCom,
      BackToTopCom,
      FooterCom
    }
  }
</script>
<style>

</style>
