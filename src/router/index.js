import { createRouter, createWebHistory } from 'vue-router'
/**
 * 固定的导航数据
 * alwaysShow: true
 */

export const initialRouterData = [
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
    }
]


// 路由模式
export const router = createRouter({
    history: createWebHistory(),
    routes: initialRouterData,
});
