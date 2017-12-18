import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import Common from './common'
import Moment from 'moment'

import * as APICODE from 'api/config'
import './assets/css/index.styl'
import 'mint-ui/lib/style.css'
import '../static/css/ionicons.css'

// 解决移动端点击事件300ms延迟

Vue.config.productionTip = false
Vue.use(Common)
Vue.use(Mint)

router.beforeEach((to, from, next) => {
  store.commit('SETCURRENTPAGE', to)

  next()
})

// 全局方法 处理接口返回的状态吗
Vue.prototype.$apiHandleCatch = function (data) {
  return new Promise((resolve, reject) => {
    // 如果登录超时 则跳转到登录页
    if (data.code === APICODE.ERR_CODE_OVERTIME) {
      this.$route.push('/login')
      reject(data.msg)
    } else if (data.code === APICODE.ERR_CODE_OK) {
      resolve()
    } else {
      if (data.msg && data.msg !== '') {
        this.$message(data.msg)
        reject(data.msg)
      }
      resolve()
    }
  })
}

global.moment = Moment
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
