//配置路由文件
import Home from './components/Home.vue'
import Login from './components/Login.vue'

//注意配置命名为routes
const routes=[{
    path:'/home',
    component:Home
},{
    path:'/login',
    component:Login
},{
    path:'/',
    redirect:'/Home'
}];

export default routes;