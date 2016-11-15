<style media="screen" lang="less" scoped>
  .g-md{}
  .inter{padding: 0.1rem;font-weight: bold;}
  .interview{background-color: #3CB3EC;padding: 0.1rem;
    text-align: center;margin: 5%;color: #fff;border-radius: 0.05rem;box-shadow: 1px 1px 1px 1px #E2D7D7;}
</style>

<template>
    <div class="g-ft">
        <div class=" btn-apply" v-if="type==1" @click="interview(topinfo.id)">开始面试</div>
        <div class="btn-apply" v-if="type==2" @click="interview(topinfo.id)">继续面试</div>
    </div>
    <!-- <div class="interview" v-if="type==1" @click="interview(topinfo.id)">开始面试</div>
    <div class="interview" v-if="type==2" @click="interview(topinfo.id)">继续面试</div> -->
  </div>
</template>

<script>
import api from './../../../api/index.js'
import {limit} from '../../../vuex/actions.js'
export default {
  props: ['count', 'topinfo', 'type'],
  vuex: {
      actions: { limit }
  },
  methods: {
      interview(job_id) {
          api.getIsOneFaceByJobId({
              'job_id': job_id
          }).then(response =>{
              if (response.data.result.face && response.data.result.face.length <= 0) {
                  this.limit();
              } else {
                  router.go({name: 'b_resume',query: {'job_id': job_id}});
              }
          },
          response =>{
              console.log("error");
          })
      },
  }
}
</script>
