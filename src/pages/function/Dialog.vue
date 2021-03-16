<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">验证</el-button>

    <el-dialog
      title="验证管理员key"
      :visible.sync="dialogFormVisible"
      :modal="true"
      width="600px"
      :fullscreen="false"
      @open="openDialog"
      @close="closeDialog"
    >
      <el-form
        status-icon
        :model="form"
        :rules="rules"
        ref="ruleForm"
        size="small"
        label-width="100px"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="证书等级" prop="certlvl">
          <el-select v-model="form.certlvl" style="width:100%">
            <el-option label="一级" value="1"></el-option>
            <el-option label="二级" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="PIN码" prop="pin">
          <el-input type="password" v-model="form.pin"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定 !</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名！"));
      } else if (value.length < 6) {
        callback(new Error("用户名必须大于5个字符"));
      } else {
        callback();
      }
    };

    let regexp = /^[0-9]+$/;
    var validatePin = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("PIN码不能为空！"));
      } else if (!regexp.test(value)) {
        callback(new Error("PIN码只能为数字"));
      } else {
        callback();
      }
    };

    return {
      dialogFormVisible: false,
      rules: {
        name: [
          { validator: validateName, trigger: "blur" },
          { required: true, trigger: "blur" }
        ],
        certlvl: [
          { required: true, message: "请选择证书等级", trigger: "change" }
        ],
        pin: [
          { validator: validatePin, trigger: "blur" },
          { required: true, trigger: "blur" }
        ]
      },
      form: {
        name: "",
        certlvl: "",
        pin: ""
      }
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogFormVisible = false;
          alert("submit!");
        } else {
          alert("error submit!!");
          return false;
        }
      });
      console.log(this.$refs[formName]);
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    },
    openDialog() {
      this.form.name = "123456";
      this.form.certlvl = "1";
      this.form.pin = "123456";
    },
    closeDialog() {
      this.$refs["ruleForm"].resetFields();
    }
  }
};
</script>

<style scoped>
</style>