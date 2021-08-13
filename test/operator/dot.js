import { test } from "../test.js"

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