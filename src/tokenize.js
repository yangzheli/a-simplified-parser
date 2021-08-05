import { Parser } from './parser.js'
import { Character } from './character.js'
import { TokenTypes, SyntaxTypes } from './type.js'
import { Errors } from './error.js'

/**
 * Token
 */
export class Token {
    constructor() {
        // The type of token
        this.type;

        // The value of token
        this.value;

        // The location of token in the input
        this.loc = {
            start: {
                line: 1,
                column: 0
            },
            end: {
                line: 1,
                column: 4
            }
        }

    }
}

// Called at the end of every token
Parser.prototype.finishToken = function (type, value, regex) {
    this.end = this.pos;
    const raw = this.input.slice(this.start, this.end);

    // 标点符号或者关键字是否为前缀
    if (value === '++' || value === '--' || value === '+' ||
        value === '-' || value === '!' || value === '~' ||
        value === 'typeof' || value === 'void' || value === 'delete')
        return { type: type, value: value, raw: raw, prefix: true };

    // 正则表达式
    if (regex)
        return { type: type, value: value, raw: raw, regex: regex }

    return { type: type, value: value, raw: raw };
}

// Get next token
Parser.prototype.nextToken = function () {
    let token = this.lookahead;
    this.skipSpace();
    let next = this.readToken();
    this.lookahead = next;
    return token;
}

// Read a single token
Parser.prototype.readToken = function () {
    if (this.pos >= this.inputLen) return { type: TokenTypes.EOF };

    this.start = this.pos;

    let ch = this.input[this.pos];

    let token = this.readPunctuator();
    if (token) return token;

    if (Character.isIdentifierStart(ch)) return this.readWord();

    if (ch === '\.' || Character.isDecimalDigit(ch)) return this.readNumber();

    if (ch === '\'' || ch === '\"') return this.readString();

    throw new TypeError(Errors.UnexpectedToken + ":" + ch);
}

// Read a single word
Parser.prototype.readWord = function () {
    let start = this.pos;
    while (this.pos < this.inputLen) {
        let ch = this.input[this.pos];
        if (Character.isIdentifierPart(ch))++this.pos;
        else break;
    }
    let word = this.input.slice(start, this.pos);

    if (Character.isKeyWord(word)) return this.finishToken(TokenTypes.Keyword, word);
    else if (word === 'true' || word === 'false') return this.finishToken(TokenTypes.BooleanLiteral, Boolean(word));
    else if (word === 'null') return this.finishToken(TokenTypes.NullLiteral, word);
    return this.finishToken(TokenTypes.Identifier, word);
}

// Read a single number
Parser.prototype.readNumber = function () {
    let start = this.pos, ch = this.input[this.pos];
    let number = '';

    if (ch !== '\.') {
        // Non decimal number
        // Hex number starts with '0x' or '0X'
        // Octal number starts with '0' '0o' or '0O'
        // Binary number starts with '0b' or '0B'
        if (ch === '0') {
            number += this.input[this.pos++];
            ch = this.input[this.pos];
            if (ch === 'x' || ch === 'X') { // Hex number
                number += this.input[this.pos++];
                while (this.pos < this.inputLen) {
                    ch = this.input[this.pos];
                    if (!Character.isHexDigit(ch)) {
                        break;
                    }
                    number += this.input[this.pos++];
                }
                return this.finishToken(TokenTypes.NumericLiteral, parseInt(number, 16));
            } else if (ch === 'o' || ch === 'O' || Character.isOctalDigit(ch)) {   // Octal number
                if (ch === 'o' || ch === 'O') {
                    number += this.input[this.pos++];
                }
                while (this.pos < this.inputLen) {
                    ch = this.input[this.pos];
                    if (!Character.isOctalDigit(ch)) {
                        break;
                    }
                    number += this.input[this.pos++];
                }
                return this.finishToken(TokenTypes.NumericLiteral, parseInt(number, 8));
            } else if (ch === 'b' || ch === 'B') {   // Binary number
                number += this.input[this.pos++];
                while (this.pos < this.inputLen) {
                    ch = this.input[this.pos];
                    if (!Character.isBinaryDigit(ch)) {
                        break;
                    }
                    number += this.input[this.pos++];
                }
                return this.finishToken(TokenTypes.NumericLiteral, parseInt(number, 2));
            }

            if (Character.isDecimalDigit(ch)) {
                throw new Error();
            }
        }

        // Decimal number
        while (this.pos < this.inputLen) {
            ch = this.input[this.pos];
            if (!Character.isDecimalDigit(ch)) {
                break;
            }
            number += this.input[this.pos++];
        }
    }

    if (ch === '\.') {
        number += this.input[this.pos++];
        while (this.pos < this.inputLen) {
            ch = this.input[this.pos];
            if (!Character.isDecimalDigit(ch)) {
                break;
            }
            number += this.input[this.pos++];
        }
    }

    if (ch === 'e' || ch === 'E') {
        number += this.input[this.pos++];
        ch = this.input[this.pos];
        if (ch === '+' || ch === '-') {
            number += this.input[this.pos++];
        }
        while (this.pos < this.inputLen) {
            ch = this.input[this.pos];
            if (!Character.isDecimalDigit(ch)) {
                break;
            }
            number += this.input[this.pos++];
        }
    }

    return this.finishToken(TokenTypes.NumericLiteral, parseFloat(number));
}

// Read s string
Parser.prototype.readString = function () {
    let quote = this.input[this.pos++];
    let str = '';
    while (this.pos < this.inputLen) {
        let ch = this.input[this.pos++];
        if (ch === quote) {
            quote = '';
            break;
        }
        else if (ch === '\\') {
            str += this.readEscapedChar();
        } else {
            str += ch;
        }
    }

    if (quote !== '') throw new Error();

    return this.finishToken(TokenTypes.StringLiteral, str);
}

// 转义字符
Parser.prototype.readEscapedChar = function () {
    // 八进制转义字符
    let octal = /^[0-7]{1,3}/.exec(this.input.slice(this.pos));
    if (octal) {
        octal = octal[0];
        if (octal !== '0') {
            // 八进制 Unicode 取值范围为 0 - 255
            if (parseInt(octal, 8) > 255) octal = octal.slice(0, -1);
            this.pos += octal.length;
            return String.fromCharCode(parseInt(octal, 8));
        }
    }

    let ch = this.input[this.pos++];
    switch (ch) {
        case 'b':
            return '\b';
        case 'f':
            return '\f';
        case 'n':
            return '\n';
        case 'r':
            return '\r';
        case 't':
            return '\t';
        case 'v':
            return '\u000b';
        case '0':
            return '\0';
        case '\'':
            return '\'';
        case '\"':
            return '\"';
        case '\\':
            return '\\';
        default:
            return String.fromCharCode(ch);
    }
}

// Read punctuators
Parser.prototype.readPunctuator = function () {
    let ch = this.input[this.pos];

    if (ch === '/' && this.context.allowRegexp) {
        ++this.pos;
        return this.readRegexp();
    }

    if (ch === '{' || ch === '}' || ch === '(' || ch === ')' || ch === ';' || ch === ',') {
        ++this.pos;
        return this.finishToken(TokenTypes.Punctuator, ch);
    }

    let ch2 = this.input[this.pos + 1];
    if (ch === '\.' && !Character.isDecimalDigit(ch2)) {
        ++this.pos;
        return this.finishToken(TokenTypes.Punctuator, ch);
    }

    // 4-character punctuators
    let str = this.input.substr(this.pos, 4);
    if (str === '>>>=') {
        this.pos += 4;
        return this.finishToken(TokenTypes.Punctuator, str);
    }

    // 3-character punctuators
    str = str.substr(0, 3);
    if (str === '===' || str === '!==' || str === '>>>' || str === '<<=' || str === '>>=' || str === '**=') {
        this.pos += 3;
        return this.finishToken(TokenTypes.Punctuator, str);
    }

    // 2-character punctuators
    str = str.substr(0, 2);
    if (str === '&&' || str === '||' || str === '==' || str === '!=' || str === '+=' || str === '-=' ||
        str === '*=' || str === '/=' || str === '++' || str === '--' || str === '<<' || str === '>>' ||
        str === '&=' || str === '|=' || str === '^=' || str === '%=' || str === '<=' || str === '>=' ||
        str === '=>' || str === '**') {
        this.pos += 2;
        return this.finishToken(TokenTypes.Punctuator, str);
    }

    // 1-character punctuators
    if ('[]<>+-*%&|^!~?:=/'.indexOf(ch) !== -1) {
        ++this.pos;
        return this.finishToken(TokenTypes.Punctuator, ch);
    }
}

// Read a regular expression. Some context-awareness is necessary.
// Since a '/' inside a '[]' set does not end the expression.
Parser.prototype.readRegexp = function () {
    let start = this.pos;
    let isEscape = false, inClass = false;
    while (this.pos < this.inputLen) {
        let ch = this.input[this.pos];
        if (!isEscape) {
            if (ch === '[') inClass = true;
            else if (ch === ']' && inClass) inClass = false;
            else if (ch === '/' && !inClass) break;
            isEscape = ch === '\\';
        } else isEscape = false;
        ++this.pos;
    }
    let pattern = this.input.slice(start, this.pos++);

    // Read the regular expression flags
    const validFlags = /^[gimsuy]*$/;
    let flags = this.readWord().value;
    if (!validFlags.test(flags)) throw new Error();

    let reg = null;
    try {
        reg = new RegExp(pattern, flags);
    } catch (err) {
        throw new Error();
    }
    reg = String(reg);

    const regex = {
        pattern: pattern,
        flags: flags
    };
    return this.finishToken(TokenTypes.RegexpLiteral, reg, regex);
}

// Called at the start of the parse and after every token.
// Skips whitespace and comments.
Parser.prototype.skipSpace = function () {
    while (this.pos < this.inputLen) {
        let ch = this.input[this.pos], next = this.input[this.pos + 1];
        if (Character.isWhiteSpace(ch))++this.pos;
        else if (Character.isLineTerminator(ch)) this.skipLineTerminator();
        else if (ch === '/' && next === '/') this.skipLineComment();
        else if (ch === '/' && next === '*') this.skipBlockComment();
        else break;
    }
}

// Skips line terminator
Parser.prototype.skipLineTerminator = function () {
    ++this.pos;
    ++this.line;
}

// Skips single line comments
Parser.prototype.skipLineComment = function () {
    while (this.pos < this.inputLen && !Character.isLineTerminator(this.input[this.pos])) {
        ++this.pos;
    }
}

// Skips multiline comments
Parser.prototype.skipBlockComment = function () {
    let end = this.input.indexOf("*/", this.pos += 2);
    if (end === -1) throw new TypeError(Errors.UnterminatedComment);
    this.pos = end + 2;
}