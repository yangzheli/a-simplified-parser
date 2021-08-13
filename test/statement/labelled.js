import { test } from "../test.js"

test("start: for (;;) break start", {
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "name": "start"
      },
      "body": {
        "type": "ForStatement",
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "name": "start"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("start: while (true) break start", {
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "name": "start"
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BreakStatement",
          "label": {
            "type": "Identifier",
            "name": "start"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("__proto__: test", {
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "name": "__proto__"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "Identifier",
          "name": "test"
        }
      }
    }
  ],
  "sourceType": "script"
})