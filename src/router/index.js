import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Episode from '../views/Episode.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/episode/:id', component: Episode }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;