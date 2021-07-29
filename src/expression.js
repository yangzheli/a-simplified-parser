import { Parser } from './parser.js'
import { SyntaxTypes, TokenTypes } from './type.js';
import * as Node from './node.js'

// 赋值语句
Parser.prototype.parseAssignmentExpression = function () {
  let left = this.parseConditionalExpression();
  if (false) {
    let operator = this.nextToken();
    let right = this.parseAssignmentExpression();
    return new Node.AssignmentExpression(operator, left, right);
  }

  return left;
}

Parser.prototype.parseExpression = function () {
  let expr = this.parseConditionalExpression();
  return expr;
}

// ?: 操作符
Parser.prototype.parseConditionalExpression = function () {
  let expr = this.parseExprOps();

  if (this.match('?')) {
    let consequent = this.parseAtomicExpression();
    this.expect(':');
    let alternate = this.parseAtomicExpression();
    return new Node.ConditionalExpression(expr, consequent, alternate);
  }

  return expr;
}

// 开始解析运算符优先级
Parser.prototype.parseExprOps = function () {
  let expr = this.parseAtomicExpression();
  return this.parseExprOp(expr);
}

Parser.prototype.binaryPrecedence = function (token) {
  const type = token.type, op = token.value;
  let precedence = 0;
  if (type === TokenTypes.Punctuator) {
    precedence = this.operatorPrecedence[op] || 0;
  } else if (type === TokenTypes.Keyword) {
    precedence = op === 'instanceof' ? 7 : 0;
  }
  return precedence;
}

// 运算符优先级
Parser.prototype.parseExprOp = function (expr) {
  let operator = this.lookahead;
  if (this.binaryPrecedence(operator)) {
    let token = this.nextToken();
    let right = this.parseAtomicExpression();
    return new Node.BinaryExpression(operator.value, expr, right);
  }
  return expr;
}

// 一元运算符
Parser.prototype.parseUnaryExpression = function () {
  // 前缀
  // 后缀
}

// Parse an atomic expression
Parser.prototype.parseAtomicExpression = function () {
  let token = this.nextToken();
  switch (token.type) {
    case TokenTypes.StringLiteral:
    case TokenTypes.NumericLiteral:
      return this.parseLiteral(token.value, token.raw);
    case TokenTypes.RegexpLiteral:
      return this.parseRegexLiteral(token.value, token.raw, token.regex);
    default:
      throw new Error();
  }
}

Parser.prototype.parseLiteral = function (value, raw) {
  return new Node.Literal(value, raw);
}

Parser.prototype.parseRegexLiteral = function (value, raw, regex) {
  return new Node.RegexLiteral(value, raw, regex);
}
