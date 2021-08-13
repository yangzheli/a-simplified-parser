import { test } from "../test.js"

test("switch (x) {}", {
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "name": "x"
      },
      "cases": []
    }
  ],
  "sourceType": "script"
})

test("switch (answer) { case 42: hi(); break; }", {
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "name": "answer"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "hi"
                },
                "arguments": []
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script"
})

test("switch (answer) { case 42: hi(); break; default: break }", {
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "name": "answer"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "hi"
                },
                "arguments": []
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script"
})