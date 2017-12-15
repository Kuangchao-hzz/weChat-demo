import icon from './icon/icon.vue'
import Message from './message/index.js'
console.log(Message)
const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.component(icon.name, icon)

  Vue.prototype.$message = Message.installMessage
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
