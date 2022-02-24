import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Episode from '../views/Episode.vue';
import Naruto from '../views/Naruto.vue';
import Shippuden from '../views/Shippuden.vue';
import ArcList from '../views/ArcList.vue';
import ArcDetail from '../views/ArcDetail.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/episode/:id', component: Episode, props: true },
    { path: '/naruto', component: Naruto },
    { path: '/shippuden', component: Shippuden },
    { path: '/arc', component: ArcList },
    { path: '/arc/:id', component: ArcDetail, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;