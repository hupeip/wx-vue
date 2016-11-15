<style media="screen" lang="less" scoped>
.more{text-align: center;height: 0.4rem;line-height: 0.4rem;}
</style>

<template >
  <div class="f-mgbottom45">
    <loading v-if="loading"></loading>
    <div class="myoffer" >
      <ul class="job-list">
          <template v-for="item in result">
            <item :item="item"></item>
          </template>
      </ul>
    	<!-- <div class="more" @click="more" v-if="hide==1">点击查看更多</div> -->
      <div class="more" v-if="code==1">您还没有投递任何岗位</div>
    </div>
 </div>
</template>

<script>
import item from './item.vue'
import loading from '../../common/loading.vue'
import {showLoad,hideLoad} from '../../../vuex/actions.js'
import * as cookies from '../../../utils/authService.js'
import {sharewx} from '../../../utils/wxshare.js'
import api from '../../../api/index.js'
import { getPersonOpenid } from '../../../utils/common.js'
  export default{
				data(){
							return {
									openid:'',
									result: [],
                  code: 0
							}
				},
				vuex:{
							actions:{
								showLoad,hideLoad
							},
							getters:{
								loading:({loading})=>loading.state,
							}
				},
				route:{
							data (transition) {
									// if (!cookies.getCookie('openid')) {
									// 	window.location.href='http://www.elitez.cn/get_openid/';
									// }
									// this.openid=cookies.getCookie('openid');
                  this.openid = getPersonOpenid('http://www.elitez.cn/get_openid/');
									this.checkJobList({'openId':this.openid});
							}
				},

				ready(){
							document.title = '我的面试';
							let url = encodeURIComponent(location.href.split('#')[0]);
							var share = {
									"title":'今日速聘8.16日现场热招岗位，24小时急速入职等你来',
									"desc":'百度平台推广、贵金属投资经纪人…高底薪！高提成！高福利！',
									"pic":'http://www.elitez.cn/wx/src/asset/img/logo.jpg',
									"url":window.location.href
							}
							sharewx({url:url},share);
				},
				methods:{
							checkJobList(info){
									this.showLoad();
									api.checkJobList(info).then(response=>{
                      this.code = response.data.code;
  										if(response.data.code == 0){
  												this.result = response.data.result;
  										}
  										this.hideLoad();
									},response=>{
											console.log("error");
											this.hideLoad();
									})
							}
				},
				components:{ item,loading },
	}
</script>
