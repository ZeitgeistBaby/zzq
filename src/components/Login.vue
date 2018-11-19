<template>
<div class="animated">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" ></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" ></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" ></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" ></mt-field>
    <mt-button size="small"  type="primary">登录</mt-button>
 </div>
</template>
<script>
    

</script>