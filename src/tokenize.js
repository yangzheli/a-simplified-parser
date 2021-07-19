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

// Read a single token
Parser.prototype.readToken = function () {
    while (this.pos < this.inputLen) {
        let ch = this.input[this.pos];

        if (Character.isIdentifierStart(ch)) this.readWord();
        else if (Character.isDecimalDigit(ch)) this.readNumber();
        else if (Character.isPunctuator(ch)) this.readPunctuator();
        else throw new TypeError(Errors.UnexpectedToken + ":" + ch);
    }
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

    if (Character.isKeyWord()) return { type: TokenTypes.Keyword, value: word };
    return { type: TokenTypes.Identifier, value: word };
}

// Read a single number
Parser.prototype.readNumber = function () {

}

// Read punctuators
Parser.prototype.readPunctuator = function() {
    let ch = this.input[this.pos];
    ++this.pos;
    return { type: TokenTypes.Punctuator, value: ch };
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