import { Parser } from './parser.js'
import { SyntaxTypes } from './type.js';

// 赋值语句
Parser.prototype.parseAssignmentExpression = function () {
  let token = this.readToken();

  return {
    type: SyntaxTypes.AssignmentExpression,
    operator: '',
    left: '',
    right:''
  }
}

// ?: 语句