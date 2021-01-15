import Vue from 'vue/dist/vue.esm.js';
import App from './App.vue'
import H from './components/HelloWorld'
import VueRouter from 'vue-router'
import createHelper from 'vue-router-keep-alive-helper'
Vue.use(VueRouter)
const Foo = { 
  name: 'foo',
  template: '<div><p>this is foo page</p><button @click="goto">Go to bar</button></div>',
  methods:{
    goto(){
      this.$router.push("/bar")
    }
  },
  destroyed() {
      console.log("foo destroyed")
  },
}
const Bar = { 
  name: 'bar',
  template: '<div><p>this is bar page</p><button @click="goto">Go to baz</button></div>' ,
  methods:{
    goto(){
      this.$router.push("/baz")
    }
  },
  destroyed() {
      console.log("bar destroyed")
  },
}
const Baz = { 
  name: 'baz',
  template: '<div><p>this is baz page</p><button @click="goto">Go to Foo</button></div>',
  methods:{
    goto(){
      this.$router.push("/foo")
    }  
  },
  destroyed() {
    console.log("baz destroyed")
  },
}

const routes = [
  { path: '/', component: H },
  { path: '/foo', component: Foo},
  { path: '/bar', component: Bar },
  { path: '/baz', component: Baz }
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