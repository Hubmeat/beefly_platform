<template>
  <div class="carManager" style="margin-right: 20px;">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 已分配</span>
        <div class="carManager_content">
      <div class="queryCarInfo">
        <el-form :model="form">
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
          <el-row>
            <el-col :span="12">
              <el-form-item label="关键字">
                <input type="text" placeholder="车辆号\终端编号\车辆名称"  class="carMan_bar"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态">
                <el-radio class="radio" v-model="form.radio" label="使用中">使用中</el-radio>
                <el-radio class="radio" v-model="form.radio" label="维修中">维修中</el-radio>
                <el-radio class="radio" v-model="form.radio" label="已报废">已报废</el-radio>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-form-item label="上线日期">
                <el-col :span="7">
                  <el-date-picker v-model='form.data1' type="date" placeholder="选择日期"></el-date-picker>
                </el-col>
                <el-col class="line" :span="1">至</el-col>
                <el-col :span="7">
                  <el-date-picker v-model='form.data2' type="date" placeholder="选择日期"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button>查询</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="showCarInfo">
      <table>
        <thead>
          <tr>
            <th>车辆号</th>
            <th>终端编号</th>
            <th>车辆名称</th>
            <th>车型</th>
            <th>上线日期</th>
            <th>状态</th>
            <th>骑行次数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="item.finnalNum" v-for="item of tableData">
            <td>
              <router-link v-bind:to="{path:'/index/carUseDetail', query: {carNum:item.carNum}}">{{item.carNum}}</router-link>
            </td>
            <td>{{item.finnalNum}}</td>
            <td>{{item.carName}}</td>
            <td>{{item.carType}}</td>
            <td>{{item.carOnlineTime}}</td>
            <td>{{item.carStatus}}</td>
            <td>{{item.carRideTimes}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <div class="carManager_page">
      <div class="M-box"></div>
    </div>
      </el-tab-pane>
      <el-tab-pane label="未分配">
        <div class="carManager_content">
      <div class="queryCarInfo">
        <el-form :model="form">
          <el-row>
            <el-col :span="12">
              <el-form-item label="关键字">
                <input placeholder="车辆号\终端编号\车辆名称" class="carMan_bar" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="状态">
                <el-radio class="radio" v-model="form.radio" label="使用中">使用中</el-radio>
                <el-radio class="radio" v-model="form.radio" label="维修中">维修中</el-radio>
                <el-radio class="radio" v-model="form.radio" label="已报废">已报废</el-radio>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-form-item label="上线日期">
                <el-col :span="7">
                  <el-date-picker v-model='form.data1' type="date" placeholder="选择日期"></el-date-picker>
                </el-col>
                <el-col class="line" :span="1">至</el-col>
                <el-col :span="7">
                  <el-date-picker v-model='form.data2' type="date" placeholder="选择日期"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button>查询</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="showCarInfo">
      <table>
        <thead>
          <tr>
            <th>车辆号</th>
            <th>终端编号</th>
            <th>车辆名称</th>
            <th>车型</th>
            <th>上线日期</th>
            <th>状态</th>
            <th>骑行次数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="item.finnalNum" v-for="item of tableData">
            <td>
              <router-link v-bind:to="{path:'/index/carUseDetail', query: {carNum:item.carNum}}">{{item.carNum}}</router-link>
            </td>
            <td>{{item.finnalNum}}</td>
            <td>{{item.carName}}</td>
            <td>{{item.carType}}</td>
            <td>{{item.carOnlineTime}}</td>
            <td>{{item.carStatus}}</td>
            <td>{{item.carRideTimes}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  
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
  data: function () {
    return {
      form: {
        radio: '使用中',
        data1: '',
        data2: ''
      },
      tableData: [
        {
          carNum: '001',
          finnalNum: '681501000555030',
          carName: '小蜜蜂1代',
          carType: '1',
          carOnlineTime: '2017-07-06',
          carStatus: '使用中',
          carRideTimes: '111'
        },
        {
          carNum: '003',
          finnalNum: '681501000555030',
          carName: '小蜜蜂2代',
          carType: '1',
          carOnlineTime: '2017-07-07',
          carStatus: '报废',
          carRideTimes: '333'
        },
        {
          carNum: '003',
          finnalNum: '681501000555030',
          carName: '小蜜蜂2代',
          carType: '1',
          carOnlineTime: '2017-07-07',
          carStatus: '报废',
          carRideTimes: '333'
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
  },
  methods: {
    handleClick (e) {
      var elems = siblings(e.target)
      for (var i = 0; i < elems.length; i++) {
        elems[i].setAttribute('class', '')
      }
      e.target.setAttribute('class', 'active')
    }
  }
}
</script>
<style>
div.selectPlace{margin-bottom:20px;}
  div.selectPlace address{font-style:normal;display:inline;font-size:14px;}
  div.selectPlace div.citys{display:inline-block;}
  div.selectPlace span{cursor:pointer;font-size:14px;display:inline-block;padding:5px;border:1px solid transparent;}
  div.selectPlace span.active{border:1px solid orange;}
.carManager_content {
  background: #fff;
  padding: 20px 30px 20px 30px;
  margin-bottom: 20px;
  /*border: 1px solid #e7ecf1;*/
}

div.carManager div.queryCarInfo {
  background: #f3f0f0;
  padding: 10px 10px 0 10px;
}

div.line {
  margin-left: 0px;
}

div.el-input {
  width: initial
}

div.showCarInfo {
  padding: 20px 30px 10px 30px;
  background: #fff;
  /*border: 1px solid #e7ecf1;*/
  border-bottom: none;
}

div.showCarInfo table {
  border-collapse: collapse;
  width: 100%
}

div.showCarInfo table tr th {
  text-align: center;
  border: 1px solid #dfe6ec;
  padding: 5px 0;
  background: #eef1f6;
  color: #444;
}

div.showCarInfo table tr td {
  text-align: center;
  border: 1px solid #dfe6ec;
  padding: 10px 0;
  color: #555;
  font-size: 14px;
}

div.showCarInfo table tr td a {
  text-decoration: none;
  color: #555
}

div.carManager_page {
    padding: 4px 10px 0 22px;
    /* padding-bottom: 100px; */
    background: #fff;
    /*border: 1px solid #e7ecf1;*/
    border-top: none;
    min-height: 304px;
}

.carManager .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
    width: 70px;
}

.carManager .el-col-7 {
  width: 23.16667%;
}

/*.carManager .el-input__inner {
  width: 500px;
}*/

.carMan_bar {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 445px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}

</style>
