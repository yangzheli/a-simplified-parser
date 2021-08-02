import { SyntaxTypes } from "./type.js";

export class ArrayExpression {
  constructor(elements) {
    this.type = SyntaxTypes.ArrayExpression;
    this.elements = elements;
  }
}

// esprima.js 
export class AssignmentExpression {
  constructor(operator, left, right) {
    this.type = SyntaxTypes.AssignmentExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

export class BinaryExpression {
  constructor(operator, left, right) {
    const logical = operator === '||' || operator === '&&';
    this.type = logical ? SyntaxTypes.LogicalExpression : SyntaxTypes.BinaryExpression;
    this.operator = operator;
    this.left = left;
    this.right = right;
  }
}

export class BlockStatement {
  constructor(body) {
    this.type = SyntaxTypes.BlockStatement;
    this.body = body;
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

export class Directive {
  constructor(expression, directive) {
    this.type = SyntaxTypes.ExpressionStatement;
    this.expression = expression;
    this.directive = directive;
  }
}

export class ExpressionStatement {
  constructor(expression) {
    this.type = SyntaxTypes.ExpressionStatement;
    this.expression = expression;
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

export class ObjectExpression {
  constructor(properties) {
    this.type = SyntaxTypes.ObjectExpression;
    this.properties = properties;
  }
}

export class Property {
  constructor(kind, key, value, computed, method, shorthand) {
    this.type = SyntaxTypes.Property;
    this.kind = kind;
    this.key = key;
    this.value = value;
    this.computed = computed;
    this.method = method;
    this.shorthand = shorthand;
  }
}

export class RegexLiteral {
  constructor(value, raw, regex) {
    this.type = SyntaxTypes.Literal;
    this.value = value;
    this.raw = raw;
    this.regex = regex;
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