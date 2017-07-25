<template>
<div>
	<div id="addpartner_form">
				<h1 id="addpartner_title">添加加盟商
					<span>
						<a href="/index/partnerManager">
							<i class="el-icon-close"></i>		
						</a>
					</span>
				</h1>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
				  <el-form-item label="企业名称" prop="company_name">
				    <el-input v-model="ruleForm.company_name" placeholder='长度不超过100字符'></el-input>
				  </el-form-item>
				  <el-form-item label="营业执照号" prop="business_license">
				    <el-input v-model="ruleForm.business_license" placeholder='请输入营业执照注册号'></el-input>
				  </el-form-item>
				  <el-form-item label="通讯地址" prop="address">
				    <el-input v-model="ruleForm.address" placeholder='请输入地址'></el-input>
				  </el-form-item>
				  <el-form-item label="加盟日期" prop="alliance_date">
              <el-date-picker
                v-model="date1"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
              </el-date-picker>           
				  </el-form-item>
				  <el-form-item label="车辆数" prop="car">
				    <el-input v-model.number="ruleForm.car" placeholder='请输入车辆数(单位：/辆)'></el-input>
				  </el-form-item>
				  <el-form-item label="加盟资金" prop="alliance_money">
				    <el-input v-model.number="ruleForm.alliance_money" placeholder='请输入加盟资金（元）'></el-input>
				  </el-form-item>
				  <el-form-item label="加盟地区" prop="alliance_area">
				  </el-form-item>
				  <el-form-item label="邮箱" prop="eamil">
				    <el-input v-model="ruleForm.eamil" placeholder='请输入邮箱'></el-input>
				  </el-form-item>
				  <el-form-item label="加盟分成比例" prop="alliance_percent">
				    <el-input v-model="ruleForm.alliance_percent" placeholder='请输入分成比例(%)'></el-input>
				  </el-form-item>		 
          <h1 class="form_table_h1">联系人信息</h1> 
				  <el-form-item label="姓名" prop="name">
				    <el-input v-model="ruleForm.name" placeholder='请输入姓名'></el-input>
				  </el-form-item>
				  <el-form-item label="证件类别" prop="IDtype">
				    <el-select v-model="ruleForm.IDtype" placeholder="请选择证件类别">
				      <el-option label="居民身份证" value="居民身份证"></el-option>
				      <el-option label="护照" value="护照"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="证件号码" prop="IDcard">
				    <el-input v-model="ruleForm.IDcard" placeholder='请输入证件号码'></el-input>
				  </el-form-item>
				  <el-form-item label="手机号" prop="tel">
				    <el-input v-model="ruleForm.tel" placeholder='请输入手机号'></el-input>
				  </el-form-item>
				  <el-form-item label="邮箱" prop="eamil">
				    <el-input v-model="ruleForm.eamil" placeholder='请输入邮箱'></el-input>
				  </el-form-item>
          <el-checkbox v-model="checked" id="form_checkBox">同时添加联系人的平台账号</el-checkbox>
				  <el-form-item label="用户名" prop="username" v-show='add'>
				    <el-input v-model="ruleForm.username" placeholder='请输入用户名'></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="password" v-show='add'>
				    <el-input type="password" v-model="ruleForm.password" placeholder='6-20位，可包括字母、数字、下划线'></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button class='addpartner_button' type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				    <el-button class='addpartner_button' @click="$router.push({path:'/index/partnerManager'})">取消</el-button>
				  </el-form-item>
				</el-form>

        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          action='http://localhost:9090/static/headerImg'
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <h3>点击上传营业执照</h3>
        </el-upload>
	</div>
</div>
</template>
<style scoped>

  @media screen and (min-width:1367px) {
    #addpartner_form {
      /*  适配好的样式 */
      height: 50%;
      overflow-y: scroll; 
      overflow-x: hidden;
      width: 57%;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
      position: fixed;
      display: block;
      top:62%;
      left:50%;
      margin-left:-28%;
      margin-top:-25%;
      padding: 70px 80px 80px 50px;
      margin-right: 20px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 6px;
    }
  }

  @media screen and (max-width:1367px) {
    #addpartner_form {
      height: 78%;
      width: 63%;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
      position: fixed;
      display: block;
      overflow-y: scroll;
      top: 62%;
      left: 50%;
      margin-left: -41%;
      margin-top: -27%;
      padding: 70px 150px 0px 144px;
      margin-right: 20px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 6px;
    }
  }

  #form_checkBox {
    margin-left: 100px;
    margin-bottom: 20px;
  }

  .form_table_h1 {
    width: 100%;
    line-height: 30px;
    padding: 10px 0 10px 3px;
    height: 30px;
    font-size: 20px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }

  .el-form {
    width: 62%;
    float: left;
  }

	.addpartner_button:nth-of-type(1) {
		background: #f87e2b;
		border: none;
	}

	.addpartner_button:nth-of-type(1):hover {
		background: rgba(248,126,43,0.9);
	}


	.addpartner_button:nth-of-type(2):hover {
		border: 1px solid rgb(248,126,43);
		color: rgb(248,126,43);
	}

	.addpartner_button {
		width: 120px;
		height: 50px;
	}

	#addpartner_title {
    position: absolute;
    left: 0px;
    top: 0px;
    padding-left: 20px;
    width: 98%;
    height: 40px;
    font-size: 20px;
    overflow-x: hidden;
    line-height: 40px;
    color: #444;
    border-bottom: 1px solid #eee;
	}

	#addpartner_title span {
		float: right;
		margin-right: 14px;
		cursor: pointer;
	}

  .avatar-uploader {
    border-radius: 6px;
    cursor: pointer;
    height: 200px;
    width: 300px;
    float: left;
    border: 1px dashed #ddd;
    position: relative;
    text-align: center;
    left: 10%;
    top: 0;
  }

  .avatar-uploader h3 {
    margin-top: 20px;
    font-size: 18px;
    text-align: center;
    margin-left: 14px;
    color: #ccc;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #ccc;
    width: 10px;
    height: 10px;
    line-height: 200px;
  }

  .avatar {
    height: 200px;
    width: 300px;
    display: block;
  }
</style>
          
<script>
export default {
  data () {
    return {
      ruleForm: {
        company_name: '',
        business_license: '',
        address: '',
        alliance_date: '',
        car: '',
        alliance_money: '',
        alliance_area: '',
        alliance_percent: '',
        name: '',
        IDtype: '',
        IDcard: '',
        tel: '',
        eamil: '',
        username: '',
        password: ''
      },
      rules: {
        company_name: [
          { required: true, message: '请输入企业名称', trigger: 'blur' }
        ],
        business_license: [
          { message: '非法营业执照号', trigger: 'blur' }
        ],
        address: [
          { message: '请输入正确的地址', trigger: 'blur' }
        ],
        alliance_date: [
          { message: '请选择加盟日期', trigger: 'blur' }
        ],
        car: [
          { required: true, message: '请选择输入认购车辆数', trigger: 'blur' }
        ],
        alliance_money: [
          { message: '输入正确的金额', trigger: 'blur' }
        ],
        alliance_area: [
          { required: true, message: '请选择证件类型', trigger: 'blur' }
        ],
        alliance_percent: [
          { required: true, message: '请输入加盟比例', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        IDtype: [
          { required: true, message: '请选择证件类型', trigger: 'change' }
        ],
        IDcard: [
          { type: 'string', required: true, message: '请输入身份证号码', trigger: 'blur' },
          { min: 15, max: 19, message: '请输入合法的身份证号码', trigger: 'blur' }
        ],
        tel: [
          { type: 'string', required: true, message: '请填写手机号', trigger: 'blur' },
          { min: 11, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        eamil: [
          { message: '请填写正确邮箱', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 19, message: '密码格式不正确', trigger: 'blur' }
        ]
      },
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      date1: '',
      checked: false,
      add: false,
      imageUrl: ''
    }
  },
  updated () {
    if (this.checked === true) {
      this.add = true
    } else {
      this.add = false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$confirm('确认添加吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '信息有误',
            type: 'warning'
          })
        .then(() => {
          this.$router.push('/index/partnerManager')
          this.$message({
            type: 'success',
            message: '添加成功'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          })
        })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAvatarSuccess (res, file) {
      console.log(file)
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
