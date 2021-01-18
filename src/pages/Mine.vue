<template>
  <div class="container">
    <h1>Mine View</h1>
    <div>Add <strong>replaceStay</strong> Options to keep page alive when replacing</div>
    <router-link  to='/' replace>
      Replace to Home View
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
  name: 'Mine',
}
</script>
