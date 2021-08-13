export const TokenTypes = {
    BooleanLiteral: "BooleanLiteral",
    EOF: "EOF",
    Identifier: "Identifier",
    Keyword: "Keyword",
    NullLiteral: "NullLiteral",
    NumericLiteral: "NumericLiteral",
    Punctuator: "Punctuator",
    RegexpLiteral: "RegexpLiteral",
    StringLiteral: "StringLiteral",
    TemplateLiteral: "TemplateLiteral"
}

// class TokenType {
//     constructor(label, conf) {
//         this.label = label
//         this.keyword = conf.keyword
//         this.isAssign = !!conf.isAssign
//         this.prefix = !!conf.prefix
//         this.postfix = !!conf.postfix
//     }
// }

// class KeywordType extends TokenType {
//     constructor(name, conf) {
//         conf.name = name
//         super(name, conf)
//     }
// }

// export const Types = {
//     num: new TokenType("num"),
//     bigInt: new TokenType("bigInt"),
//     string: new TokenType("string"),
//     regexp: new TokenType("regexp"),
//     identifier: new TokenType("identifier"),
//     punctuator: new TokenType("punctuator"),
//     eof: new TokenType("eof"),
// }

// export const Keywords = {
//     break: new KeywordType("break"),
//     case: new KeywordType("case"),
//     catch: new KeywordType("catch"),
//     class: new KeywordType("class"),
//     const: new KeywordType("const"),
//     continue: new KeywordType("continue"),
//     debugger: new KeywordType("debugger"),
//     default: new KeywordType("default"),
//     delete: new KeywordType("delete"),
//     do: new KeywordType("do"),
//     else: new KeywordType("else"),
//     export: new KeywordType("export"),
//     extends: new KeywordType("extends"),
//     false: new KeywordType("false"),
//     finally: new KeywordType("finally"),
//     for: new KeywordType("for"),
//     function: new KeywordType("function"),
//     if: new KeywordType("if"),
//     import: new KeywordType("import"),
//     in: new KeywordType("in"),
//     instanceof: new KeywordType("instanceof"),
//     let: new KeywordType("let"),
//     new: new KeywordType("new"),
//     null: new KeywordType("null"),
//     return: new KeywordType("return"),
//     super: new KeywordType("super"),
//     switch: new KeywordType("switch"),
//     this: new KeywordType("this"),
//     throw: new KeywordType("throw"),
//     true: new KeywordType("true"),
//     try: new KeywordType("try"),
//     typeof: new KeywordType("typeof"),
//     var: new KeywordType("var"),
//     void: new KeywordType("void"),
//     while: new KeywordType("while"),
//     with: new KeywordType("with"),
//     yield: new KeywordType("yield"),
// }