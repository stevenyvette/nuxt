<template>
	<list-container :mode="mode">
		<product-list @on-apply="redirectH5" :companyInfoList="companyInfo"></product-list>
		<title-list stitle="已申请产品">
			<product-list @on-apply="redirectH5" :companyInfoList="appliedCompanyInfo"></product-list>
		</title-list>
	</list-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ListContainer from './ListContainer'
import ProductList from './ProductList'
import TitleList from './TitleList'
import { authApi, applyApi } from '@api'

const loginMapping = {
	market: 'mktlogin',
	loan: 'login',
}

export default {
	components: {
		ListContainer,
		ProductList,
		TitleList
	},
	data() {
		return {
			mode: 'market'
		}
	},
	computed: mapGetters([
		'hasLogin', 'companyInfo', 'appliedCompanyInfo', 'isLoading'
	]),
	methods: {
		...mapActions([
			'applyWithoutLogin', 'initUserInfo', 'applyDefaultValue', 'saveApplyInfo', 'setLoadingStatus', 'showToast', 'skipBind'
		]),
		redirectH5(name) {
			if (window._taq) {
				window._taq.push({ convert_id: '59757795848', event_type: 'button' }) // toutiao
			}

			if (this.isLoading) return

			this.setLoadingStatus(true)

			applyApi.isH5(name).then((response) => {
				if (response.data.h5) { // h5产品直接跳转
					return this.applyWithoutLogin({ type: name })
				} else {
					this.saveApplyInfo({ type: name })

					if (this.hasLogin) {
						if (['bxleads', 'dongfang', 'klqian'].includes(name)) {
							this.setLoadingStatus(false)
							this.$router.push({ name: 'mktregister' })
						} else {
							this.applyDefaultValue(name).then((response) => {
								this.showToast(response.alertMsg)
							})
							this.skipBind(false)
							this.$router.replace({ name: loginMapping[this.mode] })
						}
					} else {
						this.setLoadingStatus(false)
						this.$router.replace({ name: loginMapping[this.mode] })
					}
				}
			}).catch((e) => {
				this.setLoadingStatus(false)
			})
		}
	},
	created() {
		authApi.checkAuth().then((res) => {
			this.initUserInfo()
		})
	}
}
</script>
