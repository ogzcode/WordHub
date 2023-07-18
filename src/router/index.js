import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../supabase.js'
import { useAuthStore } from '../store/auth.js'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
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

    const user = store.session?.user;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !user) {
        next('/login')
    }
    else if (!requiresAuth && user) {
        next('/')
    }
    else {
        next()
    }
})

export default router;