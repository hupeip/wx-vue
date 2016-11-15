<style media="screen" lang="less" scoped>
  .g-md{line-height: 0.2rem;}
  .job{padding: 0.1rem;background-color: #fff;}
  .job_name{font-weight:bold;}
  .toface{padding: 0.1rem;font-weight:bold;}
  .freshen{position: fixed;right: 0.1rem;bottom: 0.1rem;;width: 0.6rem;height: 0.6rem;background-color: #3CB3EC;color: #fff;text-align:center;
  line-height: 0.6rem;border-radius: 0.5rem;}
</style>
<template>
  <div class="g-md">
    <loading v-if="loading"></loading>
    <div class="job">
      <div class="f-bold f-color_org">{{content.company_name}}</div>
      <div class="f-bold f-color_org">{{content.job_name}}</div>
      <div class="f-color_gray">待面人数：<span class="f-color_org">{{result.toFace}}人</span></div>
      <div class="f-color_gray">面试时间：<span>{{content.interview_time}}</span></div>
    </div>
    <div class="toface">待面试人数: ({{result.toFace}})</div>
    <div class="resumelist">
      <ul class="">
        <template v-for="item in result.faceNow_content">
          <item :item="item" :type="type" :face="face1"></item>
        </template>
      </ul>
      <ul class="">
        <template v-for="item in result.loading_content">
          <item :item="item" :type="type" :face="face3"></item>
        </template>
      </ul>
      <ul class="">
        <template v-for="item in result.toFace_content">
          <item :item="item" :type="type" :face="face2"></item>
        </template>
      </ul>
    </div>
    <div class="freshen" @click="getJobContent">刷新</div>
  </div>
</template>

<script>
import api from './../../api/index.js'
import item from './../b/b_job_detail/item.vue'
import loading from '../common/loading.vue'
import {showLoad,hideLoad} from '../../vuex/actions.js'
export default {
    data(){
        return {
            type:2,
            face1: 0,
            face2: 1,
            face3: 2,
            result: {},
            content:{}
        }
    },
    vuex: {
        actions: {showLoad,hideLoad},
        getters: {loading: ({loading}) =>loading.state}
    },
    route: {
        data(transition) {
            document.title = '岗位详情';
            this.getJobContent({'job_id': transition.to.query.job_id});
        }
    },
    methods: {
        getJobContent(info) {
            this.showLoad()
            api.getJobContent(info).then(response =>{
                if (response.data.code == 0) {
                    this.result = response.data.result;
                    this.content = this.result.content;
                }
                this.hideLoad();
            },
            response =>{
                console.log("error");
                this.hideLoad()
            })
        }
    },
    components: {item,loading}
}
</script>
