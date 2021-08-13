import { test } from "../test.js"

test("if (morning) goodMorning()", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "goodMorning"
          },
          "arguments": []
        }
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
})

test("if (morning) (function(){})", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "FunctionExpression",
          "id": null,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "body": []
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
})

test("if (morning) var x = 0;", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "x"
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "kind": "var"
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
})

test("if (morning) function a(){}", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "a"
        },
        "params": [],
        "body": {
          "type": "BlockStatement",
          "body": []
        },
        "generator": false,
        "expression": false,
        "async": false
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
})

test("if (morning) goodMorning(); else goodDay()", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "goodMorning"
          },
          "arguments": []
        }
      },
      "alternate": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "goodDay"
          },
          "arguments": []
        }
      }
    }
  ],
  "sourceType": "script"
})

test("if (true) that()\n; else;", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "that"
          },
          "arguments": []
        }
      },
      "alternate": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

test("if (true) that(); else;", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "that"
          },
          "arguments": []
        }
      },
      "alternate": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})