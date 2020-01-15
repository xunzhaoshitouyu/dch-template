<template>
  <div class="navMenu">
    <label
      v-for="(menu, index) in menus"
      :key="index"
    >
      <el-submenu
        v-if="menu.children && menu.children.length"
        :index="menu.index"
      >
        <template slot="title">
          <span>{{menu.title}}</span>
        </template>
        <navMenu :menus="menu.children"></navMenu>
      </el-submenu>
      <el-menu-item
        v-else
        :index="menu.index"
      >
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
    </label>
  </div>
</template>
<script>
export default {
  name: 'navMenu',
  props: ['menus']
}
</script>
