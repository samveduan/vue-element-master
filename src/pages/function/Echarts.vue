<template>
  <el-card>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div ref="myChart1" style="height: 300px;"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div ref="myChart2" style="height: 300px;"></div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      AreaPiecesChart: null,
      electricityChart: null
    };
  },
  methods: {
    drawAreaPieces() {
      this.AreaPiecesChart = this.$echarts.init(
        this.$refs.myChart1
      );
 
      let option = {
        title: {
          text: "MVVM中生成Echarts",
          subtext: "纯属虚构"
        },
        xAxis: {
          type: "category",
          boundaryGap: false
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "30%"]
        },
        visualMap: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: "rgba(0, 180, 0, 0.5)"
            },
            {
              gt: 5,
              lt: 7,
              color: "rgba(0, 180, 0, 0.5)"
            }
          ]
        },
        series: [
          {
            type: "line",
            smooth: 0.6,
            symbol: "none",
            lineStyle: {
              color: "green",
              width: 5
            },
            markLine: {
              symbol: ["none", "none"],
              label: { show: false },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
            },
            areaStyle: {},
            data: [
              ["2019-10-10", 200],
              ["2019-10-11", 400],
              ["2019-10-12", 650],
              ["2019-10-13", 500],
              ["2019-10-14", 250],
              ["2019-10-15", 300],
              ["2019-10-16", 450],
              ["2019-10-17", 300],
              ["2019-10-18", 100]
            ]
          }
        ]
      };
 
      this.AreaPiecesChart.setOption(option);
    },
    drawElectricity() {
      this.electricityChart = this.$echarts.init(
                this.$refs.myChart2
      );
 
      let option = {
        title: {
          text: "一天用电量分布",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "00:00",
            "01:15",
            "02:30",
            "03:45",
            "05:00",
            "06:15",
            "07:30",
            "08:45",
            "10:00",
            "11:15",
            "12:30",
            "13:45",
            "15:00",
            "16:15",
            "17:30",
            "18:45",
            "20:00",
            "21:15",
            "22:30",
            "23:45"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} W"
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 6,
              color: "green"
            },
            {
              gt: 6,
              lte: 8,
              color: "red"
            },
            {
              gt: 8,
              lte: 14,
              color: "green"
            },
            {
              gt: 14,
              lte: 17,
              color: "red"
            },
            {
              gt: 17,
              color: "green"
            }
          ]
        },
        series: [
          {
            name: "用电量",
            type: "line",
            smooth: true,
            data: [
              300,
              280,
              250,
              260,
              270,
              300,
              550,
              500,
              400,
              390,
              380,
              390,
              400,
              500,
              600,
              750,
              800,
              700,
              600,
              400
            ],
            markArea: {
              data: [
                [
                  {
                    name: "早高峰",
                    xAxis: "07:30"
                  },
                  {
                    xAxis: "10:00"
                  }
                ],
                [
                  {
                    name: "晚高峰",
                    xAxis: "17:30"
                  },
                  {
                    xAxis: "21:15"
                  }
                ]
              ]
            }
          }
        ]
      };
      this.electricityChart.setOption(option);
    },
    chartResize(){
        let eleArr = [this.AreaPiecesChart, this.electricityChart];
        for(let i = 0; i<eleArr.length; i++){
          //此处定时器是为了在页面存在多个图时，resize方法的调用时间微微错开，避免明显的卡顿
          setTimeout(function(){
              eleArr[i].resize();
          }, 200);
        }
    }
  },
  mounted() {
    this.drawAreaPieces();
    this.drawElectricity();
    //注：此处要用addEventListener,如果用 window.onresize = function(){},如果别的组件也用了onresize事件，就容易覆盖掉此处的函数
    window.addEventListener("resize", this.chartResize);
  },
  destroyed(){
    window.removeEventListener("resize", this.chartResize);
  }
};
</script>
 
<style scoped>
#myChart1,
#myChart2 {
  height: 300px;
}
</style>
