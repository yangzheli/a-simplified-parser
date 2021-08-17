# 词法分析

## 单词类型

根据 [ECMA262](https://262.ecma-international.org/12.0/)，在识别单词时，会忽略字符序列中的 **空白符** (white space)、**行终止符** (line terminator) 和 **注释** (comment)。

::: tip
本文中涉及词法标准都来自 [ECMA262](https://262.ecma-international.org/12.0/)，强烈推荐阅读最新文档。
:::

[ECMA262](https://262.ecma-international.org/12.0/) 定义，单词类型可以大致分为：

![token type](@alias/lexical/token-type.png)

> The DivPunctuator, RegularExpressionLiteral, RightBracePunctuator, and TemplateSubstitutionTail productions derive additional tokens that are not included in the CommonToken production.


因此，可以将 ECMAScript 能够识别的单词类型归纳为：

* 数字 (number and bigint)；

* (广义上的) 标识符 (identifier and keyword)；

* 标点符号 (punctuator)；

* 字符串 (string)；

* 模板字符串 (template)；

* 正则表达式 (regexp)。


## 数字类型 (Numeric Literals)

> ECMAScript has two built-in numeric types: Number and BigInt.

`ES2020` 为支持更大范围的整数值，新增了 `bigint` 基本数据类型。

:::tip
包括 `bigint`，目前 `ES2021` 共有 8 中数据类型：`Undefined`，`Null`，`Boolean`，`String`，`Symbol`， `Number`， `BigInt` 和  `Object`。
:::

其中 `number` 和 `bigint` 又各自分为十进制 (Decimal)、二进制 (Binary)、八进制 (Octal)、十六进制 (Hex) 四类。

首先，来测试两个简单的例子 (示例为 Chrome 控制台输出):

* 非严格模式下

```javascript
>> 012
10

>> 079
79
```

* 严格模式下

```javascript
>> "use strict"
>> 012
"Uncaught SyntaxError: Unexpected number" 

>> 079
"Uncaught SyntaxError: Unexpected number"
```

> When processing strict mode code, must not extend the syntax of NumericLiteral to include LegacyOctalIntegerLiteral, nor extend the syntax of DecimalIntegerLiteral to include NonOctalDecimalIntegerLiteral.

因此，对于严格模式和非严格模式需要区分考虑。首先来分析严格模式下十进制数字 (DecimalLiteral) 的定义:

![decimal literal](@alias/lexical/decimal-literal.png)

可以看到，十进制数字由整数部分、小数部分和指数部分组成。

这三部分又有各自的定义：

* 整数部分

![decimal literal](@alias/lexical/decimal-integer-literal.png)

整数部分定义为数字 `0`，或数字 `1-9` 开头，数字 `0-9` 组成，数字之间可以插入单个分隔符 `_`。

* 小数部分

![decimal literal](@alias/lexical/decimal-digits.png)

小数部分定义为由数字 `0-9` 组成，数字之间可以插入单个分隔符 `_`。

* 指数部分

![decimal literal](@alias/lexical/exponent-part.png)

指数部分定义为由字符 `e/E` 开头，可选的符号位 `+/-`，数字 `0-9` 组成，数字之间可以插入单个分隔符 `_`。

`0-9` `e E` `+ -`，其中对于 `-12e+1` 中 `-` 应该额外当作一元运算符，而不把它和数字 `12e+1` 放在一起解析为一个单词。 

同时 `ES2021` 新增了 `_` 作为数字分隔符，因此 `1_200e+1_0` 也是合法的数字。

```javascript
>> 1_200e+1_0
12000000000000
```

```javascript
let pos = 0;

function readNumber(input) {
  input = String(input);
  let start = pos;

  // 整数部分
  if (readDecimalDigits(input) === null) throw new SyntaxError();
  if (pos - start >= 2 && input.charCodeAt(start) === 48) throw new SyntaxError();

  // 小数部分
  let code = input.charCodeAt(pos);
  if (code === 46) {  // .
    ++pos;
    if (readDecimalDigits(input) === null) throw new SyntaxError();
    code = input.charCodeAt(pos);
  }

  // 指数部分
  if (code === 69 || code === 101) {  // e/E
    code = input.charCodeAt(++pos);
    if (code === 43 || code === 45)++pos;  // +/-
    if (readDecimalDigits(input) === null) throw new SyntaxError();
  }

  input = input.slice(start, pos).replace(/_/g, "");
  let val = parseFloat(input);
  return val;
}

// DecimalDigits
function readDecimalDigits(input) {
  let total = 0, start = pos, lastCode = 0;
  for (let i = 0, len = input.length; pos < len; ++i, ++pos) {
    let code = input.charCodeAt(pos), val = 0;

    if (code === 95) {  // 分隔符_
      if (i === 0 || lastCode === 95) throw new SyntaxError();
      lastCode = code;
      continue;
    }

    if (code >= 48 && code <= 57) val = code - 48;  // 0-9
    else break;
    lastCode = code;
    total = total * 10 + val;
  }
  if (lastCode === 95) throw new SyntaxError();

  return start !== pos ? total : null;
}
```