import StatementParser from "./statement.js"
import { Syntax } from "./Syntax.js"
import { TokenTypes } from "../tokenize/type.js"

export default class Parser extends StatementParser {
  constructor(input) {
    super(input)

    this.input = input

    this.inputLen = input.length

    // next token
    this.lookahead = null

    // The current position of the input
    this.pos = 0

    // Its start and end offset
    this.start = this.end = this.pos

    // The current line of the input
    this.line = 0

    // context
    this.context = {
      allowIn: true,  // 能否将 in 解析为操作符，例如在 for 语句中 in 不能被解析为操作符
      allowRegexp: true,
      hasLineTerminator: false,
      inFunction: false,
      labels: [],
      inTemplate: false
    }

    // esprima.js
    // Operator precedence
    this.operatorPrecedence = {
      ")": 0,
      ";": 0,
      ",": 0,
      "=": 0,
      "]": 0,
      "||": 1,
      "&&": 2,
      "|": 3,
      "^": 4,
      "&": 5,
      "==": 6,
      "!=": 6,
      "===": 6,
      "!==": 6,
      "<": 7,
      ">": 7,
      "<=": 7,
      ">=": 7,
      "<<": 8,
      ">>": 8,
      ">>>": 8,
      "+": 9,
      "-": 9,
      "*": 11,
      "/": 11,
      "%": 11
    }

    this.nextToken()
  }

  parseProgram() {
    const program = {
      type: Syntax.Program,
      body: this.parseSourceElements(),
      sourceType: "script"
    }
    return program
  }

  parseSourceElements() {
    let sourceElements = []

    while (this.lookahead.type != TokenTypes.EOF) {
      let sourceElement = this.parseStatement()
      sourceElements.push(sourceElement)
    }

    return sourceElements
  }
}