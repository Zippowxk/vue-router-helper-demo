import Vue from 'vue/dist/vue.esm.js';
import App from './App.vue'
import VueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import Mine from './pages/Mine.vue'
import Product from './pages/Product.vue'


import createHelper from 'vue-router-keep-alive-helper'
// import createHelper from './debug/index.js'

Vue.use(VueRouter)
Vue.use(Vant);

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/mine', component: Mine },
  { path: '/product', component: Product }
]

const router = new VueRouter({
  routes,
  mode:'history',
})
createHelper({Vue,router})

window.app = new Vue({
  render: h => h(App),
  router
}).$mount('#app');