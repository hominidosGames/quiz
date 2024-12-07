import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue';
import SplashScreen from '@/views/SplashScreen.vue';
import Presentation from '@/views/Presentation.vue';
import MainMenu from '@/views/MainMenu.vue';
import Options from '@/views/Options.vue';
import Credits from '@/views/Credits.vue';
import Category from '@/views/Category.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Rules from '@/views/Rules.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'splash'
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: "/splash/",
    component: SplashScreen
  },
  {
    path: '/presentation',
    component: Presentation
  },
  {
    path: '/mainMenu',
    component: MainMenu
  },
  {
    path: '/options',
    component: Options
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/credits',
    component: Credits
  },
  {
    path: '/rules',
    component: Rules
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
   
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
