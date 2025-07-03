"use strict";
// 非同期のAsync/Await
Object.defineProperty(exports, "__esModule", { value: true });
// 非同期関数
function fetchFromServer(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ success: true });
        }, 500);
    });
}
// 非同期関数を含むasync functionの戻り値はPromise型
async function asyncFunc() {
    const result = await fetchFromServer('111');
    return `The result: ${result.success}`;
}
(async () => {
    const result = await asyncFunc();
    console.log("result", result);
})(); // 即値関数
// もしくは
asyncFunc().then(console.log);
