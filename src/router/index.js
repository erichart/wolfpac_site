import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Updates from 'components/Updates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/updates',
      name: 'Updates',
      component: Updates
    }

  ]
})
