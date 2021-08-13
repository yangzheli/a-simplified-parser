import { test } from "../test.js"

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