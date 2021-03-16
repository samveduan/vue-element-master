<template>
  <div id="app">
    <div id="container" :style="wallBg">
      <router-view></router-view>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "App",
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data(){
    return {
      wallBg: {
        background: "#235d8b url(" + require("./assets/ship.jpg") + ") no-repeat scroll 0 bottom"
      }
    }
  },
  mounted(){

  }
};
</script>
 
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100% !important;
}
#container{
  height: 100% !important;
  background-size: cover !important;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 80px;
}
 
.el-aside {
  background-color: #d3dce6;
  color: #ffffff;
}

.el-menu{
  background: none;
}

.el-submenu__title{
  color:#ffffff;
}
.el-submenu__title:hover{
  color:#000000;
}
.el-submenu__title i{
  color:#ffffff;
}
.el-menu-item {
  color: #ffffff;
}
.el-menu-item:hover{
  color: #000000;
}
.el-menu-item i{
  color: #ffffff;
}
.el-aside a{
  text-decoration: none;
}
 
.el-main {
  background-color: #e9eef3;
  color: #333;
}
 
body > .el-container {
  margin-bottom: 40px;
}
 
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
 
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>