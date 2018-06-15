## elform-rule-utils
> 整合了一些常用的表单验证正则规则，返回 elementUI Form 的表单验证规则

## Installation
```
npm i elform-rule-utils
``` 

## Usage
.vue
```
import { getTransform as ruleEx } from 'elform-rule-utils'

// 使用
ruleEx('zh_en_num_blank_hyphen')

// 等价于
{ pattern: /^[\u4e00-\u9fa5a-zA-Z0-9\s-]+$/, message: '只能输入中英文、数字、空格、‘-’，不支持其他特殊字符', trigger: 'blur' }
```

单独使用正则库
```
import regExp from 'elform-rule-utils/regExp'

const testStr = 'I am a test **'
regExp.zh_en_num_blank_hyphen.test(testStr)      // false
```


## Extend patterns
** 注意：扩展规则必须要在使用它之前完成 **
```
import { extendRuleMap } from 'elform-rule-utils'

const extendPatterns = {
  firstNotBlank: {
    pattern: /^[^ ]+[\s\S]*/,
    message: '首位不能是空格'
  }
}

extendRuleMap(extendPatterns)
```