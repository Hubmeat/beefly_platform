<template>
  <div style="margin-right:20px;">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClickTab" >
      <el-tab-pane name="平台">
        <span slot="label"><i class="el-icon-date"></i> 平台</span>
        <div id="am_search">
          <label>
            <span>关键字 :</span>
            <input type="text" class="account_my_input">
          </label>
          <label>
            <span>联系方式 :</span>
            <input type="text" class="account_my_input">
          </label>
      
			<el-button class="my_btn">查询</el-button>
        </div>
        <!-- account -->
        <div class="account">
      <h1>
        <button type="button" @click="addAccount">添加新账号</button>
        <!--新增数据开始-->
        <!--新增数据结束-->
      </h1>
  
      <!-- 表单 -->
      <el-table :data="platTableData" style="width: 100%; font-size:13px;" v-loading="loading" element-loading-text="正在删除中">
        <el-table-column prop="userId" label="用户名" min-width="140"></el-table-column>
        <el-table-column prop="phoneNo" label="手机号" min-width="140"></el-table-column>
        <el-table-column prop="email" label="邮箱" min-width="170"></el-table-column>
        <el-table-column prop="name" label="姓名" min-width="100"></el-table-column>
        <!-- <el-table-column prop="role" label="类别" min-width="120">
          <template scope="scope">
            <span v-if="scope.row.role===0">管理员</span>
            <span v-else-if="scope.row.role===1">加盟商</span>
            <span v-else>合伙人</span>
          </template>
        </el-table-column> -->
        <el-table-column label="状态" min-width="120" style="font-size:12px;">
          <template scope="scope">
            <el-switch
                v-on:change="changeState(scope)"
                v-model="scope.row.state" 
                on-text="开启" 
                off-text="关闭" 
                on-color="#13ce66"
                off-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="del" label="操作">
          <template scope="scope">
            <a href="javascript:;"></a>
            <i class="el-icon-edit" @click="openEdit(scope)" title="修改" style="margin-right:10px;"></i>
            </a>
            <i class="el-icon-close" title="删除" @click="openDelete(scope)"></i>
            <!--dialog 弹窗开始-->
             <el-dialog title="账号信息" :visible.sync="dialogVisible" :modal="true"
              :modal-append-to-body="false">
              <el-form :model="editAccount">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                  <el-input v-model="editAccount.userId" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                  <el-input v-model="editAccount.phoneNo"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                  <el-input v-model="editAccount.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="editAccount.name" auto-complete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="类别" :label-width="formLabelWidth">
                  <el-select v-model="editAccount.role" placeholder="请选择类别">
                    <el-option
                      label="管理员"
                      value="管理员">
                    </el-option>
                    <el-option
                      label="合伙人"
                      value="合伙人">
                    </el-option>
                    <el-option
                      label="加盟商"
                      value="加盟商">
                    </el-option>
                  </el-select>
                </el-form-item> -->
                <el-form-item label="状态" :label-width="formLabelWidth">
                  <el-radio-group v-model="editAccount.state">
                    <el-radio v-bind:label="true">开启</el-radio>
                    <el-radio v-bind:label="false">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer editfooter">
                <el-button class="accountMangerBtn" type="primary" @click="handleEditAccount">确 定</el-button>
                <el-button class="accountMangerBtn" @click="dialogVisible = false">取 消</el-button>
              </div>
            </el-dialog>
            <!--dialog 弹窗结束-->
          </template>
        </el-table-column>
      </el-table>
    </div>
  
    <div id="account_page">
      <div class="M-box">
      </div>
    </div>
      </el-tab-pane>
      <el-tab-pane label="加盟商" name="加盟商">
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
         <div id="am_search">
          <label>
            <span>关键字 :</span>
            <input type="text" class="account_my_input">
          </label>
          <label>
            <span>联系方式 :</span>
            <input type="text" class="account_my_input">
          </label>
      
          <button type="submit" class="my_btn">查询</button>
        </div>
        <!-- account -->
         <div class="account">
      <h1>
        <button type="button" @click="addAccount">添加新账号</button>
        <!--新增数据开始-->
        <!--新增数据结束-->
      </h1>
  
      <!-- 表单 -->
      <el-table :data="joinTableData" style="width: 100%; font-size:13px;" v-loading="loading" element-loading-text="正在删除中">
        <el-table-column prop="userId" label="用户名" min-width="140"></el-table-column>
        <el-table-column prop="phoneNo" label="手机号" min-width="140"></el-table-column>
        <el-table-column prop="email" label="邮箱" min-width="170"></el-table-column>
        <el-table-column prop="name" label="姓名" min-width="100"></el-table-column>
        <!-- <el-table-column prop="role" label="类别" min-width="120">
          <template scope="scope">
            <span v-if="scope.row.role===0">管理员</span>
            <span v-else-if="scope.row.role===1">加盟商</span>
            <span v-else>合伙人</span>
          </template>
        </el-table-column> -->
        <el-table-column label="状态" min-width="120" style="font-size:12px;">
          <template scope="scope">
            <el-switch
                v-on:change="changeState(scope)"
                v-model="scope.row.state" 
                on-text="开启" 
                off-text="关闭" 
                on-color="#13ce66"
                off-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="del" label="操作">
          <template scope="scope">
            <a href="javascript:;"></a>
            <i class="el-icon-edit" @click="openEdit(scope)" title="修改" style="margin-right:10px;"></i>
            </a>
            <i class="el-icon-close" title="删除" @click="openDelete(scope)"></i>
            <!--dialog 弹窗开始-->
             <el-dialog title="账号信息" :visible.sync="dialogVisible" :modal="true"
              :modal-append-to-body="false">
              <el-form :model="editAccount">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                  <el-input v-model="editAccount.userId" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                  <el-input v-model="editAccount.phoneNo"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                  <el-input v-model="editAccount.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="editAccount.name" auto-complete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="类别" :label-width="formLabelWidth">
                  <el-select v-model="editAccount.role" placeholder="请选择类别">
                    <el-option
                      label="管理员"
                      value="管理员">
                    </el-option>
                    <el-option
                      label="合伙人"
                      value="合伙人">
                    </el-option>
                    <el-option
                      label="加盟商"
                      value="加盟商">
                    </el-option>
                  </el-select>
                </el-form-item> -->
                <el-form-item label="状态" :label-width="formLabelWidth">
                  <el-radio-group v-model="editAccount.state">
                    <el-radio v-bind:label="true">开启</el-radio>
                    <el-radio v-bind:label="false">关闭</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer editfooter">
                <el-button class="accountMangerBtn" type="primary" @click="handleEditAccount">确 定</el-button>
                <el-button class="accountMangerBtn" @click="dialogVisible = false">取 消</el-button>
              </div>
            </el-dialog>
            <!--dialog 弹窗结束-->
          </template>
        </el-table-column>
      </el-table>
    </div>
  
    <div id="account_page">
      <div class="M-box">
      </div>
    </div>
      </el-tab-pane>
    </el-tabs>
    

      <!--<div v-show='router_show' >-->
        <router-view id="account_router"></router-view>
      <!--</div>-->
  </div>
</template>

<script>
import $ from 'jquery'
import {siblings,checkPositiveNumber } from '../../../../utils/index.js'
require('../../../assets/lib/js/jquery.pagination.js')
import '../../../assets/css/pagination.css'
import request from 'superagent'
export default {
  data () {
    return {
      tableTitle:'平台',
      activeName: '平台',
      input: '',
      currentPage: 1,
      platTableData:[],
      joinTableData: [],
      platCurPage:0,
      joinCurPage:1,
      platTotalPage:0,
      joinTotalPage:0,
      router_show: false,
      dialogVisible: false,
      totalPage: '',
      loading: false,
      formLabelWidth: '60px',
      editAccount: {
        userId: '',
        phoneNo: '',
        email: '',
        name: '',
        role: '',
        state: '',
        value: '',
        index:''
      }
    } 
  },
  methods: {
    change (type) {
      this.$router.push('/index/accountManager/addaccount' + type)
      this.router_show = true
    },
    addAccount () {
      if(this.tableTitle==='平台') {
         this.$router.push('/index/accountManager/addaccount')
         this.router_show = true
         this.tableTitle='平台'
      }else {
        this.$router.push('/index/accountManager/addaccount2')
        this.router_show = true
        this.tableTitle='加盟商'
      }
    },
    handleClick (e) {
      var elems = siblings(e.target)
      for (var i = 0; i < elems.length; i++) {
        elems[i].setAttribute('class', '')
      }
      e.target.setAttribute('class', 'active')
    },
    openEdit (scope) {
      if (scope.row.role === 0) {
        this.editAccount.role = '管理员'
      } else {
        this.editAccount.role = '加盟商'
      }
      this.dialogVisible = true
      this.editAccount.userId = scope.row.userId
      this.editAccount.email = scope.row.email
      this.editAccount.phoneNo = scope.row.phoneNo
      this.editAccount.name = scope.row.name
      this.editAccount.state = scope.row.state
      this.editAccount.index= scope.$index
      this.editAccount.id = scope.row.id
      this.editAccount.initUserId = scope.row.userId
    },
    handleEditAccount () {
      this.dialogVisible = false
      var that = this
      var newAccountInfo = {}
      if (this.editAccount.role === '管理员') {
        newAccountInfo.role = 0
      } else {
        newAccountInfo.role = 1
      }
      newAccountInfo.id = this.editAccount.id
      newAccountInfo.userId = this.editAccount.initUserId
      newAccountInfo.email = this.editAccount.email
      newAccountInfo.phoneNo = this.editAccount.phoneNo
      newAccountInfo.name = this.editAccount.name
      newAccountInfo.state = (this.editAccount.state==true?0:1)
      var index = this.editAccount.index
      if(this.activeName === '平台') {
        // this.platTableData.splice(index,1,newAccountInfo)
      } else{
          request.post('http://192.168.3.52:7099/franchisee/account/modifyAccountStateByAdmin')
            .send({
              adminUser: {
                id:0,
                userId: 'root'
              },
              account: newAccountInfo
            })
            .end((err, res) =>{
              if(err) {
                console.log(err)
              } else {
                console.log(res)
              }
            })
         this.joinTableData.splice(index,1,newAccountInfo)
      }
    },
    openDelete (scope) {
      var that = this
      if(this.activeName==='平台') {
          this.$confirm('此操作将永久删除该账号, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              that.loading = true
              request.post('http://192.168.3.52:7099/franchisee/account/delAdminUser')
                .send({
                  curUser: {
                    id: 0,
                    role: 0,
                    userId: '123'
                  },
                  user: {
                    id: scope.row.id,
                    userId: scope.row.userId
                  }
                })
                .end((err, res) => {
                  if (err) {
                    console.log(err)
                  } else {
                    var code = JSON.parse(res.text).code
                    if (code === 1) {
                      that.loading = false
                      that.$message({
                        type: 'error',
                        message: '对不起，您没有权限!'
                      })
                    }else if(code === 0) {
                      that.loading = false
                      that.$message({
                        type: 'success',
                        message: '恭喜您，删除成功!'
                      })
                      that.platTableData.splice(scope.$index,1)
                    }
                  }
                })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              })      
            })
      } else{
         this.$confirm('此操作将永久删除该账号, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              that.loading = true
              request.post('http://192.168.3.52:7099/franchisee/account/delAccountByAdmin')
                .send({
                  adminUser: {
                    id: 0,
                    role: 0,
                    userId: '123'
                  },
                  account: {
                    id: scope.row.id,
                    userId: scope.row.userId
                  }
                })
                .end((err, res) => {
                  if (err) {
                    console.log(err)
                  } else {
                    var code = JSON.parse(res.text).code
                    if (code === 1) {
                      that.loading = false
                      that.$message({
                        type: 'error',
                        message: '对不起，您没有权限!'
                      })
                    }else if(code === 0) {
                      that.loading = false
                      that.$message({
                        type: 'success',
                        message: '恭喜您，删除成功!'
                      })
                      that.joinTableData.splice(scope.$index,1)
                    }
                  }
                })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              })      
            })
      }
    },
    changeState (scope) {
    if(this.activeName==='平台') {
        
    }else {
        //console.log(scope)
        var obj = Object.assign({},scope.row, {state: !scope.row.state})
        console.log(scope.row.state)
        var obj2 = Object.assign({},scope.row, {state: !scope.row.state?0:1})
        console.log(obj2)
        //console.log(obj)
        request.post('http://192.168.3.52:7099/franchisee/account/modifyAccountStateByAdmin')
            .send({
              adminUser: {
                id:0,
                userId: 'root'
              },
              account: obj2
            })
            .end((err, res) =>{
              if(err) {
                console.log(err)
              } else {
                console.log(res)
                this.joinTableData.splice(scope.$index,1,obj)
              }
            })
         
    }
    //  var index= scope.$index
    //  var obj = Object.assign({},scope.row,{state: !scope.row.state})
    //  this.tableData.splice(index,1,obj)
    //  if( this.tableData[index].state ) {
    //    // 状态为true 发送请求 修改数据库状态
    //    console.error('状态为true 发送请求 修改数据库状态')
    //  }else {
    //    // 状态为false 发送请求 修改数据库状态
    //    console.error('false 发送请求 修改数据库状态')
    //  }
    },
    handleClickTab (tab, event) {
        var that = this
        if(this.activeName === '平台') {
          request.post('http://192.168.3.52:7099/franchisee/account/getAllAdminUser')
            .send({
              franchiseeId: '123456',
              userId: 'admin'
            })
            .end(function (err, res) {
              if (err) {
                console.log(err)
              } else {
                that.platCurPage = JSON.parse(res.text).totalPage || 20
                var arr = JSON.parse(res.text).list
                arr = arr.map((item) => {
                  var obj = {}
                  var state = null
                  if (item.state === 0) {
                    state = true
                  } else {
                    state = false
                  }
                  obj = Object.assign({}, item, {state: state})
                  return obj
                })
                that.platTableData = arr
                that.$store.state.platTableData = arr
                if (that.platTableData.length>0) {
                  $('.M-box').pagination({
                    pageCount: that.platTotalPage,
                    jump: true,
                    coping: true,
                    homePage: '首页',
                    endPage: '尾页',
                    prevContent: '«',
                    nextContent: '»'
                  })
                  $('.M-box').click(function (e) {
                    if (e.target.getAttribute('class') === 'active') {
                      return false
                    }
                    if (e.target.tagName === 'A') {
                      if (e.target.innerText === '首页') {
                        that.platCurPage = 1
                      }
                      if (e.target.innerText === '尾页') {
                        that.platCurPage = that.totalPage
                      }
                      if (e.target.innerText === '»') {
                        that.platCurPage++
                      }
                      if (e.target.innerText === '«') {
                        that.platCurPage--
                      }
                      if (checkPositiveNumber(e.target.innerText)) {
                        that.platCurPage = e.target.innerText
                      }
                      if (e.target.innerText === '跳转') {
                        e.preventDefault()
                        var jumpPageNum = $('.M-box .active').text()
                        that.platCurPage = jumpPageNum
                      }
                    }
                  })
                  $(document).keydown(function (e) {
                    if (e.keyCode === 13) {
                      that.platCurPage = e.target.value
                    }
                  })
                }
              }
            })
        }else {
          request.post('http://192.168.3.52:7099/franchisee/franchiseeManager/getFranchiseeAccount')
            .end(function (err, res) {
              if (err) {
                console.log(err)
              } else {
                that.joinCurPage = JSON.parse(res.text).totalPage || 20
                var arr = JSON.parse(res.text).list
                console.log(JSON.parse(res.text))
                arr = arr.map((item) => {
                  var obj = {}
                  var state = null
                  if (item.state === 0) {
                    state = true
                  } else {
                    state = false
                  }
                  obj = Object.assign({}, item, {state: state})
                  return obj
                })
                that.joinTableData = arr
                that.$store.state.joinTableData = arr
                if (arr.length>0) {
                  $('.M-box').pagination({
                    pageCount: that.joinCurPage,
                    jump: true,
                    coping: true,
                    homePage: '首页',
                    endPage: '尾页',
                    prevContent: '«',
                    nextContent: '»'
                  })
                  $('.M-box').click(function (e) {
                    if (e.target.getAttribute('class') === 'active') {
                      return false
                    }
                    if (e.target.tagName === 'A') {
                      if (e.target.innerText === '首页') {
                        that.joinCurPage = 1
                      }
                      if (e.target.innerText === '尾页') {
                        that.joinCurPage = that.totalPage
                      }
                      if (e.target.innerText === '»') {
                        that.joinCurPage++
                      }
                      if (e.target.innerText === '«') {
                        that.joinCurPage--
                      }
                      if (checkPositiveNumber(e.target.innerText)) {
                        that.joinCurPage = e.target.innerText
                      }
                      if (e.target.innerText === '跳转') {
                        e.preventDefault()
                        var jumpPageNum = $('.M-box .active').text()
                        that.joinCurPage = jumpPageNum
                      }
                    }
                  })
                  $(document).keydown(function (e) {
                    if (e.keyCode === 13) {
                      that.joinCurPage = e.target.value
                    }
                  })
                }
              }
            })
        }
      }
  },
  mounted () {
    if(this.tableTitle==='平台'){
       var that = this
        request.post('http://192.168.3.52:7099/franchisee/account/getAllAdminUser')
        .send({
          franchiseeId: '123456',
          userId: 'admin'
        })
        .end(function (err, res) {
          if (err) {
            console.log(err)
          } else {
            console.log((JSON.parse(res.text)))
            that.platTotalPage = JSON.parse(res.text).totalPage || 20
            var arr = JSON.parse(res.text).list
            arr = arr.map((item) => {
              var obj = {}
              var state = null
              if (item.state === 0) {
                state = true
              } else {
                state = false
              }
              obj = Object.assign({}, item, {state: state})
              return obj
            })
            that.platTableData = arr
            that.$store.state.platTableData = arr
            if (arr.length>0) {
              $('.M-box').pagination({
                pageCount: that.platTotalPage,
                jump: true,
                coping: true,
                homePage: '首页',
                endPage: '尾页',
                prevContent: '«',
                nextContent: '»'
              })
              $('.M-box').click(function (e) {
                if (e.target.getAttribute('class') === 'active') {
                  return false
                }
                if (e.target.tagName === 'A') {
                  if (e.target.innerText === '首页') {
                    that.platCurPage = 1
                  }
                  if (e.target.innerText === '尾页') {
                    that.platCurPage = that.totalPage
                  }
                  if (e.target.innerText === '»') {
                    that.platCurPage++
                  }
                  if (e.target.innerText === '«') {
                    that.platCurPage--
                  }
                  if (checkPositiveNumber(e.target.innerText)) {
                    that.platCurPage = e.target.innerText
                  }
                  if (e.target.innerText === '跳转') {
                    e.preventDefault()
                    var jumpPageNum = $('.M-box .active').text()
                    that.platCurPage = jumpPageNum
                  }
                }
              })
              $(document).keydown(function (e) {
                if (e.keyCode === 13) {
                  that.platCurPage = e.target.value
                }
              })
            }
          }
        })
    } else {
       var that = this
        request.post('http://192.168.3.52:7099/franchisee/account/getAllAccount')
          .send({
            franchiseeId: '123456',
            userId: 'admin'
          })
          .end(function (err, res) {
            if (err) {
              console.log(err)
            } else {
              that.joinTotalPage = JSON.parse(res.text).totalPage || 20
              var arr = JSON.parse(res.text).list
              arr = arr.map((item) => {
                var obj = {}
                var state = null
                if (item.state === 0) {
                  state = true
                } else {
                  state = false
                }
                obj = Object.assign({}, item, {state: state})
                return obj
              })
              that.joinTableData = arr
              that.$store.state.joinTableData = arr
              if (arr.length>0) {
                $('.M-box').pagination({
                  pageCount: that.joinTotalPage,
                  jump: true,
                  coping: true,
                  homePage: '首页',
                  endPage: '尾页',
                  prevContent: '«',
                  nextContent: '»'
                })
                $('.M-box').click(function (e) {
                  if (e.target.getAttribute('class') === 'active') {
                    return false
                  }
                  if (e.target.tagName === 'A') {
                    if (e.target.innerText === '首页') {
                      that.joinCurPage = 1
                    }
                    if (e.target.innerText === '尾页') {
                      that.joinCurPage = that.totalPage
                    }
                    if (e.target.innerText === '»') {
                      that.joinCurPage++
                    }
                    if (e.target.innerText === '«') {
                      that.joinCurPage--
                    }
                    if (checkPositiveNumber(e.target.innerText)) {
                      that.joinCurPage = e.target.innerText
                    }
                    if (e.target.innerText === '跳转') {
                      e.preventDefault()
                      var jumpPageNum = $('.M-box .active').text()
                      that.joinCurPage = jumpPageNum
                    }
                  }
                })
                $(document).keydown(function (e) {
                  if (e.keyCode === 13) {
                    that.currentPage = e.target.value
                  }
                })
              }
            }
          })
        }
  }
}
</script>

<style scoped>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
td,
tr,
th,
table,
thead,
tbody,
dl,
dt,
dd,
p,
span,
ul,
li,
ol {
  margin: 0;
  padding: 0;
}

body {
  background: #f2f2f2;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

/*#account_router_cover {
  width: 100%;
  height: 100%;
  background: rgba(128,128,128,0.6);
  position: fixed;
  left: 0;
  top: 0;
}*/


#account_router {
  width: 100%;
  height: 100%;
  background: rgba(68,68,68,0.6);
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;  
}
 div.selectPlace{margin-bottom:20px;}
  div.selectPlace address{font-style:normal;display:inline;font-size:14px;}
  div.selectPlace div.citys{display:inline-block;}
  div.selectPlace span{cursor:pointer;font-size:14px;display:inline-block;padding:5px;border:1px solid transparent;}
  div.selectPlace span.active{border:1px solid orange;}

div.account {
  /* width: 100%; */
  padding: 0 30px 10px 30px;
  background: #fff;
  margin-top: 20px;
  border: 1px solid #e7ecf1;
  border-bottom: none;
  /* padding-bottom: 100%; */
}

div.account>h1 {
  width: 90%;
  height: 68px;
  line-height: 55px;
}

div.account>h1 button {
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  border: none;
  outline: none;
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  background: rgba(66,66,66, 0.8);
  transition: all .2s linear 0s;
}

div.account>h1 button:hover {
  background: rgb(66,66,66);
  cursor: pointer;
}

#am_search {
  width: 100%;
  height: 70px;
  background: #fff;
  border: 1px solid #e7ecf1;
}

.account_my_input {
  width: 140px;
  height: 30px;
  outline: none;
  margin-top: 4px;
  border-radius: 4px;
  border: 1px solid #ddd;
  display: inline-block;
  text-indent: 8px;
}

#am_search label {
  /* width: 190px; */
  height: 70px;
  line-height: 70px;
  margin-right: 10px;
  margin-left: 30px;
  float: left;
}

::-webkit-input-placeholder { /* WebKit browsers */ 
color: #bfcbd9; 
} 
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #bfcbd9; 
} 
::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #bfcbd9; 
} 
:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #bfcbd9; 
} 


#am_search label span {
  line-height: 70px;
  font-weight: 400;
  font-size: 14px;
  display: block;
  margin-right: 20px;
  float: left;
}



#am_search button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c4c4c4;
  color: #1f2d3d;
  margin: 17px 30px;
  float: right;
  padding: 10px 15px;
  border-radius: 4px;
}

#am_search button:hover {
  color: #20a0ff;
  border-color: #20a0ff;
}

.el-table__body,
.el-table__footer,
.el-table__header {
  border: 2px solid red;
}

#account_page {
  padding: 4px 10px 0 20px;
  padding-bottom: 100px;
  background: #fff;
  border: 1px solid #e7ecf1;
  border-top: none;
  min-height: 230px;
}

.el-switch__label, .el-switch__label *{font-size:12px;}
#am_search button.my_btn{width: 80px;
    float: right;
    height: 36px;
    line-height: 11px;
    margin-right: 30px;
    color: #fff;
    margin-top: 17px;
    outline: none;
    border: none;
    background: rgba(52,52,67,0.8);}
#am_search button.my_btn:hover{background: rgba(52,52,67,1)}    
</style>
