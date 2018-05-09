// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyload from 'vue-lazyload'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper);

Vue.use(VueLazyload, {
        preLoad: 1,
        error: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/default_img.jpg',
        loading: 'http://photoh5-cn.oss-cn-shenzhen.aliyuncs.com/groupyWebsite/default_img.jpg',
        attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
