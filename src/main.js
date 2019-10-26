import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)



