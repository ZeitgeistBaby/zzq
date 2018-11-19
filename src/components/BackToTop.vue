<template>
    <section>
        <div class="back-to-top">
           <a class="back" href="javascript:;" ref="backBtn" @click="backtop">回到顶部</a>
           <!--ref 获取元素 -->
        </div>
    </section>
</template>
<script>
    export default{
        mounted(){
            // console.log(this.$refs.backBtn)
            $(this.$refs.backBtn).backToTop({
                duration:500
            })
        },
        methods:{
            backtop(){
                // alert('a')
                // window.onscroll=function(){
                //     if(document.documentElement.scrollTop>0){
                //         document.documentElement.scrollTop==0;
                //     }
                // }
            }
        }
    }
</script>