<template>
  <div>
    <div class="user-container">
      <div class="tab">
        <div class="tab-img tab-img-close">
          <!-- <img src="@/assets/images/rei.png" /> -->
        </div>
        <el-menu :collapse="status" class="tab-menu" collapse-transition>
          <el-sub-menu :index="item.id" v-for="item in tabInfo" :key="item.id">
            <template #title>
              <el-icon
                class="iconfont"
                >{{ String.fromCharCode(parseInt(item.icon as string,16)) }}</el-icon
              >
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              :index="sub_item.id"
              v-for="sub_item in item.children"
              :key="sub_item.id"
              @click="tabClick(sub_item)"
            >
              <el-icon
                class="iconfont"
                >{{ String.fromCharCode(parseInt(sub_item.icon as string,16)) }}</el-icon
              >
              <span>{{ sub_item.sub_title }}</span>
            </el-menu-item>
          </el-sub-menu>
          <!-- <el-sub-menu index="2">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>Navigator two</span>
          </template>
          <el-menu-item index="2-1">2-1</el-menu-item>
          <el-menu-item index="2-2">2-2</el-menu-item>
          <el-menu-item index="2-3">2-3</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><IconMenu /></el-icon>
            <span>Navigator three</span>
          </template>
          <el-menu-item index="3-1">3-1</el-menu-item>
          <el-menu-item index="3-2">3-2</el-menu-item>
          <el-menu-item index="3-3">3-3</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>Navigator four</span>
          </template>
          <el-menu-item index="4-1">4-1</el-menu-item>
          <el-menu-item index="4-2">4-2</el-menu-item>
          <el-menu-item index="4-3">4-3</el-menu-item>
        </el-sub-menu> -->
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, computed } from "vue"

import { useRouter } from "vue-router"
// import request from ''
import request from "../../../../utils/request"

import { useMainStore } from "../../../../store"

// import axios from "axios"
// import request from "../../../../utils/request"
// import { useStore } from "vuex"

type Props = {
  status: boolean
}
defineProps<Props>()
const router = useRouter()
const store = useMainStore()

// const isCollapse = ref<boolean>(store.state.isCollapse)

// const ms_Info = reactive<info[]>([
//   { id: "1-1", sub_title: "代办事项", path: "/user/todo" },
//   { id: "1-2", sub_title: "评论信息", path: "/user/message" },
//   { id: "1-3", sub_title: "数据展示", path: "/user/data" }
// ])
type info = {
  id: string
  sub_title: string
  path: string
  icon?: string
}
type ms_info = {
  id: string
  title: string
  icon?: string
  path: string
  children?: info[]
}

const { data } = await request.getTabInfo()
console.log(data)

const tabInfo = reactive<ms_info[]>(data)

const singlePath = computed<Array<string>>(() =>
  store.$state.routeFullPath.split("/")
)
// let singlePath = store.state.routeFullPath.split("/")
const currentPath = computed(() =>
  tabInfo.find((el) => el.path.split("/")[1] == singlePath.value[1])
)
// let currentPath = tabInfo.find((el) => el.path.split("/")[2] == singlePath[2])
const pathFirstName = computed(() => currentPath.value?.title)

const pathSecondName = computed(
  () =>
    currentPath.value?.children?.find(
      (el) => el.path.split("/")[2] == singlePath.value[2]
    )?.sub_title
)
let imgDoc: HTMLElement
onMounted(() => {
  imgDoc = document.querySelector(".tab-img") as HTMLElement
  store.$state.imgDoc = imgDoc
  console.log(
    store.$state.routeFullPath,
    store.$state.routeFullPath.split("/"),
    pathFirstName.value,
    pathSecondName.value
  )
})
const tags = reactive(store.$state.tags)
type tag = {
  name: string
  type: string
}

const tabClick = (item: info) => {
  let newTag = {
    name: item.sub_title,
    type: "success"
  }

  if (!tags.find((item: tag) => item.name == newTag.name)) {
    store.addTag(newTag)
  }

  router.push(item.path)
}
// eslint-disable-next-line no-undef
defineExpose({
  pathFirstName,
  pathSecondName
})
</script>
<style lang="scss" scoped>
// .user-container {
//   display: flex;
// }
@font-face {
  font-family: "iconfont"; /* Project id 3348297 */
  src: url("//at.alicdn.com/t/font_3348297_reqbotpycb.woff2?t=1650908707918")
      format("woff2"),
    url("//at.alicdn.com/t/font_3348297_reqbotpycb.woff?t=1650908707918")
      format("woff"),
    url("//at.alicdn.com/t/font_3348297_reqbotpycb.ttf?t=1650908707918")
      format("truetype");
}

.tab-img-open {
  width: 300px;
  height: 100px;
  background-image: url("../../../../assets/images/rei.png");
  background-size: contain;
  transition: all 0.3s;
}
.tab-img-close {
  width: 65px;
  height: 22px;
  background-image: url("../../../../assets/images/rei.png");
  background-size: contain;
  transition: all 0.3s;
}
.el-menu--collapse {
  width: 65px;
  // height: 600px;
}
.tab-menu:not(.el-menu--collapse) {
  min-height: 400px;
  width: 300px;
}
.box-card {
  flex: 1;
}
.active {
  width: 50px;
}
.iconfont {
  font-family: "iconfont";
  color: rgb(255, 227, 186);
}
</style>
