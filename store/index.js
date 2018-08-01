import vuex from "vuex"
import axios from "axios"

axios.defaults.baseURL = "http://api.football-data.org"
axios.defaults.headers = {
  "X-Auth-Token": "81363f288f3e48b7a7a4be9c64368a44"
}

const getNumberOfMatchdays = (teams) => {
  return (teams*2)-2;
}

const createStore = () => {
  return new vuex.Store({
    state: {
      matchday: null,
      numberOfMatchdays: null,
      currentMatchday: null,
      showSidebar: false
    },
    actions: {
      GET_MATCHDAY({ commit }, { leagueId, matchday}) {
        var url = `/v2/competitions/${leagueId}/matches?matchday=${matchday}`;
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


      },
      GET_NUMBER_OF_MATCHDAYS({ commit },leagueId) {
        var url = `/v2/competitions/${leagueId}/teams`;

        return axios
          .get(url)
          .then(result => {
            const { data } = result;

            const noOfMatchdays = getNumberOfMatchdays(data.teams.length);

            commit("SET_NUMBER_OF_MATCHDAYS", noOfMatchdays);

            return data;
          })
          .catch(error => {
            console.error(error.status);
          })
      },
      GET_CURRENT_MATCHDAY({ commit }, leagueId) {
        var url = `/v2/competitions/${leagueId}`;

        return axios
          .get(url)
          .then(result => {
            const { data } = result;

            let currentMatchday = data.currentSeason.currentMatchday;

            if(currentMatchday === null) {
              currentMatchday = 1;
            }

            commit("SET_CURRENT_MATCHDAY", currentMatchday);



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
      },
      SET_NUMBER_OF_MATCHDAYS(state, data) {
        state.numberOfMatchdays = data;
      },
      SET_CURRENT_MATCHDAY(state, data) {
        state.currentMatchday = data;
      },
      TOGGLE_SIDEBAR(state, data) {
        state.showSidebar = data;
      },
    }
  })
}

export default createStore;
