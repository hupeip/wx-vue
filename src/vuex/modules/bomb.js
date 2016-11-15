  import {BOMB,ALERTOK} from "../type.js"

const state = {
	pop:0,
  info:{}
}

const mutations = {
	[BOMB](state,info){
		state.pop = 1;
    state.info=info;
	},
  [ALERTOK](state,data){
		state.pop = 0;
	}
}

export default {
	state,
	mutations
}
