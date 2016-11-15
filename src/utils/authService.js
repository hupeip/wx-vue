//写cookies
export function setCookie(name, value) {
    var Days = 365;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    //var exp = new Date();
    //exp.setHours(exp.getHours() + 1);
	//alerter(exp.toGMTString())
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
export function setCookieClose(name, value) {
    document.cookie = name + "=" + escape(value) + ";path=/";
}
//读取cookies
export function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}
//删除cookies
export function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}
