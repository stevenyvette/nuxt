<template>
  <div class="wechat">
    <x-header class="jinrong-header">关注微信公众号</x-header>
    <div class="content">
      <h1>关注微信公众号“百姓有米”</h1>
      <div class="step-list">
        <p>点击搜索框，点击公众号</p>
        <p>输入“百姓有米“，点击搜索</p>
        <p>选择“百姓有米”进入关注</p>
      </div>
      <img class="helper-img" src="//file.baixing.net/201704/e487f31098721055d968af6b52db2999.png"/>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    components: {XHeader}
  }
</script>

<style scoped lang="stylus">
  .helper-img {
    display block
    width 80%
    margin 0 auto
  }

  .content {
    background white
    padding 40px 0 60px 0
    > h1 {
      font-size 24px
      color #252525
      font-weight 400
      text-align center
      margin-bottom 30px
    }
  }

  .step-list {
    margin 0 auto 30px auto
    background url(//file.baixing.net/201704/785c2676fe06483e19b1c2b0d1043056.png) no-repeat 0 -4px
    height 160px
    padding-left 40px
    width 250px
    > p {
      margin-bottom: 25px;
      line-height: 2;
    }
  }
</style>
