<template >
  <div >
    	<!-- <login></login> -->
      <router-view></router-view>
  </div>
</template>
<script>
  import store from '../vuex/store.js'
  import {TestResource} from './../api/resources.js'
  export default{
    components:{
    },
    store
  }
</script>
