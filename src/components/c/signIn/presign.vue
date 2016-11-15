<template>
    <div><loading v-if="loading"></loading></div>
</template>

<script>
import {showLoad,hideLoad} from '../../../vuex/actions.js'
import * as cookies from '../../../utils/authService.js'
import loading from '../../common/loading.vue'
import api from '../../../api/index.js'
import { getPersonOpenid } from '../../../utils/common.js'
export default {
    data: function () {
        return {
            openid:''
        }
    },
    vuex:{
        actions:{ showLoad,hideLoad },
        getters:{ loading:({loading})=>loading.state }
    },
    route:{
      data (transition) {
        // if (!cookies.getCookie('openid')) {
        //       window.location.href='http://www.elitez.cn/get_openid2/';
        // }
        // this.openid=cookies.getCookie('openid');
        this.openid = getPersonOpenid('http://www.elitez.cn/get_openid2/');
        this.wxCheckLoad({'openId':this.openid});
      }
    },
    methods: {
        wxCheckLoad(info){
          	 this.showLoad();
           	 api.wxCheckLoad(info).then(response =>{
             			if (response.data.code==100) {
             				  router.replace('/jobs/list');
             			}else{
               			  router.go({name:'signinit',query: { 'code': response.data.code,'activeid':response.data.result}});
             			}
             		this.hideLoad();

           	 },response =>{
             		 console.log("error");
             		 this.hideLoad();
           	 })
        }
    },
    components: { loading }
}
</script>
