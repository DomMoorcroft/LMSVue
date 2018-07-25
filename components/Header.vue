<template>
  <div>
    <div class="nav">
      <button class="burger">
        <svg viewBox="0 0 10 10" width="25" height="25">
          <path d="M0,0 10,0 10,2 0,2 0,4 10,4 10,6 0,6 0,8 10,8 10,10 0,10" />
        </svg>
      </button>
      <img src="../static/images/logo/logo.png" alt="Last Man Standing Logo" class="logo">
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.nav {
  width: 100%;
  height: 80px;
  background-color: #5baf94;
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
