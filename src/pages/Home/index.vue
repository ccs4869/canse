<template>
  <main class="main">
    <div>
      <h1 class="main-title">Cansen Chen</h1>
    </div>
    <article class="main-article">
      <p>{{ $t("intro.firstP") }}</p>
      <p>
        {{ $t("intro.secP") }}<br />
        {{ $t("intro.tirP") }} <br />
        {{ $t("intro.forP") }} <br />
        <!-- This time I will start to move forward. <br />
        web design inspiration from teacher Anthony Fu. -->
      </p>
      <p>{{ $t("intro.fiveP") }}</p>
      <p style="float: right">{{ $t("intro.dateP") }}</p>
    </article>
  </main>
</template>

<script setup lang="ts">
import { t } from "@wangeditor/core"
import { ref } from "vue"
</script>
<style lang="scss" scoped>
// @import "./index.scss";
.main {
  font-family: "Inter";
  // color: #555;
  padding: 40px 28px;
  padding-top: 0;
  width: 40.625rem;
  margin: 0 auto;
  &-title {
    font-size: 36px;
    margin-bottom: 30px;
    // color: black;
  }
  &-article {
    margin: 20px 0;
    opacity: 0.8;
    p {
      line-height: 1.8;
    }
  }
}
@media (max-width: 720px) {
  .main {
    font-family: "Inter";
    /* color: #555; */
    // padding: 40px 45px;
    padding: 0 10%;
    // padding-top: 40px;
    width: 80%;
    margin: 0 auto;
    &-title {
      font-size: 36px;
      margin-bottom: 30px;
      // color: black;
    }
    &-article {
      margin: 20px 0;
      opacity: 0.8;
      p {
        line-height: 1.8;
      }
    }
  }
}
</style>
