"use strict";
// インデックス型
// オブジェクトのプロパティが可変の時、まとめて型定義できる
Object.defineProperty(exports, "__esModule", { value: true });
// stringのプロパティに定義した場合エラーが起きる
let versions = {
    102: false,
    103: false,
    104: true,
    '105': false, // OK
    // 'v106': true, 
};
