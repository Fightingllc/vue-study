import { createWebHashHistory, createRouter } from "vue-router";

export const constantRoutes = [
  {
    path: "/",
    name: "/",
    component: () => import("@/components/HelloWorld.vue"),
  },
  // {
  //     path: "/redirect",
  //     component: HomeVue,
  //     meta: {hidden:true},
  //     children: [
  //         {
  //             path: "/redirect/:path(.*)",
  //             component: () => import("@views/home/index.vue")
  //         }
  //     ]
  // },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    // 是否在导航栏中隐藏
    meta: { hidden: true,title: '首页' },
  },
  {
    path: "/components",
    name: "/components",
    component: () => import("@/views/components/index.vue"),
    meta: {
      title: '组件基础'
    }
  },
  {
    path: "/router",
    name: "/router",
    component: () => import("@/views/router/index.vue"),
    meta: {
      title: '路由'
    }
  },
  {
    path: "/slot",
    name: "/slot",
    component: () => import("@/views/slot/index.vue"),
    meta: {
      title: '插槽'
    }
  },
  {
    path: "/keepAlive",
    name: "/keepAlive",
    component: () => import("@/views/keepAlive/index.vue"),
    meta: {
      title: 'KeepAlive'
    }
  },
  {
    path: "/dependencyInjection",
    name: "/dependencyInjection",
    component: () => import("@/views/dependencyInjection/index.vue"),
    meta: {
      title: '依赖注入'
    }
  },
  {
    path: "/composables",
    name: "/composables",
    component: () => import("@/views/composables/index.vue"),
    meta: {
      title: '组合式函数'
    }
  },
  {
    path: "/expose",
    name: "/expose",
    component: () => import("@/views/expose/index.vue"),
    meta: {
      title: 'expose'
    }
  },  {
    path: "/pinia",
    name: "/pinia",
    component: () => import("@/views/pinia/index.vue"),
    meta: {
      title: 'expose'
    }
  },
];

/**
 * 创建路由
 * 使用Hash模式：createWebHashHistory 实际传递的url前会使用一个哈希字符#，不会发送到服务器，但对SEO有影响
 * H5模式：createWebHistory 推荐使用
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  //刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/login" });
}

const isAuthenticated = true;
/**
 * 导航守卫
 * to：即将要进入的目标
 * form：当前导航正要离开的路由
 *  next({name: "home"})  or  return { name: 'Login' } 重定向新页面
 */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '咱也不知道啊'; 
  if (to.name != "home" && !isAuthenticated) next({ name: "home" });
  else next();
  // console.log("to:" + to.name);
  // console.log("from:" + from.name);
  // console.log("next:" + next());
});

/**
 * 全局解析守卫
 * router.beforeResolve 和 router.beforeEach类似
 * 触发时机：导航被确认之前、所以组件内守卫和异步路由组件被解析之后调用
 * 
 */

export default router;
