<style media="screen" lang="less" scoped>
    // .g-md{padding: 5% 2%;}
    .top,.top span{font-size: 0.15rem;font-weight: bold;}
    .top{position: relative;border-bottom:0.01rem solid #ddd;}
    .status{position: absolute;right: 0.13rem;}
</style>
<template>
    <div class="g-md">
      	<loading v-if="loading"></loading>
        <div class="top f-padding13 f-bg-color-withe">
           姓名： <span>{{face.name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编号：{{face.sign_id}}
           <span class="status" v-if="show==0">叫号中...</span>
           <span class="status" v-if="show==1">正在面试</span>
        </div>
        <preinter v-if="show==0" :face="face" :show.sync="show"></preinter>
        <nowinter v-if="show==1" :face="face" :id="job_id" :jobexp="job_exp" :text.sync="text" ></nowinter>
        <pop v-if="pop==1" :text.sync="text" :confirm.sync="confirm" :cancel.sync="cancel" :type="type"></pop>
        <pop v-if="pop==3" :text="text1" :confirm="confirm1" :cancel="cancel1" :type="type1"></pop>
        <pop1 v-if="pop==2" :text="text2" :title="title" ></pop1>
    </div>
</template>

<script>
import api from './../../../api/index.js'
import preinter from './preinter.vue'
import nowinter from './nowinter.vue'
import pop from './pop.vue'
import pop1 from './../../common/pop-up.vue'
import loading from '../../common/loading.vue'
import {showLoad,hideLoad} from '../../../vuex/actions.js'
export default {
  data: function () {
    return {
      show:0,
      index:0,
      text : '',
      confirm : '确定',
      cancel : '取消',
      type: 0,
      text1 : '您已面试完此人，继续面试下一个吗？',
      confirm1 : '是的，进入下一个',
      cancel1 : '休息一会',
      type1: 1,
      text2:"操作失败，请重试！",
      title:"提示",
      job_id:"",
      face:'',
      job_exp:[],
    }
  },
  vuex:{
    actions:{
      showLoad,hideLoad
    },
    getters:{
      pop:({resumes})=>resumes.pop,
    }
  },
  route:{
      data(transition){
        this.job_id=transition.to.query.job_id;
        this.showLoad();
        api.getOneFaceByJobId({job_id:this.job_id}).then(response=>{
           if (response.data.code == 0) {
            if (response.data.result.face.length<=0) {
               router.go({name:'b_detail',query: {'job_id':this.job_id}});
               return;
            }else{
               this.face = response.data.result.face;
               this.job_exp = response.data.result.job_exp;
            }
          }
          this.hideLoad();
        },response=>{
          console.log("error");
        })
      }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {preinter,nowinter,pop,pop1,loading}
}
</script>
