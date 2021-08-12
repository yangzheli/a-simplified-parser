import { Parser } from './parser.js'
import { TokenTypes } from './type.js'
import * as Node from './node.js'

Parser.prototype.parseStatement = function () {
  let token = this.lookahead;
  let type = token.type, value = token.value;
  if (type === TokenTypes.EOF) return;

  if (type === TokenTypes.Punctuator) {
    switch (value) {
      case ';':
        return this.parseEmptyStatement();
      case '{':
        return this.parseBlockStatement();
      default:
        break;
    }
  }

  if (type === TokenTypes.Keyword) {
    switch (value) {
      case 'class':
        return this.parseClass(true);
      case 'if':
        return this.parseIfStatement();
      case 'break':
      case 'continue':
        return this.parseBreakContinueStatement(value);
      case 'function':
        return this.parseFunctionStatement(true);
      case 'return':
        return this.parseReturnStatement();
      case 'switch':
        return this.parseSwitchStatement();
      case 'do':
        return this.parseDoWhileStatement();
      case 'while':
        return this.parseWhileStatement();
      case 'var':
        return this.parseVarStatement();
      case 'throw':
        return this.parseThrowStatement();
      case 'debugger':
        return this.parseDebuggerStatement();
      case 'with':
        return this.parseWithStatement();
      case 'for':
        return this.parseForStatement();
      case 'try':
        return this.parseTryStatement();
      default:
        break;
    }
  }

  // If the statement does not start with a keyword or a brace, 
  // it's an ExpressionStatement or LabeledStatement.
  let expr = this.parseExpression();
  if (expr.type === TokenTypes.Identifier && this.match(':')) {
    this.expect(':');
    return this.parseLabeledStatement(expr);
  }
  return this.parseExpressionStatement(token, expr);
}

// class
Parser.prototype.parseClass = function (isStatement) {
  this.expectKeyword('class');
  let id = this.parseVariableIdentifier();
  let superClass = null;
  if (this.matchKeyword('extends')) {
    this.expectKeyword('extends');
    superClass = this.parseAtomicExpression();
  }
  this.expect('{')
  let classBody = [];
  while (!this.match('}')) {
    this.nextToken()
  }
  let body = new Node.ClassBody(classBody);
  this.expect('}');
  if (isStatement) return new Node.ClassDeclaration(id, superClass, body);
  return new Node.ClassExpression(id, superClass, body);
}

// ;
Parser.prototype.parseEmptyStatement = function () {
  this.expect(';');
  return new Node.EmptyStatement();
}

// Block statement
Parser.prototype.parseBlockStatement = function () {
  this.expect('{');

  let body = [];
  while (!this.match('}')) {
    body.push(this.parseStatement());
  }
  this.nextToken();

  return new Node.BlockStatement(body);
}

// If statement 
Parser.prototype.parseIfStatement = function () {
  this.expectKeyword('if');
  this.expect('(');

  let test = this.parseParenExpression();
  let consequent = this.parseStatement();
  let alternate = null;

  if (this.matchKeyword('else')) {
    this.nextToken();
    alternate = this.parseStatement();
  }

  return new Node.IfExpression(test, consequent, alternate);
}

// Break / continue statement
Parser.prototype.parseBreakContinueStatement = function (keyword) {
  let isBreak = keyword === 'break';
  this.nextToken();

  let label = null;
  if (this.match(';') || this.canInsertSemicolon()) label = null;
  else label = this.parseVariableIdentifier();

  let labels = this.context.labels;
  if (label && labels.indexOf(label.name) === -1) {
    throw new Error('Undefined label ' + label);
  }

  if (isBreak) return new Node.BreakStatement(label);
  else return new Node.ContinueStatement(label);
}

// Function declaration / expresssion
Parser.prototype.parseFunctionStatement = function (isStatement) {
  if (isStatement) this.expectKeyword('function');
  let id = null;
  if (isStatement || this.lookahead.type === "Identifier") id = this.parseVariableIdentifier();
  this.expect('(');
  let params = this.parseExprList(')');
  let body = this.parseFunctionBody();

  if (isStatement) return new Node.FunctionDeclaration(id, params, body, false);
  else return new Node.FunctionExpression(id, params, body, false);
}

Parser.prototype.parseFunctionBody = function () {
  let isExpression = this.lookahead.value !== '{';
  if (isExpression) {
    return this.parseExpression();
  } else {
    let _inFunction = this.context.inFunction;
    this.context.inFunction = true;
    let body = this.parseBlockStatement();
    this.context.inFunction = _inFunction;
    return body;
  }
}

// Return statement 
Parser.prototype.parseReturnStatement = function () {
  if (!this.context.inFunction) throw new Error('return outside of function');

  this.expectKeyword('return');
  let argument = null;
  if (!this.match(';') && !this.canInsertSemicolon()) argument = this.parseExpression();
  this.consumeSemicolon();

  return new Node.ReturnStatement(argument);
}

// Switch case statement
Parser.prototype.parseSwitchStatement = function () {
  this.expectKeyword('switch');
  this.expect('(');
  let discriminant = this.parseParenExpression();

  this.expect('{');
  let cases = [];
  let defaultFound = false;
  while (this.lookahead.value !== '}') {
    let clause = this.parseSwitchCase();
    if (!clause.test) {
      if (defaultFound) throw new Error('Multiple default clauses')
      this.defaultFound = true;
    }
    cases.push(clause);
  }
  this.expect('}');

  return new Node.SwitchStatement(discriminant, cases);
}

Parser.prototype.parseSwitchCase = function () {
  let test = null;
  if (this.matchKeyword('case')) {
    this.expectKeyword('case');
    test = this.parseExpression();
  } else {
    this.expectKeyword('default');
  }
  this.expect(':');

  let consequent = [];
  while (true) {
    if (this.match('}') || this.matchKeyword('case') || this.matchKeyword('default')) break;

    consequent.push(this.parseStatement());
  }

  return new Node.SwitchCase(test, consequent);
}

// Do while statement
Parser.prototype.parseDoWhileStatement = function () {
  this.expectKeyword('do');
  let body = this.parseStatement();
  this.expectKeyword('while');
  this.expect('(');
  let test = this.parseParenExpression();
  this.consumeSemicolon();

  return new Node.DoWhileStatement(body, test);
}

// While statement
Parser.prototype.parseWhileStatement = function () {
  this.expectKeyword('while');
  this.expect('(');
  let test = this.parseParenExpression();
  let body = this.parseStatement();

  return new Node.WhileStatement(test, body);
}

// Variable declaration
Parser.prototype.parseVarStatement = function () {
  const declarations = this.parseVarList();

  this.consumeSemicolon();

  return new Node.VariableDeclaration(declarations, 'var');
}

// throw statement
Parser.prototype.parseThrowStatement = function () {
  this.expectKeyword('throw');
  if (this.context.hasLineTerminator) throw new Error('Illegal newline after throw');
  let argument = this.parseExpression();
  this.consumeSemicolon();

  return new Node.ThrowStatement(argument);
}

// Debugger statement
Parser.prototype.parseDebuggerStatement = function () {
  this.expectKeyword('debugger');
  this.consumeSemicolon();

  return new Node.DebuggerStatement();
}

// With statement
Parser.prototype.parseWithStatement = function () {
  this.expectKeyword('with');
  this.expect('(');
  let object = this.parseParenExpression();
  let body = this.parseStatement();

  return new Node.WithStatement(object, body);
}

// For statement
Parser.prototype.parseForStatement = function () {
  this.expectKeyword('for');
  this.expect('(');

  let init = null;
  if (this.lookahead.value === ';') return this.parseFor(init);

  this.context.allowIn = false;
  if (this.lookahead.value === 'var') {
    init = new Node.VariableDeclaration(this.parseVarList(), 'var');
    if (this.lookahead.value === 'in' || this.lookahead.value === 'of') {
      return this.parseForIn(init);
    }
    return this.parseFor(init);
  }

  init = this.parseExpression();
  if (this.lookahead.value === 'in' || this.lookahead.value === 'of') {
    return this.parseForIn(init);
  }
  this.context.allowIn = true;
  return this.parseFor(init);
}

// For in / of
Parser.prototype.parseForIn = function (init) {
  let left = init;
  let forIn = this.lookahead.value === 'in';
  this.nextToken();
  let right = this.parseExpression();
  this.expect(')');
  let body = this.parseStatement();

  if (forIn) return new Node.ForInStatement(left, right, body);
  else return new Node.ForOfStatement(left, right, body);
}

Parser.prototype.parseFor = function (init) {
  this.expect(';');
  let test = this.lookahead.value === ';' ? null : this.parseExpression();
  this.expect(';')
  let update = this.lookahead.value === ')' ? null : this.parseExpression();
  this.expect(')');
  let body = this.parseStatement();

  return new Node.ForStatement(init, test, update, body);
}

// Try catch finally statement
Parser.prototype.parseTryStatement = function () {
  this.expectKeyword('try');
  let block = this.parseBlockStatement();

  let handler = null;
  if (this.matchKeyword('catch')) {
    this.expectKeyword('catch');
    this.expect('(');
    let param = this.parseParenExpression();
    let body = this.parseBlockStatement();
    handler = new Node.CatchClause(param, body);
  }

  let finalizer = null;
  if (this.matchKeyword('finally')) {
    this.expectKeyword('finally');
    finalizer = this.parseBlockStatement();
  }

  if (!handler && !finalizer) throw new Error('Missing catch or finally clause');
  return new Node.TryStatement(block, handler, finalizer);
}

// Labeled statement
Parser.prototype.parseLabeledStatement = function (expr) {
  let labels = this.context.labels;
  if (labels.indexOf(expr.name) !== -1) throw new Error('Label ' + expr.value + 'is already declared');
  labels.push(expr.name);
  let body = this.parseStatement();
  labels.pop();

  return new Node.LabeledStatement(expr, body);
}

// Expression statement
Parser.prototype.parseExpressionStatement = function (token, expr) {
  this.consumeSemicolon();
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