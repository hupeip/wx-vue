<style media="screen" lang="less" scoped>
		.g-ft{position: fixed;height: 0.45rem;color:#3CB3EC;width: 100%;overflow: hidden;bottom:0;}
		a:not(:first-child){ border-left: 0.02rem solid #e7e5e2;}
		.g-ft .tab{width: 33.3%;text-align: center;background-color: #fff;height: 0.45rem;line-height: 0.45rem;text-decoration: none;}
		.g-ft i{display: inline-block;width: 0.22rem;height: 0.22rem; margin-top: 0.12rem;}
		.position1{background: url('../../../asset/icon/position1.png') no-repeat;background-size: contain;}
		.position2{background: url('../../../asset/icon/position2.png') no-repeat;background-size: contain;margin-top: 0.12rem;}
		.interview1{background: url('../../../asset/icon/interview1.png') no-repeat;background-size: contain;margin-top: 0.12rem;}
		.interview2{background: url('../../../asset/icon/interview2.png') no-repeat;background-size: contain;margin-top: 0.12rem;}
	  .tab-quit .out{font-size: 0.24rem;margin-right: 0.08rem;margin-top: 0.1rem;color: #919191;}
		 span{vertical-align: top;color: #919191;}
		.g-ft .action{color: #25ba72;}
</style>

<template>
	<div class="g-ft">
		<a v-link="{ path: '/b_jobs/list' }" class="fl tab tab-left" @click="index=0" >
				<i class="position1" v-if="index != 0"></i><i class="position2" v-if="index ==0"></i>
				<span :class="{action:index==0}">岗位管理</span>
		</a>
		<a v-link="{ path: '/b_jobs/offer' }" class="fl tab tab-right" @click="index=1" >
				<i class="interview1" v-if="index != 1"></i><i class="interview2" v-if="index ==1"></i>
				<span :class="{action:index==1}">面试管理</span>
		</a>
		<a class="fl tab tab-quit" :class="{action:index==2}" @click="clear">
				<i class="fa fa-sign-out out" aria-hidden="true" :class="{action:index==2}"></i>
				<span :class="{action:index==2}">退出</span>
		</a>
	</div>
</template>

<script>
import * as cookies from '../../../utils/authService.js'
	export default{
		props:["index"],
		methods: {
			clear(){
				this.index = 2;
				cookies.delCookie('apiAccessToken');
				router.go('/login');
			}
		}
	}
</script>
