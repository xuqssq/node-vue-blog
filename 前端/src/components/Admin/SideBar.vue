<!-- 后台侧边导航 -->
<template>
    <div>
        <div class="bar-box">
            <header class="side-logo">
                <img src="@/../static/650fff.png" alt="">
            </header>
            <ul class="site-nav-box">
                <li class="site-nav-item">
                    <router-link :to="{name:'Dashboard'}" class="site-nav-link" active-class="active">
                        <i class="fa fa-globe" aria-hidden="true"></i>
                        <span>仪表板</span>
                    </router-link>
                </li>
                <li class="site-nav-item">
                    <router-link :to="{name:'ArticleManagement'}" class="site-nav-link" active-class="active">
                        <i class="fa fa-file-word-o" aria-hidden="true"></i>
                        <span>文章管理</span>
                    </router-link>
                </li>
                <li class="site-nav-item">
                    <router-link :to="{name:'PostArticle'}" class="site-nav-link" active-class="active">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <span>发布文章</span>
                    </router-link>
                </li>
                <li class="site-nav-item">
                    <router-link :to="{name:'ResourcesManagement'}" class="site-nav-link" active-class="active">
                        <i class="fa fa-file-text" aria-hidden="true"></i>
                        <span>资源管理</span>
                    </router-link>
                </li>
                <li class="site-nav-item">
                    <router-link :to="{name:'AddResources'}" class="site-nav-link" active-class="active">
                        <i class="fa fa-file-code-o" aria-hidden="true"></i>
                        <span>发布资源</span>
                    </router-link>
                </li>
                <li class="site-nav-item">
                   <a href="#" class="site-nav-link" active-class="active"  @click="openTimeList()"> 
                        <i class="fa fa-linode" aria-hidden="true"></i>
                        <span>时光轴</span>
                        <i class="fa fa-chevron-down" aria-hidden="true" style="font-size:12px;margin-left:5px;transition:all .4s" :class="{tran:!listStatusT}"></i>
                   </a>
                    <ul class="friends-children" :class='{"list-status":listStatusT}'>
                        <li>
                             <router-link :to="{name:'AddTimeLine'}" class="site-nav-link" active-class="active">
                                <i class="fa fa-external-link" aria-hidden="true"></i>
                                <span>添加时光轴</span>
                            </router-link>
                        </li>
                        <li>
                             <router-link :to="{name:'TimeLineList'}" class="site-nav-link" active-class="active">
                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                <span>时光轴列表</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="site-nav-item">
                   <a href="#" class="site-nav-link" active-class="active"  @click="openSkillList()"> 
                        <i class="fa fa-bolt" aria-hidden="true"></i>
                        <span>关于技能</span>
                        <i class="fa fa-chevron-down" aria-hidden="true" style="font-size:12px;margin-left:5px;transition:all .4s" :class="{tran:!listStatusS}"></i>
                   </a>
                    <ul class="friends-children" :class='{"list-status":listStatusS}'>
                        <li>
                             <router-link :to="{name:'AddSkill'}" class="site-nav-link" active-class="active">
                                <i class="fa fa-puzzle-piece" aria-hidden="true"></i>
                                <span>添加技能</span>
                            </router-link>
                        </li>
                        <li>
                             <router-link :to="{name:'SkillList'}" class="site-nav-link" active-class="active">
                                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                <span>技能列表</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="site-nav-item">
                   <a href="#" class="site-nav-link" active-class="active"  @click="openFriendList()"> 
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        <span>友链管理</span>
                        <i class="fa fa-chevron-down" aria-hidden="true" style="font-size:12px;margin-left:5px;transition:all .4s" :class="{tran:!listStatusF}"></i>
                   </a>
                    <ul class="friends-children" :class='{"list-status":listStatusF}'>
                        <li>
                             <router-link :to="{name:'AddFriends'}" class="site-nav-link" active-class="active">
                                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                                <span>添加友链</span>
                            </router-link>
                        </li>
                        <li>
                             <router-link :to="{name:'FriendsList'}" class="site-nav-link" active-class="active">
                                <i class="fa fa-address-card-o" aria-hidden="true"></i>
                                <span>友链列表</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="site-nav-item">
                    <router-link :to="{name:'MsgManagement'}" class="site-nav-link" active-class="active">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        <span>留言管理</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            listStatusF:false,
            listStatusT:false,
            listStatusS:false,
        };
    },

    components: {},

    methods: {
        openFriendList(){
            this.listStatusF = !this.listStatusF
        },
        openTimeList(){
            this.listStatusT = !this.listStatusT
        },
        openSkillList(){
            this.listStatusS = !this.listStatusS
        }
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .bar-box
        width 250px
        height 100%
        position fixed
        left 0
        top 0
        background-color #6a70ec
        margin-right 300px
        .side-logo
            width 100px
            height 100px
            margin 0px auto
            img 
                width 100%
                height 100%
                display block
        .site-nav-box
            margin-top 20px
            .site-nav-item
                margin 5px 0px
                padding 0px 10px
                .active
                    background-color #c2c7d0
                    border-radius 6px
                .site-nav-link
                    color #ffffff
                    font-size 16px
                    padding 10px 40px
                    display flex
                    align-items center
                    &:hover
                        background-color #c2c7d0
                        border-radius 6px
                    i 
                        font-size 25px
                        margin-right 5px
                .friends-children
                    margin-left 25px 
                    li
                        margin-top 5px
                .list-status
                    display none
                .tran
                    transform rotate(-180deg)
                    transition all .4s
</style>