import { test } from './test.js'

// new 
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

// var
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

// if
test("if (morning) goodMorning()", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "goodMorning"
          },
          "arguments": []
        }
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
})

// test("if (morning) (function(){})", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "IfStatement",
//       "test": {
//         "type": "Identifier",
//         "name": "morning"
//       },
//       "consequent": {
//         "type": "ExpressionStatement",
//         "expression": {
//           "type": "FunctionExpression",
//           "id": null,
//           "params": [],
//           "body": {
//             "type": "BlockStatement",
//             "body": []
//           },
//           "generator": false,
//           "expression": false,
//           "async": false
//         }
//       },
//       "alternate": null
//     }
//   ],
//   "sourceType": "script"
// })

test("if (morning) var x = 0;", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
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
              "value": 0,
              "raw": "0"
            }
          }
        ],
        "kind": "var"
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
})

// test("if (morning) function a(){}", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "IfStatement",
//       "test": {
//         "type": "Identifier",
//         "name": "morning"
//       },
//       "consequent": {
//         "type": "FunctionDeclaration",
//         "id": {
//           "type": "Identifier",
//           "name": "a"
//         },
//         "params": [],
//         "body": {
//           "type": "BlockStatement",
//           "body": []
//         },
//         "generator": false,
//         "expression": false,
//         "async": false
//       },
//       "alternate": null
//     }
//   ],
//   "sourceType": "script"
// })

test("if (morning) goodMorning(); else goodDay()", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "goodMorning"
          },
          "arguments": []
        }
      },
      "alternate": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "goodDay"
          },
          "arguments": []
        }
      }
    }
  ],
  "sourceType": "script"
})

test("if (true) that()\n; else;", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "that"
          },
          "arguments": []
        }
      },
      "alternate": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

test("if (true) that(); else;", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "that"
          },
          "arguments": []
        }
      },
      "alternate": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

// function
test("function hello() { sayHi(); }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "hello"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "sayHi"
              },
              "arguments": []
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

test("function eval() { }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "eval"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": []
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

test("function arguments() { }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "arguments"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": []
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

test("function test(t, t) { }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "test"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "t"
        },
        {
          "type": "Identifier",
          "name": "t"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": []
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

// test("(function test(t, t) { })",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "FunctionExpression",
//         "id": {
//           "type": "Identifier",
//           "name": "test"
//         },
//         "params": [
//           {
//             "type": "Identifier",
//             "name": "t"
//           },
//           {
//             "type": "Identifier",
//             "name": "t"
//           }
//         ],
//         "body": {
//           "type": "BlockStatement",
//           "body": []
//         },
//         "generator": false,
//         "expression": false,
//         "async": false
//       }
//     }
//   ],
//   "sourceType": "script"
// })

test("function eval() { function inner() { \"use strict\" } }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "eval"
      },
      "params": [],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "name": "inner"
            },
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Literal",
                    "value": "use strict",
                    "raw": "\"use strict\""
                  },
                  "directive": "use strict"
                }
              ]
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

test("function hello(a) { sayHi(); }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "hello"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "sayHi"
              },
              "arguments": []
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

test("function hello(a, b) { sayHi(); }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "hello"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "Identifier",
          "name": "b"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "sayHi"
              },
              "arguments": []
            }
          }
        ]
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

test("function hello(...rest) { }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "hello"
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "name": "rest"
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": []
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

test("function hello(a, ...rest) { }",{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "hello"
      },
      "params": [
        {
          "type": "Identifier",
          "name": "a"
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "name": "rest"
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": []
      },
      "generator": false,
      "expression": false,
      "async": false
    }
  ],
  "sourceType": "script"
})

test("var hi = function() { sayHi() };",{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "hi"
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "sayHi"
                    },
                    "arguments": []
                  }
                }
              ]
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var hi = function (...r) { sayHi() };",{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "hi"
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "name": "r"
                }
              }
            ],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "sayHi"
                    },
                    "arguments": []
                  }
                }
              ]
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var hi = function eval() { };",{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "hi"
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "name": "eval"
            },
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": []
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var hi = function arguments() { };",{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "hi"
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "name": "arguments"
            },
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": []
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("var hello = function hi() { sayHi() };",{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "hello"
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "name": "hi"
            },
            "params": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "sayHi"
                    },
                    "arguments": []
                  }
                }
              ]
            },
            "generator": false,
            "expression": false,
            "async": false
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "script"
})

test("(function(){})",{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
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
      }
    }
  ],
  "sourceType": "script"
})