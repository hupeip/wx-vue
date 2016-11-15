<template>
    <div><loading v-if="loading"></loading></div>
</template>

<script>
import { showLoad,hideLoad } from '../../../vuex/actions.js'
import * as cookies from '../../../utils/authService.js'
import api from '../../../api/index.js'
export default {
  data: function () {
    return {
      openid:''
    }
  },
  vuex:{
    actions:{
      showLoad,hideLoad
    },
    getters:{
      loading:({loading})=>loading.state
    }
  },
  route:{
    data (transition) {
      if (!cookies.getCookie('openid')) {
            window.location.href='http://www.elitez.cn/get_openid3/';
      }
      this.openid=cookies.getCookie('openid');
      this.wxCheckLoad({'openId':this.openid});
    }
  },
  methods: {
      wxCheckLoad(info){
      	 this.showLoad();
       	 api.wxCheckLoad(info).then(response=>{
              if(response.data.code==100){
         				  router.go({name:'signSuccess',query: { 'num':response.data.result,'show':0}})
         			}
         		  this.hideLoad();
       	 },response=>{
         		 console.log("error");
         		 this.hideLoad()
       	 })
      }
  },
}
</script>
