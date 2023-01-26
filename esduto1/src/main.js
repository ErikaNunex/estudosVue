import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import vuetify from './pluguins/vuetify.js'


Vue.config.productionTip = false
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
