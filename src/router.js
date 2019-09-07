import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
//import CameraView from './components/CameraView'
import MobileCamera from './components/MobileCamera'
import Gallery from './components/Gallery'
import Stock from './views/Stock.vue'
import Options from './views/Options.vue'
import Splash from './views/Splash.vue'
import DefaultLayout from './views/DefaultLayout.vue'
//import DefaultLayout from './views/DefaultLayout.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash
    }, 
    {
      path: '/main',
      name: 'main',
      component: DefaultLayout,
      children: [ 
        {
          path: '/main',
          name: '',
          component: Main
        },
        {
          path: '/options',
          name: 'Options',
          component: Options
        },
        {
          path: '/mobilecamera',
          name: 'mobilecamera',
          component: MobileCamera
        },
        {
          path: '/gallery',
          name: 'gallery',
          component: Gallery
        },
        {
          path: '/stock',
          name: 'Stock',
          component: Stock
        }
      ]
    }

  ]
})
