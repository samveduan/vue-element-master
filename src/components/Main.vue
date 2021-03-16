<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-header style="height: 80px;" :style="topBg">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="210px" :style="leftBg">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="none"
                text-color="#fff"
                active-text-color="#ff0000"
                :unique-opened="true"
              >
                <template v-for="route in this.$router.options.routes[2].children">
                  <!-- 循环有子目录的菜单 -->
                  <el-submenu
                    :key="route.alias"
                    :index="route.alias"
                    v-if="route.children && route.children.length"
                  >
                    <template slot="title">
                      <i :class="route.meta.icon"></i>
                      <span>{{route.meta.title}}</span>
                    </template>
                    <el-menu-item-group>
                      <router-link
                        :to="subroute.alias"
                        :key="subroute.alias"
                        v-for="subroute in route.children"
                      >
                        <el-menu-item :index="subroute.alias">{{subroute.meta.title}}</el-menu-item>
                      </router-link>
                    </el-menu-item-group>
                  </el-submenu>
                  <!-- 循环有子目录的菜单 -->

                  <!-- 循环没有子目录的菜单 -->
                  <router-link
                    :to="route.alias"
                    :key="route.alias"
                    v-else-if="!route.children && route.alias != '/' && route.alias != '/login'"
                  >
                    <el-menu-item :index="route.alias">
                      <i :class="route.meta.icon"></i>
                      <span slot="title">{{route.meta.title}}</span>
                    </el-menu-item>
                  </router-link>
                  <!-- 循环没有子目录的菜单 -->
                </template>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main style="padding: 15px;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
 
<script>
import Header from "@/components/Header";
export default {
  name: "App",
  data() {
    return {
      leftBg: {
        background:
          "#001529"
      },
      topBg: {
        background:
          "#001529",
        height: "80px",
        fontSize: "30px",
        color: "#ffffff"
      }
      // leftBg: {
      //   background:
      //     "#235d8b url(" +
      //     require("../assets/left-bg.png") +
      //     ") no-repeat scroll 0 bottom"
      // },
      // topBg: {
      //   background:
      //     "#235d8b url(" +
      //     require("../assets/top-bg.png") +
      //     ") no-repeat scroll right 0",
      //   height: "80px",
      //   fontSize: "32px",
      //   color: "#ffffff"
      // }
    };
  },
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
  }
};
</script>
 
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 80px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-aside a {
  text-decoration: none;
}

.el-menu {
  background: none;
  border-right: 0;
}

.el-submenu__title{
  background: none!important;
}

.el-menu-item-group .el-menu-item {
  padding-left: 52px !important;
}
.el-menu-item{
  background: none!important;
}
.el-menu-item.is-active {
  color: #ffffff!important;
  background: #1890ff!important;
}

.el-main {
  background-color: #f0f2f5;
  color: #333;
  padding: 0;
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