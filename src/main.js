import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router'
import LandingPage from './components/LandingPage.vue'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

const routes = [
  { path: '/', component: LandingPage }
]

const router = new VueRouter({
  routes
});

const vuetify = new Vuetify()

Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  el: '#app',
  render: h => h(App),
  components: {
    App
  }
})



