import { test } from "../test.js"

test("y ? 1 : 2", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Identifier",
          "name": "y"
        },
        "consequent": {
          "type": "Literal",
          "value": 1,
          "raw": "1"
        },
        "alternate": {
          "type": "Literal",
          "value": 2,
          "raw": "2"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x && y ? 1 : 2", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "consequent": {
          "type": "Literal",
          "value": 1,
          "raw": "1"
        },
        "alternate": {
          "type": "Literal",
          "value": 2,
          "raw": "2"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = (0) ? 1 : 2", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "ConditionalExpression",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0"
          },
          "consequent": {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
          "alternate": {
            "type": "Literal",
            "value": 2,
            "raw": "2"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})