import { Parser } from './parser.js'
import { TokenTypes } from './type.js'
import * as Node from './node.js'

Parser.prototype.parseStatement = function (token) {
  let type = token.type, value = token.value;
  if (type === TokenTypes.EOF) return;

  if (type === TokenTypes.Punctuator) {
    switch (value) {
      case ';':
        return;
      case '{':
        return;
      case '(':
        return;
      default:
        break;
    }
  }

  if (type === TokenTypes.Keyword) {
    switch (value) {
      case 'break':
        return this.parseBreakStatement();
      case 'function':
        return this.parseFunctionStatement();
      case 'return':
        return this.parseReturnStatement();
      case 'switch':
      case 'case':
        return this.parseSwitchCaseStatement();
      case 'Do':
      case 'While':
        return this.parseDoWhileStatement();
      case 'var':
        return this.parseVarStatement();
      case 'catch':
        return this.parseCatchStatement();
      case 'for':
      case 'in':
        return this.parseForInStatement();
      case 'this':
        return this.parseThisStatement();
      case 'continue':
        return this.parseContinueStatement();
      case 'throw':
        return this.parseThrowStatement();
      case 'debugger':
        return this.parseDebuggerStatement();
      case 'new':
        return this.parseNewStatement();
      case 'with':
        return this.parseWithStatement();
      case 'for':
        return this.parseForStatement();
      case 'try':
      case 'catch':
      case 'finally':
        return this.parseTryStatement();
      default:
        break;
    }
  }

  // If the statement does not start with a keyword or a brace, 
  // it's an ExpressionStatement or LabeledStatement.
  return this.parseExpressionStatement(token);
}



// Break statement
Parser.prototype.parseBreakStatement = function () {

}

// Function declaration
Parser.prototype.parseFunctionStatement = function () {

}

// Return statement 
Parser.prototype.parseReturnStatement = function () {

}

// Switch case statement
Parser.prototype.parseSwitchCaseStatement = function () {

}

// Do while statement
Parser.prototype.parseDoWhileStatement = function () {

}

// Variable declaration
Parser.prototype.parseVarStatement = function () {
  const declarations = this.parseVarList();

  this.consumeSemicolon();

  return new Node.VariableDeclaration(declarations, 'var');
}

// Catch statement
Parser.prototype.parseCatchStatement = function () {

}

// For in statement
Parser.prototype.parseForInStatement = function () {

}

// This statement
Parser.prototype.parseThisStatement = function () {

}

// Continue statement
Parser.prototype.parseContinueStatement = function () {

}

// throw statement
Parser.prototype.parseThrowStatement = function () {

}

// Debugger statement
Parser.prototype.parseDebuggerStatement = function () {

}

// New statement
Parser.prototype.parseNewStatement = function () {

}

// With statement
Parser.prototype.parseWithStatement = function () {

}

// For statement
Parser.prototype.parseForStatement = function () {

}

// Try catch finally statement
Parser.prototype.parseTryStatement = function () {

}

// Expression statement
Parser.prototype.parseExpressionStatement = function (token) {
  let expr = this.parseExpression();
  if (token.type === TokenTypes.StringLiteral) return new Node.Directive(expr, token.raw.slice(1, -1));
  return new Node.ExpressionStatement(expr);
}


// Parse a list of variable declarations
Parser.prototype.parseVarList = function () {
  this.expectKeyword('var');

  let declarations = [];

  declarations.push(this.parseVar());
  while (this.match(',')) {
    this.nextToken();
    declarations.push(this.parseVar());
  }

  return declarations;
}

// parse a single variable declaration
Parser.prototype.parseVar = function () {
  let init = null;
  const identifier = this.parseVariableIdentifier();

  // const 变量声明时必须赋值
  if (this.kind === 'const') {
    this.expect('=');
    init = this.parseAssignmentExpression();
  } else if (this.match('=')) {
    this.nextToken();
    init = this.parseAssignmentExpression();
  }

  return new Node.VariableDeclarator(identifier, init);
}

Parser.prototype.parseVariableIdentifier = function () {
  const token = this.nextToken();

  if (token.type !== TokenTypes.Identifier) {
    throw new Error();
  }

  return new Node.Identifier(token.value);
}