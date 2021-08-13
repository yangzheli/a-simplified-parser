import { test } from "../test.js"

test(";", {
  "type": "Program",
  "body": [
    {
      "type": "EmptyStatement"
    }
  ],
  "sourceType": "script"
})

test("x = 42;", {
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
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})