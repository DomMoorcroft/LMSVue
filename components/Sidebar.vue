<template>
  <transition name="slide">
    <div v-if="showSidebar" class="sidebar">

      <div class="sidebar-inner">


        <div class="sidebar-button">
          <button class="burger" @click="toggleSidebar">
            <svg viewBox="0 0 10 10" width="25" height="25">
              <path d="M0,0 10,0 10,2 0,2 0,4 10,4 10,6 0,6 0,8 10,8 10,10 0,10" />
            </svg>
          </button>
        </div>

      <div class="sidebar-content">
        <Login></Login>
        <hr>
        <Links></Links>

      </div>

      </div>

    </div>
  </transition>

</template>

<script>
import { mapState } from "vuex";
import Links from "~/components/Links";
import Login from "~/components/Login";

  export default {
    components: {
      Links,
      Login
    },
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

.sidebar {
  position: absolute;
  top:0;
  height: 100%;
  background-color: $dark-teal;
  width: 320px;
}
.sidebar-inner {
  display: flex;
  flex-direction: column;
}

.sidebar-button {
  display: flex;
  flex-direction: row-reverse;
}
.sidebar-content {
  margin: 10px 30px;

}

.burger {
  background-color: transparent;
  border: none;
  float: left;
  margin: 26px;
}
.burger:hover {
  cursor: pointer;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(-100%, 0);
  width: auto;
  padding: 0 10px;

}
.slide-leave-to {
  padding: 0 10px;
  transform: translate(-100%, 0);
}

hr {
  margin: 10px 0;
  border-color:$teal;
}

</style>
