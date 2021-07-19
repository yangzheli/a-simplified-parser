import { Parser } from './parser.js'
import './statement.js'
import './tokenize.js'
import './utils.js'

export function parse(input) {
    input = String(input);
    let p = new Parser(input);
    return p.parseProgram();
}