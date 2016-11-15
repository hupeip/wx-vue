<template>
	<div>
		<router-view :action="action"></router-view>
		<menu :index="index"></menu>
	</div>
</template>

<script>
import list from './list.vue'
import menu from './menu.vue'
import {sharewx} from '../../../utils/wxshare.js'
	export default{
		data: function () {
	    return {
				index:0,
				action:0,
	    }
	  },
		route:{
			data:function(transition){
				let url = window.location.href;

				if(url.indexOf('list')>0){
					this.index=0;
				}
				if(url.indexOf('offer')>0){
					this.index=1;this.action = 0;
				}
				if(url.indexOf('offer')>0 && url.indexOf('agree')>0){
					this.index=1;this.action = 0;
				}
				if(url.indexOf('offer')>0 && url.indexOf('fire')>0){
					this.index=1;this.action = 1;
				}
				if(url.indexOf('offer')>0 && url.indexOf('tbd')>0){
					this.index=1;this.action = 2;
				}

			}
		},
		components:{
		   list,menu
		},
		ready:function(){
			document.title = '岗位管理';
			let url = encodeURIComponent(location.href.split('#')[0]);
			var share = {
					"title":'今日速聘8.25日现场热招岗位，24小时急速入职等你来',
					"desc":'百度平台推广、贵金属投资经纪人…高底薪！高提成！高福利！',
					"pic":'http://www.elitez.cn/wx/src/asset/img/logo.jpg',
					"url":window.location.href
				}
			sharewx({url:url},share);
		}
	}
</script>
