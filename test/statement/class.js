import { test } from "../test.js"

test("class A {}", {
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "id": {
        "type": "Identifier",
        "name": "A"
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "body": []
      }
    }
  ],
  "sourceType": "script"
})

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