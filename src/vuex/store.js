// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const state = {
// 	// 设置启动状态
// 	count:0
// }

// const mutations = {
// 	INCREMENT(state,amount){
// 		state.count = state.count + amount
// 	}
// }

// export default new Vuex.Store({
// 	state,
// 	mutations
// })

import Vue from 'vue'
import Vuex from 'vuex'
import crement from './modules/crement.js'
import showjoblist from './modules/showjoblist.js'
import checkWxTalent from './modules/checkWxTalent.js'
import addWxTalent from './modules/addWxTalent.js'
import showInterList from './modules/showInterList.js'
import getFaceResultList from './modules/getFaceResultList.js'
import resumes from './modules/resumes.js'
import sign from './modules/sign.js'
import loading from './modules/loading.js'
import adviser from './modules/adviser.js'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	modules:{
		showjoblist,
		checkWxTalent,
		addWxTalent,
		showInterList,
		getFaceResultList,
		sign,
		loading,
		resumes,
		adviser
	}
})
