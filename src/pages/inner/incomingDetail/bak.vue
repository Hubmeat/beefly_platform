<template>
  <div class="incomingDetail">
    <el-row class="querybar">
      <el-form :inline="true" v-bind:model="form_join">
        <el-row class="selectPlace">
          <address class="joinArea">加盟区域：</address>
          <div class="citys">
            <span @click="handleClick">全部地区</span>
            <span @click="handleClick">芜湖</span>
            <span @click="handleClick">郑州</span>
            <span @click="handleClick">南京</span>
            <span @click="handleClick" class="active">上海</span>
          </div>
        </el-row>
      </el-form>
    </el-row>
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
    <div id="earD_excel">
			<div id="earD_all">
				<h1>
          <el-tooltip class="item" effect="dark" content="所有车辆骑行收益" placement="bottom-end"> 
					  <p>合计：<span>{{totalMoney}}元</span></p>
          </el-tooltip>
					<p @click='export_excel'>导出明细到Excel</p>
				</h1>
			</div>
		</div>
    <div id="earD_body">
      <el-row class="table">
        <table>
          <thead>
            <tr>
              <th>金额</th>
              <th>车辆编号</th>
              <th>时间</th>
              <th>里程</th>
              <th>加盟区域</th>
              <th>消费日期</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="item.carNumber" v-for="item of tableData">
              <td>￥{{item.money}}</td>
              <td>{{item.carNumber}}</td>
              <td>￥{{item.time}}</td>
              <td>{{item.mileage}}</td>
              <td>{{item.joinPlace}}</td>
              <td>￥{{item.comsumptionDate}}</td>
            </tr>
          </tbody>
        </table>
      </el-row>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import {siblings} from '../../../../utils/index.js'
  require('../../../assets/lib/js/Blob.js')
  export default {
    data: function () {
      return {
        totalMoney: 0,
        form_join: {
          keyword: '姓名/用户名',
          startTime: moment(),
          endTime: moment(),
          tableData: [
            {
              username: '孙悟饭',
              firstname: '台亮',
              operationContent: '修改稿了本人密码，绑定了手机号13811111111',
              operationdate: moment().format('YYYY-MM-DD HH:mm:ss')
            },
            {
              username: '小花猫',
              firstname: '台亮小弟',
              operationContent: '修改了李四的密码，新增了管理员账号：abc',
              operationdate: moment().format('YYYY-MM-DD HH:mm:ss')
            }
          ]
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
        tableData: [
          {
            money: 29,
            carNumber: 8111,
            time: '2017-01-01',
            mileage: '100公里',
            joinPlace: '上海',
            comsumptionDate: '2017-01-01'
          },
          {
            money: 22,
            carNumber: 81011,
            time: '2017-01-01',
            mileage: '200公里',
            joinPlace: '南京',
            comsumptionDate: '2017-01-01'
          },
          {
            money: 123,
            carNumber: 1111,
            time: '2017-01-01',
            mileage: '40公里',
            joinPlace: '东京',
            comsumptionDate: '2017-01-01'
          }
        ]
      }
    },
    methods: {
      handleClick (e) {
        var elems = siblings(e.target)
        for (var i = 0; i < elems.length; i++) {
          elems[i].setAttribute('class', '')
        }
        e.target.setAttribute('class', 'active')
      },
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
      },
      export_excel () {
        this.$confirm('确认导出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          console.log('this is entry')
          require.ensure([], () => {
            this.$loading({customClass: 'loading_class'})
            var that = this
            setTimeout(() => {
              that.$loading({customClass: 'loading_class'}).close()
              const { export_json_to_excel } = require('../../../assets/lib/js/Export2Excel.js')
              const tHeader = ['金额', '车牌号', '消费时间', '里程', '加盟区域', '消费日期']
              const filterVal = ['money', 'carNumber', 'time', 'mileage', 'joinPlace', 'comsumptionDate']
              const list = this.tableData
              const data = this.formatJson(filterVal, list)
              export_json_to_excel(tHeader, data, '列表excel')
              that.$message({
                type: 'success',
                message: '导出成功'
              })
            }, 1000)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      formatJson (filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
      },
      countMoney () {
        var money = 0
        this.tableData.map(function (item) {
          money += item.money
        })
        this.totalMoney = money
      }
    },
    mounted: function () {
      this.countMoney()
    }
  }
</script>
<style scoped>
div.table table{border-collapse:collapse;width:100%;}
div.table table thead tr th{font-weight:normal;text-align: left;border-bottom:2px solid #585555;padding: 5px 10px;}
div.table table tbody tr td{font-size:14px;color:rgba(121,121,121,1);font-family: '微软雅黑';border:none;border-bottom:1px dotted #afa7a7;padding:14px 10px;color:#555;}
div.table table thead tr th span.sort{padding:0 5px;display:inline-block;cursor:pointer;}
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
  div.selectPlace{margin-bottom:20px;}
  div.selectPlace address{font-style:normal;display:inline;font-size:14px;}
  div.selectPlace div.citys{display:inline-block;}
  div.selectPlace span{cursor:pointer;font-size:14px;display:inline-block;padding:5px;border:1px solid transparent;}
  div.selectPlace span.active{border:1px solid orange;}
  div.el-form-item__content div.el-input{display:inline-block;width: 192px;}
  div.el-form-item__content span.keyworkds{width: 63px;display: inline-block;text-align: right;margin-right: 10px;}
  	#earD_excel {
		background:#fff;
    border: 1px solid #e7ecf1;
    border-top: none;
	}

	#earD_all {
		width: 100%;
		height: 40px;
		background: #fcfcd3;
		margin-top: 20px;
	}

	#earD_all h1 {
		width: 100%;
		line-height: 40px;
		height: 40px;
	}

	#earD_all h1 p:nth-of-type(1) {
		float: left;
		margin-left: 10px;
		font-size: 12px;
		color: #868671;
    cursor: pointer;
	}

	#earD_all h1 p:nth-of-type(2) {
		float: right;
		font-size: 12px;
		margin-right: 10px;
		color: #ff9900;
	}

	#earD_all h1 p:nth-of-type(2):hover {
		text-decoration: underline;
    cursor: pointer;
	}

	#earD_body {
    padding: 20px 20px 10px 20px;
    background: #fff;
    margin-top: 20px;
    padding-left: 28px;
    padding-right: 28px;
    border: 1px solid #e7ecf1;
    border-bottom: none;
	}
</style>
