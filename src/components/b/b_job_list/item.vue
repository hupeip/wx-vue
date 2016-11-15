<style media="screen" lang="less" scoped>
  li:not(:first-child){ border-top: 0.01rem solid #ddd;}
</style>

<template>
    <li @click="detail(item.job_id,item.job_name)">
      <div class="f-bold f-color_org" v-if="type==2">{{item.company_name}}</div>
      <div class="s-fc-black f-oh">
          <div class="fl icon"><i class="station"></i></div>
          <div class="right">{{item.job_name}}</div>
      </div>
       <div class="f-color_gray" v-if="type==1">待面人数：<span class="f-color_org">{{item.count}}人</span></div>
       <div class="f-color_gray" v-if="type==2">待面人数：<span class="f-color_org">{{item.toFace}}人</span></div>
       <div class="f-color_gray" v-if="type==1">截止时间：<span>{{item.end_time}}</span></div>
       <div class="f-color_gray" v-if="type==2">面试时间：<span>{{item.interview_time}}</span></div>
    </li>
</template>

<script>
export default {
    props:['item', "type"],
    methods: {
        detail: function(job_id, job_name) {
            let name = encodeURIComponent(job_name);

            if (this.type == 1) {
                router.go({name: 'b_detail',query: {'job_id': job_id,'job_name': name}})
            }
            if (this.type == 2) {
                router.go({name: 'adviserDetail',query: {'job_id': job_id}})
            }
            if (this.type == 3) {}
        }
    }
}
</script>
