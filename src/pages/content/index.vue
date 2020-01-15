<template>
  <div class="main-content">
    <el-row>
      <el-col :span="3">
        <el-button
          class="dch-button sub-btn"
          @click="add"
        >
          <i class="el-icon-plus"></i>
          新增</el-button>
      </el-col>
      <el-col :span="3">
        <el-button class="dch-button sub-btn">
          <i class="el-icon-edit"></i>
          编辑</el-button>
      </el-col>
      <el-col :span="3">
        <el-button
          class="dch-button sub-btn"
          @click="deleteRow"
        >
          <i class="el-icon-delete"></i>
          删除</el-button>
      </el-col>
      <el-col :span="3">
        <el-button class="dch-button sub-btn">
          <i class="el-icon-circle-check"></i>
          启用</el-button>
      </el-col>
      <el-col :span="3">
        <el-button class="dch-button sub-btn">
          <i class="el-icon-remove-outline"></i>
          禁用</el-button>
      </el-col>
    </el-row>

    <div style="display:flex;">
      <!-- 树结构 -->
      <el-tree
        class="dch-tree"
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
      <div style="flex:1;">
        <!-- 表格 -->
        <el-table
          class="dch-table"
          :data="tableData"
          highlight-current-row
          @row-dblclick="rowDbclick"
        >
          <el-table-column
            v-for="column in columns"
            :key="column.id"
            :prop="column.prop"
            :label="column.label"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="view(scope.$index, scope.row)"
              >查看</el-button>
              <el-button
                size="mini"
                @click="edit(scope.$index, scope.row)"
              >编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          class="dch-pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="allData.length"
        >
        </el-pagination>
      </div>
    </div>

    <!-- 新增职位弹窗 -->
    <dch-modal
      :title="'新增职位'"
      :callback="addCallback"
      :visible="addVisible"
      @close="closeModal"
    >
      <el-form
        :model="addForm"
        status-icon
        :rules="rules"
        ref="addForm"
        label-width="100px"
      >
        <el-form-item
          label="职位名称"
          prop="jobName"
        >
          <el-input
            v-model="addForm.jobName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="职位描述"
          prop="jobDescribe"
        >
          <el-input
            v-model="addForm.jobDescribe"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="职位CODE"
          prop="jobCode"
        >
          <el-input v-model.number="addForm.jobCode"></el-input>
        </el-form-item>
      </el-form>
    </dch-modal>

    <!-- 修改人员信息 -->
    <dch-modal
      :title="'修改人员信息'"
      :callback="editCallback"
      :visible="editVisible"
      @close="closeEditModal"
    >
      <el-form
        :model="editForm"
        :disabled="readOnly"
        ref="editForm"
        label-width="100px"
      >
        <el-form-item label="用户名">
          <el-input
            v-model="editForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input
            v-model="editForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="公司">
          <el-input
            v-model="editForm.company"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input
            v-model="editForm.department"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-input
            v-model="editForm.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input
            v-model="editForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </dch-modal>
  </div>
</template>
<script>
import { showMsg } from '@/util/util'
import DchModal from '@/components/modal/dchModal'
export default {
  name: 'mainContent',
  components: { DchModal },
  data () {
    return {
      readOnly: false,
      editForm: {
        id: 1,
        userName: '',
        name: '',
        company: '',
        department: '',
        title: '',
        email: '',
        status: ''
      },
      addForm: {
        jobName: '',
        jobDescribe: '',
        jobCode: ''
      },
      rules: {
        jobName: [
          { required: true, trigger: 'blur', message: '请填写职位名称' }
        ],
        jobDescribe: [
          { required: true, trigger: 'blur', message: '请填写职位描述' }
        ],
        jobCode: [
          { required: true, trigger: 'blur', message: '请填写职位CODE' }
        ]
      },
      addVisible: false,
      editVisible: false,
      currentPage: 1,
      pageSize: 5,
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      columns: [
        {
          label: '用户名',
          prop: 'userName'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '公司',
          prop: 'company'
        },
        {
          label: '部门',
          prop: 'department'
        },
        {
          label: '职位',
          prop: 'title'
        },
        {
          label: '邮箱',
          prop: 'email'
        },
        {
          label: '状态',
          prop: 'status'
        }
      ],
      tableData: [],
      allData: [
        {
          id: 1,
          userName: 'admin',
          name: '管理员1',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 2,
          userName: 'admin',
          name: '管理员2',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 3,
          userName: 'admin',
          name: '管理员3',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 4,
          userName: 'admin',
          name: '管理员4',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 5,
          userName: 'admin',
          name: '管理员5',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 6,
          userName: 'admin',
          name: '管理员6',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 7,
          userName: 'admin',
          name: '管理员7',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 8,
          userName: 'admin',
          name: '管理员8',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '禁用'
        },
        {
          id: 9,
          userName: 'admin',
          name: '管理员9',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 10,
          userName: 'admin',
          name: '管理员10',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        },
        {
          id: 11,
          userName: 'admin',
          name: '管理员11',
          company: '神州医疗',
          department: '信息技术中心',
          title: '项目经理',
          email: 'test@dch.com',
          status: '启用'
        }
      ]
    }
  },
  created () {
    this.tableData = this.allData.slice(0, this.currentPage * this.pageSize)
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    view (index, row) {
      this.editForm = row
      this.editVisible = true
      this.readOnly = true
    },
    edit (index, row) {
      this.editForm = row
      this.editVisible = true
      this.readOnly = false
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.tableData = this.allData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.tableData = this.allData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    },
    rowDbclick (row, column, e) {
      this.editForm = row
      this.editVisible = true
      this.readOnly = false
    },
    add () {
      this.addVisible = true
    },
    closeModal () {
      this.addVisible = false
      this.resetForm()
    },
    resetForm () {
      this.addForm = {
        jobName: '',
        jobDescribe: '',
        jobCode: ''
      }
    },
    addCallback () {
      this.$refs['addForm'].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // this.closeModal()
    },
    editCallback () {

    },
    closeEditModal () {
      this.editVisible = false
    },
    deleteRow () {
      showMsg('请选择一条信息进行操作')
    }
  }
}
</script>
