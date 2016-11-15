<style media="screen" lang="less" scoped>
  .detail{line-height: 0.25rem;margin-bottom: 1.08rem;}
  .title{padding: 0.05rem 0.13rem;font-weight: bold;font-size:0.15rem;background-color: #f8f8f8;}
  .tips{color:#8A8585;padding:1% 5%;background-color: #f0eff5;line-height: 0.18rem;}
  .tips div{font-size: 0.12rem;}
  .exp{margin-bottom:0.65rem;}
  .footer{position: fixed;bottom: 0;left: 0}
  .option div{width: 33.3%;text-align: center;padding: 0.1rem;border-top:1px solid #E2DCDC;background-color: #fff;}
  .option div:not(:first-child){border-left: 1px solid #E2DCDC;}
  .action{color:#25ba73;}
</style>
<template>
   <div class="detail ">
     <div class="person f-bg-color-withe f-padding13">
       <div class="f-color_gray">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>{{face.sex}}</span></div>
       <div class="f-color_gray">工作经历：<span>{{face.work_year}}年</span></div>
       <div class="f-color_gray">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：<span>{{face.degree}}</span></div>
       <div class="f-color_gray">毕业院校：<span>{{face.school}}</span></div>
     </div>
      <div class="title">工作经历</div>
      <div class="exp">
         <ul>
           <template v-for="item in jobexp"></span>
             <item :item="item"></item>
           </template>
         </ul>
      </div>
      <div class="footer">
        <div class="tips">
          <div class="">温馨提示：</div>
          <div class="">您的操作不会立马通知给候选人，此岗位所有面试通过后2小时会告知候选人面试结果。</div>
        </div>
        <div class="option">
           <div class="fl" :class="{action:action==2}" @click="agree(face.face_id,face.job_id)">通过</div>
           <div class="fl" :class="{action:action==3}" @click="fire(face.face_id,face.job_id)">不通过</div>
           <div class="fl" :class="{action:action==4}" @click="tbd(face.face_id,face.job_id)">待定</div>
        </div>
      </div>
   </div>
</template>

<script>
import api from './../../../api/index.js'
import {bomb,limit} from '../../../vuex/actions.js'
import item from '../../common/experience.vue'
export default {
  props:['face','id','jobexp','text','code'],
  data: function () {
    return {
      action:0,
    }
  },
  vuex:{
    actions:{
      bomb,limit
    }
  },
  route:{
      data(transition){
      }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    agree(face_id,job_id){
      this.action = 2;
      this.bomb({'face_id':face_id,'status':2,'job_id':job_id,'type':1});
      this.text = '您确认此人通过面试吗？'
    },
    fire(face_id,job_id){
      this.action=3;
      this.bomb({'face_id':face_id,'status':3,'job_id':job_id,'type':1});
      this.text = '您确认将此人淘汰吗？'
    },
    tbd(face_id,job_id){
      this.action=4;
      this.bomb({'face_id':face_id,'status':4,'job_id':job_id,'type':1});
      this.text = '您确认要将此人设置为待定状态吗？'
     }
  },
  components: {item}
}
</script>
