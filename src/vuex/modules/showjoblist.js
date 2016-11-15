import {SHOWJOBLIST} from "../type.js"
import {CHECKJOBLIST} from "../type.js"
import {DETAILJOBLIST,SHOWINTERVIEWINFO,ALERTOK,LIMIT} from "../type.js"

const state = {
	showdata: {},
	jobs:[],
	faces:[],
	jobinfo:{},
	isChecked:0,
	hide:0,
	count:0,
	pop:0,
	code:0,
	status:0
}

const mutations = {
	[SHOWJOBLIST](state,data,hide,page){
		if (page==1) {
			state.jobs=data.result.jobs;
			state.hide=hide;
		}else{
		for (var i = 0; i < data.result.jobs.length; i++) {
				state.jobs.push(data.result.jobs[i]);
		}
		state.hide=hide;
		}
		state.status=data.code;
	},
	[CHECKJOBLIST](state,data,hide,page){

				state.faces=data.result;
				state.hide=hide;
		// for (var i = 0; i < data.result.length; i++) {
		// 		state.faces.push(data.result[i]);
		// }
		// state.hide=hide;

	},
	[DETAILJOBLIST](state,data){
		state.jobinfo=data.result.jobInfo;
		state.isChecked=data.result.isChecked;
		state.code=data.code;
		/*if (data.code==100) {
				state.pop=1;
		}*/
	},
	[LIMIT](state,index){
		 state.pop=1;
	},
	[ALERTOK](state,index){
		 state.pop=0;
	},
	[SHOWINTERVIEWINFO](state,data){
		state.count=data.result.count;
	}

}

export default {
	state,
	mutations
}
