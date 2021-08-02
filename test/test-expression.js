import { test } from './test.js'

// number
test("0", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 0,
        "raw": "0"
      }
    }
  ],
  "sourceType": "script"
})

test(".14", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 0.14,
        "raw": ".14"
      }
    }
  ],
  "sourceType": "script"
})

test("3.14159", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 3.14159,
        "raw": "3.14159"
      }
    }
  ],
  "sourceType": "script"
})

// test("0008", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "Literal",
//         "value": 8,
//         "raw": "0008"
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("09", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "Literal",
//         "value": 9,
//         "raw": "09"
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("09.5", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "Literal",
//         "value": 9.5,
//         "raw": "09.5"
//       }
//     }
//   ],
//   "sourceType": "script"
// })

test("0x0", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 0,
        "raw": "0x0"
      }
    }
  ],
  "sourceType": "script"
})

test("0xabc", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 2748,
        "raw": "0xabc"
      }
    }
  ],
  "sourceType": "script"
})

test("0xdef", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 3567,
        "raw": "0xdef"
      }
    }
  ],
  "sourceType": "script"
})

test("0X1A", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 26,
        "raw": "0X1A"
      }
    }
  ],
  "sourceType": "script"
})

test("0x10", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 16,
        "raw": "0x10"
      }
    }
  ],
  "sourceType": "script"
})

test("0x100", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 256,
        "raw": "0x100"
      }
    }
  ],
  "sourceType": "script"
})

test("0X04", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 4,
        "raw": "0X04"
      }
    }
  ],
  "sourceType": "script"
})

test("02", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 2,
        "raw": "02"
      }
    }
  ],
  "sourceType": "script"
})

test("012", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 10,
        "raw": "012"
      }
    }
  ],
  "sourceType": "script"
})

test("0012", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 10,
        "raw": "0012"
      }
    }
  ],
  "sourceType": "script"
})

test("6.02214179e+23", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 6.02214179e+23,
        "raw": "6.02214179e+23"
      }
    }
  ],
  "sourceType": "script"
})

test("1.492417830e-10", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.49241783e-10,
        "raw": "1.492417830e-10"
      }
    }
  ],
  "sourceType": "script"
})

test("0e+100", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 0,
        "raw": "0e+100"
      }
    }
  ],
  "sourceType": "script"
})

// string 
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

// regexp

// array
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

// object
test("x = {}", {
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
          "type": "ObjectExpression",
          "properties": []
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = { }", {
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
          "type": "ObjectExpression",
          "properties": []
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = { answer: 42 }", {
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
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "answer"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = { if: 42 }", {
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
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "if"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = { true: 42 }", {
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
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "true"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = { false: 42 }", {
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
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "false"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = { null: 42 }", {
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
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "null"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = { \"answer\": 42 }", {
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
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Literal",
                "value": "answer",
                "raw": "\"answer\""
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = { x: 1, x: 2 }", {
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
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "x"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            },
            {
              "type": "Property",
              "key": {
                "type": "Identifier",
                "name": "x"
              },
              "computed": false,
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2"
              },
              "kind": "init",
              "method": false,
              "shorthand": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})
