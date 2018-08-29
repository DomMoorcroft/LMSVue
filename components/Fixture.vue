<template>
  <div class="fixture" @click="getStats">
    <div class="fixtureContainer">

      <div class="gradientContainer" :class="getTeamClassImage(match.homeTeam.name)">
        <div id="homeTeam" class="homeTeam">{{ match.homeTeam.name }}</div>
      </div>
      <div class="gradientContainer">
        <div id="homeTeamImage" class="homeTeamImage"></div>
      </div>
      <div class="gradientContainer score">
        <div id="homeTeamScore">{{ match.score.fullTime.homeTeam | score }}</div>
      </div>


      <div class="gradientContainer">
        <div class="divider"> V </div>
      </div>


      <div class="gradientContainer score">
        <div id="awayTeamScore">{{ match.score.fullTime.awayTeam | score }}</div>
      </div>
      <div class="gradientContainer">
        <div id="awayTeamImage" class="awayTeamImage"></div>
      </div>
      <div class="gradientContainer" :class="getTeamClassImage(match.awayTeam.name)">
        <div id="awayTeam" class="awayTeam">{{ match.awayTeam.name }}</div>
      </div>

    </div>

    <!-- <div class="statsContainer">
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
    </div> -->


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
      },
      getTeamClassImage(team) {
        switch(team) {
          case "Everton FC":
            return "everton"
          case "Wolverhampton Wanderers FC":
            return "wolves"
          case "Manchester City FC":
            return "man-city"
          case "Arsenal FC":
            return "arsenal"
          case "West Ham United FC":
            return "westham"
          case "Huddersfield Town AFC":
            return "huddersfield"
          case "Cardiff City FC":
            return "cardiff"
          case "Southampton FC":
            return "southampton"
          case "Leicester City FC":
            return "leicester"
          case "AFC Bournemouth":
            return "bournemouth"
          case "Liverpool FC":
            return "shite"
          case "Brighton & Hove Albion FC":
            return "brighton"
          case "Watford FC":
            return "watford"
          case "Crystal Palace FC":
            return "palace"
          case "Fulham FC":
            return "fulham"
          case "Burnley FC":
            return "burnley"
          case "Newcastle United FC":
            return "newcastle"
          case "Chelsea FC":
            return "chelsea"
          case "Manchester United FC":
            return "man-uwe"
          case "Tottenham Hotspur FC":
            return "tottenham"
          default:
            return ""
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.fixture {
  display: flex;
  text-align: center;
  font-weight: 700;
  margin: 15px;
  flex-direction: column;

  background-color:$gray;

  overflow: hidden;

  -ms-transform: skew(-30deg);
  -webkit-transform: skew(-30deg);
  transform: skew(-30deg);
}



.homeTeam, .awayTeam {
  flex: 1 1 0;
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

  -ms-transform: skew(30deg);
  -webkit-transform: skew(30deg);
  transform: skew(30deg);
}

.gradientContainer {
  padding: 15px;
  -ms-transform: skew(-30deg);
  -webkit-transform: skew(-30deg);
  transform: skew(-30deg);

  div {
    -ms-transform: skew(30deg);
    -webkit-transform: skew(30deg);
    transform: skew(30deg);
  }

  &:nth-child(1) {
    width: 35%;
  }
  &:nth-child(2) {
    width: 5%;
  }
  &:nth-child(3) {
    width: 7.5%;
  }
  &:nth-child(4) {
    width: 5%;
    background-color: $light-gray;
  }
  &:nth-child(5) {
    width: 7.5%;
  }
  &:nth-child(6) {
    width: 5%;
  }
  &:nth-child(7) {
    width: 35%;
  }
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
