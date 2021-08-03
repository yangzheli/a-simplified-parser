import { parse } from '../src/index.js'

export let count = 0; // 总测试案例数

export function test(input, except) {
  const ast = parse(input);
  const result = compare(ast, except);
  if (result)
    console.log("case '" + input + "': " + result);
  else
    console.log("case '" + input + "': " + result + "\n" + JSON.stringify(ast));
  ++count;
}

function compare(s, t) {
  if (typeof s === 'object' && typeof t === 'object') {
    for (let key in t) {
      if (!compare(s[key], t[key])) return false;
    }
    return true;
  }
  return s === t;
}