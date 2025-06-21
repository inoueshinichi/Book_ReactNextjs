"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 型推論
const age = 10; // 推論している
// console.log(age.length) // ageはNumber型なのでlengthプロパティはない
const user1 = {
    name: 'TinyTank',
    age: 35,
};
// console.log(user.age.length)
function getUser() {
    return {
        name: 'Tank',
        age: 35,
    };
}
const user2 = getUser();
// console.log(user2.age.length)
// 配列の型推論
const names = ['Inoue', 'Shinichi', 'Tiny', 'Tank'];
names.forEach((name) => {
    // string型
    console.log(name.toUpperCase()); // toUppercase()と関数名を間違えるとアウトです
});
/**
 * TypeScriptの型推論は代入する先の変数の値の型が決まっている際に
 * 代入する値と型が一致しない場合エラーになる推論機能がある!!!!!!!
 */
// windowオブジェクトの例
// widnow.confirm関数の戻り値はbooleanを返すことをTypeScriptは知っているため
// 代入する関数の型が一致しない場合、コンパイルエラーになる.
window.confirm = () => {
    // booleanをreturnしない限りエラー
    console.log('confirm関数');
    return false; // とりあえずfalseを返す
};
/** 型アサーション
 * TypeScriptが具体的な型を知ることができないケースがある
 * 例: document.getElementById()の戻り値は, HTMLElement or null のどちらかが来ることしかわからない
 * HTMLElementもdivやcanvasで型が分岐しており、TypeScript側ではわからない
 * ダウンキャスト or アップキャスト = 型アサーション
 * const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement
 *
 * TypeScriptの型アサーションの挙動
 * ・対象となる型に対して具体的になる型　（ダウンキャスト)
 * ・対象の型がより汎化される型 (アップキャスト)
 *
 *  => 対応できない場合が発生するケースがある. この場合, anyを経由する
 *  source -> any -> sink
 *
 *  e.g.
 *  const result = (response as any) as User
 */
const myCanvas = document.getElementById('main-canvas');
// console.log(myCanvas.width) // エラー
const concreteMyCanvas = myCanvas;
console.log(concreteMyCanvas); // OK
// 型アサーションはRuntimeエラーを発生させるケースがあるので利用は最小限にする
const hoge = 'test';
const fuga = hoge;
console.log(fuga.toFixed(2)); // <===== 実行時エラーが発生する
function printPoint(point) {
    console.log(point);
}
// プロパティ名が異なるとエラー
// printPoint({ y: 100, z: 100 })
printPoint({ x: 100, y: 100 });
function printFormat(firstName, formatter) {
    console.log(formatter(firstName));
}
const labels = {
    topTitle: 'トップページのタイトルです',
    topSubTitle: 'トップページのサブタイトルです',
    topFeature1: 'トップページの機能1です',
    topFeature2: 'トップページの機能2です',
};
