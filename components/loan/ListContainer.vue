<template>
  <div>
    <div class="fix-header">
      <navbar></navbar>
      <img class="front-img" :src="getBanner"/>
      <tab></tab>
    </div>
    <!--<div class="company-info">-->
      <!--<slot @on-render="initList"></slot>-->
    <!--</div>-->
    <b-footer></b-footer>
    <case-number></case-number>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import BFooter from '../BFooter'
  import CaseNumber from '../CaseNumber'
  import Tab from './Tab'
  import Navbar from '../Navbar'
//  import ProductList from './ProductList'

  const banner = {
    dae: '//file.baixing.net/201706/a76c1f73369099a2415255c311e3e1cc.png',
    default: '//file.baixing.net/201703/724e7b85e886c75098c503b9a4ae024d.png',
    toutiao: '//file.baixing.net/201704/ea168a30234d6b4ac42c9d1396df5550.png'
  }

  export default {
    components: {
//      ProductList,
      Navbar,
      Tab,
      BFooter,
      CaseNumber
    },
    props: ['mode'],
    computed: {
      ...mapGetters([
        'hasLogin', 'isLoading'
      ]),
      getBanner () {
//        let category = this.$router.__data.category || 'default'
//        return banner[category] || banner['default']
        return banner['default']
      }
    },
    methods: {
      ...mapActions([
        'initLoanInfo', 'setBaseMode', 'saveApplyInfo'
      ])
    },
    created () {
      console.log('listContainer')
      this.showLoading = this.isLoading
      this.setBaseMode(this.mode)
//      this.initLoanInfo().then((res) => {
//        const routeName = this.$route.name
//        const query = this.$route.query
//
//        if (routeName === 'market' && query && query.bxleads) {
//          this.saveApplyInfo({type: 'bxleads'})
//          if (this.hasLogin) {
//            this.$router.replace({name: 'mktregister'})
//          } else {
//            this.$router.replace({name: 'mktlogin'})
//          }
//        }
//      })
    }
  }
</script>

<style lang="stylus">
  .front-img
    width 100%

  .company-info
    over-flow scroll
</style>
