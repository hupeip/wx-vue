<style media="screen" lang="less" scoped>
		li{position:relative;margin-bottom: 0.1rem;}
    img{width:100%;}
		.tt{background-color: #45454b;color:#fff;padding: 0.06rem 0.1rem;}
    .content{border-bottom:1px solid #D0CCCC;margin-bottom:0.1rem;padding: 0.1rem 0;}
    .right{position:absolute;bottom:0.06rem;right: 0.05rem;}
    .right i{background: url('../../../asset/icon/right.png');background-size:cover;width: 0.18rem; height: 0.18rem; }
		.welfare{height: 0.2rem;display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
</style>

<template>

    <li class="f-bg-color-withe f-padding13">
        <img class="" src="{{item.picture}}-img2.4" alt="" />
				<div class="tt">今日速聘 {{item.day}} 现场招聘岗位预览！</div>
        <div class="content">{{item.content.substring(0,36)}}<span v-if="item.content.length>36">...</span></div>
        <div class="">查看岗位</div>
        <div class="right"><i class=""></i></div>
    </li>
</template>

<script>
export default {
		props: { item: { type: Object, default: function(){ return {} } } },
}
</script>
