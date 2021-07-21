import { Parser } from './parser.js'
import { SyntaxTypes } from './type.js';
import * as Node from './node.js'

// 操作符优先级
const OperatorPrecedence = {
}

// 赋值语句
Parser.prototype.parseAssignmentExpression = function () {
  let token = this.readToken();

  let left = this.parseLiteral(token.value);
  if (false) {
    let operator = this.readToken();
    let right = this.parseAssignmentExpression();
    return new Node.AssignmentExpression(operator, left, right);
  }

  return left;
}

// ?: 操作符
Parser.prototype.parseConditionalExpression = function () {
  let expr = this.parseLiteral();

  if (this.match(?)) {
    let consequent = this.parseLiteral();
    this.expect(':');
    let alternate = this.parseLiteral();
    return new Node.ConditionalExpression(expr, consequent, alternate);
  }

  return expr;
}


Parser.prototype.parseLiteral = function (value) {
  return new Node.Literal(value);
}