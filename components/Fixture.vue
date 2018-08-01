<template>
  <div class="fixture" @click="getStats">
    <div class="fixtureContainer">
      <div id="homeTeam" class="homeTeam">
        {{ match.homeTeam.name }}
      </div>
      <div id="homeTeamScore" class="score">{{ match.score.fullTime.homeTeam | score }}</div>
      <div class="divider"> &mdash; </div>
      <div id="awayTeamScore" class="score">{{ match.score.fullTime.awayTeam | score }}</div>
      <div id="awayTeam" class="awayTeam">
        {{ match.awayTeam.name }}
      </div>
    </div>

    <div class="statsContainer">
      <transition name="slide">
        <div class="stats" v-if="!isHidden">
          <div class="homeTeamStats">
              DIS IS STATS YO
          </div>
          <div class="awayTeamStats">
            DIS IS MORE STATS YO
          </div>
        </div>
      </transition>
    </div>


  </div>
</template>

<script>
  export default {
    props: {
      match: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        isHidden: true
      }
    },
    methods: {
      getStats() {
        this.isHidden = !this.isHidden;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.fixture {
  display: flex;
  text-align: center;
  margin: 5px;
  flex-direction: column;

  border: 1px solid $teal;
  background-color:$teal;

  overflow: hidden;
}
.fixture:hover {
  border: 1px solid $dark-teal;
  background-color: $dark-teal;
  cursor: pointer;
}



.homeTeam, .awayTeam {
  flex: 1 1 0;
}

.score {
  font-size: 1em;
}
.divider {
  padding: 0 10px;
}
.hidden {
  display: none;
}
.stats {
  display: flex;

  transition: all .5s ease;
  height: auto;
  padding: 10px;
}

.awayTeamStats, .homeTeamStats {
  flex: 1 1 0;
}
.statsContainer {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.fixtureContainer {
  display: flex;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(0, -100%);
  height: auto;
  padding: 0 10px;

}
.slide-leave-to {
  height: 0;
  padding: 0 10px;
  transform: translate(0, -100%);
}
</style>
