import Vue from 'vue'
import App from './App.vue'
import AppEs from './App-es.vue'
import AppEn from './App-en.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/es',
      component: AppEs
    },
    {
      path: '/en',
      component: AppEn
    },
    {
      path: '*',
      redirect: '/es'
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
