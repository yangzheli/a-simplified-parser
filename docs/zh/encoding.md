# JavaScript 字符编码

在进行词法分析时，字符编码问题是不可避免的。比如对于字符 `'😀'`，词法分析结果如下：

```javascript
[
    {
        "type": "String",
        "value": "'😀'"
    }
]
```

因此在词法分析之前，先来讨论一下 JavaScript 的字符编码规则。

## Unicode 字符集

> A conforming implementation of ECMAScript must interpret source text input in conformance with the latest version of the Unicode Standard and ISO/IEC 10646.

根据 [ECMA262](https://262.ecma-international.org/12.0/)，ECMAScript 采用的是 [Unicode](https://unicode.org/versions/latest) 字符集。

为涵盖世界上所有的字符，Unicode 字符共分为 17 个平面，每个平面包含 2^16 (65,536) 个码位 (code point)。其中 0 号平面称为基本平面 (BMP)，包含的码位从 `U+0000` 到 `U+FFFF`；剩余的 16 个平面称为辅助平面 (SMP)，包含的码位从 `U+010000` 到 `U+10FFFF`。

:::tip
目前 Unicode 13.0.0 包含 143,859 个字符。
:::

其中每个 Unicode 字符都有对应的码位，比如 `😀` 的码位为 `U+1F600`，可以在 [Unicode 13.0 Character Code Charts](https://www.unicode.org/charts/) 中找到每个码位对应的 Unicode 字符。

## Unicode 转义序列

## UCS-2 与 UTF-16 编码

```javascript
>> '\u270F'
'✏'
```

```javascript
>> '✏'.charCodeAt(0)
9999
```

```javascript
>> String.fromCharCode(9999)
'✏'
```

[emoji list](https://www.unicode.org/emoji/charts-13.0/emoji-list.html)

## 参考

[JavaScript has a Unicode problem](https://mathiasbynens.be/notes/javascript-unicode)

[Unicode与JavaScript详解](http://www.ruanyifeng.com/blog/2014/12/unicode.html)