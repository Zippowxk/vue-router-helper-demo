<template>
  <div>
    <van-nav-bar
      title="Home View"
    />
    <div class="container">
      <h1>Home View</h1>
      <router-link  to='/product?color=Teal'>
        Push to product "Teal"
      </router-link>
      <button @click="click">
        replace
      </button>
      <van-tabbar route>
        <van-tabbar-item  replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/cart" icon="search">购物车</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    click(){
      this.$router.replace('/cart',()=>{ console.log('success')},(e)=>{ console.log("eee")})
    }
  }
}
</script>
