import Vue from 'vue'
import VueResource from "vue-resource"
import {API_ROOT} from '../config'

Vue.use(VueResource);

// http相关
Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = {withCredentials:true}
Vue.http.options.emulateJSON = true;

Vue.http.interceptors.push({
	request (request) {
    // 这里对请求体进行处理
    request.headers = request.headers || {}
    // if (getCookie('token')) {
    //   request.headers.Authorization = 'Bearer ' + getCookie('token').replace(/(^\")|(\"$)/g, '')
    // }
    return request
  	},
	response (response) {
       // 这里可以对响应的结果进行处理
      // if (response.status === 401) {
      //   signOut()
      //   window.location.pathname = '/login'
      // }
    return response
	}
})

export const TestResource = Vue.resource(API_ROOT + '{method}')
