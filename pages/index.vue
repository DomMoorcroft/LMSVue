<template>
  <section >


    <League :leagueId="2021"></League>

  </section>
</template>

<script>
  import Vue from "vue";
  import League from "~/components/League";
  import { mapState } from "vuex";

  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  library.add(faUserCircle);

  Vue.component('font-awesome-icon', FontAwesomeIcon);

  export default {
    components: {
      League
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
        this.$store.dispatch("FIXTURES", this.matchday);
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





</style>
