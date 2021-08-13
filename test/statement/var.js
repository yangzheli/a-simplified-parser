import { test } from "../test.js"

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