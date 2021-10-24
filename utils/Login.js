//引入类
import cache from "./Cache.js";
import Http from "./Http.js";
const http = new Http;

//获取token
function getToken()
{
  http.httpReq({
    url: 'http://www.ziroom.cc/api/login',
    method: 'POST',
    data: {'username': 'admin', 'password': 'admin'}
  }).then(({data}) => {
    cache.set('token', data.token);
    this.wxLogin(data.token);
  });
}

//判断是否登录
function checkLogin() {
  if (!cache.has('openid')) {
    if (!cache.has('token')) {
      this.getToken();
    } else {
      this.wxLogin(cache.get('token'));
    }
  }
}

//登录
function wxLogin(token) {
  wx.login({
    timeout: 2000,
    success: ({code}) => {
      wx.request({
        url: 'http://www.ziroom.cc/api/v1/wxlogin',
        data: {code},
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        success: ({data}) => {
          //openid写入缓存
          cache.forever('openid', data.openid);
        }
      })
    }
  });
}

module.exports = {
  getToken: getToken,
  wxLogin: wxLogin,
  checkLogin: checkLogin
}