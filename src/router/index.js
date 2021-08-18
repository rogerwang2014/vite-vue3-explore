import { createRouter, createWebHashHistory } from 'vue-router'
/**
 * 固定的导航数据
 * alwaysShow: true
 */

export const initialRouterData = [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../components/404.vue')
    },
    {
        path: '/',
        name: 'hello-world',
        hidden: false,
        component: () => import('../components/HelloWorld.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/page/a/:id',
        component: () => import('../components/A.vue'),
    },
    {
        path: '/page/b',
        component: () => import('../components/Home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        hidden: true,
        component: () => import('../components/Login.vue'),
        meta: {
            title: '登录'
        }
    }, {
        path: '/home',
        name: 'home',
        hidden: true,
        component: () => import('../components/Home.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/multi-view',
        components: {
            default: () => import('../components/Login.vue'),
            a: () => import('../components/Home.vue'),
            b: () => import('../components/A.vue')
        },
        props: { default: true, a: true, b: true }
    }
]


// 路由模式
export const router = createRouter({
    history: createWebHashHistory(),
    routes: initialRouterData,
});
