import Vue from 'vue'
import Router from 'vue-router'

import vModel from './components/vModel'
import datePanel from './components/datePanel'
import buttonDisabled from './components/buttonDisabled'
import phone from './components/phone'
import phone1 from './components/phone1'
import vueRouter from './components/vueRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/vmodel', component: vModel},
    {path: '/phone', component: phone},
    {path: '/phone1', component: phone1},
    {path: '/buttonDisabled', component: buttonDisabled},
    {path: '/vueRouter', component: vueRouter}
  ]
})