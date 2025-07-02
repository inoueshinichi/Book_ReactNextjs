

// インターフェース
// 型の拡張が可能

interface Point {
    x: number;
    y: number;
}

function printPoint(point: Point) {
    console.log(`x座標は${point.x}です。`)
    console.log(`y座標は${point.y}です。`)
    console.log(`x座標は${point.x}です。`)
}

interface Point {
    z: number;
}

// エラー
// printPoint({ x: 100, y: 100})
printPoint({ x: 100, y: 100, z: 100})

// インターフェースは実装を与えることができる

// 下記はzがないためエラー
// class MyPoint implements Point {
//     x: number;
//     y: number;
// }

class MyPoint implements Point {
    x: number;
    y: number;
    z: number;

    constructor(inX: number, inY: number, inZ: number) {
        this.x = inX
        this.y = inY
        this.z = inZ
    }

    moveX(n: number): void {
        this.x += n
    }

    moveY(n: number): void {
        this.y += n
    }

    moveZ(n: number): void {
        this.z += n
    }
}

const point = new MyPoint(1,1,1)
point.moveX(10)
console.log(`${point.x}, ${point.y}, ${point.z}`)

// インターフェースはextendsを使ってほかのインターフェースを拡張可能
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

// 複数のインターフェースを継承して新たなインターフェースを定義できる
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: "黄色",
    radius: 50
}


// インターフェースは強制を使える
interface IUser {
    name: string;
    age: number;
    sayHello: () => string;
}

class User implements IUser {
    name: string;
    age: number;

    constructor() {
        this.name = ''
        this.age = 0
    }

    sayHello(): string {
        return `こんにちは！私は${this.name}、${this.age}です。`
    }
}

const user = new User()
user.name = "TinyTank"
user.age = 35;
console.log(user.sayHello())


// アクセス修飾子
class BasePoint3D {
    public x: number;
    private y: number;
    protected z: number;

    constructor() {
        this.x = 0
        this.y = 0
        this.z = 0
    }
}

const basePoint = new BasePoint3D()
basePoint.x // OK
// basePoint.y // NG
// basePoint.z // NG

class ChildPoint extends BasePoint3D {
    constructor() {
        super()
        this.x // OK
        // this.y // NG
        this.z // OK
    }
}