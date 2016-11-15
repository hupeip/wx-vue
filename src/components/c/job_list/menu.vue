<style media="screen" lang="less" scoped>
		.g-ft{position: fixed;color:#3CB3EC;width: 100%;overflow: hidden;bottom:0;height: 0.45rem;}
		.g-ft .tab{width: 50%;text-align: center;background-color: #fff;height: 0.45rem;line-height: 0.45rem;}
		.tab-left{border-right:0.01rem solid #ddd;}
		i{display: inline-block;width: 0.22rem;height: 0.22rem; margin-top: 0.12rem;}
		.job_list1{background: url('../../../asset/icon/job_list1.png') no-repeat;background-size: contain;}
		.job_list2{background: url('../../../asset/icon/job_list2.png') no-repeat;background-size: contain;}
		.accept1{background: url('../../../asset/icon/accept1.png') no-repeat;background-size: contain;}
		.accept2{background: url('../../../asset/icon/accept2.png') no-repeat;background-size: contain;}
		.g-ft .tab span{vertical-align: top;}
		.g-ft .action{color: #25ba73;}
</style>
<template>
	<div class="g-ft" v-if="show==0">
			<a  v-link="{ path: '/jobs/list' }"  class="fl tab tab-left" @click="index=0" >
					<i class="job_list1" v-if="index != 0"></i><i class="job_list2" v-if="index ==0"></i>
					<span :class="{action:index==0}">岗位列表</span>
			</a>
			<a  v-link="{ path: '/jobs/offer' }"  class="fr tab tab-right" @click="index=1" >
					<i class="accept1" v-if="index != 1"></i><i class="accept2" v-if="index ==1"></i>
					<span :class="{action:index==1}">我的面试</span>
			</a>
	</div>
</template>
<script>
	export default{
		props:["index","show"],
	}
</script>
