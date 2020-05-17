<!-- 后台根路由 -->
<template>
    <div>
        <side-bar></side-bar>
        <content-header></content-header>
        <router-view></router-view>
    </div>
</template>

<script>
import SideBar from '@/components/admin/SideBar'
import ContentHeader from '@/components/admin/ContentHeader'
export default {
    data () {
        return {

        };
    },

    components: {
        SideBar,
        ContentHeader
    },
    methods: {}
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">

</style>