<template>
  <div>
    <ul class="tab-list">
      <li v-for="(text, index) in ['放款快', '通过率高', '只需身份证']" :class="index | isSelected(listTab)"
          @click="changeTab(index)">
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    filters: {
      isSelected (value, selected) {
        return value === selected ? 'selected' : ''
      }
    },
    methods: {
      onChange () {
        console.log('hello')
      },
      ...mapActions([
        'changeTab'
      ])
    },
    computed: mapGetters([
      'listTab'
    ])
  }
</script>

<style lang="stylus">
  .tab-list
    display flex
    list-style none
    justify-content space-around
    margin 10px 0 10px 0
    > li
      font-size 14px
      position relative
      height 2.5em
      line-height 34px
      border 1px solid #E6E6E6
      border-radius 2px
      background white
      color #666666
      padding 0px 20px 8px
      @media screen and (max-width: 360px)
        padding 0px 12px 5px
      &.selected
        color #E95046
        border-color #E95046
        &:before
          content "\D7"
          position absolute
          top -6px
          right -6px
          border 1px solid
          width 12px
          height 12px
          border-radius 50%
          background white
          font-size 12px
          font-weight 600
          display flex
          justify-content center
          align-items center
</style>
