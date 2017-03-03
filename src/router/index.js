import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Updates from 'components/Updates'
import ContactPage from 'components/Contact_Page'
import ScheduleOrientation from 'components/Schedule_Orientation'
import ConferenceCall from 'components/Conference_Call'

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
    },
    {
      path: '/Schedule_Orientation',
      name: 'Schedule_Orientation',
      component: ScheduleOrientation
    },
    {
      path: '/Conference_Call',
      name: 'Conference_Call',
      component: ConferenceCall
    }
  ]
})
