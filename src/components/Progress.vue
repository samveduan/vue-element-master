<template>
  <div>
    <el-breadcrumb separator="/" class="margin-bottom-20">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>Progress 进度条</el-breadcrumb-item>
    </el-breadcrumb>

    <el-progress :percentage="0" :stroke-width="20" class="progress"></el-progress>
    <el-progress :percentage="70" :stroke-width="20" class="progress"></el-progress>
    <el-progress :percentage="100" :stroke-width="20" status="success" class="progress"></el-progress>
    <el-progress :percentage="50" :stroke-width="20" status="exception" class="progress"></el-progress>

    <div style="text-align: center;">
      <el-progress type="circle" :percentage="0" :stroke-width="10" class="circle-progress"></el-progress>
      <el-progress type="circle" :percentage="70" :stroke-width="10" class="circle-progress"></el-progress>
      <el-progress type="circle" :percentage="100" :stroke-width="10" status="circle-progress" class="progress"></el-progress>
      <el-progress type="circle" :percentage="50" :stroke-width="10" status="exception" class="circle-progress"></el-progress>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'progress'
  }
</script>

<style scoped>
.progress{
  margin-bottom: 20px;
}
.circle-progress{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
