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

test("if (morning) (function(){})", {
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
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
})

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

test("if (morning) function a(){}", {
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "name": "morning"
      },
      "consequent": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "a"
        },
        "params": [],
        "body": {
          "type": "BlockStatement",
          "body": []
        },
        "generator": false,
        "expression": false,
        "async": false
      },
      "alternate": null
    }
  ],
  "sourceType": "script"
})

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

// for
test("for(;;);", {
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

test("for(;;){}", {
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": []
      }
    }
  ],
  "sourceType": "script"
})

test("for(x = 0;;);", {
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0"
        }
      },
      "test": null,
      "update": null,
      "body": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

test("for(var x = 0;;);", {
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
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
      "test": null,
      "update": null,
      "body": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

test("for(var x = 0, y = 1;;);", {
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
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
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "y"
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1"
            }
          }
        ],
        "kind": "var"
      },
      "test": null,
      "update": null,
      "body": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

test("for(x = 0; x < 42;);", {
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0"
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      },
      "update": null,
      "body": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

test("for(x = 0; x < 42; x++);", {
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0"
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": false
      },
      "body": {
        "type": "EmptyStatement"
      }
    }
  ],
  "sourceType": "script"
})

test("for(x = 0; x < 42; x++) process(x);", {
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0"
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": false
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "process"
          },
          "arguments": [
            {
              "type": "Identifier",
              "name": "x"
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("for(x in list) process(x);", {
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "name": "x"
      },
      "right": {
        "type": "Identifier",
        "name": "list"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "process"
          },
          "arguments": [
            {
              "type": "Identifier",
              "name": "x"
            }
          ]
        }
      },
      "each": false
    }
  ],
  "sourceType": "script"
})

test("for (var x in list) process(x);", {
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
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
      },
      "right": {
        "type": "Identifier",
        "name": "list"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "process"
          },
          "arguments": [
            {
              "type": "Identifier",
              "name": "x"
            }
          ]
        }
      },
      "each": false
    }
  ],
  "sourceType": "script"
})

// test("var x; for (x = 0 in list) process(x);")
// test("'use strict'; for (var x = 0 in list) process(x);")
// test("for (var [x] = 0 in list) process(x);")
// test("for (var {x} = 0 in list) process(x);")
// test("for (var x = 42 in list) process(x);")
// test("for (var x = 42 in list) process(x);")
// test("for (var i = function() { return 10 in [] } in list) process(x);")

// do while
test("do keep(); while (true)", {
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "keep"
          },
          "arguments": []
        }
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      }
    }
  ],
  "sourceType": "script"
})

test("do keep(); while (true);", {
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "keep"
          },
          "arguments": []
        }
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      }
    }
  ],
  "sourceType": "script"
})

test("do { x++; y--; } while (x < 10)", {
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "x"
              },
              "prefix": false
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "argument": {
                "type": "Identifier",
                "name": "y"
              },
              "prefix": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("{ do { } while (false);false }", {
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "DoWhileStatement",
          "body": {
            "type": "BlockStatement",
            "body": []
          },
          "test": {
            "type": "Literal",
            "value": false,
            "raw": "false"
          }
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Literal",
            "value": false,
            "raw": "false"
          }
        }
      ]
    }
  ],
  "sourceType": "script"
})

test("while (true) doSomething()", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "doSomething"
          },
          "arguments": []
        }
      }
    }
  ],
  "sourceType": "script"
})

test("while (x < 10) { x++; y--; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10"
        }
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "argument": {
                "type": "Identifier",
                "name": "x"
              },
              "prefix": false
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "--",
              "argument": {
                "type": "Identifier",
                "name": "y"
              },
              "prefix": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})


// break continue
test("while (true) { continue; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("while (true) { continue }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("done: while (true) { continue done }", {
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "name": "done"
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "name": "done"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("done: while (true) { continue done; }",{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "name": "done"
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "name": "done"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("while (true) { break }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("done: while (true) { break done }",{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "name": "done"
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "name": "done"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("done: while (true) { break done; }",{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "name": "done"
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "BreakStatement",
              "label": {
                "type": "Identifier",
                "name": "done"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

test("while (true) { continue\nthere; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "name": "there"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("while (true) { continue // Comment\nthere; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "name": "there"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("while (true) { continue /* Multiline\nComment */there; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ContinueStatement",
            "label": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "name": "there"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("while (true) { break\nthere; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "name": "there"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("while (true) {break // Comment\nthere; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "name": "there"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("while (true) { break /* Multiline\nComment */there; }", {
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": null
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "name": "there"
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

// switch case
test("switch (x) {}", {
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "name": "x"
      },
      "cases": []
    }
  ],
  "sourceType": "script"
})

test("switch (answer) { case 42: hi(); break; }", {
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "name": "answer"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "hi"
                },
                "arguments": []
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script"
})

test("switch (answer) { case 42: hi(); break; default: break }", {
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "name": "answer"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "hi"
                },
                "arguments": []
              }
            },
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script"
})


// function
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

test("(function test(t, t) { })",{
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


// class
// test("class A {}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": []
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A extends 0 {}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": {
//         "type": "Literal",
//         "value": 0,
//         "raw": "0"
//       },
//       "body": {
//         "type": "ClassBody",
//         "body": []
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A {;}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": []
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A {;;}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": []
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A {a(){}}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": [
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "a"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           }
//         ]
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A {a(){}b(){}}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": [
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "a"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           },
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "b"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           }
//         ]
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A {a(){};b(){}}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": [
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "a"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           },
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "b"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           }
//         ]
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A {a(){};b(){};}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": [
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "a"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           },
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "b"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           }
//         ]
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A {;a(){};b(){};}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": [
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "a"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           },
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "b"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           }
//         ]
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("class A {static(){};}",{
//   "type": "Program",
//   "body": [
//     {
//       "type": "ClassDeclaration",
//       "id": {
//         "type": "Identifier",
//         "name": "A"
//       },
//       "superClass": null,
//       "body": {
//         "type": "ClassBody",
//         "body": [
//           {
//             "type": "MethodDefinition",
//             "key": {
//               "type": "Identifier",
//               "name": "static"
//             },
//             "computed": false,
//             "value": {
//               "type": "FunctionExpression",
//               "id": null,
//               "params": [],
//               "body": {
//                 "type": "BlockStatement",
//                 "body": []
//               },
//               "generator": false,
//               "expression": false,
//               "async": false
//             },
//             "kind": "method",
//             "static": false
//           }
//         ]
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// class A {get a(){} set b(c){};}
// class A {static a(){} static get a(){} static set a(b){} }
// class A {static a(){};}
// class A {static [a](){};}
// class A {static[a](){}; static[b](){}}
// class A {static static(){};}
// var x = class A extends 0{}
// class A {prototype(){}}
// class A {constructor(){}}
// class A {"constructor"(){} ["constructor"](){}}
// class A {static constructor(){} static constructor(){}}
// class A {static ["prototype"](){}}
// (class {})
// (class A {})
// (class extends 0{})
// (class A extends 0{})
// class A {a(eval){}}

// labelled
test("start: for (;;) break start",{
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

test("start: while (true) break start",{
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

test("__proto__: test",{
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

// return 
test("(function(){ return })", {
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
          "body": [
            {
              "type": "ReturnStatement",
              "argument": null
            }
          ]
        },
        "generator": false,
        "expression": false,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})

test("(function(){ return; })", {
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
          "body": [
            {
              "type": "ReturnStatement",
              "argument": null
            }
          ]
        },
        "generator": false,
        "expression": false,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})

test("(function(){ return x; })", {
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
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "x"
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
  "sourceType": "script"
})

test("(function(){ return x * y })", {
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
          "body": [
            {
              "type": "ReturnStatement",
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
          ]
        },
        "generator": false,
        "expression": false,
        "async": false
      }
    }
  ],
  "sourceType": "script"
})

// throw
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

// try catch 
test("try { } catch (e) { }", {
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "name": "e"
        },
        "body": {
          "type": "BlockStatement",
          "body": []
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script"
})

test("try { } catch (eval) { }", {
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "name": "eval"
        },
        "body": {
          "type": "BlockStatement",
          "body": []
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script"
})

test("try { } catch (arguments) { }", {
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "name": "arguments"
        },
        "body": {
          "type": "BlockStatement",
          "body": []
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script"
})
test("try { } catch (e) { say(e) }", {
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "name": "e"
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "say"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "e"
                  }
                ]
              }
            }
          ]
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script"
})

test("try { } finally { cleanup(stuff) }", {
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": []
      },
      "handler": null,
      "finalizer": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "cleanup"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "stuff"
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("try { doThat(); } catch (e) { say(e) }", {
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "doThat"
              },
              "arguments": []
            }
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "name": "e"
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "say"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "e"
                  }
                ]
              }
            }
          ]
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script"
})

test("try { doThat(); } catch (e) { say(e) } finally { cleanup(stuff) }", {
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "doThat"
              },
              "arguments": []
            }
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "name": "e"
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "say"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "e"
                  }
                ]
              }
            }
          ]
        }
      },
      "finalizer": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "cleanup"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "name": "stuff"
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("\"use strict\";\ntry {} catch (evil) {}", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "name": "evil"
        },
        "body": {
          "type": "BlockStatement",
          "body": []
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script"
})

// with
test("with (x) foo = bar", {
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "name": "x"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "name": "foo"
          },
          "right": {
            "type": "Identifier",
            "name": "bar"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("with (x) foo = bar;", {
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "name": "x"
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "name": "foo"
          },
          "right": {
            "type": "Identifier",
            "name": "bar"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("with (x) { foo = bar }", {
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "name": "x"
      },
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
                "name": "foo"
              },
              "right": {
                "type": "Identifier",
                "name": "bar"
              }
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

// debugger
test("debugger;", {
  "type": "Program",
  "body": [
    {
      "type": "DebuggerStatement"
    }
  ],
  "sourceType": "script"
})