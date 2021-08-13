import { test } from "../test.js"
 
test("\"Hello\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello",
        "raw": "\"Hello\""
      },
      "directive": "Hello"
    }
  ],
  "sourceType": "script"
})

test("\"\\n\\r\\t\\v\\b\\f\\\\\\'\\\"\\0\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "\n\r\t\u000b\b\f\\'\"\u0000",
        "raw": "\"\\n\\r\\t\\v\\b\\f\\\\\\'\\\"\\0\""
      },
      "directive": "\\n\\r\\t\\v\\b\\f\\\\\\'\\\"\\0"
    }
  ],
  "sourceType": "script"
})

test("var source = '\"\\\\u0061\"'", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "source"
          },
          "init": {
            "type": "Literal",
            "value": "\"\\u0061\"",
            "raw": "'\"\\\\u0061\"'"
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\nworld\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello\nworld",
        "raw": "\"Hello\\nworld\""
      },
      "directive": "Hello\\nworld"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\02World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello\u0002World",
        "raw": "\"Hello\\02World\""
      },
      "directive": "Hello\\02World"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\012World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello\nWorld",
        "raw": "\"Hello\\012World\""
      },
      "directive": "Hello\\012World"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\122World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "HelloRWorld",
        "raw": "\"Hello\\122World\""
      },
      "directive": "Hello\\122World"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\0122World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello\n2World",
        "raw": "\"Hello\\0122World\""
      },
      "directive": "Hello\\0122World"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\312World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "HelloÊWorld",
        "raw": "\"Hello\\312World\""
      },
      "directive": "Hello\\312World"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\412World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello!2World",
        "raw": "\"Hello\\412World\""
      },
      "directive": "Hello\\412World"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\712World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello92World",
        "raw": "\"Hello\\712World\""
      },
      "directive": "Hello\\712World"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\0World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello\u0000World",
        "raw": "\"Hello\\0World\""
      },
      "directive": "Hello\\0World"
    }
  ],
  "sourceType": "script"
})

test("\"Hello\\1World\"", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "Hello\u0001World",
        "raw": "\"Hello\\1World\""
      },
      "directive": "Hello\\1World"
    }
  ],
  "sourceType": "script"
})