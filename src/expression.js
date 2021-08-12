import { Parser } from "./parser.js"
import { TokenTypes } from "./type.js";
import * as Node from "./node.js"

Parser.prototype.parseExpression = function () {
  let expr = this.parseAssignmentExpression();
  return expr;
}

// 赋值语句
Parser.prototype.parseAssignmentExpression = function () {
  let left = this.parseConditionalExpression();
  if (this.matchAssign()) {
    let operator = this.nextToken();
    let right = this.parseAssignmentExpression();
    return new Node.AssignmentExpression(operator.value, left, right);
  }

  return left;
}

// =>
Parser.prototype.parseArrowExpression = function (params) {
  this.expect("=>");
  let body = this.parseFunctionBody();
  return new Node.ArrowFunctionExpression(params, body, true);
}

// ?: 操作符
Parser.prototype.parseConditionalExpression = function () {
  let expr = this.parseUnaryExpression();

  if (this.match("?")) {
    this.nextToken();
    let consequent = this.parseAtomicExpression();
    this.expect(":");
    let alternate = this.parseAtomicExpression();
    return new Node.ConditionalExpression(expr, consequent, alternate);
  }

  return expr;
}

// 一元运算符
Parser.prototype.parseUnaryExpression = function () {
  let token = this.lookahead;
  if (token.prefix) {
    let operator = token.value;
    this.nextToken();
    let expr = this.parseUnaryExpression();
    // UpdateExpression
    if (operator === "++" || operator === "--") return new Node.UpdateExpression(operator, expr, true);
    // UnaryExpression
    return new Node.UnaryExpression(operator, expr);
  }

  let expr = this.parseExprSubscripts();
  // 后缀
  if (this.match("++") || this.match("--")) {
    let operator = this.nextToken().value;
    expr = new Node.UpdateExpression(operator, expr, false)
  }

  return this.parseExprOp(expr, 0);
}

// 解析 . [] () subscript expressions
Parser.prototype.parseExprSubscripts = function () {
  let expr = this.parseAtomicExpression();
  return this.parseSubscripts(expr);
}

// 递归解析
Parser.prototype.parseSubscripts = function (expr, nocalls) {
  if (this.match(".")) {
    this.nextToken();
    let property = this.parseAtomicExpression();
    return this.parseSubscripts(new Node.MemberExpression(expr, property, false), nocalls);
  } else if (this.match("[")) {
    this.nextToken();
    let property = this.parseAtomicExpression();
    this.expect("]");
    return this.parseSubscripts(new Node.MemberExpression(expr, property, true), nocalls);
  } else if (!nocalls && this.match("(")) {
    this.nextToken();
    let args = this.parseExprList(")");
    return this.parseSubscripts(new Node.CallExpression(expr, args), nocalls);
  }

  return expr;
}

Parser.prototype.binaryPrecedence = function (token) {
  const type = token.type, op = token.value;
  let precedence = 0;
  if (type === TokenTypes.Punctuator) {
    precedence = this.operatorPrecedence[op] || 0;
  } else if (type === TokenTypes.Keyword) {
    precedence = (op === "instanceof" || (this.context.allowIn && op === "in")) ? 7 : 0;
  }
  return precedence;
}

// 开始解析运算符优先级
Parser.prototype.parseExprOp = function (left, lastPrec) {
  let operator = this.lookahead;
  let prec = this.binaryPrecedence(operator);
  if (prec > lastPrec) {
    this.nextToken();
    let right = this.parseExprOp(this.parseAtomicExpression(), prec);
    let node = new Node.BinaryExpression(operator.value, left, right);
    // 递归解析后续的运算符
    return this.parseExprOp(node, lastPrec);
  }
  return left;
}


// Parse an atomic expression
Parser.prototype.parseAtomicExpression = function () {
  if (this.lookahead.type === TokenTypes.StringLiteral || this.lookahead.type === TokenTypes.NumericLiteral ||
    this.lookahead.type === TokenTypes.Identifier)
    this.context.allowRegexp = false;

  let token = this.nextToken();
  switch (token.type) {
    case TokenTypes.Punctuator:
      switch (token.value) {
        case "(":
          return this.parseGroupExpression();
        case "{":
          return this.parseObj();
        case "[":
          return new Node.ArrayExpression(this.parseExprList("]"));
        case '`':
          return this.parseTemplate();
        default:
          throw new Error();
      }
    case TokenTypes.StringLiteral:
    case TokenTypes.NumericLiteral:
    case TokenTypes.BooleanLiteral:
      return this.parseLiteral(token.value, token.raw);
    case TokenTypes.RegexpLiteral:
      return this.parseRegexLiteral(token.value, token.raw, token.regex);
    case TokenTypes.Identifier:
    case TokenTypes.NullLiteral:
    case TokenTypes.Keyword:
      switch (token.value) {
        case "new":
          return this.parseNewExpression();
        case "function":
          return this.parseFunctionStatement(false);
        case "this":
          return new Node.ThisExpression();
        case "class":
          return this.parseClassExpression();
        default:
          return this.parseIdentifier(token.value);
      }
    default:
      throw new Error();
  }
}

// ``
Parser.prototype.parseTemplate = function () {
  let quasis = [];
  let expressions = [];
  let ele = this.parseTemplateElement();
  quasis.push(ele);

  while (!ele.tail) {
    if (this.lookahead.type === TokenTypes.EOF) throw new Error();
    this.expect('${')
    expressions.push(this.parseExpression());
    this.expect('}');

    quasis.push(this.parseTemplateElement());
  }
  this.expect('`');

  return new Node.TemplateLiteral(quasis, expressions);
}

Parser.prototype.parseTemplateElement = function () {
  let value = { raw: "", cooked: "" };
  if (this.lookahead.type !== TokenTypes.Punctuator) {
    let token = this.nextToken();
    value = { raw: token.value, cooked: token.value };
  }
  let tail = this.match('`');
  return new Node.TemplateElement(value, tail);
}

// ()
Parser.prototype.parseGroupExpression = function () {
  if (this.match(")")) {
    this.nextToken();
    return this.parseArrowExpression(null);
  } else {
    return this.parseParenExpression();
  }
}

// () 
Parser.prototype.parseParenExpression = function () {
  let expr = this.parseExpression();
  this.expect(")");
  return expr;
}

// 解析对象
Parser.prototype.parseObj = function () {
  let properties = [];

  while (!this.match("}")) {
    properties.push(this.parseObjProperty());
    if (!this.match("}")) this.expect(",");
  }
  this.expect("}");

  return new Node.ObjectExpression(properties);
}

// 解析对象属性
Parser.prototype.parseObjProperty = function () {
  let kind, key, value;
  let computed = false, method = false, shorthand = false;

  let token = this.lookahead;
  switch (token.type) {
    case TokenTypes.StringLiteral:
    case TokenTypes.NumericLiteral:
    case TokenTypes.BooleanLiteral:
      key = new Node.Literal(token.value, token.raw);
      break;
    case TokenTypes.Identifier:
    case TokenTypes.NullLiteral:
    case TokenTypes.Keyword:
      key = new Node.Identifier(token.value);
      break;
    default:
      throw new Error();
  }
  this.nextToken();
  if (token.type === TokenTypes.Identifier && (token.value === "get" || token.value === "set")) {
    kind = token.value;
    key = this.parseAtomicExpression();
    value = this.parseFunctionStatement(false);
  } else {
    kind = "init";
    if (this.match(":")) {
      this.nextToken();
      value = this.parseAtomicExpression();
    }
  }

  return new Node.Property(kind, key, value, computed, method, shorthand);
}

// 解析标识符
Parser.prototype.parseIdentifier = function (value) {
  // if (this.match('=')) {
  //   this.nextToken();
  //   let right = this.parseAssignmentExpression();
  //   return new Node.AssignmentExpression('=', new Node.Identifier(value), right);
  // } else {
  //   return new Node.Identifier(value);
  // }
  let id = new Node.Identifier(value);
  if (this.match("=>")) {
    let params = [];
    params.push(id);
    return this.parseArrowExpression(params);
  }
  return id;
}

// 解析以逗号分隔的表达式列表
Parser.prototype.parseExprList = function (close) {
  let elements = [];

  while (!this.match(close)) {
    if (this.match(",")) {
      this.nextToken();
      elements.push(null);
    } else if (this.match("...")) {
      this.nextToken();
      let element = this.parseAtomicExpression();
      elements.push(new Node.RestElement(element));
    } else {
      let element = this.parseAtomicExpression();
      elements.push(element);
      if (!this.match(close)) this.expect(",");
    }
  }
  this.expect(close);

  return elements;
}

Parser.prototype.parseLiteral = function (value, raw) {
  return new Node.Literal(value, raw);
}

Parser.prototype.parseRegexLiteral = function (value, raw, regex) {
  return new Node.RegexLiteral(value, raw, regex);
}

// new 
Parser.prototype.parseNewExpression = function () {
  let callee = this.parseSubscripts(this.parseAtomicExpression(), true);
  let args = null;
  if (this.match("(")) {
    this.nextToken();
    args = this.parseExprList(")");
  }
  return new Node.NewExpression(callee, args);
}