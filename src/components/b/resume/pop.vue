<style media="screen" lang="less" scoped>
   .pop{ position: fixed; left:0; top:0; bottom:0; background-color:rgba(25, 24, 24, 0.6);height:100%; width: 100%; z-index:99999;}
   .connent{margin: 60% 10%;}
   .modal{display: block;}
   .modal-footer{padding: 0;}
   .fade{opacity: 1;}
   .title,.text,{color: #333;margin-bottom: 0.1rem;}
   .title{text-align: center;font-size: 0.14rem;}
   .text{line-height: 0.2rem;text-align: center;}
   .footer a{display: inline-block; width: 48%;text-align: center;padding: 0.1rem;}
   .sure{border-right: 1px solid #ddd;color:#3cc51f;font-size: 0.12rem;}
   .stop{font-size: 0.12rem;}
//    .confirm{padding: 0.05rem;background-color: #827A7A;width: 65%;text-align: center;border-radius: 0.02rem;margin: 0.05rem auto;}

</style>
<template>
<div class="modal pop fade" tabindex="-1">
  <div class="modal-dialog connent" role="document">
    <div class="modal-content">
      <div class="modal-body">
          <!-- <div class="title">{{title}}</div> -->
          <div class="text">{{text}}</div>
      </div>
      <div class="modal-footer">
        <div class="footer">
           <a href="#" class="btn_dialog sure" @click.prevent="sure()">{{confirm}}</a>
           <a href="#" class="btn_dialog stop" @click.prevent="stop()">{{cancel}}</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import api from './../../../api/index.js'
import {alertOK} from '../../../vuex/actions.js'
import {bomb} from '../../../vuex/actions.js'
import {updateInterStatus,addWxTalent} from '../../../vuex/actions.js'
export default {
  props:['text','confirm','cancel','type'],
  data: function () {
    return {
    }
  },
  vuex:{
    actions:{
      alertOK,updateInterStatus,bomb,addWxTalent
    },
    getters:{
      info:({resumes})=>resumes.info,
      face:({resumes})=>resumes.face,
      data:({addWxTalent})=>addWxTalent.info,
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    sure:function(){
      this.alertOK();
      if (this.type==0) {
        api.updateInterStatus(this.info).then(response=>{
          if (response.data.code==0) {
            this.bomb({'job_id':this.info.job_id,'type':3});
          }
          if (response.data.code==2) {
            this.limit();
          }

        },response=>{
        	console.log("error");
        })
      }
      if (this.type==1) {
        router.go({name:'b_resume',query: { 'job_id':this.info.job_id}});
        location.reload();
      }
      if (this.type==2) {
        this.updateInterStatus(this.info,{'type':2});
      }
      if (this.type==3) {
        this.addWxTalent(this.data);
      }
      if (this.type==4) {
        router.go({name:'apply',query: { 'jobId':this.data.jobId}})
      }
    },
    stop:function(){
      this.alertOK();
      if (this.type==1) {
        router.go({name:'b_detail',query: { 'job_id':this.info.job_id}});
        location.reload();
        // this.updateInterStatus(this.info);
      }
    }
  },
  components: {}
}
</script>
