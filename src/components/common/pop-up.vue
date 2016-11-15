<style media="screen" lang="less" scoped>
   .pop{ position: fixed; left:0; top:0; bottom:0; background-color:rgba(25, 24, 24, 0.6);height:100%; width: 100%; z-index:99999;}
   .connent{margin: 60% 10%;}
   .modal{display: block;}
   .modal-footer{padding: 0;}
   .fade{opacity: 1;}
   .title,.text,{color: #333;margin-bottom: 0.1rem;text-align: center;}
   .title{font-size: 0.14rem;}
   .text{line-height: 0.2rem;}
   .footer{}
   .footer a{display: inline-block; width: 100%;text-align: center;padding: 0.1rem;}
   .confirm{border-left: 1px solid #ddd;color:#3cc51f;}
//    .confirm{padding: 0.05rem;background-color: #827A7A;width: 65%;text-align: center;border-radius: 0.02rem;margin: 0.05rem auto;}

</style>
<template>
<div class="modal pop fade" tabindex="-1">
  <div class="modal-dialog connent" role="document">
    <div class="modal-content">
      <div class="modal-body">
          <div class="title">{{title}}</div>
          <div class="text">{{text}}</div>
      </div>
      <div class="modal-footer">
        <div class="footer">
           <a href="#" class="btn_dialog confirm" @click.prevent="confirm">确定</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import {alertOK} from '../../vuex/actions.js'
export default {
  props:['title','text','type','jobid'],
  data: function () {
    return {
    }
  },
  vuex:{
    actions:{
      alertOK
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    confirm:function(){
      this.alertOK();
      if (this.type==1) {
        location.reload();
      }
      if (this.type==2) {
        router.go({name:'detail',query: { 'id':this.jobid}});
      }
    }
  },
  components: {}
}
</script>
