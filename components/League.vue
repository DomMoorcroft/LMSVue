<template>
  <div class="container">


      <select v-model="matchday" class="select" v-if="matchday">
        <option v-for="(value, index) in numberOfMatchdays" :key="index" :value="index+1">Matchday {{ index +1 }}</option>
      </select>

      <div v-if="weeklyFixtures" class="titles">
        <h1>{{ weeklyFixtures.competition.name }} </h1>
        <h2>Matchday {{ matchday }}</h2>
      </div>

      <FixtureList :leagueId="leagueId"></FixtureList>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FixtureList from "~/components/FixtureList"

  export default {
    components: {
      FixtureList
    },
    props: {
      leagueId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        matchday: null
      }
    },
    mounted() {
      // this.getFixtures();
      this.getNumberOfMatchdays();
      this.getCurrentMatchday();
      this.matchday = this.currentMatchday;
    },
    computed: {
      ...mapState ({
        leagues: state => state.leagues
      }),
      selectedLeague() {
        return this.leagues.filter(item => item.id === this.leagueId)[0];
      },
      leagueIndex() {
        return this.leagues.indexOf(this.selectedLeague);
      },
      numberOfMatchdays() {
        return this.selectedLeague.numberOfMatchdays;
      },
      weeklyFixtures() {
        return this.selectedLeague.fixtures;
      },
      currentMatchday() {
        return this.selectedLeague.currentMatchday;
      }
    },
    watch: {
      matchday() {

        // const storeMatchday = parseInt(this.weeklyFixtures.filters.matchday, 10);
        // if(this.matchday !== storeMatchday || this.leagueId !== this.leagueIndex) {
          this.getFixtures();
        // }

      },
      currentMatchday() {
        this.matchday = this.currentMatchday;
      }
    },
    methods: {
      getNumberOfMatchdays() {
        const LeagueIdIndex={leagueId:this.leagueId, leagueIndex: this.leagueIndex};

        this.$store.dispatch("GET_NUMBER_OF_MATCHDAYS", LeagueIdIndex);
      },
      getFixtures() {
        const leagueMatchday = {leagueId:this.leagueId, matchday:this.matchday, leagueIndex: this.leagueIndex};

        this.$store.dispatch("GET_FIXTURES", leagueMatchday);
      },
      getCurrentMatchday() {
        const LeagueIdIndex={leagueId:this.leagueId, leagueIndex: this.leagueIndex};

        this.$store.dispatch("GET_CURRENT_MATCHDAY", LeagueIdIndex);
      }
    }
  }
</script>

<style lang="scss" scoped>
.titles {
  text-align: center;
  margin: 15px 0;
}
</style>
