import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const PostComponent = () => import('@/components/PostComponent.vue');
const AnotherComponent = () => import('@/components/AnotherComponent.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/postComponent', component: PostComponent },
  { path: '/anotherComponent', component: AnotherComponent },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
