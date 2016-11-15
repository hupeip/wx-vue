<template>
    <signinit v-if="code==13" :activeid="activeid"></signinit>
</template>

<script>
import signinit from './signinit.vue'
import * as cookies from '../../../utils/authService.js'
export default {
  data: function () {
      return {
          code:0,
          activeid:'',
      }
  },
  route:{
      data (transition) {
          document.title = '现场签到';
          this.code = transition.to.query.code;
          this.activeid = transition.to.query.activeid;
          if(this.code==1){
              router.go('/jobs/list');
          }
      }
  },
  components: {signinit}
}
</script>
