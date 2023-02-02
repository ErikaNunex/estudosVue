import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store({
  state: {
    usuarios: {
      usuario: "Admin",
      senha: "123456",
    },
    isLogged: false,
    
  },
  actions: {
    login({ state, commit }, modelLogin) {
      if (
        modelLogin.usuario == state.usuarios.usuario &&
        modelLogin.senha == state.usuarios.senha
      ) {
        localStorage.setItem("usuarios", modelLogin);
        commit("setLogin", true);
        router.push("/lista");
      } else {
        alert("usuario não existe");
      }
    },
    logout({ commit }) {
      localStorage.removeItem("usuarios");
      commit("setLogout", false);
      router.push("/");
    },
  },
  getters: {
    getLogin(state) {
      return state.isLogged;
    },
  },
  mutations: {
    setLogin(state, response) {
      state.isLogged = response;
    },
    setLogout(state, response) {
      state.isLogged = response;
    },
  },
  plugins : [ vuexLocal.plugin ]
});

export default store;
