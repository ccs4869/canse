<template>
  <div class="cal-container">
    <div class="content">
      <header></header>
      <main>
        <ul ref="monthRef" class="month" @click="switchMonth">
          <li data-index="0">Jan</li>
          <li data-index="1">Feb</li>
          <li data-index="2">Mar</li>
          <li data-index="3">Apr</li>
          <li data-index="4">May</li>
          <li data-index="5">Jun</li>
          <li data-index="6">Jul</li>
          <li data-index="7">Aug</li>
          <li data-index="8">Sep</li>
          <li data-index="9">Oct</li>
          <li data-index="10">Nov</li>
          <li data-index="11">Dec</li>
        </ul>
        <ul class="date">
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
          <li>日</li>
        </ul>
        <ul ref="dayRef" class="day">
          <li v-for="i in 42">
            <span class="day_normal">{{
              i >= firstDay && i < fullMonthDays + firstDay
                ? i - (firstDay - 1)
                : ""
            }}</span>
            <!-- {{ i <= 31 ? i : "" }} -->
          </li>
        </ul>
      </main>
    </div>
    <div class="extra">
      <aside>
        <div class="extra-input">
          <input v-model="todoItem" type="text" class="new_todo" />
          <span class="extra-input-btn" @click="addTodo">&#10133;</span>
        </div>
        <ul ref="todoListRef" class="extra-todolist">
          <li v-for="(item, idx) in todoList">
            <span>{{ item }}</span>
            <span style="cursor: pointer" @click="delTodo(idx)">&#127765;</span>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect, watch, reactive } from "vue"

const dayRef = ref()
const monthRef = ref()

const recentDay = ref<number>(1)
const switchMonth = (e: any) => {
  if (!e.target.dataset.index) {
    return
  }
  month.value = e.target.dataset.index * 1
}

const todoItem = ref("")
const todoList = reactive<string[]>([])
const addTodo = () => {
  todoList.push(todoItem.value)
  todoItem.value = ""
}
const todoListRef = ref()
const delTodo = (idx: number) => {
  todoListRef.value.childNodes[idx + 1].childNodes[0].className += " delStyle"
  todoListRef.value.childNodes[idx + 1].childNodes[1].innerHTML = "&#127761;"
  // 127761
}

onMounted(() => {
  initDate()
})

const date = new Date()
const recentMonth = date.getMonth()
const month = ref(date.getMonth())
const year = date.getFullYear()

const firstDate = ref()
const firstDay = ref()

const week = date.getDay()
const day = date.getDate()

const fullMonthDays = ref()

watch(month, () => {
  initDate()
})

function initDate() {
  // month:0-11
  // day:0-6

  firstDate.value = new Date(year, month.value, 1)
  firstDay.value = firstDate.value.getDay() == 0 ? 7 : firstDate.value.getDay()
  fullMonthDays.value = getMonthDay(year, month.value)

  if (month.value != recentMonth) {
    dayRef.value.childNodes.forEach((el: any) => {
      el.style && (el.style.backgroundColor = "")
    })
  } else {
    dayRef.value.childNodes[firstDay.value + day - 1].style.backgroundColor =
      "gray"
  }

  monthRef.value.childNodes.forEach((el: any) => {
    // el.style.backgroundColor = ""
    // el.style.opacity = 0.7
    // el.style.fontWeight = 400
    el.className = ""
  })
  dayRef.value.childNodes.forEach((el: any) => {
    el.className = ""
  })
  // monthRef.value.childNodes[month.value].style.backgroundColor = "gray"
  // monthRef.value.childNodes[month.value].style.opacity = 1
  // monthRef.value.childNodes[month.value].style.fontWeight = 700
  monthRef.value.childNodes[month.value].className += " month_selected"
  dayRef.value.childNodes[firstDay.value + 14 - 1].className += "important_day"
}

function getMonthDay(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
</script>
<style lang="scss" scoped>
.cal-container {
  font-family: "Roboto";
  /* width: 600px; */
  /* margin: 30px auto 0; */
  display: flex;
  /* background: #fff; */
  padding: 10px 50px 50px;

  // zdf_
  border: 1px solid gray;
  width: 600px;
  padding-top: 70px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #fff;
}
.delStyle {
  font-style: italic;
  text-decoration: line-through;
}
li {
  list-style: none;
  padding: 0;
}

ul {
  padding: 0;
}
// reset css
ul.month {
  padding-left: 0;
  display: flex;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;
  li {
    font-size: 12px;
    width: 25px;
    text-align: center;
    padding: 10px 5px;
    opacity: 0.7;
  }
  li:hover {
    opacity: 1;
    // background-color: gray;
  }
}
ul.date {
  display: flex;
  padding-left: 0;
  justify-content: center;
  font-family: Helvetica, Arial, sans-serif;

  li {
    width: 13px;
    text-align: center;
    font-size: 12px;
    padding: 0 20px;
    opacity: 0.7;
  }
  li:hover {
    opacity: 1;
  }
}
ul.day {
  display: flex;
  padding-left: 0;
  justify-content: center;
  flex-wrap: wrap;
  li {
    width: 33px;
    height: 33px;
    border-radius: 10px;
    // background-color: #eee;
    line-height: 33px;
    text-align: center;
    font-size: 12px;
    margin: 3.5px 10px;
    opacity: 0.7;
    // height: 40px;
    // width: 40px;
    // background-color: pink;
  }
}
.content {
  width: 400px;
  height: 340px;
  // background-color: #eee;
}

.extra {
  width: 200px;
  margin-left: 20px;
  padding-top: 20px;
  // background-color: pink;
  border-left: 2px solid currentColor;
  &-input {
    text-align: center;
    width: 180px;
    input {
      width: 120px;
    }
    &-btn {
      cursor: pointer;
    }
  }
  &-todolist {
    line-height: 40px;
    width: 180px;
    text-align: center;
  }
}

// the 14th date is the most important day
.important_day {
  position: relative;
  z-index: 2;
}
.important_day span {
  position: relative;
  z-index: 2;
}

.important_day::after {
  font-family: "iconfont";
  content: "\e612";
  position: absolute;
  top: 0;
  left: 0;
  font-size: 28px;
  text-align: center;
  width: 33px;
  height: 33px;
  color: pink;
  z-index: 1;
}

.month .month_selected {
  opacity: 1;
  font-weight: 700;
  background-color: gray;
}

.new_todo {
  border: none;
  outline: none;
  border-bottom: 3px dashed currentColor;
}
</style>
