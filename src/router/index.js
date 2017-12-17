import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/mainIndex'
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
    },
    {
      path: '/planIndex',
      name: 'planIndex',
      component: resolve => require(['../Views/PlanIndex/planIndex.vue'], resolve)
    },
    {
      path: '/orderIndex',
      name: 'orderIndex',
      component: resolve => require(['../Views/OrderIndex/orderIndex.vue'], resolve)
    }
  ]
})
