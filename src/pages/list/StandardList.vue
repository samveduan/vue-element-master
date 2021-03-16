<template>
  <div>
    <el-card style="margin-bottom: 15px;">
      <el-row :style="{marginBottom: '15px'}">
        <el-col :span="8" style="text-align: center; font-size: 13px; color: #999999;">我的待办</el-col>
        <el-col :span="8" style="text-align: center; font-size: 13px; color: #999999;">本周任务平均处理时间</el-col>
        <el-col :span="8" style="text-align: center; font-size: 13px; color: #999999;">本周完成任务数</el-col>
      </el-row>
      <el-row :style="{marginBottom: '15px'}">
        <el-col :span="8" style="text-align: center; font-size: 24px;">8个任务</el-col>
        <el-col :span="8" style="text-align: center; font-size: 24px;">32分钟</el-col>
        <el-col :span="8" style="text-align: center; font-size: 24px;">24个任务</el-col>
      </el-row>
    </el-card>

    <el-card>
      <el-row :style="{marginBottom: '15px'}">
        <el-col :span="24">
          <el-button type="primary" size="small" icon="el-icon-plus" @click="openAddDialog">添加</el-button>
          <el-button type="primary" size="small" icon="el-icon-minus" @click="deleteArticle">删除</el-button>
          <el-input
            :style="{width: '300px', float: 'right'}"
            placeholder="搜索"
            v-model="searchText"
            suffix-icon="el-icon-search"
            @change="searchArticle"
            :clearable="true"
          ></el-input>
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width: 100%" v-loading="loading" ref="articleTable">
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column prop="id" label="ID" width="50"></el-table-column>
        <el-table-column prop="title" label="标题" width="400"></el-table-column>
        <el-table-column prop="content" label="内容" :formatter="formatterContent"></el-table-column>
        <el-table-column label="状态" width="200">
          <template slot-scope="scope">
            <el-progress :percentage="Math.ceil(Math.random()*100)" color="#5cb87a"></el-progress>
          </template>
        </el-table-column>
        <el-table-column label="编辑" width="100">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
              type="primary"
              @click="editArticle(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :style="{marginTop: '20px'}"
      ></el-pagination>
    </el-card>

    <el-dialog title="添加" :visible.sync="addDialogVisible" width="40%">
      <el-form
        ref="addDialogForm"
        :model="addDialogFormData"
        :rules="addDialogFormRules"
        label-width="60px"
        label-position="left"
      >
        <el-form-item prop="title" label="标题">
          <el-input v-model="addDialogFormData.title"></el-input>
        </el-form-item>
        <el-form-item prop="content" label="内容">
          <el-input type="textarea" :rows="8" v-model="addDialogFormData.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetAddDialogForm('addDialogForm')">取 消</el-button>
        <el-button type="primary" @click="submitAddDialogForm('addDialogForm')">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="编辑" :visible.sync="editDialogVisible" width="40%">
      <el-form
        ref="editDialogForm"
        :model="editDialogFormData"
        :rules="editDialogFormRules"
        label-width="60px"
        label-position="left"
      >
        <el-form-item prop="title" label="标题">
          <el-input v-model="editDialogFormData.title"></el-input>
        </el-form-item>
        <el-form-item prop="content" label="内容">
          <el-input type="textarea" :rows="8" v-model="editDialogFormData.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetEditDialogForm('editDialogForm')">取 消</el-button>
        <el-button type="primary" @click="submitEditDialogForm('editDialogForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      currentPage: 1,
      pageSize: 5,
      total: 0,
      tableData: [],
      searchText: "",
      addDialogVisible: false,
      editDialogVisible: false,
      addDialogFormData: {
        title: "",
        content: ""
      },
      addDialogFormRules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }]
      },
      editDialogFormData: {
        title: "",
        content: ""
      },
      editDialogFormRules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    formatterContent(row, column) {
      return row.content.substring(0, 60) + "...";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getData(this.currentPage, val);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getData(val, this.pageSize);
    },
    getData(pageNumber, pageSize) {
      this.loading = true;
      this.$axios
        .get(
          `/api/article/all/?pageSize=${pageSize}&pageNumber=${pageNumber}&sortName=id&sortOrder=desc&_=1595230808893`
        )
        .then(
          resp => {
            this.loading = false;
            let ajaxData = [];
            for (let i = 0; i < resp.data.rows.length; i++) {
              ajaxData.push({
                key: resp.data.rows[i].id,
                id: resp.data.rows[i].id,
                title: resp.data.rows[i].title,
                content: resp.data.rows[i].content
              });
            }

            this.tableData = ajaxData;
            this.total = resp.data.total;
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
    },
    openAddDialog() {
      this.addDialogVisible = true;
    },
    submitAddDialogForm(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          _this.$axios
            .post("/api/article/add/", {
              title: this.addDialogFormData.title,
              content: this.addDialogFormData.content
            })
            .then(res => {
              _this.$notify.success({
                title: "成功提示",
                message: "添加成功！"
              });

              _this.$refs["addDialogForm"].resetFields();
              _this.addDialogVisible = false;
            })
            .catch(error => {
              _this.$notify.error({
                title: "错误提示",
                message: "网络错误，添加失败！"
              });
            });
        } else {
          console.log("error submit!!");
        }
      });
    },
    resetAddDialogForm(formName) {
      this.$refs[formName].resetFields();
      this.addDialogVisible = false;
    },
    editArticle(data) {
      this.editDialogVisible = true;
      this.editDialogFormData.title = data.title;
      this.editDialogFormData.content = data.content;
    },
    submitEditDialogForm(formName) {
      let selection = this.$refs.articleTable.selection;
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          _this.$axios
            .post("/api/article/edit/", {
              id: selection[0].id,
              title: this.editDialogFormData.title,
              content: this.editDialogFormData.content
            })
            .then(res => {
              _this.$notify.success({
                title: "成功提示",
                message: "添加成功！"
              });

              _this.$refs["editDialogForm"].resetFields();
              _this.editDialogVisible = false;
            })
            .catch(error => {
              _this.$notify.error({
                title: "错误提示",
                message: "网络错误，添加失败！"
              });
            });
        } else {
          console.log("error submit!!");
        }
      });
    },
    resetEditDialogForm(formName) {
      this.$refs[formName].resetFields();
      this.editDialogVisible = false;
    },
    deleteArticle() {
      // 删除文章
      let _this = this;
      let selection = this.$refs.articleTable.selection;
      let len = selection.length;
      let idArr = [];
      for (let i = 0; i < len; i++) {
        idArr.push(selection[i].id);
      }

      if (len === 0) {
        this.$notify.error({
          title: "错误提示",
          message: "请选择要删除的文章！"
        });
      } else {
        this.$axios
          .post("/api/article/delete/", {
            ids: idArr
          })
          .then(res => {
            if (res.data.ret) {
              _this.$notify.success({
                title: "成功提示",
                message: "文章删除成功！"
              });
              this.getData(1, 5);
              console.log(res);
            } else {
              _this.$notify.success({
                title: "错误提示",
                message: res.data.errMsg
              });
            }
          })
          .catch(error => {
            this.$notify.success({
              title: "错误提示",
              message: "网络错误，删除失败！"
            });
          });
      }
    },
    searchArticle() {
      // 搜索
      console.log(this.searchText);
    }
  },
  mounted() {
    this.getData(1, 5);
  }
};
</script>

<style scoped>
</style>