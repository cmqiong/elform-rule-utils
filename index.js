
import { getRuleMap } from './patterns'
const ruleMap = getRuleMap()

/**
 * 扩展 ruleMap
 * @param obj rule 规则，具体格式详见 ruleUtil.js
 */
export function extendRuleMap(obj = {}) {
  Object.assign(ruleMap, obj)
}

/**
 * rule 转换格式
 * 使用示例: getTransform('require', '此字段为必填项！', 'blur')
 * 返回: { require: true, message: '此字段为必填项', trigger: 'blur' }
 *
 * @param type 必填
 * @param message 选填，默认 ruleMap 对应的的 message
 * @param trigger 选填，默认 blur
 * @returns {{}}
 */
export function getTransform(type, message, trigger) {
  let oldContent = {}
  // 参数为字符串，则匹配 ruleMap 的规则
  if (Object.prototype.toString.call(type) === '[object String]' && ruleMap[type]) {
    oldContent = ruleMap[type]
    message && (oldContent.message = message)
    trigger && (oldContent.triangle = trigger)
    return oldContent
  } else {
    console.log(`找不到该参数对应的rule规则: ${type}`)
    return
  }
}
