import {SHOWINTERLIST} from "../type.js"

const state = {
	showdata: {},
	jobs:[],
	faces:[],
	hide:0
}
const mutations = {
	[SHOWINTERLIST](state,data,page){
		if (page==1) {
			state.jobs=data.result.list;

		}else{
			for (var i = 0; i < data.result.list.length; i++) {
					state.jobs.push(data.result.list[i]);
			}
			state.hide=data.result.is_more;
		}
	}

}

export default {
	state,
	mutations
}
