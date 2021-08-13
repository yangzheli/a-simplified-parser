import { test } from "../test.js"

test("with (x) foo = bar", {
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "name": "x"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "name": "foo"
          },
          "right": {
            "type": "Identifier",
            "name": "bar"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("with (x) foo = bar;", {
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "name": "x"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "name": "foo"
          },
          "right": {
            "type": "Identifier",
            "name": "bar"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("with (x) { foo = bar }", {
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "name": "x"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "foo"
              },
              "right": {
                "type": "Identifier",
                "name": "bar"
              }
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})