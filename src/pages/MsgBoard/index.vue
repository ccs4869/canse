<template>
  <div>
    <h1>Leave me a message...</h1>

    <div class="bubbleContainer">
      <div class="bubbleBody">
        <form>
          <input type="text" placeholder="Your name" v-model="uname" />
          <textarea placeholder="Message here" v-model="msg"></textarea>
          <button @click="sendMessage">send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import SendFly from "./components/SendFly.vue"
import SendLoad from "./components/SendLoad.vue"
const uname = ref("")
const msg = ref("")
const sendMessage = (e: any) => {
  e.preventDefault()
  console.log({
    uname: uname.value,
    msg: msg.value
  })
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Shadows+Into+Light");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");
div.bubbleContainer {
  position: relative;
  width: 60vw;
  height: 350px;
  margin: 50px auto 0;

  div.bubbleBody,
  &::after {
    position: absolute;
  }

  div.bubbleBody {
    width: 100%;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    form {
      padding: 30px;
      box-sizing: border-box;

      & * {
        display: block;
        width: 100%;
        border: none;
        outline: none;
        font-size: 20px;
        color: #0d3544;
        padding: 10px;
        box-sizing: border-box;
      }

      input {
        height: 50px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      }

      textarea {
        height: 180px;
        resize: none;
      }
    }
  }

  &::after {
    content: "";
    width: 0px;
    height: 0px;
    top: 300px;
    left: 80px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid white;
  }
}

h1 {
  font-family: "Shadows Into Light";
  font-size: 36px;
  text-align: center;
  // color: #000;
  opacity: 0.7;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-top: 100px;
}
</style>
