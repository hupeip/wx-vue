<style media="screen" lang="less" scoped>
  .title{padding: 0.1rem;font-size: 0.15rem;font-weight: bold;}
  .toptab{width: 100%;background-color: #fff;overflow: hidden;border-bottom: 0.1rem solid #f0eff5;}
  .toptab div{width: 33.3%;padding: 0.1rem 0;text-align: center;}
  .toptab .action{color:#25ba73;}
  .toptab div:not(:first-child){border-left: 0.01rem solid #f1f1f1;}
  .scroll{position: fixed;top: 0;left:0;width: 100%;}
  .more{text-align: center;height: 0.4rem;line-height: 0.4rem;}
</style>

<template>
  <div class="">
    <div class="title">所有简历</div>
    <div class="toptab" :class="{scroll:scrolltop <= -40}">
       <div class="fl" :class="{action:index==0}" @click="select(0)">通过</div>
       <div class="fl" :class="{action:index==1}" @click="select(1)">不通过</div>
       <div class="fl" :class="{action:index==2}" @click="select(2)">待定</div>
    </div>
    <ul class="resume-list">
      <template v-for="item in pass.list">
        <item :item="item"></item>
      </template>
      <div class="more" v-if="pass.more==1" @click="more()">点击加载更多</div>
    </ul>

  </div>
</template>

<script>
import api from '../../../api/index.js'
import item from './item.vue'

export default {
  props:["pass","scrolltop","job_id"],
  data: function () {
    return {
      index:0,
      page:1,
      arr:[2,3,4]
    }
  },
  methods: {
    select(index){
      this.index=index;
      this.pass = {list:[]};
      let arr = [2,3,4];
      this.getJobFaceByStatus({'job_id':this.job_id,'status':this.arr[index],'page':1},0);
    },
    more(){
      this.page++;
      this.pass = {list:[]};
      this.getJobFaceByStatus({'job_id':this.job_id,'status':this.arr[index],'page':this.page},1);
    },
    getJobFaceByStatus(info,more){
    	api.getJobFaceByStatus(info).then(response=>{
    		 if (response.data.code == 0) {
             if(more == 0){
               this.pass = response.data.result;
             }else{
               this.pass = this.pass.concat(response.data.result.list);
             }
    		 }
    	},response=>{
    		console.log("error");
    	})
    }
  },
  components: {item}
}
</script>
