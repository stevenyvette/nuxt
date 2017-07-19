/**
 * Created by gaoyile on 2017/7/19.
 */
// import '../../../css/wap/main'

import Vue from 'vue'
import Vuex from 'vuex'
// import VueRouter from 'vue-router'
// import VueTracker from '../../common/vue-tracker'
// import { http } from '~plugins/api'
// import '../../common/error-track'

// import { sync } from 'vuex-router-sync'
// import route from './router'

// import Root from './Root'
import state from './store'
import mutations from './mutations'
import getters from './getters'
import * as actions from './action'

// import 'babel-polyfill'

// Vue.use(VueRouter)
// Vue.use(Vuex)
// Vue.use(VueTracker)

// const router = new VueRouter(route)

// 百度统计手动记录页面切换
// router.afterEach(function (to, from) {
//   const fullPath = to.fullPath
//
//   if (window._hmt) {
//     window._hmt.push(['_trackPageview', fullPath])
//   }
//
//   if (process.env.NODE_ENV === 'production') {
//     http.get('/ajax/m/accessLog', {params: {fullPath}})
//   }
//
//   if (
//     ['mktlogin', 'mktregister', 'intermediateMktForm', 'register'].includes(to.name) &&
//     from.path === '/'
//   ) {
//     router.push({name: 'market'})
//   }
//
//   // vendor iframe back log
//   if (from && from.name === 'vendor') {
//     Vue.tracker.track({
//       action: 'vendor2bx',
//       backBX: to.name === 'loan' || to.name === 'landing',
//       vendor: from.params.id,
//     })
//   }
// })

// vue-router 2.0的install姿势似乎有点问题
// 会导致actions中取不到，手动加载一下
// Vue.router = router

const newStore = () => {
  return new Vuex.Store({
    actions,
    state,
    getters,
    mutations
  })
}

export default newStore

//
// sync(store, router)
//
// new Vue({
//   router,
//   store,
//   render: h => h(Root),
// }).$mount('#app')
