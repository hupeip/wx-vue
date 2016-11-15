import {AGREE,FIRE,TBD,RESUMEFIRE,JOBCONTENT,UPDATEINTERSTATUS,GETJOBFACEBYSTATUS,BOMB,ALERTOK,LIMIT} from "../type.js"



const state = {
	showdata: {},
	jobs:[],
	fire:[],
  tbd:[],
	resumeFire:[],
	hide:0,
  topinfo:{},
  inter:[],
  count:0,
  type:0,
	detail:'',
	finish1:[],
	finish2:[],
	finish3:[],
	info:{},
	pop1:0,
	pop:0,
	pop2:0,
	show1:0,
	show2:0,
	show3:0,

}
const mutations = {
	[GETJOBFACEBYSTATUS](state,data,info){
		 if (info.status==2) {
			 if (data.result.is_more==1) {
 		 	  		state.show1=1;
 		 	  }else{
 		 	  		state.show1=0;
 		 	  }
		 		if (info.page==1) {
		 			state.finish1 = data.result.list;
		 		}else{
		 			 state.finish1 = state.finish1.concat(data.result.list);
		 		}
		 }
		 if (info.status==3) {
		 	if (data.result.is_more==1) {
		 	  		state.show2=1;
		 	  }else{
		 	  		state.show2=0;
		 	  }
		 	  if (info.page==1) {
		 			state.finish2 = data.result.list;
		 		}else{
		 			 state.finish2 = state.finish2.concat(data.result.list);
		 		}
		 }
		 if (info.status==4) {
		 	if (data.result.is_more==1) {
		 	  		state.show3=1;
		 	  }else{
		 	  		state.show3=0;
		 	  }
		 	  if (info.page==1) {
		 			state.finish3 = data.result.list;
		 		}else{
		 			 state.finish3 = state.finish3.concat(data.result.list);
		 		}
		 }
	},
  [UPDATEINTERSTATUS](state,data,pramas){
  		if (data.code==0 && pramas.type==1) {
  			state.pop=1;
  		}
  		if (data.code==2) {
  			state.pop1=1;
  		}

  },
  [BOMB](state,info){
		state.pop = 1;
    state.info=info;
	},
	[LIMIT](state,info){
		state.pop2 = 1;
	},
	[ALERTOK](state,data){
		 state.pop1 = 0;
		 state.pop = 0;
		 state.pop2 = 0;
	},

}

export default {
	state,
	mutations
}
