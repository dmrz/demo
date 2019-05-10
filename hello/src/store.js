import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

const getVueReponInfo = async () => await axios.get("https://api.github.com/repos/vuejs/vue");

export default new Vuex.Store({
  state: {
    counter: 0,
    vueStarsCountLoadInProgress: false,
  },
  getters: {
    counterSquared: state => state.counter * state.counter,
  },
  mutations: {
    incrementCounter(state) {
      state.counter++;
    },
    decrementCounter(state) {
      state.counter--;
    },
    vueStarsCountIsLoading(state) {
      state.vueStarsCountLoadInProgress = true;
    },
    vueStarsCountIsLoaded(state) {
      state.vueStarsCountLoadInProgress = false;
    },
    incrementCounterBy(state, value) {
      state.counter += value;
    },
    decrementCounterBy(state, value) {
      state.counter -= value;
    },
  },
  actions: {
    async incrementCounterByVueStarsCount({ commit }) {
      commit("vueStarsCountIsLoading");
      try {
        const { data: { stargazers_count } } = await getVueReponInfo();
        commit("incrementCounterBy", stargazers_count);
      } finally {
        commit("vueStarsCountIsLoaded");
      }
    },
    async decrementCounterByVueStarsCount({ commit }) {
      commit("vueStarsCountIsLoading");
      try {
        const { data: { stargazers_count } } = await getVueReponInfo();
        commit("decrementCounterBy", stargazers_count);
      } finally {
        commit("vueStarsCountIsLoaded");
      }
    },
  },
  plugins: [createLogger()],
})