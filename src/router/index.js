import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import NotFound from '../views/NotFound.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details,
        props: true
    },
    // catch 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound', 
        component: NotFound,
    },
];
   
const router = createRouter({
    history: createWebHistory(process.env.BABEL_URL),
    routes,
});

export default router;