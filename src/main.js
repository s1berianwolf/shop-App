import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.use(Mint);

Vue.component('icon',Icon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
