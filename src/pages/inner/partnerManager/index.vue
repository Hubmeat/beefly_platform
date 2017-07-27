<template>
  <div style="margin-right:20px;">
    <div id="partner_header">
      <label>
        <span>关键字</span>
          <input type="text" placeholder="姓名\证件号码" class="partner_my_input1">
      </label>
      <label>
        <span>联系方式</span>
          <input type="text" placeholder="手机号\邮箱" class="partner_my_input2">
      </label>
    </div>

    <div id="partner_data_select">
      <label>
        <span>加盟日期</span>
        <el-date-picker
        v-model="date1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
      </label>
      <label>
        <span>至</span>
        <el-date-picker
        v-model="date2"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
      </label>

      <el-button class="my_btn">查询</el-button>
    </div>
  
    <div id="partner_table">
      <div id="partner_add">
        <button @click="$router.push({path:'/index/partnerManager/addpartner'})">添加加盟商</button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100% font-size:13px;"
        @cell-click='show_detail'>
        <el-table-column
          prop="alliance_number"
          label="加盟商编号"
          min-width="70">
        </el-table-column>
        <el-table-column
          prop="company_name"
          label="公司名称"
          min-width="140">
        </el-table-column>
        <el-table-column
          prop="alliance_area"
          label="加盟区域"
          min-width="65">
        </el-table-column>
        <el-table-column
          prop="alliance_money"
          label="加盟资金(万)"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="alliance_data"
          label="加盟日期"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="subscription_bike"
          label="认购车辆数"
          min-width="80">
        </el-table-column>
        <el-table-column
          label="操作"
          prop="del"
          min-width="75">
          <template scope="scope">
            <span><a @click='handleRowHandle(scope.row.subscription_id)' class="alliance_table_allocation">分配车辆</a></span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          prop="del">
          <template scope="scope">
            <a style="color:#444; margin-right:10px; cursor: pointer;" @click="goDetail(scope.row.partnerId)" title="查看">
              <i class="el-icon-document"></i>
            </a>
            <a href="javascript:;" @click="openEdit(scope.row, scope.$index)" style="color:#444; margin-right:10px;" title="编辑">
              <i class="el-icon-edit"></i>
            </a>
            <a href="javascript:;" @click='delPartner(scope.row.partnerId, scope.$index)' style="color:#444; margin-right:10px;" title="删除">
              <i class="el-icon-close"></i>
            </a>
            <!--dialog 弹窗开始-->
            <el-dialog title="合伙人信息" :visible.sync="dialogVisible" :modal="true" :modal-append-to-body="false">
              <el-form :model="editAccount">
                <el-form-item label="姓名" :label-width="formLabelWidth" style="width: 300px;">
                  <el-input v-model="editAccount.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth" style="width: 300px;">
                  <el-input v-model="editAccount.sex"></el-input>
                </el-form-item>
                <el-form-item label="证件号码" :label-width="formLabelWidth" style="width: 300px;">
                  <el-input v-model="editAccount.IDcard" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth" style="width: 300px;">
                  <el-input v-model="editAccount.tel" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth" style="width: 300px;">
                  <el-input v-model="editAccount.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="车辆数" :label-width="formLabelWidth" style="width: 300px;">
                  <el-input v-model="editAccount.cars" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button class="partner_button" type="primary" v-loading.fullscreen.lock="fullscreenLoading" @click="editConfim(scope.row, scope.$index)">确定</el-button>
                <el-button class="partner_button" @click="dialogVisible = false">取消</el-button>
              </div>
            </el-dialog>
            <!--dialog 弹窗结束-->
          </template>
        </el-table-column>
      </el-table>
    </div>
  
    <div id="partner_page">
      <div class="M-box"></div>
    </div>
  
    <router-view id="partnerManager_router"></router-view>
  </div>
</template>

<style>
#partnerManager_router {
  width: 100%;
  height: 100%;
  background: rgba(68, 68, 68, 0.6);
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
}

	#partner_header {
    /*width: 100%;*/
    height: 70px;
    background: #fff;
    border: 1px solid #e7ecf1;
    border-bottom: none;
	}

  #partner_header .partner_my_input1 {
    width: 192px; 
    height: 30px;
    outline: none;
    margin-top: 4px;
    border-radius: 4px;
    border: 1px solid #ddd; 
    text-indent: 10px;
    display: inline-block;
  }
  
  #partner_header .partner_my_input2 {
    width: 181px;
    border-radius: 4px;
    height: 30px;
    outline: none;
    margin-top: 4px;
    text-indent: 10px;
    border: 1px solid #ddd;
    display: inline-block;
  }

	#partner_header label:nth-of-type(1) {
    height: 70px;
    width: 280px;
    line-height: 70px;
    margin-left: 30px;
    font-size: 14px;
    float: left;
	}

  #partner_header label:nth-of-type(1)>span {
    margin-right: 20px;
  }

	#partner_header label:nth-of-type(2) {
    height: 70px;
    font-size: 14px;
    width: 400px;
    line-height: 70px;
    /*margin-left: 20px;*/
    float: left;
	}

  #partner_header label:nth-of-type(2)>span {
    margin-right: 6px;
  }

  /*partner_data_select*/
  #partner_data_select {
    padding: 0px 30px 20px 30px;
    background: #fff;
    border: 1px solid #e7ecf1;
    border-top: none;
  }

  #partner_data_select label:nth-child(1) span {
    font-size: 14px;
    margin-right: 6px;
  }

  #partner_data_select label:nth-child(2) span {
    font-size: 16px;
    margin: 0 25px;
  }

  #partner_data_select button:hover {
    color: #20a0ff;
    border-color: #20a0ff;
	}

::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #bfcbd9;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #bfcbd9;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #bfcbd9;
}

:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #bfcbd9;
}


/*#partner_header button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  float: right;
  border: 1px solid #c4c4c4;
  color: #1f2d3d;
  margin: 17px 33px;
  padding: 10px 15px;
  border-radius: 4px;
}

#partner_header button:hover {
  color: #20a0ff;
  border-color: #20a0ff;
}*/

/*  #partner_table  */

#partner_table {
  padding: 0 30px 10px 30px;
  background: #fff;
  border: 1px solid #e7ecf1;
  border-bottom: none;
  margin-top: 20px;
}

#partner_add {
  width: 90%;
  height: 68px;
  line-height: 68px;
}

#partner_add button {
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  background: rgba(66, 66, 66, 0.8);
  transition: all .2s linear 0s;
}

#partner_add button:hover {
  background: rgb(66, 66, 66);
  cursor: pointer;
}

#partner_page {
  padding: 4px 10px 0 20px;
  padding-bottom: 100px;
  background: #fff;
  border: 1px solid #e7ecf1;
  border-top: none;
  min-height: 230px;
}

.partner_button:nth-of-type(1) {
  background: #f87e2b;
  border: none;
  color: #fff;
  margin-left: 70px;
}

.partner_button:nth-of-type(1):hover {
  background: rgba(248, 126, 43, 0.9);
}

.partner_button:nth-of-type(2) {
  background: #fff;
  color: #444;
  border: 1px solid rgba(196,196,196,1);
}

.partner_button:nth-of-type(2):hover {
  border: 1px solid rgb(248, 126, 43);
  color: rgb(248, 126, 43);
}

.partner_button {
  width: 120px;
  height: 50px;
  float: left;
  margin-top: -30px;
  margin-bottom: 20px;
}

 .el-input__inner {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  color: #1f2d3d;
  font-size: inherit;
  height: 36px;
  line-height: 1;
  outline: 0;
  padding: 3px 10px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}

.el-input__inner::-webkit-input-placeholder {
  color: #ddd;
}

.el-date-table td.current:not(.disabled), .el-date-table td.end-date, .el-date-table td.start-date {
  background: black !important;
  color: #fff !important;
}

.el-input__inner:hover {
  border: 1px solid #bbb;
}

.my_btn {
    width: 80px;
    float: right;
    height: 36px;
    line-height: 11px;
    color: #fff;
    /*margin-top: 10px;*/
    outline: none;
    border: none;
    border-radius: 4px; 
    cursor: pointer;
    background: rgba(52,52,67, 0.8);
}

.my_btn:hover {
    background: rgba(52,52,67, 0.9);
    color: #fff !important;
}
</style>

<script>
  import $ from 'jquery'
  import request from 'superagent'
  import moment from 'moment'
  require('../../../assets/lib/js/jquery.pagination.js')
  import '../../../assets/css/pagination.css'
export default {
  data() {
    return {
      tableData: [],
      options: [{
        value: '0',
        label: '>'
      }, {
        value: '1',
        label: '<'
      }, {
        value: '2',
        label: '='
      }, {
        value: '3',
        label: '<='
      }, {
        value: '4',
        label: '=>'
      }],
      value: '',
      pagetotal: '',
      dialogVisible: false,
      formLabelWidth: '70px',
      editAccount: {
        name: '',
        sex: '',
        IDcard: '',
        tel: '',
        email: '',
        cars: '',
        id: ''
      },
      fullscreenLoading: false,
      searchDate1: '',
      searchDate2: '',
      search_Number: '',
      date1: '',
      date2: '',
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      }
    }
  },
  mounted() {
    request
      .post('http://192.168.3.52:7099/franchisee/franchiseeManager/getPartners')
      .withCredentials()
      .set({
        'content-type': 'application/x-www-form-urlencoded'
      })
      .send({
        'franchiseeId': '123456',
        'userId': 'admin'
      })
      .end((err, res) => {
        if (err) {
          console.log('err:' + err)
        } else {
          // console.log(JSON.parse(res.text))
          var newArr = JSON.parse(res.text).list
          this.$store.dispatch('partner_action', { newArr })
          var pageNumber = JSON.parse(res.text).totalPage
          this.tableData = this.$store.state.partnerList
          this.pagetotal = pageNumber
          $('.M-box').pagination({
            pageCount: pageNumber,
            jump: true,
            coping: true,
            homePage: '首页',
            endPage: '尾页',
            prevContent: '«',
            nextContent: '»'
          })
        }
      })
  },
  beforeUpdate() {
    var that = this
    $('.M-box').click('a', function (e) {
      // console.log(e)
      that.pageUpdate(e)
    })
  },
  methods: {
    pageUpdate(e) {
      var that = this
      console.log(this.pagetotal)
      clearTimeout(this.timer)
      if (e.target.tagName === 'A' || e.target.tagName === 'SPAN') {
        if (e.target.innerHTML === '首页') {
          e.target.innerHTML = 1
        } else if (e.target.innerHTML === '尾页') {
          e.target.innerHTML = this.pagetotal
        } else if (e.target.innerHTML === '«') {
          e.target.innerHTML = Number($('.M-box span.active')[0].innerHTML) - 1
        } else if (e.target.innerHTML === '»') {
          console.log($('.M-box span.active')[0].innerHTML)
          e.target.innerHTML = Number($('.M-box span.active')[0].innerHTML) + 1
        } else if (e.target.innerHTML === '...') {
          return
        }
      } else {
        return
      }
      this.timer = setTimeout(function () {
        request
          .post('http://192.168.3.52:7099/franchisee/franchiseeManager/getPartners?page=' + e.target.innerHTML)
          .withCredentials()
          .set({
            'content-type': 'application/x-www-form-urlencoded'
          })
          .send({
            'franchiseeId': '123456',
            'userId': 'admin'
          })
          .end((error, res) => {
            if (error) {
              console.log('error:', error)
            } else {
              // console.log(JSON.parse(res.text))
              var newArr = JSON.parse(res.text).list
              that.$store.dispatch('partner_action', { newArr })
              var pageNumber = JSON.parse(res.text).totalPage
              that.tableData = that.$store.state.partnerList
              that.totalPage = pageNumber
            }
          })
      }, 200)
    },
    delPartner(id, index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        request
          .post('http://192.168.3.52:7099/franchisee/partner/delPartner')
          .withCredentials()
          .set({
            'content-type': 'application/x-www-form-urlencoded'
          })
          .send({
            'franchiseeId': '123456',
            'userId': 'admin',
            'id': id
          })
          .end((err, res) => {
            if (err) {
              console.log('err:' + err)
            } else {
              console.log(JSON.parse(res.text).code)
              console.log(JSON.parse(res.text).code === 0)
              if (JSON.parse(res.text).code === 0) {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
                this.$store.state.partnerList.splice(index, 1)
              } else {
                this.$message({
                  type: 'error',
                  message: '删除失败，请联系🐝出行'
                })
              }

            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    goDetail(id) {
      console.log(id)
      this.$router.push('/index/partnerDetail/')
    },
    openEdit(row) {
      this.dialogVisible = true
      this.editAccount.name = row.name
      this.editAccount.sex = row.sex
      this.editAccount.IDcard = row.IDcard
      this.editAccount.tel = row.tel
      this.editAccount.email = row.email
      this.editAccount.cars = row.cars
    },
    editConfim(row, index) {
      var that = this
      this.fullscreenLoading = true
      setTimeout(() => {
        that.fullscreenLoading = false
        var newAccountInfo = {}
        newAccountInfo.name = that.editAccount.name
        newAccountInfo.sex = that.editAccount.sex
        newAccountInfo.IDcard = that.editAccount.IDcard
        newAccountInfo.tel = that.editAccount.tel
        newAccountInfo.email = that.editAccount.email
        newAccountInfo.cars = that.editAccount.cars
        var index = that.editAccount.index
        that.$store.state.partnerList.splice(index, 1, newAccountInfo)
        that.dialogVisible = false
      }, 500)
    },
    searchByInput () {
      if (this.searchDate1 === '' && this.searchDate2 === '' && this.search_Number === '') {
        this.$message({
          message: '请输入查询信息',
          type: 'warning'
        })
      } else {
        console.log(this.searchDate1)
        console.log(this.searchDate2)
        console.log(this.search_Number)
        console.log(this.value)
          request
            .post('http://192.168.3.52:7099/franchisee/partner/queryPartner？type=' + this.value)
            .withCredentials()
            .set({
              'content-type': 'application/x-www-form-urlencoded'
            })
            .send({
              'franchiseeId': '123456',
              'userId': 'admin',
              'idCard': this.searchDate1,
              'name': this.searchDate1,
              'phoneNo': this.searchDate2,
              'email': this.searchDate2
            })
            .end((err, res) => {
              if (err) {
                console.log('err:' + err)
              } else {
                console.log(JSON.parse(res.text))
                this.$store.dispatch('partner_action', { newArr })
                this.tableData = this.$store.state.partnerList
                var pageNumber = JSON.parse(res.text).totalPage
                if (pageNumber < 10) {
                  return
                } else {
                  this.pagetotal = pageNumber
                  $('.M-box').pagination({
                    pageCount: pageNumber,
                    jump: true,
                    coping: true,
                    homePage: '首页',
                    endPage: '尾页',
                    prevContent: '«',
                    nextContent: '»'
                  })
                }
              }
            })
      }
    },
    show_detail (row, column) {
      if (column.label === '加盟商编号') {
        this.$router.push('/index/vehicleDistribution/' + row.subscription_id)
      } else {
        console.log('sss')
      }
    }
  }
}
</script>
