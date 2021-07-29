import { parse } from '../src/index.js'

function test(input, except) {
  const ast = parse(input);
  const result = compare(ast, except);
  if (result)
    console.log("case '" + input + "': " + result);
  else
    console.log("case '" + input + "': " + result + "\n" + JSON.stringify(ast));
}

function compare(s, t) {
  if (typeof s === 'object' && typeof t === 'object') {
    for (let key in t) {
      if (!compare(s[key], t[key])) return false;
    }
    return true;
  }
  return s === t;
}

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

test("09.5", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 9.5,
        "raw": "09.5"
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

"\"\\n\\r\\t\\v\\b\\f\\\\\\'\\\"\\0\""
"\"\\u0061\""
"\"\\x61\""
"\"Hello\\nworld\""
"\"Hello\\\nworld\""
"\"Hello\\\u2028world\""
"\"Hello\\\u2029world\""
"\"Hello\\02World\""
"\"Hello\\012World\""
"\"Hello\\122World\""
"\"Hello\\0122World\""
"\"Hello\\312World\""
"\"Hello\\412World\""
"\"Hello\\812World\""
"\"Hello\\712World\""
"\"Hello\\0World\""
"\"Hello\\\r\nworld\""
"\"Hello\\1World\""

// variable declaration
test("var x", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": null
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var await", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "await"
          },
          "init": null
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x, y;", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "y"
          },
          "init": null
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x = 42", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x = 4 * 2;", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "*",
            "left": {
              "type": "Literal",
              "value": 4,
              "raw": "4"
            },
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2"
            }
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var eval = 42, arguments = 42", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "eval"
          },
          "init": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          }
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "arguments"
          },
          "init": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x = 14, y = 3, z = 1977", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": {
            "type": "Literal",
            "value": 14,
            "raw": "14"
          }
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "y"
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3"
          }
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "z"
          },
          "init": {
            "type": "Literal",
            "value": 1977,
            "raw": "1977"
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var implements, interface, package", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "implements"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "interface"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "package"
          },
          "init": null
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var private, protected, public, static", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "private"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "protected"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "public"
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "static"
          },
          "init": null
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x = /[a-z]/;", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": {
            "type": "Literal",
            "value": "/[a-z]/",
            "raw": "/[a-z]/",
            "regex": {
              "pattern": "[a-z]",
              "flags": ""
            }
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x = /[a-z]/i;", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": {
            "type": "Literal",
            "value": "/[a-z]/i",
            "raw": "/[a-z]/i",
            "regex": {
              "pattern": "[a-z]",
              "flags": "i"
            }
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x = /foo\\/bar/", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": {
            "type": "Literal",
            "value": "/foo\\/bar/",
            "raw": "/foo\\/bar/",
            "regex": {
              "pattern": "foo\\/bar",
              "flags": ""
            }
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x = /=([^=\\s])+/g", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": {
            "type": "Literal",
            "value": "/=([^=\\s])+/g",
            "raw": "/=([^=\\s])+/g",
            "regex": {
              "pattern": "=([^=\\s])+",
              "flags": "g"
            }
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var x /* comment */;", {
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "x"
          },
          "init": null
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})