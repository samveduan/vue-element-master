<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="填写转账信息"></el-step>
    <el-step title="确认转账信息"></el-step>
    <el-step title="完成"></el-step>
  </el-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
.el-dropdown {
  vertical-align: bottom;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
ul li {
  cursor: pointer;
}
</style>
