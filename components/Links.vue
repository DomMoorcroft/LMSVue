<template>
  <div class="links-container">
    <a href="#">Home</a>
    <button class="dropdown" @click="toggleDropdown()">
      Competitions
      <span><font-awesome-icon icon="user-circle" /></span>
    </button>
    <div class="dropdown-list-container">
      <transition name="slide">
      <div class="dropdown-list" v-if="dropdownActive">
        <a href="#">Premier League</a>
        <a href="#">Championship</a>
      </div>
    </transition>
    </div>
    <a href="#">Tester</a>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        dropdownActive: false
      }
    },
    methods: {
      toggleDropdown() {

        this.dropdownActive = !this.dropdownActive;
        console.log(this.dropdownActive);
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.links-container {
  padding: 0 6px;
}

button {
  background-color: transparent;
  border: none;
  padding: 0;
  display: block;

  &:hover {
    cursor: pointer;
  }

}
a {
  text-decoration: none;
  display: block;
}
.dropdown {

}
.dropdown-list-container {
  overflow: hidden;
}
.dropdown-list {
  margin-left: 15px;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(0, -100%);
  height: auto;

}
.slide-leave-to {
  transform: translate(0, -100%);
}

</style>
