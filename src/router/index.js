import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth.js'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: "",
                name: "AdminHome",
                redirect: { name: "Home" },
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: 'dashboard',
                name: 'Home',
                component: () => import('../views/main/dashboard/Dashboard.vue'),
                meta: { requiresAuth: true },
            },
            {
                path: "saved",
                name: "Saved",
                component: () => import('../views/main/saved/Saved.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "guessing",
                name: "Guessing",
                component: () => import('../views/games/guessing/Game.vue'),
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: "hunt",
                name: "Hunt",
                component: () => import('../views/games/hunt/Game.vue'),
                meta: {
                    requiresAuth: true,
                },
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        redirect: "404",
    },
    {
        path: "/404",
        name: "404",
        component: () => import('../views/NotFound.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const store = useAuthStore();

    const user = store.user
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !user) {
        next('/login');
    } else if (user && to.name === 'Login' || user && to.name === 'Signup') {
        next('/dashboard');
    } else {
        next();
    }
})

export default router;