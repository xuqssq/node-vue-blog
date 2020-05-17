<!-- 分页器 -->
<template>

    <div class="paging-device">
        <div @click="pageIndex--" :class="{arrow:pageIndex===1}"><</div>
        <div @click="pageIndex = item" v-for='item in pageCount' :class="{'active':pageIndex===item}">{{item}}</div>
        <div @click="pageIndex++" :class="{arrow:pageIndex===pageCount||pageCount==1}">></div>
    </div>
</template>

<script>
export default {
    props:{
        totalCount:{
            type:Number,
            // required:true
        },
        value:{
            type:Number,
            // required:true
        },
        pageSize:{
            type:Number,
            default:10
        },
    },
    data () {
       return {
           pageIndex:this.value 
       };
    },
    watch:{
        pageIndex(val){
            if(val<1)this.pageIndex = 1
            else if (val>this.pageCount)this.pageIndex = this.pageCount
            this.$emit("input",val)
        }
    },
    components: {},
    computed:{
        pageCount(){
           return Math.ceil(this.totalCount / this.pageSize)||1
        }
    },
    methods: {
    },
    mounted() {
    },
}

</script>
<style scoped lang='stylus' ref="reference" ref="stylesheet/stylus">
    .paging-device
        display flex
        justify-content center
        div
            width 38px
            height 38px
            background-color #fff
            color #959595
            text-align center
            line-height 38px
            margin 30px 5px
            cursor pointer
            -webkit-user-select none
            -moz-user-select none
            -ms-user-select none
            user-select none
            &:hover
                background-color #6a70ec
                color #fff
        .active
            background-color #6a70ec
            color #fff
        .arrow
            display none 
</style>