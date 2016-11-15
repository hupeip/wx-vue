import {CHECKWXTALENT,CHANGE} from "../type.js"

const state = {
	id:'',
	username:"",
	phone:"",
	email:"",
	work_year:"",
	edute:"",
	school:"",
	duty:"",
	company:"",
	jobSendLimit:{}
}

const mutations = {
	[CHECKWXTALENT](state,data){
		state.id=data.result.talentInfo.id ;
		state.username=data.result.talentInfo.name;
		state.phone=data.result.talentInfo.phone;
		state.email=data.result.talentInfo.email;
	  state.work_year=data.result.talentInfo.work_year;
		state.edute=data.result.talentInfo.degree;
		state.school=data.result.talentInfo.school;
		state.duty=data.result.talentInfo.job;
		state.company=data.result.talentInfo.company_name;

		state.jobSendLimit=data.result.jobSendLimit;
	},
	[CHANGE](state,val,info){
		state[info] = val;
	}
}

export default {
	state,
	mutations
}
