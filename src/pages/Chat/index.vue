<template>
  <div>
    <ul class="chat-thread">
      <li>Are we meeting today?</li>
      <li>yes, what time suits you?</li>
      <li>I was thinking after lunch, I have a meeting in the morning</li>
      <li>Are we meeting today?</li>
      <li>yes, what time suits you?</li>
      <li>I was thinking after lunch, I have a meeting in the morning</li>
      <li>Are we meeting today?</li>
      <li>yes, what time suits you?</li>
      <li>I was thinking after lunch, I have a meeting in the morning</li>
      <li>Are we meeting today?</li>
      <li>yes, what time suits you?</li>
      <li>I was thinking after lunch, I have a meeting in the morning</li>
    </ul>
    <form class="chat-window">
      <input
        class="chat-window-message"
        name="chat-window-message"
        type="text"
        autocomplete="off"
        autofocus
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
.chat-thread {
  width: 50%;
  height: 520px;
}

.chat-thread {
  margin: 24px auto 0 auto;
  padding: 0 20px 0 0;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;
}

.chat-thread li:nth-child(odd) {
  animation: show-chat-odd 0.15s 1 ease-in;
  -moz-animation: show-chat-odd 0.15s 1 ease-in;
  -webkit-animation: show-chat-odd 0.15s 1 ease-in;
  float: right;
  margin-right: 80px;
  color: #0ad5c1;
}
.chat-thread li:nth-child(even) {
  animation: show-chat-even 0.15s 1 ease-in;
  -moz-animation: show-chat-even 0.15s 1 ease-in;
  -webkit-animation: show-chat-even 0.15s 1 ease-in;
  float: left;
  margin-left: 80px;
  color: #0ec879;
}

.chat-thread li {
  position: relative;
  clear: both;
  display: inline-block;
  padding: 16px 40px 16px 20px;
  margin: 0 0 20px 0;
  font: 16px/20px "Noto Sans", sans-serif;
  border-radius: 10px;
  background-color: rgba(25, 147, 147, 0.2);
}
.chat-thread li:nth-child(odd):before {
  right: -80px;
  background-image: url("@/assets/images/danf.jpg");
  background-size: cover;
}
.chat-thread li:before {
  position: absolute;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  content: "";
}

.chat-thread li:nth-child(odd):after {
  border-right: 15px solid transparent;
  right: -15px;
}
.chat-thread li:after {
  position: absolute;
  top: 15px;
  content: "";
  width: 0;
  height: 0;
  border-top: 15px solid rgba(25, 147, 147, 0.2);
}

.chat-thread li:nth-child(even):before {
  left: -80px;
  background-image: url("@/assets/images/canse.jpg");
  background-size: cover;
}

.chat-thread li:before {
  position: absolute;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  content: "";
}

.chat-thread li:nth-child(even):after {
  border-left: 15px solid transparent;
  left: -15px;
}

.chat-thread li:after {
  position: absolute;
  top: 15px;
  content: "";
  width: 0;
  height: 0;
  border-top: 15px solid rgba(25, 147, 147, 0.2);
}

.chat-window {
  left: 25%;
  width: 50%;
}
.chat-window {
  position: fixed;
  bottom: 18px;
}

.chat-window-message {
  width: 100%;
  height: 48px;
  font: 32px/48px "Noto Sans", sans-serif;
  background: none;
  color: #0ad5c1;
  border: 0;
  border-bottom: 1px solid rgba(25, 147, 147, 0.2);
  outline: none;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track-piece {
  background-color: transparent;
  -webkit-border-radius: 3px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 12px;
  background-color: #e4e4e7;
  -webkit-border-radius: 3px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 12px;
  background-color: #e4e4e7;
  -webkit-border-radius: 6px;
}
</style>
