// esprima.js
// Types after tokenize
export const TokenTypes = {
    BooleanLiteral: 'BooleanLiteral',
    EOF: 'EOF',
    Identifier: 'Identifier',
    Keyword: 'Keyword',
    NullLiteral: 'NullLiteral',
    NumericLiteral: 'NumericLiteral',
    Punctuator: 'Punctuator',
    RegexpLiteral: 'RegexpLiteral',
    StringLiteral: 'StringLiteral',
}

// Types after parse
export const SyntaxTypes = {
    Program: 'Program',  // root

    Literal: 'Literal',  // number string boolean null undefined regexp

    Property: 'Property',    // 对象属性

    // punctuations
    ObjectExpression: 'ObjectExpression',   // {}
    BlockStatement: 'BlockStatement',    // {}
    ArrayExpression: 'ArrayExpression', // []
    AssignmentExpression: 'AssignmentExpression',    // =
    EmptyStatement: 'EmptyStatement',   // ;
    BinaryExpression: 'BinaryExpression',   // typeof instanceof
    ExpressionStatement: 'ExpressionStatement', // ?:
    LogicalExpression: 'LogicalExpression',
    UpdateExpression: 'UpdateExpression',   // ++ -- 
    UnaryExpression: 'UnaryExpression', // ++ -- + - 
    ConditionalExpression: 'ConditionalExpression',  // ?:
    MemberExpression: 'MemberExpression',    // . []
    EmptyStatement: 'EmptyStatement',    // ;
    CallExpression: 'CallExpression',   // ()
    RestElement: 'RestElement', // ...

    // identifier
    Identifier: 'Identifier',

    // keywords
    BreakStatement: 'BreakStatement',    // break
    FunctionDeclaration: 'FunctionDeclaration',  // function
    FunctionExpression: 'FunctionExpression',   // function
    ReturnStatement: 'ReturnStatement',  // return
    SwitchCase: 'SwitchCase',    // switch case
    DoWhileStatement: 'DoWhileStatement', // do while
    WhileStatement: 'WhileStatement',   // while
    IfStatement: 'IfStatement',  // if
    SwitchStatement: 'SwitchStatement',   // switch
    VariableDeclaration: 'VariableDeclaration', // var
    VariableDeclarator: 'VariableDeclarator',    // var
    CatchClause: 'CatchClause',  // case
    ThisExpression: 'ThisExpression',   // this
    ContinueStatement: 'ContinueStatement', // continue
    ThrowStatement: 'ThrowStatement',    // throw
    DebuggerStatement: 'DebuggerStatement',  // debugger
    NewExpression: 'NewExpression', // new
    WithStatement: 'WithStatement',  // with
    ForInStatement: 'ForInStatement',    // for in
    ForOfStatement: 'ForOfStatement',    // for of
    ForStatement: 'ForStatement',    // for
    TryStatement: 'TryStatement',    // try catch finally
}