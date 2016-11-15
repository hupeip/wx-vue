<style media="screen" lang="less" scoped>
    li{background-color: #fff;line-height: 0.25rem;}
    .line{padding-bottom: 0.1rem;border-bottom: 0.01rem solid #e7e5e2;}
    .content{margin-left: 0.72rem;}
</style>
<template>
    <li class="f-padding13">
        <div class="line">
            <div><span class="f-color_gray">起止时间：</span>{{item.startDate}}  至  {{item.endDate}}</div>
            <div><span class="f-color_gray">岗位名称：</span>{{item.job_name}}</div>
            <div><span class="f-color_gray">公司名称：</span>{{item.company}}</div>
            <div>
              <div class="fl"><span class="f-color_gray">工作内容：</span></div>
              <div class="content">{{item.content}}</div>
            </div>
            <div>
              <div class="fl"><span class="f-color_gray">工作业绩：</span></div>
              <div class="content">{{item.track}}</div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
  props:['item'],
}
</script>
