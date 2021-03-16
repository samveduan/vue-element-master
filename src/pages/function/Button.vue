<template>
  <div>
    <el-row>
      <el-button type="primary" @click="getData()">主要按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    getData(){
      let _this = this;
      _this.$axios.get("/api/todayVideo")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  data() {
    return {
      data: [],
      currentPage: 1,
      pagesize: 20
    };
  },
  mounted(){

  }
};
</script>

<style>
</style>
