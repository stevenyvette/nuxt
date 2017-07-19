<template>
	<div class="loading-wait">
		<countdown :time="2" @on-finish="finish" v-show="show"></countdown>
		<spinner class='spinner' type="lines"></spinner>
		<p class="loading-wait-text">正在为您跳转到{{loading[$route.query.type].name}}</p>
	</div>
	<div class="loading-logo-main">
		<img class='loading-logo' src='//file.baixing.net/201608/a66694081bf7738cdf503fcaf20997a8.png' />
		<img src="//file.baixing.net/201608/491ad4924dcd012e6a068ae3aa5b1fad.png" />
		<img class='loading-logo' :src="loading[$route.query.type].logo" />
	</div>
</template>
<script>
import { Group, Cell, Countdown, Spinner } from 'vux'
import { loading } from 'config/userConfig'

export default {
	components: {
		Group,
		Cell,
		Countdown,
		Spinner
	},
	methods: {
		finish: function () {
			location.href = decodeURIComponent(this.$route.query.url)
		}
	},
	data() {
		return {
			show: false,
			value: '',
			loading
		}
	}
}
</script>

<style lang = "stylus">
	.loading-logo-main
		width 280px
		margin 0 auto
		margin-top 80px

	.loading-logo
		dispaly line-block
		width 100px
		height 100px
		margin 10px

	.loading-wait
		width 200px
		margin 0 auto
		margin-top 120px

	.loading-wait-text
		text-align center
		color #999
		margin-top 20px

	.spinner
		margin-left 75px

	 .vux-spinner.vux-spinner svg
			width 40px
			height 40px

</style>
