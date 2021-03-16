<script>
/**
 * 用来处理每一个有图表的页面添加resize , 离开时移除resize函数
 */
import echarts from "echarts";
export default {
  data() {
    return {
      doms: []
    };
  },
  methods: {
    chartResize(eleArr) {
      for (let i = 0; i < eleArr.length; i++) {
        setTimeout(function() {
          eleArr[i].resize();
        }, 200);
      }
    }
  },
  mounted() {
    let _this = this;
    window.addEventListener("resize", function() {
      _this.chartResize(_this.doms);
    });
  },
  destroyed() {
    let _this = this;
    window.removeEventListener("resize", function() {
      _this.chartResize(_this.doms);
    });
  }
};
</script>