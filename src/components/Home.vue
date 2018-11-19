<template>
    <div class="animated">
      <header-com></header-com>
      <slider-com></slider-com>
      <news-list-com></news-list-com>
      <hot-answer-com></hot-answer-com>
      <back-to-top-com></back-to-top-com>
      <footer-com></footer-com>
      <router-view></router-view>
      
    </div>
</template>
<script>
//引入组件
  import HeaderCom from './Header.vue'
  import SliderCom from './Slider.vue'
  import NewsListCom from './NewsList.vue' 
  import HotAnswerCom from './HotAnswer.vue'
  import BackToTopCom from './BackToTop.vue'
  import FooterCom from './Footer.vue'

  export default{

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
