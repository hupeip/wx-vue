<style media="screen" lang="less" scoped>
.more{text-align: center;height: 0.4rem;line-height: 0.4rem;}
.g-top{position: fixed;height: 0.45rem;color:#3CB3EC;width: 100%;overflow: hidden;top:0;}
.g-top .tab{width: 50%;text-align: center;background-color: #fff;height: 0.45rem;line-height: 0.45rem;}
.g-top .tab span{vertical-align: top;margin-left: 0.1rem;}
.g-top .action{background-color: #D8F8F7;}
.job{margin-top: 0.5rem;}
.list{font-weight: bold;}
.detail{position: relative;}
.detail span{margin-right: 0.25rem;}
.jobname{right: -0.25rem;}
.freshen{position: fixed;right: 0.1rem;bottom: 0.1rem;;width: 0.6rem;height: 0.6rem;background-color: #3CB3EC;color: #fff;text-align:center;
line-height: 0.6rem;border-radius: 0.5rem;}
</style>
<template>
	<div class="g-md">
		<loading v-if="loading"></loading>
		<div class="g-top">
			<div class="fl tab tab-left" @click="index=0" :class="{action:index==0}"><span>岗位</span></div>
			<div class="fr tab tab-right" @click="index=1" :class="{action:index==1}"><span>排队</span></div>
		</div>
		<div class="job f-padding1 f-bg-color-withe" v-if="index==0">
			<ul class="job-list">
				<template v-for="item in value">
					<item :item="item" :type="type"></item>
				</template>
			</ul>
			<div class="freshen" @click="showAllInterList">刷新</div>
		</div>
		<div class="job f-padding1 f-bg-color-withe" v-if="index==1">
			<ul class="job-list" v-for="item in list">
				<li class="list">
					<div class="detail">
						<span>编号：{{item.sign_id}}</span>
						<span>{{item.name}}</span><br>
						<span class="jobname">{{item.job_name}}</span>
					</div>
				</li>
			</ul>
			<div class="freshen" @click="sortTeam">刷新</div>
		</div>
	</div>
</template>
<script>
import api from './../../api/index.js'
import item from './../b/b_job_list/item.vue';
import loading from '../common/loading.vue'
import {showAllInterList,showLoad,hideLoad} from '../../vuex/actions.js'
export default {
    data:function() {
        return {
            type:2,
            index: 0,
            list: [],
            value: []
        }
    },
    vuex: {
        actions: {showLoad,hideLoad},
        getters: {loading: ({loading}) =>loading.state}
    },
    route: {
        data(transition) {
            document.title = '岗位列表';
            this.showAllInterList();
            this.sortTeam();
        }
    },
    components: {item,loading},
    methods: {
        sortTeam() {
            this.showLoad();
            api.getAllFacing().then(response =>{
                this.list = response.data.result;
                this.hideLoad();
            },
            response =>{
                console.log("error");
                this.hideLoad();
            })
        },
        showAllInterList() {
            this.showLoad()
						api.showAllInterList().then(response =>{
                if (response.data.code == 0) {
                    this.value = response.data.result.list;
                }
                this.hideLoad();
            },
            response =>{
                console.log("error");
                this.hideLoad()
            })
        }

    }
}

</script>
