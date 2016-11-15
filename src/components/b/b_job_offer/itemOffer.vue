<style media="screen" lang="less" scoped>
    li{margin-bottom:0.12rem;}
    .m-hd{font-weight: bold;padding: 0 0 0.1rem 0;overflow: hidden;border-bottom: 1px solid #ddd;}
    .m-bd{margin-top: 0.1rem;line-height: 0.26rem;}
    .quali{margin-right: 15%;}
</style>
<template>
    <li @click="detail" class="f-padding13 f-bg-color-withe">
       <div class="m-hd ">
          <div class="name fl">姓名：<span>{{item.name}}</span></div>
          <div class="job fr">应聘岗位：<span>{{item.job_name}}</span></div>
       </div>
       <div class="m-bd">
          <div class="f-color_gray">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>{{item.sex}}</span></div>
          <div class="f-color_gray">工作经历：<span>{{item.work_year}}年</span></div>
          <div class="quali f-color_gray">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：<span>{{item.degree}}</span></div>
          <div class="clear"></div>
          <div class="f-color_gray">毕业院校：<span>{{item.school}}</span></div>
          <div class="f-color_gray">面试时间：<span>{{item.interview_time}}</span></div>
       </div>
    </li>
</template>

<script>
import * as cookies from '../../../utils/authService.js'
export default {
    props:['item'],
    methods: {
        detail() {
            var str = JSON.stringify(this.item);
            cookies.setCookie('info', str);
            router.go('/b_offerdetail');
        }
    }
}
</script>
