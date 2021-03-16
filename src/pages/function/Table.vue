<template>
  <el-card>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <el-button
            type="primary"
            icon="el-icon-close"
            size="mini"
            @click="toggleSelection([tableData[1], tableData[2]])"
          >选择第一、三行</el-button>
          <el-button type="primary" icon="el-icon-close" size="mini" @click="toggleSelection()">取消选择</el-button>
          <el-button
            type="primary"
            icon="el-icon-finished"
            size="mini"
            @click="getSelection()"
          >获取选择行</el-button>
        </div>
      </el-col>
    </el-row>

    <el-table
      :data="tableData"
      ref="multipleTable"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @select="selectHandle"
      @select-all="selectAllHandle"
      @row-click="rowClickHandle"
      border
      :show-header="true"
      size="medium"
      tooltip-effect="dark"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex"></el-table-column>
      <el-table-column prop="address" label="地址" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <i class="el-icon-place"></i>
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            @click="handleClickEdit(scope.row)"
            type="primary"
            size="mini"
            icon="el-icon-edit"
          ></el-button>
          <el-button
            @click="handleClickDelete(scope.row)"
            type="primary"
            size="mini"
            icon="el-icon-delete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      :style="{marginTop: '20px'}"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          sex: 1,
          address: "上海市普陀区金沙江路 1518 弄(上海市普陀区金沙江路 1518 弄)"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          sex: 1,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          sex: 1,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          sex: 1,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    formatSex(row, column, cellValue, index) {
      return row.sex == 1 ? "男" : row.sex == 0 ? "女" : "未知";
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    },
    selectHandle(selection, row) {
      console.log("selectHandle");
      console.log(selection);
      console.log(row);
    },
    selectAllHandle(selection) {
      console.log("selectAllHandle");
      console.log(selection);
    },
    rowClickHandle(row, column, event) {
      console.log("rowClickHandle");
      console.log(row);
      console.log(column);
      console.log(event);
    },
    getSelection() {
      let selection = this.$refs.multipleTable.selection;
      console.log(selection);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  mounted() {}
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.warning-row {
  background: oldlace;
}
.success-row {
  background: #f0f9eb;
}
</style>
