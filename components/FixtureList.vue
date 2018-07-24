<template>
  <div v-if="matchday && matchdayMatches">

    <table>
      <thead>
        <tr>
          <th>home team</th>
          <th>away team</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(value, index) in matchdayMatches" :key="index">
        <td>{{ value.homeTeam.name }}</td>
        <td>{{ value.awayTeam.name }}</td>
      </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      matchdayNumber: state => state.matchday.filters,
      matchday: state => state.matchday,
      matchdayMatches: state => state.matchday.matches
    })
  }
};
</script>

<style scoped>
</style>
