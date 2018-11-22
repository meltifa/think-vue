<template>
  <header class="header">
    <div class="back-button" onclick="window.history.back();"></div>
    DEMO
  </header>
</template>

<script>
export default {};
</script>
<style lang="scss">
.header {
  background-color: #fe6847;
  color: #fff;
  position: relative;
  height: 46px;
  line-height: 46px;
  font-size: 19px;
  text-align: center;
}
.back-button {
  mask: url('../assets/arrow.svg') no-repeat center;
  position: absolute;
  width: 40px;
  height: 46px;
  top: 0;
  left: 0;
  transform: rotate(90deg);
  background-color: #fff;
}
</style>
