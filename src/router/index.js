import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Updates from 'components/Updates'
import ContactPage from 'components/Contact_Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Updates',
      name: 'Updates',
      component: Updates
    },
    {
      path: '/Contact_Page',
      name: 'Contact_Page',
      component: ContactPage
    }

  ]
})
