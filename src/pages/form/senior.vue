<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>仓库管理</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <el-row :gutter="32">
      <el-form
        label-position="top"
        label-width="80px"
        :model="warehouse"
        :rules="rules"
        ref="ruleForm"
      >
        <el-col :span="8">
          <el-form-item label="仓库名" prop="name">
            <el-input v-model="warehouse.name" placeholder="请输入仓库名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="仓库域名" prop="name">
            <el-input v-model="warehouse.domain">
              <template slot="prepend">Http://</template>
              <template slot="append">.com</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="仓库管理员" prop="person">
            <el-select v-model="warehouse.person" placeholder="请选择管理员" :style="{width: '100%'}">
              <el-option label="付晓晓" value="付晓晓"></el-option>
              <el-option label="周毛毛" value="周毛毛"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="审批人" prop="approver">
            <el-select v-model="warehouse.approver" placeholder="请选择审批人" :style="{width: '100%'}">
              <el-option label="付晓晓" value="付晓晓"></el-option>
              <el-option label="周毛毛" value="周毛毛"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="生效日期" prop="date">
            <el-date-picker
              v-model="warehouse.date"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
              :style="{width: '100%'}"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="仓库类型" prop="type">
            <el-select v-model="warehouse.type" placeholder="请选择仓库类型" :style="{width: '100%'}">
              <el-option label="私密" value="私密"></el-option>
              <el-option label="公开" value="公开"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-col>
      </el-form>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      warehouse: {
        name: "",
        domain: "",
        person: "",
        approver: "",
        date: "",
        type: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入仓库名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        domain: [
          { required: true, message: "请输入仓库域名", trigger: "change" }
        ],
        person: [
          {
            required: true,
            message: "请选择仓库管理员",
            trigger: "change"
          }
        ],
        approver: [
          {
            required: true,
            message: "请选择审批人",
            trigger: "change"
          }
        ],
        date: [
          {
            type: "array",
            required: true,
            message: "请选择生效日期",
            trigger: "change"
          }
        ],
        type: [{ required: true, message: "请选择仓库类型", trigger: "change" }]
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.warehouse)
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>