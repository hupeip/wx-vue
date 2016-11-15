<style media="screen" lang="less" scoped>
    .top{position: relative;border-bottom:0.01rem solid #ddd;}
    .status{position: absolute;right: 0.13rem;}
    .detail{line-height: 0.25rem;}
    .title{padding: 0.05rem 0.13rem;;font-weight: bold;background-color: #f8f8f8;}
    .footer{position: fixed;bottom:0;left:0;width: 100%;text-align: center;background-color: #f8f8f8;}
    .footer .finish,.footer .option div{padding:0.1rem;background-color: #fff;}
    .option div{width: 50%;}
    .agree{border-right:1px solid #E2DCDC;}
    .action{color:#25ba73;}
</style>

<template>
  <div class="g-md">
      <div class="top f-bg-color-withe f-bold f-padding13">
         姓名 : {{info.name}}
         <span class="status f-bold">面试完成</span>
      </div>
      <div class="detail f-bg-color-withe">
        <div class="person f-padding13">
          <div class="f-color_gray">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>{{info.sex}}</span></div>
          <div class="f-color_gray">工作经历：<span>{{info.work_year}}年</span></div>
          <div class="f-color_gray">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：<span>{{info.degree}}</span></div>
          <div class="f-color_gray">毕业院校：<span>{{info.school}}</span></div>
          <div class="f-color_gray">面试时间：<span>{{info.interview_time}}</span></div>
        </div>
        <div class="title">工作经历</div>
        <div class="">
           <ul>
             <template v-for="item in info.job_exp">
               <item :item="item"></item>
             </template>
           </ul>
        </div>
      </div>
      <div class="footer">
         <div class="finish" v-if="info.status==2">此人已通过</div>
         <div class=" finish" v-if="info.status==3">此人已淘汰</div>
         <div class="option" v-if="info.status==4">
            <div class="fl agree" :class="{action:action==1}" @click="agree(info.face_id)">通过</div>
            <div class="fl" :class="{action:action==2}" @click="fire(info.face_id)">不通过</div>
         </div>
      </div>
      <pop v-if="this.pop==1" :text="text" :confirm="confirm" :cancel="cancel" :type="type"></pop>
  </div>
</template>

<script>
import * as cookies from '../../../utils/authService.js'
import {bomb} from '../../../vuex/actions.js'
import pop from './../resume/pop.vue'
import item from './../../common/experience.vue'
export default {
  data:function() {
      return {
          action:0,
          info: '',
          text: '',
          confirm: '确定',
          cancel: '取消',
          type: 2
      }
  },
  vuex: {
      actions: {bomb},
      getters: { pop: ({getFaceResultList}) =>getFaceResultList.pop }
  },
  route: {
      data(transition) {
          this.info = JSON.parse(cookies.getCookie('info'));
      }
  },
  methods: {
      agree(face_id) {
          this.text = "确认通过此人";
          this.action = 1;
          this.bomb({'face_id': face_id,'status': 2})
      },
      fire(face_id) {
          this.text = "确认不通过此人",
          this.action = 2;
          this.bomb({'face_id': face_id,'status': 3})
      }
  },
  components: {pop,item}
}
</script>
