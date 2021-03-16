<template>
  <div>
    <el-container id="container">
      <el-header id="header">
        <Header/>
      </el-header>
      <el-container id="container2">
        <el-aside width="210px" style="overflow:hidden;">
          <div style="height: 60px;"></div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            style="width: 210px;"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title"><router-link to="/">登录</router-link></span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-tickets"></i>
              <span slot="title"><router-link to="/index/user">用户</router-link></span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-date"></i>
              <span slot="title"><router-link to="/index/server">服务器</router-link></span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title"><router-link to="/index/table">Table 表格</router-link></span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-loading"></i>
              <span slot="title"><router-link to="/index/progress">Progress 进度条</router-link></span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-tickets"></i>
              <span slot="title"><router-link to="/index/form">表单</router-link></span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-sort"></i>
              <span slot="title"><router-link to="/index/transfer">Transfer</router-link></span>
            </el-menu-item>
            <el-menu-item index="8">
              <i class="el-icon-d-caret"></i>
              <span slot="title"><router-link to="/index/button">Button</router-link></span>
            </el-menu-item>
            <el-menu-item index="9">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/tabs">Tabs</router-link></span>
            </el-menu-item>
            <el-menu-item index="10">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/carousel">Carousel</router-link></span>
            </el-menu-item>
            <el-menu-item index="11">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/charts">Echarts</router-link></span>
            </el-menu-item>
            <el-menu-item index="12">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/product">Product</router-link></span>
            </el-menu-item>
            <el-menu-item index="13">
              <i class="el-icon-star-off"></i>
              <span slot="title"><router-link to="/index/vuex">Vuex</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main id="main">
          <div id="mainIn">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from './header'
  export default {
    components: {
      Header
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted: function(){

    }
  }
</script>

<style>
  .margin-bottom-20{
    margin-bottom: 20px;
  }
</style>

<style scoped>
  #container{
    height: 100%;
  }
  #container2{
  }
  .el-header{
    z-index: 100000000000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  .el-aside {
    background-color: #545c64;
    color: #333;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100000;
  }
  #main {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    color: #333;
    height: 100%;
    width: 100%;
  }
  #mainIn{
    padding: 0 20px 30px 230px;
    border-top: 80px solid #ffffff;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
  }
  .el-aside a{
    color:#ffffff;
    text-decoration: none;
  }
  .el-aside a:link{
    color:#ffffff;
  }
  .el-aside a:hover{
    color:#ffffff;
  }
</style>
