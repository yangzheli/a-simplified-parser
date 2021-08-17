# 词法分析

## 识别单词

空白符 (white space) 

注释 (comment)

行终止符 (line terminator)



[ECMA-262 12th Edition](https://262.ecma-international.org/12.0/)

标识符 (identifier)

标点符号 (punctuator)

null

boolean

numeric(number bigint)

string

regexp

template


## 数字类型 (Numeric Literals)

::: tip
本文中涉及词法标准都来自 [ECMA262](https://262.ecma-international.org/12.0/)，强烈推荐阅读最新文档。
:::

> ECMAScript has two built-in numeric types: Number and BigInt.

`ES2020` 为支持更大范围的整数值，新增了 `bigint` 基本数据类型。

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

`ECMA262` 标准

> When processing strict mode code, must not extend the syntax of NumericLiteral to include LegacyOctalIntegerLiteral, nor extend the syntax of DecimalIntegerLiteral to include NonOctalDecimalIntegerLiteral.

因此，对于严格模式和非严格模式需要区分考虑。首先来分析严格模式下十进制数字 (DecimalLiteral) 的定义:

![decimal literal](@alias/lexical/decimal-literal.png)

可以看到，十进制数字由整数部分、小数部分和指数部分组成。

`0-9` `e E` `+ -`，其中对于 `-12e+1` 中 `-` 应该额外当作一元运算符，而不把它和数字 `12e+1` 放在一起解析为一个单词。 

同时 `ES2021` 新增了 `_` 作为数字分隔符，因此 `1_200e+1_0` 也是合法的数字。

```javascript
>> 1_200e+1_0
12000000000000
```

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

为了更直观表示十进制数字，可以用确定有限状态自动机 (DFA) 来进行表示：

显然，可以轻易将上述 DFA 翻译为代码：

```javascript
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


## 基本思路

1. 使用 while 循环将输入解析为一个个 token (单词)，对于不同的 token，进行不同的处理

(注意: 输入可能包含非 ASCII 编码的字符，需要考虑在内)

- token 为"标识符" (当 token 为"标识符"时，需要进行额外判断，因为该"标识符"可能是 ECMAScript 的关键字或保留字，代表完全不同的含义)

  - token 为关键字或保留字，对不同关键字进行不同处理 (比如 token 为 `if` 就当作 `if` 语句处理)

  - token 为标识符，返回

- token 为数字，返回 (数字中可能包含 `+ - .`)

- token 为字符串，返回 (JavaScript 字符串是由单引号或双引号括起来的字符序列)

- token 为正则表达式

- token 为`[ ] { } ( ) , ; : . ? => ...` 等一系列标点符号，它们中一部分是运算符

  - token 为运算符，运算符可以用于算术、赋值等表达式中，运算符的执行顺序依照运算符的优先级，JavaScript 运算符有 `++ -- - + ~ | delete typeof void * / % + - + << >> >>> < <= > >= instanceof in == != === !== & ^ | && || ?: = *= /= %= += -= &= ^= |= <<= >>= >>>= ,`

  - token 为注释 `// /**/`，解析时需要忽略注释信息

  - `[ ] { } ( ) ;`

- 其他，返回错误信息

2. token 为关键字

以 var 为例

- 多变量声明，用 `,` 隔开

- 变量赋值，`=` 右侧为表达式