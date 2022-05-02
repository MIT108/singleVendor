import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../page/HomePage.vue'
import AboutUs from '../page/AboutUs.vue'
import ContactUs from '../page/ContactUs.vue'
import BlogPage from '../page/BlogPage.vue'
import BlogDetail from '../page/BlogDetail.vue'
import ShopPage from '../page/ShopPage.vue'

const routes = [
  
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  }, {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  }, {
    path: '/BlogPage',
    name: 'BlogPage',
    component: BlogPage
  }, {
    path: '/BlogDetail',
    name: 'BlogDetail',
    component: BlogDetail
  }, {
    path: '/ShopPage',
    name: 'ShopPage',
    component: ShopPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router