import api from "../api/index.js"

export const sharewx = function(data,share){
    api.sharewx(data).then(response=>{
      if(response.data.code == 0){
        wx.config({
            debug: false,
            appId: response.data.result.data.appId,
            timestamp: response.data.result.data.timestamp,
            nonceStr: response.data.result.data.nonceStr,
            signature: response.data.result.data.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 功能列表，我们要使用JS-SDK的什么功能
        });
        wx.ready(function(){

          wx.onMenuShareTimeline({
            title: share.title, // 分享标题
            link: share.url, // 分享链接
            imgUrl: share.pic, // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          });
            // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
          wx.onMenuShareAppMessage({
            title: share.title, // 分享标题
            desc: share.desc, // 分享描述
            link: share.url, // 分享链接
            imgUrl: share.pic, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
              // 用户确认分享后执行的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          });
        });
      }
    },response=>{
      console.log("error");
    })
}
