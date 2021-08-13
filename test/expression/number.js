import { test } from "../test.js"

test("0", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 0,
        "raw": "0"
      }
    }
  ],
  "sourceType": "script"
})

test(".14", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 0.14,
        "raw": ".14"
      }
    }
  ],
  "sourceType": "script"
})

test("3.14159", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 3.14159,
        "raw": "3.14159"
      }
    }
  ],
  "sourceType": "script"
})

// test("0008", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "Literal",
//         "value": 8,
//         "raw": "0008"
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("09", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "Literal",
//         "value": 9,
//         "raw": "09"
//       }
//     }
//   ],
//   "sourceType": "script"
// })

// test("09.5", {
//   "type": "Program",
//   "body": [
//     {
//       "type": "ExpressionStatement",
//       "expression": {
//         "type": "Literal",
//         "value": 9.5,
//         "raw": "09.5"
//       }
//     }
//   ],
//   "sourceType": "script"
// })

test("0x0", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 0,
        "raw": "0x0"
      }
    }
  ],
  "sourceType": "script"
})

test("0xabc", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 2748,
        "raw": "0xabc"
      }
    }
  ],
  "sourceType": "script"
})

test("0xdef", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 3567,
        "raw": "0xdef"
      }
    }
  ],
  "sourceType": "script"
})

test("0X1A", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 26,
        "raw": "0X1A"
      }
    }
  ],
  "sourceType": "script"
})

test("0x10", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 16,
        "raw": "0x10"
      }
    }
  ],
  "sourceType": "script"
})

test("0x100", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 256,
        "raw": "0x100"
      }
    }
  ],
  "sourceType": "script"
})

test("0X04", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 4,
        "raw": "0X04"
      }
    }
  ],
  "sourceType": "script"
})

test("02", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 2,
        "raw": "02"
      }
    }
  ],
  "sourceType": "script"
})

test("012", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 10,
        "raw": "012"
      }
    }
  ],
  "sourceType": "script"
})

test("0012", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 10,
        "raw": "0012"
      }
    }
  ],
  "sourceType": "script"
})

test("6.02214179e+23", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 6.02214179e+23,
        "raw": "6.02214179e+23"
      }
    }
  ],
  "sourceType": "script"
})

test("1.492417830e-10", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.49241783e-10,
        "raw": "1.492417830e-10"
      }
    }
  ],
  "sourceType": "script"
})

test("0e+100", {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 0,
        "raw": "0e+100"
      }
    }
  ],
  "sourceType": "script"
})