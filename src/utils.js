import { Parser } from './parser.js'
import { TokenTypes } from './type.js'
import { Character } from './character.js'

// Except the next token matches the specified punctuator
Parser.prototype.expect = function (value) {
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

// Whether the next token matches the specified keyword
Parser.prototype.matchKeyword = function (value) {
  return this.lookahead.type === TokenTypes.Keyword && this.lookahead.value === value;
}

// Whether the next token is an assignment operator
Parser.prototype.matchAssign = function () {
  const op = this.lookahead.value;
  return this.lookahead.type === TokenTypes.Punctuator &&
    (op === '=' || op === '+=' || op === '-=' || op === '*=' || op === '/=' ||
      op === '%=' || op === '&=' || op === '|=' || op === '^=' || op === '**=' ||
      op === '<<=' || op === '>>=' || op === '>>>=');
}

// Consume a semicolon or see if it's allowed to insert a semicolon at the position
Parser.prototype.consumeSemicolon = function () {
  if (this.match(';')) this.nextToken();
  else if (!this.canInsertSemicolon()) throw new Error();
  // if (!this.match(';') && !this.canInsertSemicolon()) throw new Error();
}

Parser.prototype.canInsertSemicolon = function () {
  return this.lookahead.type === TokenTypes.EOF || this.lookahead.value === '}' || Character.isLineTerminator(this.lookahead);
}