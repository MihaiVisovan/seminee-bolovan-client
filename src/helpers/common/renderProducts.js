import router from '@/router/index.js';
import store from '@/store/index.js';

const renderProducts = categoryId => {
  router.push({
    name: 'Products',
    params: { categoryId },
  });

  store.dispatch('setCategory', categoryId);
};

export default renderProducts;
