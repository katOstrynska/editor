import Vue from 'vue'
import App from './App.vue'
import UUID from 'vue-uuid'

Vue.use(UUID);


import { store } from './store/store';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')