<template>
  <div class="page">
    <div>验证码</div>
    <div>
      <span>验证码：</span>
      <div id="code" style="width: 200px;height:150px;font-size:50px" @click="createCode" class="yanzhengma_inp">{{ checkCode }}</div>
      <input style="display:block;width:100%;height:100px;font-size:50px;" type="text" v-model="picLyanzhengma">
      <div class="yanzheng" @click="checkLpicma">验证</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkCode: '',
      picLyanzhengma: ''
    }
  },
  created () {

  },
  mounted () {
    this.createCode()
  },
  methods: {
    createCode () {
      var code = ''
      var codeLength = 4// 验证码的长度
      var random = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for (var i = 0; i < codeLength; i++) {
        var index = Math.floor(Math.random() * 36)// 取得随机数的索引（0~35）
        code += random[index]// 根据索引取得随机数加到code上
      }
      this.checkCode = code// 把code值赋给验证码
    },
    // 验证所输入验证码是否一致，不区分大小写
    checkLpicma () {
      this.picLyanzhengma.toUpperCase()// 取得输入的验证码并转化为大写
      if (this.picLyanzhengma == '') {
        console.log('请输入验证码')
      } else if (this.picLyanzhengma.toUpperCase() != this.checkCode) {
        console.log('验证码输入错误')
        this.createCode()// 刷新验证码
        this.picLyanzhengma = ''
      } else {
        // 输入正确时
        console.log('验证码正确')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-direction: column;
}
</style>
