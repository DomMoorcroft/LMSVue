<template>
  <section >
    <div>
      <select v-model="matchday" style="width:100px;">
        <option v-for="(value, index) in 38" :key="index" :value="index+1">{{ index +1 }}</option>
      </select>

      {{ matchday }}

      <FixtureList></FixtureList>

    </div>
  </section>
</template>

<script>
  import FixtureList from "~/components/FixtureList"

  export default {
    components: {
      FixtureList
    },
    data() {
      return {
        matchday: null
      }
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

</style>
