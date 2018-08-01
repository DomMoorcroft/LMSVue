<template>
  <div>
    <League :leagueId="leagueId" v-if="leagueId"/>
  </div>
</template>

<script>
  import League from "~/components/League";

  export default {
    components: {
      League
    },
    data() {
      return {
        leagueId: this.$route.params.id
      }

    }
  }
</script>

<style scoped>

</style>
