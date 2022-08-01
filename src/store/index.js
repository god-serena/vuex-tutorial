//This index.js serves as an entry point to our Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos';

//Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos,
  }
})
