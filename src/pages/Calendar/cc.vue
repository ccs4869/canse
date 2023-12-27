<template>
  <div class="main">
    <div class="calendar">
      <div class="col leftCol">
        <div class="content">
          <h1 class="date">Friday<span>September 12th</span></h1>
          <div class="notes">
            <p>
              <input type="text" value="" placeholder="new note" />
              <a href="#" title="Add note" class="addNote animate">+</a>
            </p>
            <ul class="noteList">
              <li>
                Headbutt a lion<a
                  href="#"
                  title="Remove note"
                  class="removeNote animate"
                  >x</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col rightCol">
        <div class="content">
          <h2 class="year">2022</h2>
          <ul class="months">
            <li><a href="#" title="Jan" data-value="1">Jan</a></li>
            <li><a href="#" title="Feb" data-value="2">Feb</a></li>
            <li><a href="#" title="Mar" data-value="3">Mar</a></li>
            <li><a href="#" title="Apr" data-value="4">Apr</a></li>
            <li><a href="#" title="May" data-value="5">May</a></li>
            <li><a href="#" title="Jun" data-value="6">Jun</a></li>
            <li><a href="#" title="Jul" data-value="7">Jul</a></li>
            <li><a href="#" title="Aug" data-value="8">Aug</a></li>
            <li>
              <a href="#" title="Sep" data-value="9" class="selected">Sep</a>
            </li>
            <li><a href="#" title="Oct" data-value="10">Oct</a></li>
            <li><a href="#" title="Nov" data-value="11">Nov</a></li>
            <li><a href="#" title="Dec" data-value="12">Dec</a></li>
          </ul>
          <div class="clearfix"></div>
          <ul class="weekday">
            <li><a href="#" title="Mon" data-value="1">Mon</a></li>
            <li><a href="#" title="Tue" data-value="2">Tue</a></li>
            <li><a href="#" title="Wed" data-value="3">Wed</a></li>
            <li><a href="#" title="Thu" data-value="4">Thu</a></li>
            <li><a href="#" title="Fri" data-value="5">Fri</a></li>
            <li><a href="#" title="Say" data-value="6">Sat</a></li>
            <li><a href="#" title="Sun" data-value="7">Sun</a></li>
          </ul>
          <div class="clearfix"></div>
          <ul class="days">
            <li><a href="#" title="1" data-value="1">1</a></li>
            <li><a href="#" title="2" data-value="2">2</a></li>
            <li><a href="#" title="3" data-value="3">3</a></li>
            <li><a href="#" title="4" data-value="4">4</a></li>
            <li><a href="#" title="5" data-value="5">5</a></li>
            <li><a href="#" title="6" data-value="6">6</a></li>
            <li><a href="#" title="7" data-value="7">7</a></li>
            <li><a href="#" title="8" data-value="8" class="event">8</a></li>
            <li><a href="#" title="9" data-value="9">9</a></li>
            <li><a href="#" title="10" data-value="10" class="event">10</a></li>
            <li><a href="#" title="11" data-value="11">11</a></li>
            <li>
              <a href="#" title="12" data-value="12" class="selected">12</a>
            </li>
            <li><a href="#" title="13" data-value="13">13</a></li>
            <li><a href="#" title="14" data-value="14">14</a></li>
            <li><a href="#" title="15" data-value="15">15</a></li>
            <li><a href="#" title="16" data-value="16">16</a></li>
            <li><a href="#" title="17" data-value="17">17</a></li>
            <li><a href="#" title="18" data-value="18">18</a></li>
            <li><a href="#" title="19" data-value="19">19</a></li>
            <li><a href="#" title="20" data-value="20">20</a></li>
            <li><a href="#" title="21" data-value="21">21</a></li>
            <li><a href="#" title="22" data-value="22">22</a></li>
            <li><a href="#" title="23" data-value="23">23</a></li>
            <li><a href="#" title="24" data-value="24">24</a></li>
            <li><a href="#" title="25" data-value="25">25</a></li>
            <li><a href="#" title="26" data-value="26">26</a></li>
            <li><a href="#" title="27" data-value="27" class="event">27</a></li>
            <li><a href="#" title="28" data-value="28">28</a></li>
            <li><a href="#" title="29" data-value="29">29</a></li>
            <li><a href="#" title="30" data-value="30">30</a></li>
            <li><a href="#" title="31" data-value="31">31</a></li>
          </ul>
          <div class="clearfix"></div>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>
<style lang="scss" scoped>
.main {
  margin: 20px;
  background-color: #eeede9;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-size: 96.5%;
  font-family: Helvetica, Arial, sans-serif;
}
input {
  font-family: Helvetica, Arial, sans-serif;
}
.input::webkit-input-placeholder {
  color: #fff;
}
a {
  text-decoration: none;
  color: #ff462b;
}
p {
  line-height: 20px;
}
.calendar {
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
  width: 800px;
  height: 450px;
  left: 50%;
  margin-left: -400px;
  margin-top: -225px;
  top: 50%;
  background-color: #ffffff;
  color: #333333;
}
.calendar .leftCol {
  width: 40%;
  background-color: #f48989;
}
.calendar .col {
  position: relative;
  float: left;
  height: 100%;
}

.calendar .col .content {
  padding: 40px;
}
.calendar .leftCol h1 {
  color: #ffffff;
  margin-bottom: 40px;
}

.calendar .rightCol {
  width: 60%;
}

.calendar .col {
  position: relative;
  float: left;
  height: 100%;
}

.calendar .col .content {
  padding: 40px;
}
.calendar h1 span {
  display: block;
}

.calendar .months li a {
  font-size: 10px;
  color: #c7bebe;
  text-align: center;
  width: 32px;
  margin-bottom: 20px;
}

.calendar .months li a,
.calendar .weekday li a,
.calendar .days li a {
  display: block;
  color: #747978;
}

.calendar .rightCol h2 {
  color: #c7bebe;
  text-align: right;
  margin-bottom: 70px;
}
.calendar h1,
.calendar h2 {
  font-weight: 300;
  font-size: 26px;
  line-height: 28px;
  text-transform: uppercase;
  margin: 0px 0px 20px 0px;
}

.calendar ul {
  margin: 0px;
}

.calendar .months li,
.calendar .weekday li,
.calendar .days li {
  float: left;
  text-transform: uppercase;
}

.calendar ul li {
  list-style: none;
}
ul {
  padding: 0;
  margin: 0;
}

.calendar .days li a {
  width: 36px;
  height: 24px;
  text-align: center;
  margin: auto auto;
  font-size: 12px;
  font-weight: bold;
  border-radius: 12px;
  margin-bottom: 10px;
  padding-top: 10px;
}

.calendar .weekday li a {
  width: 55px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 12px;
}
.calendar .days li a:hover {
  background-color: #eeede9;
}

.calendar .days li .selected {
  background-color: #f5a1a3 !important;
  color: #ffffff;
}

.calendar .months li a,
.calendar .weekday li a,
.calendar .days li a {
  display: block;
  color: #747978;
}

.calendar .months li a,
.calendar .weekday li a,
.calendar .days li a {
  display: block;
  color: #747978;
}
.clearfix {
  clear: both;
}
*,
:active {
  outline: none;
}
// * {
//   padding: 0px;
//   margin: 0px;
// }

.calendar .months li,
.calendar .weekday li,
.calendar .days li {
  float: left;
  text-transform: uppercase;
}

.calendar ul li {
  list-style: none;
}

.calendar .days li {
  width: 55px;
}
.calendar .months li,
.calendar .weekday li,
.calendar .days li {
  float: left;
  text-transform: uppercase;
}
.calendar ul li {
  list-style: none;
}

.calendar .notes p {
  border-bottom: solid 1px rgba(255, 255, 255, 0.4);
}

.calendar .notes p,
.calendar .notes input,
.calendar .noteList li {
  font-weight: 300;
  font-size: 14px;
}
p {
  line-height: 20px;
}

.calendar .notes input {
  background-color: #f48989;
  color: #ffffff;
  border: none;
  width: 200px;
}

.calendar .addNote {
  font-size: 16px;
}

.calendar .addNote,
.calendar .removeNote {
  float: right;
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  margin-left: 20px;
}
.animate {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.calendar .notes p,
.calendar .notes input,
.calendar .noteList li {
  font-weight: 300;
  font-size: 14px;
}

.calendar .noteList li {
  color: #ffffff;
  margin-bottom: 10px;
}

input::-webkit-input-placeholder {
  color: #fff;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
}
</style>
