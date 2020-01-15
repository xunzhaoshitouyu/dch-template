<template>
  <div class='api'>
    <h3 class='api'>1、提示信息的使用方法是在页面引入util文件，如果有很多地方引用的话，可以注册为全局组件</h3>
    <h3 class='api'>2、调用showMsg方法，该方法需要传入一个参数（要显示的信息，必须是字符串）</h3>
    <el-button @click="showMessage">显示提示信息</el-button>
  </div>
</template>
<script>
import { showMsg } from '@/util/util'
export default {
  methods: {
    showMessage () {
      showMsg('这是提示信息')
    }
  }
}
</script>
