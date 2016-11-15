<style media="screen" lang="less" scoped>
	.more{text-align: center;height: 0.4rem;line-height: 0.4rem;}
</style>

<template>
	<div class="f-bg-color-withe f-padding1 f-mgbottom45 ">
		<loading v-if="loading"></loading>
		<div>
			<ul>
				<template v-for="item in jobsValue">
					<item :item="item" :type="type"></item>
				</template>
			</ul>
			<div class="more" v-if="hide==1">点击查看更多</div>
		</div>
	</div>
</template>

<script>
import item from './item.vue';
import loading from '../../common/loading.vue'
import api from '../../../api/index.js'
import {showLoad,hideLoad} from '../../../vuex/actions.js'
export
default {
    data:function() {
        return {
            page:1,
            type: 1,
            jobsValue: '',
						hide: 0,
						redom: 1
        }
    },
    vuex: {
        actions: { showLoad,hideLoad },
        getters: { loading: ({loading}) =>loading.state }
    },
    route: {
        data(transition) {
            document.title = '岗位列表';
            this.showInterList( { 'page': this.page } );
        }
    },
    components: { item,loading },
    methods: {
        showInterList(info) {
            this.showLoad();
            api.showInterList(info).then(response =>{
                if (response.data.code == 14) {
                    router.go('/login');
                }
                if (response.data.code == 0) {
                    this.jobsValue = response.data.result.list;
										this.hide = (response.data.result.is_more == 1)? 1 : 0;
                }
                this.hideLoad();
            },
            response =>{
                console.log("error");
                this.hideLoad();
            })
        },
        more:function(){
        		this.page++;
        		this.showInterList({'page':this.page});
        	},
    }
}
</script>
