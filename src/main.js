import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import News from './components/about/News'
import Contact from './components/about/Contact'

Vue.use(VueRouter)

const routes = [
  {path: '/', name:'homePage', component:Home},
  {path: '/menu', name:'menuPage', component:Menu},
  {path: '/admin', name:'adminPage', component:Admin},
  {path: '/about', name:'aboutPage', component:About, children: [
    {path: '/about/news', name:'newsPage', component:News},
    {path: 'contact', name:'contactPage', component:Contact},
  ]},
  {path: '/login', name:'loginPage', component:Login},
  {path: '/register', name:'registerPage', component:Register},
  {path: '*', redirect:'/'}, // 没有匹配到路由时，重定向到主页
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
