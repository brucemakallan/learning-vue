import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/about', name: 'AboutPage', component: AboutPage },
  ]
})
