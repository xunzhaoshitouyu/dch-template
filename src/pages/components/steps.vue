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
          {{step.title}}
        </template>
        <template slot="icon">
          <i
            :class="step.icon"
            @click="goStep(index)"
          ></i>
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
          icon: 'el-icon-edit'
        },
        {
          title: '用户',
          icon: 'el-icon-user'
        },
        {
          title: '商品',
          icon: 'el-icon-goods'
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
