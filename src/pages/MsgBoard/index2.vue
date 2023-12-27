<template>
  <div>
    <!-- <nav><a href="">All Messages</a></nav> -->
    <h1>Leave me a message...</h1>
    <div class="bubbleContainer">
      <div class="bubbleBody">
        <form id="message" action="addMessage.php" method="post">
          <input type="text" name="formUsername" placeholder="Your name" />
          <textarea name="formMessage" placeholder="Message here"></textarea>
        </form>
      </div>
    </div>
    <button class="btnSendMessage" type="submit" form="message">Send</button>
    <h1>Message Board</h1>
    <ul class="messageList">
      <li class="message">
        <p class="messageTitle">Message Title</p>
        <p class="messageContent">
          里無相世向壓長物臺裡其發院好性全西是龍年立不他早、查向緊人化生今育投，一聽難那……也家球民回一長個為天，資自實心上氣年過正天快系去工求讀怎天化充臺後小全什、文裝怕修還走角書類背險命也成度亮現，活著生什，心園始的致都司自車！微造紀企，指足笑老上由人民得進近事愛商遠此一究己式不輕中酒資？保光車常，到必這和活亞五多口，球的車級蘭散。說院美還好理太西臺客狀位之需少樂們？石問種物做起的備；選這只個年樣是關心國得紙氣她府觀資局臺樣代物病，汽兩中備北晚他頭給信，溫果表失個司如眼定麼！
        </p>
      </li>
      <li class="message">
        <p class="messageTitle">Message Title</p>
        <p class="messageContent">
          里無相世向壓長物臺裡其發院好性全西是龍年立不他早、查向緊人化生今育投，一聽難那……也家球民回一長個為天，資自實心上氣年過正天快系去工求讀怎天化充臺後小全什、文裝怕修還走角書類背險命也成度亮現，活著生什，心園始的致都司自車！微造紀企，指足笑老上由人民得進近事愛商遠此一究己式不輕中酒資？保光車常，到必這和活亞五多口，球的車級蘭散。說院美還好理太西臺客狀位之需少樂們？石問種物做起的備；選這只個年樣是關心國得紙氣她府觀資局臺樣代物病，汽兩中備北晚他頭給信，溫果表失個司如眼定麼！
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Shadows+Into+Light");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");
a {
  text-decoration: none;
}

// body {
//   // background-color: #f0f0f0;
//   background: linear-gradient(
//     135deg,
//     #32c8ff 0%,
//     #549bff 51%,
//     #c38cff 100%
//   ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
//   font-family: "Open Sans";
// }

// nav {
//   position: fixed;
//   height: 60px;
//   background-color: rgba(255, 255, 255, 1);
//   top: 0;
//   left: 0;
//   width: 100%;
//   // z-index: 999;
//   display: flex;
//   flex-flow: row-reverse;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

a {
  display: block;
  line-height: 60px;
  flex: 0 0 auto;
  border-left: 1px solid #aad3e8;
  padding: 0 20px;
  box-sizing: border-box;
}

h1 {
  font-family: "Shadows Into Light";
  font-size: 36px;
  text-align: center;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-top: 100px;
}

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

button.btnSendMessage {
  width: 300px;
  height: 60px;
  display: block;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.2);
  border: 3px solid white;
  outline: none;
  border-radius: 12px;
  font-size: 30px;
  font-family: "Shadows Into Light";
  color: white;
}

ul.messageList {
  width: 80vw;
  margin: 50px auto;
  font-family: "Open Sans";

  li.message {
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 30px;
    box-sizing: border-box;
    margin: 20px;

    p.messageTitle {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    p.messageContent {
      line-height: 24px;
    }
  }
}
</style>
