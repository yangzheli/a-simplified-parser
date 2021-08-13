import { test } from "../test.js"

test("throw x;", {
  "type": "Program",
  "body": [
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "name": "x"
      }
    }
  ],
  "sourceType": "script"
})

test("throw x * y", {
  "type": "Program",
  "body": [
    {
      "type": "ThrowStatement",
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
  ],
  "sourceType": "script"
})

test("throw { message: \"Error\" }", {
  "type": "Program",
  "body": [
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "key": {
              "type": "Identifier",
              "name": "message"
            },
            "computed": false,
            "value": {
              "type": "Literal",
              "value": "Error",
              "raw": "\"Error\""
            },
            "kind": "init",
            "method": false,
            "shorthand": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})