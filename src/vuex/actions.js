import * as type from "./type.js"
import api from "../api/index.js"

	//微信公众号C端岗位申请个人信息接口
	export const checkWxTalent = function({dispatch, state},info){
		api.checkWxTalent(info).then(response=>{
			if (response.data.code==13) {
				 router.go('/presign');
			}else{
				dispatch(type.CHECKWXTALENT,response.data)
			}
		},response=>{
			console.log("error");
		})
	}

	//微信公众号C端简历添加接口
	export const addWxTalent = function({dispatch, state},info){
		api.addWxTalent(info).then(response=>{
			 if(response.data.code == 0){
				 	router.go('/detail?id='+info.jobId);
			 }else{
				  dispatch(type.ADDWXTALENT,response.data.code)
			 }
			//  if(response.data.code == 1 ||response.data.code == 100 ||response.data.code == 101){
			// 	 	dispatch(type.ADDWXTALENT,response.data.code)
			//  }
		},response=>{
			console.log("error");
		})
	}

	export const enter = function({dispatch, state}){
		dispatch(type.ENTER);
	}

	export const updateInterStatus = function({dispatch, state},info,pramas){
		console.log(pramas);
		api.updateInterStatus({'face_id':info.face_id,'status':info.status}).then(response=>{
					if (response.data.code==0 && info.status==5 && pramas.type==1) {
						 router.go({name:'b_resume',query: { 'job_id': pramas.job_id}});
						 return;
					}
					if (response.data.code==0 && pramas.type==2) {
						 router.go('/b_jobs/offer/tbd');
						 return;
					}
					dispatch(type.UPDATEINTERSTATUS,response.data,pramas);
		},response=>{
			console.log("error");
		})
	}

 //顾问使用 列表
 export const showAllInterList = function({dispatch, state}){
	 showLoad({dispatch, state})
	 api.showAllInterList().then(response=>{
		  if (response.data.code==0) {
		  	 dispatch(type.SHOWALLINTERLIST,response.data)
		  }
			hideLoad({dispatch, state});
	},response=>{
		console.log("error");
		hideLoad({dispatch, state})
	})
 }

 //顾问使用 详情
 export const getJobContent = function({dispatch, state},info){
	 showLoad({dispatch, state})
	 api.getJobContent(info).then(response=>{
	 	 if (response.data.code==0) {
					dispatch(type.GETJOBCONTENT,response.data)
	 	 }
	 	 hideLoad({dispatch, state});
	 },response=>{
	  console.log("error");
	  hideLoad({dispatch, state})
	 })
 }


	//修正值
export const updateInfo = function({dispatch, state},val,info){
	dispatch(type.CHANGE,val,info)
}

export const bomb = function({dispatch, state},info){
	dispatch(type.BOMB,info)
}

export const alertOK = function({dispatch, state}){
	dispatch(type.ALERTOK)
}
export const sure = function({dispatch, state},info){

}
export const limit = function({dispatch, state}){
	dispatch(type.LIMIT)
}
export const exchange = function({dispatch, state},index){
	dispatch(type.EXCHANGE,index)
}

export const showLoad = ({dispatch}) => {
 	dispatch(type.SHOWLOAD);
}
export const hideLoad = ({dispatch}) => {
  	dispatch(type.HIDELOAD)
}
