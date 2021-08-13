import Tokenizer from "../tokenize/tokenize.js"
import { TokenTypes } from "../tokenize/type.js"

// Except the next token matches the specified punctuator
export default class UtilParser extends Tokenizer {
  expect(value) {
    const token = this.nextToken()
    if (token.type !== TokenTypes.Punctuator || token.value !== value)
      throw new Error()
  }

  // Except the next token matches the specified keyword
  expectKeyword(value) {
    const token = this.nextToken()
    if (token.type !== TokenTypes.Keyword || token.value !== value)
      throw new Error()
  }

  // Whether the next token matches the specified punctuator
  match(value) {
    return this.lookahead.type === TokenTypes.Punctuator && this.lookahead.value === value
  }

  // Whether the next token matches the specified keyword
  matchKeyword(value) {
    return this.lookahead.type === TokenTypes.Keyword && this.lookahead.value === value
  }

  // Whether the next token is an assignment operator
  matchAssign() {
    const op = this.lookahead.value
    return this.lookahead.type === TokenTypes.Punctuator &&
      (op === "=" || op === "+=" || op === "-=" || op === "*=" || op === "/=" ||
        op === "%=" || op === "&=" || op === "|=" || op === "^=" || op === "**=" ||
        op === "<<=" || op === ">>=" || op === ">>>=")
  }

  // Consume a semicolon or see if it's allowed to insert a semicolon at the position
  consumeSemicolon() {
    if (this.match(";")) this.nextToken()
    else if (!this.canInsertSemicolon()) throw new Error()
    // if (!this.match(';') && !this.canInsertSemicolon()) throw new Error();
  }

  canInsertSemicolon() {
    return this.lookahead.type === TokenTypes.EOF || this.lookahead.value === "}" || this.context.hasLineTerminator
  }
}