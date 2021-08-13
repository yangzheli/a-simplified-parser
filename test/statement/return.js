import { test } from "../test.js"

test("(function(){ return })", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": null,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": null
            }
          ]
        },
        "generator": false,
        "expression": false,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})

test("(function(){ return; })", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": null,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": null
            }
          ]
        },
        "generator": false,
        "expression": false,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})

test("(function(){ return x; })", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": null,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "x"
              }
            }
          ]
        },
        "generator": false,
        "expression": false,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})

test("(function(){ return x * y })", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
        "id": null,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "Identifier",
                  "name": "x"
                },
                "right": {
                  "type": "Identifier",
                  "name": "y"
                }
              }
            }
          ]
        },
        "generator": false,
        "expression": false,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})