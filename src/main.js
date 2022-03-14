import Vue from 'vue';
import App from './app.vue';

// import { message } from './test/message';
// import messagex from './test/messagex';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// eslint-disable-next-line no-alert
// alert(message);
// messagex('Новое сообщение');
