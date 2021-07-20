import { SyntaxTypes } from "./type.js"
import './statement.js'
import './tokenize.js'
import './utils.js'

export class Parser {
  constructor(input) {
    this.input = input;

    this.inputLen = input.length;

    // The current position of the input
    this.pos = 0;

    // The current line of the input
    this.line = 0;
  }
}

Parser.prototype.parseProgram = function () {
  const program = {
    type: SyntaxTypes.Program,
    body: this.parseSourceElements()
  };
  return program;
}

Parser.prototype.parseSourceElements = function () {
  let sourceElements = [];

  while (this.pos < this.inputLen) {
    this.skipSpace();
    let token = this.readToken();
    let sourceElement = this.parseStatement(token);
    sourceElements.push(token);
  }

  return sourceElements;
}