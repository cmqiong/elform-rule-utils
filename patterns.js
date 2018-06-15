/**
 * 常用的验证规则库，用来 elementui form 中 rule 的验证
 * @type {{
     int: 正负整数,
     float: 正负整数|小数,
     email: Email,
     url: URL,
     domain: 域名,
     ip: IP,
     file: 文件名,
     identity: 15或18位身份证号码,
     postal: 邮政编码,
     zh: 中文,
     en: 英文,
     number: 数字,
     en_num: 英文|数字,
     password: 普通密码..6~16个字母|数字|下划线,
     password3: 密码强度3..8~16位同时包含大写|小写|数字|特殊字符,
     password2: 密码强度2..8~16位同时包含大写|小写|数字,
     password1: 密码强度1..6~16位同时包含字母|数字,
     phone: 11位手机号码,
     telephone: 普通电话|传真号码,
     zh_en_num_blank_hyphen: 中文|英文|数字|空格|短横,
     firstNotBlank: 首字母非空格
   }}
 */
import regExp from './regExp'

export function getRuleMap() {
  return {
    require: {
      required: true,
      message: '此字段为必填项'
    },
    int: {
      pattern: regExp.int,
      message: '只能输入正负整数'
    },
    float: {
      pattern: regExp.float,
      message: '只能输入正负整数或小数'
    },
    email: {
      pattern: regExp.email,
      message: '请输入正确的 email'
    },
    url: {
      type: regExp.url,
      message: '请输入正确的 url'
    },
    domain: {
      type: regExp.domain,
      message: '请输入正确的域名'
    },
    ip: {
      type: regExp.ip,
      message: '请输入正确的 IP 地址'
    },
    file: {
      type: regExp.file,
      message: '请输入正确的文件名'
    },
    identity: {
      pattern: regExp.identity,
      message: '请输入正确的身份证号码'
    },
    postal: {
      pattern: regExp.postal,
      message: '请输入正确的邮政编码'
    },
    zh: {
      pattern: regExp.zh,
      message: '只能输入中文'
    },
    en: {
      pattern: regExp.en,
      message: '只能输入英文'
    },
    number: {
      pattern: regExp.number,
      message: '只能输入数字'
    },
    en_num: {
      pattern: regExp.en_num,
      message: '只能输入英文或数字'
    },
    password: {
      pattern: regExp.password,
      message: '请输入6~16位字母、数字、下划线'
    },
    password1: {
      pattern: regExp.password1,
      message: '请输入6~16位字符，必须同时包含字母和数字'
    },
    password2: {
      pattern: regExp.password2,
      message: '请输入8~16位字符，必须同时包含大小写字母、数字'
    },
    password3: {
      pattern: regExp.password3,
      message: '请输入8~16位字符，必须同时包含大小字母、数字、特殊字符'
    },
    phone: {
      pattern: regExp.phone,
      message: '请输入正确的11位手机号码'
    },
    telephone: {
      pattern: regExp.telephone,
      message: '请输入正确的电话号码'
    },
    zh_en_num_blank_hyphen: {
      pattern: regExp.zh_en_num_blank_hyphen,
      message: '只能输入中英文、数字、空格、-，不支持其他特殊字符'
    },
    firstNotBlank: {
      pattern: regExp.firstNotBlank,
      message: '首位不能输入空格'
    }
  }
}
