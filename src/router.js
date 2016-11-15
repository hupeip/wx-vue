export function configRouter (router) {
	router.map({
		/*-------- c端路由-----------*/
		"/jobs":{
			name:"jobs",
			component:function(resolve){
				require(['./components/c/job_list/jobList.vue'], resolve);
			},
			subRoutes: {
				'/list': {
					name:"list",
					component:function(resolve){
						require(['./components/c/job_list/list.vue'], resolve);
					}
				},
				'/offer': {
					component:function(resolve){
						require(['./components/c/job_list/offer.vue'], resolve);
					}
				}
			}
		},//end jobs
		'/detail': {
			name:"detail",
			component:function(resolve){
				require(['./components/c/job_detail/job_detail.vue'], resolve);
			}
		},
		'/apply': {
			name:"apply",
			component:function(resolve){
				require(['./components/c/apply/apply.vue'], resolve);
			}
		},

		/*-------- B端路由-----------*/
		"/login":{
			name:"login",
			component:function(resolve){
				require(['./components/b/login/login.vue'], resolve);
			}
		},
		"/b_jobs":{
			name:"b_jobs",
			component:function(resolve){
				require(['./components/b/b_job_list/b_list.vue'], resolve);
			},
			subRoutes: {
				'/list': {
					component:function(resolve){
						require(['./components/b/b_job_list/list.vue'], resolve);
					}
				},
				'/offer': {
					component:function(resolve){
						require(['./components/b/b_job_offer/b_offer.vue'], resolve);
					},
					subRoutes:{
						'':{
							component:function(resolve){
								require(['./components/b/b_job_offer/agree.vue'], resolve);
							}
						},
						'/agree':{
							component:function(resolve){
								require(['./components/b/b_job_offer/agree.vue'], resolve);
							}
						},
						'/fire':{
							component:function(resolve){
								require(['./components/b/b_job_offer/fire.vue'], resolve);
							}
						},
						'/tbd':{
							name:"tbd",
							component:function(resolve){
								require(['./components/b/b_job_offer/tbd.vue'], resolve);
							}
						},
					}
				}
			}
	},//end b_jobs
	"/b_detail":{
		name:"b_detail",
		component:function(resolve){
			require(['./components/b/b_job_detail/bDetail.vue'], resolve);
		}
	},
	"/b_resume":{
		name:"b_resume",
		component:function(resolve){
			require(['./components/b/resume/resume.vue'], resolve);
		}
	},
	"/b_offerdetail":{
		name:"b_offerdetail",
		component:function(resolve){
			require(['./components/b/b_job_offer/offerdetail.vue'], resolve);
		}
	},
	 /********************签到路由*************************/
	 "/presign":{
 		name:"presign",
 		component:function(resolve){
 			require(['./components/c/signIn/presign.vue'], resolve);
 		}
 	},
	"/signinit":{
		name:"signinit",
		component:function(resolve){
			require(['./components/c/signIn/signinit.vue'], resolve);
		}
	},
	"/signSuccess":{
		name:"signSuccess",
		component:function(resolve){
			require(['./components/c/signIn/signSuccess.vue'], resolve);
		}
	},
	"/nowsign":{
 		name:"nowsign",
 		component:function(resolve){
 			require(['./components/c/signIn/nowsign.vue'], resolve);
 		}
 	},

	/********************顾问路由*************************/
	"/adviser":{
 		name:"adviser",
 		component:function(resolve){
 			require(['./components/adviser/jobList.vue'], resolve);
 		}
 	},
	'adviserDetail':{
		name:"adviserDetail",
		component:function(resolve){
			require(['./components/adviser/adviserDetail.vue'], resolve);
		}
	},


	/********************招聘日程路由*************************/
	'proList':{
		name:"proList",
		component:function(resolve){
			require(['./components/c/programme/prolist.vue'], resolve);
		}
	},

})
}
