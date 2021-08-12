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

// template
test("`foo`", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "foo",
              "cooked": "foo"
            },
            "tail": true
          }
        ],
        "expressions": []
      }
    }
  ],
  "sourceType": "script"
})

test("`foo\u25a0`", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "foo\\u25a0",
              "cooked": "foo■"
            },
            "tail": true
          }
        ],
        "expressions": []
      }
    }
  ],
  "sourceType": "script"
})

test("`foo${bar}\u25a0`", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "foo",
              "cooked": "foo"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u25a0",
              "cooked": "■"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "Identifier",
            "name": "bar"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

// foo`\u25a0`
// foo`foo${bar}\u25a0`
// foo`\unicode`
// foo`foo${bar}\unicode`
// foo`\u`
// foo`\u{`
// foo`\u{abcdx`
// foo`\u{abcdx}`
// foo`\unicode\\`

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

test("x = { get width() { return m_width } }", {
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
                "name": "width"
              },
              "computed": false,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "name": "m_width"
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "get",
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

test("x = { get undef() { } }", {
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
                "name": "undef"
              },
              "computed": false,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "get",
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

test("x = { get if() { } }", {
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
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "get",
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

test("x = { get true() { } }", {
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
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "get",
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

test("x = { get false() { } }", {
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
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "get",
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

test("x = { get null() { } }", {
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
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "get",
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

test("x = { get \"undef\"() { } }", {
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
                "value": "undef",
                "raw": "\"undef\""
              },
              "computed": false,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "get",
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

test("x = { get 10() { } }", {
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
                "value": 10,
                "raw": "10"
              },
              "computed": false,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "body": []
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "get",
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

test("x = { set width(w) { m_width = w } }", {
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
                "name": "width"
              },
              "computed": false,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "w"
                  }
                ],
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
                          "name": "m_width"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "w"
                        }
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "set",
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

test("x = { set if(w) { m_if = w } }", {
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
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "w"
                  }
                ],
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
                          "name": "m_if"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "w"
                        }
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "set",
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

test("x = { set true(w) { m_true = w } }", {
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
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "w"
                  }
                ],
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
                          "name": "m_true"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "w"
                        }
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "set",
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

test("x = { set false(w) { m_false = w } }", {
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
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "w"
                  }
                ],
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
                          "name": "m_false"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "w"
                        }
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "set",
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

test("x = { set null(w) { m_null = w } }", {
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
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "w"
                  }
                ],
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
                          "name": "m_null"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "w"
                        }
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "set",
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

test("x = { set \"null\"(w) { m_null = w } }", {
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
                "value": "null",
                "raw": "\"null\""
              },
              "computed": false,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "w"
                  }
                ],
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
                          "name": "m_null"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "w"
                        }
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "set",
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

test("x = { set 10(w) { m_null = w } }", {
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
                "value": 10,
                "raw": "10"
              },
              "computed": false,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "w"
                  }
                ],
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
                          "name": "m_null"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "w"
                        }
                      }
                    }
                  ]
                },
                "generator": false,
                "expression": false,
                "async": false
              },
              "kind": "set",
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

// other
test("this", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ThisExpression"
      }
    }
  ],
  "sourceType": "script"
})

test("null", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "null"
      }
    }
  ],
  "sourceType": "script"
})