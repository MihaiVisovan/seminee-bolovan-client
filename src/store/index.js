import { createStore } from 'vuex';
import categories from '@/assets/data/categories.json';
import products from '@/assets/data/products.json';

export default createStore({
  state: {
    showMenu: false,
    categories,
    products,
  },
  mutations: {
    setShowMenu(state, showMenu) {
      state.showMenu = showMenu;
    },
  },
});
