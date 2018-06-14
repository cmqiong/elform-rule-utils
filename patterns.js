/**
 * 常用的验证规则库，用来 elementui form 中 rule 的验证
 * Created by cmq on 2018/6/14
 */
export function getRuleMap() {
  return {
    require: {
      required: true,
      message: '此字段为必填项'
    },
    number: {
      pattern: /^[0-9]*$/,
      message: '只能输入数字'
    },
    phone: {
      pattern: /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/,
      message: '请输入正确的手机号码'
    },
    email: {
      type: 'email',
      message: '请输入正确的 email'
    },
    url: {
      type: 'url',
      message: '请输入正确的 url'
    },
    identity: {
      pattern: /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/,
      message: '请输入正确的身份证号码'
    },
    // 中国邮政编码为6位数字
    postal: {
      pattern: /[1-9]\d{5}(?!\d)/,
      message: '请输入正确的邮政编码'
    },
    firstNotBlank: {
      pattern: /^[^ ]+[\s\S]*/,
      message: '首位不能是空格'
    },
    zh_en_num_blank_hyphen: {
      pattern: /^[\u4e00-\u9fa5a-zA-Z0-9\s-]+$/,
      message: '只能输入中英文、数字、空格、‘-’，不支持其他特殊字符'
    }
  }
}
