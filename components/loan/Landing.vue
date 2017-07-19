<template>
	<list-container :mode="mode">
		<product-list @on-apply="redirectH5" :companyInfoList="companyInfo"></product-list>
	</list-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ListContainer from './ListContainer'
import ProductList from './ProductList'
import { http } from '@api'

export default {
	components: {
		ListContainer,
		ProductList
	},
	computed: mapGetters([
		'companyInfo', 'isLoading'
	]),
	data() {
		return {
			mode: 'landing',
		}
	},
	methods: {
		...mapActions([
			'applyWithoutLogin', 'setLoadingStatus'
		]),
		redirectH5(name) {
			if (this.isLoading) return

			this.setLoadingStatus(true)

			http.post('apply/isH5', { name }).then((response) => {
				if (response.data.h5) {
					return this.applyWithoutLogin({ type: name })
				} else {
					Promise.reject('出错了，请稍后再试!')
				}
			}).catch((e) => {
				this.setLoadingStatus(false)
				// alert(e)
			})
		}
	},
	created() {
		const query = this.$route.query
		if (query && query.src === 'h5youmi_m_z008') {
			window.location.href = '/m/market?src=yueyoumi_m_zgd008'
		}
	}
}
</script>
