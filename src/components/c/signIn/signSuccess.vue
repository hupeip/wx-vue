<style media="screen" lang="less" scoped>
    .success{margin: 8%;}
    .title,.text{font-size: 0.14rem;font-weight: bold;margin-bottom: 0.06rem;}
    .code{font-size: 0.16rem;}
    .sign{width: 100%;}
    .btn-apply{display: block;color: #fff;}
    .tips{margin: 4% 0 10%;line-height: 0.18rem;color:#8E8787;}
</style>
<template>
  <div>
      <div class="success">
        <div class="title">恭喜你，签到成功！</div>
        <div class="text">您本次的人选编号为：<span class="color_FC code">{{num}}</span></div>
        <div class="tips">注：请记住您的人选编号，工作人员会按照人选编号叫号提醒您参与面试</div>
      </div>
    <div class="sign" v-if="show==1">
        <a v-link="{ path: '/jobs/list' }" class="btn-apply">查看岗位</a>
    </div>
  </div>

</template>

<script>
export default {
    data: function () {
        return {
            num: 0,
            show: 0
        }
    },
    route:{
        data (transition) {
            document.title = '签到成功';
            this.num = transition.to.query.num;
            this.show = transition.to.query.show;
        }
    },
}
</script>
