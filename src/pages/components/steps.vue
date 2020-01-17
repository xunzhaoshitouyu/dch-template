<template>
  <div>
    <el-steps
      class="dch-steps"
      :active="active"
    >
      <el-step
        :class="{'dch-finish-step':active>=index}"
        v-for="(step,index) in steps"
        :key="index"
      >
        <template slot="title">
          {{step.title}}{{active>=index}}
        </template>
        <template slot="icon">
          <img
            :src="active>=index?step.finishIcon:step.icon"
            alt=""
            @click="goStep(index)"
          >
        </template>
      </el-step>
    </el-steps>

    <!-- 内容区域 -->
    <div v-if="currentActive==0">
      <p>步骤 1</p>
      <el-button @click="nextStep">下一步</el-button>
    </div>
    <div v-if="currentActive==1">
      <p>步骤 2</p>
      <el-button @click="nextStep">下一步</el-button>
    </div>
    <div v-if="currentActive>=2">
      <p>步骤 3</p>
      <el-button @click="nextStep">finish</el-button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'DchSteps',
  data () {
    return {
      active: 0,
      currentActive: 0,
      steps: [
        {
          title: '修改',
          icon: require('@/assets/images/annotations.review-gray.png'),
          finishIcon: require('@/assets/images/annotations.review.png')
        },
        {
          title: '用户',
          icon: require('@/assets/images/basic.information-gray.png'),
          finishIcon: require('@/assets/images/basic.information.png')
        },
        {
          title: '商品',
          icon: require('@/assets/images/Clinical Trials_3.png'),
          finishIcon: require('@/assets/images/Clinical Trials_2.png')
        }
      ]
    }
  },
  methods: {
    nextStep () {
      if (this.active === this.steps.length - 1) {
        this.active = this.steps.length
      } else {
        this.active++
      }

      this.currentActive = this.active
    },
    goStep (index) {
      if (index <= this.active) {
        this.currentActive = index
      }
    }
  }
}
</script>
