import icon from './icon/icon.vue'
import linkList from './link-list/link-list.vue'
import nodeData from './none-data/node-data.vue'
// import scroll from './scroll/scroll.vue'
import cityFight from './city-fight/city-fight.vue'
import Message from './message/index.js'

const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.component(icon.name, icon)
  Vue.component(linkList.name, linkList)
  Vue.component(cityFight.name, cityFight)
  // Vue.component(scroll.name, scroll)
  Vue.component(nodeData.name, nodeData)

  Vue.prototype.$message = Message.installMessage
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
