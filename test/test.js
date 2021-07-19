import { parse } from '../src/index.js'

const ast = parse('var x = 1;');
console.log(ast);