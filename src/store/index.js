import { createStore } from 'vuex';

export default createStore({
  state: {
    showMenu: false,
    categories: ['Focare', 'Termocamine', 'Burlane', 'Bioșeminee', 'Grile', 'Sobe', 'Acumulatoare'],
  },
  mutations: {
    setShowMenu(state, showMenu) {
      state.showMenu = showMenu;
    },
  },
});
