import { SyntaxTypes } from "./type.js";

export class ArrayExpression {
  constructor(elements) {
    this.type = SyntaxTypes.ArrayExpression;
    this.elements = elements;
  }
}

export class ArrowFunctionExpression {
  constructor(params, body, expression) {
    this.type = SyntaxTypes.ArrowFunctionExpression;
    this.id = null;
    this.params = params;
    this.body = body;
    this.generator = false;
    this.expression = expression;
    this.async = false;
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

export class AsyncFunctionDeclaration {
  constructor(id, params, body, generator) {
    this.type = SyntaxTypes.FunctionDeclaration;
    this.id = id;
    this.params = params;
    this.body = body;
    this.generator = generator;
    this.expression = false;
    this.async = true;
  }
}

export class AsyncFunctionExpression {
  constructor(id, params, body, generator) {
    this.type = SyntaxTypes.FunctionExpression;
    this.id = id;
    this.params = params;
    this.body = body;
    this.generator = generator;
    this.expression = false;
    this.async = true;
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

export class BreakStatement {
  constructor(label) {
    this.type = SyntaxTypes.BreakStatement;
    this.label = label;
  }
}

export class CallExpression {
  constructor(callee, args) {
    this.type = SyntaxTypes.CallExpression;
    this.callee = callee;
    this.arguments = args;
  }
}

export class CatchClause {
  constructor(param, body) {
    this.type = SyntaxTypes.CatchClause;
    this.param = param;
    this.body = body;
  }
}

export class ClassBody {
  constructor(body) {
    this.type = SyntaxTypes.ClassBody;
    this.body = body;
  }
}

export class ClassDeclaration {
  constructor(id, superClass, body) {
    this.type = SyntaxTypes.ClassDeclaration;
    this.id = id;
    this.superClass = superClass;
    this.body = body;
  }
}

export class ClassExpression {
  constructor(id, superClass, body) {
    this.type = SyntaxTypes.ClassExpression;
    this.id = id;
    this.superClass = superClass;
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

export class ContinueStatement {
  constructor(label) {
    this.type = SyntaxTypes.ContinueStatement;
    this.label = label;
  }
}

export class DebuggerStatement {
  constructor() {
    this.type = SyntaxTypes.DebuggerStatement;
  }
}

export class Directive {
  constructor(expression, directive) {
    this.type = SyntaxTypes.ExpressionStatement;
    this.expression = expression;
    this.directive = directive;
  }
}

export class DoWhileStatement {
  constructor(body, test) {
    this.type = SyntaxTypes.DoWhileStatement;
    this.body = body;
    this.test = test;
  }
}

export class EmptyStatement {
  constructor() {
    this.type = SyntaxTypes.EmptyStatement;
  }
}

export class ExpressionStatement {
  constructor(expression) {
    this.type = SyntaxTypes.ExpressionStatement;
    this.expression = expression;
  }
}

export class ForInStatement {
  constructor(left, right, body) {
    this.type = SyntaxTypes.ForInStatement;
    this.left = left;
    this.right = right;
    this.body = body;
    this.each = false;
  }
}

export class ForOfStatement {
  constructor(left, right, body) {
    this.type = SyntaxTypes.ForOfStatement;
    this.left = left;
    this.right = right;
    this.body = body;
  }
}

export class ForStatement {
  constructor(init, test, update, body) {
    this.type = SyntaxTypes.ForStatement;
    this.init = init;
    this.test = test;
    this.update = update;
    this.body = body;
  }
}

export class FunctionDeclaration {
  constructor(id, params, body, generator) {
    this.type = SyntaxTypes.FunctionDeclaration;
    this.id = id;
    this.params = params;
    this.body = body;
    this.generator = generator;
    this.expression = false;
    this.async = false;
  }
}

export class FunctionExpression {
  constructor(id, params, body, generator) {
    this.type = SyntaxTypes.FunctionExpression;
    this.id = id;
    this.params = params;
    this.body = body;
    this.generator = generator;
    this.expression = false;
    this.async = false;
  }
}

export class Identifier {
  constructor(name) {
    this.type = SyntaxTypes.Identifier;
    this.name = name;
  }
}

export class IfExpression {
  constructor(test, consequent, alternate) {
    this.type = SyntaxTypes.IfStatement;
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class LabeledStatement {
  constructor(label, body) {
    this.type = SyntaxTypes.LabeledStatement;
    this.label = label;
    this.body = body;
  }
}

export class Literal {
  constructor(value, raw) {
    this.type = SyntaxTypes.Literal;
    this.value = value;
    this.raw = raw;
  }
}

export class MemberExpression {
  constructor(object, property, computed) {
    this.type = SyntaxTypes.MemberExpression;
    this.object = object;
    this.property = property;
    this.computed = computed;
  }
}

export class MethodDefinition {
  constructor(key, computed, value, kind, isStatic) {
    this.type = SyntaxTypes.MethodDefinition;
    this.key = key;
    this.computed = computed;
    this.value = value;
    this.kind = kind;
    this.static = isStatic;
  }
}

export class NewExpression {
  constructor(callee, args) {
    this.type = SyntaxTypes.NewExpression;
    this.callee = callee;
    this.arguments = args;
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

export class RestElement {
  constructor(argument) {
    this.type = SyntaxTypes.RestElement;
    this.argument = argument;
  }
}

export class ReturnStatement {
  constructor(argument) {
    this.type = SyntaxTypes.ReturnStatement;
    this.argument = argument;
  }
}

export class SwitchCase {
  constructor(test, consequent) {
    this.type = SyntaxTypes.SwitchCase;
    this.test = test;
    this.consequent = consequent;
  }
}

export class SwitchStatement {
  constructor(discriminant, cases) {
    this.type = SyntaxTypes.SwitchStatement;
    this.discriminant = discriminant;
    this.cases = cases;
  }
}

export class ThisExpression {
  constructor() {
    this.type = SyntaxTypes.ThisExpression;
  }
}

export class ThrowStatement {
  constructor(argument) {
    this.type = SyntaxTypes.ThrowStatement;
    this.argument = argument;
  }
}

export class TryStatement {
  constructor(block, handler, finalizer) {
    this.type = SyntaxTypes.TryStatement;
    this.block = block;
    this.handler = handler;
    this.finalizer = finalizer;
  }
}

export class UnaryExpression {
  constructor(operator, argument) {
    this.type = SyntaxTypes.UnaryExpression;
    this.operator = operator;
    this.argument = argument;
    this.prefix = true;
  }
}

export class UpdateExpression {
  constructor(operator, argument, prefix) {
    this.type = SyntaxTypes.UpdateExpression;
    this.operator = operator;
    this.argument = argument;
    this.prefix = prefix;
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

export class WhileStatement {
  constructor(test, body) {
    this.type = SyntaxTypes.WhileStatement;
    this.test = test;
    this.body = body;
  }
}

export class WithStatement {
  constructor(object, body) {
    this.type = SyntaxTypes.WithStatement;
    this.object = object;
    this.body = body;
  }
}