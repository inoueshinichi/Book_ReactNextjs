"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// プリミティブ型
let age = 36;
let isDone = false;
let color = '青';
// 配列
const array = [];
array.push("TinyTank");
const mixedArray = ['foo', 1]; // 型推論
const mixedArrayU = ['baz', 2]; // Union型
const mixedArrayT = ['biz', 3]; // タプル
// オブジェクト
const user = {
    name: "TinyTank",
    age: 35,
};
console.log(user.name);
console.log(user.age);
// 省略可能なプロパティ(?)
function printName(obj) {
    const { firstName, lastName } = obj;
    console.log(firstName);
    if (lastName != null) {
        console.log(lastName);
    }
    else {
        console.log("lastName is null or undefined");
    }
}
printName({ firstName: "tank" });
printName({ firstName: "tiny", lastName: "tank" });
// any
let num = { randNum: Math.random() };
num.hello();
num();
num.age;
/* 静的型チェックを行わない限り, 実行時エラー発生 */
num = 'Hello';
const n = num;
// Runtime Error
// 関数
function sayHello(name) {
    return `Hello ${name}`;
}
sayHello('Tiny');
// オプショナル引数も使える
function sayOps(name, greeting) {
    return `${greeting} ${name}`;
}
sayOps('Tiny', 'Hello');
sayOps('Tiny');
// 関数型
function print(firstName, formatter) {
    console.log(formatter(firstName));
}
print('TinyTank', (name) => (`${name}さん`)); // TinyTankさん
// アロー関数の型
let hello = (name) => `Hello ${name}`;
console.log(hello('TinyTank'));
function genBirdsInfo(name) {
    return name.split(',');
}
console.log(genBirdsInfo('piyo,piyo'));
function singBirds(birdInfo) {
    return birdInfo('Hato, Kiji')[0] + ' piyo piyo';
}
console.log(singBirds(genBirdsInfo)); // Hato piyo piyo
// console.log(singBirds('dobato')) // 型が合わない
