<template>
  <div class="todo-container">
    <h1>todoList</h1>
    <el-button type="primary" :icon="Edit" @click="addTodoItem" circle />
    <div>
      <el-card class="todoCard">
        <label class="custom-checkbox" v-for="item in todoList" :key="item.id">
          <input
            type="checkbox"
            :checked="item.isChecked"
            @click="item.isChecked = !item.isChecked"
          />
          <span></span>
          <div
            :class="item.isChecked ? 'todoItem todoItem-active' : 'todoItem'"
          >
            {{ item.todoItem }}
          </div>
          <div @click="delItem(item.id)" class="delIcon">&#xe6a8;</div>
        </label>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, getCurrentInstance, ComponentInternalInstance } from "vue"
import { Edit } from "@element-plus/icons-vue"
import { ElMessageBox } from "element-plus"
const { appContext } = getCurrentInstance() as ComponentInternalInstance
// const todoItem = ref<string>("Have a Date")
type todo = {
  todoItem: string
  isChecked: boolean
  id: number
}
// const isChecked = ref<boolean>(false)
const todoList = reactive<todo[]>([
  { id: 1, todoItem: "Have A Date", isChecked: false },
  { id: 2, todoItem: "Play A Game", isChecked: false },
  { id: 3, todoItem: "Sing A Song", isChecked: false },
  { id: 4, todoItem: "Do A Cook", isChecked: false },
  { id: 5, todoItem: "Have A Sleep", isChecked: false }
])
const delItem = (idx: number) => {
  if (todoList.findIndex((item) => item.id == idx) == -1) {
    return
  }
  todoList.splice(
    todoList.findIndex((item) => item.id == idx),
    1
  )
}
type comfirmRes = {
  action: string
  value: string
}
const addTodoItem = () => {
  ElMessageBox.prompt("Please increase your plan", "Tip", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    inputPattern: /.{2,}/, // 表示任意字符不少于2位
    inputErrorMessage: "Invalid Item",
    draggable: true,
    showClose: false
  })
    .then(({ action, value }: comfirmRes) => {
      if (action == "confirm") {
        let itemId = todoList.length + 1
        todoList.push({ id: itemId, todoItem: value, isChecked: false })
      }
      appContext.config.globalProperties.$message({
        type: "success",
        message: action + value
      })
    })
    .catch(() => {
      appContext.config.globalProperties.$message({
        type: "info",
        message: "你取消了此操作"
      })
    })
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: simplyOlver;
  src: url("../../assets/fonts/Simply Olive DEMO.ttf");
}
.todo-container {
  margin-left: 20px;
}
.todoCard {
  width: 400px;
}
.custom-checkbox {
  display: block;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
.custom-checkbox span {
  background-color: white;
  border-radius: 50%;
  border: 2px solid skyblue;
  width: 25px;
  height: 25px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 25px;
}
.custom-checkbox input[type="checkbox"] {
  display: none;
}
.custom-checkbox input[type="checkbox"]:checked + span {
  position: relative;
  text-align: center;
}
.custom-checkbox input[type="checkbox"]:checked + span:after {
  font-family: "iconfont";
  text-align: center;

  content: "\e6a6";
  border-radius: 50%;
  font-size: 21px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: #0073bf;
  line-height: 20px;
  // border: #fff solid 2px;
  height: 20px;
  width: 20px;
}
.todoItem {
  font-family: simplyOlver;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  margin-left: 10px;
  font-size: 18px;
}
.todoItem-active {
  text-decoration: line-through;
  color: rgb(217, 217, 217);
}
.delIcon {
  display: none;
  float: right;
  font-family: iconfont;
  color: Crimson;
  line-height: 25px;
  font-size: 20px;
  margin-right: 10px;
}
.custom-checkbox:hover .delIcon {
  display: block;
  cursor: pointer;
}
</style>
