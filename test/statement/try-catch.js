import { test } from "../test.js"

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