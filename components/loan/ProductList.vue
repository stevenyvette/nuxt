<template>
  <div class="info-container">
    <!--<div :class="{ applied: checkIsApplied(name), 'loan-company-info-wrapper': true }"-->
    <div class="loan-company-info-wrapper"
    v-for="(product, name, index) in companyInfoList" @click="getLoanCompany(name, index)">
      <single-product :product="product" :name="name"></single-product>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SingleProduct from './SingleProduct'

  export default {
    components: {
      SingleProduct: SingleProduct
    },
    props: ['companyInfoList'],
    computed: mapGetters([
      'hasApplied'
    ]),
    methods: {
      checkIsApplied (name) {
        return !!this.hasApplied.find((log) => {
          return log['name'] === name
        })
      },
      getLoanCompany (name, index = 0) {
        this.$emit('on-apply', name)
        this.$tracker.track({action: 'l2detail', type: name, position: index + 1})
      }
    }
  }
</script>

<style lang="stylus">
  $default-spacing = 10px
  .info-container
    background-color #f5f5f5

  .loan-company-info-wrapper
    background-color #FFF
    margin-top 10px
    padding 5px
    &.applied
      background-size 50px
      background-repeat no-repeat
      background-position top right
      background-image url('//file.baixing.net/201704/1e076d218331f8eac154fe395501cf1e.png')
    .weui-cells
      background none
      margin 5px 5px
      &:after
        border none
      &:before
        border none
</style>
