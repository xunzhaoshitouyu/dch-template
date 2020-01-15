<template>
  <el-container class="dch-container">
    <dch-header
      title="神州医疗权限系统"
      :userName="'admin'"
    ></dch-header>
    <el-container class="dch-container-content">
      <!-- 菜单栏 -->
      <el-aside
        class="dch-aside"
        width="200px"
      >
        <el-menu router>
          <nav-menu :menus="menus"></nav-menu>
        </el-menu>
      </el-aside>
      <el-main class="dch-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import DchHeader from '@/pages/header/index'
import navMenu from '@/components/menu/navMenu'
export default {
  name: 'demo1',
  components: { DchHeader, navMenu },
  data () {
    return {
      userName: 'admin',
      activeMenuIndex: '2', // 当前激活菜单的 index
      menus: [ // 菜单项数据
        {
          title: '布局',
          index: '1',
          children: [
            {
              title: '有tree',
              index: '/layoutTree',
              children: null
            },
            {
              title: '没tree',
              index: '/layout',
              children: null
            }
          ]
        },
        {
          title: '菜单',
          index: '/menu',
          children: null
        },
        {
          title: '按钮',
          index: '/button',
          children: null
        },
        {
          title: '输入框',
          index: '/input',
          children: null
        },
        {
          title: '下拉框',
          index: '/select',
          children: null
        },
        {
          title: '穿梭框',
          index: '/transfer',
          children: null
        },
        {
          title: '模态窗',
          index: '/modal',
          children: null
        },
        {
          title: '提示信息',
          index: '/tooltip',
          children: null
        }, {
          title: '步骤条',
          index: '/steps',
          children: null
        }
      ]
    }
  }
}
</script>
