<template>
  <div>
    <div class="list-title" @click="toggleStatus">
      <span class="pink-block"></span>
      <span :class="[isActive ? 'active' : 'inactive', 'title']">{{ stitle }}</span>
    </div>
    <slot v-if="isActive"></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: true
      }
    },
    props: ['stitle'],
    methods: {
      toggleStatus () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list-title
    margin-top 10px
    margin-bottom -10px
    border-bottom 1px solid #EEE
    color #666
    height 31px
    background #FFF
    line-height 31px
    .pink-block
      display inline-block
      position relative
      top 2px
      margin-left 16px
      width 3px
      height 14px
      font-size 14px
      background #F46
    .title
      font-size 14px
      &.active:after
        content ""
        display inline-block
        border-top 4px solid #BDBDBD
        border-left 4px solid transparent
        border-right 4px solid transparent
        position absolute
        margin-top 14px
        right 10px
      &.inactive:after
        content ""
        display inline-block
        border-bottom 4px solid #BDBDBD
        border-left 4px solid transparent
        border-right 4px solid transparent
        position absolute
        margin-top 14px
        right 10px
</style>
