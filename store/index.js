import vuex from "vuex"

import axios from "axios"

axios.defaults.baseURL = "http://api.football-data.org"
axios.defaults.headers = {
  "X-Auth-Token": "81363f288f3e48b7a7a4be9c64368a44"
}

const createStore = () => {
  return new vuex.Store({
    state: {
      matchday: null
    },
    actions: {
      GET_MATCHDAY({ commit }, matchdayId) {
        var url = `/v2/competitions/2021/matches?matchday=${matchdayId}`;
        // Premier League - 2021
        // Cmampionship - 2016
        return axios
          .get(url)
          .then(result => {
            const { data } = result;

            commit("SET_MATCHDAY", data);

            return data;
          })
          .catch(error => {
            console.error(error.status);
          })


      }
    },
    mutations: {
      SET_MATCHDAY(state, data) {
        state.matchday = data;
      }
    }
  })
}

export default createStore;
