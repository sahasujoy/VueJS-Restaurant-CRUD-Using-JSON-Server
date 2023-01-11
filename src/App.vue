<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <SignUp/> -->
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SignUp from './components/SignUp.vue'
export default {
  name: 'App',
  // components: {
  //   // HelloWorld,
  //   SignUp,
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body {
  padding: 0;
  margin: 0;
}
.logo {
    width:200px
}
.register input, .login input, .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid skyblue;
}
.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    border: 4px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
</style>
