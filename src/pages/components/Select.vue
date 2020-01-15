<template>
  <div>
    <h3 class="api">
      1、value是双向绑定的值
    </h3>
    <h3 class="api">
      2、options是选项，其数据接口为：<br>
      <code>{
        value: '选项2',
        label: '双皮奶'
        }</code>
      <br>
      其中value表示值，label表示显示的内容
    </h3>
    <el-select
      v-model="value"
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
  </div>

</template>
<script>
export default {
  name: 'DchSelect',
  data () {
    return {
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
  }
}
</script>
