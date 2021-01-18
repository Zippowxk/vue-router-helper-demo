import Vue from 'vue/dist/vue.esm.js';
import App from './App.vue'
import VueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Home from './pages/Home.vue'
import Cart from './pages/Cart.vue'
import Mine from './pages/Mine.vue'
import Funny from './pages/Funny.vue'

Vue.use(VueRouter)
Vue.use(Vant);

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/mine', component: Mine },
  { 
    path: '/product', 
    //async components supported
    component: ()=>import(/* webpackChunkName: "product" */"./pages/Product.vue")   
  },
  {
    path: '/funny', 
    component:Funny
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
})
// uncomment this line to auto manage your keep-alive pages
// auto create new page when you pushing,
// destroy useless page when you going back
import createHelper from 'vue-router-keep-alive-helper'
// createHelper({Vue,router})

// set replaceStay option to keep page alive when replacing
createHelper({Vue,router,replaceStay:['/','/mine']})

window.app = new Vue({
  render: h => h(App),
  router
}).$mount('#app');