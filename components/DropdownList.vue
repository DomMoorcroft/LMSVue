<template>
  <div class="dropdown-container" :style="{height: containerHeight + 'px'}" :class="{opening: show}">
    <nuxt-link v-for="(item, index) in list" :key="index" :to="item.link" class="link" :style="{height: itemHeight + 'px'}">{{ item.title }}</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        required: true
      },
      show: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        itemHeight: 23
      }
    },
    computed: {
      containerHeight() {
        return this.show ? this.itemHeight*this.list.length : 0;
      }
    }
  }
</script>

<style lang="scss" scoped>

.link {
  display: block;
  margin-left: 15px;
  text-decoration: none;
}

.dropdown-container {
  transform: translateX(-100%);
  transition: transform 0.5s, height 0.5s;
}

.opening {
  transform: translateX(0%);
}


</style>
