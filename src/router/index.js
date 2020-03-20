import Vue from 'vue'
import Router from 'vue-router'

//一级路由tabbar
import Home from "../pages/home"
import Class from "../pages/class"
import Talk from "../pages/talk"
import Collect from "../pages/collect"
import Mine from "../pages/mine"

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/talk',
      name: 'talk',
      component: Talk
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})

/**
*	源码 install 安装依赖时，Router（路由版本不一致）
*	也可以修改 package.json 里面的 Router 版本
*/
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}