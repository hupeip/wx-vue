<style media="screen" lang="less" scoped>
   .g-md{margin-top: 0.5rem;}
   .more{text-align: center;height: 0.4rem;line-height: 0.4rem;}
</style>

<template>
  <div class="g-md">
    <loading v-if="loading"></loading>
    <div class="myoffer" >
      <ul class="job-list">
          <template v-for="item in jobsValue">
            <item :item="item"></item>
          </template>
      </ul>
      <div class="more" v-if="hide==1" @click="more">点击查看更多</div>
    </div>
 </div>
</template>

<script>
import item from './itemOffer.vue'
import loading from '../../common/loading.vue'
import api from '../../../api/index.js'
import {showLoad,hideLoad} from '../../../vuex/actions.js'

export default {
    data:function() {
        return {
            page:1,
            jobsValue:[],
            hide:0
        }
    },
    vuex: {
        actions: {showLoad,hideLoad},
        getters: {loading: ({loading}) =>loading.state}
    },
    route: {
        data(transition) {
            this.getFaceResultList({'status': 4,'page': 1});
            transition.next()
        }
    },
    methods: {
        more() {
            this.page++;
            this.getFaceResultList({'status': 4,'page': this.page});
        },
        getFaceResultList(info) {
            this.showLoad();
            api.getFaceResultList(info).then(response =>{
                if (response.data.code == 14) {
                    router.go('/login');
                }
                if (response.data.code == 0) {
                    this.hide = (response.data.result.is_more == 1)? 1 : 0;
                    this.jobsValue = this.jobsValue.concat(response.data.result.jobs);
                }
                this.hideLoad()
            },
            response =>{
                console.log("error");
                this.hideLoad()
            })
        }
    },
    components: {item,loading}
}
</script>
