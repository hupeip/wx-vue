import {ADDWXTALENT,ALERTOK,BOMB,LIMIT} from "../type.js"

const state = {
	show:0,
	info:{}
}

const mutations = {
	[ADDWXTALENT](state,data){
		state.show = data;
	},
	[BOMB](state,data){
		state.show = 2;
		state.info = data;
	},
	[LIMIT](state,index){
		 state.show = 1;
	},
	[ALERTOK](state,data){
		state.show = 0;
	},

}

export default {
	state,
	mutations
}
