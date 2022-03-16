import { createRouter, createWebHistory } from 'vue-router';
import Categories from '@/views/Categories.vue';

const Products = () => import('@/views/Products.vue');
const Product = () => import('@/views/Product.vue');
const Cart = () => import('@/views/Cart.vue');

const routes = [
  { path: '/', component: Categories, name: 'Categories' },
  { path: '/:categoryId', component: Products, name: 'Products' },
  { path: '/:categoryId/:productId', component: Product, name: 'Product' },
  { path: '/cart', component: Cart, name: 'Cart' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
