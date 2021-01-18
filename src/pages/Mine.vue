<template>
  <div class="container">
    <h1>Mine View</h1>
    <router-link  to='/product?color=DarkBlue'>
      Push to product "DarkBlue"
    </router-link>
     <van-tabbar route>
      <van-tabbar-item  replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="search">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Mine',
}
</script>
