import { test } from "../test.js"

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