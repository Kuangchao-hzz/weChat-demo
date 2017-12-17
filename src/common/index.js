import icon from './icon/icon.vue'
import linkList from './link-list/link-list.vue'
import Message from './message/index.js'
console.log(Message)
const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.component(icon.name, icon)
  Vue.component(linkList.name, linkList)

  Vue.prototype.$message = Message.installMessage
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
