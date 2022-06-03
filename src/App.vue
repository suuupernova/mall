<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import storage from './storage/index'
//import axios from 'axios'
import jsonp from 'jsonp'
export default {
  name: 'app',
  mounted(){
    let url = ""
    //storage.setItem('a',1);
    //storage.setItem('user',{a:1});
    //storage.setItem('abc',{a:1},'user');
    //storage.clear('a');
    jsonp(url,()=>{
      
    })
    storage.clear('a','user');
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
