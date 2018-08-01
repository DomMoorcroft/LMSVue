<template>
  <div class="container">


      <select v-model="matchday" class="select" v-if="matchday">
        <option v-for="(value, index) in numberOfMatchdays" :key="index" :value="index+1">Matchday {{ index +1 }}</option>
      </select>

      <div v-if="matchdays" class="titles">
        <h1>{{ matchdays.competition.name }} </h1>
        <h2>Matchday {{ matchday }}</h2>
      </div>

      <FixtureList></FixtureList>
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
      this.getNumberOfMatchdays();
      this.getCurrentMatchday();
      this.matchday = this.currentMatchday;
    },
    computed: {
      ...mapState ({
        numberOfMatchdays: state => state.numberOfMatchdays,
        matchdays: state => state.matchday,
        currentMatchday: state => state.currentMatchday
      })
    },
    watch: {
      matchday() {
        this.getMatchDay();
      },
      currentMatchday() {
        this.matchday = this.currentMatchday;
      }
    },
    methods: {
      getNumberOfMatchdays() {
        this.$store.dispatch("GET_NUMBER_OF_MATCHDAYS", this.leagueId);
      },
      getMatchDay() {
        const leagueMatchday = {leagueId:this.leagueId, matchday:this.matchday};

        this.$store.dispatch("GET_MATCHDAY", leagueMatchday);
      },
      getCurrentMatchday() {
        this.$store.dispatch("GET_CURRENT_MATCHDAY", this.leagueId);
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
