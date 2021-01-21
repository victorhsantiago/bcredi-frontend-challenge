import Vue from 'vue';
import VueTheMask from 'vue-the-mask';

import App from './App.vue';

import './assets/css/reset.css';
import './assets/css/global.css';

Vue.config.productionTip = false;

Vue.use(VueTheMask);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
