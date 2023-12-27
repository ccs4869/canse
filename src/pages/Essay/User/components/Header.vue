<template>
  <el-card class="box-card">
    <div class="card-header">
      <el-button @click="handleOpen" style="margin: 0 20px 0 -20px">
        <el-icon v-if="status"><ArrowRightBold /></el-icon>
        <el-icon v-else><ArrowLeftBold /></el-icon>
      </el-button>
      <el-avatar
        size="large"
        :src="UshioPic"
        fit="contain"
        @click="notify"
        class="myAvatar"
      />
      <div>
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          class="mx-1"
          closable
          :type="tag.type"
          @close="delTag(tag.name)"
        >
          {{ tag.name }}
        </el-tag>
      </div>
    </div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item> 用户 </el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in pathName" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="hMsg"></div>
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref, h } from "vue"
import {
  ArrowLeftBold,
  ArrowRightBold,
  ArrowRight
} from "@element-plus/icons-vue"
import { ElNotification } from "element-plus"
import UshioPic from "../../../../assets/images/yui.jpg"
import me_wx from "../../../../assets/images/me-wx.png"
import { useMainStore } from "../../../../store"
import request from "../../../../utils/request"
// import { useStore } from "vuex"

const store = useMainStore()
type pathNameType = [pathFirstName: string, pathSecondName: string]

// const isCollapse = ref(store.state.isCollapse)
type Props = {
  pathName: pathNameType
}
// eslint-disable-next-line no-undef
defineProps<Props>()
const tags = reactive(store.$state.tags)
type tag = {
  name: string
  type: string
}

const delTag = (tagName: string) => {
  let idx = tags.findIndex((item: tag) => item.name == tagName)
  store.delTag(idx)
}

const handleOpen = () => {
  store.changeCollapse()
  status.value = !status.value
}
const status = ref(true)
const notify = () => {
  ElNotification({
    title: "Contact Me",
    message: h("div", { style: "color: teal" }, [
      h("div", [h("i", "You can contact me with here")]),
      h("img", {
        src: me_wx,
        style: {
          width: "150px",
          height: "150px",
          backgroundSize: "contain",
          marginLeft: "10px"
        }
      })
    ])
  })
}
defineExpose({ status })
</script>
<style lang="scss" scoped>
.card-header {
  margin-bottom: 20px;
}
.myAvatar {
  transform: translateX(900px);
}
</style>
