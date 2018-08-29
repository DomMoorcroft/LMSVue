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
        leagueId: parseInt(this.$route.params.id, 10)
      }

    }
  }
</script>

<style scoped>

</style>
