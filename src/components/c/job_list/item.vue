<style media="screen" lang="less" scoped>
		li{margin-bottom: 0.1rem;}
		.welfare{margin-left: 0.7rem;}
		.ellips{white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
</style>

<template>
	<li @click="detail(hide)" class="f-bg-color-withe f-padding13">
		<div class="s-fc-black f-oh">
				<div class="fl icon"><i class="company"></i></div>
				<div class="right">{{item.company_name}}</div>
		</div>
		<div class="s-fc-black f-oh">
				<div class="fl icon"><i class="station"></i></div>
				<div class="right">{{item.job_name}}</div>
		</div>
		<div class="s-fc-black f-oh">
				<div class="fl icon"><i class="money"></i>
				</div><div class="right">{{item.salary}}</div>
		</div>
		<div class="" v-if="hide==0">
			<div class="fl f-color_gray">福利待遇：</div>
			<div class="welfare ellips">{{item.benefit}}</div>
		</div>
		<div class="" v-if="hide==1">
			<div class="fl f-color_gray">福利待遇：</div>
			<div class="welfare">{{item.benefit.substring(0,30)}}<span v-if="item.benefit.length > 30">...</span></div>
		</div>
		<div v-if="hide==0">
			<div class="fl f-color_gray">截止时间：</div>
			<div class="">{{item.end_time}}</div>
		</div>

		<!-- 华丽丽的各种状态 -->
		<div v-if="hide==0">
				<div class="f-color_green" v-if="item.status==0 || item.status==null">当前已有{{item.InterviewNum}}人在排队</div>
				<div class="f-color_green" v-if="item.status==1 && item.count>0">您前面还有{{item.count}}人等待面试</div>
				<div class="f-color_green" v-if="item.status==1 && item.count==0">您的面试马上就要开始了,请做好准备</div>
				<div class="f-color_green" v-if="item.status==6">对不起，由于您的经验不足，企业暂不安排面试</div>
				<div class="f-color_green" v-if="item.status==5">由于您没能及时到场面试，已经取消排队</div>
				<div class="f-color_green" v-if="item.status==2">面试通过</div>
				<div class="f-color_green" v-if="item.status==3">未通过面试，已纳入公司人才库</div>
				<div class="f-color_green" v-if="item.status==4">面试完成</div>
				<div class="f-color_green" v-if="item.status==100">正在面试中...</div>
				<div class="f-color_green" v-if="item.status==200">叫号中...</div>
		</div>
	</li>
</template>

<script>
export default{
		props: { item: { type: Object, default: function(){ return {} } },
	 					 hide: { type: Number, default: 0 }
					 },
		methods:{
			detail(hide){
				  hide==0 ? router.go({ name: 'detail', query: { 'id': this.item.id, 'job_name': encodeURIComponent(this.item.job_name)} })
									: router.go({ name: 'detail', query: { 'id': this.item.id, 'job_name': encodeURIComponent(this.item.job_name), 'activityid': true}})

			},
		}
	}
</script>
