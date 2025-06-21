

// プリミティブ型
let age: number = 36
let isDone: boolean = false
let color: string = '青'

// 配列
const array: string[] = []
array.push("TinyTank")
const mixedArray = ['foo', 1] // 型推論
const mixedArrayU: (string|number)[] = ['baz', 2] // Union型
const mixedArrayT: [string, number] = ['biz', 3] // タプル

// オブジェクト
const user: { name: string; age: number } = {
    name: "TinyTank",
    age: 35,
}
console.log(user.name)
console.log(user.age)

// 省略可能なプロパティ(?)
function printName(obj: { firstName: string; lastName?: string }) {
    const { firstName, lastName } = obj
    console.log(firstName)
    if (lastName != null) {
        console.log(lastName)
    } else {
        console.log("lastName is null or undefined")
    }
}
printName({firstName: "tank"})
printName({firstName: "tiny", lastName: "tank"})

// any
let num: any = { randNum: Math.random() }
num.hello()
num()
num.age
/* 静的型チェックを行わない限り, 実行時エラー発生 */

num = 'Hello'
const n: number = num
// Runtime Error


// 関数
function sayHello(name: string): string {
    return `Hello ${name}`
}
sayHello('Tiny')
// オプショナル引数も使える
function sayOps(name: string, greeting?: string): string {
    return `${greeting} ${name}`
}
sayOps('Tiny', 'Hello')
sayOps('Tiny')


// 関数型
function print(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName))
}
print('TinyTank', (name: string) => (`${name}さん`)) // TinyTankさん

// アロー関数の型
let hello = (name: string): string => `Hello ${name}`
console.log(hello('TinyTank'))

function genBirdsInfo(name: string): string[] {
    return name.split(',')
}
console.log(genBirdsInfo('piyo,piyo'))

function singBirds(birdInfo: (x: string) => string[]): string {
    return birdInfo('Hato, Kiji')[0] + ' piyo piyo'
}
console.log(singBirds(genBirdsInfo)) // Hato piyo piyo
// console.log(singBirds('dobato')) // 型が合わない

