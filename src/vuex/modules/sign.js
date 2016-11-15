import {WXCHECKLOAD,WXSGIN,ALERTOK} from "../type.js"

const state = {
	code:0,
  activityId:0,
  pop:0
}

const mutations = {
	[WXCHECKLOAD](state,data){
		state.code = data.code;
    if (data.code==0) {
        state.activityId= data.result;
    }
	},
  [WXSGIN](state,data){
		state.pop = 1;
	},
  [ALERTOK](state,index){
		 state.pop=0;
	}
}

export default {
	state,
	mutations
}
