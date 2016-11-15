<style media="screen" lang="less" scoped>

    img{ height: 100%; width: 100%; background-size: cover; }
    .m-login{ position: absolute; left: 0; right: 0; top: 38%; }
    .line{ border-bottom: 1px solid #fff; margin: 0 10%; }
    .username,.pwd{ padding: 0.11rem 0;}
    i{ display: inline-block;width: 0.19rem;height: 0.26rem;vertical-align: bottom;margin-left: 0.08rem;}
    .username i{ background: url('../../../asset/icon/username.png');background-size: cover;}
    .pwd i {background: url('../../../asset/icon/pwd.png');background-size: cover;}
    input {border: none;outline: medium;margin-left: 0.1rem;padding: 0.05rem 0.02rem 0.03rem;;background-color: transparent;color: #fff;font-size: 0.15rem;}
    .footer{ text-align: center;margin: 15% 10% 0;}
    .btn-apply{ width: 100%;background-color: #fff;padding: 0.14rem;font-size: 0.16rem;color: #595657;border-radius: 0.55rem;border: none;}
    .btn-apply[disabled]{ cursor: default;color: #cdcdcd;border: none}
    .msg{ height: 0.22rem;color: #c82829;font-size: 0.14rem;}
    .title{ font-size: 0.16rem;text-align: center;margin-bottom: 0.1rem;color: #6D6A6A;}
    :-moz-placeholder{ /* Mozilla Firefox 4 to 18 */color: #fff;}
    ::-moz-placeholder{ /* Mozilla Firefox 19+ */color: #fff;}
    input:-ms-input-placeholder, textarea:-ms-input-placeholder{ color: #fff;}
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{ color: #fff;}

</style>
<template>
    <div class="g-bd">
      <img src="../../../asset/img/bg-login.jpg" alt="" />
      <div class="m-login">
        <validator name="validation">
          <form novalidate>
              <div class="title">今日速聘企业面试入口</div>
              <div class="line username">
                 <i></i>
                 <input type="tel" v-model="phoneNum" v-validate:phone="['required']" maxlength="11"  class="input_1" name="name" value="" placeholder="请输入您的手机号">
              </div>
              <div class="line pwd">
                 <i></i>
                 <input type="password" v-model="pwd" v-validate:password="['required']"  class="input_1" name="name" value="" placeholder="请输入密码">
              </div>
              <div class="footer">
                  <div class="msg">{{loginValue.msg}}</div>
                  <div class="btn-apply" :disabled='$validation.invalid' @click.prevent="loginclick">登录</div>
              </div>
          </form>
       </validator>
      </div>
    </div>
</template>

<script>
import api from '../../../api/index.js'
export default {
    data:function() {
        return {
            phoneNum:'',
            pwd: '',
            loginValue: ''
        }
    },
    route: {
        data: function(transition) {
            document.title = '今日速聘';
        }
    },
    methods: {
        loginclick() {
            api.login({'phoneNum': this.phoneNum,'psw': this.pwd,'ischeck': 0}).then(response =>{
                if (response.data.code == 0) {
                    router.go('/b_jobs/list');
                } else {
                    this.loginValue = response.data;
                }
            },
            response =>{
                console.log("error");
            })
        }

    }
}
</script>
