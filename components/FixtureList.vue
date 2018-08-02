<template>
  <div v-if="weeklyFixtures && weeklyMatches">

    <div class="fixtureList">
      <Fixture v-for="(match, index) in weeklyMatches" :key="index" :match="match"></Fixture>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import Fixture from "~/components/Fixture"

export default {
  components: {
    Fixture
  },
  props: {
    leagueId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isHidden: true
    }
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
    weeklyFixtures() {
      return this.selectedLeague.fixtures;
    },
    matchdayNumber() {
      return this.selectedLeague.fixtures.filters;
    },
    weeklyMatches() {
      return this.selectedLeague.fixtures.matches;
    }
  }

/*
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
  }
*/


};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

</style>
