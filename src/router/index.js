import { createRouter, createWebHistory } from 'vue-router';

const Categories = () => import('@/views/Categories.vue');
const Products = () => import('@/views/Products.vue');
const SearchComponent = () => import('@/views/SearchComponent.vue');
const Product = () => import('@/views/Product.vue');
const Cart = () => import('@/views/Cart.vue');

const routes = [
  { path: '/', component: Categories, name: 'Categories' },
  { path: '/:categoryId', component: Products, name: 'Products' },
  { path: '/search', component: SearchComponent, name: 'SearchComponent' },
  { path: '/:categoryId/:productId', component: Product, name: 'Product' },
  { path: '/cart', component: Cart, name: 'Cart' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
