<template>
  <div>
    <button class="send"></button>
    <div class="text">SEND</div>
    <div class="loader"></div>
    <div class="done">SUCCESS</div>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
$blue: #333ddd;
$white: #fff;

body {
  background-color: $blue;

  font-family: "Montserrat";
  font-weight: 700;
}

button {
  outline: 0;

  &.active {
    outline: 0;
  }
}

button.send {
  border: 2px solid $white;
  color: white;
  border-radius: 50px;
  padding: 15px 80px;
  background: transparent;
  position: relative;
  overflow: hidden;
  transform: translateY(-50%);

  .text {
    &.active {
      transform: translateY(-350%) scale(0);
      transition: 0.35s cubic-bezier(0.34, -0.61, 1, 0.64);
    }
  }

  &.active {
    padding: 0px 80px;
    transition: 0.4s cubic-bezier(0.35, -0.77, 0.67, 1.88);
  }

  .loader {
    position: absolute;
    width: calc(0% - 4px);
    height: calc(100% - 4px);
    background-color: $white;
    left: 2px;
    top: 2px;
    border-radius: 50px;

    &.active {
      width: calc(100% - 4px);
      transition: 1.3s ease-in-out;
      transition-delay: 0.5s;
    }
  }

  .done {
    color: $blue;
    margin-top: -20px;
    transform: translateY(300%) scale(0);

    &.active {
      transform: translateY(0%) scale(1);
      transition: 0.4s cubic-bezier(0.34, -0.61, 1, 0.64);
    }
  }

  &.finished {
    padding: 15px 80px;
    transition: 0.4s cubic-bezier(0.35, -0.77, 0.67, 1.88);
  }
}
</style>
