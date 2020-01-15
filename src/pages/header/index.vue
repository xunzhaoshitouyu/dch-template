<template>
  <!-- 头部 -->
  <el-header class="dch-header">
    <el-row :gutter="24">
      <!-- 系统名称 -->
      <el-col :span="18">
        <span class="system-name">神州医疗项目模版</span>
      </el-col>
      <!-- 用户信息 -->
      <el-col
        :span="6"
        class="user-info"
      >
        <el-dropdown>
          <span class="el-dropdown-link dch-dropdown-link">
            {{userName}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span @click="modifyPassword">修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="logout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default {
  name: 'DchHeader',
  props: ['title', 'userName'],
  data () {
    return {

    }
  },
  methods: {
    modifyPassword () {

    },
    logout () {
    }
  }
}
</script>
