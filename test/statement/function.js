import { test } from "../test.js"

test("function hello() { sayHi(); }", {
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

test("function eval() { }", {
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

test("function arguments() { }", {
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

test("function test(t, t) { }", {
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

test("(function test(t, t) { })", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "FunctionExpression",
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
    }
  ],
  "sourceType": "script"
})

test("function eval() { function inner() { \"use strict\" } }", {
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

test("function hello(a) { sayHi(); }", {
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

test("function hello(a, b) { sayHi(); }", {
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

test("function hello(...rest) { }", {
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

test("function hello(a, ...rest) { }", {
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

test("var hi = function() { sayHi() };", {
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

test("var hi = function (...r) { sayHi() };", {
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

test("var hi = function eval() { };", {
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

test("var hi = function arguments() { };", {
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

test("var hello = function hi() { sayHi() };", {
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

test("(function(){})", {
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