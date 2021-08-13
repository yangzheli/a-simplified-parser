import { parse } from "../src/index.js"

export let success = 0, failure = 0 // 成功、失败测试案例数

function compare(s, t) {
  if (typeof s === "object" && typeof t === "object") {
    for (let key in t) {
      if (!compare(s[key], t[key])) return false
    }
    return true
  }
  return s === t
}

export function test(input, except) {
  const ast = parse(input)
  const result = compare(ast, except)
  if (result) {
    // eslint-disable-next-line no-console
    console.log("case '" + input + "': " + result)
    ++success
  } else {
    // eslint-disable-next-line no-console
    console.log("case '" + input + "': " + result + "\n" + JSON.stringify(ast))
    ++failure
  }
}