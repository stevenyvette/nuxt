<template>
  <list-container :mode="mode">
    <required-login>
      <product-list @on-apply="sendInfo" :companyInfoList="companyInfo"></product-list>
      <title-list stitle="已申请产品">
        <product-list @on-apply="sendInfo" :companyInfoList="appliedCompanyInfo"></product-list>
      </title-list>
    </required-login>
  </list-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { http } from '~plugins/api'
  import ListContainer from './ListContainer'
  import ProductList from './ProductList'
  import TitleList from './TitleList'
  import RequiredLogin from '../../RequiredLogin'

  export default {
    components: {
      ListContainer,
      ProductList,
      RequiredLogin,
      TitleList
    },
    computed: mapGetters([
      'companyInfo', 'appliedCompanyInfo'
    ]),
    data () {
      return {
        mode: 'loan'
      }
    },
    methods: {
      ...mapActions([
        'applyLoan', 'initLoanInfo', 'applyDefaultValue', 'setLoadingStatus', 'showToast'
      ]),
      sendInfo (name) {
        this.setLoadingStatus(true)
        // 为了DEBUG_SEGMENT能顺利带过去，这里把参数都传过去
        http.post('apply/isH5' + location.search, {name}).then((response) => {
          if (response.data.h5 || response.data.noDetail) {
            this.applyDefaultValue(name).then((response) => {
              this.showToast(response.alertMsg)
              this.setLoadingStatus(false)
            })
          } else {
            this.$router.push('/loan/' + name)
            this.setLoadingStatus(false)
            return Promise.reject('Redirect to Detail page.')
          }
        }).catch((e) => {
          console.info(e)
        })
      }
    }
  }
</script>
