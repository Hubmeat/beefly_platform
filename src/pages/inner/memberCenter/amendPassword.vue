<template>
	<div>
		<div id="addaccount_form">
						<h1 id="addaccount_title">绑定手机号
              <span>
                <a href="/index/memberCenter">
                  <i class="el-icon-close">
                  </i>
                </a>
              </span>
            </h1>
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
							<el-form-item label="原始密码" prop="oldPassword">
								<el-input v-model="ruleForm.oldPassword" placeholder='请输入原密码'></el-input>
							</el-form-item>
							<el-form-item label="新密码" prop="newPassword">
								<el-input v-model="ruleForm.newPassword" placeholder='密码为6-20位字符，可包含字母、数字、下划线'></el-input>
							</el-form-item>
							<el-form-item label="确认密码" prop="confimPassword">
								<el-input type='password' v-model="ruleForm.confimPassword" placeholder='确认密码'></el-input>
							</el-form-item>
							<el-form-item>
								<el-button class='addaccount_button' type="primary" @click="submitForm('ruleForm')">立即绑定</el-button>
								<el-button class='addaccount_button' @click="$router.push({path:'/index/memberCenter'})">取消</el-button>
							</el-form-item>
					</el-form>
			</div>
	</div>
</template>
<style scoped>

  @media screen and (min-width:1367px) {
    #addaccount_form {
      /*  适配好的样式 */
      height: 50%;
      /*overflow-y: scroll; 
      overflow-x: hidden;*/
      width: 50%;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
      position: fixed;
      display: block;
      top:62%;
      left:50%;
      margin-left:-28%;
      margin-top:-25%;  
      padding: 70px 80px 0 50px;
      margin-right: 20px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 6px;
    }
  }

  @media screen and (max-width:1367px) {
    #addaccount_form {
      height: 50%;
      width: 50%;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
      position: fixed;
      display: block;
      top: 62%;
      left: 50%;
      /*overflow-y: scroll;*/
      margin-left: -34%;
      margin-top: -24%;
      padding: 80px 150px 60px 144px;
      margin-right: 20px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 6px;
    }
  }

  .loading_class {
    background: rgba(68,68,68,0.4);
  }

	.addaccount_button:nth-of-type(1) {
		background: #f87e2b;
		border: none;
	}

	.addaccount_button:nth-of-type(1):hover {
		background: rgba(248,126,43,0.9);
	}


	.addaccount_button:nth-of-type(2):hover {
		border: 1px solid rgb(248,126,43);
		color: rgb(248,126,43);
	}

	.addaccount_button {
		width: 120px;
		height: 50px;
	}

	#addaccount_title {
    position: absolute;
    left: 0px;
    top: 0px;
    padding-left: 20px;
    width: 98%;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    overflow-x: hidden;
    line-height: 40px;
    color: #444;
    border-bottom: 1px solid #eee;
	}

  #addaccount_title span {
		float: right;
		margin-right: 14px;
		cursor: pointer;
	}
</style>
      
<script>
export default {
  data () {
    return {
      ruleForm: {
        oldPassword: '',
        newPassword: '',
        confimPassword: ''
      },
      rules: {
        oldPassword: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
          { min: 10, max: 20, message: '', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        confimPassword: [
          { required: true, message: '两次输入的不相同', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      var that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm('确认修改吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '信息有误',
            type: 'warning'
          })
        .then(() => {
          this.$loading({customClass: 'loading_class', text: '正在为您处理中，请稍后...'})
          setTimeout(() => {
            that.$loading({customClass: 'loading_class'}).close()
            that.$alert('处理成功！', 'Success', {
              confirmButtonText: '确定',
              callback: action => {
                that.$router.push('/index/memberCenter')
                that.$message({
                  type: 'Success',
                  message: '密码修改成功！'
                })
              }
            })
          }, 1000)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '修改已取消！'
          })
        })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
