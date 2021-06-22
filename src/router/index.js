import VueRouter from 'vue-router';
import HomePage from '../views/Home.vue';
import Detail from '../views/Details.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/details',
        name: 'Details',
        component: Detail
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BABEL_URL),
    routes
});

export default router;