import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
const Home = () => import(/* webpackChunkName:'home' */ './views/Home.vue');
const About = () => import( /* webpackChunkName:'about' */ './views/About.vue');
const Test = () => import( /* webpackChunkName:'test' */ './views/Test.vue');
const Puzzle = () => import( /* webpackChunkName:'puzzle' */ './views/Puzzle.vue');
const VueApi = () => import( /* webpackChunkName:'vueapi' */ './views/VueApi.vue');
const VuePeopleMove = () => import( /* webpackChunkName:'Vuepeoplemove' */ './views/VuePeopleMove.vue');

//引入Home组件
// const Home = resolve => {
//   require.ensure(['./views/Home.vue'], () => {
//     resolve(require('./views/Home.vue'))
//   })
// }

//引入About组件
// const About = resolve => {
//   require.ensure(['./views/About.vue'], () => {
//     resolve(require('./views/About.vue'))
//   })
// }

Vue.use(Router)

let base = `${process.env.BASE_URL}`; // 获取二级目录

export default new Router({
  mode: 'history',
  base: base,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Test
    },
    {
      path: '/puzzle',
      name: 'puzzle',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Puzzle
    },
    {
      path: '/vueapi',
      name: 'vueapi',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: VueApi
    },
    {
      path: '/Vuepeoplemove',
      name: 'Vuepeoplemove',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: VuePeopleMove
    }
  ]
})
