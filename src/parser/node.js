import { Syntax } from "./Syntax.js"

export class ArrayExpression {
  constructor(elements) {
    this.type = Syntax.ArrayExpression
    this.elements = elements
  }
}

export class ArrowFunctionExpression {
  constructor(params, body, expression) {
    this.type = Syntax.ArrowFunctionExpression
    this.id = null
    this.params = params
    this.body = body
    this.generator = false
    this.expression = expression
    this.async = false
  }
}

// esprima.js 
export class AssignmentExpression {
  constructor(operator, left, right) {
    this.type = Syntax.AssignmentExpression
    this.operator = operator
    this.left = left
    this.right = right
  }
}

export class AsyncFunctionDeclaration {
  constructor(id, params, body, generator) {
    this.type = Syntax.FunctionDeclaration
    this.id = id
    this.params = params
    this.body = body
    this.generator = generator
    this.expression = false
    this.async = true
  }
}

export class AsyncFunctionExpression {
  constructor(id, params, body, generator) {
    this.type = Syntax.FunctionExpression
    this.id = id
    this.params = params
    this.body = body
    this.generator = generator
    this.expression = false
    this.async = true
  }
}

export class BinaryExpression {
  constructor(operator, left, right) {
    const logical = operator === "||" || operator === "&&"
    this.type = logical ? Syntax.LogicalExpression : Syntax.BinaryExpression
    this.operator = operator
    this.left = left
    this.right = right
  }
}

export class BlockStatement {
  constructor(body) {
    this.type = Syntax.BlockStatement
    this.body = body
  }
}

export class BreakStatement {
  constructor(label) {
    this.type = Syntax.BreakStatement
    this.label = label
  }
}

export class CallExpression {
  constructor(callee, args) {
    this.type = Syntax.CallExpression
    this.callee = callee
    this.arguments = args
  }
}

export class CatchClause {
  constructor(param, body) {
    this.type = Syntax.CatchClause
    this.param = param
    this.body = body
  }
}

export class ClassBody {
  constructor(body) {
    this.type = Syntax.ClassBody
    this.body = body
  }
}

export class ClassDeclaration {
  constructor(id, superClass, body) {
    this.type = Syntax.ClassDeclaration
    this.id = id
    this.superClass = superClass
    this.body = body
  }
}

export class ClassExpression {
  constructor(id, superClass, body) {
    this.type = Syntax.ClassExpression
    this.id = id
    this.superClass = superClass
    this.body = body
  }
}

export class ConditionalExpression {
  constructor(test, consequent, alternate) {
    this.type = Syntax.ConditionalExpression
    this.test = test
    this.consequent = consequent
    this.alternate = alternate
  }
}

export class ContinueStatement {
  constructor(label) {
    this.type = Syntax.ContinueStatement
    this.label = label
  }
}

export class DebuggerStatement {
  constructor() {
    this.type = Syntax.DebuggerStatement
  }
}

export class Directive {
  constructor(expression, directive) {
    this.type = Syntax.ExpressionStatement
    this.expression = expression
    this.directive = directive
  }
}

export class DoWhileStatement {
  constructor(body, test) {
    this.type = Syntax.DoWhileStatement
    this.body = body
    this.test = test
  }
}

export class EmptyStatement {
  constructor() {
    this.type = Syntax.EmptyStatement
  }
}

export class ExpressionStatement {
  constructor(expression) {
    this.type = Syntax.ExpressionStatement
    this.expression = expression
  }
}

export class ForInStatement {
  constructor(left, right, body) {
    this.type = Syntax.ForInStatement
    this.left = left
    this.right = right
    this.body = body
    this.each = false
  }
}

export class ForOfStatement {
  constructor(left, right, body) {
    this.type = Syntax.ForOfStatement
    this.left = left
    this.right = right
    this.body = body
  }
}

export class ForStatement {
  constructor(init, test, update, body) {
    this.type = Syntax.ForStatement
    this.init = init
    this.test = test
    this.update = update
    this.body = body
  }
}

export class FunctionDeclaration {
  constructor(id, params, body, generator) {
    this.type = Syntax.FunctionDeclaration
    this.id = id
    this.params = params
    this.body = body
    this.generator = generator
    this.expression = false
    this.async = false
  }
}

export class FunctionExpression {
  constructor(id, params, body, generator) {
    this.type = Syntax.FunctionExpression
    this.id = id
    this.params = params
    this.body = body
    this.generator = generator
    this.expression = false
    this.async = false
  }
}

export class Identifier {
  constructor(name) {
    this.type = Syntax.Identifier
    this.name = name
  }
}

export class IfExpression {
  constructor(test, consequent, alternate) {
    this.type = Syntax.IfStatement
    this.test = test
    this.consequent = consequent
    this.alternate = alternate
  }
}

export class LabeledStatement {
  constructor(label, body) {
    this.type = Syntax.LabeledStatement
    this.label = label
    this.body = body
  }
}

export class Literal {
  constructor(value, raw) {
    this.type = Syntax.Literal
    this.value = value
    this.raw = raw
  }
}

export class MemberExpression {
  constructor(object, property, computed) {
    this.type = Syntax.MemberExpression
    this.object = object
    this.property = property
    this.computed = computed
  }
}

export class MethodDefinition {
  constructor(key, computed, value, kind, isStatic) {
    this.type = Syntax.MethodDefinition
    this.key = key
    this.computed = computed
    this.value = value
    this.kind = kind
    this.static = isStatic
  }
}

export class NewExpression {
  constructor(callee, args) {
    this.type = Syntax.NewExpression
    this.callee = callee
    this.arguments = args
  }
}

export class ObjectExpression {
  constructor(properties) {
    this.type = Syntax.ObjectExpression
    this.properties = properties
  }
}

export class Property {
  constructor(kind, key, value, computed, method, shorthand) {
    this.type = Syntax.Property
    this.kind = kind
    this.key = key
    this.value = value
    this.computed = computed
    this.method = method
    this.shorthand = shorthand
  }
}

export class RegexLiteral {
  constructor(value, raw, regex) {
    this.type = Syntax.Literal
    this.value = value
    this.raw = raw
    this.regex = regex
  }
}

export class RestElement {
  constructor(argument) {
    this.type = Syntax.RestElement
    this.argument = argument
  }
}

export class ReturnStatement {
  constructor(argument) {
    this.type = Syntax.ReturnStatement
    this.argument = argument
  }
}

export class SwitchCase {
  constructor(test, consequent) {
    this.type = Syntax.SwitchCase
    this.test = test
    this.consequent = consequent
  }
}

export class SwitchStatement {
  constructor(discriminant, cases) {
    this.type = Syntax.SwitchStatement
    this.discriminant = discriminant
    this.cases = cases
  }
}

export class TaggedTemplateExpression {
  constructor(tag, quasi){
    this.type = Syntax.TaggedTemplateExpression
    this.tag = tag
    this.quasi = quasi
  }
}

export class TemplateElement {
  constructor(value, tail) {
    this.type = Syntax.TemplateElement
    this.value = value
    this.tail = tail
  }
}

export class TemplateLiteral {
  constructor(quasis, expressions) {
    this.type = Syntax.TemplateLiteral
    this.quasis = quasis
    this.expressions = expressions
  }
}

export class ThisExpression {
  constructor() {
    this.type = Syntax.ThisExpression
  }
}

export class ThrowStatement {
  constructor(argument) {
    this.type = Syntax.ThrowStatement
    this.argument = argument
  }
}

export class TryStatement {
  constructor(block, handler, finalizer) {
    this.type = Syntax.TryStatement
    this.block = block
    this.handler = handler
    this.finalizer = finalizer
  }
}

export class UnaryExpression {
  constructor(operator, argument) {
    this.type = Syntax.UnaryExpression
    this.operator = operator
    this.argument = argument
    this.prefix = true
  }
}

export class UpdateExpression {
  constructor(operator, argument, prefix) {
    this.type = Syntax.UpdateExpression
    this.operator = operator
    this.argument = argument
    this.prefix = prefix
  }
}

export class VariableDeclaration {
  constructor(declarations, kind) {
    this.type = Syntax.VariableDeclaration
    this.declarations = declarations
    this.kind = kind
  }
}

export class VariableDeclarator {
  constructor(id, init) {
    this.type = Syntax.VariableDeclarator
    this.id = id
    this.init = init
  }
}

export class WhileStatement {
  constructor(test, body) {
    this.type = Syntax.WhileStatement
    this.test = test
    this.body = body
  }
}

export class WithStatement {
  constructor(object, body) {
    this.type = Syntax.WithStatement
    this.object = object
    this.body = body
  }
}