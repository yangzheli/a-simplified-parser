import { Parser } from './parser.js'
import { TokenTypes } from './type.js'

// Except the next token matches the specified punctuator
Parser.prototype.expectKeyword = function (value) {
  const token = this.nextToken();
  if (token.type !== TokenTypes.Punctuator || token.value !== value)
    throw new Error();
}

// Except the next token matches the specified keyword
Parser.prototype.expectKeyword = function (value) {
  const token = this.nextToken();
  if (token.type !== TokenTypes.Keyword || token.value !== value)
    throw new Error();
}

// Whether the next token matches the specified punctuator
Parser.prototype.match = function (value) {
  return this.lookahead.type === TokenTypes.Punctuator && this.lookahead.value === value;
}

// Consume a semicolon or see if it's allowed to insert a semicolon at the position
Parser.prototype.consumeSemicolon = function () {
  if (this.match(';'))
    this.nextToken();
  else if (this.canInsertSemicolon()) {
    if (this.lookahead.type !== TokenTypes.EOF) {
      throw new Error();
    }
  }
}

Parser.prototype.canInsertSemicolon = function () {
  return true;
}