<template>
  <section >
    <div>
      <select v-model="matchday" style="width:100px;">
        <option v-for="(value, index) in 38" :key="index" :value="index+1">{{ index +1 }}</option>
      </select>

      {{ matchday }}

    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        matchday: null
      }
    },
    watch: {
      matchday(value) {
        this.getMatchDay();
      }
    },
    methods: {
      getMatchDay() {
        this.$store.dispatch("GET_MATCHDAY", this.matchday).then(response => {
          if(response) {
            this.store.commit("SET_MATCHDAY", response.data);
          }
        })
      }
    }
  }
</script>

<style>

</style>
