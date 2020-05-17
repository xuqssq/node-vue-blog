<!-- 标语列表 -->
<template>
   <div class="intro">
        <div class="want-say">
            <slot name="say-china"></slot>
            <slot name="say-eng"></slot>
        </div>
        <p class="want-say-content animated fadeInUp">
            <span class="symbol">“ </span>
            <slot name="say-content"></slot>
            <span class="symbol">”</span>
        </p>
    </div>
</template>

<script>
export default {
    data () {
       return {
       };
    },

    components: {},

    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .intro
         background #fff
         width 892px
         margin 0 auto
         margin-top 60px
         position relative
         height 146px
         border-radius 6px
         box-shadow 0 10px 28px 0 rgba(182, 193, 215, 0.1)
         @media screen and (max-device-width:960px){
            display none
         }
         .want-say
            position absolute
            width 226px
            height 140px
            border-radius 10px
            background-color #6001D2
            background-image -webkit-linear-gradient(151deg,#6001D2 0%,#4CB6F9 100%)
            left -20px
            top -20px
            display flex
            flex-direction column
            justify-content center
            align-items center
            color #fff
            span:nth-of-type(1){
               font-size 22px
               padding-bottom 5px
            }
         .want-say-content
            width 500px
            height 74px
            margin 0px auto
            position absolute
            right 85px
            top 26px
            .symbol
               font-size 28px
               color #6001D2
</style>