import jsonp from 'base/js/jsonp'
import {commonParams, $URL, options} from './config'

// 获取热门城市接口
export function apiGetHotCityList ($params) {
  const url = $URL + 'flight/booking/cityList.json'
  const data = Object.assign({}, commonParams, $params)

  return jsonp(url, data, options)
}

// 获取航班列表
/*
* $params[fromCityCode] 出发城市code
* $params[toCityCode]   到达城市code
* $params[fromDate]     出发时间
* $params[sort]         时间和价格排序方式  默认为从早到晚:date_early 价格从低到高price_down
* $params[code]         F:头等舱   C:公务舱     Y:经济舱
* $params[isFilter]     差旅政策航班是否勾选
* */
export function apiGetFightList ($params) {
  const url = $URL + 'flight/search/flightQuery.json'
  const data = Object.assign({}, commonParams, $params)

  return jsonp(url, data)
}
