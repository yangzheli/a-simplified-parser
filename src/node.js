import { SyntaxTypes } from "./type.js";

// esprima.js 
export class AssignmentExpression {
  constructor(operator, left, right) {
    this.type = SyntaxTypes.AssignmentExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

export class ConditionalExpression {
  constructor(test, consequent, alternate) {
    this.type = SyntaxTypes.ConditionalExpression;
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class Identifier {
  constructor(name) {
    this.type = SyntaxTypes.Identifier;
    this.name = name;
  }
}

export class Literal {
  constructor(value, raw) {
    this.type = SyntaxTypes.Literal;
    this.value = value;
    this.raw = raw;
  }
}

export class VariableDeclaration {
  constructor(declarations, kind) {
    this.type = SyntaxTypes.VariableDeclaration;
    this.declarations = declarations;
    this.kind = kind;
  }
}

export class VariableDeclarator {
  constructor(id, init) {
    this.type = SyntaxTypes.VariableDeclarator;
    this.id = id;
    this.init = init;
  }
}