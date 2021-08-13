import { test } from "../test.js"

test("() => \"test\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "id": null,
        "params": [],
        "body": {
          "type": "Literal",
          "value": "test",
          "raw": "\"test\""
        },
        "generator": false,
        "expression": true,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})

test("e => \"test\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "id": null,
        "params": [
          {
            "type": "Identifier",
            "name": "e"
          }
        ],
        "body": {
          "type": "Literal",
          "value": "test",
          "raw": "\"test\""
        },
        "generator": false,
        "expression": true,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})