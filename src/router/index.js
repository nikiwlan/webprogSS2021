import VueRouter from 'vue-router';
import HomePage from './pages/Home/index.vue';
import Detail from './pages/Detail/index.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BABEL_URL),
    routes
});

export default router;