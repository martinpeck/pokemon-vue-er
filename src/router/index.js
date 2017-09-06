import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pokemon from '@/components/Pokemon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pokemon',
      component: Pokemon
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
