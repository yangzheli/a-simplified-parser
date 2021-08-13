import { test } from "../test.js"

test("`foo`", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "foo",
              "cooked": "foo"
            },
            "tail": true
          }
        ],
        "expressions": []
      }
    }
  ],
  "sourceType": "script"
})

test("`foo\\u25a0`", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "foo\\u25a0",
              "cooked": "foo■"
            },
            "tail": true
          }
        ],
        "expressions": []
      }
    }
  ],
  "sourceType": "script"
})

test("`foo${bar}\\u25a0`", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "foo",
              "cooked": "foo"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "\\u25a0",
              "cooked": "■"
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "Identifier",
            "name": "bar"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
})

test("foo`\\u25a0`", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "name": "foo"
        },
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "\\u25a0",
                "cooked": "■"
              },
              "tail": true
            }
          ],
          "expressions": []
        }
      }
    }
  ],
  "sourceType": "script"
})

test("foo`foo${bar}\\u25a0`", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "name": "foo"
        },
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "foo",
                "cooked": "foo"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "\\u25a0",
                "cooked": "■"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Identifier",
              "name": "bar"
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
})

// test("foo`\\unicode`", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "TaggedTemplateExpression",
//         "tag": {
//           "type": "Identifier",
//           "name": "foo"
//         },
//         "quasi": {
//           "type": "TemplateLiteral",
//           "quasis": [
//             {
//               "type": "TemplateElement",
//               "value": {
//                 "raw": "\\unicode",
//                 "cooked": "unicode"
//               },
//               "tail": true
//             }
//           ],
//           "expressions": []
//         }
//       }
//     }
//   ],
//   "sourceType": "script"
// })

"foo`foo${bar}\\unicode`"
"foo`\\u`"
"foo`\\u{`"
"foo`\\u{abcdx`"
"foo`\\u{abcdx}`"
"foo`\\unicode\\`"