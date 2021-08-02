import { test } from './test.js'

test("x++", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("x--", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("eval++", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "eval"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("eval--", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "eval"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("arguments++", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "arguments"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("arguments--", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "arguments"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("++x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("--x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("++eval", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "eval"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("--eval", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "eval"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("++arguments", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "arguments"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("--arguments", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "arguments"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("+x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("-x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("~x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("!x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("void x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("delete x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("typeof x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})