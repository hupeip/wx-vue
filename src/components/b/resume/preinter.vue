<style media="screen" lang="less" scoped>
  .main{margin-top: 15%;}
  .interview{width: 100%;background-color: #25ba73;padding: 0.12rem;color: #fff;box-shadow: 1px 1px 1px 1px #E2D7D7;margin: 3% 0;border-radius: 0.5rem;}
  .btn-default{background-color: #fff;color:#333;border:0.01rem solid #25ba73;}
  .tips{color:#8A8585;margin-top: 5%;}
</style>
<template>
  <div class="main f-padding13">
    <button type="button" class="interview btn btn-info" @click="inter">进入面试</button>
    <button type="button" class="interview btn btn-default" @click="noCome">此人未到</button>
    <div class="tips">
      <div>温馨提示：</div>
      <div>• 点击【进入面试】正式开始面试，并可以查看简历的全部内容</div>
      <div>• 若此人没来面试，点击【此人未到】按钮即可进入下一个求职者</div>
    </div>
  </div>
</template>

<script>
import api from './../../../api/index.js'
import {updateInterStatus} from '../../../vuex/actions.js'
export default {
  props:['face','show'],
  methods: {
    inter(){
      this.show = 1;
      api.changeStatusToFacing({'face_id':this.face.face_id}).then(response=>{
      },response=>{
        console.log("error");
      })
    },
    noCome(){
      api.updateInterStatus({'face_id':this.face.face_id,'status':5}).then(response=>{
            if (response.data.code==2) {
              this.limit();
            }
            if (response.data.code==0) {
              location.reload();
            }
      },response=>{
        console.log("error");
      })
    }
  },
  components: {}
}
</script>
