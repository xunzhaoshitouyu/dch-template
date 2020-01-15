<template>
  <div class="dch-layout">
    <div>
      <!-- 下拉框 -->
      <el-select
        class="dch-select"
        v-model="value"
        clearable
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select
        class="dch-select"
        v-model="value"
        clearable
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select
        class="dch-select"
        v-model="value"
        clearable
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <!-- 输入框 -->
      <el-input
        class="dch-input"
        v-model="inputValue"
        placeholder="请输入"
      />

      <!-- 按钮 -->
      <el-button
        class="dch-button main-btn"
        @click="search"
      >
        <i class="el-icon-search"></i>
        查询</el-button>
      <el-button class="dch-button main-btn">
        <i class="el-icon-refresh-right"></i>
        重置</el-button>
    </div>

    <!-- 主内容区域 -->
    <main-content></main-content>
  </div>
</template>
<script>
import mainContent from '@/pages/content/index'
export default {
  name: 'layputTree',
  components: { mainContent },
  data () {
    return {
      inputValue: '', // 输入框绑定的变量
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    search () {
    }
  }
}
</script>
