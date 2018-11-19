<template>
    <header>
		<div class="header-info">
			<a href="javascript:;" class="menu">菜单</a>
			<h1 class="logo sslog">GuoKr.com</h1>
			<a class="toggle-pc" href="javascript:;">PC</a>
		</div>
        <User-com></User-com>
	</header>
</template>
<script>
    import UserCom from './User.vue'
    

    export default{
        components:{
            UserCom,
        }
    }
</script>
<style scoped > 
/*scoped 私有样式，可单独给组件定义样式，不受总样式影响*/
    .sslog{color: red;}
</style>
