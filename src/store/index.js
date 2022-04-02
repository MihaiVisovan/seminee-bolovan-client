import { createStore } from 'vuex';
import categories from '@/assets/data/categories.json';
import products from '@/assets/data/products.json';
import filters from '@/assets/data/filters.json';
import footerInfo from '@/assets/data/footerInfo.json';

export default createStore({
  state: {
    showMenu: false,
    categories,
    products,
    filters,
    footerInfo,
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
    setFilters(state, filters) {
      state.filters = filters;
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
