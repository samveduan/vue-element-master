<template>
  <div>
    <el-breadcrumb separator="/" class="margin-bottom-20">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row>
      <el-col :span="24">
        <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form-inline">

          <el-form-item label="日期" required prop="date">
            <el-date-picker
              v-model="ruleForm.date"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="地址" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        :formatter="formatterDate"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        ruleForm: {
          date: '',
          name: '',
          address: ''
        },
        rules: {
          date: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 2 到 32 个字符', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请选择活动区域', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      formatterDate: function(row, column){
        var date = new Date(row.date);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.tableData.unshift({
              date: this.ruleForm.date,
              name: this.ruleForm.name,
              address: this.ruleForm.address
            });
            this.$message({
              message: '添加成功',
              type: 'success'
            });

            this.$refs[formName].resetFields();

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created: function(){

    }
  }
</script>
