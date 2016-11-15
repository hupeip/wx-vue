<style media="screen" lang="less" scoped>
    .m-duty{margin-top: 0.1rem;line-height: 0.25rem;}
    .title{position: relative;}
    i{background: url('../../../asset/icon/down.png') no-repeat;background-size: cover;display: block;width: 0.18rem;height: 0.18rem;position: absolute;top: 0.03rem;right: 0;margin-right: 0;}
    .up{background: url('../../../asset/icon/up.png') no-repeat;background-size: cover;}
    .companyinfo{padding-top: 0.1rem; }
    .info{margin-top: 0.1rem;}
</style>
<template>
  <div class="m-duty" :class="f-mgbottom45 : type != 3">
      <div class="f-padding13 f-bg-color-withe">
          <div class="title f-bold " @click="index=1" v-if="index==0">岗位职责<i class="down"></i></div>
          <div class="title f-bold" @click="index=0" v-if="index==1">岗位职责<i class="up"></i></div>
          <div class="companyinfo" v-if="index==1">{{{detail}}}</div>
      </div>
      <div class="info f-bg-color-withe f-padding13">
          <div><span class="f-color_gray">待面人数：</span><span class="f-color_green">{{count}}人</span></div>
          <div><span class="f-color_gray">截止时间：</span><span>{{topinfo.end_time}}</span></div>
      </div>
  </div>
</template>

<script>
export default {
  props:['detail','count','topinfo','type'],
  data: function () {
    return { index:0 }
  }
}
</script>
