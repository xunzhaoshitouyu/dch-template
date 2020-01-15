<template>
  <div>
    <ul class="api">
      <p>传入的参数：</p>
      <li>title：窗口的名称</li>
      <li>visible：窗口是否可见</li>
      <li>callback：点击确认按钮的回调</li>
      <li>close：关闭窗口的回调</li>
    </ul>
    <dch-modal
      :title="'模态窗'"
      :callback="callback"
      :visible="visible"
      @close="close"
    >
      <span>这是一个模态窗</span>

    </dch-modal>
  </div>

</template>
<script>
import DchModal from '@/components/modal/dchModal'
export default {
  components: { DchModal },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    close () {
      this.visible = false
    },
    callback () {
      console.log('这是确认回调方法')
    }
  }
}
</script>
