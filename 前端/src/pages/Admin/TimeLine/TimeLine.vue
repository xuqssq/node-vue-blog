<!-- 时光轴管理-->
<template>
    <div>   
        <div class="content-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        };
    },

    components: {
    },

    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .content-box
        margin-left 250px
        margin-top 60px
        padding 20px
</style>