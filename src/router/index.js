import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../Views/Signup/siginup.vue'], resolve)
    },
    {
      path: '/mainIndex',
      name: 'mainIndex',
      component: resolve => require(['../Views/MainIndex/mainIndex.vue'], resolve)
    },
    {
      path: '/NewJourney',
      name: 'NewJourney',
      component: resolve => require(['../Views/NewJourney/index.vue'], resolve)
    }
  ]
})
