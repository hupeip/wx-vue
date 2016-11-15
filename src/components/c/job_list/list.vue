<style media="screen" lang="less" scoped>
	.noactive{text-align: center;margin-top: 20%;}
	.more{text-align: center;height: 0.4rem;line-height: 0.4rem;}
	.tips{background-color: #8c8c8d;color:#fff;padding: 0.05rem 0.1rem;margin-bottom: 0.1rem;}
</style>
<template>
	<div class="">
		<div class="noactive" v-if="code==1">
       <div>当前还没有现场招聘活动</div>
       <div>请留意公众号相关信息</div>
    </div>
		<div class="f-mgbottom45" v-if="code!=1">
			<loading v-if="loading"></loading>
			<div class="job">
				<div class="f-bg-color-gary tips" v-if="hide==0">Trips: 每人同时段只可投递2个岗位，当您完成一次面试之后，将可进行其他岗位的再投递</div>
				<ul class="">
					<template v-for="item in result.jobs">
						<item :item="item" :hide="hide"></item>
					</template>
				</ul>
				<div class="more" @click="more" v-if="result.pageNum > page">点击查看更多</div>
			</div>
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
		/*hide变量*/
				data(){
							return {
									page:1,
									num: 0,
									openid:'',
									result:'',
									code: 0,
									hide: 0
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
									var activityid = transition.to.query.activityid;
									if (activityid) {
											this.getJobList({ 'activityId': activityid });
											this.hide = 1;
									}else{
											// if (!cookies.getCookie('openid')) {
											// 	window.location.href='http://www.elitez.cn/get_openid/';
											// }
											// this.openid=cookies.getCookie('openid');
											this.openid = getPersonOpenid('http://www.elitez.cn/get_openid/');
										  this.showJobList({'openId':this.openid,'page':1});
											this.hide = 0;
									}
							}
				},

				ready(){
							document.title = '岗位列表';
							let url = encodeURIComponent(location.href.split('#')[0]);
							var share = {
									"title":'今日速聘8.25日现场热招岗位，24小时急速入职等你来',
									"desc":'百度平台推广、贵金属投资经纪人…高底薪！高提成！高福利！',
									"pic":'http://www.elitez.cn/wx/src/asset/img/logo.jpg',
									"url":window.location.href
							}
							sharewx({url:url},share);
				},
				methods:{
							more(){
									this.page++;
									this.showJobList({'openId':this.openid,'page':this.page});
							},
							showJobList(info){
									this.showLoad();
									api.showJobList(info).then(response=>{
										this.code = response.data.code;
										if(response.data.code == 0){
												this.result = response.data.result;
										}
										this.hideLoad();
									},response=>{
											console.log("error");
											this.hideLoad();
									})
							},
							getJobList(info){
									this.showLoad();
									api.getJobList(info).then(response=>{
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
