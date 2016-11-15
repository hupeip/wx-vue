
<template >
  <toptab :action="action"></toptab>
  <router-view></router-view>
</template>

<script>
import toptab from './topTab.vue'
import {sharewx} from '../../../utils/wxshare.js'
export default {
  props:["action"],
  ready: function () {
    document.title = '面试管理';
    let url = encodeURIComponent(location.href.split('#')[0]);
    let share = {
        "title":$('title').text(),
        "desc":'招聘大师今日速聘专场招聘会等你来',
        "pic":'http://www.elitez.cn/wx/src/asset/img/logo.jpg',
        "url":window.location.href
      }
    sharewx({url:url},share);
  },
  components: {toptab}
}
</script>
