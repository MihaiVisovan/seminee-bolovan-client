import { createStore } from 'vuex';

export default createStore({
  state: {
    showMenu: false,
  },
  mutations: {
    setShowMenu(state, showMenu) {
      state.showMenu = showMenu;
    },
  },
});
