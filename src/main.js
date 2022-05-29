// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'

//根据前端的跨域方式做调整
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }
  else if(res.status==10){
    window.location.href='/#/login';
  }
  else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
