import { test } from "../test.js"

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

test("done: while (true) { continue done; }", {
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

test("done: while (true) { break done }", {
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

test("done: while (true) { break done; }", {
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