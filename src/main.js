// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueAxios from 'vue-axios';
import globalAxios from './assets/js/global/globalAxios.js';
import globalActionUrl from './assets/js/global/globalActionUrl';

Vue.config.productionTip = false

Vue.use(iView);
Vue.use(VueAxios, globalAxios);

Vue.prototype.globalActionUrl = globalActionUrl;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
