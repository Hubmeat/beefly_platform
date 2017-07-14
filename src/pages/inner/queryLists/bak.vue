<template>
  <div class="queryLists">
    <h3>
      <el-button @click="handeClick">查看统计图</el-button>
    </h3>
    <el-row class="table">
      <table>
        <thead>
          <tr>
            <th>加盟区域</th>
            <th>订单数</th>
            <th>订单总额
              <span v-show="downShow" data-direct="down" class="sort" @click="handleSort">↓</span>
              <span v-show="upShow"  data-direct="up" class="sort" @click="handleSort">↑</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="item.joinPlace" v-for="item of tableData">
            <td>{{item.joinPlace}}</td>
            <td>{{item.orderNums}}</td>
            <td>￥{{item.totalNum}}</td>
          </tr>
        </tbody>
      </table>
    </el-row>
  </div>
</template>
<style scoped>
div.queryLists {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
}

div.queryLists h3 {
  text-align: right;
  margin-bottom: 20px;
}

div.queryLists {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
}

div.queryLists h3 {
  text-align: right;
  margin-bottom: 20px;
}

div.queryLists h3 button {
  margin-right: 0px;
  width: 137px;
}

div.table table{border-collapse:collapse;width:100%;}
div.table table thead tr th{font-weight:normal;text-align: left;border-bottom:2px solid #585555;padding: 5px 10px;}
div.table table tbody tr td{font-size:14px;color:rgba(121,121,121,1);font-family: '微软雅黑';border:none;border-bottom:1px dotted #afa7a7;padding:14px 10px;color:#555;}
div.table table thead tr th span.sort{padding:0 5px;display:inline-block;cursor:pointer;}
</style>
<script>
export default {
  methods: {
    handeClick () {
      this.$router.push('/index/incomingRank/queryCharts')
    },
    handleSort (e) {
      var arr = []
      var newTableData = []
      var dataDirect = e.target.dataset.direct
      this.tableData.map(function (item) {
        arr.push(item.totalNum)
        if (dataDirect === 'down') {
          arr.sort(function (a, b) {
            return a - b
          })
        }
        if (dataDirect === 'up') {
          arr.sort(function (a, b) {
            return b - a
          })
        }
      })
      for (var i = 0; i < arr.length; i++) {
        this.tableData.map(function (item) {
          if (arr[i] === item.totalNum) {
            newTableData.push(item)
          }
        })
      }
      this.tableData = newTableData
      if (dataDirect === 'down') {
        this.downShow = false
        this.upShow = true
      }
      if (dataDirect === 'up') {
        this.downShow = true
        this.upShow = false
      }
    }
  },
  data: function () {
    return {
      downShow: true,
      upShow: false,
      tableData: [
        {
          joinPlace: '合肥',
          orderNums: 8111,
          totalNum: 43555
        },
        {
          joinPlace: '南京',
          orderNums: 222,
          totalNum: 6555
        },
        {
          joinPlace: '上海',
          orderNums: 322,
          totalNum: 16555
        }
      ]
    }
  }
}
</script>
