import { createStore } from 'vuex';
import categories from '@/assets/data/categories.json';
import products from '@/assets/data/products.json';

export default createStore({
  state: {
    showMenu: false,
    categories,
    products,
    category: {},
    product: {},
  },
  mutations: {
    setShowMenu(state, showMenu) {
      state.showMenu = showMenu;
    },
    setCategory(state, category) {
      state.category = { ...category };
    },
    setProduct(state, product) {
      state.product = { ...product };
    },
  },
  actions: {
    setCategory({ commit }, categoryId) {
      const category = categories.find(x => x.id === categoryId);
      commit('setCategory', category);
    },
    setProduct({ commit }, productId) {
      const product = products.find(x => x.id === productId);
      commit('setProduct', product);
    },
  },
});
