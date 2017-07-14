<template>
  <div class="settlementManager">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 待结算</span>
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
        <el-row class="table">
          <table>
            <thead>
              <tr>
                <th>结算月份</th>
                <th>结算金额</th>
                <th>加盟区域</th>
                <th>申请人</th>
                <th>申请日期</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-bind:key="item.applyer" v-for="item of tableData">
                <td>{{item.settle_month}}</td>
                <td>￥{{item.settle_money}}</td>
                <td>{{item.joinPlace}}</td>
                <td>{{item.applyer}}</td>
                <td>{{item.applyDate}}</td>
                <td>
                  <el-button>查看</el-button>
                </td>
              </tr>
            </tbody>
          </table>
        </el-row>
         <div class="carManager_page">
          <div class="M-box"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已结算">
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
        <el-row class="table">
          <table>
            <thead>
              <tr>
                <th>结算月份</th>
                <th>结算金额</th>
                <th>申请区域</th>
                <th>申请人</th>
                <th>结算日期</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              <tr v-bind:key="item.applyer" v-for="item of tableData2">
                <td>{{item.settle_month}}</td>
                <td>￥{{item.settle_money}}</td>
                <td>{{item.apply_place}}</td>
                 <td>{{item.applyer}}</td>
                <td>{{item.settle_Date}}</td>
                <td>{{item.notice}}</td>
              </tr>
            </tbody>
          </table>
        </el-row>
        <div class="carManager_page">
          <div class="M-box"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import $ from 'jquery'
  import {siblings} from '../../../../utils/index.js'
  require('../../../assets/lib/js/jquery.pagination.js')
  import '../../../assets/css/pagination.css'
  export default {
    methods: {
      handleClick (e) {
        var elems = siblings(e.target)
        for (var i = 0; i < elems.length; i++) {
          elems[i].setAttribute('class', '')
        }
        e.target.setAttribute('class', 'active')
      }
    },
    data: function () {
      return {
        tableData: [
          {
            settle_month: '2017-06',
            settle_money: 8111,
            joinPlace: '合肥',
            applyer: '台亮',
            applyDate: '2017-06-01'
          }
        ],
        tableData2: [
          {
            settle_month: '2017-06',
            settle_money: 8111,
            apply_place: '合肥',
            applyer: '台亮',
            settle_Date: '2017-06-01',
            notice: '已付款，银行流水号111111'
          },
          {
            settle_month: '2017-06',
            settle_money: 8111,
            apply_place: '合肥',
            applyer: '台亮',
            settle_Date: '2017-06-01',
            notice: '已付款，银行流水号111111'
          }
        ]
      }
    },
    mounted: function () {
      $('.M-box').pagination({
        pageCount: 50,
        jump: true,
        coping: true,
        homePage: '首页',
        endPage: '尾页',
        prevContent: '«',
        nextContent: '»'
      })
    }
  }
</script>
<style scoped>
  div.selectPlace address{font-style:normal;display:inline;font-size:14px;}
  div.selectPlace div.citys{display:inline-block;}
  div.selectPlace span{cursor:pointer;font-size:14px;display:inline-block;padding:5px;border:1px solid transparent;}
  div.selectPlace span.active{border:1px solid orange;}
  div.table table{border-collapse:collapse;width:100%;}
  div.table table thead tr th{font-weight:normal;text-align: left;border-bottom:2px solid #585555;padding: 5px 10px;}
  div.table table tbody tr td{font-size:14px;color:rgba(121,121,121,1);font-family: '微软雅黑';border:none;border-bottom:1px dotted #afa7a7;padding:14px 10px;color:#555;}
  div.table table thead tr th span.sort{padding:0 5px;display:inline-block;cursor:pointer;}
</style>

