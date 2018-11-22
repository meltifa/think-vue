import Vue from 'vue'
import App from './Index.vue'
import 'unfetch/polyfill'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
