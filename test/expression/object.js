import { test } from "../test.js"

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