<style media="screen" lang="less" scoped>
  .g-hd{font-weight: bold;padding: 0.1rem;}
</style>

<template>
   <div>
       <loading v-if="loading"></loading>
       <div>
         <div v-if="hide==0">
              <div class="g-hd" v-if="result.isChecked==1 && count!=0">
               您前面有<span class="color_FC">{{count}}</span>人等待面试，请您耐心等待，等待人数随时可能更改，请注意您的微信公众号通知！</div>
         </div>

          <companyinfo :companyinfo="result.jobInfo" :hide="hide" :welfare="welfare" :welfare2="welfare2" :ischecked="ischecked" :count="count"></companyinfo>
          <duty :duty="detail" :companyinfo="result.jobInfo"></duty>

          <infobottom v-if="share==1"></infobottom>

          <div class="g-ft" v-if="hide==0">
         		  <div class=" btn-apply" v-if="result.isChecked==0 || result.isChecked==5" @click="apply">申请面试</div>
         	</div>
       </div>
       <popup v-show="show==1" :title="title" :text="text" :type='type1'></popup>
       <pop v-show="show==2" :title="title" :text="text" :confirm="confirm" :cancel="cancel" :type='type'></pop>
   </div>
</template>

<script>
import api from './../../../api/index.js'
import companyinfo from './companyinfo.vue'
import duty from './duty.vue'
import loading from '../../common/loading.vue'
import * as cookies from '../../../utils/authService.js'
import {sharewx} from '../../../utils/wxshare.js'
import popup from '../../common/pop-up.vue'
import infobottom from '../../common/infobottom.vue'
import {alertOK,limit,bomb,hideLoad,showLoad} from '../../../vuex/actions.js'
import pop from '../../b/resume/pop.vue'
import { getPersonOpenid } from '../../../utils/common.js'

export default {
  /*share变量是分享出去后的链接跟的参数，用来判断是从公众号打开的页面还是从分享打开的页面，
    如果是从分享打开的，就在页面中加入infobottom这个组件。
    hide变量是根据地址栏有没有activityid这个参数来赋值的，如果有activityid，就给hide赋值1，
    表示是从招聘日程进入岗位列表再进入岗位详情，这时就隐藏头部的提示信息和底部的申请按钮，将hide变量传给companyinfo组件*/
  data: function () {
    return {
      title:  '',
      text: '',
      openid: '',
      jobId:  '',
      job_name: '',
      result: '',
      welfare:  '',
      welfare2: '',
      detail: '',
      ischecked: -1,
      count: 0,
      confirm:  '现在就去',
      cancel: '等会再说',
      type: 4,
      type1:  0,
      share: 0,
      hide: 0
    }
  },
  vuex:{
    actions:{
      limit,hideLoad,showLoad,bomb,alertOK
    },
    getters:{
      show:({addWxTalent})=>addWxTalent.show,
      loading:({loading})=>loading.state
    }
  },
  route:{
    data (transition) {
      this.alertOK();
      document.title = '岗位详情';

      this.jobId = transition.to.query.id;
      this.job_name = decodeURIComponent(transition.to.query.job_name);
      this.share = transition.to.query.share ? 1 : 0;
      /**/
      if (transition.to.query.activityid) {
          this.hide = 1;
          this.getJobInfo({ 'jobId': this.jobId });
      }else{
          // if (!cookies.getCookie('openid')) {
          //       window.location.href='http://www.elitez.cn/get_openid/';
          // }
          // this.openid=cookies.getCookie('openid');
          this.openid = getPersonOpenid('http://www.elitez.cn/get_openid/');
          //岗位详情
          this.detailJobList({ 'jobId': this.jobId, 'openId': this.openid });
          //当前排队人数
          this.showInterviewInfo({'jobId': this.jobId, 'openId': this.openid });
      }

    }
  },
  ready: function () {
    let url = encodeURIComponent(location.href.split('#')[0]);
    let href = window.location.href + '&share=1';
    var share = {
        "title":'8.25日正在招聘' + this.job_name,
        "desc":'今日速聘24小时急速入职岗位，现在正在进行中！',
        "pic":'http://www.elitez.cn/wx/src/asset/img/logo.jpg',
        "url":href
      }
    sharewx({url:url},share);
  },
  methods: {
    apply(){
      //投递简历
      if (this.result.jobLimit==1) {
        this.title="提示";
        this.text='您的学历信息或工作年限与岗位要求不符您确定继续投递吗？';
        this.confirm = '确定';
        this.cancel = '取消';
        this.type = 3;
        this.bomb({ 'openId': this.openid, 'jobId': this.jobId });
        return;
      }
      api.addInterview({'openId':this.openid,'jobId':this.jobId}).then(response=>{
        if (response.data.code==13) {
           router.go('/presign');
        }
        if (response.data.code==1) {
          this.title="提示";
          this.text='该岗位已经投递，请勿重复投递！';
          this.limit();
          return;
        }
        if (response.data.code==101) {
          this.title="";
          this.text='对不起，当前岗位已经达到投递上限请查看其他相关岗位吧！';
          this.limit();
          return;
        }
        if (response.data.code==100) {
          this.title="抱歉";
          this.text='您已经有两个岗位等待面试,请稍后再投递！';
          this.limit();
          return;
        }
        if (response.data.code==102) {
          this.title="提示";
          this.text='您的简历未完善,请先完善吧！';
          this.bomb({'openId':this.openid,'jobId':this.jobId});
          return;
         }
         if (response.data.code==0) {
           this.title="";
           this.text='投递成功！！';
           this.type1 = 1;
           this.limit();
         }
      },response=>{
        console.log("error");
      })
    },
    detailJobList(info){
        this.showLoad();
        api.detailJobList({'jobId':this.jobId,'openId':this.openid}).then(response=>{
            this.result = response.data.result;
            this.welfare = this.result.jobInfo.benefit.substring(0,30);
            this.welfare2 = this.result.jobInfo.benefit.substring(30,this.result.jobInfo.benefit.length);
            this.detail = this.result.jobInfo.job_info.replace(/\<\/br\>/g,'<br>');
            this.ischecked =parseInt(this.result.isChecked);
            this.hideLoad();
        },response=>{
          console.log("error");
          this.hideLoad();
        })
    },
    showInterviewInfo(info){
        api.showInterviewInfo(info).then(response=>{
            this.count = parseInt(response.data.result.count);
        },response=>{
            console.log("error");
        })
    },
    getJobInfo(info){
        this.showLoad();
        api.getJobInfo({'jobId':this.jobId}).then(response=>{
            this.result = response.data.result;
            this.welfare = this.result.jobInfo.benefit.substring(0,30);
            this.welfare2 = this.result.jobInfo.benefit.substring(30,this.result.jobInfo.benefit.length);
            this.detail = this.result.jobInfo.job_info.replace(/\<\/br\>/g,'<br>');
            this.hideLoad();
        },response=>{
          console.log("error");
          this.hideLoad();
        })
    },

  },
  components: {companyinfo,duty,infobottom,loading,popup,pop}
}
</script>

<style lang="css">
</style>
