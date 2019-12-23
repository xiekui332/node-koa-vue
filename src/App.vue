<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
    components:{
        Login
    }
}
</script>

<style lang="less">
html, body{
  height:100%; width:100%; 
  overflow:hidden; 
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/bg.jpg');
  background-size: 100% 100%;
  height: 100%;
}
</style>
