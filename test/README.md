# 测试用例

大部分测试用例来自 [esprima](https://github.com/jquery/esprima/tree/main/test/fixtures)

- [Expression](#Expression)
  - [number](#number)
  - [string](#string)
  - [regexp](#regexp)
  - [array](#array)
  - [object](#object)
  - [other](#other)
- [Operator](#Operator)
  - [unary](#unary)
  - [binary](#binary)
  - [ternary](#ternary) 
  - [brace](#brace)
  - [bracket](#bracket) 
  - [parenthesis](#parenthesis)
  - [dot](#dot)
  - [semicolon](#semicolon)
  - [complex](#complex) 
- [Keyword](#Keyword)
  - [new](#new)
  - [var](#var)
  - [if](#if) 
  - [for](#for)
  - [do while](#do-while)
  - [switch case](#switch-case) 
  - [function](#function)
  
## Expression

### number

```javascript
0 .14 3.14159 0008 09 09.5  // 十进制
0x0 0xabc 0xdef 0X1A 0x10 0x100 0X04  // 十六进制
02 012 0012 // 八进制
// 二进制
6.02214179e+23 1.492417830e-10 0e+100 // 科学计数法
// ES2021 新特性，允许 _ 作为数字分隔符
``` 

### string

```javascript
"Hello"
"\n\r\t\v\b\f\\\'\"\0"
var source = '"\\u0061"';
"Hello\nworld"
"Hello\02World"
"Hello\012World"
"Hello\122World"
"Hello\0122World"
"Hello\312World"
"Hello\412World"
"Hello\712World"
"Hello\0World"
"Hello\1World"
```

### regexp

```javascript
// valid
/p/;
[/q/] 
var x = /[a-z]/i
var x = /[a-z]/y
var x = /[a-z]/u
var source = 'var x = /[\\u{0000000000000061}-\\u{7A}]/u';
var x = /[P QR]/i
var x = /[\]/]/
var x = /foo\/bar/
var x = /=([^=\s])+/g
var x = /42/g.test

// invalid
var source = 'var x = /\\u{110000}/u';
var x = /[\u0063-b]/u;
var x = /[\u{63}-b]/u;
```

### array

```javascript
x = []
x = [ ]
x = [ 42 ]
x = [ 42, ]
x = [ ,, 42 ]
x = [ 1, 2, 3, ]
x = [ 1, 2,, 3, ]
日本語 = []
var source = 'T\u203F = []';
var source = 'T\u200C = []';
var source = '\u2163\u2161\u200A=\u2009[]';
```

### object

```javascript
x = {}
x = { }
x = { answer: 42 }
x = { if: 42 }
x = { true: 42 }
x = { false: 42 }
x = { null: 42 }
x = { "answer": 42 }
x = { x: 1, x: 2 }
x = { get width() { return m_width } }
x = { get undef() {} }
x = { get if() {} }
x = { get true() {} }
x = { get false() {} }
x = { get null() {} }
x = { get "undef"() {} }
x = { get 10() {} }
x = { set width(w) { m_width = w } }
x = { set if(w) { m_if = w } }
x = { set true(w) { m_true = w } }
x = { set false(w) { m_false = w } }
x = { set null(w) { m_null = w } }
x = { set "null"(w) { m_null = w } }
x = { set 10(w) { m_null = w } }
x = { get: 42 }
x = { set: 43 }
```

### other 

```javascript
this 
null
  42
(1 + 2 ) * 3
```

## Operator

### unary 

一元运算符，包括 `++ --`

```javascript
x++
x--
eval++
eval--
arguments++
arguments--
++x
--x
++eval
--eval
++arguments
--arguments
+x
-x
~x
!x
void x
delete x
typeof x
```

### binary 

二元运算符，包括 `+ -`

```javascript
x + y
x - y
x * y
x / y
x % y
x << y
x >> y
x >>> y
x < y
x > y
x <= y
x >= y
x in y
x instanceof y
x < y < z
x == y
x != y
x === y
x !== y
x & y
x ^ y
x | y
x + y + z
x - y + z
x + y - z
x - y - z
x + y * z
x + y / z
x - y % z
x * y * z
x * y / z
x * y % z
x % y * z
x << y << z
x | y | z
x & y & z
x ^ y ^ z
x & y | z
x | y ^ z
x | y & z
x || y
x && y
x || y || z
x && y && z
x || y && z
x || y ^ z
x = 42
eval = 42
arguments = 42
x *= 42
x /= 42
x %= 42
x += 42
x -= 42
x <<= 42
x >>= 42
x >>>= 42
x &= 42
x ^= 42
x |= 42
```

### ternary 

三元运算符，包括 `?:`

```javascript
y ? 1 : 2
x && y ? 1 : 2
x = (0) ? 1 : 2
```

### brace 

大括号 - `{ }`

```javascript
{ foo }
{ doThis(); doThat(); }
{}
```

### bracket 

中括号 - `[ ]`

### parenthesis

圆括号 - `( )`

### dot 

句号 - `.`

```javascript
universe.milkyway
universe.milkyway.solarsystem
universe.milkyway.solarsystem.Earth
universe[galaxyName, otherUselessName]
universe[galaxyName]
universe[42].galaxies
universe(42).galaxies
universe(42).galaxies(14, 3, 77).milkyway
earth.asia.Indonesia.prepareForElection(2014)
universe.if
universe.true
universe.false
universe.null
```

### semicolon 

分号 - `;`

```javascript
;
```

### complex 

运算符组合

```javascript
a || b && c | d ^ e & f == g < h >>> i + j * k
```

## Keyword

### new 

```javascript
new Button
new Button()
new new foo
new new foo()
new foo().bar()
new foo[bar]
new foo.bar()
( new foo).bar()
```

### var

```javascript
var x
var await
var x, y;
var x = 42
var x = 4 * 2;
var eval = 42, arguments = 42
var x = 14, y = 3, z = 1977
var implements, interface, package
var private, protected, public, static
var x = /[a-z]/;
var x = /[a-z]/i;
var x = /foo\/bar/
var x = /=([^=\\s])+/g
var x /* comment */;
```

### if

```javascript
if (morning) goodMorning()
if (morning) (function(){})
if (morning) var x = 0;
if (morning) function a(){}
if (morning) goodMorning(); else goodDay()
if (true) that()\n; else;
if (true) that(); else;
```

### for

```javascript
for(;;);
for(;;){}
for(x = 0;;);
for(var x = 0;;);
for(var x = 0, y = 1;;);
for(x = 0; x < 42;);
for(x = 0; x < 42; x++);
for(x = 0; x < 42; x++) process(x);
for(x in list) process(x);
for (var x in list) process(x);
var x; for (x = 0 in list) process(x);
'use strict'; for (var x = 0 in list) process(x);
for (var [x] = 0 in list) process(x);
for (var {x} = 0 in list) process(x);
for (var x = 42 in list) process(x);
for (var x = 42 in list) process(x);
for (var i = function() { return 10 in [] } in list) process(x);
```

### do while

```javascript
do keep(); while (true)
do keep(); while (true);
do { x++; y--; } while (x < 10)
{ do { } while (false);false }
while (true) doSomething()
while (x < 10) { x++; y--; }
while (true) { continue; }
while (true) { continue }
done: while (true) { continue done }
done: while (true) { continue done; }
while (true) { break }
done: while (true) { break done }
done: while (true) { break done; }
while (true) { continue\nthere; }
while (true) { continue // Comment\nthere; }
while (true) { continue /* Multiline\nComment */there; }
while (true) { break\nthere; }
while (true) { break // Comment\nthere; }
while (true) { break /* Multiline\nComment */there; }
```

### switch case

### function

```javascript
function hello() { sayHi(); }
function eval() { }
function arguments() { }
function test(t, t) { }
(function test(t, t) { })
function eval() { function inner() { "use strict" } }
function hello(a) { sayHi(); }
function hello(a, b) { sayHi(); }
function hello(...rest) { }
function hello(a, ...rest) { }
var hi = function() { sayHi() };
var hi = function (...r) { sayHi() };
var hi = function eval() { };
var hi = function arguments() { };
var hello = function hi() { sayHi() };
(function(){})
```