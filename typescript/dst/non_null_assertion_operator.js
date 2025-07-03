"use strict";
// Non-null Assertion Operator
// --strictNullCkecksオプションをtrueにしている場合,
// TypeScriptは通常nullの可能性のあるオブジェクトへのアクセスはエラー扱いにする.
// 明示的にコンパイラに問題ないことをつたえる機能.
Object.defineProperty(exports, "__esModule", { value: true });
// userがnullの場合, 実行時エラーになる可能性がある
// プロパティへのアクセスはコンパイルエラー!を用いて
// 明示的に指定することでコンパイルエラーを抑制する
function processUser(user) {
    let s = user.name;
    console.log(`user.name: ${s}`);
}
let user = { name: "TinyTank" };
processUser(user);
