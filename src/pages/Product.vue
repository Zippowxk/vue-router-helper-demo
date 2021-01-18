<template>
  <div>
    <van-nav-bar title="Product View" left-arrow @click-left="onClickLeft"/>
    <div class="container" :style="{'background-color':$route.query.color}">
      <h1 style='color:white'>{{$route.query.color}}</h1>
      <router-link  :to='`/product?color=${nextColor}`'>
         Push to product "{{nextColor}}"
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data(){
    return {
      nextColor: ''
    }
  },
  created(){
    // random a link to next product
    const root = ['Teal','DarkBlue','Turquoise','LightSalmon'];
    root.splice(root.indexOf(this.$route.query.color),1)
    this.nextColor = root[(Math.floor(Math.random()*3))];
  },
  methods:{
    onClickLeft() {
      this.$router.back();
    }
  }
}
</script>
