import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import i18n from './i18n/'
import store from './store'
import axios from 'axios'
import { get, post, put, patch, del } from '@/utils/http'
import api from '@/utils/api'



Vue.prototype.$ajax = axios;
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$put = put;
Vue.prototype.$patch = patch;
Vue.prototype.$delete = del;
Vue.prototype.$api = api;



Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false


new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')