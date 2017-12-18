import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentPage: '/' // 当前router对象
  },
  mutations: {
    SETCURRENTPAGE (state, router) {
      state.currentPage = router
    }
  }
})

export default store
