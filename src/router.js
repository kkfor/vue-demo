import Vue from 'vue'
import Router from 'vue-router'

import vModel from './components/vModel'
import datePanel from './components/datePanel'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/vmodel', component: vModel}
  ]
})