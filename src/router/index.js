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
    },
    {
      path: '/adminIndex',
      name: 'adminIndex',
      component: resolve => require(['../Views/AdminIndex/adminIndex.vue'], resolve)
    },
    {
      path: '/toFightList',
      name: 'toFightList',
      component: resolve => require(['../Views/ToFightList/toFightList.vue'], resolve)
    },
    {
      path: '/carIndex',
      name: 'carIndex',
      component: resolve => require(['../Views/carIndex/carIndex.vue'], resolve),
      children: [
        {
          path: 'placeList',
          name: 'placeList',
          component: resolve => require(['../Views/carIndex/placeList.vue'], resolve)
        },
        {
          path: 'myAddress',
          name: 'myAddress',
          component: resolve => require(['../Views/carIndex/myAddress.vue'], resolve)
        },
        {
          path: 'carType',
          name: 'carType',
          component: resolve => require(['../Views/carIndex/carType.vue'], resolve)
        },
        {
          path: 'carDetail',
          name: 'carDetail',
          component: resolve => require(['../Views/carIndex/carDetail.vue'], resolve)
        }
      ]
    }
  ]
})
