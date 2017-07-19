<template>
  <div class="tabbar">
    <img class="jinrong-logo" src="~static/img/logo.png"/>
    <nuxt-link to="/" v-if="hasLogin">
      <img class="link-to-mine" src="~static/img/avatar.png"/>
    </nuxt-link>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'hasLogin'
      ])
    }
  }
</script>

<style lang="stylus">
  .tabbar
    height 40px
    .jinrong-logo
      height 28px
      margin-top 6px
      margin-left 15px
    .link-to-mine
      width 28px
      float right
      margin 6px
</style>
