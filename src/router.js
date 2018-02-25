import Vue from 'vue'
import Router from 'vue-router'

import vModel from './components/vModel'
import datePanel from './components/datePanel'
import buttonDisabled from './components/buttonDisabled'
import phone from './components/phone'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/vmodel', component: vModel},
    {path: '/buttonDisabled', component: buttonDisabled},
    {path: '/phone', component: phone}
  ]
})