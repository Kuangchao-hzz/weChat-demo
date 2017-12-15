import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import Common from './common'
import './assets/css/index.styl'
import 'mint-ui/lib/style.css'
import '../static/css/ionicons.css'

Vue.config.productionTip = false
Vue.use(Common)
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
