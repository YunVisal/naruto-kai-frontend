import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Episode from '../views/Episode.vue';
import Naruto from '../views/Naruto.vue';
import Shippuden from '../views/Shippuden.vue';
import ArcList from '../views/ArcList.vue';
import ArcDetail from '../views/ArcDetail.vue';
import Login from '../views/Login.vue';
import Admin from '../views/Admin.vue';
import EditEpisode from '../views/EditEpisode.vue';
import EditArc from '../views/EditArc.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/episode/:id', component: Episode, props: true },
    { path: '/naruto', component: Naruto },
    { path: '/shippuden', component: Shippuden },
    { path: '/arc', component: ArcList },
    { path: '/arc/:id', component: ArcDetail, props: true },
    { path: '/login', component: Login },
    { path: '/admin', component: Admin },
    { path: '/edit/episode/:id', component: EditEpisode, props: true },
    { path: '/edit/arc/:id', component: EditArc, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;