<style media="screen" lang="less" scoped>
    .title{text-align: center;margin: 15% 10%;font-weight: bold;}
    .sign{width: 100%;}
    // .btn-apply{width: 80%; padding: 0.12rem; background-color: #3CB3EC;box-shadow: 1px 1px 1px 2px #ddd;text-align: center;margin:0 auto;border-radius: 0.04rem;color: #fff;}
    .tips{margin: 5% 10%;}
</style>
<template>
  <div class="">
     <div class="title">感谢您参加本次现场招聘会签到后，您将可以看到本次招聘会的全部岗位</div>
     <div class="sign">
         <div class="btn-apply" @click="sign">立即签到</div>
     </div>
      <popup v-show="pop==1" :title="title" :text="text"></popup>
  </div>

</template>

<script>
import {limit} from '../../../vuex/actions.js'
import popup from '../../common/pop-up.vue'
import * as cookies from '../../../utils/authService.js'
import api from '../../../api/index.js'
import { getPersonOpenid } from '../../../utils/common.js'
export default {
    data: function () {
        return {
            title:"",
            text:"签到失败，请重试！",
            openid:'',
            activeid:'',
            code:0
        }
    },
    vuex:{
        getters:{ pop:({sign})=>sign.pop }
    },
    route:{
        data (transition) {
            document.title = '现场签到';
            this.code = transition.to.query.code;
            if(this.code == 1){
                router.go('/jobs/list');
            }
            this.activeid = transition.to.query.activeid;
            this.openid = getPersonOpenid('http://www.elitez.cn/get_openid2/');
            // if (!cookies.getCookie('openid')) {
            //     window.location.href = 'http://www.elitez.cn/get_openid2/';
            // }
            // this.openid = cookies.getCookie('openid');
        }
    },
  methods: {
      sign:function(){
          this.wxSignIn( {"openId": this.openid, "activityId": this.activeid} );
      },
      wxSignIn(info){
          api.wxSignIn(info).then(response =>{
               let num = response.data.result;
               if (response.data.code == 0) {
                  router.go({ name: 'signSuccess', query: { 'num':num,'show':1 } })
               }else{
                  this.limit();
               }
          },response=>{
              console.log("error");
          })
      }
  },
  components: { popup }
}
</script>

<style lang="css">
</style>
