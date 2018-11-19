import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import filters from './filters/index'
import VueRouter from 'vue-router'
import routesConfig from './routeConfig'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'//如果此处应用不了，拿到index.html内

// console.log(filters) 
//测试过滤器
import './assets/css/index.css' 
//理论上可以
import 'animate.css'
import 'n-zepto'//注意：放在backToTop之上，且npm install n-zepto，因为它是模块化的zepto，被import 进来的内容需要是模块化的
// import './util/backToTop'

//定义过滤器方法一
//每次输出过滤器都得添加
// Vue.filter('trim', filters.trim) 

//定义过滤器方法二
//一次过滤所有的过滤器内容
Object.keys(filters).forEach(key => Vue.filter(key,filters[key])) 
//选取对象内的keys(过滤文件内导出的key,此处为trim).forEach循环（导出的key => Vue过滤方法）
// console.log(Object.keys(filters))

//应用某插件时都需要use
Vue.use(VueResource) //应用vue-resource
Vue.use(VueRouter)//应用vue-router
Vue.use(MintUI) //应用MintUI

const router=new VueRouter({
    //重定义命名 routes ,注意：vue内的路由命名必须为routes，除非重定义    
    routes:routesConfig
    //或者在顶引入时命名为 routes,则直接使用
    // routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})