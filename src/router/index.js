import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '../components/AppHeader'
import SecretList from '../components/SecretList'
import NewsList from '../components/NewsList'
import AppHot from '../components/AppHot'
import AppOrenburg from '../components/AppOrenburg'
import AppInstoren from '../components/AppInstoren'
import AppAuth from '../components/AppAuth'

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
      path: '/login',
      name: 'login',
      component: AppAuth
    },
    {
      path: '/news',
      name: 'news',
      component: NewsList,
      children: [
        {
          // при совпадении пути с шаблоном /user/:id/profile
          // в <router-view> компонента User будет показан UserProfile
          path: 'politics',
          component: NewsList
        },
        {
          // при совпадении пути с шаблоном /user/:id/posts
          // в <router-view> компонента User будет показан UserPosts
          path: 'economics',
          component: NewsList
        },
        {
          // при совпадении пути с шаблоном /user/:id/posts
          // в <router-view> компонента User будет показан UserPosts
          path: 'society',
          component: NewsList
        }
      ]      
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
