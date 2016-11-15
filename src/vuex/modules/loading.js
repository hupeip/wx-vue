import {SHOWLOAD,HIDELOAD} from "../type.js"

const state = {
	state:true
}

const mutations = {
	[SHOWLOAD](state,data){
		state.state = true
	},
	[HIDELOAD](state,data){
		state.state = false
	},
}

export default {
	state,
	mutations
}
