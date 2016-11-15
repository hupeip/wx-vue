<style media="screen" lang="less" scoped>
    .border{border: 0.01rem solid #ddd;border-radius: 0.2rem;padding: 0.01rem 0.12rem;display: inline-block;}
</style>

<template>
  <div class="f-bg-color-withe f-padding13">
    <div class="s-fc-black f-oh">
        <div class="fl icon"><i class="station"></i></div>
        <div class="right">{{topinfo.job_name}}</div>
    </div>
    <div class="s-fc-black f-oh">
        <div class="fl icon"><i class="money"></i>
        </div><div class="right">{{topinfo.salary}}</div>
    </div>
    <div>
        <div class="f-color_gray fl">福利待遇：</div>
        <div class="f-mgleft72">
            <span class="frist">{{welfare_fir}}</span>
            <span @click="show=1" v-if="welfare_fir.length >= 30 && show==0" class="f-color_green border">查看更多</span>
            <span v-show="show==1">{{welfare_sec}}</span><span @click="show = 0" v-show="show==1" class="f-color_green border">【收起】</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      topinfo: { type: Object, default: function(){return {job_name:'',salary:'',interview_time:''} }},
      count: { type: Number, default: 0 },
      welfare_fir: { type: String, default: '' },
      welfare_sec: { type: String, default: '' }
  },
  data: function () {
    return {show:0}
  }
}
</script>
