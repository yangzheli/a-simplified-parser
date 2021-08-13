import { test } from "../test.js"

test("do keep(); while (true)", {
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "keep"
          },
          "arguments": []
        }
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      }
    }
  ],
  "sourceType": "script"
})

test("do keep(); while (true);", {
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "keep"
          },
          "arguments": []
        }
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      }
    }
  ],
  "sourceType": "script"
})

test("do { x++; y--; } while (x < 10)", {
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
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
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "argument": {
                "type": "Identifier",
                "name": "y"
              },
              "prefix": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("{ do { } while (false);false }", {
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "DoWhileStatement",
          "body": {
            "type": "BlockStatement",
            "body": []
          },
          "test": {
            "type": "Literal",
            "value": false,
            "raw": "false"
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Literal",
            "value": false,
            "raw": "false"
          }
        }
      ]
    }
  ],
  "sourceType": "script"
})

test("while (true) doSomething()", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "doSomething"
          },
          "arguments": []
        }
      }
    }
  ],
  "sourceType": "script"
})

test("while (x < 10) { x++; y--; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10"
        }
      },
      "body": {
        "type": "BlockStatement",
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
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "argument": {
                "type": "Identifier",
                "name": "y"
              },
              "prefix": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})