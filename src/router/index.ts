import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue';
import Service from '../pages/services.vue';
import Testimonial from '../pages/testimonial.vue';
import Contact from '../pages/contact.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/service', name: 'Service', component: Service },
  { path: '/temoignage', name: 'Testimonial', component: Testimonial },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
