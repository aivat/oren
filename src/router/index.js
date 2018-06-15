import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '../components/AppHeader'
import SecretList from '../components/SecretList'
import NewsList from '../components/NewsList'
import AppHot from '../components/AppHot'
import AppOrenburg from '../components/AppOrenburg'
import AppInstoren from '../components/AppInstoren'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: NewsList
    },
    {
      path: '/news',
      name: 'news',
      component: NewsList
    },
    {
      path: '/hot',
      name: 'hot',
      component: AppHot
    },
    {
      path: '/instoren',
      name: 'instoren',
      component: AppInstoren
    },
    {
      path: '/secrets',
      name: 'secrets',
      component: SecretList
    },
    {
      path: '/orenburg',
      name: 'orenburg',
      component: AppOrenburg
    }

  ]
})
