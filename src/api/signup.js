import jsonp from 'base/js/jsonp'
import {commonParams} from './config'

// 登录接口
export function apiSignup ($params) {
  const url = 'https://passport.emserve.cn/jsonp/login.json'
  const data = Object.assign({}, commonParams, $params)

  return jsonp(url, data)
}
