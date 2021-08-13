import { test } from "../test.js"

test("new Button", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "name": "Button"
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
})

test("new Button()", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "name": "Button"
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
})

test("new new foo", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "name": "foo"
          },
          "arguments": []
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
})

test("new new foo()", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "name": "foo"
          },
          "arguments": []
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
})

test("new foo().bar()", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "foo"
            },
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "name": "bar"
          }
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
})

test("new foo[bar]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "foo"
          },
          "property": {
            "type": "Identifier",
            "name": "bar"
          }
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
})

test("new foo.bar()", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "foo"
          },
          "property": {
            "type": "Identifier",
            "name": "bar"
          }
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
})

test("( new foo).bar()", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "name": "foo"
            },
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "name": "bar"
          }
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script"
})