<template>
   <div>
      <loading v-if="loading"></loading>
      <div >
         <topinfo :topinfo="result.content" :count="result.count" :welfare_fir="first" :welfare_sec="second"></topinfo>
         <duty :detail="detail" :count="result.count" :topinfo="result.content" :type="result.type"></duty>
         <interview v-if="result.type!=3" :topinfo="result.content" :count="result.count" :type="result.type"></interview>
         <div id="j-scroll" >
            <finish v-if="result.type==3" :pass="pass" :scrolltop="scrolltop" :job_id="result.content.id"></finish>
         </div>
      </div>
      <pop v-if="pop2==1" :title="title" :text="text"></pop>
    </div>
</template>

<script>
import topinfo from './topinfo.vue'
import duty from './duty.vue'
import interview from './interview.vue'
import finish from './finish.vue'
import loading from '../../common/loading.vue'
import pop from './../../common/pop-up.vue'

import {sharewx} from '../../../utils/wxshare.js'
import api from '../../../api/index.js'
import {showLoad,hideLoad,alertOK,bomb} from '../../../vuex/actions.js'

export default {
        data:function() {
            return {
                job_name:'',
                title: '',
                text: '当前已经没有要面试的求职者了,请休息会吧！',
                result: {},
                first: '',
                second: '',
                detail: '',
                pass:[],
                scrolltop: 100,
            }
        },
        vuex: {
            actions: {bomb,showLoad,hideLoad},
            getters: {
                pop2: ({getFaceResultList}) =>getFaceResultList.pop2,
                loading: ({loading}) =>loading.state,
            }
        },
        route: {
            data(transition) {
                document.title = '岗位详情';
                this.job_name = decodeURIComponent(transition.to.query.job_name);
                this.jobContent({'job_id': transition.to.query.job_id,'page': 1});
                transition.next();
            }
        },
        ready: function() {
            let url = encodeURIComponent(location.href.split('#')[0]);
            var share = {
                "title": '8.25日正在招聘' + this.job_name,
                "desc": '今日速聘24小时急速入职岗位，现在正在进行中！',
                "pic": 'http://www.elitez.cn/wx/src/asset/img/logo.jpg',
                "url": window.location.href
            }
            sharewx({url: url},share);
            window.onscroll = this.scroll;
        },
        methods: {
            scroll() {
                var mTop = document.getElementById('j-scroll').offsetTop;
                var sTop = document.body.scrollTop;
                this.scrolltop = mTop - sTop;
            },
            jobContent(info) {
                this.showLoad();
                api.jobContent(info).then(response =>{
                    if (response.data.code == 14) {
                        router.go('/login');
                    }
                    if (response.data.code == 0) {
                        this.result = response.data.result;
                        let benefit = this.result.content.benefit;
                        this.first = benefit.substring(0, 30);
                        this.second = benefit.substring(30, benefit.length);
                        this.detail = this.result.content.job_info.replace(/\<\/br\>/g, '<br>');

                        if(this.result.type == 3){
                          api.getJobFaceByStatus({'job_id':info.job_id,'status':2,'page':1}).then(response=>{
                             if (response.data.code == 0) {
                                this.pass = response.data.result;
                              }
                          },response=>{
                            console.log("error");
                          })
                        }
                    }
                    this.hideLoad()
                },
                response =>{
                    console.log("error");
                    this.hideLoad()
                })
            }
        },
        components: {topinfo,duty,interview,finish,loading,pop}
    }
</script>
