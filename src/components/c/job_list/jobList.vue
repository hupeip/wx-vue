<template>
	<div>
		<router-view></router-view>
		<menu :index="index" :show="show"></menu>
	</div>
</template>

<script>
import menu from './menu.vue'
export default{
			data:function(){
					return {
						index: 0,
						show: 0
					}
			},
			route:{
					data:function(transition){
							if (window.location.href.indexOf('list')>0) {
									this.index = 0;
							}
							if (window.location.href.indexOf('offer')>0) {
									this.index = 1;
							}
							let	activityid = transition.to.query.activityid;
							this.show	= activityid ? 1 : 0;
					}
			},
			components:{ menu }
}
</script>
