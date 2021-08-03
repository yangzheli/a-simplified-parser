import { SyntaxTypes, TokenTypes } from "./type.js"

export class Parser {
  constructor(input) {
    this.input = input;

    this.inputLen = input.length;

    // next token
    this.lookahead = null;

    // The current position of the input
    this.pos = 0;

    // Its start and end offset
    this.start = this.end = this.pos;

    // The current line of the input
    this.line = 0;

    // context
    this.context = {
      allowRegexp: true
    }

    // esprima.js
    // Operator precedence
    this.operatorPrecedence = {
      ')': 0,
      ';': 0,
      ',': 0,
      '=': 0,
      ']': 0,
      '||': 1,
      '&&': 2,
      '|': 3,
      '^': 4,
      '&': 5,
      '==': 6,
      '!=': 6,
      '===': 6,
      '!==': 6,
      '<': 7,
      '>': 7,
      '<=': 7,
      '>=': 7,
      '<<': 8,
      '>>': 8,
      '>>>': 8,
      '+': 9,
      '-': 9,
      '*': 11,
      '/': 11,
      '%': 11
    };

    this.nextToken();
  }
}

Parser.prototype.parseProgram = function () {
  const program = {
    type: SyntaxTypes.Program,
    body: this.parseSourceElements(),
    sourceType: 'script'
  };
  return program;
}

Parser.prototype.parseSourceElements = function () {
  let sourceElements = [];

  while (this.lookahead.type != TokenTypes.EOF) {
    let token = this.lookahead;
    let sourceElement = this.parseStatement(token);
    sourceElements.push(sourceElement);
  }

  return sourceElements;
}