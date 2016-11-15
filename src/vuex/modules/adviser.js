import {SHOWALLINTERLIST,GETJOBCONTENT} from "../type.js"

const state = {
	 value:[],
	 faceNow:[],
	 toFace:[],
	 content:{},
	 num:0
}

const mutations = {
	[SHOWALLINTERLIST](state,data){
		state.value = data.result.list;
	},
	[GETJOBCONTENT](state,data){
		state.content = data.result.content;
		state.faceNow = data.result.faceNow_content;
		state.toFace = data.result.toFace_content;
		state.num = data.result.toFace;
	}
}

export default {
	state,
	mutations
}
