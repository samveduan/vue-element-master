<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>总销售额</span>
            <el-tooltip class="item" effect="dark" content="指示说明" placement="bottom">
              <i
                class="el-icon-warning-outline"
                style="float: right; padding: 3px 0; cursor: pointer;"
              ></i>
            </el-tooltip>
          </div>
          <div>
            <h3 class="title">¥ 126,560</h3>
            <div class="chart">
              周同比12% <i class="el-icon-caret-top" style="color: red"></i>
              日同比11% <i class="el-icon-caret-bottom" style="color: green"></i>
            </div>
            <div class="bottom clearfix">日销售额￥12,423</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>访问量</span>
            <el-tooltip class="item" effect="dark" content="指示说明" placement="bottom">
              <i
                class="el-icon-warning-outline"
                style="float: right; padding: 3px 0; cursor: pointer;"
              ></i>
            </el-tooltip>
          </div>
          <div>
            <h3 class="title">¥ 8,846</h3>
            <div class="chart" id="visitor"></div>
            <div class="bottom clearfix">日访问量8,846</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>支付笔数</span>
            <el-tooltip class="item" effect="dark" content="指示说明" placement="bottom">
              <i
                class="el-icon-warning-outline"
                style="float: right; padding: 3px 0; cursor: pointer;"
              ></i>
            </el-tooltip>
          </div>
          <div>
            <h3 class="title">¥ 6,560</h3>
            <div class="chart" id="pays"></div>
            <div class="bottom clearfix">转化率60%</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span>运营活动效果</span>
            <el-tooltip class="item" effect="dark" content="指示说明" placement="bottom">
              <i
                class="el-icon-warning-outline"
                style="float: right; padding: 3px 0; cursor: pointer;"
              ></i>
            </el-tooltip>
          </div>
          <div>
            <h3 class="title">78%</h3>
            <div class="chart">
              <el-progress :percentage="50" :stroke-width="10"></el-progress>
            </div>

            <div class="bottom clearfix">
              周同比12%
              <i class="el-icon-caret-top" style="color: #FF0000;"></i>
              日同比11%
              <i class="el-icon-caret-bottom" style="color: green;"></i>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div style="height: 24px; clear: both;"></div>

    <el-card>
      <el-tabs v-model="activeName" @tab-click="tabsHandleClick">
        <el-tab-pane label="销售额" name="first">
          <el-row :gutter="24">
            <el-col :span="16" id="sales-trend" style="height: 300px;"></el-col>
            <el-col :span="8">
              <dl class="sales-order">
                <dt>门店销售额排名</dt>
                <dd>
                  <el-badge class="mark" :value="1" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="2" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="3" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="4" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="5" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="6" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="7" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
              </dl>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="访问量" name="second">
          <el-row :gutter="24">
            <el-col :span="16" id="visitors-chart" style="height: 300px;"></el-col>
            <el-col :span="8">
              <dl class="sales-order">
                <dt>门店销售额排名</dt>
                <dd>
                  <el-badge class="mark" :value="1" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="2" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="3" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="4" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="5" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="6" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
                <dd>
                  <el-badge class="mark" :value="7" type="info" style="margin-right: 10px;" />工专路 0 号店
                  <span>23,234</span>
                </dd>
              </dl>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      activeName: "first",
      visitorsChart: {}
    };
  },
  methods: {
    tabsHandleClick(tab, event) {
      console.log(tab.name, event);
      if (tab.name == "second") {
        this.initVisitorsChart();
        let _this = this;
        setTimeout(function() {
          _this.visitorsChart.resize();
        }, 100);
      }
    },
    initVisitorsChart() {
      // 访问量
      this.visitorsChart = this.$echarts.init(
        document.getElementById("visitors-chart")
      );
      let visitorsChartOption = {
        color: ["#3aa0ff"],
        grid: {
          x: 35,
          y: 35,
          x2: 45,
          y2: 20
        },
        xAxis: {
          type: "category",
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [160, 100, 230, 180, 170, 210, 230, 190, 260, 189, 180, 170],
            type: "bar",
            showBackground: true,
            barWidth: 30, //柱图宽度
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          }
        ]
      };

      this.visitorsChart.setOption(visitorsChartOption);
    }
  },
  mounted() {
    let visitor = this.$echarts.init(document.getElementById("visitor"));
    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];

    let data = [Math.random() * 300];

    for (let i = 1; i < 20000; i++) {
      let now = new Date((base += oneDay));
      date.push(
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
      );
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    let visitorOption = {
      tooltip: {
        trigger: "axis",
        position: function(pt) {
          return [pt[0], "10%"];
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        show:false 
      },
      series: [
        {
          name: "模拟数据",
          type: "line",
          smooth: true,
          symbol: "none",
          sampling: "average",
          itemStyle: {
            color: "rgb(255, 70, 131)"
          },
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 158, 68)"
              },
              {
                offset: 1,
                color: "rgb(255, 70, 131)"
              }
            ])
          },
          data: data
        }
      ]
    };

    visitor.setOption(visitorOption);

    // 支付笔数
    let pays = this.$echarts.init(document.getElementById("pays"));
    let paysOption = {
      color: ["#13c2c2"],
      xAxis: {
        type: "category",
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        show:false 
      },
      yAxis: {
        type: "value",
        show:false 
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)"
          }
        }
      ]
    };

    pays.setOption(paysOption);

    // 销售额趋势
    let salesTrend = this.$echarts.init(document.getElementById("sales-trend"));
    let salesTrendOption = {
      color: ["#3aa0ff"],
      grid: {
        x: 35,
        y: 35,
        x2: 45,
        y2: 20
      },
      xAxis: {
        type: "category",
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70],
          type: "bar",
          showBackground: true,
          barWidth: 30, //柱图宽度
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)"
          }
        }
      ]
    };

    salesTrend.setOption(salesTrendOption);

    //
    this.initVisitorsChart();
  }
};
</script>

<style scoped>
.title {
  margin-top: 0;
  font-size: 28px;
  font-weight: normal;
}
.chart {
  font-size: 13px;
  height: 30px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  font-size: 13px;
  border-top: 1px solid #ececec;
  padding-top: 15px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.sales-order {
}

.sales-order dt {
  margin: 0;
  font-size: 14px;
  line-height: 32px;
  padding-bottom: 10px;
}

.sales-order dd {
  margin: 0;
  font-size: 14px;
  line-height: 34px;
}

.sales-order dd span {
  float: right;
}
</style>