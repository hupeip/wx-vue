<style media="screen" lang="less" scoped>
  // .g-md{padding: 0.1rem;margin-bottom: 0;}
  .title{padding: 0.05rem;font-weight: bold;font-size:0.15rem;}
  .common{background-color: #fff;width: 100%;padding: 0.1rem;margin-bottom: 0.05rem;}
  input,select{border: none;outline:medium;margin-left: 0.05rem;}
  label{display: inline;}
  .input_1,.select_1{width: 95%;}
  // .input_2{width: 75%;}
  // .select_1{width: 74%;}
  // .select_2{width: 84%;}
  select { appearance:none; background: url("../../../asset/icon/down.png") no-repeat scroll right center;background-size: 0.2rem;}
  form{margin-bottom:0.55rem;}
  // .sex{margin-left: 5%;}
  .man{margin-left: 0.05rem;;}
  .add{background-color: #fff;text-align: center;padding: 0.1rem;}
  textarea{border:0;width: 100%;margin-top: 0.05rem;padding: 0.05rem;}
  .text{padding: 0.05rem 0.1rem;}
  .save{width: 100%;background-color: #f8f8f8;margin-top: 0.2rem;}
  // .g-ft{width: 100%;background-color: #f8f8f8;position: fixed;bottom: 0.04rem;margin-left: -0.1rem;}
  // .btn-apply{width: 80%; padding: 0.12rem; background-color: #3CB3EC;box-shadow: 1px 1px 1px 2px #ddd;text-align: center;margin:0 auto;border-radius: 0.04rem;color: #fff;}
  .errors{background-color: #8c8c8d;color: #fff;opacity: 0.8;margin-bottom: 0.1rem;}
  .fa{color:#34BFE0;font-size: 0.18rem;margin-left: 0.05rem;vertical-align: sub;color: #25ba73;}
</style>
<template >
   <div class="g-md">
     <div class=""  v-show="flag==0">
       <validator name="validation">
         <form novalidate>
            <div class="errors f-padding13">
                <p :class="{'color_C8':color==1}">{{msg}}</p>
            </div>
              <div class="title">基本资料</div>
              <div class="common">
                  <div class="f-color_gray fl">*姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</div>
                  <div class="f-mgleft72 right">
                     <input type="text" v-model="talentInfo.name"  v-validate:username="{ required: true }"   class="input_1" name="name"  placeholder="请填写姓名" lazy >
                  </div>

              </div>
              <div class="common">
                  <div class="f-color_gray fl">*性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</div>
                  <div class="f-mgleft72">
                      <label><input v-model="talentInfo.sex" type="radio" name="sex" checked value="1" class="sex man">男</label>
                      <label><input type="radio" v-model="talentInfo.sex" name="sex" value="0" class="sex">女</label>
                  </div>

              </div>
              <div class="common">
                  <div class="f-color_gray fl">*电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</div>
                  <div class="f-mgleft72">
                      <input type="tel" v-model="talentInfo.phone" v-validate:phone="{ required: true }" maxLength="11" class="input_1" name="name" value="" placeholder="请填写电话" maxlength="11">
                  </div>

              </div>
              <div class="common">
                  <div class="f-color_gray fl">*邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</div>
                  <div class="f-mgleft72">
                    <input type="text" v-model="talentInfo.email" v-validate:email="{ required: true, minlength: 3, maxlength: 30, email:true }" class="input_1" name="name" value="" placeholder="请填写邮箱" lazy>
                  </div>
              </div>
              <div class="common">
                 <div class="f-color_gray fl">*工作年限：</div>
                 <div class="f-mgleft72">
                   <select name="work_year" v-model="talentInfo.work_year" class="select_1" v-validate:workyear="{ required: true }">
                          <option value="1" selected="selected">1年</option>
                          <option value="2">2年</option>
                          <option value="3">3年</option>
                          <option value="4">4年</option>
                          <option value="5">5年</option>
                          <option value="6">6年</option>
                          <option value="7">7年</option>
                          <option value="8">8年</option>
                          <option value="9">9年</option>
                          <option value="10">10年</option>
                          <option value="11">10年以上</option>
                   </select>
                 </div>

              </div>
              <div class="common">
                <div class="f-color_gray fl">*学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：</div>
                <div class="f-mgleft72">
                    <select name="degree" v-model="talentInfo.degree" class="select_1" v-validate:degree="{ required: true }">
                         <option value="2">中专</option>
                         <option value="3">大专</option>
                         <option value="4" selected="selected">本科</option>
                         <option value="5">硕士</option>
                    </select>
                </div>

              </div>
              <div class="common">
                <div class="f-color_gray fl">*毕业院校：</div>
                <div class="f-mgleft72">
                    <input v-model="talentInfo.school" v-validate:school="{ required: true }" type="text"  class="input_1" name="name" value="" placeholder="请填写毕业院校" lazy ></div>
                </div>
              <div class="title">工作经历</div>
              <div class="">
                 <ul>
                   <template v-for="item in array">
                     <item :item="item" @click="edit($index)"></item>
                   </template>
                 </ul>
              </div>
              <div class="add" @click="add">添加一段工作经历<i class="fa fa-plus" aria-hidden="true"></i></div>
              <div class="g-ft">
                  <div class="btn-apply" @click.prevent="apply($validation,1)" v-if="!jobId">保存</div>
                  <div class="btn-apply" @click.prevent="apply($validation,2)" v-if="jobId">保存并投递</div>
              </div>
          </form>
       </validator>
     </div>

     <div class="" v-show="flag==1">
       <validator name="validation1" >
         <form novalidate>
           <div class="errors f-padding13">
               <p :class="{'color_C8':color==2}">{{msg1}}</p>
           </div>
           <div class="common">*起始时间：<datepicker :start.sync="objData.startDate" :value="objData.startDate" format="YYYY-M-D" :readonly="true"></datepicker></div>
           <div class="common">*截止时间：<datepicker :end.sync="objData.endDate" :value="objData.endDate" format="YYYY-M-D" :readonly="true"></datepicker></div>
           <div class="common">*岗位名称：<input v-model="objData.job_name" v-validate:jobname="{ required: true }" type="text"  class="input_2" name="jobName"  placeholder="请填写岗位名称" lazy ></div>
           <div class="common">*公司名称：<input v-model="objData.company" v-validate:company="{ required: true }" type="text" class="input_2" name="company"  placeholder="请填写公司名称" lazy ></div>
           <div class="">
             <div class="text">*工作内容</div>
              <textarea  v-model="objData.content" v-validate:content="{ required: true }" name="content" rows="4" cols="" placeholder="请填写您的主要工作内容" lazy ></textarea>
           </div>
           <div class="">
             <div class="text">*工作业绩</div>
              <textarea v-model="objData.track" v-validate:track="{ required: true }" name="track" rows="4" cols="" placeholder="请填写您的主要业绩" lazy ></textarea>
           </div>
           <div class="save">
               <div class="btn-apply" @click.prevent="save($validation1)">保存此段工作经历</div>
           </div>
         </form>
       </validator>
     </div>
     <popup v-if="show==1" :title="title" :text="text" :type="type1" :jobid="jobId"></popup>
     <pop v-if="show==2" :text="text1" :confirm="confirm" :cancel="cancel" :type="type"></pop>
   </div>
</template>

<script>
import api from './../../../api/index.js'
import datepicker from '../../common/datepicker.vue'
import * as cookies from '../../../utils/authService.js'
import {sharewx} from '../../../utils/wxshare.js'
import popup from '../../common/pop-up.vue'
import pop from '../../b/resume/pop.vue'
import {bomb,limit} from '../../../vuex/actions.js'
import item from '../../common/experience.vue'
import { getPersonOpenid } from '../../../utils/common.js'
export default {
  data: function () {
      return {
        start:'',
        end:'',
        msg:'* 一份完整的简历，可以增加您的面试成功率哦',
        msg1:'* 完善您的工作经历',
        flag:0,
        index:-1,
        color:0,
        jobId:'',
        openid:'',
        title : "",
        text : "",
        text1 : "",
        confirm : "确定",
        cancel : "取消",
        type : 3,
        type1 : 0,
        jobSendLimit:'',
        talentInfo:{
          degree: "",
          email: "",
          name: "",
          phone: "",
          school: "",
          work_year: "",
          sex:''
        },
        array:Array(),
        objData:{
          startDate:"",
          endDate:'',
          job_name:'',
          company:'',
          content:'',
          track:''
        },
      }
    },
    vuex:{
      actions:{
        bomb,limit
      },
      getters:{
        show:({addWxTalent})=>addWxTalent.show,
      }
    },
    route:{
      data (transition) {
          this.jobId= transition.to.query.jobId;
          // if (!cookies.getCookie('openid')) {
          //     	window.location.href='http://www.elitez.cn/get_openid/';
          // }
          // this.openid=cookies.getCookie('openid');
          this.openid = getPersonOpenid('http://www.elitez.cn/get_openid/');
          api.checkWxTalent({'openId':this.openid,'jobId':this.jobId}).then(response=>{
      			if (response.data.code==13) {
      				  router.go('/presign');
      			}else{
                if (response.data.result.talentInfo) {
                    this.talentInfo = response.data.result.talentInfo;
                }
                this.jobSendLimit = response.data.result.jobSendLimit;
                this.array = response.data.result.experience;
            }
      		},response=>{
      			console.log("error");
      		})
      }
    },
    watch: {
        end () {
            this.objData.endDate=this.end;
        },
        start () {
            this.objData.startDate=this.start;
        }
    },
   computed: {},
  validators: {
    email: function (val) {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val)
    }
  },
  ready:function(){
    $('title').text('我的简历');
    let url = encodeURIComponent(location.href.split('#')[0]);
    var share = {
        "title":$('title').text(),
        "desc":'招聘大师今日速聘专场招聘会等你来',
        "pic":'http://www.elitez.cn/wx/src/asset/img/logo.jpg',
        "url":window.location.href
      }
    sharewx({url:url},share);
  },
  methods: {
    edit(index){
      this.flag = 1;
      this.index  = index;
      this.objData=this.array[index];
    },
    // 添加工作经历
    add(){
      $('title').text('工作经历');
      this.index=-1;
      this.flag = 1;
      this.objData.startDate = "";
      this.objData.endDate = "";
      this.objData.job_name = "";
      this.objData.company = "";
      this.objData.content = "";
      this.objData.track = "";
    },
    // 保存工作经历
    save(validate){
      if(!this.objData.startDate){
        this.msg1="*开始时间不能为空";
        this.color=2;
        return;
      }
      if(!this.objData.endDate){
        this.msg1="*截止时间不能为空";
        this.color=2;
        return;
      }
      var satrt_time = new Date(Date.parse(this.objData.startDate.replace(/-/g, "/")));
      var end_time = new Date(Date.parse(this.objData.endDate.replace(/-/g, "/")));
      if (end_time<=satrt_time) {
        this.msg1="*截止时间不能小于或等于开始时间";
        this.color=2;
        return;
      }
      if(validate.jobname.required){
        this.msg1="*岗位名称不能为空";
        this.color=2;
        return;
      }
      if(validate.company.required){
        this.msg1="*公司名称不能为空";
        this.color=2;
        return;
      }
      if(validate.content.required){
        this.msg1="*工作内容不能为空";
        this.color=2;
        return;
      }
      if(validate.track.required){
        this.msg1="*工作业绩不能为空";
        this.color = 2;
        return;
      }
      var obj = {
        startDate:"",
        endDate:'',
        job_name:'',
        company:'',
        content:'',
        track:''
      };
      obj = this.objData;
      // Object.assign(obj,this.objData);
      if (this.index==-1) {
        this.array.push(obj);
      }else{
        this.array[this.index] = obj;
      }

      this.flag = 0;
      console.log(this.array);
      // console.log(this.array[1].startDate);

    },
     apply:function(validate,type){
      if(validate.username.required){
        this.msg="*用户姓名不能为空";
        this.color=1;
        return;
      }
      if(validate.phone.required){
        this.msg="*电话号码不能为空";
        this.color=1;
        return;
      }
      if(validate.email.required){
        this.msg="*邮箱不能为空";
        this.color=1;
        return;
      }
      if(validate.email.email){
        this.msg="*输入正确的邮箱";
        this.color=1;
        return;
      }
      if(validate.workyear.required){
      this.msg="*工作年限不能为空";
      this.color=1;
      return;
      }
      if(validate.degree.required){
      this.msg="*学历不能为空";
      this.color=1;
      return;
      }
      if(validate.school.required){
      this.msg="*毕业院校不能为空";
      this.color=1;
      return;
      }
      if (this.array.length <= 0) {
        this.msg="*工作经历不能为空";
        this.color=1;
        return;
      }
      let data={
        'talentInfo':this.talentInfo,
        'openId':this.openid,
        'experience':this.array
      }
      let data1={
        'talentInfo':this.talentInfo,
        'jobId':this.jobId,
        'openId':this.openid,
        'experience':this.array
      }
      if (type==2) {
        data = data1;
      }
      if (this.talentInfo.degree < this.jobSendLimit.degree_limit) {
        this.text1 = "您的学历信息与岗位要求不符您确定继续投递吗？"
        this.bomb(data);
        return;
      }
      if (this.talentInfo.work_year < this.jobSendLimit.work_year_limit) {
        this.text1 = "您的工作年限与岗位要求不符您确定继续投递吗？"
        this.bomb(data);
        return;
      }
      api.addWxTalent(data).then(response=>{
        if (response.data.code==13) {
           router.go('/presign');
        }
        if (type==1) {
          // 保存
          console.log(data);
          if(response.data.code == 0){
            this.title="";
            this.text='保存成功！！';
            this.msg="* 一份完整的简历，可以增加您的面试成功率哦";
            this.color=0;
            this.limit();
          }
        }
        if (type==2){
          // 保存并投递
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
            if(response.data.code == 0){
              this.title="";
              this.text='投递成功！！';
              this.msg="* 一份完整的简历，可以增加您的面试成功率哦";
              this.color=0;
              this.type1 = 2;
              this.limit();
            }
        }

  		},response=>{
  			alert('网络错误！！')
  		})
    },
  },
  components: {popup,pop,item,datepicker}
}
</script>
