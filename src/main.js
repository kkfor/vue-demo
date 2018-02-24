import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import routes from './router'

Vue.use(iView)

new Vue({
  routes,
  el: '#app',
  render: h => h(App)
})
