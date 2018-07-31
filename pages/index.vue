<template>
  <section >

    <Header></Header>
    <Sidebar></Sidebar>

    <div class="container">
      <select v-model="matchday" class="select">
        <option v-for="(value, index) in 38" :key="index" :value="index+1">Matchday {{ index +1 }}</option>
        <font-awesome-icon icon="user-circle" />
      </select>

      <div v-if="matchdays" class="titles">
        <h1>{{ matchdays.competition.name }} </h1>
        <h2>Matchday {{ matchday }}</h2>
      </div>


      <FixtureList></FixtureList>

    </div>
  </section>
</template>

<script>
  import Vue from "vue";
  import Header from "~/components/Header";
  import FixtureList from "~/components/FixtureList";
  import Sidebar from "~/components/Sidebar";
  import { mapState } from "vuex";

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  library.add(faUserCircle);

  Vue.component('font-awesome-icon', FontAwesomeIcon);

  export default {
    components: {
      Header,
      FixtureList,
      Sidebar
    },
    data() {
      return {
        matchday: null
      }
    },
    computed: {
      ...mapState ({
        matchdays: state => state.matchday,
        showSidebar: state => state.showSidebar
      })
    },
    watch: {
      matchday() {
        this.getMatchDay();
      }
    },
    methods: {
      getMatchDay() {
        this.$store.dispatch("GET_MATCHDAY", this.matchday);
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.container {
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
body {
  background-color: $teal;
}
.titles {
  text-align: center;
  margin: 15px 0;
}



</style>
