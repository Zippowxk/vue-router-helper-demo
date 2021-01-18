<template>
  <div>
    <div style='background-color:orange;color:white'>
      <small>Please install the <a href='https://github.com/vuejs/vue-devtools#vue-devtools'>Vue devtools </a>for your browser and debug the keep-alive stack in the Vue panel</small>
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
.button {
  height: 1rem;
  widows: 4rem;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
