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
    // state: {
    //   matchday: null,
    //   numberOfMatchdays: null,
    //   currentMatchday: null,
    //   showSidebar: false
    // },
    state: {
      leagues: [
         {
          id: 2021,
          fixtures: null,
          numberOfMatchdays: null,
          currentMatchday: null
        },
        {
          id: 2016,
          fixtures: null,
          numberOfMatchdays: null,
          currentMatchday: null
        }
      ],
       showSidebar: false
    },
    actions: {
      GET_FIXTURES({ commit }, { leagueId, matchday, leagueIndex}) {
        var url = `/v2/competitions/${leagueId}/matches?matchday=${matchday}`;

        // Premier League - 2021
        // Cmampionship - 2016

        return axios
          .get(url)
          .then(result => {
            const { data } = result;
            console.log(result);
            commit("SET_FIXTURES", {data, leagueIndex});

            return data;
          })
          .catch(error => {
            console.error(error.status);
          })


      },
      GET_NUMBER_OF_MATCHDAYS({ commit },{leagueId, leagueIndex}) {
        var url = `/v2/competitions/${leagueId}/teams`;

        return axios
          .get(url)
          .then(result => {
            const { data } = result;

            const numberOfMatchdays = getNumberOfMatchdays(data.teams.length);

            commit("SET_NUMBER_OF_MATCHDAYS", {numberOfMatchdays, leagueId, leagueIndex});

            return data;
          })
          .catch(error => {
            console.error(error.status);
          })
      },
      GET_CURRENT_MATCHDAY({ commit }, {leagueId, leagueIndex}) {
        var url = `/v2/competitions/${leagueId}`;

        return axios
          .get(url)
          .then(result => {
            const { data } = result;

            let currentMatchday = data.currentSeason.currentMatchday;

            if(currentMatchday === null) {
              currentMatchday = 1;
            }

            commit("SET_CURRENT_MATCHDAY", {currentMatchday, leagueId, leagueIndex});



            return data;
          })
          .catch(error => {
            console.error(error.status);
          })
      }
    },
    mutations: {
      SET_FIXTURES(state, {data, leagueIndex}) {
        console.log("data", data);
        state.leagues[leagueIndex].fixtures = data;
      },
      SET_NUMBER_OF_MATCHDAYS(state, {numberOfMatchdays, leagueId, leagueIndex}) {
        console.log("numberOfMatchdays", numberOfMatchdays);
        state.leagues[leagueIndex].numberOfMatchdays = numberOfMatchdays;
      },
      SET_CURRENT_MATCHDAY(state, {currentMatchday, leagueId, leagueIndex}) {
        console.log("currentmatchday", currentMatchday);
        state.leagues[leagueIndex].currentMatchday = currentMatchday;
      },
      TOGGLE_SIDEBAR(state, data) {
        state.showSidebar = data;
      },
    }
  })
}

export default createStore;
