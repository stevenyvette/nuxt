<template>
	<div class="footer-container">
		<img src="//file.baixing.net/201704/7a8b3efb1678f874236d962373420f19.png" />
		<p>关注“
			<strong>百姓有米</strong>”微信公众号</p>
		<p>随时随地都能贷，查询贷款状态，更有惊喜好礼相送。</p>
		<nuxt-link class="link" :to="{name: 'WeChatHelperPage'}">+ 关注</nuxt-link>
	</div>
</template>

<style scoped lang="stylus">
	.footer-container
		width 70%
		margin 40px auto
		text-align center
		> img
			width 80px
			margin-bottom 10px
		> p
			color #777
			> strong
				color #6F92D8
			&:last-child
				font-size 14px
	.link
		display inline-block
		background #FC663D
		color white
		padding 4px 40px
		margin-top 10px
		border-radius 4px
</style>
