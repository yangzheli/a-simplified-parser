import { Parser } from './parser.js'

export function parse(input) {
    input = String(input);
    let p = new Parser(input);
    return p.parseProgram();
}