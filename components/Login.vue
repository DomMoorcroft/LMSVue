<template>
  <div>
    <button class="login-button">
      Log in
      <font-awesome-icon icon="user-circle" />
    </button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.login-button {
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
}

</style>
