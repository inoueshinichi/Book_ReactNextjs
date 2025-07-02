"use strict";
// インターフェース
// 型の拡張が可能
Object.defineProperty(exports, "__esModule", { value: true });
function printPoint(point) {
    console.log(`x座標は${point.x}です。`);
    console.log(`y座標は${point.y}です。`);
    console.log(`x座標は${point.x}です。`);
}
// エラー
// printPoint({ x: 100, y: 100})
printPoint({ x: 100, y: 100, z: 100 });
// インターフェースは実装を与えることができる
// 下記はzがないためエラー
// class MyPoint implements Point {
//     x: number;
//     y: number;
// }
class MyPoint {
    constructor(inX, inY, inZ) {
        this.x = inX;
        this.y = inY;
        this.z = inZ;
    }
    moveX(n) {
        this.x += n;
    }
    moveY(n) {
        this.y += n;
    }
    moveZ(n) {
        this.z += n;
    }
}
const point = new MyPoint(1, 1, 1);
point.moveX(10);
console.log(`${point.x}, ${point.y}, ${point.z}`);
const cc = {
    color: "黄色",
    radius: 50
};
class User {
    constructor() {
        this.name = '';
        this.age = 0;
    }
    sayHello() {
        return `こんにちは！私は${this.name}、${this.age}です。`;
    }
}
const user = new User();
user.name = "TinyTank";
user.age = 35;
console.log(user.sayHello());
// アクセス修飾子
class BasePoint3D {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
}
const basePoint = new BasePoint3D();
basePoint.x; // OK
// basePoint.y // NG
// basePoint.z // NG
class ChildPoint extends BasePoint3D {
    constructor() {
        super();
        this.x; // OK
        // this.y // NG
        this.z; // OK
    }
}
