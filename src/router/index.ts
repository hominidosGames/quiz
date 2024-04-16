import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue';
import SplashScreen from '@/views/SplashScreen.vue';
import Presentation from '@/views/Presentation.vue';
import MainMenu from '@/views/MainMenu.vue';
import Options from '@/views/Options.vue';
import Credits from '@/views/Credits.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'splash'
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
    path: '/credits',
    component: Credits
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
