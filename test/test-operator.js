import { test } from './test.js'

// unary
test("x++", {
  "type": "Program",
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
    }
  ],
  "sourceType": "script"
})

test("x--", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("eval++", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "eval"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("eval--", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "eval"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("arguments++", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "arguments"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("arguments--", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "arguments"
        },
        "prefix": false
      }
    }
  ],
  "sourceType": "script"
})

test("++x", {
  "type": "Program",
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
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("--x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("++eval", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "eval"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("--eval", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "eval"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("++arguments", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "arguments"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("--arguments", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "arguments"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("+x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("-x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("~x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("!x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("void x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("delete x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

test("typeof x", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "name": "x"
        },
        "prefix": true
      }
    }
  ],
  "sourceType": "script"
})

// binary
test("x + y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "+",
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

test("x - y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "-",
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

test("x * y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
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

test("x / y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "/",
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

test("x % y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "%",
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

test("x << y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<<",
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

test("x >> y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">>",
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

test("x >>> y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">>>",
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

test("x < y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<",
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

test("x > y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">",
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

test("x <= y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<=",
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

test("x >= y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">=",
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

test("x in y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "in",
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

test("x instanceof y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "instanceof",
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

test("x < y < z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "BinaryExpression",
          "operator": "<",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x == y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "==",
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

test("x != y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "!=",
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

test("x === y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "===",
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

test("x !== y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "!==",
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

test("x & y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "&",
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

test("x ^ y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "^",
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

test("x | y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "|",
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

test("x + y + z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x - y + z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "operator": "-",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x + y - z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "-",
        "left": {
          "type": "BinaryExpression",
          "operator": "+",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x - y - z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "-",
        "left": {
          "type": "BinaryExpression",
          "operator": "-",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x + y * z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "+",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "*",
          "left": {
            "type": "Identifier",
            "name": "y"
          },
          "right": {
            "type": "Identifier",
            "name": "z"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x + y / z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "+",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "/",
          "left": {
            "type": "Identifier",
            "name": "y"
          },
          "right": {
            "type": "Identifier",
            "name": "z"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x - y % z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "-",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "%",
          "left": {
            "type": "Identifier",
            "name": "y"
          },
          "right": {
            "type": "Identifier",
            "name": "z"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x * y * z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "*",
        "left": {
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
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x * y / z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "/",
        "left": {
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
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x * y % z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "%",
        "left": {
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
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x % y * z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "*",
        "left": {
          "type": "BinaryExpression",
          "operator": "%",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x << y << z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "<<",
        "left": {
          "type": "BinaryExpression",
          "operator": "<<",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x | y | z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "|",
        "left": {
          "type": "BinaryExpression",
          "operator": "|",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x & y & z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "&",
        "left": {
          "type": "BinaryExpression",
          "operator": "&",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x ^ y ^ z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "^",
        "left": {
          "type": "BinaryExpression",
          "operator": "^",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x & y | z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "|",
        "left": {
          "type": "BinaryExpression",
          "operator": "&",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x | y ^ z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "|",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "^",
          "left": {
            "type": "Identifier",
            "name": "y"
          },
          "right": {
            "type": "Identifier",
            "name": "z"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x | y & z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": "|",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "&",
          "left": {
            "type": "Identifier",
            "name": "y"
          },
          "right": {
            "type": "Identifier",
            "name": "z"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x || y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "||",
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

test("x && y", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "&&",
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

test("x || y || z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "operator": "||",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x && y && z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "right": {
          "type": "Identifier",
          "name": "z"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x || y && z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "name": "y"
          },
          "right": {
            "type": "Identifier",
            "name": "z"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x || y ^ z", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "BinaryExpression",
          "operator": "^",
          "left": {
            "type": "Identifier",
            "name": "y"
          },
          "right": {
            "type": "Identifier",
            "name": "z"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = 42", {
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
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("eval = 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "eval"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("arguments = 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "name": "arguments"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x *= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x /= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x %= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "%=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x += 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x -= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x <<= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "<<=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x >>= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": ">>=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x >>>= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": ">>>=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x &= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x ^= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "^=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x |= 42", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "|=",
        "left": {
          "type": "Identifier",
          "name": "x"
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})

// ternary 
test("y ? 1 : 2", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "Identifier",
          "name": "y"
        },
        "consequent": {
          "type": "Literal",
          "value": 1,
          "raw": "1"
        },
        "alternate": {
          "type": "Literal",
          "value": 2,
          "raw": "2"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x && y ? 1 : 2", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "name": "x"
          },
          "right": {
            "type": "Identifier",
            "name": "y"
          }
        },
        "consequent": {
          "type": "Literal",
          "value": 1,
          "raw": "1"
        },
        "alternate": {
          "type": "Literal",
          "value": 2,
          "raw": "2"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("x = (0) ? 1 : 2", {
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
          "type": "ConditionalExpression",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0"
          },
          "consequent": {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          },
          "alternate": {
            "type": "Literal",
            "value": 2,
            "raw": "2"
          }
        }
      }
    }
  ],
  "sourceType": "script"
})

// brace 
test("{ foo }", {
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "Identifier",
            "name": "foo"
          }
        }
      ]
    }
  ],
  "sourceType": "script"
})

test("{ doThis(); doThat(); }", {
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "doThis"
            },
            "arguments": []
          }
        },
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
    }
  ],
  "sourceType": "script"
})

test("{}", {
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": []
    }
  ],
  "sourceType": "script"
})

// dot
test("universe.milkyway", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "name": "universe"
        },
        "property": {
          "type": "Identifier",
          "name": "milkyway"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("universe.milkyway.solarsystem", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "universe"
          },
          "property": {
            "type": "Identifier",
            "name": "milkyway"
          }
        },
        "property": {
          "type": "Identifier",
          "name": "solarsystem"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("universe.milkyway.solarsystem.Earth", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "universe"
            },
            "property": {
              "type": "Identifier",
              "name": "milkyway"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "solarsystem"
          }
        },
        "property": {
          "type": "Identifier",
          "name": "Earth"
        }
      }
    }
  ],
  "sourceType": "script"
})

// test("universe[galaxyName, otherUselessName]", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "MemberExpression",
//         "computed": true,
//         "object": {
//           "type": "Identifier",
//           "name": "universe"
//         },
//         "property": {
//           "type": "SequenceExpression",
//           "expressions": [
//             {
//               "type": "Identifier",
//               "name": "galaxyName"
//             },
//             {
//               "type": "Identifier",
//               "name": "otherUselessName"
//             }
//           ]
//         }
//       }
//     }
//   ],
//   "sourceType": "script"
// })

test("universe[galaxyName]", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "name": "universe"
        },
        "property": {
          "type": "Identifier",
          "name": "galaxyName"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("universe[42].galaxies", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "universe"
          },
          "property": {
            "type": "Literal",
            "value": 42,
            "raw": "42"
          }
        },
        "property": {
          "type": "Identifier",
          "name": "galaxies"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("universe(42).galaxies", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "universe"
          },
          "arguments": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42"
            }
          ]
        },
        "property": {
          "type": "Identifier",
          "name": "galaxies"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("universe(42).galaxies(14, 3, 77).milkyway", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "universe"
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42"
                }
              ]
            },
            "property": {
              "type": "Identifier",
              "name": "galaxies"
            }
          },
          "arguments": [
            {
              "type": "Literal",
              "value": 14,
              "raw": "14"
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3"
            },
            {
              "type": "Literal",
              "value": 77,
              "raw": "77"
            }
          ]
        },
        "property": {
          "type": "Identifier",
          "name": "milkyway"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("earth.asia.Indonesia.prepareForElection(2014)", {
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "earth"
              },
              "property": {
                "type": "Identifier",
                "name": "asia"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "Indonesia"
            }
          },
          "property": {
            "type": "Identifier",
            "name": "prepareForElection"
          }
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 2014,
            "raw": "2014"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("universe.if", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "name": "universe"
        },
        "property": {
          "type": "Identifier",
          "name": "if"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("universe.true", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "name": "universe"
        },
        "property": {
          "type": "Identifier",
          "name": "true"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("universe.false", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "name": "universe"
        },
        "property": {
          "type": "Identifier",
          "name": "false"
        }
      }
    }
  ],
  "sourceType": "script"
})

test("universe.null", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "name": "universe"
        },
        "property": {
          "type": "Identifier",
          "name": "null"
        }
      }
    }
  ],
  "sourceType": "script"
})

// semicolon
test(";", {
  "type": "Program",
  "body": [
    {
      "type": "EmptyStatement"
    }
  ],
  "sourceType": "script"
})

test("x = 42;", {
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
          "type": "Literal",
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "sourceType": "script"
})


// complex
test("a || b && c | d ^ e & f == g < h >>> i + j * k", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "name": "a"
        },
        "right": {
          "type": "LogicalExpression",
          "operator": "&&",
          "left": {
            "type": "Identifier",
            "name": "b"
          },
          "right": {
            "type": "BinaryExpression",
            "operator": "|",
            "left": {
              "type": "Identifier",
              "name": "c"
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "^",
              "left": {
                "type": "Identifier",
                "name": "d"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "&",
                "left": {
                  "type": "Identifier",
                  "name": "e"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "name": "f"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "g"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": ">>>",
                      "left": {
                        "type": "Identifier",
                        "name": "h"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "name": "j"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "k"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  ],
  "sourceType": "script"
})