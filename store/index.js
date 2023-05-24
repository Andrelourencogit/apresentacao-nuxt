import Vuex from "vuex";

export default () =>
  new Vuex.Store({
    state: {
      testando: "aqui",
    },
    mutations: {
      // Suas mutações aqui
    },
    actions: {
      // Suas ações aqui
    },
    getters: {
      // Seus getters aqui
    },
    modules: {
      // Seus módulos Vuex aqui (se necessário)
    },
  });
