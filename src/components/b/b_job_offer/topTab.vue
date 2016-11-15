<style media="screen" lang="less" scoped>
  .toptab{position: fixed;top: 0;width: 100%;background-color: #fff;overflow: hidden;border-bottom: 0.1rem solid #f0eff5;}
  .toptab a{width: 33.3%;padding: 0.12rem 0;text-align: center;color: #919191;}
  .toptab .action{color: #25ba73;}
  .toptab a:not(:first-child){border-left: 0.01rem solid #e7e5e2;}
</style>

<template>
    <div class="toptab">
       <a v-link="{ path: '/b_jobs/offer/agree' }" class="fl f-bold" @click="action=0" :class="{action:action==0}">通过</a>
       <a v-link="{ path: '/b_jobs/offer/fire' }"class="fl f-bold" @click="action=1" :class="{action:action==1}">不通过</a>
       <a v-link="{ path: '/b_jobs/offer/tbd' }" class="fl f-bold" @click="action=2" :class="{action:action==2}">待定</a>
    </div>
</template>

<script>
export default {
  props:["action"]
}
</script>
