<template>
    <div class="">
        <loading v-if="loading"></loading>
        <ul class="">
            <template v-for="item in result">
                <item :item="item" @click="jobs(item.id)"></item>
            </template>
        </ul>
    </div>
</template>

<script>
  import item from './proitem.vue'
	import loading from '../../common/loading.vue'
	import api from '../../../api/index.js'
  import {showLoad,hideLoad} from '../../../vuex/actions.js'
  export default {
      data: function () {
          return {
              result: [],
          }
      },
      vuex: {
           actions: { showLoad, hideLoad },
           getters:{ loading:({loading})=>loading.state }
      },
      route: {
           data(transition){
                this.getActivityList();
           }

      },
      ready: function () {},
      methods: {
            jobs(activityid){
                router.go({name: 'list', query: { 'activityid': activityid } })
            },
            getActivityList(){
                this.showLoad();
                api.getActivityList().then(response=>{
                    if(response.data.code == 0 && !response.data.result.time){
                        this.result = response.data.result;
                    }
                    this.hideLoad();
                },response=>{
                    console.log("error");
                    this.hideLoad();
                })
            }
      },
      components: { item, loading }
  }
</script>
