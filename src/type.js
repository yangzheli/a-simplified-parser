/**
 * Token types
 */
class Type {
    constructor(type) {
        this.type = type;
    }
}

// esprima.js
// Types after tokenize
export const TokenTypes = {
    BooleanLiteral: new Type('BooleanLiteral'),
    EOF: new Type('EOF'),
    Identifier: new Type('Identifier'),
    Keyword: new Type('Keyword'),
    NullLiteral: new Type('NullLiteral'),
    NumericLiteral: new Type('NumericLiteral'),
    Punctuator: new Type('Punctuator'),
    StringLiteral: new Type('StringLiteral')
}

// Types after parse
export const SyntaxTypes = {
    Program: new Type('Program'),  // root

    Literal: new Type('Literal'),  // number string boolean null undefined regexp

    // punctuations
    BlockStatement: new Type('BlockStatement'),    // {}
    ArrayExpression: new Type('ArrayExpression'), // []
    AssignmentExpression: new Type('AssignmentExpression'),    // =
    EmptyStatement: new Type('EmptyStatement'),   // ;
    BinaryExpression: new Type('BinaryExpression'),   // typeof instanceof
    ExpressionStatement: new Type('ExpressionStatement'), // ?:

    // identifier
    Identifier: new Type('Identifier'),

    // keywords
    BreakStatement: new Type('BreakStatement'),    // break
    FunctionDeclaration: new Type('FunctionDeclaration'),  // function
    ReturnStatement: new Type('ReturnStatement'),  // return
    SwitchCase: new Type('SwitchCase'),    // switch case
    DoWhileStatement: new Type('DoWhileStatement'), // do while
    IfStatement: new Type('IfStatement'),  // if
    SwitchStatement: new Type('SwitchStatement'),   // switch
    VariableDeclarator: new Type('VariableDeclarator'),    // var
    CatchClause: new Type('CatchClause'),  // case
    ForInStatement: new Type('ForInStatement'),    // for in
    ThisExpression: new Type('ThisExpression'),   // this
    ContinueStatement: new Type('ContinueStatement'), // continue
    ThrowStatement: new Type('ThrowStatement'),    // throw
    DebuggerStatement: new Type('DebuggerStatement'),  // debugger
    NewExpression: new Type('NewExpression'), // new
    WithStatement: new Type('WithStatement'),  // with
    ForStatement: new Type('ForStatement'),    // for
    TryStatement: new Type('TryStatement'),    // try catch finally
}