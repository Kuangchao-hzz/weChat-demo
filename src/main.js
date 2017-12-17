import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import Common from './common'
import Moment from 'moment'
import './assets/css/index.styl'
import 'mint-ui/lib/style.css'
import '../static/css/ionicons.css'

Vue.config.productionTip = false
Vue.use(Common)
Vue.use(Mint)

router.beforeEach((to, from, next) => {
  store.commit('SETCURRENTPAGE', to)

  next()
})

global.moment = Moment
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
