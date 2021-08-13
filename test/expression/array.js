import { test } from "../test.js"

test("[]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": []
      }
    }
  ],
  "sourceType": "script"
})

test("[ ]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": []
      }
    }
  ],
  "sourceType": "script"
})

test("[ 42 ]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("[ 42, ]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("[ ,, 42 ]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          null,
          null,
          {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("[ 1, 2, 3, ]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("[ 1, 2,, 3, ]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2"
          },
          null,
          {
            "type": "Literal",
            "value": 3,
            "raw": "3"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("日本語 = []", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "日本語"
        },
        "right": {
          "type": "ArrayExpression",
          "elements": []
        }
      }
    }
  ],
  "sourceType": "script"
})

// var source = 'T\u203F = []';
// var source = 'T\u200C = []';
// var source = '\u2163\u2161\u200A=\u2009[]';