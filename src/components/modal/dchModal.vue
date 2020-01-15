<template>
  <el-dialog
    class="dch-modal"
    :title="title"
    :visible.sync="visible"
    :before-close="handleClose"
  >
    <slot></slot>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        type="info"
        @click="handleClose"
      >取 消</el-button>
      <el-button
        type="primary"
        @click="submit"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'DchModal',
  props: {
    title: {
      required: true,
      type: String,
      default: ''
    },
    visible: {
      required: true,
      type: Boolean,
      default: false
    },
    callback: { // 点击确认按钮的回调
      required: false,
      type: Function,
      default: function () { this.$emit('close') }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    submit () {
      this.callback()
    }
  }
}
</script>
