import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () =>import ('../layout/Layout.vue'),
      redirect: '/home',
      children:[
        {
          path: 'home',
          name:'Home',
          component: () =>import ('../views/HomeView.vue'),
        },
        {
          path: 'personCenter',//子路由前没有‘/’
          name: 'PersonCenter',
          component: () =>import ('../views/PersonCenter.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () =>import ('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () =>import ('../views/Register.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },
    {
      path: '/:pathMatch(.*)',//匹配所有未知路由
      redirect: '/404'//重置到404页面
    }
  ]
})
//路由守卫
router.beforeEach((to,from,next) =>{
  const store=useUserStore()//拿到用户对象信息
  const user=store.loginInfo.user
  const hasUser=user && user.id
  const noPermissionPaths=['/login','/register']//定义无需登陆的路由
  if(!hasUser && !noPermissionPaths.includes(to.path)){//用户未登录
    //用户没登陆，假如当前正在login界面，然后login界面没有用户信息，
    // 这时再去往login界面跳转，则会出现无限循环跳转
    //若to.path === '/login' 时 获取缓存的用户数据!noPermissionPaths.includes(to.path)返回false，也不会进 next('/login')
      next("/login")
  }else{
    next()
  }

})

export default router
