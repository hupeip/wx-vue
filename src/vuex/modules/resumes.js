import {ENTER,GETONEFACEBYJOBIDS,BOMB,ALERTOK,LIMIT} from "../type.js"

const state = {
	show : 0,
  face:{},
	pop:0,
	info:{}
}

const mutations = {
	[ENTER](state,data){
		state.show = 1
	},
	[LIMIT](state,info){
		 state.pop=2;
	},
	[BOMB](state,info){
		if (info.type==3) {
			state.pop = 3;
		}
		if (info.type==1) {
			state.pop=1;
		}
		 state.info=info;
	},
	[ALERTOK](state,info){
		 state.pop=0;
	},
	[GETONEFACEBYJOBIDS](state,data,type){
		if (data.result.face.length <= 0 && type==1) {
			 state.pop = 1;
		}
		state.face = data.result.face;
		console.log('test');
	}
}

export default {
	state,
	mutations
}
