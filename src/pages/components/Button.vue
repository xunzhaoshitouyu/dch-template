<template>
  <div>
    <h3>1、类名main-btn代表深色的按钮，sub-menu代表浅色按钮</h3>
    <h3>2、图标引用自element</h3>

    <el-button class="dch-button main-btn">main-btn</el-button>

    <el-button class="dch-button sub-btn">sub-btn</el-button>

    <el-button
      class="dch-button sub-btn"
      @click="add"
    >
      <i class="el-icon-plus"></i>
      el-icon-plus</el-button>
  </div>
</template>
<script>
export default {
  name: 'DchButton'
}
</script>
