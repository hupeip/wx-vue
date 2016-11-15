<style media="screen" lang="less" scoped>
.g-md{margin-bottom:0;}
.g-md .job-list{padding-bottom: 0;}
// .welfare{height: 0.4rem;overflow: hidden;}
.welfare div{width: 100%;float: right;margin-left:0.6rem; }
.addres{margin-bottom:0.1rem;padding-bottom: 0.1rem;border-bottom: 1px dashed #ddd;}
.border{border: 0.01rem solid #ddd;border-radius: 0.2rem;padding: 0.01rem 0.12rem;display: inline-block;}
</style>
<template>
  <div class="f-bg-color-withe">
    <ul>
      <li class="f-padding13">
        <div class="s-fc-black f-oh">
            <div class="fl icon"><i class="company"></i></div>
            <div class="right">{{companyinfo.company_name}}</div>
        </div>
        <div class="s-fc-black f-oh">
            <div class="fl icon"><i class="station"></i></div>
            <div class="right">{{companyinfo.job_name}}</div>
        </div>
        <div class="s-fc-black f-oh">
            <div class="fl icon"><i class="money"></i>
            </div><div class="right">{{companyinfo.salary}}</div>
        </div>
        <div>
            <div class="fl f-color_gray">招聘人数：</div>
            <div class="f-mgleft72 f-color_green">{{companyinfo.recruiting_num}}人</div>
        </div>
        <div>
            <div class="fl f-color_gray">福利待遇：</div>
            <div class="f-mgleft72">
                <span class="frist">{{welfare}}</span>
                <span @click="show=1" v-if="welfare.length>=30&&show==0" class="f-color_green border">查看更多</span>
                <span v-show="show==1" class="frist">{{{welfare2}}}</span><span @click="show=0" v-show="show==1" class="f-color_green border">收起</span>
            </div>
        </div>
        <div v-if="hide==0">
              <div class="addres">
                  <div class="fl f-color_gray">办公地点：</div>
                  <div class="f-mgleft72">{{companyinfo.interview_addres}}</div>
              </div>

              <div v-if="!isChecked">
                  <div class="fl f-color_gray">申请截止：</div>
                  <div class="f-mgleft72">{{companyinfo.end_time}}</div>
              </div>
              <div>
                  <div class="fl f-color_gray">面 &nbsp;试  官：</div>
                  <div class="f-mgleft72 ">{{companyinfo.interviewer_num}}人</div>
              </div>
        </div>

        <!-- 状态 -->
        <div v-if="hide==0">
            <div  v-if="!ischecked" class="f-bold f-color_green">当前已有{{companyinfo.interviewNum}}人在排队</div>
            <div  v-if="ischecked==1 && count!=0" class="f-bold f-color_green">您前面还有{{count}}人等待面试</div>
            <div  v-if="ischecked==1 && count==0" class="f-bold f-color_green">您的面试马上就要开始了,请做好准备</div>
            <div  v-if="ischecked==2" class="f-bold f-color_green">面试通过</div>
            <div  v-if="ischecked==3" class="f-bold f-color_green">未通过面试，已纳入公司人才库</div>
            <div  v-if="ischecked==4" class="f-bold f-color_green">面试完成</div>
            <div  v-if="ischecked==6" class="f-bold f-color_green">对不起，由于您的经验不足，企业暂不安排面试</div>
            <div  v-if="ischecked==5" class="f-bold f-color_green">由于您没能及时到场面试，已经取消排队</div>
            <div  v-if="ischecked==100" class="f-bold f-color_green">正在面试中...</div>
            <div  v-if="ischecked==200" class="f-bold f-color_green">叫号中...</div>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  /*接受从父组件传递来的hide变量，当等于1时，表示是从招聘日程进入该页面的，就隐藏办公地点、申请截止、面试官和状态*/
  props:{
      companyinfo: { type: Object, default: function () { return {} } },
      welfare: { type: String, default: '' },
      welfare2: { type: String, default: '' },
      ischecked: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
      hide: { type: Number, default: 0 },
  },
  data: function () {
      return {
          show: 0
      }
  }
}
</script>
