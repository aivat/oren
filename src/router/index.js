import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AppHeader from '../components/AppHeader'
import SecretList from '../components/SecretList'
import NewsList from '../components/NewsList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'header',
      component: AppHeader
    },
    {
      path: '/secrets',
      name: 'secrets',
      component: SecretList
    },
    {
      path: '/news',
      name: 'news',
      component: NewsList
    }
  ]
})
