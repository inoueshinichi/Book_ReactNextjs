"use strict";
// unknownはanyと同じくなんでも代入できる型だが、
// 代入された値は、そのまま任意の関数やプロパティにアクセスできない。
// typeof や instanceof で型安全な状況をつくることで変数の値にアクセスできるようになる.
Object.defineProperty(exports, "__esModule", { value: true });
// anyと同様にどんな値でもunknownとして代入できる
const x = 123;
const y = "Tiny";
// 関数やプロパティにアクセスした際に, unknown型そのままでは
// コンパイル時にエラーが発生する
// console.log(x.toFixed(1))
// 型安全な状況(型ガード後)ならばアクセス可能
if (typeof x === 'number') {
    console.log(x.toFixed(1)); // 123.0
}
if (typeof y === 'string') {
    console.log(y.toLowerCase()); // tiny
}
