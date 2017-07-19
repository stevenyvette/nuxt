<template>
  <section class="main-container">
    <list-container :mode="mode">
      <!--<product-list @on-apply="redirectH5" :companyInfoList="companyInfo"></product-list>-->
      <!--<title-list stitle="已申请产品">-->
        <!--<product-list @on-apply="redirectH5" :companyInfoList="appliedCompanyInfo"></product-list>-->
      <!--</title-list>-->
    </list-container>
  </section>
</template>

<script>
//  import axios from 'axios'
//  import Vue from 'vue'
//  import { Vuex, mapActions, mapGetters } from 'vuex'
  import ListContainer from '~components/loan/ListContainer'
//  import ProductList from '~components/loan/ProductList'
  import TitleList from '~components/loan/TitleList'
//  import { authApi, applyApi } from '~plugins/api'
//  import { applyApi } from '~plugins/api/index'

//  Vue.use(Vuex)

//  const loginMapping = {
//    market: 'mktlogin',
//    loan: 'login'
//  }

  export default {
    components: {
      ListContainer,
//      ProductList,
      TitleList
    },
    data () {
      return {
        mode: 'market'
      }
    },
//    computed: mapGetters([
//      'hasLogin', 'companyInfo', 'appliedCompanyInfo', 'isLoading'
//    ]),
    methods: {
//      ...mapActions([
//        'applyWithoutLogin', 'initUserInfo', 'applyDefaultValue', 'saveApplyInfo', 'setLoadingStatus', 'showToast', 'skipBind'
//      ]),
      redirectH5 (name) {
//        if (window._taq) {
//          window._taq.push({convert_id: '59757795848', event_type: 'button'}) // toutiao
//        }

        if (this.isLoading) return

        this.setLoadingStatus(true)

//        applyApi.isH5(name).then((response) => {
//          if (response.data.h5) { // h5产品直接跳转
//            return this.applyWithoutLogin({type: name})
//          } else {
//            this.saveApplyInfo({type: name})
//
//            if (this.hasLogin) {
//              if (['bxleads', 'dongfang', 'klqian'].includes(name)) {
//                this.setLoadingStatus(false)
//                this.$router.push({name: 'mktregister'})
//              } else {
//                this.applyDefaultValue(name).then((response) => {
//                  this.showToast(response.alertMsg)
//                })
//                this.skipBind(false)
//                this.$router.replace({name: loginMapping[this.mode]})
//              }
//            } else {
//              this.setLoadingStatus(false)
//              this.$router.replace({name: loginMapping[this.mode]})
//            }
//          }
//        }).catch((e) => {
//          this.setLoadingStatus(false)
//        })
      }
    },
    created () {
      console.log(this.$route)
//      authApi.checkAuth().then((res) => {
//        this.initUserInfo()
//      })
    }
  }
</script>

<style lang="stylus">
  .main-container
    min-height 100vh
    display flex
    justify-content center
    align-items center
    text-align center

  .title
    font-family "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    display block
    font-weight 300
    font-size 100px
    color #35495e
    letter-spacing: 1px

  .subtitle
    font-weight 300
    font-size 42px
    color #526488
    word-spacing 5px
    padding-bottom 15px

  .links
    padding-top 15px

</style>
