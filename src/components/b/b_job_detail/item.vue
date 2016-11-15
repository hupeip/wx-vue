<style media="screen" lang="less" scoped>
    li{margin-bottom:0.12rem;padding: 0.1rem;background-color: #fff;}
    .m-hd{font-weight: bold;padding: 0 0 0.1rem 0;overflow: hidden;border-bottom: 1px solid #ddd;}
    .m-bd{margin-top: 0.1rem;}
    .quali{margin-right: 15%;}
    .m-ft{width: 100%;overflow: hidden;margin-top: 0.1rem;}
    .m-ft div{width: 25%;padding: 0.06rem ;text-align:center;}
    .m-ft div:not(:first-child){border-left: 1px solid #f1f1f1;}
</style>
<template>
    <li>
       <div class="m-hd">
          <div class="name fl">姓名：<span>{{item.name}}</span></div>
          <div class="job fr" v-if="type==2 && face==0">正在面试</div>
          <div class="job fr" v-if="type==2 && face==1">等待面试</div>
          <div class="job fr" v-if="type==2 && face==2">叫号中...</div>
       </div>
       <div class="m-bd">
          <div class="f-color_gray" v-if="type==2">编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>{{item.sign_id}}</span></div>
          <div class="f-color_gray">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>{{item.sex}}</span></div>
          <div class="f-color_gray">工作经历：<span>{{item.work_year}}年</span></div>
          <div class="f-color_gray">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：<span>{{item.degree}}</span></div>
          <div class="f-color_gray">毕业院校：<span>{{item.school}}</span></div>
          <div class="f-color_gray" v-if="type!=2">面试时间：<span>{{item.update_time}}</span></div>
       </div>
    </li>
</template>

<script>
export default {
  props:['item','topinfo','type','face'],
}
</script>
