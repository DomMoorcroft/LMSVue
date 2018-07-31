<template>
  <div>
    <div class="nav">
      <button class="burger" @click="toggleSidebar">
        <svg viewBox="0 0 10 10" width="25" height="25">
          <path d="M0,0 10,0 10,2 0,2 0,4 10,4 10,6 0,6 0,8 10,8 10,10 0,10" />
        </svg>
      </button>
      <img src="../static/images/logo/logo.png" alt="Last Man Standing Logo" class="logo">
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

  export default {
    computed: {
      ...mapState({
        showSidebar: state => state.showSidebar
      })
    },
    methods: {
      toggleSidebar() {
        this.$store.commit("TOGGLE_SIDEBAR", !this.showSidebar);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.nav {
  width: 100%;
  height: 80px;
  background-color: $dark-teal;
  padding: 10px;

  text-align: center;

}
.logo {
  max-width: 165px;
  width: 100%;
}

.burger {
  background-color: transparent;
  border: none;
  float: left;
  margin: 16px;
}
.burger:hover {
  cursor: pointer;
}
</style>
