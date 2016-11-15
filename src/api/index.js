import {TestResource} from './resources.js'
import Vue from 'vue'

export default{
	//c端
	// testMethod:function(data){
	// 	return TestResource.save({method:''},data)
	// },
	// getJobsList:function(data){
	// 	return TestResource.save({method:'User_Login'},data)
	// },
	showJobList:function(data){
		return TestResource.save({method:'resume_indexJobList'},data)
	},
	checkWxTalent:function(data){
		return TestResource.save({method:'resume_checkWxTalent'},data)
	},
	checkJobList:function(data){
		return TestResource.save({method:'resume_checkJobList'},data)
	},
	addWxTalent:function(data){
		return TestResource.save({method:'resume_addWxTalent'},data)
	},
	detailJobList:function(data){
		return TestResource.save({method:'resume_showJobList'},data)
	},
	showInterviewInfo:function(data){
		return TestResource.save({method:'resume_showInterviewInfo'},data)
	},
	addInterview:function(data){
		return TestResource.save({method:'resume_addInterview'},data)
	},




	login:function(data){
		return TestResource.save({method:'User_Login'},data)
	},
	showInterList:function(data){
		return TestResource.save({method:'resume_showInterList'},data)
	},
	getFaceResultList:function(data){
		return TestResource.save({method:'user_getFaceResultList'},data)
	},
	jobContent:function(data){
		return TestResource.save({method:'resume_jobContent'},data)
	},
	getIsOneFaceByJobId:function(data){
			return TestResource.save({method:'resume_getIsOneFaceByJobId'},data)
	},
	getOneFaceByJobId:function(data){
			return TestResource.save({method:'resume_getOneFaceByJobId'},data)
	},
	getJobFaceByStatus:function(data){
			return TestResource.save({method:'resume_getJobFaceByStatus'},data)
	},
	changeStatusToFacing:function(data){
			return TestResource.save({method:'resume_changeStatusToFacing'},data)
	},
	updateInterStatus:function(data){
		return TestResource.save({method:'resume_updateInterStatus'},data)
	},

// 签到
	wxCheckLoad:function(data){
		return TestResource.save({method:'resume_wxCheckLoad'},data)
	},
	wxSignIn:function(data){
		return TestResource.save({method:'resume_wxSignIn'},data)
	},

//顾问
	showAllInterList:function(data){
		return TestResource.save({method:'resume_showAllInterList'},data)
	},
	getJobContent:function(data){
		return TestResource.save({method:'resume_getJobContent'},data)
	},
	getAllFacing:function(data){
		return TestResource.save({method:'resume_getAllFacing'},data)
	},

 //日程
	getActivityList:function(data){
		return TestResource.save({method:'wechat_getActivityList'},data)
	},
	getJobList:function(data){
		return TestResource.save({method:'wechat_getJobList'},data)
	},
	getJobInfo:function(data){
		return TestResource.save({method:'wechat_getJobInfo'},data)
	},

	sharewx:function(data){
		return TestResource.save({method:'resume_sharewx'},data)
	},


}
