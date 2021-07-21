import { SyntaxTypes } from "./type.js"

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
    let token = this.readToken();
    let sourceElement = this.parseStatement(token);
    sourceElements.push(sourceElement);
  }

  return sourceElements;
}