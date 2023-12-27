<template>
  <div class="all" v-if="isLoading">
    <!-- 容器部分 -->
    <div class="bowl">
      <!-- 容器中的水 -->
      <div class="water">
        <div class="inner"></div>
      </div>

      <div class="top-water"></div>

      <div class="center-box">
        <!-- 渔民 -->
        <div class="fisherman">
          <div class="body"></div>
          <div class="right-arm"></div>
          <div class="right-leg"></div>
          <!-- 鱼竿 -->
          <div class="rod">
            <div class="handle"></div>
            <div class="rope"></div>
          </div>
          <div class="butt"></div>
          <div class="left-arm"></div>
          <div class="left-leg"></div>

          <div class="head">
            <div class="face"></div>
            <div class="eyebrows"></div>
            <div class="eyes"></div>
            <div class="nose"></div>
            <div class="beard"></div>
            <div class="hat"></div>
          </div>
        </div>

        <!-- 船 -->
        <div class="boat">
          <div class="motor">
            <div class="parts"></div>
            <div class="button"></div>
          </div>
          <div class="top"></div>
          <div class="boat-body"></div>

          <div class="waves"></div>
        </div>
      </div>

      <!-- 绘制鱼，是之前画好的鱼svg，源代码可直接复制 -->
      <div class="fish">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 483.7 361.9"
          style="enable-background: new 0 0 483.7 361.9"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                class="st0"
                d="M168.8,298.4c1.2,8.5,0.3,17.1,0.5,25.7c0.2,9.6,2,18.6,8.8,25.9c9.4,10,25.3,14.4,38.7,10.4
						c17.7-5.3,21.7-23.3,19.9-39.9c-1.9-18.1-36.9-35.6-47.7-49.9"
              />
              <g>
                <path
                  class="st0"
                  d="M167.6,298.4c2.1,17-3.6,36.8,8.5,51.2c9.6,11.4,26.7,16.2,40.8,11.9c13.3-4,19.8-16,20.9-29.2
							c0.5-5.8,0.6-12.3-1.8-17.7c-2.4-5.5-6.6-10-10.9-14.1c-11.2-10.7-25.9-18.5-35.6-30.8c-0.9-1.1-2.5,0.5-1.6,1.6
							c6.8,8.7,16.6,15,25.1,21.8c8.2,6.6,19.6,14.9,22,25.8c2.6,11.8-0.2,27.8-9.9,35.7c-12.2,9.9-31.9,7-43.4-2.6
							c-16.4-13.6-9.8-35.4-12.1-53.7C169.7,297,167.5,297,167.6,298.4L167.6,298.4z"
                />
              </g>
            </g>
            <path
              class="st1"
              d="M478.9,117c4.7-9.7,8.2-23.7-1.1-29.1c-14.2-8.2-57.5,45.2-56.5,46.4c-48.6-54.4-77.1-85.6-131.5-106.8
					c-16.6-6.5-34.3-10.2-52.2-11.2c-6-0.8-12-1.4-18-1.7C156.4,11.3,100.7,51.6,80,64.7C59.3,77.8,2.5,154.2,0.4,158.5
					c0,0-1.1,9.8,15.3,22.9s22.9,12,16.4,22.9c-6.5,10.9-30.6,17.5-31.7,26.2c-1.1,8.7,0,8.7,8.7,10.9c8.7,2.2,50.2,46.5,103.7,64.7
					c53.5,18.2,111.7,18.2,146.4,12.8c2.7-0.4,5.5-1,8.2-1.6c12.3-1.9,24.7-4.5,33-8.2c15.7-5.9,28.9-12.5,34.2-15.3
					c1.6,0.5,3.2,1.1,4.6,1.9c2.1,3.1,5.5,7.9,8.9,11.6c7.6,8.2,20.9,8.6,31.1,4c7.7-3.5,18.9-16.7,21.6-25.2c2.2-6.8,2.3-5.1-0.9-10.3
					c-0.5-0.9-14.9-8.8-14.7-9c14.3-15.3,34.3-40,34.3-40c10.4,15.9,29.6,47.3,43.1,47.8c17.3,0.7,18.9-18.6,16-30.9
					C466.5,195.2,456,164,478.9,117z"
            />
            <g>
              <g>
                <path
                  class="st0"
                  d="M184.5,20.7c19.7-19,53.9-21.9,79.5-17c27.7,5.3,54.6,22.1,61.6,50.9c0.6,2.3,4.1,1.3,3.5-1
							C317.5,5.4,257.7-8.8,215.1,1.4c-12.1,2.9-24,8-33.1,16.7C180.3,19.7,182.8,22.3,184.5,20.7L184.5,20.7z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  class="st2"
                  d="M220.9,323.1c-3.2-9.4-9.9-16.6-16.6-23.7c-8.2-8.7-16.6-17-25.4-25.1c-0.6-0.5-1.6-0.2-1.6,0.6
							c0.3,7.6,0.6,15.3,0.9,22.9c0.4,10.9-0.2,22.7,3.3,33.1c3.7,11,13.5,20.6,25.9,18.7C220.2,347.7,223.9,333.9,220.9,323.1
							c-0.3-1.1-2.1-0.6-1.8,0.5c1.8,6.4,1.5,13.6-2.8,19c-4.9,6.1-13.3,6.6-20.1,3.5c-12-5.6-14.9-19.7-15.4-31.6
							c-0.6-13.2-1.1-26.4-1.6-39.5c-0.5,0.2-1,0.4-1.6,0.6c7.8,7.2,15.4,14.7,22.8,22.4c7.3,7.7,15.2,15.4,18.7,25.7
							C219.5,324.7,221.3,324.2,220.9,323.1z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  class="st2"
                  d="M144.2,107.3c17.9,21.5,26.7,50,23.4,77.9c-3.2,26.8-17.6,51.5-38.7,68.2c-0.9,0.7,0.4,2,1.3,1.3
							c21.5-17,36-42.2,39.3-69.5c3.4-28.4-5.7-57.3-23.9-79.2C144.8,105.1,143.5,106.4,144.2,107.3L144.2,107.3z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  class="st2"
                  d="M80.3,114.8c6.9-1.6,14.2,2.1,16.9,8.7c0.4,1.1,2.2,0.6,1.8-0.5c-3.1-7.5-11.2-11.8-19.2-9.9
							C78.6,113.3,79.1,115.1,80.3,114.8L80.3,114.8z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  class="st0"
                  d="M223.6,26.5c11.2-6.9,20.6-16.2,31.8-23.1c1.3-0.8,0.1-2.9-1.2-2.1c-11.2,6.9-20.6,16.2-31.8,23.1
							C221.1,25.2,222.3,27.3,223.6,26.5L223.6,26.5z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  class="st0"
                  d="M266.7,37.7c10.4-6.5,17.6-16.6,28-23.1c1.3-0.8,0.1-2.9-1.2-2.1c-10.4,6.5-17.6,16.6-28,23.1
							C264.2,36.4,265.4,38.6,266.7,37.7L266.7,37.7z"
                />
              </g>
            </g>
            <path
              class="st2"
              d="M90.1,138.3c-1.7-2.7-4.7-5-8.8-6.7c-9.7-4-22.9,3-24.6,16.6c-0.6,4.8,1.4,9.7,4.6,12.9
					c4.6,4.7,10.6,6.5,16.8,4c3.4-1.4,6.8-3.1,9.1-6C92.4,152.5,94.7,146,90.1,138.3z"
            />
            <g>
              <g>
                <path
                  class="st2"
                  d="M345.8,292.9c7.3,15.1,26,16.9,38.7,7.3c3-2.3,5.7-5.1,7.6-8.3c1.4-2.3,4-7,3.2-9.7c-0.5-1.5-2.2-2.3-3.5-3
							c-3.6-2.2-7.4-4.2-10.5-7c-0.9-0.8-2.2,0.5-1.3,1.3c3.5,3.2,8.1,4.9,11.7,7.9c1.5,1.3,1.7,1.3,1.3,3.4c-0.4,2-1.2,3.8-2.2,5.6
							c-1.9,3.4-4.7,6.4-7.8,8.7c-11.9,8.6-28.8,6.9-35.5-7C346.9,290.9,345.3,291.9,345.8,292.9L345.8,292.9z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  class="st2"
                  d="M457.1,155.4c3.1-10.6,7.5-20.6,11.3-30.9c1.8-4.8,6.7-15.9,1.3-20.1c-5.9-4.6-15.2,3.1-19.3,6.8
							c-7.2,6.3-13.4,13.8-18.6,21.8c-8.2,12.6-16.1,26.5-16.8,41.9c-0.6,13.7,3.8,27.2,9.7,39.4c6.3,13.1,14.7,25.2,23.7,36.6
							c3.2,4.1,7.1,10.3,12.7,11.3c5,0.9,6.5-3.2,7.1-7.3C473.1,220.8,448.3,189.2,457.1,155.4c0.3-1.2-1.5-1.7-1.8-0.5
							c-6.2,23.9,4.2,47.2,9.2,70.2c1.4,6.6,2.5,13.3,2.5,20.1c0,2.6-0.1,5.2-0.4,7.8c-0.3,2.5-0.4,6.8-4.1,7.3
							c-2.9,0.4-5.9-2.8-7.6-4.7c-8.3-9.1-15.5-19.6-21.8-30.2c-6.8-11.3-12.6-23.6-15-36.7c-2.7-14.3,0.3-27.7,6.9-40.5
							c4.8-9.2,10.5-18,17.2-25.9c5.4-6.3,12.3-14.3,20.5-16.9c12.5-3.9,5.8,13.9,3.7,19.4c-3.8,9.9-7.9,19.7-10.9,29.9
							C454.9,156,456.7,156.5,457.1,155.4z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  class="st2"
                  d="M246.6,310.6c42.2-0.3,84.8-21.1,117.2-46.8c13.2-10.5,26.6-23,33.9-38.4c3.4-7.1,3.3-13.8,2.9-21.6
							c-0.5-10.2-1-20.2-0.6-30.4c0.2-5.4,0.4-10.8,0.6-16.1c0.2-5.9,1.7-13.1-0.1-19c-1.5-5.2-6.1-10.1-9.3-14.5
							c-3.6-4.9-7.5-9.7-11.4-14.4c-14.7-17.2-31.9-32.3-50.8-44.8c-29.4-19.5-65.1-34.8-100.9-35c-25-0.1-50.8,2.1-74.3,11.1
							c-16.7,6.3-31.3,16.2-45,27.5c-0.9,0.8,0.4,2.1,1.3,1.3c12.1-9.9,24.9-18.9,39.3-25c18.7-8,39.1-11.3,59.3-12.5
							c17.9-1,35.2-0.4,52.6,4c18.1,4.6,35.5,11.9,51.8,21c18.5,10.4,35.6,23.3,50.8,38.1c8.4,8.2,16.3,17.1,23.4,26.4
							c3.5,4.6,7.4,9.4,10.2,14.5c3.4,6.2,1.5,15.2,1.2,22c-0.4,10.2-1.4,20.5-0.9,30.6c0.4,8.9,1.7,17.9,1,26.8
							c-0.5,6.8-4.7,13.3-8.5,18.8c-4.9,7-10.9,13.3-17.2,19.1c-17.1,15.8-37.2,28.5-58.2,38.2c-21.3,9.9-44.7,17.1-68.4,17.2
							C245.4,308.7,245.4,310.6,246.6,310.6L246.6,310.6z"
                />
              </g>
            </g>
            <g>
              <g>
                <g>
                  <path
                    class="st2"
                    d="M217.1,88.9c2.4,2,5.1,4.3,5.9,7.4c1,3.6-0.7,7.2-3.7,9.1c-1,0.6-0.1,2.2,0.9,1.6c3.1-2,5-5.3,4.9-9.1
								c-0.2-4.5-3.5-7.6-6.7-10.3C217.5,86.8,216.2,88.1,217.1,88.9L217.1,88.9z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    class="st2"
                    d="M221.9,240.7c6.6,3.6,7.2,11.9,1.4,16.7c-0.9,0.7,0.4,2,1.3,1.3c6.7-5.5,5.7-15.4-1.8-19.5
								C221.8,238.6,220.9,240.2,221.9,240.7L221.9,240.7z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    class="st2"
                    d="M196.5,69.3c4.9,3.9,5.5,11.4,1.1,16c-0.8,0.9,0.5,2.1,1.3,1.3c5-5.3,4.5-14-1.1-18.6
								C196.8,67.3,195.5,68.6,196.5,69.3L196.5,69.3z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    class="st2"
                    d="M345,169.2c3.4,1.4,4.9,5.2,4.9,8.7c0,3.8-2.7,6.7-5.3,9.1c-0.9,0.8,0.4,2.1,1.3,1.3
								c3.5-3.2,6.3-6.9,5.7-11.8c-0.4-4-2.4-7.4-6.1-9C344.4,167,343.9,168.8,345,169.2L345,169.2z"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  class="st2"
                  d="M285.5,202.5c-12.6,16.9-36.2,22.6-55.1,13.4c-6.5-3.2-11.4-8.1-16.5-13.1c-4.7-4.7-10-9.2-12.9-15.3
							c-4.9-10.6-2.3-23,5.6-31.3c3.7-3.8,7.5-7.6,11.3-11.3c13.9-13.7,35.1-17.6,52.6-8.3C294.7,149.3,301.1,180.7,285.5,202.5
							c-0.7,1,0.9,1.9,1.6,0.9c14.1-19.7,11.2-47.5-7.7-63.1c-16.3-13.5-40.5-14.1-57.4-1.3c-5.6,4.2-10.4,9.7-15.3,14.7
							c-6.6,6.6-10.6,14.8-9.9,24.3c0.6,9.1,5.4,15.6,11.5,21.8c5.4,5.4,10.6,11.3,17.1,15.4c20.2,12.7,47.5,7.3,61.7-11.8
							C287.8,202.5,286.2,201.6,285.5,202.5z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <!-- loading 动画 -->
    <h1>{{ loadingText }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const isLoading = ref(false)
const show = () => {
  isLoading.value = true
  startLoading()
}
const hide = () => {
  isLoading.value = false
  dots.value = 0
  loadingText.value = "Loading"
  clearInterval(timer.value)
}
const loadingText = ref("Loading")
const timer = ref()
const dots = ref(0)
const startLoading = () => {
  timer.value = setInterval(() => {
    if (dots.value < 3) {
      loadingText.value += "."
      dots.value++
    } else {
      loadingText.value = "Loading"
      dots.value = 0
    }
  }, 500)
}
defineExpose({
  isLoading,
  show,
  hide
})
</script>
<style lang="scss" scoped>
/* 引入字体库 */
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700");

/* 对于标签样式调整 */
* {
  padding: 0;
  margin: 0;
  position: relative;
}

/* 主体的背景和字体 */
body {
  background: #fff5df;
  font-family: "Montserrat", sans-serif;
}

/* 父，对整体进行调整 */
.all {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 缩小 */
  transform: scale(0.75);
}

/* 子 */
.bowl {
  width: 250px;
  height: 250px;
  border: 5px solid #fff;
  border-radius: 50%;
  position: fixed;
  top: calc(50% - 125px);
  left: calc(50% - 125px);
  background: rgba(90, 201, 226, 0.3);
}

/* 容器的阴影 */
.bowl:before {
  content: "";
  position: absolute;
  bottom: -25px;
  left: 50px;
  width: 150px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);
}

/* 容器口 */
.bowl:after {
  content: "";
  position: absolute;
  top: 10px;
  left: calc(25% - 3px);
  width: 50%;
  height: 40px;
  border: 3px solid #fff;
  border-radius: 50%;
}

/* 调整整体位置 */
.bowl .water {
  position: absolute;
  bottom: 5%;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  /* 添加水的动画 */
  animation: top-inner 5s ease infinite;
}

@keyframes top-inner {
  from {
    transform: rotate(0deg);
    margin-left: 0px;
  }
  25% {
    transform: rotate(3deg);
    margin-left: -3px;
  }
  50% {
    transform: rotate(-6deg);
    margin-left: 6px;
  }
  75% {
    transform: rotate(5deg);
    margin-left: -5px;
  }
  to {
    transform: rotate(0deg);
    margin-left: 0px;
  }
}

/* 容器中的水 */
.bowl .water .inner {
  width: 225px;
  height: 225px;
  border-radius: 50%;
  background: #4e99ce;
  position: absolute;
  bottom: 0;
  left: 12.5px;
}

/* 为了使水立体 */
.bowl .top-water {
  position: absolute;
  width: 225px;
  height: 60px;
  border-radius: 50%;
  background: #82bde6;
  bottom: 105px;
  left: 12.5px;
  /* 添加动画 */
  animation: top 5s ease infinite;
}

/* 与上面动画保持一致，如果不一致，刷新一下  */
@keyframes top {
  from {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-6deg);
  }
  75% {
    transform: rotate(5deg);
  }
  to {
    transform: rotate(0deg);
  }
}
/* 至此，容器和水就完成了~ */

/* 待全部画完后就可以添加动画了,添加后人物就在容器中了 */
.center-box {
  height: 400px;
  width: 400px;
  position: fixed;
  top: calc(50% - 250px);
  left: calc(50% - 180px);
  /* 添加动画 */
  animation: float 5s ease infinite;
  transform: scale(0.5);
}

@keyframes float {
  from {
    transform: translate(0, 0px) scale(0.25);
  }
  25% {
    transform: translate(0, 4px) scale(0.25);
  }
  50% {
    transform: translate(0, -7px) scale(0.25);
  }
  75% {
    transform: translate(0, 7px) scale(0.25);
  }
  to {
    transform: translate(0, -0px) scale(0.25);
  }
}

/* 渔民 */
.fisherman {
  width: 400px;
  height: 300px;
}

/* 身体 */
.fisherman .body {
  width: 80px;
  height: 150px;
  background: #d2bd24;
  position: absolute;
  bottom: 15px;
  right: 40px;
  -webkit-clip-path: ellipse(40% 50% at 0% 50%);
  clip-path: ellipse(40% 50% at 0% 50%);
  transform: rotate(-20deg);
}

.fisherman .body:before {
  content: "";
  width: 80px;
  height: 200px;
  background: #d2bd24;
  position: absolute;
  bottom: -10px;
  right: 15px;
  -webkit-clip-path: ellipse(90% 50% at 0% 50%);
  clip-path: ellipse(90% 50% at 0% 50%);
  transform: rotate(10deg);
}

/* 右胳膊 */
.fisherman .right-arm {
  width: 20px;
  height: 110px;
  background: #d2bd24;
  border-radius: 20px;
  position: absolute;
  bottom: 46px;
  right: 163px;
  transform: rotate(40deg);
}

.fisherman .right-arm:before {
  content: "";
  background: #ffd1b5;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 82px;
  right: 50px;
  border-radius: 20px;
}

.fisherman .right-arm:after {
  content: "";
  width: 20px;
  height: 50px;
  background: #d2bd24;
  border-radius: 20px;
  position: absolute;
  bottom: -15px;
  right: 20px;
  transform: rotate(-80deg);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

/* 右腿 */
.fisherman .right-leg {
  width: 20px;
  height: 110px;
  background: #bf3526;
  border-radius: 20px;
  position: absolute;
  bottom: -22px;
  right: 159px;
  transform: rotate(-60deg);
}

.fisherman .right-leg:before {
  content: "";
  width: 20px;
  height: 100px;
  background: #bf3526;
  border-radius: 20px;
  position: absolute;
  bottom: 45px;
  left: -40px;
  transform: rotate(80deg);
}

.fisherman .right-leg:after {
  content: "";
  position: absolute;
  bottom: 38px;
  left: -75px;
  width: 30px;
  height: 100px;
  background: #338ca0;
  transform: rotate(80deg);
}

/* 鱼竿 */
.rod {
  position: absolute;
  width: 380px;
  height: 5px;
  bottom: 130px;
  left: -140px;
  background: #331604;
  transform: rotate(10deg);
}

/* 鱼竿柄 */
.rod .handle {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  left: 310px;
  top: 3px;
  background: #efdddb;
}

.rod .handle:before {
  content: "";
  position: absolute;
  width: 13px;
  height: 4px;
  left: 10px;
  top: 7px;
  background: #1a1a1a;
}

/* 鱼线 */
.rod .rope {
  width: 3px;
  height: 250px;
  top: -18px;
  left: 22px;
  transform: rotate(-10deg);
  background: #fff;
  /* 添加动画 */
  /* animation: ; */
}

.fisherman .butt {
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 20px;
  bottom: 0;
  right: 90px;
  background: #bf3526;
}

/* 左胳膊 */
.fisherman .left-arm {
  position: absolute;
  width: 20px;
  height: 90px;
  bottom: 55px;
  right: 135px;
  border-radius: 20px;
  transform: rotate(30deg);
  background: #e8d93d;
}

.fisherman .left-arm:before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50px;
  right: 53px;
  border-radius: 20px;
  background: #ffd1b5;
}

.fisherman .left-arm:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 60px;
  bottom: -15px;
  right: 20px;
  border-radius: 20px;
  transform: rotate(-70deg);
  background: #e8d93d;
}

/* 左腿 */
.fisherman .left-leg {
  position: absolute;
  width: 20px;
  height: 100px;
  bottom: -14px;
  right: 120px;
  border-radius: 20px;
  transform: rotate(-50deg);
  background: #de4125;
}

.fisherman .left-leg:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 100px;
  bottom: 20px;
  left: -37px;
  border-radius: 20px;
  transform: rotate(60deg);
  background: #de4125;
}

.fisherman .left-leg:after {
  content: "";
  position: absolute;
  width: 30px;
  height: 100px;
  bottom: 2px;
  left: -70px;
  transform: rotate(60deg);
  background: #338ca0;
}

/* 头部 */
.fisherman .head {
  position: absolute;
  width: 60px;
  height: 80px;
  bottom: 135px;
  right: 110px;
  border-radius: 50%;
  transform: rotate(10deg);
}

/* 脸 */
.head .face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #d76540;
}

.head .face:before {
  content: "";
  position: absolute;
  width: 60px;
  height: 85px;
  top: -20px;
  left: -10px;
  border-radius: 50%;
  background: #ffd1b5;
  transform: rotate(-10deg);
}

/* 睫毛 */
.head .eyebrows {
  position: absolute;
  width: 15px;
  height: 7px;
  top: 15px;
  left: -3px;
  transform: rotate(-10deg);
  background: #e67e5b;
}

.head .eyebrows:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 7px;
  top: 0px;
  left: 22px;
  background: #e67e5b;
}

/* 眼睛 */
.head .eyes {
  position: absolute;
  width: 5px;
  height: 8px;
  top: 25px;
  left: 6px;
  border-radius: 50%;
  transform: rotate(-10deg);
  background: #1a1a1a;
}

.head .eyes:before {
  content: "";
  position: absolute;
  width: 5px;
  height: 8px;
  top: 0px;
  left: 20px;
  border-radius: 50%;
  background: #1a1a1a;
}

/* 鼻子 */
.head .nose {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 15px solid #fab58e;
  top: 25px;
  left: 6px;
  transform: rotate(-10deg);
}

/* 胡子 */
.head .beard {
  position: absolute;
  width: 40px;
  height: 25px;
  top: 38px;
  left: 1px;
  transform: rotate(-10deg);
  clip-path: ellipse(50% 50% at 50% 100%);
  background: #e67e5b;
}

/* 帽子 */
.head .hat {
  position: absolute;
  width: 80px;
  height: 8px;
  top: 8px;
  left: -13px;
  background: #3d402b;
}

.head .hat:before {
  content: "";
  position: absolute;
  width: 60px;
  height: 40px;
  left: 10px;
  bottom: 8px;
  clip-path: ellipse(50% 50% at 50% 90%);
  background: #7b8445;
}

/* 船 */
/* 调整整个船体的位置、大小关系 */
.boat {
  width: 400px;
  height: 100px;
  margin-top: -15px;
}

.boat .motor {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  top: -50px;
  right: -370px;
  background: #ef4723;
}

.boat .motor:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 100px;
  clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
  top: 55px;
  right: 20px;
  z-index: -1;
  background: #bf3526;
}

.boat .motor:after {
  content: "";
  position: absolute;
  width: 80px;
  height: 20px;
  left: 0;
  top: 0;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  background: #fff;
}

.boat .motor .parts,
.boat .motor .parts:before,
.boat .motor .parts:after {
  position: absolute;
  width: 25px;
  height: 5px;
  right: 10px;
  top: 30px;
  border-radius: 20px;
  background: #bf3526;
}

.boat .motor .parts:before,
.boat .motor .parts:after {
  content: "";
  right: 0px;
}

.boat .motor .parts:before {
  top: 10px;
}

.boat .motor .parts:after {
  top: 20px;
}

/* 扳手 */
.boat .motor .button {
  position: absolute;
  width: 20px;
  height: 10px;
  left: -10px;
  top: 25px;
  border-radius: 20px;
  background: #bf3526;
}

.boat .top {
  position: absolute;
  width: 390px;
  height: 5px;
  top: 0;
  right: 0;
  border-bottom: solid 5px #cdab33;
  background: #e8da43;
}

.boat .boat-body {
  position: absolute;
  width: 380px;
  height: 90px;
  bottom: 0;
  right: 0;
  border-bottom-left-radius: 90px;
  border-bottom-right-radius: 20px;
  clip-path: polygon(0 0, 100% 0, 99% 100%, 0% 100%);
  background: #cdab33;
}

.boat .boat-body:before {
  content: "";
  position: absolute;
  width: 380px;
  height: 70px;
  bottom: 20px;
  right: 0px;
  border-bottom-left-radius: 60px;
  background: #d2bd39;
}

.boat .boat-body:after {
  content: "";
  position: absolute;
  width: 380px;
  height: 40px;
  bottom: 50px;
  right: 0px;
  border-bottom-left-radius: 60px;
  background: #e8da43;
}

/* 波纹 */
.waves {
  height: 100%;
  box-sizing: border-box;
  border: 7px solid #fff;
  border-radius: 50%;
  transform: translate(30px, -30px);
  z-index: -10;
  /* 添加动画 */
  animation: waves 5s ease infinite;
}

@keyframes waves {
  from {
    margin-left: 0px;
    margin-right: 0px;
    border-color: #fff;
  }
  to {
    margin-left: -100px;
    margin-right: -100px;
    border-color: transparent;
  }
}

.fish {
  position: absolute;
  width: 15px;
  height: 15px;
  margin-left: 8px;
  /* 添加动画 */
  animation: jump 3s infinite;
}

@keyframes jump {
  0% {
    left: 80px;
    top: 120px;
    transform: rotate(90deg);
    opacity: 1;
  }
  16.7% {
    left: 70px;
    top: 60px;
    transform: rotate(-20deg);
    opacity: 1;
  }
  33.4% {
    left: 60px;
    top: 120px;
    transform: rotate(-90deg);
    opacity: 0;
  }
  50% {
    left: 80px;
    top: 120px;
    transform: rotate(90deg);
    opacity: 0;
  }
  100% {
    left: 80px;
    top: 120px;
    transform: rotate(90deg);
    opacity: 0;
  }
}

.st0 {
  fill: #e0ac26;
}

.st1 {
  fill: #e0ac26;
  stroke: #e0ac26;
  stroke-width: 1.061;
  stroke-miterlimit: 10;
}

.st2 {
  fill: #ffffff;
}

h1 {
  position: fixed;
  width: 100%;
  top: calc(50% + 170px);
  left: 0;
  text-align: center;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.15);
}
</style>
