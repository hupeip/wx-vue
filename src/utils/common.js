import * as cookies from './authService.js'

export function getPersonOpenid(url) {
  if (!cookies.getCookie('openid')) {
  	window.location.href=url;
  }
  let openId = cookies.getCookie('openid');
  // let openId = 'oQcb8s-lC2_nieV_Ex5OqHolJ4n0';
  return openId;
}
