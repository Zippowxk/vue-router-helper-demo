<template>
  <div>
    <div style='background-color:orange;color:white'>
      <small>Please install the <a href='https://github.com/vuejs/vue-devtools#vue-devtools'>Vue devtools </a>for your browser and check the keep-alive stack in the Vue panel</small><br>
      <small style='color:red'>Star this Library on <strong><a href="https://github.com/Zippowxk/vue-router-keep-alive-helper">Github</a></strong></small>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container a{
  min-width: 80px;
  border: none;
  background-color: #1883db;
  color: white !important;
  padding: 0 10px;
  height: 35px;
  margin-top: 20px;
  line-height: 35px;
  text-align: center;
}
.container a:active{
  background: rgb(6, 14, 85);
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 82px;
  left:0;
  right:0;
  bottom:0;
  padding: 40px;
}
</style>
