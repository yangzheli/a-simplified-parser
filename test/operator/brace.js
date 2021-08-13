import { test } from "../test.js"

test("{ foo }", {
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "name": "foo"
          }
        }
      ]
    }
  ],
  "sourceType": "script"
})

test("{ doThis(); doThat(); }", {
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "doThis"
            },
            "arguments": []
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "doThat"
            },
            "arguments": []
          }
        }
      ]
    }
  ],
  "sourceType": "script"
})

test("{}", {
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": []
    }
  ],
  "sourceType": "script"
})