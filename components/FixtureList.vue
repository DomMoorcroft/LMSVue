<template>
  <div v-if="matchday && matchdayMatches">

    <div class="fixtureList">
      <Fixture v-for="(match, index) in matchdayMatches" :key="index" :match="match"></Fixture>
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
  data() {
    return {
      isHidden: true
    }
  },
  computed: {
    ...mapState({
      matchdayNumber: state => state.matchday.filters,
      matchday: state => state.matchday,
      matchdayMatches: state => state.matchday.matches
    })
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

</style>
