<template>
  <section >

    <Header></Header>
    <Sidebar></Sidebar>

    <div class="container">
      <select v-model="matchday" style="width:100px;">
        <option v-for="(value, index) in 38" :key="index" :value="index+1">{{ index +1 }}</option>
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
  import Header from "~/components/Header";
  import FixtureList from "~/components/FixtureList";
  import Sidebar from "~/components/Sidebar";
  import { mapState } from "vuex";

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

<style>
.container {
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
body {
  background-color:#70d8b6;
}
.titles {
  text-align: center;
  margin: 15px 0;
}
</style>
