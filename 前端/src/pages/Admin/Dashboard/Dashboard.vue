<!-- 后台仪表板-->
<template>
    <div>   
        <div class="content-box">
            <div class="ip">
                
            </div>
            <div ref='mapbox' class="mapbox"></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import { mapState } from 'vuex'
import axios from 'axios'
const option = {
    title:{
        text:"全国主要城市浏览情况",
        top:20,
        left:20,
        textStyle:{
            color:'#fff'
        }
    },
    series:[{
        name:"浏览量(PV)",
        type:'map',
        map:'china',
        label:{
            show:false,
            color:'#000',
            fontSize:10,
            areaColor:'#6a70ec',
        },
        itemStyle:{
            areaColor:'#6a70ec',
            borderColor:'#333'
        },
        roam:true,
        zoom:1.2,
        emphasis:{
            label:{
                color:'#FFF5EE',
                fontSize:13
            },
            itemStyle:{
                areaColor:'#F4A460',
            }
        },
    }],
    data:[],
    visualMap:[{
        // type:'piecewise',
        show:true,
        min:0,
        max:9999,
        left: 20,
        bottom: 20,
        calculable: true,
        text:['高','低'],
        inRange:{
           color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
        },
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    }],
    tooltip:{
        trigger:'item'
    },
    toolbox:{
        show:true,
        orient:'vertical',
        right:15,
        top:'center',
        iconStyle: {
            borderColor: '#fff'
        },
        feature:{
            dataView:{readOnly:false},
            restore:{},
            saveAsImage:{}
        },
    }
};
export default {
    data () {
        return {
        };
    },

    components: {
        
    },
    computed:{
        ...mapState(['baidutjList'])
    },
    mounted(){
        this.mychart = echarts.init(this.$refs.mapbox);
        this.mychart.setOption(option);
        window.addEventListener('resize',()=>{
            this.mychart.resize()
        })
        this.$store.dispatch('reqBaiDutj')
    },
    watch:{
        baidutjList(){
            this.$nextTick(()=>{
                this.getData();
            })
        }
    },
    methods: {
        getData(){
                let res = this.baidutjList.data[0].result.items
                let name = res[0].map(item=>({name:item[0].name}))
                let value = res[1].map(item=>({value:item[0]}))//各省的  pv 量
                let list = []
                for(let i = 0;i<name.length;i++){
                    list.push({name:name[i].name,value:value[i].value})
                }
                option.series[0].data = list
                this.mychart.setOption(option)
        },
    }
}

</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .content-box
        margin-left 250px
        margin-top 60px
        padding 20px
        background-color #000
        .mapbox
            width 1000px
            height 600px
            background-color #000
            margin 0px auto
        .ip
            height 237px
</style>