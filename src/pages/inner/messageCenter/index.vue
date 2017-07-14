<template>
  <div class="messageCenter">
    <el-row>
      <el-col>
        <el-button type="warning" v-on:click="selectAll">全部设为已读</el-button>
      </el-col>
      <el-col>
        <table>
          <thead>
            <tr>
              <th>标题</th>
              <th>消息内容</th>
              <th>接收日期</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="msg.msgTitle" v-for="msg of tableData">
              <td>
                <el-checkbox v-model="msg.isChecked"></el-checkbox>
                <span class="title">{{msg.msgTitle}}</span>
              </td>
              <td class="showAllMessage">
              <span class="detail">{{msg.msgContent}}</span>
               <span class="open" @click="showMordWords(msg)" v-show="msg.tdshow">{{msg.changeText}}</span>
              </td>
              <td>
                {{msg.msgReceiveDate}}
              </td>
              <td>
                <i class="icon iconfont icon-xinfeng"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  div.messageCenter table{width:100%;border-collapse:collapse}
  div.messageCenter table tr th{text-align: left;border-bottom:2px solid #555;padding:15px 0 15px 10px;}
  div.messageCenter table tr td{padding:12px 10px;text-align: left;border-bottom: 1px dotted #555;color:#7b7272;font-size:14px;}
  div.messageCenter table tr td.showAllMessage{max-width:200px;overflow:hidden;font-size:14px;}
  div.messageCenter table tr td.showAllMessage span.open{text-decoration: underline;color:blue;cursor:pointer;}
  div.messageCenter table tr td span.title{color:#7b7272;font-size:14px;}
</style>
<script>
  export default {
    data: function () {
      return {
        isChecked: '',
        tableData: [
          {
            msgTitle: '修改密码1',
            msgContent: '这里默认显示两行,两行,这里消息具体内容，里消息具体内容，默这里消息具体内容，认显示两行,这里默认显示两行,这里消息具体内容，默认显示两行',
            msgReceiveDate: '2017-01-02 10:01',
            isChecked: false
          },
          {
            msgTitle: '修改密码2',
            msgContent: '这里默认默这里消息具体内容，认显示两行,这里具体内容，默认显示两行',
            msgReceiveDate: '2017-01-02 10:01',
            isChecked: false
          },
          {
            msgTitle: '修改密码3',
            msgContent: '这里默认显示两行,两行,这里消息具体内容，里消息具体内容，默l这里消息具体内容，认显示两行,这里默认显示两行,这里消息具体内容，默认显示两行',
            msgReceiveDate: '2017-01-02 10:01',
            isChecked: true
          }
        ]
      }
    },
    mounted: function () {
      this.checkWordsLength()
    },
    methods: {
      showMordWords (msg) {
        var len = msg.prevHtml.length
        var old = msg.msgContent
        if (len > 60) {
          msg.msgContent = msg.prevHtml
          msg.prevHtml = old
          msg.changeText = '收起'
        } else {
          msg.changeText = '展开'
          msg.msgContent = msg.prevHtml
          msg.prevHtml = old
        }
      },
      checkWordsLength  () {
        this.tableData.map((item) => {
          var len = item.msgContent.length
          item.prevHtml = item.msgContent
          if (len > 60) {
            item.msgContent = item.msgContent.substr(0, 50) + '...'
            item.changeText = '展开'
            item.tdshow = true
          } else {
            item.tdshow = false
          }
        })
      },
      selectAll () {
        this.tableData.map((item) => {
          if (item.isChecked !== true) {
            item.isChecked = !item.isChecked
          }
        })
      }
    }
  }
</script>

