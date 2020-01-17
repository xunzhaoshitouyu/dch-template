<template>
  <div class="dch-pdf-container">
    <div class="dch-pdf-toolBar">
      <div>
        <el-button
          class="dch-button sub-btn"
          @click="zoomIn"
        >
          <i class="el-icon-zoom-in"></i>
          放大</el-button>
        <el-button
          class="dch-button sub-btn"
          @click="zoomOut"
        >
          <i class="el-icon-zoom-out"></i>
          缩小</el-button>
        <el-button
          class="dch-button main-btn"
          :disabled="currentPage<=1"
          @click="prePage"
        >上一页</el-button>
      </div>

      <span>{{currentPage}}/{{pageCount}}</span>
      <el-button
        class="dch-button main-btn"
        :disabled="currentPage>=pageCount"
        @click="nextPage"
      >下一页</el-button>
    </div>
    <pdf
      class="dch-pdf-content"
      ref="wrapper"
      :src="src"
      @num-pages="pageCount = $event"
      :page="currentPage"
    ></pdf>
  </div>
</template>

<script>

import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  },
  data () {
    return {
      src: './static/pdf/test.pdf',
      currentPage: 1,
      pageCount: undefined,
      scale: 50 // 放大系数
    }
  },
  created () {
    this.src = pdf.createLoadingTask(this.src)
  },
  methods: {
    // 放大
    zoomIn () {
      if (this.scale === 100) {
        return
      }
      this.scale += 5
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + '%'
    },
    zoomOut () {
      if (this.scale === 50) {
        return
      }
      this.scale += -5
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + '%'
    },
    prePage (page) {
      this.currentPage--
    },
    nextPage () {
      this.currentPage++
    }
  }
}

</script>
