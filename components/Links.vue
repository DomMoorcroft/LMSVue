<template>
  <div class="links-container">
    <transition-group name="slide-list" tag="div">

      <a href="#" :key="1">Home</a>

      <button class="dropdown" @click="toggleDropdown()" :key="2">
        Competitions
      </button>

      <div class="dropdown-list-container" :key="3">
          <DropdownList :show="dropdownActive" :list="list"></DropdownList>
      </div>

      <a href="#" :key="7">Tester</a>

    </transition-group>


  </div>
</template>

<script>
  import DropdownList from "~/components/DropdownList";

  export default {
    components: {
      DropdownList
    },
    data() {
      return {
        dropdownActive: false,
        list: [
          {
            title: "Premier League",
            link: "#"
          },
          {
            title: "Championship",
            link: "#"
          }
        ]
      }
    },
    methods: {
      toggleDropdown() {
        this.dropdownActive = !this.dropdownActive;
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
}
.slide-leave-to {
  transform: translate(0, -100%);
}



.slide-list-move {
  transition: transform 0.5s, height 0.5s;
}

.slide-list-enter {
  transform: translate(0, -100%);
  height: 100px;
}
.slide-list-leave-to {
  transform: translate(0, -100%);
  height: 0;
}

</style>
