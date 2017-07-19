<template>
  <!--<group class="loan-company-info" @click.native="log(name)">-->
    <!--<img class="company-logo" :src="getUrl()">-->
    <!--<div class="brief-info">-->
      <!--<div class="company-title">-->
        <!--<span class="company-name">{{ product.name }}</span>-->
        <!--<span class="loan-condition">{{ product.condition }}</span>-->
      <!--</div>-->
      <!--<div class="info">-->
        <!--<span class="info-label">推荐{{ periodMapping[product.interestPeriod] }}利率(%)</span>-->
        <!--<span class="loan-interst">{{ product.interest | interestFilter}}</span>-->
      <!--</div>-->
      <!--<div class="info">-->
        <!--<span class="info-label">{{ product.limit | amountLabel}} </span>-->
        <!--<span class="loan-limit">{{ product.limit }}万</span>-->
      <!--</div>-->
      <!--<div class="info">-->
        <!--<span class="info-label">放款时间</span>-->
        <!--<span class="loan-time">{{ product.time }}</span>-->
      <!--</div>-->
    <!--</div>-->
  <!--</group>-->
</template>

<script>
//  import { Group } from 'vux'
  import { logApi } from '~plugins/api'

  export default {
    components: {
//      Group
    },
    props: ['name', 'product'],
    data () {
      return {
        periodMapping: {
          'year': '年',
          'month': '月',
          'day': '日'
        }
      }
    },
    filters: {
      amountLabel (value) {
        if (/[-~]/.test(value)) return '额度区间'
        return '最高额度'
      },
      interestFilter (value) {
        return value.replace('%', '')
      }
    },
    methods: {
      getUrl () {
        return this.product.logo
      },
      log (name) {
        logApi.l2detail(name)
      }
    }
  }
</script>

<style scoped lang="stylus">

  .loan-company-info
    .company-logo
      width 4rem
      float left
      margin-top 3px
    .brief-info
      padding-left 4.6rem
      height 70px
      width 100%
      .company-title
        padding-left 0.1rem
        display block
        .company-name
          font-size 1em
          margin-right 5px
          color #333333
        .loan-condition
          position relative
          top -2px
          border solid 1px #C5D4F2
          border-radius 2px
          font-size 0.7em
          padding 1px
          color #6F94E0
          margin-bottom 8px
          max-width 115px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
      .info
        width 33.33%
        border-left solid 1px #f0f0f4
        float left
        overflow hidden
        text-align center
        white-space nowrap
        .info-label
          color #999
          font-size 12px
          margin-right 5px
        .loan-limit
          margin-right 10px
          font-size 14px
          color #000
        .loan-time
          font-size 14px
          color #000
          text-overflow ellipsis
          overflow hidden
        .loan-interst
          color #E95046
          font-size 14px
        span
          display block
          margin 4px 4px 0px
</style>
