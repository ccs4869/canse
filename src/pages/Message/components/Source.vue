<template>
  <div>
    <div class="arts">
      <div class="arts-item" v-for="item in source" :key="item.id">
        <div class="arts-item-title">{{ item.title }}</div>
        <div class="arts-item-content">
          <div class="arts-item-content-img"></div>
          <div class="arts-item-content-text" v-html="item.content"></div>
        </div>
        <div class="arts-item-comment">
          <a>support</a>
          <a @click="showComment">comment</a>
          <a>hide</a>
        </div>
        <div class="arts-item-commentContent" v-show="isShow">
          <h2>comment</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import request from "../../../utils/request"
const { data: res } = await request.getArtContent()
// source = res.data
const source = reactive(res.data)
const isShow = ref(false)
const showComment = () => {
  isShow.value = !isShow.value
}
</script>
<style lang="scss" scoped>
.arts {
  font-family: "inter";
  margin-top: -20px;
  width: 750px;

  padding: 20px;
  &-item {
    padding: 10px;
    background-color: #fff;
    margin-left: 50px;
    margin-top: 18px;
    width: 654px;
    height: 200px;
    &-title {
      // margin: 0;
      padding: 5px 0;
      height: 29px;
      font-size: 20px;
      font-weight: 700;
    }
    &-content {
      display: flex;
      // width: 105px;
      height: 140px;
      &-img {
        width: 190px;
        height: 130px;
        background-size: contain;
        background-image: url("@/assets/images/rei.png");
      }
      &-text {
        flex: 1;
        height: 130px;
        margin-left: 20px;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
    }
    &-comment {
      height: 52px;
      a {
        margin-right: 30px;
      }
    }
  }
}
</style>
