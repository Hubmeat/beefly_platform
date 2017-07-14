<template>
  <div class="consumeData">
    <div class="countInfo">
      <el-row class="DatePicker">
        <el-col>
          <div class="timeSelectBtn">
            <el-button  class="active" @click='handleChangeType'>今日</el-button>
            <el-button @click='handleChangeType'>本周</el-button>
            <el-button @click='handleChangeType'>本月</el-button>
            <el-button @click='handleChangeType'>所有日期</el-button>
            <el-button @click='handleChangeType'>指定时间段</el-button>
          </div>
          <el-date-picker v-show="show" v-model="value4" type="datetimerange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="right">
          </el-date-picker>
          <el-button icon="search" type="warning" class="timeSelect_button">查询</el-button>
        </el-col>
      </el-row>
      <el-row class="countDetail">
        <router-view></router-view>
      </el-row>
    </div>
  </div>
</template>
<script>
import { siblings } from '../../../../utils/index.js'
import moment from 'moment'
export default {
  data: function () {
    return {
      form: {
        data1: '',
        data2: '',
        type: 'date',
        formatType: 'yyyy-MM-dd'
      },
      value4: '',
      show: false,
      pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      active: false
    }
  },
  methods: {
    handleChangeType (e) {
      var siblingsBtn = siblings(e.currentTarget)
      for (var i = 0; i < siblingsBtn.length; i++) {
        siblingsBtn[i].setAttribute('class', 'el-button el-button--default')
      }
      e.currentTarget.setAttribute('class', 'el-button active el-button--default')
      if (e.currentTarget.innerText === '指定时间段') {
        this.show = true
      } else {
        this.show = false
      }
      var nowTime
      switch (e.currentTarget.innerText) {
        case '今日': {
          nowTime = moment().format('YYYY-MM-DD')
          this.nowTime = nowTime
          this.arrowTimeType = 'day'
          this.clickTimes = 0
          break
        }
        case '本周': {
          nowTime = moment().format('YYYY年第ww周')
          this.nowTime = nowTime
          this.arrowTimeType = 'week'
          this.clickTimes = 0
          break
        }
        case '本月': {
          nowTime = moment().format('YYYY年MM月')
          this.nowTime = nowTime
          this.arrowTimeType = 'month'
          this.clickTimes = 0
          break
        }
      }
    }
  }
}
</script>
<style scoped>

div.timeSelectBtn {
  display:block;
  float:left;
  margin-right: 8px;
}

div.timeSelectBtn button {
  margin-left: 8px;
  display: inline-block;
  border: none;
  outline: none;
  font-size: 12px;
  color: #fff;
  background: rgba(66,66,66, 0.8);
  transition: all .2s linear 0s;
  box-sizing: border-box;
  height:35px;
}

div.timeSelectBtn button.active {
    background: rgb(66,66,66);
}
div.consumeData {
  margin-right: 20px;
}

div.countInfo {
  padding: 20px;
  background: #fff;
}

div.countTitle {
  background: #fff;
  margin-bottom: 20px;
  padding: 20px;
  color: #444;
}

span.timePeried {
  margin-left: 10px;
}

span.division {
  padding: 0 2px;
}

button.query {
  float: right;
}

button.isClick {
  background: red;
}

div.timeSelectBtn {
  display: inline-block
}
</style>
