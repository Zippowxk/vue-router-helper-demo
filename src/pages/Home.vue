<template>
  <div>
    <van-nav-bar
      title="Home View"
    />
    <div class="container">
      <div>This is a sample code of the js library named <strong>Vue router keep alive helper</strong></div>
      <router-link  to='/product?color=Teal'>
        Push to product "Teal"
      </router-link>
      <router-link  to='/mine' replace>
        Replace to Mine View
      </router-link>
      <van-tabbar route>
        <van-tabbar-item  replace to="/" icon="home-o">Home</van-tabbar-item>
        <van-tabbar-item replace to="/cart" icon="search">Cart</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="friends-o">Mine</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
