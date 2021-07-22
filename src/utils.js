import { Parser } from './parser.js'
import { TokenTypes } from './type.js'

// Whether the next token matches the specified punctuator
Parser.prototype.match = function (value) {
  return this.lookahead.type === TokenTypes.Punctuator && this.lookahead.value === value;
}

// Consume a semicolon or see if it's allowed to insert a semicolon at the position
Parser.prototype.consumeSemicolon = function () {
  if (!this.match(';') && !this.canInsertSemicolon()) throw new Error();
}

Parser.prototype.canInsertSemicolon = function () {
  return true;
}