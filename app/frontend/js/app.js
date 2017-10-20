import Turbolinks from 'turbolinks'
import TurbolinksAdapter from './mixins/vue-turbolinks'
import Vue from 'vue/dist/vue.common.js'
import 'jquery-ujs'
import 'vueify/lib/insert-css'

import Burger from './components/Burger.vue'

Turbolinks.start()
Vue.use(TurbolinksAdapter)

module.exports = {
  init () {
    document.addEventListener('turbolinks:load', () => {
      new Vue({ // eslint-disable-line
        el: '#app',
        components: {
          Burger
        }
      })
    })
  }
}
