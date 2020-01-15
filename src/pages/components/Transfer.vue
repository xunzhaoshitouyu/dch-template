<template>
  <div>
    <ol class="api">
      <li>titles为列表标题,例如：
        <code>titles: ['全部', '已选']</code>
      </li>
      <li>data是全部数据：
        <code>data:['备选项2','备选项1']</code>
      </li>
      <li>value是已选数据：
        <code>value:['备选项2','备选项1']</code>
      </li>
      <li>button-texts是按钮文案：
        <code>['到左边', '到右边']</code>
      </li>
    </ol>
    <el-transfer
      v-model="value"
      :data="data"
      :titles="titles"
      :button-texts="buttonTexts"
    ></el-transfer>
  </div>

</template>
<script>
export default {
  name: 'DchTransfer',
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: [1, 4],
      titles: ['全部', '已选'],
      buttonTexts: ['到左边', '到右边']
    }
  }
}
</script>
