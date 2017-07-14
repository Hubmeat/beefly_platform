<template>
  <div class="carUseDetail">
    <div class="detailTitle">
      <h3>加盟商详情</h3>
    </div>
    <el-row>
      <el-col :span="16">
        <table>
          <tbody>
            <tr>
              <td><span class="prex">加盟商编号：</span>100001</td>
              <td><span class="prex">企业名称：</span>安徽十方电子商务有限公司</td>
            </tr>
            <tr>
              <td><span class="prex">营业执注册号：</span>23134344224242</td>
              <td><span class="prex">通讯地址：</span>安徽省黄山路1580号</td>
            </tr>
            <tr>
              <td><span class="prex">加盟日期：</span>2015-01-01</td>
              <td><span class="prex">认购车辆：</span>1000辆</td>
            </tr>
            <tr>
              <td><span class="prex">加盟资金：</span>￥6000万</td>
              <td><span class="prex">加盟区域：</span>合肥肥西区</td>
            </tr>
          </tbody>
        </table>
      </el-col>
      <el-col :span="6" class="battery">
        <ul>
          <li><img src="../../../assets/img/1.jpg" alt="img"></li>
        </ul>
      </el-col>
    </el-row>
    <el-row class="record">
      <el-tabs v-model="activeName">
        <el-tab-pane class="incomeRecord recodeTable" label="车辆明细" name="first">
          <table>
            <thead>
              <tr>
                <th>车辆号</th>
                <th>终端编号</th>
                <th>车辆型号</th>
                <th>上线日期</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-bind:key="index" v-for="(item,index) of car_infor_data">
                <td>{{item.carNumber}}</td>
                <td>{{item.terminalNumber}}</td>
                <td>{{item.carModel}}</td>
                <td>{{item.onlineDate}}</td>
                <td>{{item.status}}</td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="合伙人" name="second" class="recodeTable">
          <table>
            <thead>
              <tr>
                <th>姓名</th>
                <th>性别</th>
                <th>证件号码</th>
                <th>手机号</th>
                <th>邮箱</th>
                <th>认购车辆数</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-bind:key="index" v-for="(item,index) of partner_info_detail">
                <td>{{item.partner_name}}</td>
                <td>{{item.partner_sex}}</td>
                <td>{{item.partner_IDcard}}</td>
                <td>{{item.partner_tel}}</td>
                <td>{{item.partner_eamil}}</td>
                <td>{{item.partner_getCar}}</td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="结算记录" name="third" class="recodeTable">
          <table>
            <thead>
              <tr>
                <th>结算月份</th>
                <th>结算金额</th>
                <th>申请时间</th>
                <th>状态</th>
                <th>财务备注</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-bind:key="index" v-for="(item,index) of settle_record">
                <td>{{item.settle_date}}</td>
                <td>{{item.settle_money}}</td>
                <td>{{item.settle_time}}</td>
                <td>{{item.settle_status}}</td>
                <td>{{item.settle_remark}}</td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="联系人" name="fourth" class="recodeTable">
          <ul class='contact_ul'>
            <li><span>姓名：</span>{{contact.name}}</li>
            <li><span>证件类别：</span>{{contact.IDtype}}</li>
            <li><span>证件号码：</span>{{contact.IDcard}}</li>
            <li><span>手机号：</span>{{contact.tel}}</li>
            <li><span>邮箱：</span>{{contact.eamil}}</li>
            <li><span>用户名：</span>{{contact.username}}</li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <div id="carUseDetail_page">
      <div class="M-box"></div>
		</div>
  </div>  
</template>
<script>
  import $ from 'jquery'
  require('../../../assets/lib/js/jquery.pagination.js')
  import '../../../assets/css/pagination.css'
  export default {
    data: function () {
      return {
        router: this.$route.query.carNum,
        activeName: 'first',
        car_infor_data: [
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          },
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          },
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          },
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          },
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          },
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          },
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          },
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          },
          {
            carNumber: '1001',
            terminalNumber: '6850222222434334',
            carModel: '小蜜蜂一代',
            onlineDate: '2017-01-03',
            status: '使用中'
          }
        ],
        settle_record: [
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          },
          {
            settle_date: '2017-01',
            settle_money: '100.00',
            settle_time: '2017-01-03 20:10:10',
            settle_status: '审核中',
            settle_remark: '这里是备注'
          }
        ],
        partner_info_detail: [
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          },
          {
            partner_name: '王世成',
            partner_sex: '女',
            partner_IDcard: '342423122323313442',
            partner_tel: '13822324224',
            partner_eamil: 'wangshicheng@163.com',
            partner_getCar: '1000'
          }
        ],
        contact: {
          name: '王世成',
          IDtype: '身份证',
          IDcard: '3424231444222132222',
          tel: '13845678877',
          eamil: 'wangshicheng@163.com',
          username: '小此楼'
        }
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
  div.carUseDetail {
    margin-right: 20px;
    background: #fff;
  }
  div.carUseDetail table{border-collapse:collapse;width:100%;}
  div.carUseDetail table tr td{padding:5px 10px;}
  div.carUseDetail table tr td span.prex{display:inline-block;width:100px;text-align:right;color:#bdb6b6;font-size:14px;margin-right: 8px;}
  div.carUseDetail div.detailTitle h3{line-height: 30px;background:#555;color:#fff;margin-bottom:20px;padding:10px;}
  div.carUseDetail div.battery{float:right;}
  div.carUseDetail div.battery ul li{list-style-type:none;margin-bottom:10px; 
    margin-right: 20px;}
  div.carUseDetail div.battery ul li img {
    display: block;
    width: 100%;
  }
  div.carUseDetail div.record{margin-top: 50px; padding: 0 4px 0 4px; background: #fff;}
  div.carUseDetail div.recodeTable table{border-collapse:collapse;width:100%;}
  div.carUseDetail div.recodeTable table thead tr th{font-weight:normal;text-align: left;border-bottom:1px solid #afa7a7;padding: 5px 10px;}
  div.carUseDetail div.recodeTable table tbody tr td{border:none;border-bottom:1px dotted #afa7a7;padding:10px;color:#555;}
  div#carUseDetail_page{margin-top:50px; min-height: 230px;}

  .contact_ul {
    width: 300px;
    height: 200px;
    margin-left: 20px;
    margin-top: 10px;
    list-style: none;
  }

  .contact_ul li {
    height: 30px;
    line-height: 30px;
    color: #555;
  }

  .contact_ul li span {
    height: 30px;
    width: 80px;
    display: inline-block;
    margin-right: 6px;
    text-align: right;
    color: #bdb6b6;
    line-height: 30px;
  }
</style>
