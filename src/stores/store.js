import { createStore } from 'vuex';

export default createStore({
  state: {
    idioma: 'pt', // idioma inicial
  },
  mutations: {
    mudarIdioma(state, novoIdioma) {
      state.idioma = novoIdioma;
    }
  },
  actions: {
    setIdioma({ commit }, novoIdioma) {
      commit('mudarIdioma', novoIdioma);
    }
  },
  getters: {
    idioma(state) {
      return state.idioma;
    }
  }
});
