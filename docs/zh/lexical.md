# 词法分析

## 编码问题

JavaScript 采用的是 Unicode 字符集

[JavaScript has a Unicode problem](https://mathiasbynens.be/notes/javascript-unicode)

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