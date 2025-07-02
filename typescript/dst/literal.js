"use strict";
// リテラル型
Object.defineProperty(exports, "__esModule", { value: true });
let postStatus;
postStatus = 'draft'; // OK
// postStatus = 'drafts' // NG
// -1, 0, 1, いずれしか許さない
function compare(a, b) {
    return a === b ? 0 : (a > b) ? 1 : -1;
}
