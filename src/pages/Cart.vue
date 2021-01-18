<template>
  <div class="container">
    <h1>Cart View</h1>
    <router-link  to='/funny?id=0'>
      Check Vue devtools panel, over there ---->
    </router-link>
     <van-tabbar route>
      <van-tabbar-item  replace to="/" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="search">Cart</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="friends-o">Mine</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Cart',
}
</script>
