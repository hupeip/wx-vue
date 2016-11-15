<style media="screen" lang="less" scoped>
    // .g-bd{margin-top: 0.1rem;padding:0 0.02rem 0.25rem;}
    .duty,.title{padding: 0.1rem 0.12rem;background-color: #fff;border-left:0.02rem solid #25ba73;font-weight: bold;margin-top:0.1rem;}
    .companyinfo,.dutyDetail{font-size: 0.12rem;}
    .title{position: relative;}
    i{background: url('../../../asset/icon/down.png') no-repeat;background-size: cover;display: block;width: 0.18rem;height: 0.18rem;position: absolute;top: 0.12rem;right: 0;}
    .up{background: url('../../../asset/icon/up.png') no-repeat;background-size: cover;}
    .duty{border: none;}
    .line{border-bottom: 0.01rem solid #ddd;margin: 0 0.1rem;}
</style>

<template >
    <div class="g-bd f-mgbottom60">
        <div class="title" @click="index=1" v-if="index==0">公司简介<i class="down"></i></div>
        <div class="title" @click="index=0" v-if="index==1">公司简介<i class="up"></i></div>
        <div class="companyinfo f-bg-color-withe f-padding13" v-if="index==1">{{{companyinfo.company_info}}}</div>
        <div class="duty">岗位职责</div>
        <div class="line"></div>
        <div class="dutyDetail f-bg-color-withe f-padding13">{{{duty}}}</div>
    </div>
</template>

<script>
export default {
  props:{
      duty: { type: String, default: '' },
      companyinfo: { type: Object, default: function(){ return {} } }
  },
  data: function () {
      return {
          index:0
      }
  },
}
</script>

<style lang="css">
</style>
