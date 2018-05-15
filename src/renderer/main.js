import axios from 'axios';
import Buefy from 'buefy';
import electron from 'vue-electron';
import Vue from 'vue';

import 'buefy/lib/buefy.css';
import 'animate.css/animate.css';

import App from './App';
import store from './store';

Vue.use(Buefy);

if (!process.env.IS_WEB) Vue.use(electron);

Vue.prototype.$http = axios;
Vue.http = Vue.prototype.$http;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>',
}).$mount('#app');
