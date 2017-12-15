import Vue from 'vue'
import Message from './src/main.vue'

Message.installMessage = function (options) {
  if (options === undefined || options === null) {
    options = {
      message: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options
    }
  }
  var MessageInstall = Vue.extend(Message)

  var component = new MessageInstall({
    data: options
  }).$mount()
  document.querySelector('body').appendChild(component.$el)
}

export default Message
